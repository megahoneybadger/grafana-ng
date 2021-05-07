#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents a serie set (obtained by "SHOW SERIES").
	/// </summary>
	public class SerieSet
	{
		#region Class properties
		/// <summary>
		/// Serie/measurement name.
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// Collection of serie set items.
		/// </summary>
		public IList<SerieSetItem> Series { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public SerieSet()
		{
			Series = new List<SerieSetItem>();
		}
		#endregion
	}

	public class SerieSetItem
	{
		#region Class properties
		/// <summary>
		/// Serie set item key (defined by "_key").
		/// </summary>
		public string Key { get; set; }
		/// <summary>
		/// Serie set item tags.
		/// </summary>
		public IDictionary<string, string> Tags { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public SerieSetItem()
		{
			Tags = new Dictionary<string, string>();
		}
		#endregion
	}
}