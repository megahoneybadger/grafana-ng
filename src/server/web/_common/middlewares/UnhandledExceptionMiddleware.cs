#region Usings
using ED.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.Extensions.Hosting;
using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
#endregion

namespace ED.Web
{
	public static class CustomExceptionHandlingExt
  {
		#region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="app"></param>
    /// <param name="env"></param>
		public static void UseCustomErrors( this IApplicationBuilder app, IHostEnvironment env )
    {
      if( env.IsDevelopment() )
      {
        app.Use( WriteDevelopmentResponse );
      }
      else
      {
        app.Use( WriteProductionResponse );
      }
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpContext"></param>
    /// <param name="next"></param>
    /// <returns></returns>
    private static Task WriteDevelopmentResponse( HttpContext httpContext, Func<Task> next )
        => WriteResponse( httpContext, includeDetails: true );
    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpContext"></param>
    /// <param name="next"></param>
    /// <returns></returns>
    private static Task WriteProductionResponse( HttpContext httpContext, Func<Task> next )
        => WriteResponse( httpContext, includeDetails: false );
    /// <summary>
    /// 
    /// </summary>
    /// <param name="httpContext"></param>
    /// <param name="includeDetails"></param>
    /// <returns></returns>
    private static async Task WriteResponse( HttpContext context, bool includeDetails )
    {
      var code = GetErrorCode( context );

      context.Response.StatusCode = GetHttpStatusCode( code );
      context.Response.ContentType = "application/problem+json";
      
      var stream = context.Response.Body;

      var opt = new JsonSerializerOptions()
      {
        IgnoreNullValues = true
      };

      await JsonSerializer.SerializeAsync( stream, new 
      {
        Code = code,
        Message = code.GetAttribute<DescriptionAttribute>()?.Description,
        Details = includeDetails ? GetErrorDetails( context ) : null
      }, opt );
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    private static ErrorCode GetErrorCode( HttpContext context ) 
    {
      context.Items.TryGetValue( DefaultErrorCodeMiddleware.TARGET, out var code );

      code ??= ErrorCode.Unknown;

      var exceptionHandlerPathFeature = context
        .Features
        .Get<IExceptionHandlerPathFeature>();

      if( exceptionHandlerPathFeature?.Error is EasyDashboardException exc )
      {
        code = exc.Code;
      }

      return ( ErrorCode )code;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    private static string GetErrorDetails( HttpContext context )
    {
      var error = context
        .Features
        .Get<IExceptionHandlerPathFeature>()
        ?.Error;

      if( error is EasyDashboardException )
        return null;

      var sb = new StringBuilder();

      while( null != error )
      {
        sb.Append( error.Message );

        error = error.InnerException;
      }

      return sb.ToString();
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="code"></param>
    /// <returns></returns>
    private static int GetHttpStatusCode( ErrorCode code )
    {
      var attr = code.GetAttribute<ErrorHintAttribute>();

      if( null == attr )
        return StatusCodes.Status500InternalServerError;

      return attr.Type switch
      {
        ErrorType.NotFound => StatusCodes.Status404NotFound,
        ErrorType.BadPrecondition => StatusCodes.Status412PreconditionFailed,
        _ => StatusCodes.Status500InternalServerError
      };
    }
    #endregion
  }
}
