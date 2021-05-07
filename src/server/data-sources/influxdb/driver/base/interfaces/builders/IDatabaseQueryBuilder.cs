﻿
namespace ED.Drivers.Influx
{
	public interface IDatabaseQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// Builds "create a new database" query.
		/// </summary>
		/// <param name="dbName">The name of the new database</param>
		/// <returns></returns>
		string CreateDatabase( string dbName );
		/// <summary>
		/// Builds "get all available databases" query.
		/// </summary>
		/// <returns></returns>
		string GetDatabases();
		/// <summary>
		/// Builds "drop a database" query.
		/// </summary>
		/// <param name="dbName">The name of the database to delete.</param>
		/// <returns></returns>
		string DropDatabase( string dbName );
		#endregion
	}
}