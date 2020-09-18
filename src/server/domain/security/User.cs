#region Usings
using System;
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class User : DomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Login { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Email { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role Role { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsRoot{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public UserPreferences Preferences { get; set; } 

		/// <summary>
		/// 
		/// </summary>
		public DateTime LastSeenAt { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string LastSeenAtLabel
		{
			get
			{
				return "< 1m";
			}
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{Role}|{Login}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( object.ReferenceEquals( this, obj ) )
				return true;

			var u = obj as User;

			if( null == u )
				return false;

			if( !Id.Equals( u.Id ) )
				return false;

			if( !OrgId.Equals( u.OrgId ) )
				return false;

			if( Login != u.Login )
				return false;

			if( Name != u.Name )
				return false;

			if( Role != u.Role )
				return false;

			if( Email != u.Email )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = 17;

			hash = hash * 23 + Id.GetHashCode();
			hash = hash * 23 + OrgId.GetHashCode();
			hash = hash * 23 + Login.GetHashCode();
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Role.GetHashCode();
			hash = hash * 23 + Email.GetHashCode();

			return hash;
		}
		#endregion
	}
}

