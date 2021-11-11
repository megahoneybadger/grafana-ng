#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Permissions = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class AnnotationAuthorizer : PermissionAuthorizer
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public AnnotationRepository AnnotRepo => new AnnotationRepository( DataContext );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public DashboardRepository DashboardRepo => new DashboardRepository( DataContext );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		protected override string Uid => string.Empty;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		protected virtual int Id 
		{
			get 
			{
				var dashboardId = DashboardIdFromBody;

				if( dashboardId.HasValue )
					return dashboardId.Value;

				var sAnnotId = _context
					.HttpContext
					.Request
					.RouteValues [ "id" ] as string;

				int.TryParse( sAnnotId, out int annotId );

				return AnnotRepo[ annotId ]?.Value?.DashboardId ?? 0;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected virtual int? DashboardIdFromBody
		{
			get 
			{
				var dr = JsonConvert.DeserializeObject( ReadBody() ) as JObject;

				return dr? [ "dashboardId" ]?.ToObject<int?>();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		protected override Permissions Permissions => DashboardRepo.GetPermissions( Id ).Value;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public AnnotationAuthorizer( AuthorizationFilterContext context, Permission? target )
			: base( context, target )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="target"></param>
		public static void Authorize( AuthorizationFilterContext context, Permission? target ) =>
			new AnnotationAuthorizer( context, target ).Authorize();
		#endregion
	}
}
