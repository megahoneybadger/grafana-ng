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

namespace ED.Web.Plugins
{
	/// <summary>
	/// 
	/// </summary>
	[Authenticate]
	[Route( "api/plugins" )]
	public class PluginsController : BaseController
	{
		#region Class properties

		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public PluginsController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{type}/settings" )]
		public IActionResult GetSetting( string _ )
		{
			var res = new
			{
				id = "influxdb",
				name = "InfluxDB",
				module = "influx/bundles/influx.umd.min.js",
				type="datasource",
				info = new 
				{
					description = "InfluxDB Data Source for Grafana",
					version = "5.0.0",
					logos = new 
					{
						large = "influx/img/logo.svg",
						small = "influx/img/logo.svg",
					}
				}
			};

			return new OkObjectResult( res );
		}
		#endregion
	}
}