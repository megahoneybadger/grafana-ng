#region Usings
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System;
#endregion

namespace ED.Drivers.Influx
{
	public class ClientModuleBase
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		protected IInfluxDbRequestClient RequestClient { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		protected IConfiguration Configuration { get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		public ClientModuleBase( IInfluxDbRequestClient requestClient )
		{
			this.RequestClient = requestClient;
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <returns></returns>
		protected virtual async Task<IInfluxDataApiResponse> GetAndValidateQueryAsync( 
			string query, string dbName = null, string epochFormat = null )
		{
			return await RequestAndValidateQueryAsync( query, HttpMethod.Get, dbName, epochFormat ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <returns></returns>
		protected virtual async Task<IInfluxDataApiResponse> PostAndValidateQueryAsync( 
			string query, string dbName = null )
		{
			return await RequestAndValidateQueryAsync( query, HttpMethod.Post, dbName ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="method"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <returns></returns>
		protected virtual async Task<IInfluxDataApiResponse> RequestAndValidateQueryAsync( 
			string query, HttpMethod method, string dbName = null, string epochFormat = null )
		{
			var response = await RequestClient
				.QueryAsync( query, method, dbName, epochFormat )
				.ConfigureAwait( false );

			response.ValidateQueryResponse( this.RequestClient.Configuration.ThrowOnWarning );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		protected virtual async Task<IEnumerable<Serie>> ResolveSingleGetSeriesResultAsync( 
			string query, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var response = await RequestClient
				.GetQueryAsync( query, dbName, epochFormat, chunkSize )
				.ConfigureAwait( false );

			if( chunkSize == null )
				return this.ResolveSingleGetSeriesResult( response );
			else
				return this.ResolveSingleGetSeriesResultChunked( response );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		protected virtual async Task<IEnumerable<SeriesResult>> ResolveGetSeriesResultAsync( string query, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var response = await this.RequestClient.GetQueryAsync( query, dbName, epochFormat, chunkSize ).ConfigureAwait( false );

			if( chunkSize == null )
				return this.ResolveGetSeriesResult( response );
			else
				return this.ResolveGetSeriesResultChunked( response );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <returns></returns>
		protected virtual IEnumerable<Serie> ResolveSingleGetSeriesResult( IInfluxDataApiResponse response )
		{
			var queryResponse = response.ReadAs<QueryResponse>().Validate( this.RequestClient.Configuration.ThrowOnWarning );
			var result = queryResponse.Results.Single();
			Validate.IsNotNull( result, "result" );

			var series = result.Series != null ? result.Series.ToList() : new List<Serie>();

			return series;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <returns></returns>
		protected virtual IEnumerable<Serie> ResolveSingleGetSeriesResultChunked( IInfluxDataApiResponse response )
		{
			string [] responseBodies = SplitChunkedResponse( response );
			var series = new List<Serie>();

			foreach( var responseBody in responseBodies )
			{
				var queryResponse = responseBody.ReadAs<QueryResponse>().Validate( this.RequestClient.Configuration.ThrowOnWarning );
				var result = queryResponse.Results.Single();
				Validate.IsNotNull( result, "result" );

				if( result.Series != null )
				{
					series.AddRange( result.Series.ToList() );
				}
			}

			return series;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <returns></returns>
		protected virtual IEnumerable<SeriesResult> ResolveGetSeriesResult( IInfluxDataApiResponse response )
		{
			return response
				.ReadAs<QueryResponse>()
				.Validate( this.RequestClient.Configuration.ThrowOnWarning )
				.Results;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <returns></returns>
		protected virtual IEnumerable<SeriesResult> ResolveGetSeriesResultChunked( IInfluxDataApiResponse response )
		{
			string [] responseBodies = SplitChunkedResponse( response );
			var results = new List<SeriesResult>();

			foreach( var responseBody in responseBodies )
			{
				var queryResponse = responseBody.ReadAs<QueryResponse>().Validate( this.RequestClient.Configuration.ThrowOnWarning );

				if( queryResponse.Results != null )
				{
					results.AddRange( queryResponse.Results );
				}
			}

			return results;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <returns></returns>
		protected virtual string [] SplitChunkedResponse( IInfluxDataApiResponse response )
		{
			//Split response body for individual chunks
			return response.Body.Split( new char [] { '\n' }, StringSplitOptions.RemoveEmptyEntries );
		}
		#endregion
	}
}
