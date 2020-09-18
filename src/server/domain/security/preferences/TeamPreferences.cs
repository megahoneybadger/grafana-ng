#region Usings
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class TeamPreferences : Preferences
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int TeamId { get; set; }
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

			if( !base.Equals( obj ) )
				return false;

			var p = obj as TeamPreferences;

			if( null == p )
				return false;

			if( !TeamId.Equals( p.TeamId ) )
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

			hash = hash * 23 + TeamId.GetHashCode();

			return hash;
		}
		#endregion
	}
}
