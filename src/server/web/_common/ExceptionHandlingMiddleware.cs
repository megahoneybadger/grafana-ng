#region Usings
using ED.Data;
using ED.Web.Security;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using System.Text.Json;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class ExceptionHandlingMiddleware
  {
    #region Class members
		#endregion

		#region Class initialzations
    /// <summary>
    /// 
    /// </summary>
    /// <param name="next"></param>
		public ExceptionHandlingMiddleware( RequestDelegate next )
    {
      
    }
		#endregion

		#region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpContext"></param>
    /// <returns></returns>
		public async static Task InvokeAsync( HttpContext context )
    {
      context.Response.StatusCode = ( int )HttpStatusCode.InternalServerError;
      context.Response.ContentType = "application/json";

			//await context.Response.WriteAsync( "<html lang=\"en\"><body>\r\n" );
			//await context.Response.WriteAsync( "ERROR!<br><br>\r\n" );

			var exceptionHandlerPathFeature =
					context.Features.Get<IExceptionHandlerPathFeature>();

      var problem = new ExceptionResult()
      {
        Code = ErrorCode.BadGetTeams,
        Message = "Failed to find teams"
      };

      var stream = context.Response.Body;
      await JsonSerializer.SerializeAsync( stream, problem );

      //if( exceptionHandlerPathFeature?.Error is FileNotFoundException )
      //{
      //  await context.Response.WriteAsync(
      //                            "File error thrown!<br><br>\r\n" );
      //}

      //await context.Response.WriteAsync(
      //                              "<a href=\"/\">Home</a><br>\r\n" );
      //await context.Response.WriteAsync( "</body></html>\r\n" );
      //await context.Response.WriteAsync( new string( ' ', 512 ) );

      //return null;
      //var content = new ExceptionMessageContent()
      //{
      //  Error = "Bad Request",
      //  Message = "Details of why this request is bad."
      //};

      //return new Bad( content );
    }
    #endregion
  }

  //public static class LastSeenMiddlewareExt
  //{
  //#region Class public methods
  ///// <summary>
  ///// 
  ///// </summary>
  ///// <param name="applicationBuilder"></param>
  ///// <returns></returns>
  //public static IApplicationBuilder UseLastSeenMiddleware( 
  //    this IApplicationBuilder applicationBuilder )
  //  {
  //    return applicationBuilder.UseMiddleware<LastSeenMiddleware>();
  //  }
  //  #endregion
  //}

  public class ExceptionResult 
  {
    public ErrorCode Code { get; init; }
    public string Message { get; init; }
  }
}
