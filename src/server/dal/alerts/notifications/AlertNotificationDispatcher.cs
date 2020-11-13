#region Usings
using ED.Configuration;
using log4net;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ModelAlertNotification = ED.Alerts.AlertNotification;
using ModelAlertNotifications = System.Collections.Generic.List<ED.Alerts.AlertNotification>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotificationDispatcher
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly object _syncObject;
		/// <summary>
		/// 
		/// </summary>
		private ModelAlertNotifications _notifications;
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
		private readonly Queue<EvaluationContext> _queue;
		/// <summary>
		/// 
		/// </summary>
		private Config _config;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "notification-dispatcher" );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public AlertNotificationDispatcher( Config c ) 
		{
			if( !c.Alerting.Enabled )
				return;

			_config = c;

			_syncObject = new object();
			_notifications = new ModelAlertNotifications();

			_threadProcessor = new Thread( OnProcessorThread )
			{
				IsBackground = true
			};

			_threadProcessor.Start();

			_queue = new Queue<EvaluationContext>();

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
				new AlertNotificationRepository( new DataContext() )
					.ReadAllAsync()
					.ContinueWith( x =>
					{
						lock( _syncObject )
						{
							_notifications = x
								.Result
								.Value
								.ToList() ?? new ModelAlertNotifications();

							Logger.Debug( $"Reload alert notifications: {_notifications.Count}" );
						}
					} );
			}
			catch 
			{}
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		public void Enqueue( EvaluationContext c ) 
		{
			lock( _syncObject ) 
			{
				_queue.Enqueue( c );

				Monitor.Pulse( _syncObject );
			}
		}
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
		/// <returns></returns>
		public async Task<OperationResult<bool>> Test( ModelAlertNotification nt ) 
		{
			var c = new EvaluationContext() 
			{
				Rule = new Rule() 
				{
					Message = "Someone is testing the alert notification within easy dashboard.",
					Name = "Test notification"
				},

				State = ED.Alerts.AlertState.Alerting,
				PanelId = 1,
				IsTestRun = true,
				Matches = new List<EvalMatch>() 
				{
					new EvalMatch( "Low value", 100 ),
					new EvalMatch( "High value", 200 ),
				}
			};

			var res = await Send( c, nt );
		
			return OperationResult<bool>.Create( 
				() => res, true, ErrorCode.BadTestAlertNotification );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="state"></param>
		private void OnProcessorThread( object state ) 
		{
			while( true )
			{
				EvaluationContext c = null;

				lock( _syncObject )
				{
					if( !_bRun )
						break;
				
					if( _queue.Count > 0 )
					{
						c = _queue.Dequeue();
					}
					else
					{
						Monitor.Wait( _syncObject );
					}
				}

				if( null != c ) 
				{
					Task.Run( () => Send( c ) );
				}

				Task.Run( () => CleanUp() );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		private void Send( EvaluationContext c ) 
		{
			if( 0 == c.Rule.Notifications?.Length )
				return;

			ModelAlertNotifications nots = null;

			lock( _syncObject ) 
			{
				nots = _notifications
					.Where( x => null != c.Rule.Notifications )
					.Where( x => c.Rule.Notifications.Contains( x.Id ) )
					.Select( x => x.Copy() )
					.ToList();
			}

			Parallel.ForEach( nots, async n => await Send( c, n ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <param name="n"></param>
		private async Task<bool> Send( EvaluationContext c, ModelAlertNotification n ) 
		{
			if( n.DisableResolveMessage && c.State == ED.Alerts.AlertState.Ok )
				return false;

			if( n.IncludeImage ) 
			{
				await RenderImage( c );
			}

			using var client = new HttpClient();

			var cmd = n.Build( c );

			var sw = Stopwatch.StartNew();
			
			var response = await client.PostAsync( cmd.Url, cmd.Body );

			sw.Stop();
			Logger.Debug( $"Sent notification: {cmd.Url} [{response.StatusCode}][{sw.ElapsedMilliseconds}ms]" );

			return ( ( ( int )response.StatusCode ) / 100 == 2 );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <param name="n"></param>
		/// <returns></returns>
		private async Task RenderImage( EvaluationContext c ) 
		{
			try
			{
				var options = new Renderer.Options
				{
					FileName = Path.Combine( _config.Paths.Images,
							$"{TestFactory.GetRandomString( 10 )}.png" ),
				};

				if( c.IsTestRun )
				{
					await Renderer.RenderStubImage( options );
				}
				else 
				{
					options.Url = $"http://localhost:4200/d/{c.Dashboard.Uid}/{c.Dashboard.Title.GenerateSlug()}";
					options.PanelId = c.PanelId;
					options.JwtToken = _config
						.Alerting
						.JwtGenerator
						?.Invoke( c.Dashboard.OrgId );

					await Renderer.Render( options );
				}

				c.ImagePath = options.FileName;
			}
			catch
			{ }
		}
		/// <summary>
		/// 
		/// </summary>
		private void CleanUp() 
		{
			Directory
				.GetFiles( _config.Paths.Images, "*.png" )
				.ToList()
				.Where( x => ( DateTime.Now - new FileInfo( x ).CreationTime ).TotalMinutes > 10 )
				.ToList()
				.ForEach( x => 
				{
					try
					{
						File.Delete( x );
					}
					catch { }
				}  );
		}
		#endregion
	}
}
