#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	public interface ICqResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<ContinuousQuery> GetContinuousQueries( string dbName, IEnumerable<Serie> series );
		#endregion
	}
}
