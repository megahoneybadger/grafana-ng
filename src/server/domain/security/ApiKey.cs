#region Usings
#endregion

namespace ED.Security
{
	/// <summary>
	/// 
	/// </summary>
	public class ApiKey : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Name{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role Role { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Name}|{Role}";
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

			var u = obj as ApiKey;

			if( null == u )
				return false;

			if( !Id.Equals( u.Id ) )
				return false;

			if( !OrgId.Equals( u.OrgId ) )
				return false;

			if( Name != u.Name )
				return false;

			if( Role != u.Role )
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
			hash = hash * 23 + Role.GetHashCode();

			return hash;
		}
		#endregion
	}
}

