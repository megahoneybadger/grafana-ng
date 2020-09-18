#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

using ModelFolder = ED.Dashboards.Folder;
using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
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
		public OperationResult<ModelFolder> this [ int id ]
		{
			get
			{
				OperationResult<ModelFolder> res = null;

				try
				{
					var entity = DataContext
						.Folders
						.ForActiveOrg()
						.FirstOrDefault( x => x.Id == id );

					var model = entity?
							.ToModel()
							.AddTime( DataContext.Entry( entity ) )
							.AddVersion( DataContext.Entry( entity ) );

					res = OperationResult<ModelFolder>.Create(
						() => null != model, model, ErrorCode.BadGetFolder );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelFolder>.Create( ErrorCode.BadGetFolder, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelFolders> All
		{
			get
			{
				OperationResult<ModelFolders> res;

				try
				{
					var folders = DataContext
						.Folders
						.ForActiveOrg()
						.Select( x => x
							.ToModel()
							.AddTime( DataContext.Entry( x ) )
							.AddVersion( DataContext.Entry( x ) ) )
						.ToList();

					res = OperationResult<ModelFolders>.Create( folders );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelFolders>.Create( ErrorCode.BadGetFolders, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelFolder> this [ string uid ]
		{
			get
			{
				OperationResult<ModelFolder> res;

				try
				{
					var entity = DataContext
						.Folders
						.ForActiveOrg()
						.FirstOrDefault( x => x.Uid == uid );

					var model = entity?
						.ToModel()
						.AddTime( DataContext.Entry( entity ) )
						.AddVersion( DataContext.Entry( entity ) );

					res = OperationResult<ModelFolder>.Create(
						() => null != model, model, ErrorCode.BadGetFolder );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelFolder>.Create( ErrorCode.BadGetFolder, e );
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
		public FolderRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelFolder> Create( ModelFolder f ) 
		{
			OperationResult<ModelFolder> res;

			try
			{
				var entity = f
					.ToEntity()
					.IncludeActiveOrgId( DataContext );

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( f )
					.ToModel()
					.AddTime( DataContext.Entry( entity ) )
					.AddVersion( DataContext.Entry( entity ) );

				f.Uid = entity.Uid;

				res = OperationResult<ModelFolder>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelFolder>.Create( ErrorCode.BadCreateFolder, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelFolder> Update( string uid, ModelFolder f )
		{
			OperationResult<ModelFolder> res;

			try
			{
				var entity = DataContext
					.Folders
					.ForActiveOrg()
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<ModelFolder>.Create( ErrorCode.BadGetFolder );

				entity.Update( f );

				if( ExpandoHelper.GetProperty<bool>( f, "Overwrite" ) ) 
				{
					var v = f.Bag.Version;

					var currentVersion = ( int )DataContext
						.Entry( entity )
						.Property( DataContext.COL_VERSION )
						.CurrentValue;

					if( currentVersion != v )
						return OperationResult<ModelFolder>.Create( ErrorCode.BadUpdateFolderVersionMismatch );
				}

				DataContext.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( f )
					.ToModel()
					.AddTime( DataContext.Entry( entity ) )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelFolder>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelFolder>.Create( ErrorCode.BadUpdateFolder, e );
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
					.Folders
					.ForActiveOrg()
					.Include( x => x.Dashboards )
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetFolder );

				DataContext.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteFolder, e );
			}

			return res;
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelFolderPermissions> GetPermissions( string uid )
		{
			OperationResult<ModelFolderPermissions> res = null;

			try
			{
				var folder = DataContext
					.Folders
					.ForActiveOrg()
					.Include( x => x.Permissions )
					.ThenInclude( x => x.User )
					.Include( x => x.Permissions )
					.ThenInclude( x => x.Team )
					.FirstOrDefault( x => x.Uid == uid );

				if( null == folder )
					return OperationResult<ModelFolderPermissions>.Create( ErrorCode.BadGetFolder );

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

				res = OperationResult<ModelFolderPermissions>.Create( permissions );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelFolderPermissions>.Create( ErrorCode.BadGetFolderPermissions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		/// <returns></returns>
		public OperationResult<ModelFolderPermissions> UpdatePermissions( string uid,	ModelFolderPermissions perms )
		{
			OperationResult<ModelFolderPermissions> res;

			if( !CheckDuplicatePermissions( perms ) )
				return OperationResult<ModelFolderPermissions>.Create( ErrorCode.BadUpdateFolderPermissionsDuplicate );

			try
			{
				var entity = DataContext
					.Folders
					.ForActiveOrg()
					.Include( x => x.Permissions )
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<ModelFolderPermissions>.Create( ErrorCode.BadGetFolder );

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

				res = OperationResult<ModelFolderPermissions>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelFolderPermissions>.Create( ErrorCode.BadUpdateFolderPermissions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="permissions"></param>
		/// <returns></returns>
		private bool CheckDuplicatePermissions( IEnumerable<ModelFolderPermission> permissions )
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
