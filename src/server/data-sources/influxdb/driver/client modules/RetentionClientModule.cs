#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;

#endregion

namespace ED.Drivers.Influx
{
	public class RetentionClientModule : ClientModuleBase, IRetentionClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IRetentionQueryBuilder _retentionQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly IRetentionResponseParser _retentionResponseParser;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="retentionQueryBuilder"></param>
		/// <param name="retentionResponseParser"></param>
		public RetentionClientModule( IInfluxDbRequestClient requestClient,
			IRetentionQueryBuilder retentionQueryBuilder, IRetentionResponseParser retentionResponseParser )
				: base( requestClient )
		{
			_retentionQueryBuilder = retentionQueryBuilder;
			_retentionResponseParser = retentionResponseParser;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <param name="duration"></param>
		/// <param name="replicationCopies"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> CreateRetentionPolicyAsync(
			string dbName, string policyName, string duration, int replicationCopies )
		{
			var query = _retentionQueryBuilder.CreateRetentionPolicy( dbName, policyName, duration, replicationCopies );
			var response = await base.GetAndValidateQueryAsync( query ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public async Task<IEnumerable<RetentionPolicy>> GetRetentionPoliciesAsync( string dbName )
		{
			var query = _retentionQueryBuilder.GetRetentionPolicies( dbName );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var rps = _retentionResponseParser.GetRetentionPolicies( dbName, series );

			return rps;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <param name="duration"></param>
		/// <param name="replicationCopies"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> AlterRetentionPolicyAsync( string dbName,
			string policyName, string duration, int replicationCopies )
		{
			var query = _retentionQueryBuilder.AlterRetentionPolicy( dbName, policyName, duration, replicationCopies );
			var response = await base.GetAndValidateQueryAsync( query ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DropRetentionPolicyAsync( string dbName, string policyName )
		{
			var query = _retentionQueryBuilder.DropRetentionPolicy( dbName, policyName );
			var response = await base.GetAndValidateQueryAsync( query ).ConfigureAwait( false );

			return response;
		}
		#endregion
	}
}
