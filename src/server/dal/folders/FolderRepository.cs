#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

using ModelFolder = ED.Dashboards.Folder;
using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using System.Threading.Tasks;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class FolderRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public ModelFolder this [ int id ]
		{
			get
			{
				var entity = DataContext
					.Folders
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				var model = entity?
					.ToModel()
					.AddTime( DataContext.Entry( entity ) )
					.AddVersion( DataContext.Entry( entity ) );

				return model;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public FolderRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public Task<ModelFolders> GetFolders() =>
			DataContext
				.Folders
				.ForActiveOrg()
				.Select( x => x
					.ToModel()
					.AddTime(DataContext.Entry(x ) )
					.AddVersion( DataContext.Entry(x ) ) )
				.ToListAsync();
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelFolder> GetFolder( int id )
		{
			var entity = await DataContext
				.Folders
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

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
		public async Task<ModelFolder> GetFolder( string uid )
		{
			var entity = await DataContext
				.Folders
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Uid == uid );

			var model = entity?
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			return model;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelFolder> Create( ModelFolder f ) 
		{
			var entity = f
				.ToEntity()
				.IncludeActiveOrgId( DataContext );

			DataContext.Add( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( f )
				.ToModel()
				.AddTime( DataContext.Entry( entity ) )
				.AddVersion( DataContext.Entry( entity ) );

			f.Uid = entity.Uid;

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelFolder> Update( string uid, ModelFolder f )
		{
			var entity = await DataContext
				.Folders
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Uid == uid );

			if( null == entity )
				throw new BadGetFolderException();

			entity.Update( f );

			if( ExpandoHelper.GetProperty<bool>( f, "Overwrite" ) )
			{
				var v = f.Bag.Version;

				var currentVersion = ( int )DataContext
					.Entry( entity )
					.Property( DataContext.COL_VERSION )
					.CurrentValue;

				if( currentVersion != v )
					throw new BadUpdateFolderVersionMismatchException();
			}

			DataContext.Update( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( f )
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
			var entity = await DataContext
				.Folders
				.ForActiveOrg()
				.Include( x => x.Dashboards )
				.FirstOrDefaultAsync( x => x.Uid == uid );

			if( null == entity )
				throw new BadGetFolderException();

			DataContext.Remove( entity );

			var res = await DataContext.SaveChangesAsync();

			return ( 0 != res );
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelFolderPermissions> GetPermissions( string uid )
		{
			var folder = await DataContext
				.Folders
				.ForActiveOrg()
				.Include( x => x.Permissions )
				.ThenInclude( x => x.User )
				.Include( x => x.Permissions )
				.ThenInclude( x => x.Team )
				.FirstOrDefaultAsync( x => x.Uid == uid );

			if( null == folder )
				throw new BadGetFolderException();

			var permissions = folder
				.Permissions
				.Select( x => x
					.ToModel()
					.AddTime( DataContext.Entry( folder ) ) )
				.ToList();

			if( !folder.HasAcl )
			{
				permissions.AddRange( ModelFolderPermission.GetDefault( folder.ToModel() ) );
			}

			return permissions;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		/// <returns></returns>
		public async Task<ModelFolderPermissions> UpdatePermissions( string uid,	ModelFolderPermissions perms )
		{
			if( !CheckDuplicatePermissions( perms ) )
				throw new BadUpdateFolderPermissionsDuplicateException();

			var entity = await DataContext
				.Folders
				.ForActiveOrg()
				.Include( x => x.Permissions )
				.FirstOrDefaultAsync( x => x.Uid == uid );

			if( null == entity )
				throw new BadGetFolderException();

			entity.Permissions.Clear();
			entity.HasAcl = true;

			if( null != perms && perms.Count > 0 )
			{
				entity.Permissions = perms
					.Select( x => x.ToEntity() )
					.ToList();
			}

			await DataContext.SaveChangesAsync();

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
		private static bool CheckDuplicatePermissions( IEnumerable<ModelFolderPermission> permissions )
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
		#endregion
	}
}
