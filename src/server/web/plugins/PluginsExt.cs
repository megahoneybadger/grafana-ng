#region Usings
using ED.Plugins;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public static class PluginsExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IActionResult ToActionResult( this IEnumerable<Plugin> list ) 
		{
			var res = list
				.Select( x => new
				{
					x.Id,
					x.Name,
					x.Type,
					x.BaseUrl,
					x.Info,
					x.Module
				} )
				.ToList();

			return new OkObjectResult( res );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IActionResult ToActionResult( this Plugin p )
		{
			if( null == p )
				return new StatusCodeResult( StatusCodes.Status404NotFound );

		
			//	module = "influx/bundles/influx.umd.min.js",
			//	info = new
			//	{
			//		description = "InfluxDB Data Source for Grafana",
			//		version = "5.0.0",
			//		logos = new
			//		{
			//			large = "influx/img/logo.svg",
			//			small = "influx/img/logo.svg",
			//		}
			//	}

			var res = new
			{
				p.Id,
				p.Name,
				p.Type,
				p.Module,
				p.Info
			};

			return new OkObjectResult( res );
		}
		#endregion
	}
}
