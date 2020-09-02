#region Usings
using System;
using System.Collections.Generic;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class Dashboard : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Title { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Uid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasAcl { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? FolderId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Data { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<string> Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<int> Stars { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Url => $"/d/{Uid}/{Title.GenerateSlug()}";
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Title}|{Uid}" + ( FolderId.HasValue ? $" @{FolderId}" : "" );
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

			var d = obj as Dashboard;

			if( null == d )
				return false;

			if( !Id.Equals( d.Id ) )
				return false;

			if( !OrgId.Equals( d.OrgId ) )
				return false;

			if( Title != d.Title )
				return false;

			if( Uid != d.Uid )
				return false;

			if( !Nullable.Equals( FolderId, d.FolderId ) )
				return false;

			if( Data != d.Data )
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
			hash = hash * 23 + Data.GetHashCode();

			if( FolderId.HasValue ) 
			{
				hash = hash * 23 + FolderId.GetHashCode();
			}

			return hash;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Dashboard Duplicate() 
		{
			return new Dashboard()
			{
				Id = Id,
				OrgId = OrgId,
				Title = Title,
				Uid = Uid,
				Data = Data,
				FolderId = FolderId
			};
		}
		#endregion
	}

	public class TimeSettings
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string From { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string To { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Rate { get; set; }
		#endregion
	}
}
