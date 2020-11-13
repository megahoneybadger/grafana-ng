#region Usings
using ED.Alerts;
using ED.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using ModelAlert = ED.Alerts.Alert;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelAlerts = System.Collections.Generic.List<ED.Alerts.Alert>;
using Newtonsoft.Json;
using System.Threading.Tasks;
using ED.Data.Alerts;
using ED.Web.Dashboards;
#endregion

namespace ED.Web.Alerts
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/alerts/
	/// </summary>
	[Authenticate]
	[Route( "api/alerts" )]
	public class AlertsController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public AlertRepository Repo => GetRepo<AlertRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public AlertsController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{
			
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetAlerts( [FromQuery] SearchRequest r ) =>
			Repo
				.Search( r.ToFilter() )
				.ToActionResult( x => ToGetAlertsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}" )]
		public IActionResult GetAlert( int id ) =>
			Repo[ id ].ToActionResult( x => ToGetAlertReply( x.Value ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "states-for-dashboard/{dashboardId}" )]
		public IActionResult GetStates( int dashboardId ) =>
			Repo
			.GetStates( dashboardId )
			.ToActionResult( x => ToGetStatesReply( x ) );
		#endregion

		#region Class 'Pause' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpPost( "{id}/pause" )]
		public IActionResult Pause( int id ) =>
			Repo
				.Pause( id )
				.ToActionResult( x => ToPauseAlertReply( x ) );
		#endregion

		#region Class 'Test' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpPost( "test" )]
		public async Task<IActionResult> Evaluate( AlertEvalRequest r ) =>
			( await DataContext
				.AlertManager
				.Eval( r.ToContext( DataContext ) ) )
				.ToActionResult( x => ToTestAlertReply( x ) );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetAlertsReply( OperationResult<ModelAlerts> op )
		{
			return op
				.Value
				.Select( x => ToGetAlertReply( x ))
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetAlertReply( ModelAlert x )
		{
			return new
			{
				x.Id,
				x.DashboardId,
				x.DashboardUid,
				x.Bag.DashboardTitle,
				x.PanelId,
				x.Name,
				State = x.State.ToString(),
				x.NewStateDate,
				EvalData = x.Settings.GetDataAsJsonElement(),
				Url = $"/d/{x.DashboardUid}/{(( string )x.Bag.DashboardTitle).GenerateSlug()}"
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToTestAlertReply( OperationResult<EvaluationContext> op ) 
		{
			var v = op.Value;

			return new 
			{
				v.Firing,
				op.Value.State,
				v.ConditionEvals,
				TimeMs = $"{( v.EndTime - v.StartTime ).TotalMilliseconds}ms",
				Error = v.Error?.Message,
				Matches = ( 0 == v.Matches.Count ) ? null : v.Matches,
				Logs = ( 0 == v.Logs.Count ) ? null : v.Logs,
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetStatesReply( OperationResult<ModelAlerts> op )
		{
			return op
				.Value
				.Select( x => new
				{
					x.DashboardId,
					x.Id,
					x.PanelId,
					x.NewStateDate,
					x.State
				})
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToPauseAlertReply( OperationResult<AlertState> op )
		{
			return new
			{
				State = op.Value,
				Message = ( op.Value == AlertState.Paused ) ?
					$"Alert paused" : "Alert un-paused"
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class SearchRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int? PanelId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public AlertSearchFilter.Kind? State { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[BindProperty( Name = "folderId" )]
			public IEnumerable<int> FolderIds { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[BindProperty( Name = "dashboardId" )]
			public IEnumerable<int> DashboardIds { get; set; }
			
			
			/// <summary>
			/// 
			/// </summary>
			public string Query { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string DashboardQuery { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[BindProperty( Name = "dashboardTag" )]
			public IEnumerable<string> DashboardTags { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int? Limit { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public AlertSearchFilter ToFilter()
			{
				return new AlertSearchFilter()
				{
					PanelId = PanelId,
					Query = Query ?? string.Empty,
					DashboardQuery = DashboardQuery ?? string.Empty,
					DashboardTags = DashboardTags,
					State = State,

					//Tags = Tags,
					FolderIds = FolderIds,
					DashboardIds = DashboardIds,
					Limit = Limit

				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class AlertEvalRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public DashboardsController.Dashboard Dashboard { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int PanelId { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public EvaluationContext ToContext( DataContext dc ) 
			{
				var model = new ModelDashboard()
				{
					Id = Dashboard.Id.HasValue ? Dashboard.Id.Value : 0,
					Title = Dashboard.Title,
					Uid = Dashboard.Uid,
					Tags = Dashboard.Tags,
					Data = Dashboard.Data?.ToString(),
					OrgId = dc.ActiveOrgId
				};

				return new EvaluationContext()
				{
					IsTestRun = true,
					IsDebug = true,

					Dashboard = model,
					PanelId = PanelId,
					DataContext = dc
				};
			}
			#endregion
		}
		#endregion
	}
}