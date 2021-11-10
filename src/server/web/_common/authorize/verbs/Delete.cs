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
  public class HttpDeleteAttribute :
    Microsoft.AspNetCore.Mvc.HttpDeleteAttribute,
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
    public HttpDeleteAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public HttpDeleteAttribute( Role role )
    {
      _role = role;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public HttpDeleteAttribute( string template, Role r )
      : base( template )
    {
      _role = r;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    public HttpDeleteAttribute( string template )
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
  public class RootHttpDeleteAttribute :
    Microsoft.AspNetCore.Mvc.HttpDeleteAttribute,
    IAuthorizationFilter
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public RootHttpDeleteAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public RootHttpDeleteAttribute( string template )
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
  public class FolderHttpDeleteAttribute :
    Microsoft.AspNetCore.Mvc.HttpDeleteAttribute,
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
    public FolderHttpDeleteAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public FolderHttpDeleteAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpDeleteAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public FolderHttpDeleteAttribute( string template, Permission l )
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
  public class DashboardHttpDeleteAttribute :
    Microsoft.AspNetCore.Mvc.HttpDeleteAttribute,
    IAuthorizationFilter
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    protected Permission? _target;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public DashboardHttpDeleteAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public DashboardHttpDeleteAttribute( Permission l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpDeleteAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public DashboardHttpDeleteAttribute( string template, Permission l )
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
    public virtual void OnAuthorization( AuthorizationFilterContext context )
      => DashboardAuthorizer.Authorize( context, _target );
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class AnnotationHttpDeleteAttribute : DashboardHttpDeleteAttribute
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public AnnotationHttpDeleteAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public AnnotationHttpDeleteAttribute( Permission l )
      :base( l )
    {
      
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public AnnotationHttpDeleteAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public AnnotationHttpDeleteAttribute( string template, Permission l )
      : base( template, l )
    {
      
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public override void OnAuthorization( AuthorizationFilterContext context )
      => AnnotationAuthorizer.Authorize( context, _target );
    #endregion
  }
}
