#region Usings
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class HttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
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
    public HttpPutAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public HttpPutAttribute( Role role )
    {
      _role = role;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public HttpPutAttribute( string template, Role r )
      : base( template )
    {
      _role = r;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    public HttpPutAttribute( string template )
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
  public class RootHttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
    IAuthorizationFilter
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public RootHttpPutAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public RootHttpPutAttribute( string template )
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
  public class FolderHttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
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
    public FolderHttpPutAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public FolderHttpPutAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpPutAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpPutAttribute( string template, Permission l )
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
  public class DashboardHttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
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
    public DashboardHttpPutAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public DashboardHttpPutAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpPutAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpPutAttribute( string template, Permission l )
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
