#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents a generic query response.
	/// </summary>
	public class QueryResponse
	{
		#region Class properties
		/// <summary>
		/// Response error.
		/// </summary>
		public string Error { get; set; }
		/// <summary>
		/// Query response represented as an IEnumerable of <see cref="{SeriesResult}"/> objects. 
		/// InfluxDb returns this kind of object by convention.
		/// </summary>
		/// <remarks>NOTE: DO NOT RENAME this property (used by convention to deserialize query response)</remarks>
		public IEnumerable<SeriesResult> Results { get; set; }
		#endregion
	}

	/// <summary>
	/// Represents series query result.
	/// </summary>
	public class SeriesResult
	{
		#region Class properties
		/// <summary>
		/// Serie result error.
		/// </summary>
		public string Error { get; set; }
		/// <summary>
		/// <see cref="IEnumerable{Serie}"/> result items.
		/// </summary>
		public IEnumerable<Serie> Series { get; set; }
		/// <summary>
		/// Serie messages.
		/// </summary>
		public IEnumerable<Message> Messages { get; set; }
		#endregion
	}
}