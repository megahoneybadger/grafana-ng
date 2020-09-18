#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion


namespace ED.Drivers.Influx
{
	public class CqClientModule_v_0_9_6 : ClientModuleBase, ICqClientModule
	{
		private readonly ICqQueryBuilder _cqQueryBuilder;
		private readonly ICqResponseParser _cqResponseParser;

		public CqClientModule_v_0_9_6( IInfluxDbRequestClient requestClient, ICqQueryBuilder cqQueryBuilder, ICqResponseParser cqResponseParser )
				: base( requestClient )
		{
			_cqQueryBuilder = cqQueryBuilder;
			_cqResponseParser = cqResponseParser;
		}

		public virtual async Task<IInfluxDataApiResponse> CreateContinuousQueryAsync( CqParams cqParams )
		{
			var query = _cqQueryBuilder.CreateContinuousQuery( cqParams );
			var response = await base.GetAndValidateQueryAsync( query, cqParams.DbName ).ConfigureAwait( false );

			return response;
		}

		public virtual async Task<IEnumerable<ContinuousQuery>> GetContinuousQueriesAsync( string dbName )
		{
			var query = _cqQueryBuilder.GetContinuousQueries();
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var cqs = _cqResponseParser.GetContinuousQueries( dbName, series );

			return cqs;
		}

		public virtual async Task<IInfluxDataApiResponse> DeleteContinuousQueryAsync( string dbName, string cqName )
		{
			var query = _cqQueryBuilder.DeleteContinuousQuery( dbName, cqName );
			var response = await base.GetAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}

		public virtual async Task<IInfluxDataApiResponse> BackfillAsync( string dbName, BackfillParams backfillParams )
		{
			var query = _cqQueryBuilder.Backfill( dbName, backfillParams );
			var response = await base.GetAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}
	}
}
