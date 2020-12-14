#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using ED.Configuration;
using ModelOrg = ED.Security.Org;
using ModelPreferences = ED.Security.Preferences;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Web.Security
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/org/
	/// </summary>
	[Authenticate]
	[Route( "api/orgs" )]
	public class OrgController : BaseController
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string CURRENT = "/api/org/";
		/// <summary>
		/// 
		/// </summary>
		private const string CURRENT_PREF = CURRENT + "preferences";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public OrgRepository Repo => GetRepo<OrgRepository>();
		/// <summary>
		/// 
		/// </summary>
		public Config Config { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public OrgController( IHttpContextAccessor accessor, DataContext dc, Config c )
			: base( accessor, dc )
		{
			Config = c;
			//dc.AddUsers();
			//dc.FillDatabase();
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[RootHttpGet()]
		public IActionResult GetOrgs() =>
			Repo
				.All
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT, Role.Viewer )]
		public IActionResult GetOrg() => GetOrgById( ActualUser.OrgId );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[RootHttpGet( "{orgId}" )]
		public IActionResult GetOrgById( int orgId ) =>
			Repo[ orgId ].ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[RootHttpGet( "name/{name}" )]
		public IActionResult GetOrgByName( string name) =>
			Repo [ name ].ToActionResult();
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost()]
		public IActionResult Create( OrgRequest r ) =>
			Repo
				.Create( r.ToModel() )
				.ToActionResult( x => new { x.Value.Id, Message = "Organization created" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[RootHttpPut( "{orgId}" )]
		public IActionResult Update( int orgId, OrgRequest r ) =>
			Repo
				.Update( r.ToModel( orgId ) )
				.RefreshToken( ActualUser )
				.ToActionResult( x => new { Message = "Organization updated", x.Value.Bag.Token } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( CURRENT, Role.Admin )]
		public IActionResult Update( OrgRequest r ) => Update( ActualUser.OrgId, r );
			
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[RootHttpDelete( "{orgId}" )]
		public IActionResult Delete( int orgId ) =>
			Repo
				.Delete( orgId )
				.ToActionResult( x => 
				{
					JwtHelper.IncrementUsersVersion( orgId, ActualUser.Id );
					return new { Message = "Organization deleted" };
				} );
		#endregion

		#region Class 'Org members' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[RootHttpGet( "{orgId}/members" )]
		public IActionResult GetMembers( int orgId ) =>
			Repo
				.GetMembers( orgId )
				.ToActionResult( x => ToMembersReply( x, orgId )  );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT + "users", Role.Admin )]
		public IActionResult GetMembers() =>
			GetMembers( ActualUser.OrgId );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT + "users/lookup", Role.Viewer )]
		public IActionResult GetMembersLookup() =>
			Repo
				.GetMembers( ActualUser.OrgId )
				.ToActionResult( x => ToMembersLookupReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[RootHttpPost( "{orgId}/users" )]
		public IActionResult AddMember( int orgId, OrgMembersRequest r ) =>
			Repo
				.AddMember( orgId, r.LoginOrEmail, r.Role )
				.RevokeToken()
				.ToActionResult( x => new { Message = "User added to organization" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( CURRENT + "users", Role.Admin )]
		public IActionResult AddMember( OrgMembersRequest r ) =>
			AddMember( ActualUser.OrgId, r );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[RootHttpPatch( "{orgId}/users/{userId}" )]
		public IActionResult UpdateMember( int orgId, int userId, OrgMemberUpdateRequest r ) =>
			Repo
				.UpdateMember( orgId, userId, r.Role.Value )
				.RevokeToken()
				.ToActionResult( x => new { Message = "Organization user updated" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="userId"></param>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPatch( CURRENT + "users/{userId}", Role.Admin )]
		public IActionResult UpdateMember( int userId, OrgMemberUpdateRequest r ) =>
			UpdateMember( ActualUser.OrgId, userId, r );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[RootHttpDelete( "{orgId}/users/{userId}" )]
		public IActionResult RemoveMember( int orgId, int userId ) =>
			Repo
				.RemoveMember( orgId, userId )
				.RevokeToken()
				.ToActionResult( x => new { Message = "User removed from organization" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="orgId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[HttpDelete( CURRENT + "users/{userId}", Role.Admin )]
		public IActionResult RemoveMember( int userId ) => 
			RemoveMember( ActualUser.OrgId, userId );
		#endregion

		#region Class 'Preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( CURRENT_PREF, Role.Admin )]
		public IActionResult GetPreferences() =>
			Repo
				.GetPreferences()
				.ToActionResult( x => ToGetPrefReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpPut( CURRENT_PREF, Role.Admin )]
		public IActionResult UpdatePreferences( OrgPreferencesRequest r ) =>
			Repo
				.UpdatePreferences( r.ToModel( ActualUser.OrgId ) )
				.RefreshPreferences( ActualUser, DataContext )
				.RefreshToken( true )
				.ToActionResult( x => new { Message = "Preferences updated", x.Value.Bag.Token } );
		#endregion

		#region Class 'Settings' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[RootHttpGet( "/api/admin/settings" )]
		public IActionResult GetSettings() => new OkObjectResult( Config.Export() ); 

		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToMembersReply( OperationResult<ModelUsers> op, int orgId )
		{
			return op
				.Value
				.Select( x => new
				{
					OrgId = orgId,
					UserId = x.Id,
					x.Email,
					x.Login,
					x.Role// = x.Role.ToString()
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToMembersLookupReply( OperationResult<ModelUsers> op )
		{
			return op
				.Value
				.Select( x => new
				{
					UserId = x.Id,
					x.Login,
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPrefReply( OperationResult<ModelPreferences> op )
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
		public class OrgRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Name { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Name}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelOrg ToModel( int id = 0 )
			{
				return new ModelOrg()
				{
					Id = id,
					Name = Name
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class OrgMembersRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string LoginOrEmail { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public Role Role { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{LoginOrEmail}|{Role}";
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class OrgMemberUpdateRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public Role? Role { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Role}";
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class OrgPreferencesRequest
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
			public ModelPreferences ToModel( int orgId = 0 )
			{
				return new ModelPreferences()
				{
					OrgId = orgId,

					Theme = Theme,
					TimeZone = TimeZone,
					HomeDashboardId = ( 0 == HomeDashboardId ) ? ( int? )null : HomeDashboardId
				};
			}
			#endregion
		}
		#endregion
	}
}