#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;

#endregion

namespace ED.Drivers.Influx
{
	public class CqClientModule : ClientModuleBase, ICqClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly ICqQueryBuilder _cqQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly ICqResponseParser _cqResponseParser;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="cqQueryBuilder"></param>
		/// <param name="cqResponseParser"></param>
		public CqClientModule( IInfluxDbRequestClient requestClient,
			ICqQueryBuilder cqQueryBuilder, ICqResponseParser cqResponseParser )
				: base( requestClient )
		{
			_cqQueryBuilder = cqQueryBuilder;
			_cqResponseParser = cqResponseParser;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="cqParams"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> CreateContinuousQueryAsync( CqParams cqParams )
		{
			var query = _cqQueryBuilder.CreateContinuousQuery( cqParams );
			var response = await base.PostAndValidateQueryAsync( query, cqParams.DbName ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<ContinuousQuery>> GetContinuousQueriesAsync( string dbName )
		{
			var query = _cqQueryBuilder.GetContinuousQueries();
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var cqs = _cqResponseParser.GetContinuousQueries( dbName, series );

			return cqs;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="cqName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DeleteContinuousQueryAsync( string dbName, string cqName )
		{
			var query = _cqQueryBuilder.DeleteContinuousQuery( dbName, cqName );
			var response = await base.PostAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="backfillParams"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> BackfillAsync( string dbName, BackfillParams backfillParams )
		{
			var query = _cqQueryBuilder.Backfill( dbName, backfillParams );
			var response = await base.PostAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}
		#endregion
	}
}
