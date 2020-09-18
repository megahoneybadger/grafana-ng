#region Usings
using ED.Alerts;
using ED.Time;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using ModelAlert = ED.Alerts.Alert;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class EvalMatch
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public double? Value { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Metric { get; set; }
		/// <summary>
		/// Serie tags.
		/// </summary>
		public IDictionary<string, string> Tags { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="metric"></param>
		/// <param name="v"></param>
		/// <param name="tags"></param>
		public EvalMatch( string metric, double? v, IDictionary<string, string> tags = null )
		{
			Metric = metric;
			Value = v;
			Tags = tags?.ToDictionary( x => x.Key, x => x.Value );
		}
		#endregion
	}
}
