#region Usings
using System;
#endregion

namespace ED.Drivers.Influx
{
	public class Diagnostics
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public DiagnosticsSystem System { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DiagnosticsBuild Build { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DiagnosticsRuntime Runtime { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DiagnosticsNetwork Network { get; set; }
		#endregion

	}

	public class DiagnosticsSystem
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public long PID { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime CurrentTime { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime Started { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public TimeSpan Uptime { get; set; }
		#endregion
	}

	public class DiagnosticsBuild
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Branch { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Commit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Version { get; set; }
		#endregion
	}

	public class DiagnosticsRuntime
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string GOARCH { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public long GOMAXPROCS { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string GOOS { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Version { get; set; }
		#endregion
	}

	public class DiagnosticsNetwork
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Hostname { get; set; }
		#endregion
	}
}