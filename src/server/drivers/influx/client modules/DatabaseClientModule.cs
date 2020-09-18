#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class DatabaseClientModule : ClientModuleBase, IDatabaseClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IDatabaseQueryBuilder _databaseQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly IDatabaseResponseParser _databaseResponseParser;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="databaseQueryBuilder"></param>
		/// <param name="databaseResponseParser"></param>
		public DatabaseClientModule( IInfluxDbRequestClient requestClient,
			IDatabaseQueryBuilder databaseQueryBuilder, IDatabaseResponseParser databaseResponseParser )
				: base( requestClient )
		{
			_databaseQueryBuilder = databaseQueryBuilder;
			_databaseResponseParser = databaseResponseParser;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> CreateDatabaseAsync( string dbName )
		{
			var query = _databaseQueryBuilder.CreateDatabase( dbName );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual async Task<IEnumerable<Database>> GetDatabasesAsync()
		{
			var query = _databaseQueryBuilder.GetDatabases();
			var series = await base.ResolveSingleGetSeriesResultAsync( query ).ConfigureAwait( false );
			var databases = _databaseResponseParser.GetDatabases( series );

			return databases;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DropDatabaseAsync( string dbName )
		{
			var query = _databaseQueryBuilder.DropDatabase( dbName );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );

			return response;
		}
		#endregion
	}
}
