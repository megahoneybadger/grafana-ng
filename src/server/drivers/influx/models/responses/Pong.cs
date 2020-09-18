using System;

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents <see cref="{Ping}"/> query response.
	/// </summary>
	public class Pong
	{
		#region Class properties
		/// <summary>
		/// Ping request executed successfuly?
		/// </summary>
		public bool Success { get; set; }
		/// <summary>
		/// InfluxDb service version.
		/// </summary>
		public string Version { get; set; }
		/// <summary>
		/// Ping response time.
		/// </summary>
		public TimeSpan ResponseTime { get; set; }
		#endregion
	}
}