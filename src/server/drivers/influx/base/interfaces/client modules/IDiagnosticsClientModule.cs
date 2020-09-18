#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public interface IDiagnosticsClientModule
	{
		#region Class public methods
		/// <summary>
		/// Pings the InfluxDb server.
		/// </summary>
		/// <returns>Response of the ping execution (success, dbVersion, response time).</returns>
		Task<Pong> PingAsync();
		/// <summary>
		/// Gets node statistics.
		/// </summary>
		/// <returns></returns>
		Task<Stats> GetStatsAsync();
		/// <summary>
		/// Gets node diagnostics. This returns information such as build information, uptime, 
		/// hostname, server configuration, memory usage, and Go runtime diagnostics.
		/// </summary>
		/// <returns></returns>
		Task<Diagnostics> GetDiagnosticsAsync();
		#endregion
	}
}