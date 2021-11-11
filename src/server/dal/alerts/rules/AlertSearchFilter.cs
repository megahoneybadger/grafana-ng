#region Usings
using ED.Alerts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertSearchFilter
	{
		#region Class properties
		
		/// <summary>
		/// 
		/// </summary>
		public string Query { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string DashboardQuery { get; set; }
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
		public IEnumerable<string> DashboardTags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? Limit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Status? State { get; set; }
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum Status
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			All,
			/// <summary>
			/// 
			/// </summary>
			Ok,
			/// <summary>
			/// 
			/// </summary>
			NotOK,
			/// <summary>
			/// 
			/// </summary>
			Alerting,
			/// <summary>
			/// 
			/// </summary>
			NoData,
			/// <summary>
			/// 
			/// </summary>
			Paused,
			/// <summary>
			/// 
			/// </summary>
			Pending,
			#endregion
		}
		#endregion
	}

	public static class AlertSearchFilterExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="q"></param>
		/// <param name="f"></param>
		/// <returns></returns>
		public static IQueryable<Alert> Filter( this IQueryable<Alert> q, AlertSearchFilter f ) 
		{
			if( f.PanelId.HasValue ) 
			{
				q = q.Where( x => x.PanelId == f.PanelId );
			}

			if( f.State.HasValue && f.State != AlertSearchFilter.Status.All )
			{
				q = f.State switch
				{
					AlertSearchFilter.Status.Alerting => q.Where( x => x.State == AlertState.Alerting ),
					AlertSearchFilter.Status.Pending => q.Where( x => x.State == AlertState.Pending ),
					AlertSearchFilter.Status.Ok => q.Where( x => x.State == AlertState.Ok ),
					AlertSearchFilter.Status.NotOK => q.Where( x => x.State != AlertState.Ok ),
					AlertSearchFilter.Status.NoData => q.Where( x => x.State == AlertState.NoData ),
					AlertSearchFilter.Status.Paused => q.Where( x => x.State == AlertState.Paused ),
					_ => q
				};
			}

			if( !string.IsNullOrEmpty( f.Query ))
			{
				q = q.Where( x => EF.Functions.Like( x.Name, f.Query )  );
			}

			if( !string.IsNullOrEmpty( f.DashboardQuery ) )
			{
				q = q.Where( x => EF.Functions.Like( x.Dashboard.Title, f.DashboardQuery ) );
			}

			if( f.Limit.HasValue ) 
			{
				q = q.Take( f.Limit.Value );
			}

			if( f.HasDashboardIds )
			{
				q = q.Where( x => f.DashboardIds.Contains( x.DashboardId ) );
			}

			if( f.HasFolderIds )
			{
				q = q.Where( x => f.FolderIds.Contains( x.Dashboard.Folder.Id ) );
			}

			return q;
		}
		#endregion
	}
}
