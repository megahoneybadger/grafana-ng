#region Usings
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ModelAlert = ED.Alerts.Alert;
using ModelAlerts = System.Collections.Generic.List<ED.Alerts.Alert>;
using ModelAlertNotification = ED.Alerts.AlertNotification;
using ModelAlertNotifications = System.Collections.Generic.List<ED.Alerts.AlertNotification>;
using log4net;
using ED.Configuration;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertManager 
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const int INTERVAL = 1000;
		#endregion

		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly Timer _timer;
		/// <summary>
		/// 
		/// </summary>
		private readonly object _syncObject;
		/// <summary>
		/// 
		/// </summary>
		private ModelAlerts _alerts;
		/// <summary>
		/// 
		/// </summary>
		private readonly Dictionary<int, TimeLabel> _dictTime;
		/// <summary>
		/// 
		/// </summary>
		private readonly Thread _threadProcessor;
		/// <summary>
		/// 
		/// </summary>
		private bool _bRun = true;
		/// <summary>
		/// 
		/// </summary>
		private readonly Queue<ModelAlert> _queueRules;
		/// <summary>
		/// 
		/// </summary>
		private AlertNotificationDispatcher _notificator;
		/// <summary>
		/// 
		/// </summary>
		private Config _config;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "alert-manager" );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public AlertManager( AlertNotificationDispatcher d, Config c ) 
		{
			_config = c;

			if( !c.Alerting.Enabled ) 
			{
				Logger.Info( "Alert rule evaluation was disabled" );
				return;
			}

			_notificator = d;

			_syncObject = new object();
			_alerts = new ModelAlerts();
			_queueRules = new Queue<ModelAlert>();

			_timer = new Timer( x => Analyze(), null, Timeout.Infinite, Timeout.Infinite );
			_dictTime = new Dictionary<int, TimeLabel>();

			_threadProcessor = new Thread( OnProcessorThread )
			{
				IsBackground = true
			};

			_threadProcessor.Start();

			Logger.Info( "Initialized" );

			Reload();
		}
		/// <summary>
		/// 
		/// </summary>
		public void Reload() 
		{
			try
			{
				new AlertRepository( new DataContext( _config ) )
					.ReadAllAsync()
					.ContinueWith( x =>
					{
						lock( _syncObject )
						{
							_alerts = x
								.Result
								?.Value
								?.Where( x => x.State != ED.Alerts.AlertState.Paused )
								.ToList() ?? new ModelAlerts();

							RechargeTime( 0 );

							var listToRemove = new List<int>();

							foreach( var pair in _dictTime )
							{
								var a = _alerts.FirstOrDefault( x => x.Id == pair.Key );

								if( null == a || pair.Value.Frequency != a.Frequency )
								{
									listToRemove.Add( pair.Key );
								}
							}

							Logger.Debug( $"Reload alert rules: {_alerts.Count}" );

							listToRemove.ForEach( x =>
							{
								Logger.Debug( $"Alert rule [{x}] was marked obsolete" );

								_dictTime.Remove( x );
							} );
						}
					} );
			}
			catch { }
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public async Task<OperationResult<EvaluationContext>> Eval( EvaluationContext c ) 
		{
			try
			{
				await c.ExtractAlertAsync();

				await c.EvalAsync();
			}
			catch( Exception e )
			{
				c.Error = e;
			}

			return OperationResult<EvaluationContext>.Create( c );
		}
		#endregion

		#region Class event handlers
		/// <summary>
		/// 
		/// </summary>
		private void RechargeTime( int interval = INTERVAL )
			=> _timer.Change( interval, Timeout.Infinite );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="alerts"></param>
		private void Analyze() 
		{
			lock( _syncObject ) 
			{
				if( null == _alerts || 0 == _alerts.Count )
					return;

				try
				{
					//Logger.Debug( $"alert analysis:" );
					//Debug.WriteLine( $"alert analysis: {++_index}" );

					_alerts.ForEach( x => Analyze( x ) );
				}
				finally
				{
					RechargeTime();
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="a"></param>
		private void Analyze( ModelAlert a ) 
		{
			try
			{
				var exists = _dictTime.TryGetValue( a.Id, out TimeLabel label );

				if( exists )
				{
					if( ( DateTime.Now - label.Time ).TotalSeconds >= a.Frequency )
					{
						_dictTime [ a.Id ].Time = DateTime.Now;

						_queueRules.Enqueue( a );
						Monitor.Pulse( _syncObject );
					}
				}
				else 
				{
					_dictTime [ a.Id ] = new TimeLabel( DateTime.Now, a.Frequency );
				}
			}
			catch 
			{ }
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="state"></param>
		private void OnProcessorThread( object state ) 
		{
			while( true )
			{
				ModelAlert r = null;

				lock( _syncObject )
				{
					if( !_bRun )
						break;

					if( _queueRules.Count > 0 )
					{
						r = _queueRules.Dequeue();
					}
					else
					{
						Monitor.Wait( _syncObject );
					}
				}

				if( null != r ) 
				{
					Task.Run( () => Eval( r ) );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		private async void Eval( ModelAlert a ) 
		{
			var context = new EvaluationContext() 
			{
				AlertId = a.Id,
				Rule = JsonConvert.DeserializeObject<Rule>( a.Settings ),
				DataContext = new DataContext( _config ) { ActiveOrgId = a.OrgId },
				PrevAlertState = a.State,
				PanelId = a.PanelId,
				DashboardId = a.DashboardId,
				Dashboard = a.Dashboard,

				LastStateChangeTime = a.NewStateDate
			};

			var alertId = $"[{a.Id}][{context.Rule.Name}]";

			Logger.Debug( $"Start alert rule evaluation: {alertId}" );

			await context.EvalAsync();

			if( a.State != context.State )
			{
				a.State = context.State;
				a.NewStateDate = DateTime.Now;

				var res = await context
					.GetRepo()
					.UpdateAsync( context );

				Logger.Debug( $"Alert {alertId} state changed: {context.State}" );

				_notificator.Enqueue( context );

				if( res.HasError )
				{
					Logger.Debug( $"Alert {alertId} evaluation failed: {res.Error.Message}" );
				}
			}
			else
			{
				Logger.Debug( $"Alert {alertId} state did not change: {context.State} " );
			}
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class TimeLabel 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public DateTime Time { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int Frequency { get; set; }
			#endregion

			#region Class initialization
			/// <summary>
			/// 
			/// </summary>
			/// <param name="dt"></param>
			/// <param name="f"></param>
			public TimeLabel( DateTime dt, int f ) 
			{
				Time = dt;
				Frequency = f;
			}
			#endregion
		}
		#endregion
	}
}
