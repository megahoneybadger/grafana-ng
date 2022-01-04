#region Usings
using ED.Dashboards;
using ED.Security;
using JsonDiffPatchDotNet;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityDashboard = ED.Data.Dashboard;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboardPermission = ED.Dashboards.DashboardPermission;
using ModelDashboardPermissions = System.Collections.Generic.List<ED.Dashboards.DashboardPermission>;
using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelVersion = ED.Dashboards.DashboardVersion;
using ModelVersions = System.Collections.Generic.List<ED.Dashboards.DashboardVersion>;
using PermissionRules = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
using Tags = System.Collections.Generic.List<string>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardRepository : Repository
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_OVERWRITE = "Overwrite";
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_VERSION = "Version";
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public DashboardRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public Task<ModelDashboards> GetDashboards() =>
			DataContext
				.Dashboards
				.ForActiveOrg()
				.Select( x => x.ToModel() )
				.ToListAsync();
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelDashboard> GetDashboardById( string uid )
		{
			var entity = await DataContext
				.Dashboards
				.ForActiveOrg()
				.Include( x => x.Tags )
				.Include( x => x.Stars )
				.Include( x => x.Folder )
				.FirstOrDefaultAsync( x => x.Uid == uid );

			var model = entity?
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public Task<Tags> GetTags() =>
			DataContext
				.DashboardTags
				.Select( x => x.Term )
				.ToListAsync();
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public async Task<ModelDashboard> Create( ModelDashboard d ) 
		{
			var existing = await DataContext
				.Dashboards
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => ( x.Title == d.Title && d.FolderId == x.FolderId ) );

			if( null != existing )
			{
				if( !ExpandoHelper.GetProperty<bool>( d, PROP_OVERWRITE ) )
					throw new BadCreateDashboardDuplcateException();

				DataContext.Dashboards.Remove( existing );
			}

			var entity = d
				.ToEntity( DataContext )
				.IncludeActiveOrgId( DataContext );

			entity.Versions.Add( new DashboardVersion( d ) );

			await DataContext.AddAsync( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( d )
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public async Task<ModelDashboard> Import( ModelDashboard d )
		{
			var existing = await DataContext
				.Dashboards
				.ForActiveOrg()
				.Where( x =>
					( x.Uid == d.Uid ) ||
					( x.Title == d.Title && d.FolderId == x.FolderId ) )
				.ToListAsync();

			if( existing?.Count > 0 )
			{
				if( !ExpandoHelper.GetProperty<bool>( d, PROP_OVERWRITE ) )
					throw new BadCreateDashboardDuplcateException();

				DataContext.Dashboards.RemoveRange( existing );
			}

			var entity = d
				.ToEntity( DataContext )
				.IncludeActiveOrgId( DataContext );

			entity.Versions.Add( new DashboardVersion( d ) );

			await DataContext.AddAsync( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( d )
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public async Task<ModelDashboard> Update( ModelDashboard d )
		{
			var entity = await DataContext
				.Dashboards
				.ForActiveOrg()
				.Include( x => x.Tags )
				.Include( x => x.Alerts )
				.FirstOrDefaultAsync( x => x.Uid == d.Uid );

			if( null == entity )
				throw new BadGetDashboardException();

			var existing = DataContext
				.Dashboards
				.ForActiveOrg()
				.FirstOrDefault( x =>
					x.Title == d.Title &&
					d.FolderId == x.FolderId &&
					x.Uid != d.Uid );

			if( null != existing )
			{
				if( !ExpandoHelper.GetProperty<bool>( d, PROP_OVERWRITE ) )
					throw new BadCreateDashboardDuplcateException();

				DataContext.Dashboards.Remove( existing );
			}

			var currentVersion = ( int )DataContext
				.Entry( entity )
				.Property( DataContext.COL_VERSION )
				.CurrentValue;

			DataContext
				.Entry( entity )
				.State = EntityState.Modified;

			if( currentVersion > ExpandoHelper.GetProperty<int>( d, PROP_VERSION ) )
				throw new BadUpdateDashboardVersionMismatchException();

			// 
			entity.Update( DataContext, d );
			//catch( AlertValidationException e )
			//	{
			//		res = OperationResult<ModelDashboard>.Create( ErrorCode.BadUpdateDashboardValidation, e );
			//	}

			await DataContext.SaveChangesAsync();

			var model = entity
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( string uid )
		{
			var entity = DataContext
				.Dashboards
				.ForActiveOrg()
				.FirstOrDefault( x => x.Uid == uid );

			if( null == entity )
				throw new BadGetDashboardException();

			DataContext.Dashboards.Remove( entity );

			var res = await DataContext.SaveChangesAsync();

			return ( 0 != res );
		}
		#endregion

		#region Class 'Versions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelVersion> GetVersion( int dashboardId, int id )
		{
			var entity = await DataContext
				.DashboardVersions
				.FirstOrDefaultAsync( x => x.DashboardId == dashboardId && x.Id == id );

			if( null == entity )
				throw new BadGetDashboardVersionException();

			var model = entity
				.ToModel()
				.AddTime( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelVersions> GetVersions( int dashboardId,
			int? limit = null, int? start = null )
		{
			var request = DataContext
				.DashboardVersions
				.Where( x => x.DashboardId == dashboardId )
				.OrderByDescending( x => x.Version );

			if( start.HasValue )
			{
				request = ( IOrderedQueryable<DashboardVersion> )request.Skip( start.Value );
			}

			if( limit.HasValue )
			{
				request = ( IOrderedQueryable<DashboardVersion> )request.Take( limit.Value );
			}

			var data = await request.ToListAsync();

			var models = data
				.Select( x => x
					.ToModel()
					.AddTime( DataContext.Entry( x ) ) )
				.ToList();

			return models;
		}
			/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelVersion> Restore( int dashboardId, int version )
		{
			var entity = await DataContext
				.Dashboards
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == dashboardId );

			if( null == entity )
				throw new BadGetDashboardException();

			var verEntity = await DataContext
				.DashboardVersions
				.FirstOrDefaultAsync( x => x.DashboardId == dashboardId && x.Version == version );

			if( null == verEntity )
				throw new BadGetDashboardVersionException();

			var model = entity
				.ToModel()
				.AddVersion( DataContext.Entry( entity ) );

			entity.Restore( model.Bag.Version, verEntity );

			DataContext
				.Entry( entity )
				.State = EntityState.Modified;

			int count = await DataContext.SaveChangesAsync();

			var res = new ModelVersion()
			{
				DashboardId = dashboardId,
				RestoredFrom = version,
				Version = model.Bag.Version + 1
			};
			
			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<CompareReply> Compare( CompareRequest r )
		{
			var entityBase = await DataContext
				.Dashboards
				.FindAsync( r.BaseDashboardId );

			var entityNew = DataContext
				.Dashboards
				.Find( r.NewDashboardId );

			if( null == entityBase || null == entityNew )
				throw new BadGetDashboardException();

			var verEntityBase = DataContext
				.DashboardVersions
				.FirstOrDefault( x => x.DashboardId == r.BaseDashboardId && x.Version == r.BaseVersion );

			var verEntityNew = DataContext
				.DashboardVersions
				.FirstOrDefault( x => x.DashboardId == r.NewDashboardId && x.Version == r.NewVersion );

			if( null == verEntityBase || null == verEntityNew )
				throw new BadGetDashboardVersionException();

			var jdp = new JsonDiffPatch();
			var diff = jdp.Diff( verEntityBase.Data, verEntityNew.Data );

			var reply = new CompareReply()
			{
				Base = verEntityBase.Data,
				New = verEntityNew.Data,
				Diff = diff
			};

			return reply;
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<PermissionRules> GetPermissions( int id ) =>
			GetPermissions( await GetDashboardWithPermissions( id ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="uid"></param>
		/// <returns></returns>
		public async Task<PermissionRules> GetPermissions( string uid ) =>
			GetPermissions( await GetDashboardWithPermissions( 0, uid ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		private PermissionRules GetPermissions( EntityDashboard entity ) 
		{
			if( null == entity )
				throw new BadGetDashboardException();

			var perms = new PermissionRules();

			var nat = entity
				.Permissions
				.Select( x => x
					.ToModel()
					.AddTime( DataContext.Entry( entity ) ) )
				.ToList();

			var parent = entity
				.Folder?
				.Permissions
				.Select( x => x
					.ToModel()
					.AddTime( DataContext.Entry( entity.Folder ) ) )
				.ToList() ?? new List<ModelFolderPermission>();

			if( null != entity.Folder && !entity.Folder.HasAcl )
			{
				parent.AddRange( ModelFolderPermission.GetDefault( entity.Folder.ToModel() ) );
			}

			if( null == entity.Folder && !entity.HasAcl )
			{
				nat.AddRange( ModelDashboardPermission.GetDefault( entity.ToModel() ) );
			}

			perms.AddRange( parent );
			perms.AddRange( nat );

			return perms;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		/// <returns></returns>
		public async Task<ModelDashboardPermissions> UpdatePermissions( int id,	ModelDashboardPermissions perms )
		{
			if( !CheckDuplicatePermissions( perms ) )
				throw new BadUpdateDashboardPermissionsDuplicateException();

			var entity = await GetDashboardWithPermissions( id );

			if( null == entity )
				throw new BadGetDashboardException();

			if( !CheckDowngradedPermissions( entity, perms ) )
				throw new BadUpdateDashboardPermissionsDowngradeException();

			entity.Permissions.Clear();
			entity.HasAcl = true;

			if( perms?.Count > 0 )
			{
				entity.Permissions = perms
					.Select( x => x.ToEntity() )
					.ToList();
			}

			DataContext.SaveChanges();

			var models = entity
				.Permissions
				.UpdateId( perms )
				.ToModels();

			return models;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="permissions"></param>
		/// <returns></returns>
		private bool CheckDuplicatePermissions( ModelDashboardPermissions permissions )
		{
			foreach( var p in permissions )
			{
				var list = permissions
					.Where( x => x != p )
					.ToList();

				if( p.Role.HasValue && null != list.FirstOrDefault( x => x.Role == p.Role ) )
					return false;

				if( null != p.User && null != list.FirstOrDefault( x => x.User?.Id == p.User?.Id ) )
					return false;

				if( null != p.Team && null != list.FirstOrDefault( x => x.Team?.Id == p.Team?.Id ) )
					return false;
			}

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="permissions"></param>
		/// <returns></returns>
		private bool CheckDowngradedPermissions( EntityDashboard entity, ModelDashboardPermissions perms )
		{
			if( null == entity.Folder )
				return true;

			foreach( var p in entity.Folder?.Permissions ) 
			{
				if( p.UserId.HasValue ) 
				{
					var up = perms.FirstOrDefault( x => x.User?.Id == p.UserId );

					if( null != up ) 
					{
						if( up.Permission < p.Permission )
							return false;
					}
				}
				else if( p.TeamId.HasValue )
				{
					var tp = perms.FirstOrDefault( x => x.Team?.Id == p.TeamId );

					if( null != tp )
					{
						if( tp.Permission < p.Permission )
							return false;
					}
				}
				else if( p.Role.HasValue )
				{
					var rp = perms.FirstOrDefault( x => x.Role == p.Role );

					if( null != rp )
					{
						if( rp.Permission < p.Permission )
							return false;
					}
				}
			}

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		private async Task<EntityDashboard> GetDashboardWithPermissions( int id, string uid = null ) 
		{
			var q = DataContext
				.Dashboards
				.ForActiveOrg()
				.Include( x => x.Permissions )
				.ThenInclude( x => x.User )
				.Include( x => x.Permissions )
				.ThenInclude( x => x.Team )
				.Include( x => x.Folder )
				.ThenInclude( x => x.Permissions )
				.ThenInclude( x => x.User )
				.Include( x => x.Folder )
				.ThenInclude( x => x.Permissions )
				.ThenInclude( x => x.Team );

			return await ( string.IsNullOrEmpty( uid ) ? 
				q.FirstOrDefaultAsync( x => x.Id == id ) :
				q.FirstOrDefaultAsync( x => x.Uid == uid ));  
		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <returns></returns>
		public async Task<SearchTree> Search( DashboardSearchFilter filter ) 
		{
			var tree = new SearchTree();

			var teams = new UserRepository( DataContext )
				.ForActiveOrg( DataContext.ActiveOrgId )
				.GetUserTeams( DataContext.ActiveUserId )
				.Value ?? new ModelTeams();

			await SearchDashboards( filter, tree, teams );

			await SearchFolders( filter, tree, teams );

			return tree;			
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <param name="tree"></param>
		private async Task SearchDashboards( DashboardSearchFilter filter, SearchTree tree, ModelTeams teams ) 
		{
			var request = DataContext
				.Dashboards
				.ForActiveOrg()
				.AsQueryable();

			if( filter.HasFolderIds )
			{
				request = request.Where( d => ( null == d.FolderId && filter.FolderIds.Contains( 0 ) ) ?
						true : ( null != d.FolderId && filter.FolderIds.Contains( d.FolderId.Value ) ) );
			}

			if( !string.IsNullOrEmpty( filter.Query ) )
			{
				request = request
					.Where( x => x.Title.ToLower().Contains( filter.Query.ToLower() ) );
					//.Where( x => x.Title.ToLower() == filter.Query.ToLower());
			}

			if( filter.Starred ) 
			{
				request = request
					.Where( x => x.Stars.Any( y => y.UserId == filter.UserId ) );
			}

			if( filter.HasDashboardIds ) 
			{
				request = request
					.Where( x => filter.DashboardIds.Contains( x.Id ) );
			}

			var task = await request
				.Include( x => x.Folder )
				.ThenInclude( x => x.Permissions )
				.Include( x => x.Tags )
				.Include( x => x.Stars )
				.Include( x => x.Permissions )
				.ToListAsync();

			var dashboards = task
				.Where( x => CheckViewPermission( x, teams ) )
				.Select( x => x
					.ToModel()
					.AddVersion( DataContext.Entry( x ) ))
				.ToList();

			if( filter.HasTags )
			{
				bool tagPred( ModelDashboard x ) => ( filter.TagOperator == SearchOperator.And ) ?
					filter.Tags.Intersect( x.Tags ).Count() == filter.Tags.Count() :
					x.Tags.Intersect( filter.Tags ).Any();

				dashboards = dashboards
					.Where( tagPred )
					.ToList();
			}

			tree.Dashboards = dashboards;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <param name="tree"></param>
		private async Task SearchFolders( DashboardSearchFilter filter, SearchTree tree, ModelTeams teams ) 
		{
			var shouldReturn =
				( null != filter.FolderIds && !filter.FolderIds.Contains( 0 ) ) ||
				( filter.Starred ) ||
				( filter.HasTags ) ||
				( filter.HasDashboardIds );

			if( shouldReturn )
				return;

			var request = DataContext
				.Folders
				.ForActiveOrg()
				.Include( x => x.Permissions )
				.AsQueryable();

			if( !string.IsNullOrEmpty( filter.Query ) )
			{
				request = request
					.Where( x => x.Title.ToLower().Contains( filter.Query.ToLower() ) );
			}

			var folders = await request.ToListAsync();

			tree.Folders = folders
				.Where( x => CheckViewPermission( x, teams ) )
				.Select( x => x.ToModel() )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <param name="teams"></param>
		/// <returns></returns>
		private bool CheckViewPermission( Folder f, ModelTeams teams )
		{
			var target = Security.Permission.View;
			var user = DataContext.ActiveUser;

			if( user.Role == Role.Admin || user.IsRoot || !f.HasAcl )
				return true;

			foreach( var p in f.Permissions )
			{
				if( p.UserId == user.Id && p.Permission >= target )
					return true;

				if( p.Role == user.Role && p.Permission >= target )
					return true;
			}

			var teamPerms = f
				.Permissions
				.Where( x => x.TeamId.HasValue )
				.ToList();

			foreach( var p in teamPerms )
			{
				foreach( var t in teams )
				{
					if( p.TeamId == t.Id && p.Permission >= target )
						return true;
				}
			}

			return false;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <param name="teams"></param>
		/// <returns></returns>
		private bool CheckViewPermission( Dashboard d, ModelTeams teams )
		{
			var target = Security.Permission.View;
			var user = DataContext.ActiveUser;

			if( user.Role == Role.Admin || user.IsRoot || !d.HasAcl )
				return true;

			foreach( var p in d.Permissions )
			{
				if( p.UserId == user.Id && p.Permission >= target )
					return true;

				if( p.Role == user.Role && p.Permission >= target )
					return true;
			}

			var teamPerms = d
				.Permissions
				.Where( x => x.TeamId.HasValue )
				.ToList();

			foreach( var p in teamPerms )
			{
				foreach( var t in teams )
				{
					if( p.TeamId == t.Id && p.Permission >= target )
						return true;
				}
			}

			return ( null == d.Folder ) ? false : CheckViewPermission( d.Folder, teams );
		}
		#endregion
	}
}

