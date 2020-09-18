#region Usings
using ED.Security;
using System;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class DomainPermission : DomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Team Team { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role? Role { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Security.Permission Permission { get; set; }
		#endregion

		#region Class public methods
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

			var p = obj as DomainPermission;

			if( null == p )
				return false;

			if( !Id.Equals( p.Id ) )
				return false;

			if( !Nullable.Equals( User, p.User ) )
				return false;

			if( !Nullable.Equals( Team, p.Team ) )
				return false;

			if( !Nullable.Equals( Role, p.Role ) )
				return false;

			if( Permission != p.Permission )
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
			hash = hash * 23 + Permission.GetHashCode();

			return hash;
		}
		
		#endregion
	}
}
