#region Usings
using ED.DataSources;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDataSource = ED.DataSources.DataSource;
using AlertRules = System.Collections.Generic.List<ED.Data.Alerts.Rule>;
using AlertRule = ED.Data.Alerts.Rule;
using EntityDashboard = ED.Data.Dashboard;
using System.Linq;
using ED.Data.Alerts;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardAnalyzer
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_ID = "id";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_PANELS = "panels";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_WIDGET = "widget";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_ALERT = "alert";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_METRICS = "metrics";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_DATA_SOURCE = "dataSource";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public ModelDashboard Dashboard { get; }
		/// <summary>
		/// 
		/// </summary>
		public DataContext DataContext { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="db"></param>
		public DashboardAnalyzer( DataContext dc, ModelDashboard db ) 
		{
			Dashboard = db;
			DataContext = dc;
		}
		#endregion

		#region Class 'Alert' methods
		/// <summary>
		/// 
		/// </summary>
		public static AlertRules ExtractAlerts( DataContext dc, ModelDashboard db )
			=> new DashboardAnalyzer( dc, db ).ExtractAlerts();
		/// <summary>
		/// 
		/// </summary>
		public static AlertRule ExtractAlert( EvaluationContext c )
			=> ExtractAlert( c.DataContext, c.Dashboard, c.PanelId );
		/// <summary>
		/// 
		/// </summary>
		public static AlertRule ExtractAlert( DataContext dc, ModelDashboard db, int panelId )
		{
			var rule = ExtractAlerts( dc, db)
				.FirstOrDefault( x => x.PanelId == panelId );

			if( null == rule )
				AlertValidationException.ThrowBadPanel();

			return rule;
		}
		/// <summary>
		/// 
		/// </summary>
		public static void UpdateAlerts( DataContext dc,
			ModelDashboard model, EntityDashboard entity )
		{
			if( null == model.Data )
				return;

			var an = new DashboardAnalyzer( dc, model );
			var rules = an.ExtractAlerts();
			
			var alerts = new List<Alert>();

			foreach( var r in rules )
			{
				var alert = entity
					.Alerts?
					.FirstOrDefault( x => x.PanelId == r.PanelId );

				if( null == alert )
				{
					alert = r.ToEntity();
				}
				else
				{
					alert.Update( r );
				}

				alert.OrgId = dc.ActiveOrgId;
				alerts.Add( alert );
			}

			entity.Alerts = alerts;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <returns></returns>
		public AlertRules ExtractAlerts() 
		{
			var data = JObject.Parse( Dashboard.Data );
			var panels = data [ PROP_PANELS ];
			var rules = new List<Rule>();

			if( null == panels )
				return rules;

			foreach( var p in panels ) 
			{
				var panelId = p [ PROP_ID ].Value<int>();
				var jsonAlert = p [ PROP_WIDGET ]? [ PROP_ALERT ];

				if( null == jsonAlert )
					continue;

				var jsonMetrics = p [ PROP_WIDGET ]? [ PROP_METRICS ];
				var dataSource = GetDataSource( jsonMetrics );

				var queries = dataSource.ToQueries( jsonMetrics );

				try
				{
					var rule = jsonAlert
						.ToObject<Rule>()
						.Validate( refId => queries.WithRefId( dataSource.Id, refId ) );

					rule.PanelId = panelId;

					rules.Add( rule );
				}
				catch ( JsonSerializationException e )
				{
					// Hide deserialization details.
					AlertValidationException.ThrowBadDeserialization( e?.InnerException?.Message );
				}
			}

			return rules;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsonMetrics"></param>
		/// <returns></returns>
		private ModelDataSource GetDataSource( JToken jsonMetrics )
		{
			var id = jsonMetrics? [ PROP_DATA_SOURCE ]?.Value<int>();

			if( null == id )
				AlertValidationException.ThrowBadDataSource();

			var dsRes = DataContext.GetRepo<DataSourceRepository>() [ id.Value ];

			if( dsRes.HasError )
				AlertValidationException.ThrowBadDataSource();

			return dsRes.Value;
		}
		#endregion
	}
}
