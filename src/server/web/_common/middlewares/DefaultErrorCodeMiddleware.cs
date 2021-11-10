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
  public class DefaultErrorCodeMiddleware
  {
    #region Class constants
    /// <summary>
    /// 
    /// </summary>
    public const string TARGET = "defaultErrorCode";
    #endregion

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
		public DefaultErrorCodeMiddleware( RequestDelegate next )
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
      var desc = httpContext
       .GetEndpoint()
       .Metadata
       .GetMetadata<ControllerActionDescriptor>();

      var controllerName = desc.ControllerName;
      var actionName = desc.ActionName;

      var unhandled = desc.MethodInfo
        .GetCustomAttributes( false )
        .OfType<IHttpVerbUnhandledException>()
        .SingleOrDefault();

      var code = unhandled?.Error ?? ErrorCode.Unknown;

      httpContext.Items [ TARGET ] = code;

      //Move to next delegate/middleware in the pipleline
      await _next.Invoke( httpContext );
    }
    #endregion
  }

  public static class DefaultErrorCodeMiddlewareExt
  {
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="applicationBuilder"></param>
		/// <returns></returns>
		public static IApplicationBuilder UseDefaultErrorCodeMiddleware( 
      this IApplicationBuilder applicationBuilder )
    {
      return applicationBuilder.UseMiddleware<DefaultErrorCodeMiddleware>();
    }
    #endregion
  }
}
