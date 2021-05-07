#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents a time series point for db reads (fetch queries).
	/// InfluxDb by convention returns all data represented as Serie objects.
	/// </summary>
	public class Serie
	{
		#region Class properties
		/// <summary>
		/// Serie name.
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// Serie tags.
		/// </summary>
		public IDictionary<string, string> Tags { get; set; }
		/// <summary>
		/// List of serie fields.
		/// </summary>
		public IList<string> Columns { get; set; }
		/// <summary>
		/// Serie values.
		/// </summary>
		public IList<IList<object>> Values { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Serie()
		{
			Tags = new Dictionary<string, string>();
		}
		#endregion
	}
}