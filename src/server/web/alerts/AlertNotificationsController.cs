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
using ED.Security;
using ModelAlertNotification = ED.Alerts.AlertNotification;
using ModelAlertNotifications = System.Collections.Generic.List<ED.Alerts.AlertNotification>;
#endregion

namespace ED.Web.Alerts
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/alerting_notification_channels/
	/// </summary>
	[Authenticate]
	[Route( "api/alert-notifications" )]
	public class AlertNotificationsController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public AlertNotificationRepository Repo => GetRepo<AlertNotificationRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public AlertNotificationsController( IHttpContextAccessor accessor, DataContext dc )
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
		public IActionResult GetNotifications() =>
			Repo
				.All
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "lookup" )]
		public IActionResult GetNotificationsLookup() =>
			Repo
				.All
				.ToActionResult( x => ToGetAlertNotsLookupReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}" )]
		public IActionResult GetNotification( int id) =>
			Repo [ id ].ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "uid/{uid}" )]
		public IActionResult GetNotification( string uid ) =>
			Repo[ uid ].ToActionResult();
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( Role.Admin )]
		public IActionResult Create( ModelAlertNotification nt ) =>
			Repo
				.Create( nt )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}", Role.Admin )]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id)
				.ToActionResult( x => new { Message = "Notification deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "uid/{uid}", Role.Admin )]
		public IActionResult Delete( string uid ) =>
			Repo
				.Delete( uid )
				.ToActionResult( x => new { Message = "Notification deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}", Role.Admin )]
		public IActionResult Update( int id, ModelAlertNotification nt ) =>
			Repo
				.Update( id, nt )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "uid/{uid}", Role.Admin )]
		public IActionResult Update( string uid, ModelAlertNotification nt ) =>
			Repo
				.Update( uid, nt )
				.ToActionResult();
		#endregion

		#region Class 'Test' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( "test", Role.Admin )]
		public async Task<IActionResult> Test( ModelAlertNotification nt ) =>
			(await DataContext
				.AlertNotificationDispatcher
				.Test( nt ))
				.ToActionResult( x => new { Message = "Test notification sent" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetAlertNotsLookupReply( OperationResult<ModelAlertNotifications> op )
		{
			return op
				.Value
				.Select( x => new 
				{
					x.Id,
					x.Uid,
					x.Name,
					x.Type,
					x.IsDefault
				} )
				.ToList();
		}
		#endregion
	}
}