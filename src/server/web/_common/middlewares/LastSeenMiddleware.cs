#region Usings
using ED.Data;
using ED.Web.Security;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Controllers;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class LastSeenMiddleware
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private readonly RequestDelegate _next;
		#endregion

		#region Class initialzations
    /// <summary>
    /// 
    /// </summary>
    /// <param name="next"></param>
		public LastSeenMiddleware( RequestDelegate next )
    {
      _next = next;
    }
		#endregion

		#region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpContext"></param>
    /// <returns></returns>
		public async Task InvokeAsync( HttpContext httpContext )
    {
      var controllerActionDescriptor = httpContext
       .GetEndpoint()
       .Metadata
       .GetMetadata<ControllerActionDescriptor>();

      var controllerName = controllerActionDescriptor.ControllerName;
      var actionName = controllerActionDescriptor.ActionName;

      httpContext.Items [ "target" ] = (contrller: controllerName, action: actionName);

      var dc = ( DataContext )httpContext
        .RequestServices
        .GetService( typeof( DataContext ) );

      if( httpContext.User.Claims.Count() > 0 ) 
      {
        var user = httpContext.User.GetUser();
        //var id = .Id;
        dc.ActiveOrgId = user.OrgId;
        //new UserRepository( dc ).UpdateLastSeen( id );
      }

      //Move to next delegate/middleware in the pipleline
      await _next.Invoke( httpContext );
    }
    #endregion
  }

  public static class LastSeenMiddlewareExt
  {
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="applicationBuilder"></param>
		/// <returns></returns>
		public static IApplicationBuilder UseLastSeenMiddleware( 
      this IApplicationBuilder applicationBuilder )
    {
      return applicationBuilder.UseMiddleware<LastSeenMiddleware>();
    }
    #endregion
  }
}
