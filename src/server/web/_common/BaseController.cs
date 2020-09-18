#region Usings
using ED.Data;
using ED.Web.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;

using ModelUser = ED.Security.User;
#endregion

namespace ED.Web
{
	[ApiController]
	public class BaseController  
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		protected DataContext DataContext { get; }
		/// <summary>
		/// 
		/// </summary>
		protected IHttpContextAccessor HttpContextAccessor { get; set; }

		/// <summary>
		/// 
		/// </summary>
		protected ModelUser ActualUser => HttpContextAccessor.GetUser();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public BaseController( DataContext dc )
		{
			DataContext = dc;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public BaseController( IHttpContextAccessor accessor, DataContext dc )
			:this( dc )
		{
			HttpContextAccessor = accessor;
			DataContext.ActiveUserId = ActualUser.Id;
			DataContext.ActiveUser = ActualUser;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <returns></returns>
		protected T GetRepo<T>() 
		{
			return ( T )Activator.CreateInstance( typeof( T ), DataContext );
		}
		#endregion
	}
}