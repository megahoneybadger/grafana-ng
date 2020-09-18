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
  public class HttpPostAttribute :
    Microsoft.AspNetCore.Mvc.HttpPostAttribute,
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
    public HttpPostAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public HttpPostAttribute( Role role )
    {
      _role = role;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public HttpPostAttribute( string template, Role r )
      : base( template )
    {
      _role = r;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    public HttpPostAttribute( string template )
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
  public class RootHttpPostAttribute :
    Microsoft.AspNetCore.Mvc.HttpPostAttribute,
    IAuthorizationFilter
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public RootHttpPostAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public RootHttpPostAttribute( string template )
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

  /// <summary>
	/// 
	/// </summary>
	public class FolderHttpPostAttribute :
    Microsoft.AspNetCore.Mvc.HttpPostAttribute,
    IAuthorizationFilter
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private Permission? _target;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public FolderHttpPostAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public FolderHttpPostAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpPostAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpPostAttribute( string template, Permission l )
      : base( template )
    {
      _target = l;
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public void OnAuthorization( AuthorizationFilterContext context )
      => FolderAuthorizer.Authorize( context, _target );
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class DashboardHttpPostAttribute :
    Microsoft.AspNetCore.Mvc.HttpPostAttribute,
    IAuthorizationFilter
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private Permission? _target;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public DashboardHttpPostAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public DashboardHttpPostAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpPostAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpPostAttribute( string template, Permission l )
      : base( template )
    {
      _target = l;
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public void OnAuthorization( AuthorizationFilterContext context )
      => DashboardAuthorizer.Authorize( context, _target );
    #endregion
  }
}
