#region Usings
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class NeedTokenRefreshMiddleware
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
		public NeedTokenRefreshMiddleware( RequestDelegate next )
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
      if( httpContext.Response.StatusCode == StatusCodes.Status401Unauthorized ) 
        return;

      //Move to next delegate/middleware in the pipleline
      await _next.Invoke( httpContext );
    }
    #endregion
  }

  public static class NeedTokenRefreshMiddlewareExt
  {
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="applicationBuilder"></param>
		/// <returns></returns>
		public static IApplicationBuilder UseNeedTokenRefreshMiddleware( 
      this IApplicationBuilder applicationBuilder )
    {
      return applicationBuilder.UseMiddleware<NeedTokenRefreshMiddleware>();
    }
    #endregion
  }
}
