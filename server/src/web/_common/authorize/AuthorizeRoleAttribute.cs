#region Usings
using ED.Security;
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
  public class AuthorizeAttribute :  Attribute,  IAuthorizationFilter
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    readonly Role _role;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    /// <param name="role"></param>
    public AuthorizeAttribute( Role role )
    {
      _role = role;
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public void OnAuthorization( AuthorizationFilterContext context ) =>
      RoleAuthHelper.Authorize( context, _role );
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class RoleAuthHelper
  {
    #region Class methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <param name="role"></param>
    public static void Authorize( AuthorizationFilterContext context, Role? role )
    {
      if( !role.HasValue )
        return;

      var user = context.HttpContext.User.GetUser();

      if( user.IsRoot )
        return;

      var requiredRole = role;

      if( requiredRole == Role.Admin && ( user.Role == Role.Admin ) )
        return;

      if( requiredRole == Role.Editor && ( user.Role == Role.Editor || user.Role == Role.Admin ) )
        return;

      if( requiredRole == Role.Viewer )
        return;

      context.Result = new ForbidResult();
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <param name="role"></param>
    public static void Authorize( AuthorizationFilterContext context )
    {
      var user = context.HttpContext.User.GetUser();

      if( !user.IsRoot ) 
      {
        context.Result = new ForbidResult();
      }
    }
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class Authenticate : Microsoft.AspNetCore.Authorization.AuthorizeAttribute
  {

  }
}
