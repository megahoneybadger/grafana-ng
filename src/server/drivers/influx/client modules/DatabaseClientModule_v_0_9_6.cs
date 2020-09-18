#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion


namespace ED.Drivers.Influx
{
	public class DatabaseClientModule_v_0_9_6 : ClientModuleBase, IDatabaseClientModule
    {
        private readonly IDatabaseQueryBuilder _databaseQueryBuilder;
        private readonly IDatabaseResponseParser _databaseResponseParser;

        public DatabaseClientModule_v_0_9_6(IInfluxDbRequestClient requestClient, IDatabaseQueryBuilder databaseQueryBuilder, IDatabaseResponseParser databaseResponseParser)
            : base(requestClient)
        {
            _databaseQueryBuilder = databaseQueryBuilder;
            _databaseResponseParser = databaseResponseParser;
        }

        public virtual async Task<IInfluxDataApiResponse> CreateDatabaseAsync(string dbName)
        {
            var query = _databaseQueryBuilder.CreateDatabase(dbName);
            var response = await base.GetAndValidateQueryAsync(query).ConfigureAwait(false);

            return response;
        }

        public virtual async Task<IEnumerable<Database>> GetDatabasesAsync()
        {
            var query = _databaseQueryBuilder.GetDatabases();
            var series = await base.ResolveSingleGetSeriesResultAsync(query).ConfigureAwait(false);
            var databases = _databaseResponseParser.GetDatabases(series);

            return databases;
        }

        public virtual async Task<IInfluxDataApiResponse> DropDatabaseAsync(string dbName)
        {
            var query = _databaseQueryBuilder.DropDatabase(dbName);
            var response = await base.GetAndValidateQueryAsync(query).ConfigureAwait(false);

            return response;
        }
    }
}
