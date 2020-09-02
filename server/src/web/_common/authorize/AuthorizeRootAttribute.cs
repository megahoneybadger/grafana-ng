#region Usings
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  [AttributeUsage( AttributeTargets.Class | AttributeTargets.Method,
    AllowMultiple = true, Inherited = true )]
  public class AuthorizeRootAttribute : Attribute, IAuthorizationFilter
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    /// <param name="role"></param>
    public AuthorizeRootAttribute()
    {
      
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public void OnAuthorization( AuthorizationFilterContext context )
    {
      var user = context
        .HttpContext
        .User
        .GetUser();

      if( !user.IsRoot )
      {
        context.Result = new ForbidResult();
      }
    }
    #endregion
  }
}
