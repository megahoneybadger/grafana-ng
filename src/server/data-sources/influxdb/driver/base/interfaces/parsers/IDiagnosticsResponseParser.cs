#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	public interface IDiagnosticsResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		Stats GetStats( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		Diagnostics GetDiagnostics( IEnumerable<Serie> series );
		#endregion
	}
}
