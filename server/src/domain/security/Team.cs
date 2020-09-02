#region Usings
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class Team : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Email { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Name}|{Email}";
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

			var t = obj as Team;

			if( null == t )
				return false;

			if( !Id.Equals( t.Id ) )
				return false;

			if( OrgId != t.OrgId )
				return false;

			if( Name != t.Name )
				return false;

			if( Email != t.Email )
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
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Email.GetHashCode();

			return hash;
		}
		#endregion
	}
}
