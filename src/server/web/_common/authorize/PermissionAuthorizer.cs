#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelUser = ED.Security.User;
using Permissions = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class PermissionAuthorizer
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		protected AuthorizationFilterContext _context;
		/// <summary>
		/// 
		/// </summary>
		protected Permission? _target;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		protected virtual DataContext DataContext =>
			_context
				.HttpContext
				.RequestServices
				.GetService( typeof( DataContext ) ) as DataContext;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		protected virtual ModelUser User =>
			_context
				.HttpContext
				.User
				.GetUser();
		/// <summary>
		/// 
		/// </summary>
		protected abstract string Uid { get; }
		/// <summary>
		/// 
		/// </summary>
		protected abstract Permissions Permissions { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public PermissionAuthorizer( AuthorizationFilterContext context, Permission? target ) 
		{
			_target = target;
			_context = context;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="role"></param>
		public virtual void Authorize()
		{
			LoadPermissions();

			if( null == _target )
				return;

			var dc = DataContext;

			var allow =
				( _target == Permission.Admin && dc.Acl.CanAdmin ) ||
				( _target == Permission.Edit && dc.Acl.CanEdit ) ||
				( _target == Permission.View && dc.Acl.CanView );

			if( !allow )
			{
				_context.Result = new ForbidResult();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="p"></param>
		/// <returns></returns>
		protected virtual void LoadPermissions()
		{
			var user = User;
			var dc = DataContext;
			dc.Acl = new DataContext.AccessControlList();

			if( user.IsRoot || user.Role == Role.Admin )
			{
				dc.Acl.CanAdmin = true;
				dc.Acl.CanEdit = true;
				dc.Acl.CanView = true;
			}
			else
			{
				var perms = Permissions;

				var teamPerms = perms
					?.Where( x => null != x.Team )
					.ToList();

				var teams = new UserRepository( dc )
					.GetUserTeams( user.Id )
					.Value ?? new ModelTeams();

				dc.Acl.CanAdmin = HasPermission( perms, teams, Permission.Admin );
				dc.Acl.CanEdit = HasPermission( perms, teams, Permission.Edit );
				dc.Acl.CanView = HasPermission( perms, teams, Permission.View );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="perms"></param>
		/// <param name="teams"></param>
		/// <param name="target"></param>
		/// <returns></returns>
		protected virtual bool HasPermission(
			Permissions perms, ModelTeams teams, Permission target )
		{
			var user = User;

			if( null != perms )
			{
				foreach( var p in perms )
				{
					if( p.User?.Id == user.Id && p.Permission >= target )
						return true;

					if( p.Role == user.Role && p.Permission >= target )
						return true;
				}
			}

			var teamPerms = perms
				?.Where( x => null != x.Team )
				.ToList();

			if( null != teamPerms ) 
			{
				foreach( var p in teamPerms )
				{
					foreach( var t in teams )
					{
						if( p.Team.Id == t.Id && p.Permission >= target )
							return true;
					}
				}
			}

			return false;
		}
		#endregion
	}
}
