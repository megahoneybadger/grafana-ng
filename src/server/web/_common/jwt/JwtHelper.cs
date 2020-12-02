#region Usings
using ED.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using ModelUser = ED.Security.User;
using System.Reflection;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public static class JwtHelper
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string SECRET_KEY = "superSecretKey@345";
		/// <summary>
		/// 
		/// </summary>
		internal const string ID = "id";
		/// <summary>
		/// 
		/// </summary>
		internal const string LOGIN = "l";
		/// <summary>
		/// 
		/// </summary>
		internal const string ROLE = "r";
		/// <summary>
		/// 
		/// </summary>
		internal const string IS_ROOT = "root";
		/// <summary>
		///
		/// </summary>
		internal const string ORG = "o";
		/// <summary>
		///
		/// </summary>
		internal const string ORG_NAME = "on";
		/// <summary>
		///
		/// </summary>
		internal const string NAME = "n";
		/// <summary>
		///
		/// </summary>
		internal const string EMAIL = "e";
		/// <summary>
		///
		/// </summary>
		internal const string THEME = "t";
		/// <summary>
		///
		/// </summary>
		internal const string TIME_ZONE = "tz";
		/// <summary>
		/// 
		/// </summary>
		internal const string HOME_DASHBOARD = "hd";
		/// <summary>
		/// 
		/// </summary>
		internal const string VERSION = "v";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private static IMemoryCache Cache { get; set; }
		#endregion

		#region Class 'Configure' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="services"></param>
		public static void ConfigureJwt( this IServiceCollection services, Func<IServiceProvider> spFunc  )
		{
			services
				.AddAuthentication( options =>
				{
					// Identity made Cookie authentication the default.
					// However, we want JWT Bearer Auth to be the default.
					options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
					options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				} )
				.AddJwtBearer( options =>
				{
					options.SaveToken = true;
					options.RequireHttpsMetadata = false;

					//options.

					options.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuer = false,
						ValidateAudience = false,
						ValidateLifetime = true,
						ValidateIssuerSigningKey = true,

						IssuerSigningKey = new SymmetricSecurityKey( Encoding.UTF8.GetBytes( SECRET_KEY ) )
					};

					var sp = spFunc.Invoke();
					
					var dc = sp.GetService<Data.DataContext>();
					Cache = sp.GetService<IMemoryCache>();
					var httpAccess = sp.GetService<IHttpContextAccessor>();

					options.SecurityTokenValidators.Clear();
					options.SecurityTokenValidators.Add(
						new VersionBasedJwtSecurityTokenHandler( dc, Cache, httpAccess ) );

				} );
		}
		#endregion

		#region Class 'Create' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="x"></param>
		public static string Create( this User u )
		{
			var secretKey = new SymmetricSecurityKey(
				Encoding.UTF8.GetBytes( SECRET_KEY ) );

			var signinCredentials = new SigningCredentials(
				secretKey, SecurityAlgorithms.HmacSha256 );

			var claims = new List<Claim>
			{
				new Claim( ID, u.Id.ToString() ),
				new Claim( ORG, u.OrgId.ToString() ),
				new Claim( ORG_NAME, u.Bag?.OrgName.ToString() ),
				new Claim( LOGIN, u.Login ),
				new Claim( NAME, u.Name ),
				new Claim( EMAIL, u.Email ),
				new Claim( ROLE, u.Role.ToString() ),
				new Claim( IS_ROOT, u.IsRoot.ToString() ),
				new Claim( VERSION, u.Bag.Version.ToString() ),

				new Claim( TIME_ZONE, u.Preferences.TimeZone.ToString() ),
			};

			var tokenOptions = new JwtSecurityToken(
					claims: claims,
					expires: DateTime.Now.AddYears( 1 ),
					signingCredentials: signinCredentials
			);

			Cache.Set<ModelUser>( u.Id, u );

			//tokenOptions.Header.Clear();

			var tokenString = new JwtSecurityTokenHandler().WriteToken( tokenOptions );

			return tokenString;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="x"></param>
		public static string Create( this ApiKey u )
		{
			var secretKey = new SymmetricSecurityKey(
				Encoding.UTF8.GetBytes( SECRET_KEY ) );

			var signinCredentials = new SigningCredentials(
				secretKey, SecurityAlgorithms.HmacSha256 );

			var claims = new List<Claim>
			{
				new Claim( ORG, u.OrgId.ToString() ),
				new Claim( NAME, u.Name ),
				new Claim( ROLE, u.Role.ToString() ),
			};

			var tokenOptions = new JwtSecurityToken(
					claims: claims,
					//expires: DateTime.Now.AddYears( 1 ),
					signingCredentials: signinCredentials

			);

			var ttl = ( uint? )u.Bag.SecondsToLive;

			//if( ttl.HasValue && ttl > 0 ) 
			{

				tokenOptions = new JwtSecurityToken(
					claims: claims,
					//expires: DateTime.Now.AddSeconds( ttl.Value ),
					expires: DateTime.Now.AddYears( 1 ),
					signingCredentials: signinCredentials );
			}

			//tokenOptions.Header.Clear();

			var tokenString = new JwtSecurityTokenHandler().WriteToken( tokenOptions );

			return tokenString;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="x"></param>
		public static string Create( int orgId )
		{
			var role = Role.Admin;
			var user = "user_notificator";
			var ttl = 60;
			
			var secretKey = new SymmetricSecurityKey(
				Encoding.UTF8.GetBytes( SECRET_KEY ) );

			var signinCredentials = new SigningCredentials(
				secretKey, SecurityAlgorithms.HmacSha256 );

			var claims = new List<Claim>
			{
				new Claim( ORG, orgId.ToString() ),
				new Claim( NAME, user ),
				new Claim( ROLE, role.ToString() ),
				new Claim( TIME_ZONE, "Default" ),
			};


			var tokenOptions = new JwtSecurityToken(
					claims: claims,
					expires: DateTime.Now.AddSeconds( ttl ),
					signingCredentials: signinCredentials );


			return new JwtSecurityTokenHandler().WriteToken( tokenOptions );
		}
		#endregion

		#region Class 'User' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="httpAccessor"></param>
		/// <returns></returns>
		public static User GetUser( this IHttpContextAccessor httpAccessor )
			=> httpAccessor.HttpContext.User.GetUser();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="httpAccessor"></param>
		/// <returns></returns>
		public static User GetUser( this ClaimsPrincipal u )
		{
			int.TryParse( u.FindFirstValue( ID ), out int id );
			int.TryParse( u.FindFirstValue( ORG ), out int org );
			Enum.TryParse<Role>( u.FindFirstValue( ROLE ), out Role role );
			bool.TryParse( u.FindFirstValue( IS_ROOT ), out bool isRoot );
			int.TryParse( u.FindFirstValue( VERSION ), out int version );

			Enum.TryParse<ED.Security.TimeZone>( u.FindFirstValue( TIME_ZONE ),
				out ED.Security.TimeZone zone );

			var user = new User()
			{
				Id = id,
				OrgId = org,
				Login = u.FindFirstValue( LOGIN ),
				Name = u.FindFirstValue( NAME ),
				Email = u.FindFirstValue( EMAIL ),
				Role = role,
				IsRoot = isRoot,
				Preferences = new UserPreferences() 
				{
					TimeZone = zone
				}
			};

			user.Bag.OrgName = u.FindFirstValue( ORG_NAME );
			user.Bag.Version = version;

			return user;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="orgId"></param>
		public static void IncrementUsersVersion( int orgId, int actorId ) 
		{
			GetCache()
				.Where( x => x.OrgId == orgId && x.Id != actorId )
				.ToList()
				.ForEach( x => x.Bag.Version++ );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <returns></returns>
		private static List<User> GetCache()
		{
			var field = typeof( MemoryCache ).GetProperty( "EntriesCollection", BindingFlags.NonPublic | BindingFlags.Instance );
			var collection = field.GetValue( Cache ) as ICollection;
			var items = new List<User>();

			if( collection != null ) 
			{
				foreach( var item in collection )
				{
					var methodInfo = item.GetType().GetProperty( "Value" );
					var val = methodInfo.GetValue( item );
					items.Add( ( User )( ( ICacheEntry )val ).Value );
				}
			}

			return items;
		}
		#endregion
	}
}
