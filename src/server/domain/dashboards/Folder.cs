#region Usings
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class Folder : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Title { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasAcl { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Uid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Url => $"/f/{Uid}/{Title?.GenerateSlug()}";
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Title}|{Uid}";
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

			var u = obj as Folder;

			if( null == u )
				return false;

			if( !Id.Equals( u.Id ) )
				return false;

			if( !OrgId.Equals( u.OrgId ) )
				return false;

			if( Title != u.Title )
				return false;

			if( HasAcl != u.HasAcl )
				return false;

			if( Uid != u.Uid )
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
			hash = hash * 23 + Title.GetHashCode();
			hash = hash * 23 + Uid.GetHashCode();
			hash = hash * 23 + HasAcl.GetHashCode();

			return hash;
		}
		#endregion
	}
}
