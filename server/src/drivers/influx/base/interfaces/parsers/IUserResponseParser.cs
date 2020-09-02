#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	public interface IUserResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<User> GetUsers( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<Grant> GetPrivileges( IEnumerable<Serie> series );
		#endregion
	}
}
