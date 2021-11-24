#region Usings
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Threading.Tasks;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class HttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
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
    IAsyncAuthorizationFilter,
    IHttpVerbUnhandledException
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private Permission? _target;
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
    public Task OnAuthorizationAsync( AuthorizationFilterContext context ) =>
      FolderAuthorizer.Authorize( context, _target );
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class DashboardHttpPutAttribute :
    Microsoft.AspNetCore.Mvc.HttpPutAttribute,
    IAsyncAuthorizationFilter,
    IHttpVerbUnhandledException
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    protected Permission? _target;
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
    public virtual Task OnAuthorizationAsync( AuthorizationFilterContext context ) =>
      DashboardAuthorizer.Authorize( context, _target );
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public class AnnotationHttpPutAttribute : DashboardHttpPutAttribute
  {
    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public AnnotationHttpPutAttribute()
    {
    }
    /// <summary>
    /// 
    /// </summary>
    public AnnotationHttpPutAttribute( Permission l )
      :base( l )
    {
      _target = l;
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public AnnotationHttpPutAttribute( string template )
      : base( template )
    {

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="template"></param>
    /// <param name="r"></param>
    public AnnotationHttpPutAttribute( string template, Permission l )
      : base( template, l )
    {
      
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    public override Task OnAuthorizationAsync( AuthorizationFilterContext context ) =>
      AnnotationAuthorizer.Authorize( context, _target );
    #endregion
  }
}
