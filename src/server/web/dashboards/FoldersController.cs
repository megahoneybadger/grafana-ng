#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboardPermission = ED.Dashboards.DashboardPermission;
using ModelFolder = ED.Dashboards.Folder;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
#endregion

namespace ED.Web.Dashboards
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/folder/
	/// https://grafana.com/docs/grafana/latest/http_api/folder_permissions/
	/// </summary>
	[Authenticate]
	[Route( "api/folders" )]
	public class FoldersController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public FolderRepository Repo => GetRepo<FolderRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public FoldersController( DataContext dc )
			: base( dc )
		{
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetFolders() =>
			Repo
				.All
				.ToActionResult( x => ToGetFoldersReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[FolderHttpGet( "{uid}", Permission.View )]
		public IActionResult GetFolderByUid( string uid ) =>
			Repo [ uid ]
				.ToActionResult( x => ToGetSingleFolderReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[FolderHttpGet( "id/{id}", Permission.View )]
		public IActionResult GetFolderById( int id ) =>
			Repo [ id ]
				.ToActionResult( x => ToGetSingleFolderReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost(Role.Editor)]
		public IActionResult Create( FolderRequest r ) =>
			Repo
				.Create( r.ToModel() )
				.ToActionResult( x => ToGetSingleFolderReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[FolderHttpDelete( "{uid}", Permission.Edit )]
		public IActionResult Delete( string uid ) =>
			Repo
				.Delete( uid )
				.ToActionResult( x => new { Message = "Folder deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[FolderHttpPut( "{uid}", Permission.Edit )]
		public IActionResult Update( string uid, FolderRequest f ) =>
			Repo
				.Update( uid, f.ToModel() )
				.ToActionResult( x => ToGetSingleFolderReply( x ) );
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[FolderHttpGet( "{uid}/permissions", Permission.Admin )]
		public IActionResult GetPermissions( string uid ) =>
			Repo
				.GetPermissions( uid )
				.ToActionResult( x => ToGetPermissionsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[FolderHttpPost( "{uid}/permissions", Permission.Admin )]
		public IActionResult UpdatePermission( string uid, PermissionAssignment [] items ) =>
			Repo
				.UpdatePermissions( uid, items
					.Select( x => x.ToModel( uid ) )
					.ToList() )
				.ToActionResult( x => new { Message = "Folder permissions updated" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetFoldersReply( OperationResult<ModelFolders> op )
		{
			return op
				.Value
				.Select( x => ToGetSingleFolderReply( x ) )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetSingleFolderReply( OperationResult<ModelFolder> op )
		{
			return ToGetSingleFolderReply( op.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		private object ToGetSingleFolderReply( ModelFolder f )
		{
			return new
			{
				f.Id,
				f.Uid,
				f.Title,
				f.OrgId,
				f.Url,

				f.HasAcl,
				DataContext.Acl?.CanAdmin,
				DataContext.Acl?.CanEdit,

				f.Bag.Created,
				f.Bag.Updated,
				f.Bag.Version
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal object ToGetPermissionsReply( OperationResult<ModelFolderPermissions> op )
		{
			return op
				.Value
				.Select( x => ToGetPermissionsReply( x ) )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		internal static object ToGetPermissionsReply( ModelFolderPermission p, bool inherited = false )
		{
			return new
			{
				//p.Id,
				p.Folder.Title,
				p.Folder.Uid,

				//p.Bag.HasAcl,
				//p.Bag.CanAdmin,
				//p.Bag.CanEdit,

				inherited,
				IsFolder = true,
				p.Role,

				p.Permission,
				//PermissionName = p.Permission.ToString(),

				UserId = p.User?.Id,
				UserLogin = p.User?.Login,
				UserEmail = p.User?.Email,

				TeamId = p.Team?.Id,
				Team = p.Team?.Name,
				TeamEmail = p.Team?.Email,

				p.Bag.Created,
				p.Bag.Updated
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class FolderRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Title { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Uid { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool Overwrite { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int Version { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Title}|{Uid}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelFolder ToModel( string uid = null )
			{
				var f = new ModelFolder()
				{
					Title = Title,
					Uid = Uid,
				};

				f.Bag.Version = Version;
				f.Bag.Overwrite = Overwrite;

				return f;
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class PermissionAssignment
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int? UserId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int? TeamId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Role? Role { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Permission Permission { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				if( null != Role )
					return $"Role permission: {Role}|{Permission}";

				return ( null != TeamId ) ?
					$"Team permission: {TeamId}|{Permission}" :
					$"User permission: {UserId}|{Permission}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelFolderPermission ToModel( string uid )
			{
				var fp = new ModelFolderPermission()
				{
					Folder = new ModelFolder()
					{
						Uid = uid,
					},

					Permission = Permission
				};

				if( UserId.HasValue )
				{
					fp.User = new ED.Security.User()
					{
						Id = UserId.Value
					};
				}
				else if( TeamId.HasValue )
				{
					fp.Team = new ED.Security.Team()
					{
						Id = TeamId.Value
					};
				}
				else if( Role.HasValue )
				{
					fp.Role = Role;
				}

				return fp;
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelDashboardPermission ToModel( int id )
			{
				var fp = new ModelDashboardPermission()
				{
					Dashboard = new ModelDashboard()
					{
						Id = id,
					},

					Permission = Permission
				};

				if( UserId.HasValue )
				{
					fp.User = new ED.Security.User()
					{
						Id = UserId.Value
					};
				}
				else if( TeamId.HasValue )
				{
					fp.Team = new ED.Security.Team()
					{
						Id = TeamId.Value
					};
				}
				else if( Role.HasValue )
				{
					fp.Role = Role;
				}

				return fp;
			}
			#endregion
		}
		#endregion
	}
}