#region Usings
using Newtonsoft.Json.Linq;
using System.Text;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class MetricQuery : IMetricQuery
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string RefId { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Measurement { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Policy { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string RawQuery { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool UseRawQuery { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Alias { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public FieldList Fields { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public TagList Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public GroupByList GroupBy { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Limit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int SLimit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public OrderByTime Order { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => ToString();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string ToString( Time.Range r = null )
		{
			var res = string.Empty;

			if( UseRawQuery && !string.IsNullOrEmpty( RawQuery ) )
			{
				res = RawQuery;
			}
			else
			{
				var sb = new StringBuilder();

				sb.Append( $"SELECT {Fields?.Build()} FROM {RenderMeasurement( r )}" );

				res = sb.ToString();
			}

			//InfluxDateTimeHelper.GetFilter()

			return res;
		}
		
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private string RenderMeasurement( Time.Range r )
		{
			var meas = ( string.IsNullOrEmpty( Measurement ) ) ? "measurement" : Measurement;

			var rp = ( !string.IsNullOrEmpty( Policy ) && Policy != "default" ) ? $"\"{Policy}\"." : "";

			var root = $"{rp}\"{meas}\"";

			var cond = Tags?.Build() ?? string.Empty;

			var timeFilter = InfluxDateTimeHelper.GetFilter( r );

			if( !string.IsNullOrEmpty( cond ) )
			{
				root = $"{root}	WHERE ({cond}) and {timeFilter}";
			}
			else
			{
				// TODO
				root = $"{root}	WHERE {timeFilter}";
			}

			if( null != GroupBy ) 
			{
				root = GroupBy?.Build( root, r );
			}
	
			if( Order != OrderByTime.Asc )
			{
				root = $"{root} ORDER BY time DESC";
			}

			if( Limit > 0 )
			{
				root = $"{root}	LIMIT {Limit}";
			}

			if( SLimit > 0 )
			{
				root = $"{root}	SLIMIT {SLimit}";
			}

			return root;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum OrderByTime
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Asc,
			/// <summary>
			/// 
			/// </summary>
			Desc
			#endregion
		}
		#endregion
	}
}
