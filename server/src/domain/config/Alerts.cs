#region Usings

#endregion

using System;

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Alerting
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_NAME = "alerting";
		#endregion

		#region Class properties
		/// <summary>
		/// Disable alerting engine & UI features
		/// </summary>
		public bool Enabled { get; set; } = true;
		/// <summary>
		///  Makes it possible to turn off alert rule execution but alerting UI is visible
		/// </summary>
		public bool ExecuteAlerts { get; set; }
		/// <summary>
		/// Alert notifications can include images, but rendering many
		/// images at the same time can overload the server.
		/// This limit will protect the server from render 
		/// overloading and make sure notifications are sent out quickly.
		/// </summary>
		public int ConcurrentRenderLimit { get; set; } = 5;
		/// <summary>
		///  Default setting for alert calculation timeout.
		/// </summary>
		public int EvaluationTimeoutSeconds { get; set; } = 30;
		/// <summary>
		///  Default setting for alert calculation timeout.
		/// </summary>
		public int NotificationTimeoutSeconds { get; set; } = 30;
		/// <summary>
		///  Default setting for max attempts to sending alert notifications.
		/// </summary>
		public int MaxAttempts { get; set; } = 3;
		/// <summary>
		/// 
		/// </summary>
		public Func<int, string> JwtGenerator { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public static Alerting Read( Config c )
		{
			var a = c
				.Root
				.Read<Alerting>( SECTION_NAME );

			

			return a;
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

