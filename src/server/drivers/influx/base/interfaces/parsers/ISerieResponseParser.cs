#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	public interface ISerieResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<SerieSet> GetSerieSets( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<Measurement> GetMeasurements( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<string> GetTagKeys( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<TagValue> GetTagValues( IEnumerable<Serie> series );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		IEnumerable<FieldKey> GetFieldKeys( IEnumerable<Serie> series );
		#endregion
	}
}
