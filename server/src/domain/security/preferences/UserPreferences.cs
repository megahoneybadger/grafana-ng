#region Usings
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class UserPreferences : Preferences
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int UserId { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var root = $"{TimeZone.ToString()}|{Theme.ToString()}";

			if( HomeDashboardId.HasValue )
			{
				root = $"{root}|{ HomeDashboardId}";
			}

			return $"{OrgId}|{UserId} {root}";
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

			if( !base.Equals( obj ) )
				return false;

			var p = obj as UserPreferences;

			if( null == p )
				return false;

			if( !UserId.Equals( p.UserId ) )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = base.GetHashCode();

			hash = hash * 23 + UserId.GetHashCode();

			return hash;
		}
		#endregion
	}
}
