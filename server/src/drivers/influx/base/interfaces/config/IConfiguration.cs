#region Usings
using System;
using System.Net.Http;
#endregion

namespace ED.Drivers.Influx
{
	public interface IConfiguration
	{
		#region Class properties
		/// <summary>
		/// InfluxDb server URI.
		/// </summary>
		Uri EndpointUri { get; }
		/// <summary>
		/// InfluxDb server username.
		/// </summary>
		string Username { get; }
		/// <summary>
		/// InfluxDb server password.
		/// </summary>
		string Password { get; }
		/// <summary>
		/// Custom HttpClient object (optional).
		/// </summary>
		HttpClient HttpClient { get; }
		/// <summary>
		/// Should throw exception upon InfluxDb warning message (for debugging).
		/// </summary>
		bool ThrowOnWarning { get; }
		#endregion
	}
}