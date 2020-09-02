#region Usings
using ED.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using ModelUser = ED.Security.User;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class VersionBasedJwtSecurityTokenHandler : JwtSecurityTokenHandler
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private object _syncObject = new object();
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Data.DataContext DataContext { get; }
		/// <summary>
		/// 
		/// </summary>
		public IMemoryCache Cache { get; }
		/// <summary>
		/// 
		/// </summary>
		public IHttpContextAccessor HttpContextAccessor { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="httpContextAccessor"></param>
		public VersionBasedJwtSecurityTokenHandler( Data.DataContext dc,
			IMemoryCache cache, IHttpContextAccessor httpAccess  )
		{
			DataContext = dc;
			Cache = cache;
			HttpContextAccessor = httpAccess;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="securityToken"></param>
		/// <param name="validationParameters"></param>
		/// <param name="validatedToken"></param>
		/// <returns></returns>
		public override ClaimsPrincipal ValidateToken( string securityToken,
			TokenValidationParameters validationParameters, out SecurityToken validatedToken )
		{
			var principal = base.ValidateToken( securityToken,
				validationParameters, out validatedToken );

			var incomingUser = principal.GetUser();

			lock( _syncObject ) 
			{
				if( 0 == incomingUser.Id ) // web api key ?!
					return principal;

				if( !Cache.TryGetValue<ModelUser>( incomingUser.Id, out ModelUser localUser ) )
				{
					localUser = new UserRepository( DataContext )
						.GetUserById( incomingUser.Id )
						.Value;
				}

				if( null != localUser )
				{
					Cache.Set( incomingUser.Id, localUser );
				}

				if( null == localUser || localUser.Bag.Version != incomingUser.Bag.Version )
				{
					HttpContextAccessor
						.HttpContext
						.Response.StatusCode = StatusCodes.Status401Unauthorized;
				}
			}

			return principal;
		}
		#endregion
	}
}
