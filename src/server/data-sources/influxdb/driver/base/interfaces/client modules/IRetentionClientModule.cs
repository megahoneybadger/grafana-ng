﻿#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;

#endregion

namespace ED.Drivers.Influx
{
	public interface IRetentionClientModule
	{
		#region Class public methods
		/// <summary>
		/// Create a retention policy.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="policyName">Retention policy name.</param>
		/// <param name="duration">New data keep duration.</param>
		/// <param name="replicationCopies">Number of independent copies of data in the cluster (number of data nodes).</param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> CreateRetentionPolicyAsync( string dbName,
			string policyName, string duration, int replicationCopies );
		/// <summary>
		/// Get the retention policies.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <returns></returns>
		Task<IEnumerable<RetentionPolicy>> GetRetentionPoliciesAsync( string dbName );
		/// <summary>
		/// Alters a retention policy.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="policyName">Retention policy name.</param>
		/// <param name="duration">New data keep duration.</param>
		/// <param name="replicationCopies">Number of independent copies of data in the cluster (number of data nodes).</param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> AlterRetentionPolicyAsync( string dbName,
			string policyName, string duration, int replicationCopies );
		/// <summary>
		/// Drop a retention policy.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="policyName">Retention policy name.</param>
		/// <returns></returns>
		Task<IInfluxDataApiResponse> DropRetentionPolicyAsync( string dbName, string policyName );
		#endregion
	}
}