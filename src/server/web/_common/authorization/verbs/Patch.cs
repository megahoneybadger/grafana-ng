#region Usings
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class HttpPatchAttribute :
    Microsoft.AspNetCore.Mvc.HttpPatchAttribute,
    IAuthorizationFilter,
    IHttpVerbUnhandledException
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private Role? _role;
    #endregion

    #region Clas properties
    /// <summary>
    /// 
    /// </summary>
    public ErrorCode Error { get; init; }
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
    IAuthorizationFilter,
    IHttpVerbUnhandledException
  {
    #region Clas properties
    /// <summary>
    /// 
    /// </summary>
    public ErrorCode Error { get; init; }
    #endregion

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
