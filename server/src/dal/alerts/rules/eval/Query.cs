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
		public Time.Range Range => new Time.Range( $"{DateTimeMathParser.NOW}-{From}", To );
		/// <summary>
		/// 
		/// </summary>
		internal (long From, long To) RangeAsEpoch 
		{
			get 
			{
				var r = Range;

				var from = ( ( DateTimeOffset )DateTimeMathParser
					.ToDateTime( r.From ) )
					.ToUnixTimeMilliseconds();

				var to = ( ( DateTimeOffset )DateTimeMathParser
					.ToDateTime( r.To ) )
					.ToUnixTimeMilliseconds();

				return (from, to);
			}
		}
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
