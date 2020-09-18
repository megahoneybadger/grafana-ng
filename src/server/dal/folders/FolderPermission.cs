#region Usings
using ED.Security;
using System.Collections.Generic;
using EntityFolder = ED.Data.Folder;
using ModelFolder = ED.Dashboards.Folder;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using EntityFolderPermission = ED.Data.FolderPermission;

using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using EntityFolderPermissions = System.Collections.Generic.List<ED.Data.FolderPermission>;
using System;
using System.Linq;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class FolderPermission
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int FolderId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Folder Folder { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? UserId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? TeamId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role? Role { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Permission Permission { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Team Team{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var header = $"{Id}|{FolderId}";

			var body = ( null != Role ) ? 
				$"role [{Role}|{Permission}]" : ( null != TeamId ) ?
					$"team [{TeamId}|{Permission}]" :	$"user [{UserId}|{Permission}]"; ;

			return $"{header} {body}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelFolderPermission ToModel()
		{
			return new ModelFolderPermission()
			{
				Id = Id,
				Folder = Folder?.ToModel(),
				User = User?.ToModel(),
				Team = Team?.ToModel(),
				Role = Role,
				Permission = Permission
			};
		}

		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class FolderPermissionModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityFolderPermission ToEntity( this ModelFolderPermission fp )
		{
			var e = new EntityFolderPermission()
			{
				//OrgId = fp.Org,
				FolderId = fp.Folder.Id,
				Permission = fp.Permission
			};

			if( null != fp.User )
			{
				e.UserId = fp.User.Id;
			}
			else if( null != fp.Team )
			{
				e.TeamId = fp.Team.Id;
			}
			else
			{
				e.Role = fp.Role;
			}

			return e;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		public static EntityFolderPermissions UpdateId( this EntityFolderPermissions entityPerms, ModelFolderPermissions perms )
		{
			var count = Math.Min( perms.Count, entityPerms.Count );

			for( int i = 0; i < count; ++i )
			{
				perms [ i ].Id = entityPerms [ i ].Id;
				perms [ i ].Folder = entityPerms [ i ].Folder.ToModel();
			}

			return entityPerms;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		public static ModelFolderPermissions ToModels( this EntityFolderPermissions entityPerms )
		{
			return entityPerms
				.Select( x => x.ToModel() )
				.ToList();
		}
		#endregion
	}
}
