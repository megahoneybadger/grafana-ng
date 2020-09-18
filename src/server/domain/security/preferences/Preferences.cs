#region Usings
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class Preferences : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int? HomeDashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public TimeZone TimeZone { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Theme Theme { get; set; }
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

			return $"{OrgId} {root}";
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

			var p = obj as Preferences;

			if( null == p )
				return false;

			if( !Id.Equals( p.Id ) )
				return false;

			if( !OrgId.Equals( p.OrgId ) )
				return false;

			if( !HomeDashboardId.Equals( p.HomeDashboardId ) )
				return false;

			if( !TimeZone.Equals( p.TimeZone ) )
				return false;

			if( !Theme.Equals( p.Theme ) )
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
			hash = hash * 23 + TimeZone.GetHashCode();
			hash = hash * 23 + Theme.GetHashCode();

			if( HomeDashboardId.HasValue ) 
			{
				hash = hash * 23 + HomeDashboardId.GetHashCode();
			}

			return hash;
		}
		#endregion
	}
}
