#region Usings
using ED.Dashboards;
using ED.Security;
using JsonDiffPatchDotNet;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelDashboards> All
		{
			get
			{
				OperationResult<ModelDashboards> res;

				try
				{
					var dashboards = DataContext
						.Dashboards
						.ForActiveOrg()
						.Select( x => x.ToModel())
						.ToList();

					res = OperationResult<ModelDashboards>.Create( dashboards );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelDashboards>.Create( ErrorCode.BadGetDashboards, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<Tags> Tags
		{
			get
			{
				OperationResult<Tags> res = null;

				try
				{
					var tags = DataContext
						.DashboardTags
						.Select( x => x.Term )
						.ToList();

					res = OperationResult<Tags>.Create( tags );
				}
				catch( Exception e )
				{
					res = OperationResult<Tags>.Create( ErrorCode.BadGetDashboardTags, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelDashboard> this [ string uid ]
		{
			get
			{
				OperationResult<ModelDashboard> res = null;

				try
				{
					var entity = DataContext
						.Dashboards
						.ForActiveOrg()
						.Include( x => x.Tags )
						.Include( x => x.Stars )
						.Include( x => x.Folder )
						.FirstOrDefault( x => x.Uid == uid );

					var model = entity?
							.ToModel()
							.AddTime( DataContext.Entry( entity ) )
							.AddVersion( DataContext.Entry( entity ) );

					res = OperationResult<ModelDashboard>.Create(
						() => null != model, model, ErrorCode.BadGetDashboard );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelDashboard>.Create( ErrorCode.BadGetDashboard, e );
				}

				return res;
			}
		}
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

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public OperationResult<ModelDashboard> Create( ModelDashboard d ) 
		{
			OperationResult<ModelDashboard> res;

			try
			{
				var existing = DataContext
					.Dashboards
					.ForActiveOrg()
					.FirstOrDefault( x =>
						x.Title == d.Title &&
						d.FolderId == x.FolderId );

				if( null != existing )
				{
					if( !ExpandoHelper.GetProperty<bool>( d, "Overwrite" ) )
						return OperationResult<ModelDashboard>.Create( ErrorCode.BadCreateDashboardDuplicate );
					
					DataContext.Dashboards.Remove( existing );
				}
			
				var entity = d
					.ToEntity( DataContext )
					.IncludeActiveOrgId( DataContext );

				entity.Versions.Add( new DashboardVersion( d ) );

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( d )
					.ToModel()
					.AddTime( DataContext.Entry( entity ) )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelDashboard>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDashboard>.Create( ErrorCode.BadCreateDashboard, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public OperationResult<ModelDashboard> Update( ModelDashboard d )
		{
			OperationResult<ModelDashboard> res;

			try
			{
				var entity = DataContext
					.Dashboards
					.ForActiveOrg()
					.Include( x => x.Tags )
					.Include( x => x.Alerts )
					.FirstOrDefault( x => x.Uid == d.Uid );

				if( null == entity )
					return OperationResult<ModelDashboard>.Create( ErrorCode.BadGetDashboard );

				var existing = DataContext
					.Dashboards
					.ForActiveOrg()
					.FirstOrDefault( x =>
						x.Title == d.Title &&
						d.FolderId == x.FolderId &&
						x.Uid != d.Uid );

				if( null != existing )
				{
					if( !ExpandoHelper.GetProperty<bool>( d, "Overwrite" ) )
						return OperationResult<ModelDashboard>.Create( ErrorCode.BadCreateDashboardDuplicate );

					DataContext.Dashboards.Remove( existing );
				}

				var currentVersion = ( int )DataContext
					.Entry( entity )
					.Property( DataContext.COL_VERSION )
					.CurrentValue;

				DataContext
					.Entry( entity )
					.State = EntityState.Modified;

				if( currentVersion > ExpandoHelper.GetProperty<int>( d, "Version" ) )
					return OperationResult<ModelDashboard>.Create( ErrorCode.BadUpdateDashboardVersionMismatch );

				entity.Update( DataContext, d );

				DataContext.SaveChanges();

				var model = entity
					.ToModel()
					.AddTime( DataContext.Entry( entity ) )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelDashboard>.Create( model );
			}
			catch( AlertValidationException e )
			{
				res = OperationResult<ModelDashboard>.Create( ErrorCode.BadUpdateDashboardValidation, e );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDashboard>.Create( ErrorCode.BadUpdateDashboard, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( string uid )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Dashboards
					.ForActiveOrg()
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetDashboard );

				DataContext.Dashboards.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteDashboard, e );
			}

			return res;
		}
		#endregion

		#region Class 'Versions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelVersions> GetVersions( int dashboardId,
			int? limit = null, int? start = null )
		{
			OperationResult<ModelVersions> res = null;

			try
			{
				var request = DataContext
					.DashboardVersions
					.Where( x => x.DashboardId == dashboardId )
					.OrderByDescending( x => x.Version );

				if( start.HasValue )
				{
					request = ( IOrderedQueryable<DashboardVersion> )  request.Skip( start.Value );
				}

				if( limit.HasValue )
				{
					request = ( IOrderedQueryable<DashboardVersion> )request.Take( limit.Value );
				}

				var data = request
					
					.ToList();

				var models = data
					.Select( x => x
						.ToModel()
						.AddTime( DataContext.Entry( x ) ) )
					.ToList();

				res = OperationResult<ModelVersions>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelVersions>.Create( ErrorCode.BadGetDashboardVersions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelVersion> GetVersion( int dashboardId, int id )
		{
			OperationResult<ModelVersion> res = null;

			try
			{
				var entity = DataContext
					.DashboardVersions
					.FirstOrDefault( x => x.DashboardId == dashboardId && x.Id == id );

				res = OperationResult<ModelVersion>.Create( () => null != entity,
					entity?
						.ToModel()
						.AddTime( DataContext.Entry( entity ) ), ErrorCode.BadGetDashboardVersion );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelVersion>.Create( ErrorCode.BadGetDashboardVersion, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<int> Restore( int dashboardId, int version )
		{
			OperationResult<int> res = null;

			try
			{
				var entity = DataContext
					.Dashboards
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == dashboardId );

				if( null == entity )
					return OperationResult<int>.Create( ErrorCode.BadGetDashboard );

				var verEntity = DataContext
					.DashboardVersions
					.FirstOrDefault( x => x.DashboardId == dashboardId && x.Version == version );

				if( null == verEntity )
					return OperationResult<int>.Create( ErrorCode.BadGetDashboardVersion );

				var model = entity
					.ToModel()
					.AddVersion( DataContext.Entry( entity ) );

				entity.Restore( model.Bag.Version, verEntity );

				DataContext
					.Entry( entity )
					.State = EntityState.Modified;

				int count = DataContext.SaveChanges();

				// todo
				res = OperationResult<int>.Create( model.Bag.Version + 1 );
			}
			catch( Exception e )
			{
				res = OperationResult<int>.Create( ErrorCode.BadDashboardRestore, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<CompareReply> Compare( CompareRequest r )
		{
			OperationResult<CompareReply> res;

			try
			{
				var entityBase = DataContext
					.Dashboards
					.Find( r.BaseDashboardId );

				var entityNew = DataContext
					.Dashboards
					.Find( r.NewDashboardId );

				if( null == entityBase || null == entityNew )
					return OperationResult<CompareReply>.Create( ErrorCode.BadGetDashboard );

				var verEntityBase = DataContext
					.DashboardVersions
					.FirstOrDefault( x => x.DashboardId == r.BaseDashboardId && x.Version == r.BaseVersion );

				var verEntityNew = DataContext
					.DashboardVersions
					.FirstOrDefault( x => x.DashboardId == r.NewDashboardId && x.Version == r.NewVersion );

				if( null == verEntityBase || null == verEntityNew )
					return OperationResult<CompareReply>.Create( ErrorCode.BadGetDashboardVersion );

				var jdp = new JsonDiffPatch();
				var diff = jdp.Diff( verEntityBase.Data, verEntityNew.Data );

				var reply = new CompareReply()
				{
					Base = verEntityBase.Data,
					New = verEntityNew.Data,
					Diff = diff
				};

				res = OperationResult<CompareReply>.Create( reply );
			}
			catch( Exception e )
			{
				res = OperationResult<CompareReply>.Create( ErrorCode.BadDashboardRestore, e );
			}

			return res;
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<PermissionRules> GetPermissions( int id )
		{
			OperationResult<PermissionRules> res;

			try
			{
				res = GetPermissions( GetDashboardWithPermissions( id ) );
			}
			catch( Exception e )
			{
				res = OperationResult<PermissionRules>.Create( ErrorCode.BadGetDashboardPermissions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="uid"></param>
		/// <returns></returns>
		public OperationResult<PermissionRules> GetPermissions( string uid )
		{
			OperationResult<PermissionRules> res;

			try
			{
				res = GetPermissions( GetDashboardWithPermissions( 0, uid ) );
			}
			catch( Exception e )
			{
				res = OperationResult<PermissionRules>.Create( ErrorCode.BadGetDashboardPermissions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		private OperationResult<PermissionRules> GetPermissions( EntityDashboard entity ) 
		{
			if( null == entity )
				return OperationResult<PermissionRules>.Create( ErrorCode.BadGetDashboard );

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

			return OperationResult<PermissionRules>.Create( perms );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		/// <returns></returns>
		public OperationResult<ModelDashboardPermissions> UpdatePermissions( int id,	ModelDashboardPermissions perms )
		{
			OperationResult<ModelDashboardPermissions> res;

			if( !CheckDuplicatePermissions( perms ) )
				return OperationResult<ModelDashboardPermissions>.Create( ErrorCode.BadUpdateDashboardPermissionsDuplicate );

			try
			{
				var entity = GetDashboardWithPermissions( id );

				if( null == entity )
					return OperationResult<ModelDashboardPermissions>.Create( ErrorCode.BadGetDashboard );

				if( !CheckDowngradedPermissions( entity, perms ) )
					return OperationResult<ModelDashboardPermissions>.Create( ErrorCode.BadUpdateDashboardPermissionsDowngrade );

				entity.Permissions.Clear();
				entity.HasAcl = true;

				if( null != perms && perms.Count() > 0 )
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

				res = OperationResult<ModelDashboardPermissions>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDashboardPermissions>.Create( ErrorCode.BadUpdateDashboardPermissions, e );
			}

			return res;
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
		private EntityDashboard GetDashboardWithPermissions( int id, string uid = null ) 
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

			return string.IsNullOrEmpty( uid ) ? 
				q.FirstOrDefault( x => x.Id == id ) :  q.FirstOrDefault( x => x.Uid == uid ); 

		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <returns></returns>
		public OperationResult<SearchTree> Search( DashboardSearchFilter filter ) 
		{
			//return OperationResult<SearchTree>.Create( ErrorCode.BadGetDashboards);

			var tree = new SearchTree();
			OperationResult<SearchTree> res = null;

			try
			{
				var teams = new UserRepository( DataContext )
					.ForActiveOrg( DataContext.ActiveOrgId )
					.GetUserTeams( DataContext.ActiveUserId )
					.Value ?? new ModelTeams();

				SearchDashboards( filter, tree, teams );

				SearchFolders( filter, tree, teams );

				res = OperationResult<SearchTree>.Create( tree );
			}
			catch//( Exception )
			{
				//res = OperationResult<ModelDashboards>.Create( ErrorCode.BadGetDashboards, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <param name="tree"></param>
		private void SearchDashboards( DashboardSearchFilter filter, SearchTree tree, ModelTeams teams ) 
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

			var dashboards = request
				.Include( x => x.Folder )
				.ThenInclude( x => x.Permissions )
				.Include( x => x.Tags )
				.Include( x => x.Stars )
				.Include( x => x.Permissions )
				.ToList()
				.Where( x => CheckViewPermission( x, teams ) )
				.Select( x => x
					.ToModel()
					.AddVersion( DataContext.Entry( x ) ))
				.ToList();

			if( filter.HasTags )
			{
				Func<ModelDashboard, bool> tagPred = x => ( filter.TagOperator == SearchOperator.And ) ?
					filter.Tags.Intersect( x.Tags ).Count() == filter.Tags.Count() :
					x.Tags.Intersect( filter.Tags ).Count() > 0;

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
		private void SearchFolders( DashboardSearchFilter filter, SearchTree tree, ModelTeams teams ) 
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

			var folders = request.ToList();

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

