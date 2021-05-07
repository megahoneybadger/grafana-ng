#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	public interface IBasicResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="seriesResults"></param>
		/// <returns></returns>
		IEnumerable<Serie> FlattenResultsSeries( IEnumerable<SeriesResult> seriesResults );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="seriesResults"></param>
		/// <returns></returns>
		IEnumerable<IEnumerable<Serie>> MapResultsSeries( IEnumerable<SeriesResult> seriesResults );
		#endregion
	}
}
