#region Usings
using ED.Security;
using Microsoft.AspNetCore.Mvc.Filters;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class HttpGetAttribute :
		Microsoft.AspNetCore.Mvc.HttpGetAttribute,
		IAuthorizationFilter
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private Role? _role = null;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public HttpGetAttribute()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		public HttpGetAttribute( Role role )
		{
			_role = role;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public HttpGetAttribute( string template, Role r )
			: base( template )
		{
			_role = r;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public HttpGetAttribute( string template )
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
			RoleAuthHelper.Authorize( context, _role );
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public class RootHttpGetAttribute :
		Microsoft.AspNetCore.Mvc.HttpGetAttribute,
		IAuthorizationFilter
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public RootHttpGetAttribute()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public RootHttpGetAttribute( string template )
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
	public class FolderHttpGetAttribute :
		Microsoft.AspNetCore.Mvc.HttpGetAttribute,
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
		public FolderHttpGetAttribute()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		public FolderHttpGetAttribute( Permission l )
		{
			_target = l;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public FolderHttpGetAttribute( string template )
			: base( template )
		{

		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public FolderHttpGetAttribute( string template, Permission l )
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
	public class DashboardHttpGetAttribute :
		Microsoft.AspNetCore.Mvc.HttpGetAttribute,
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
		public DashboardHttpGetAttribute()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		public DashboardHttpGetAttribute( Permission l )
		{
			_target = l;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public DashboardHttpGetAttribute( string template )
			: base( template )
		{

		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="template"></param>
		/// <param name="r"></param>
		public DashboardHttpGetAttribute( string template, Permission l )
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
