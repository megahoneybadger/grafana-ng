#region Usings
using ED.Dashboards;
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;
using Permissions = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class FolderAuthorizer : PermissionAuthorizer
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		protected override string Uid
		{
			get
			{
				var user = User;

				var uid = _context
					.HttpContext
					.Request
					.RouteValues [ "uid" ] as string;

				if( string.IsNullOrEmpty( uid ) )
				{
					var sid = _context
						.HttpContext
						.Request
						.RouteValues [ "id" ] as string;

					if( !int.TryParse( sid, out int id ) )
						return uid;

					var res = Repo.ForActiveOrg( user.OrgId ) [ id ];

					return res.HasError ? uid : res.Value.Uid;
				}

				return uid;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public FolderRepository Repo => new FolderRepository( DataContext );
		/// <summary>
		/// 
		/// </summary>
		protected override Permissions Permissions =>
			Repo
				.GetPermissions( Uid )
				.Value
				.OfType<DomainPermission>()
				.ToList();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public FolderAuthorizer( AuthorizationFilterContext context, Permission? target )
			:base( context, target )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public static void Authorize( AuthorizationFilterContext context, Permission? target ) =>
			new FolderAuthorizer( context, target ).Authorize();
		#endregion
	}
}
