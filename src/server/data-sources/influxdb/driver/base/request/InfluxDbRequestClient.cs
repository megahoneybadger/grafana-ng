#region Usings
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

#endregion

namespace ED.Drivers.Influx
{
	public class InfluxDbRequestClient :
		RequestClientBase,
		IInfluxDbRequestClient
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private IInfluxDbClientConfiguration _influxDbConfiguration;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		public InfluxDbRequestClient( IInfluxDbClientConfiguration configuration )
				: base( configuration, "InfluxData.Net.InfluxDb" )
		{
			_influxDbConfiguration = configuration;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> GetQueryAsync( string query,
			string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			return await QueryAsync( query, HttpMethod.Get, dbName, epochFormat, chunkSize ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> PostQueryAsync( string query, string dbName = null )
		{
			return await QueryAsync( query, HttpMethod.Post, dbName ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="writeRequest"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> PostAsync( WriteRequest writeRequest )
		{
			var requestParams = RequestParamsBuilder.BuildRequestParams(
					writeRequest.DbName,
					QueryParams.Precision, writeRequest.Precision,
					QueryParams.RetentionPolicy, writeRequest.RetentionPolicy
			);
			var httpContent = new StringContent( writeRequest.GetLines(), Encoding.UTF8, "text/plain" );

			var result = await base.RequestAsync( HttpMethod.Post,
				RequestPaths.Write, requestParams, httpContent ).ConfigureAwait( false );

			return new InfluxDataApiWriteResponse( result.StatusCode, result.Body );
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="method"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> QueryAsync( string query,
			HttpMethod method, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			if( _influxDbConfiguration.QueryLocation == QueryLocation.Uri )
			{
				return await QueryUriAsync( query,
					method, dbName, epochFormat, chunkSize ).ConfigureAwait( false );
			}
			else
			{
				return await QueryFormDataAsync( query,
					HttpMethod.Post, dbName, epochFormat, chunkSize ).ConfigureAwait( false );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="method"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		protected virtual async Task<IInfluxDataApiResponse> QueryUriAsync( string query,
			HttpMethod method, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var requestParams = RequestParamsBuilder.BuildQueryRequestParams( query, dbName, epochFormat, chunkSize );

			return await base.RequestAsync( method, RequestPaths.Query, requestParams ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="method"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		protected virtual async Task<IInfluxDataApiResponse> QueryFormDataAsync( string query,
			HttpMethod method, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var requestParams = RequestParamsBuilder.BuildRequestParams( dbName, epochFormat, chunkSize );
			var httpContent = query.ToMultipartHttpContent( QueryParams.Query );

			return await RequestAsync( method, RequestPaths.Query,
				requestParams, httpContent ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual IPointFormatter GetPointFormatter()
		{
			return new PointFormatter();
		}
		#endregion
	}
}