#region Usings

#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Security
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_NAME = "security";
		#endregion

		#region Class properties
		/// <summary>
		///  Default admin user, created on startup
		/// </summary>
		public string AdminUser { get; set; } = "admin";
		/// <summary>
		/// Default admin password, can be changed before first start of ed,  or in profile settings
		/// </summary>
		public string AdminPassword { get; set; } = "admin";
		/// <summary>
		/// used for signing
		/// </summary>
		public string SecretKey { get; set; } = "SW2YcwTIb9zpOOhoPsMm";
		/// <summary>
		/// 
		/// </summary>
		public ushort LoginRememberDays { get; set; } = 7;
		/// <summary>
		/// 
		/// </summary>
		public string CookieUserName { get; set; } = "ed_user";
		/// <summary>
		/// 
		/// </summary>
		public string CookieRememberName { get; set; } = "ed_member";
		/// <summary>
		/// Disable gravatar profile images
		/// </summary>
		public bool DisableGravatar { get; set; }
		/// <summary>
		/// Disable protection against brute force login attempts
		/// </summary>
		public bool DisableBruteForceLoginProtection { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public static Security Read( Config c )
		{
			var s = c
				.Root
				.Read<Security>( SECTION_NAME );

			

			return s;
		}
		#endregion
	}
}

