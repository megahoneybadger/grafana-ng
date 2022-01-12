#region Usings
using ED.Dashboards;
using ED.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using ModelDashboard = ED.Dashboards.Dashboard;
using ModelFolder = ED.Dashboards.Folder;
using ModelDashboardPermission = ED.Dashboards.DashboardPermission;
using ModelVersion = ED.Dashboards.DashboardVersion;
using ModelVersions = System.Collections.Generic.IEnumerable<ED.Dashboards.DashboardVersion>;
using Tags = System.Collections.Generic.List<string>;
using Permissions = System.Collections.Generic.IEnumerable<ED.Dashboards.DomainPermission>;
using ActionResultTask = System.Threading.Tasks.Task<Microsoft.AspNetCore.Mvc.IActionResult>;
using ED.Security;
using ED.Data.Alerts;
using System.Threading.Tasks;
using static ED.ErrorCode;
#endregion

namespace ED.Web.Dashboards
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/dashboard/
	/// </summary>
	[Microsoft.AspNetCore.Authorization.Authorize]
	[Route( "api/dashboards" )]
	public class DashboardsController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public AlertManager AlertManager { get; }
		/// <summary>
		/// 
		/// </summary>
		public DashboardRepository Repo => GetRepo<DashboardRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public DashboardsController( IHttpContextAccessor accessor, DataContext dc, AlertManager am )
			: base( accessor, dc )
		{
			AlertManager = am;
			//dc.FillDatabase();
			//dc.AddDashboards( 5, 2 );
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( Error = BadGetDashboards )]
		public async ActionResultTask GetDashbords() =>
			( await Repo
				.GetDashboards() )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpGet( "uid/{uid}", Permission.View, Error = BadGetDashboard )]
		public async ActionResultTask GetDashboardByUid( string uid ) =>
			( await Repo
				.GetDashboardByUid( uid ))
				.ToActionResult( x => ToGetDashboardReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "tags", Error = BadGetDashboardTags )]
		public async ActionResultTask GetTags() =>
			( await Repo
				.GetTags())
				.ToActionResult( x => ToGetTagsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "/api/search" )]
		public async ActionResultTask Search( [FromQuery] SearchRequest sr ) =>
			( await Repo
				.Search( sr.ToFilter( ActualUser.Id ) ) )
				.ToActionResult( x => ToSearchReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( "db", Role.Editor, Error = BadCreateDashboard )]
		public async ActionResultTask Create( DashboardRequest r ) =>
			( await Repo
				.Create( r.ToModel( ActualUser.Id ) ) )
				.ToActionResult( x => ToCreateReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[DashboardHttpPut( "db", Permission.Edit, Error = BadUpdateDashboard )]
		public async ActionResultTask Update( DashboardRequest r ) =>
			( await Repo
				.Update( r.ToModel( ActualUser.Id ) )
				.Finalize( () => AlertManager.Reload() ) ) 
				.ToActionResult( x => ToCreateReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[DashboardHttpDelete( "uid/{uid}", Permission.Edit, Error = BadDeleteDashboard )]
		public async ActionResultTask Delete( string uid ) =>
			( await Repo
				.Delete( uid ) )
				.ToActionResult( x => new { Message = "Dashboard deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( "import", Role.Editor, Error = BadImportDashboard )]
		public async ActionResultTask Import( DashboardRequest r ) =>
			( await Repo
				.Import( r.ToModel( ActualUser.Id ) ) )
				.ToActionResult( x => ToCreateReply( x ) );
		#endregion

		#region Class 'Versions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpGet( "id/{id}/versions/{versionId}", Permission.Edit, Error = BadGetDashboardVersion )]
		public async ActionResultTask GetVersion( int id, int versionId ) =>
			( await Repo
				.GetVersion( id, versionId ) )
				.ToActionResult( x => ToGetVersionReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpGet( "id/{id}/versions", Permission.View, Error = BadGetDashboardVersions )]
		public async ActionResultTask GetVersions( int id, int? limit, int? start ) =>
			( await Repo
				.GetVersions( id, limit, start ) )
				.ToActionResult( x => ToGetVersionsReply( x ) );
		
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpPost( "id/{id}/restore", Permission.Edit, Error = BadDashboardRestore )]
		public async ActionResultTask Restore( int id, RestoreRequest r ) =>
			( await Repo
				.Restore( id, r.Version ) )
				.ToActionResult( x => ToRestoreReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpPost( "calculate-diff", Permission.Edit, Error = BadDashboardRestore )]
		public async ActionResultTask Compare( CompareRequest r ) =>
			( await Repo
				.Compare( r.ToModel() ) )
				.ToActionResult( x => ToCompareReply( x ) );
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpGet( "id/{id}/permissions", Permission.Admin, Error = BadGetDashboardPermissions )]
		public async ActionResultTask GetPermissions( int id ) =>
			( await Repo
					.GetPermissions( id ) )
					.ToActionResult( x => ToGetPermissionsReply( x ) ) ;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[DashboardHttpPost( "id/{id}/permissions", Permission.Admin, Error = BadUpdateDashboardPermissions )]
		public async Task<IActionResult> UpdatePermission( int id, 
			FoldersController.PermissionAssignment [] items ) =>
			( await Repo
				.UpdatePermissions( id, items
					.Select( x => x.ToModel( id ) )
					.ToList()))
				.ToActionResult( x => new { Message = "Dashboard permissions updated" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToCreateReply( ModelDashboard d )
		{
			return new
			{
				d.Id,
				d.Uid,
				d.Title,
				d.Url,
				Status = "success",
				d.Bag.Version
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetDashboardReply( ModelDashboard d )
		{
			return new
			{
				d.Id,
				d.Uid,
				d.Title,
				d.Url,
				d.Bag.Version,

				data = d.GetDataAsJsonElement(),

				meta = new
				{
					d.Tags,
					IsStarred = d.Stars.Contains( ActualUser.Id ),
					DataContext.Acl.CanAdmin,
					DataContext.Acl.CanEdit,
					DataContext.Acl.CanSave,
					DataContext.Acl.CanView,
					CanStar = true, // todo
					CanShare = true, // todo

					folder = ( null == d.FolderId ) ? null : new
					{
						Id = d.FolderId,
						Uid = d.Bag.FolderUid,
						Title = d.Bag.FolderTitle,

					}
				}
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetTagsReply( Tags list )
		{
			return list
				.GroupBy( x => x )
				.Select( group => new
				{
					Term = group.Key,
					Count = group.Count()
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetVersionsReply( ModelVersions op )
		{
			return op
				.Select( x => new
				{
					x.Id,
					x.DashboardId,
					x.ParentVersion,
					x.RestoredFrom,
					x.Version,
					CreatedBy = "admin",
					x.Bag.Created,
					x.Message,
				} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetVersionReply( ModelVersion x )
		{
			return new
			{
				x.Id,
				x.DashboardId,
				x.ParentVersion,
				x.RestoredFrom,
				x.Version,
				x.Bag.Created,
				x.Message,
				Data = x.GetDataAsJsonElement(),
				CreatedBy = "admin",
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToRestoreReply( ModelVersion v )
		{
			return new
			{
				Status = "success",
				v.Version
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPermissionsReply( Permissions op )
		{
			var nativeList = op
				.OfType<ED.Dashboards.DashboardPermission>()
				.Select( x => ToGetPermissionsReply( x ) )
				.ToList();

			var parentList = op
				.OfType<ED.Dashboards.FolderPermission>()
				.Select( x => FoldersController.ToGetPermissionsReply( x, true ) )
				.ToList();

			return parentList.Concat( nativeList );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetPermissionsReply( ModelDashboardPermission p )
		{
			return new
			{
				p.Id,
				p.Dashboard.Title,
				p.Dashboard.Uid,

				UserId = p.User?.Id,
				UserLogin = p.User?.Login,
				UserEmail = p.User?.Email,

				TeamId = p.Team?.Id,
				Team = p.Team?.Name,

				p.Role,

				p.Permission,
				PermissionName = p.Permission.ToString(),

				p.Bag.Created,
				p.Bag.Updated
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToSearchReply( SearchTree op )
		{
			var list = new List<object>();

			op
				.Folders?
				.Select( x => ToFolderReply( x ) )
				.ToList()
				.ForEach( x => list.Add( x ) );

			op
				.Dashboards?
				.Select( x => ToDashboardReply( x ) )
				.ToList()
				.ForEach( x => list.Add( x ) );

			return list;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		private object ToDashboardReply( ModelDashboard d )
		{
			return new
			{
				d.Id,
				d.Uid,
				d.Title,
				d.Url,
				Type = "dash-db",
				d.Tags,
				IsStarred = d.Stars.Contains( ActualUser.Id ),

				d.FolderId,
				d.Bag.FolderUid,
				d.Bag.FolderTitle,
				d.Bag.FolderUrl,

				d.Bag.Version
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		private object ToFolderReply( ModelFolder f )
		{
			return new
			{
				f.Id,
				f.Uid,
				f.Title,
				f.Url,
				Type = "dash-folder",
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		private object ToCompareReply( CompareReply v ) 
		{
			return new
			{
				Base = v.Base.GetDataAsJsonElement(),
				New = v.New.GetDataAsJsonElement(),
				Diff = v.Diff.GetDataAsJsonElement()
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class Dashboard
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int? Id { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Uid { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Title { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public IEnumerable<string> Tags { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int Version { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public object Data { get; set; }
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class DashboardRequest 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public Dashboard Dashboard{ get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int FolderId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool Overwrite { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Message { get; set; }
			#endregion  

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelDashboard ToModel( int userId ) 
			{
				var model = new ModelDashboard() 
				{
					Id = Dashboard.Id.HasValue ? Dashboard.Id.Value : 0,
					Title = Dashboard.Title,
					Uid = Dashboard.Uid,
					Tags = Dashboard.Tags,
					Data = Dashboard.Data?.ToString(),

					FolderId = ( 0 == FolderId ) ? ( int? )null : FolderId
				};

				model.Bag.Overwrite = Overwrite;
				model.Bag.Message = Message;
				model.Bag.Version = Dashboard.Version;
				model.Bag.UserId = userId;

				return model;
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class RestoreRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int Version { get; set; }
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class CompareRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public CompareUnit Base{ get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public CompareUnit New{ get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public CompareType DiffType { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Base} vs {New} [{DiffType}]";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ED.Dashboards.CompareRequest ToModel() 
			{
				return new ED.Dashboards.CompareRequest
				{
					BaseDashboardId = Base.DashboardId.Value,
					BaseVersion = Base.Version.Value,

					NewDashboardId = New.DashboardId.Value,
					NewVersion = New.Version.Value,

					DiffType = DiffType
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class CompareUnit
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int? DashboardId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int? Version { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{DashboardId}|{Version}";
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class SearchRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Query { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[BindProperty( Name = "tag" )]
			public IEnumerable<string> Tags { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public IEnumerable<int> FolderIds { get; set; }
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
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public DashboardSearchFilter ToFilter( int userId )
			{
				return new DashboardSearchFilter()
				{
					UserId = userId,

					Query = Query ?? string.Empty,
					Tags = Tags,
					FolderIds = FolderIds,
					DashboardIds = DashboardIds,
					Starred = Starred,
					Limit = Limit
				};
			}
			#endregion
		}
		#endregion
	}
}

