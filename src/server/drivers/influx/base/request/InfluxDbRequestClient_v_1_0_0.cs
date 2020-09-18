#region Usings
using System.Net.Http;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class InfluxDbRequestClient_v_1_0_0 : InfluxDbRequestClient
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		public InfluxDbRequestClient_v_1_0_0( IInfluxDbClientConfiguration configuration )
				: base( configuration )
		{
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="method"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public override async Task<IInfluxDataApiResponse> QueryAsync( string query,
			HttpMethod method, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var requestParams = RequestParamsBuilder.BuildQueryRequestParams( query, dbName, epochFormat, chunkSize );

			return await base.RequestAsync( method, RequestPaths.Query, requestParams ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override IPointFormatter GetPointFormatter()
		{
			return new PointFormatter_v_1_0_0();
		}
		#endregion
	}
}