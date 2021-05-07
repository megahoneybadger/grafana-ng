#region Usings
using System;

#endregion

namespace ED.Drivers.Influx
{
	internal class DatabaseQueryBuilder : IDatabaseQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual string CreateDatabase( string dbName )
		{
			var query = String.Format( QueryStatements.CreateDatabase, dbName );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual string GetDatabases()
		{
			return QueryStatements.GetDatabases;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual string DropDatabase( string dbName )
		{
			var query = String.Format( QueryStatements.DropDatabase, dbName );

			return query;
		}
		#endregion
	}
}
