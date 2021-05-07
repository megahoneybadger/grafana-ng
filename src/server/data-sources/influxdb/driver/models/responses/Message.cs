
namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents a message object returned by the InfluxDB API (usually for warnings).
	/// </summary>
	public class Message
	{
		#region Class properties
		/// <summary>
		/// Message level.
		/// </summary>
		public string Level { get; set; }
		/// <summary>
		/// Message text.
		/// </summary>
		public string Text { get; set; }
		#endregion
	}
}