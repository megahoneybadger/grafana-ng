#region Usings
using ED.Data;
using ED.Security;
using ED.Web.Dashboards;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using Permissions = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardAuthorizer : PermissionAuthorizer
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public DashboardRepository Repo => new DashboardRepository( DataContext );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		protected override string Uid 
		{
			get 
			{
				var uid = _context
					.HttpContext
					.Request
					.RouteValues [ "uid" ] as string;

				if( string.IsNullOrEmpty( uid ) ) 
				{
					uid = UidFromBody;
				}

				return uid;
			}
		}
			
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		protected virtual int Id 
		{
			get 
			{
				var sid = _context
					.HttpContext
					.Request
					.RouteValues [ "id" ] as string;

				int.TryParse( sid, out int id );

				return id;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected virtual string UidFromBody
		{
			get 
			{
				try
				{
					return JsonConvert
						.DeserializeObject<DashboardsController.DashboardRequest>( ReadBody() )
						?.Dashboard
						?.Uid;
				}
				catch
				{ }

				return string.Empty;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		protected override Permissions Permissions 
		{
			get 
			{
				return string.IsNullOrEmpty( Uid ) ? 
					Repo.GetPermissions( Id ).Value:
					Repo.GetPermissions( Uid ).Value;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public DashboardAuthorizer( AuthorizationFilterContext context, Permission? target )
			: base( context, target )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public static void Authorize( AuthorizationFilterContext context, Permission? target ) =>
			new DashboardAuthorizer( context, target ).Authorize();
		#endregion
	}
}
