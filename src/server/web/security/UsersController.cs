#region Usings
using ED.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using ModelOrgs = System.Collections.Generic.List<ED.Security.Org>;
using ModelUser = ED.Security.User;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
using ModelPreferences = ED.Security.UserPreferences;
using ED.Security;
using Microsoft.Extensions.Caching.Memory;
#endregion

namespace ED.Web.Security
{
	/// <summary>
	/// 
	/// </summary>
	[Microsoft.AspNetCore.Authorization.Authorize]
	[Route( "api/users" )]
	public class UsersController : BaseController
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string CURRENT = "/api/user/";
		/// <summary>
		/// 
		/// </summary>
		private const string CURRENT_PREF = CURRENT + "preferences";
		/// <summary>
		/// 
		/// </summary>
		private const string ADMIN = "/api/admin/users/";
		/// <summary>
		/// 
		/// </summary>
		private const string CURRENT_STAR = CURRENT + "stars/dashboard/{dashboardId}";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public UserRepository Repo => GetRepo<UserRepository>();
		/// <summary>
		/// 
		/// </summary>
		public IMemoryCache Cache { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public UsersController( IHttpContextAccessor accessor, DataContext dc, IMemoryCache cache )
			: base( accessor, dc )
		{
			Cache = cache;
			//dc.FillDatabase();

			//dc.AddOrgs();
			//dc.AddUsersWithRoot();
			//dc.AddOrgMembers();
			//dc.AddTeams();
			//dc.AddTeamMembers();
			//dc.AddDashboards( 3, 3 );


		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetUsers() =>
			Repo
				.All
				.ToActionResult( x => ToGetUsersReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{userId}" )]
		public IActionResult GetUser( int userId ) =>
			Repo
				.GetUserById( userId )
				.ToActionResult( x => ToGetSingleUserReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT )]
		public IActionResult GetUser() => GetUser( ActualUser.Id );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="name"></param>
		/// <param name="page"></param>
		/// <param name="perPage"></param>
		/// <returns></returns>
		[HttpGet( "search" )]
		public IActionResult Search( string query = "", int page = 1, int perPage = 1000 ) =>
			Repo
				.All
				.ToActionResult( x => ToSearchUsersReply( x, page, perPage ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="loginOrEmail"></param>
		/// <returns></returns>
		[HttpGet( "lookup" )]
		public IActionResult Lookup( string loginOrEmail ) =>
			Repo
				.GetUserByLoginOrEmail( loginOrEmail )
				.ToActionResult( x => ToGetSingleUserReply( x) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( ADMIN )]
		public IActionResult Create( CreateRequest r ) =>
			Repo
				.Create( r.ToModel() )
				.ToActionResult( x => new { x.Value.Id, Message = "User created" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}" )]
		public IActionResult Update( int id, UpdateRequest r ) =>
			Repo
				.Update( r.ToModel( id ) )
				.RefreshToken()
				.ToActionResult( x => new { Message = "User updated" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( CURRENT )]
		public IActionResult Update( UpdateRequest r ) =>
			Repo
				.Update( r.ToModel( ActualUser.Id ) )
				.RefreshToken()
				.ToActionResult( x => new { Message = "User updated", x.Value.Bag.Token } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( ADMIN + "{id}" )]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id )
				.ToActionResult( x => { Cache.Remove( id ); return new { Message = "User deleted" }; } );
		#endregion

		#region Class 'Auth' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpPost( "login" )]
		[AllowAnonymous]
		public IActionResult Login( LoginRequest u ) =>
			Repo
				.Login( u.Login, u.Password )
				.ToActionResult( x => new { Token = x.Value.Create() } );
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( ADMIN + "{id}/permissions" )]
		public IActionResult UpdateRootPermissions( int id, UpdateAdminPermissionsRequest r ) =>
			Repo
				.UpdateRootPermissions( id, r.IsAdmin )
				.RevokeToken()
				.ToActionResult( x => new { Message = "User permissions updated" } );
		#endregion

		#region Class 'Preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT_PREF )]
		public IActionResult GetPreferences() =>
			Repo
				.GetPreferences( ActualUser.Id )
				.ToActionResult( x => ToGetUserPrefReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpPut( CURRENT_PREF )]
		public IActionResult UpdatePreferences( UserPreferencesRequest r ) =>
			Repo
				.UpdatePreferences( r.ToModel( DataContext.ActiveUserId ) )
				.RefreshEffectivePreferences( ActualUser, DataContext )
				.RefreshToken()
				.ToActionResult( x => new { Message = "Preferences updated", x.Value.Bag.Token } );
		#endregion

		#region Class 'Orgs' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[RootHttpGet( "{id}/orgs" )]
		public IActionResult GetOrgs( int id ) =>
			Repo
				.GetOrgs( id )
				.ToActionResult( x => ToGetUserOrgsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT + "orgs", Role.Viewer )]
		public IActionResult GetOrgs() => GetOrgs( ActualUser.Id );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpPost( CURRENT + "using/{orgId}" )]
		public IActionResult SwitchOrg( int orgId ) =>
			Repo
				.SwitchOrg( ActualUser.Id, orgId )
				.RefreshToken()
				.ToActionResult( x => new {	Message = "Active organization changed", x.Value.Bag.Token } );
		#endregion

		#region Class 'Star' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		[HttpPost( CURRENT_STAR )]
		public IActionResult StarDashboard( int dashboardId ) =>
			Repo
				.Star( ActualUser.Id, dashboardId )
				.ToActionResult( x => new { Message = "Dashboard starred" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		[HttpDelete( CURRENT_STAR )]
		public IActionResult UnstarDashboard( int dashboardId ) =>
			Repo
				.Unstar( ActualUser.Id, dashboardId )
				.ToActionResult( x => new { Message = "Dashboard unstarred" } );
		#endregion

		#region Class 'Password' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( ADMIN + "{id}/password" )]
		public IActionResult ChangePassword( int id, ChangeUserPasswordRequest r ) =>
			Repo
				.ChangePassword( id, null, r.Password )
				.ToActionResult( x => new { Message = "User password changed" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( CURRENT + "password" )]
		public IActionResult ChangePassword( ChangeCurrentUserPasswordRequest r ) =>
			Repo
				.ChangePassword( ActualUser.Id, r.OldPassword, r.NewPassword )
				.ToActionResult( x => new { Message = "User password changed" } );
		#endregion

		#region Class 'Teams' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{id}/teams" )]
		public IActionResult GetUserTeams( int id ) =>
			Repo
				.GetUserTeams( id )
				.ToActionResult( x => TeamsController.ToGetTeamsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT + "teams" )]
		public IActionResult GetUserTeams() => GetUserTeams( ActualUser.Id );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetSingleUserReply( OperationResult<ModelUser> op )
		{
			var user = op.Value;

			return new
			{
				user.Id,
				user.Email,
				user.Name,
				user.Login,
				//Theme = user.Theme.ToString().ToLower(),
				user.OrgId,
				Role = user.Role.ToString().ToLower(),
				user.IsRoot,
				user.Bag.Created,
				user.Bag.Updated
				// TODO: remained props
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetUsersReply( OperationResult<ModelUsers> op )
		{
			return op
				.Value
				.Select( x => new
				{
					x.Id,
					x.Name,
					x.Login,
					x.Email,
					x.IsRoot,
					x.Role
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToSearchUsersReply( OperationResult<ModelUsers> op, int page, int perPage )
		{
			var users = op
				.Value
				.Skip( ( page - 1 ) * perPage )
				.Take( perPage )
				.ToList();

			return new
			{
				TotalCount = op.Value.Count,
				Users = users
					.Select( x => new
					{
						x.Id,
						x.Name,
						x.Login,
						x.Email,
						isAdmin = ( ED.Security.Role.Admin == x.Role )
					} )
					.ToList(),
				Page = page,
				PerPage = perPage
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetUserOrgsReply( OperationResult<ModelOrgs> op )
		{
			return op.Value.Select( x => new
			{
				OrgId = x.Id,
				x.Name,
				x.Bag.Role
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetUserPrefReply( OperationResult<ModelPreferences> op )
		{
			var pref = op.Value;

			return new
			{
				pref.Theme,
				HomeDashboardId = pref.HomeDashboardId ?? 0,
				pref.TimeZone,
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class LoginRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Login { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Password { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return string.Format( "{0}|{1}", Login, Password );
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class UpdateRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Login { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Email{ get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Name { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Login}|{Email}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <param name="id"></param>
			/// <returns></returns>
			public ModelUser ToModel( int id ) 
			{
				return new ModelUser()
				{
					Id = id,
					Login = Login,
					Email = Email,
					Name = Name
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class CreateRequest : UpdateRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Password { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <param name="id"></param>
			/// <returns></returns>
			public ModelUser ToModel() 
			{
				return new ModelUser()
				{
					Password = Password,
					Login = Login,
					Email = Email,
					Name = Name
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class UpdateAdminPermissionsRequest 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public bool IsAdmin { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"Is admin: {IsAdmin}";
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class UserPreferencesRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int HomeDashboardId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Theme Theme { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public TimeZone TimeZone { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Theme}|{TimeZone}|{HomeDashboardId}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelPreferences ToModel( int userId )
			{
				return new ModelPreferences()
				{
					UserId = userId,

					Theme = Theme,
					TimeZone = TimeZone,
					HomeDashboardId = ( 0 == HomeDashboardId ) ? ( int? )null : HomeDashboardId
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class ChangeUserPasswordRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Password { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Password}";
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class ChangeCurrentUserPasswordRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string OldPassword { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string NewPassword { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{OldPassword}|{NewPassword}";
			}
			#endregion
		}
		#endregion
	}
}