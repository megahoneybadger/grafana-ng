#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public interface ICqClientModule
	{
		#region Class public methods
		/// <summary>
		/// Creates a continuous query in the database.
		/// </summary>
		/// <param name="cqParams">Cq request object which describes the Cq that wants to be created.</param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> CreateContinuousQueryAsync( CqParams cqParams );
		/// <summary>
		/// Gets all contious queries from the database.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <returns>A collection of all contious queries.</returns>
		Task<IEnumerable<ContinuousQuery>> GetContinuousQueriesAsync( string dbName );
		/// <summary>
		/// Deletes a continous query.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="cqName">The id of the query.</param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> DeleteContinuousQueryAsync( string dbName, string cqName );
		/// <summary>
		/// Backfills the database based on the <see cref="{Backfill}"/> configuration object.
		/// PLEASE EXCERSISE CAUTION WITH THIS CALL. Not specifying additional filters might cause your CPU to go to 100% for a long time.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="backfillParams"></param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> BackfillAsync( string dbName, BackfillParams backfillParams );
		#endregion
	}
}