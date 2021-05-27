#region Usings
using Newtonsoft.Json.Linq;
using StackExchange.Redis;
using System.Text;
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.Redis
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
		public string RefId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public CommandType Command{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string Compile( Time.Range r = null ) => string.Empty;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public Task<TimeSeries> ToTask( IDatabase d )
		{
			return Command switch
			{
				CommandType.Get => d
					.StringGetAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HKeys => d
					.HashKeysAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HLen => d
					.HashLengthAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.XRange => d
					.StreamRangeAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				

			_ => null
			};
		}
		#endregion
	}
}
