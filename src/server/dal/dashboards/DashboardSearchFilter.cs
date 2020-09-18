#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardSearchFilter
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int UserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Query { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<string> Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasTags => ( null != Tags && 0 < Tags.Count() );
		/// <summary>
		/// 
		/// </summary>
		public bool HasDashboardIds => ( null != DashboardIds && 0 < DashboardIds.Count() );
		/// <summary>
		/// 
		/// </summary>
		public SearchOperator TagOperator { get; set; } = SearchOperator.And;
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<int> FolderIds { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasFolderIds => ( null != FolderIds && 0 < FolderIds.Count() );
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<int> DashboardIds { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool Starred { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? Limit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Page { get; set; } = 1;
		#endregion

		#region Class public methods

		#endregion
	}

	public enum SearchOperator 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		And,
		/// <summary>
		/// 
		/// </summary>
		Or
		#endregion
	}
}
