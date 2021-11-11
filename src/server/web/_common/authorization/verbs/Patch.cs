#region Usings
using ED.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class HttpPatchAttribute :
    Microsoft.AspNetCore.Mvc.HttpPatchAttribute,
    IAuthorizationFilter
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private Role? _role;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public HttpPatchAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public HttpPatchAttribute( Role role )
    {
      _role = role;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public HttpPatchAttribute( string template, Role r )
      : base( template )
    {
      _role = r;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    public HttpPatchAttribute( string template )
      : base( template )
    {
      _role = null;
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
  public class RootHttpPatchAttribute :
    Microsoft.AspNetCore.Mvc.HttpPatchAttribute,
    IAuthorizationFilter
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public RootHttpPatchAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public RootHttpPatchAttribute( string template )
      : base( template )
    {

    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public void OnAuthorization( AuthorizationFilterContext context ) =>
      RoleAuthHelper.Authorize( context );
    #endregion
  }
}
