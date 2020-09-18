#region Usings
using ED.Security;
using EntityDashboardPermission = ED.Data.DashboardPermission;
using ModelDashboardPermission = ED.Dashboards.DashboardPermission;
using EntityDashboardPermissions = System.Collections.Generic.List<ED.Data.DashboardPermission>;
using ModelDashboardPermissions = System.Collections.Generic.List<ED.Dashboards.DashboardPermission>;
using System;
using System.Linq;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class DashboardPermission
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Dashboard Dashboard{ get; set; }
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
			var header = $"{Id}|{DashboardId}";

			var body = ( null != Role ) ? 
				$"role [{Role}|{Permission}]" : ( null != TeamId ) ?
					$"team [{TeamId}|{Permission}]" :	$"user [{UserId}|{Permission}]"; ;

			return $"{header} {body}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelDashboardPermission ToModel()
		{
			return new ModelDashboardPermission()
			{
				Id = Id,
				OrgId = OrgId,
				Dashboard = Dashboard?.ToModel(),
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
	internal static class DashboardPermissionModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityDashboardPermission ToEntity( this ModelDashboardPermission dp )
		{
			var e = new EntityDashboardPermission()
			{
				//OrgId = fp.Org,
				DashboardId = dp.Dashboard.Id,
				Permission = dp.Permission
			};

			if( null != dp.User )
			{
				e.UserId = dp.User.Id;
			}
			else if( null != dp.Team )
			{
				e.TeamId = dp.Team.Id;
			}
			else
			{
				e.Role = dp.Role;
			}

			return e;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		public static EntityDashboardPermissions UpdateId( this EntityDashboardPermissions entityPerms, ModelDashboardPermissions perms )
		{
			var count = Math.Min( perms.Count, entityPerms.Count );

			for( int i = 0; i < count; ++i )
			{
				perms [ i ].Id = entityPerms [ i ].Id;
				//perms [ i ].Folder = entityPerms [ i ].Folder.ToModel();
			}

			return entityPerms;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		public static ModelDashboardPermissions ToModels( this EntityDashboardPermissions entityPerms )
		{
			return entityPerms
				.Select( x => x.ToModel() )
				.ToList();
		}
		#endregion
	}
}
