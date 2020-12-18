#region Usings

#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Server
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string SECTION_NAME = "server";
		#endregion

		#region Class properties
		/// <summary>
		/// Protocol (http, https, socket)
		/// </summary>
		public ProtocolType Protocol { get; set; }
		/// <summary>
		/// The http port  to use
		/// </summary>
		public ushort HttpPort { get; set; } = 3000;
		/// <summary>
		///  The public facing domain name used to access ed from a browser
		/// </summary>
		public string Domain { get; set; } = "localhost";
		/// <summary>
		/// 
		/// </summary>
		public string RoorUrl => $"{Protocol.ToString().ToLower()}://{Domain}:{HttpPort}";
		/// <summary>
		/// Redirect to correct domain if host header does not match domain.
		/// Prevents DNS rebinding attacks.
		/// </summary>
		public bool EnforceDomain { get; set; }
		/// <summary>
		/// Log web requests
		/// </summary>
		public bool RouterLogging { get; set; }
		/// <summary>
		/// The path relative working path
		/// </summary>
		public string StaticRootPath{ get; set; }
		/// <summary>
		/// Enable gzip
		/// </summary>
		public bool EnableGZip { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string CertFile { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string CertKey { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public static Server Read( Config c )
		{
			var s = c
				.Root
				.Read<Server>( SECTION_NAME );

			

			return s;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum ProtocolType 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Http,
			/// <summary>
			/// 
			/// </summary>
			Https,
			/// <summary>
			/// 
			/// </summary>
			Socket
			#endregion
		}
		#endregion
	}
}

