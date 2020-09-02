#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;
using System.Text;
using ED.Web.Dashboards;
using Permissions = System.Collections.Generic.List<ED.Dashboards.DomainPermission>;
using Newtonsoft.Json;
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
					var request = _context
						.HttpContext
						.Request;

					// IMPORTANT: Ensure the requestBody can be read multiple times.
					HttpRequestRewindExtensions.EnableBuffering( request );

					// Leave the body open so the next middleware can read it.
					using var reader = new StreamReader(
							request.Body,
							encoding: Encoding.UTF8,
							detectEncodingFromByteOrderMarks: false,
							bufferSize: -1,
							leaveOpen: true );

					var body = reader.ReadToEnd();
					// Do some processing with body…

					// Reset the request body stream position so the next middleware can read it
					request.Body.Position = 0;

					var dr = JsonConvert.DeserializeObject<DashboardsController.DashboardRequest>( body );

					return dr?.Dashboard?.Uid;
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
