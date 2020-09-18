#region Usings
using ED.Alerts;
using ED.Time;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using static ED.Alerts.IEvaluationContext;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class EvaluationContext : IEvaluationContext
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private Exception _error;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool Firing { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsTestRun { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsDebug { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<EvalMatch> Matches { get; set; } = new List<EvalMatch>();
		/// <summary>
		/// 
		/// </summary>
		public List<LogEntry> Logs { get; set; } = new List<LogEntry>();
		/// <summary>
		/// 
		/// </summary>
		public Exception Error 
		{
			get 
			{
				return _error;
			}
			set 
			{
				_error = value;

				EndTime = DateTime.Now;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime StartTime { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime EndTime { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Rule Rule { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool NoDataFound { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ConditionEvals { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AlertState PrevAlertState { get; set; } = AlertState.Unknown;
		/// <summary>
		/// 
		/// </summary>
		public AlertState State { get; set; } = AlertState.Unknown;
		/// <summary>
		/// 
		/// </summary>
		public DateTime? LastStateChangeTime { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ImagePath { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public ModelDashboard Dashboard { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DataContext DataContext { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public double Duration => ( EndTime - StartTime ).TotalMilliseconds;
		/// <summary>
		/// 
		/// </summary>
		public int AlertId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public NotificationReport Notification 
		{
			get 
			{
				return  new NotificationReport() 
				{
					Title = $"[{State}] {Rule.Name}",
					Message = Rule.Message,
					ImagePath = ImagePath,
					Matches = Matches
						.Select( x => ( x.Metric, x.Value ) )
						.ToList()
				};
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public EvaluationContext() 
		{
			StartTime = DateTime.Now;
		}
	

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Rule?.Name}: firing [{Firing}], state [{State}], dur [{Duration}ms]";
		}
		#endregion

		#region Class 'Eval' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public async Task EvalAsync()
		{
			try
			{
				var firing = true;
				var noDataFound = true;
				var conditionEvals = string.Empty;

				for( int i = 0; i < Rule.Conditions.Length; ++i )
				{
					var cond = Rule.Conditions [ i ];
					cond.Index = i;

					var cr = await cond.Eval( this );

					if( 0 == i )
					{
						firing = cr.Firing;
						noDataFound = cr.NoDataFound;
					}

					if( cr.Operator == Operator.Or )
					{
						firing = firing || cr.Firing;
						noDataFound = noDataFound || cr.NoDataFound;
					}
					else
					{
						firing = firing && cr.Firing;
						noDataFound = noDataFound && cr.NoDataFound;
					}

					conditionEvals = ( i > 0 ) ?
						$"[{conditionEvals} {cr.Operator.ToString().ToUpper()} {cr.Firing.ToString().ToLower()}]" :
						firing.ToString().ToLower();

					Matches.AddRange( cr.Matches );
				}

				ConditionEvals = $"{conditionEvals} = {firing.ToString().ToLower()}";
				Firing = firing;
				NoDataFound = noDataFound;
			}
			catch( Exception e )
			{
				Error = e;
			}
			finally
			{
				EndTime = DateTime.Now;
				State = GetNewState();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private AlertState GetNewState()
		{
			var ns = GetPreliminaryState();

			var forDuration = DateTimeMathParser.ToDuration( Rule?.For, TimeUnit.Second );
			var noForDuration = ( !forDuration.HasValue || forDuration == 0 );

			if( ns != AlertState.Alerting || noForDuration )
				return ns;	

			if( LastStateChangeTime.HasValue ) 
			{
				var since = ( ulong )( DateTime.Now - LastStateChangeTime.Value ).Seconds;

				if( PrevAlertState == AlertState.Pending && since >= forDuration.Value )
					return AlertState.Alerting;
			}

			return ( PrevAlertState == AlertState.Alerting ) ? AlertState.Alerting : AlertState.Pending;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private AlertState GetPreliminaryState()
		{
			if( null != Error )
			{
				//c.log.Error( "Alert Rule Result Error",
				//	"ruleId", c.Rule.ID,
				//	"name", c.Rule.Name,
				//	"error", c.Error,
				//	"changing state to", c.Rule.ExecutionErrorState.ToAlertState() )

				return Rule.ErrorOption switch
				{
					Rule.ErrorOptions.Alerting => AlertState.Alerting,
					_ => PrevAlertState,
				};
			}

			if( Firing )
				return AlertState.Alerting;

			if( NoDataFound )
			{
				//		c.log.Info( "Alert Rule returned no data",
				//"ruleId", c.Rule.ID,
				//"name", c.Rule.Name,
				//"changing state to", c.Rule.NoDataState.ToAlertState() )

				return Rule.NoDataOption switch
				{
					Rule.NoDataOptions.Alerting => AlertState.Alerting,
					Rule.NoDataOptions.Ok => AlertState.Ok,
					Rule.NoDataOptions.NoData => AlertState.NoData,
					_ => PrevAlertState,
				};
			}

			return AlertState.Ok;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		internal AlertRepository GetRepo() => new AlertRepository( DataContext );
		/// <summary>
		/// 
		/// </summary>
		internal async Task ExtractAlertAsync()
		{
			Rule = DashboardAnalyzer.ExtractAlert( this );

			var alertRes = await GetRepo().ReadAsync( Dashboard.Id, PanelId );

			if( alertRes.HasError )
			{
				PrevAlertState = AlertState.Unknown;
			}
			else 
			{
				var a = alertRes.Value;
				PrevAlertState = a.State;
				AlertId = a.Id;
				LastStateChangeTime = a.NewStateDate;
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsonMetrics"></param>
		/// <returns></returns>
		public ModelDataSource GetDataSource( int dataSourceId )
		{
			var dsRes = DataContext.GetRepo<DataSourceRepository>() [ dataSourceId ];

			if( dsRes.HasError )
				AlertValidationException.ThrowBadDataSource();

			return dsRes.Value;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="message"></param>
		/// <param name="data"></param>
		public void Log( string message, object data = null )
		{
			Logs.Add( new LogEntry()
			{
				Message = message,
				Data = data
			} );
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class LogEntry 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Message { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public object Data { get; set; }
			#endregion
		}
		#endregion
	}
}
