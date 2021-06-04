#region Usings
using ED.Time;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Threading.Tasks;
using QueryProvider = System.Func<string, (int, ED.DataSources.IMetricQuery)>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class Query
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Target { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string From { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string To { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DataSourceId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Body { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Time.Range Range => new( $"{DateTimeMathParser.NOW}-{From}", To );
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"query({Target}, {From}, {To})";
		}
		/// <summary>
		/// 
		/// </summary>
		public void Validate( QueryProvider qp )
		{
			if( !DateTimeMathParser.IsValid( $"now-{From}" ) )
				AlertValidationException.ThrowBadParseFrom();

			if( !DateTimeMathParser.IsValid( To ) )
				AlertValidationException.ThrowBadParseTo();

			var q = qp.Invoke( Target );

			DataSourceId = q.Item1;
			var metricQuery = q.Item2;

			if( null == metricQuery )
				AlertValidationException.ThrowBadQueryRef();

			Body = JsonConvert.SerializeObject( metricQuery, Formatting.Indented );
		}
		#endregion
	}
	
}
