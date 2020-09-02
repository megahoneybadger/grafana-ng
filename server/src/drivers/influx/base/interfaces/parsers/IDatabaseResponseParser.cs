#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	public interface IDatabaseResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<Database> GetDatabases( IEnumerable<Serie> series );
		#endregion
	}
}
