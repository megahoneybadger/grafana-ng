#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class BasicClientModule : ClientModuleBase, IBasicClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IBasicResponseParser _basicResponseParser;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="basicResponseParser"></param>
		public BasicClientModule( IInfluxDbRequestClient requestClient, IBasicResponseParser basicResponseParser )
				: base( requestClient )
		{
			_basicResponseParser = basicResponseParser;
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
		public virtual async Task<IEnumerable<Serie>> QueryAsync( string query,
			string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName, epochFormat, chunkSize ).ConfigureAwait( false );

			return series;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="queries"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<Serie>> QueryAsync( IEnumerable<string> queries,
			string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var results = await base.ResolveGetSeriesResultAsync( queries.ToSemicolonSpaceSeparatedString(), dbName, epochFormat, chunkSize ).ConfigureAwait( false );
			var series = _basicResponseParser.FlattenResultsSeries( results );

			return series;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="queryTemplate"></param>
		/// <param name="parameters"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<Serie>> QueryAsync( string queryTemplate, 
			object parameters, string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var query = queryTemplate.BuildQuery( parameters );

			return await this.QueryAsync( query, dbName, epochFormat, chunkSize );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="queries"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<IEnumerable<Serie>>> MultiQueryAsync( IEnumerable<string> queries,
			string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var results = await base.ResolveGetSeriesResultAsync( queries.ToSemicolonSpaceSeparatedString(), dbName, epochFormat, chunkSize ).ConfigureAwait( false );
			var resultSeries = _basicResponseParser.MapResultsSeries( results );

			return resultSeries;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="point"></param>
		/// <param name="dbName"></param>
		/// <param name="retentionPolicy"></param>
		/// <param name="precision"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> WriteAsync( Point point, string dbName = null, string retentionPolicy = null, string precision = TimeUnit.Milliseconds )
		{
			var response = await WriteAsync( new [] { point }, dbName, retentionPolicy, precision ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="points"></param>
		/// <param name="dbName"></param>
		/// <param name="retentionPolicy"></param>
		/// <param name="precision"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> WriteAsync( IEnumerable<Point> points, string dbName = null, string retentionPolicy = null, string precision = TimeUnit.Milliseconds )
		{
			var request = new WriteRequest( base.RequestClient.GetPointFormatter() )
			{
				DbName = dbName,
				Points = points,
				RetentionPolicy = retentionPolicy,
				Precision = precision
			};

			var response = await base.RequestClient.PostAsync( request ).ConfigureAwait( false );

			return response;
		}
		#endregion
	}
}
