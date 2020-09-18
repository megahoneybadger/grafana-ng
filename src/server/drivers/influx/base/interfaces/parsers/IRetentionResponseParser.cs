#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	public interface IRetentionResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<RetentionPolicy> GetRetentionPolicies( string dbName, IEnumerable<Serie> series );
		#endregion
	}
}
