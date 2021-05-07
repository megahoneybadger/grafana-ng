#region Usings
using System;

#endregion

namespace ED.Drivers.Influx
{
	internal class RetentionQueryBuilder : IRetentionQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <param name="duration"></param>
		/// <param name="replication"></param>
		/// <returns></returns>
		public string CreateRetentionPolicy( string dbName,
			string policyName, string duration, int replication )
		{
			var query = String.Format( QueryStatements.CreateRetentionPolicy, policyName, dbName, duration, replication );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual string GetRetentionPolicies( string dbName )
		{
			var query = String.Format( QueryStatements.GetRetentionPolicies, dbName );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <param name="duration"></param>
		/// <param name="replication"></param>
		/// <returns></returns>
		public virtual string AlterRetentionPolicy( string dbName,
			string policyName, string duration, int replication )
		{
			var query = String.Format( QueryStatements.AlterRetentionPolicy,
				policyName, dbName, duration, replication );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="policyName"></param>
		/// <returns></returns>
		public string DropRetentionPolicy( string dbName, string policyName )
		{
			var query = String.Format( QueryStatements.DropRetentionPolicy, policyName, dbName );

			return query;
		}
		#endregion
	}
}
