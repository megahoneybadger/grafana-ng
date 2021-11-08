#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ModelPreferences = ED.Security.TeamPreferences;
using ModelTeam = ED.Security.Team;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Web.Security
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/team/
	/// </summary>
	[Authenticate]
	[Authorize( Role.Admin )]
	[Route( "api/teams" )]
	public class TeamsController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public TeamRepository Repo => GetRepo<TeamRepository>();
		/// <summary>
		/// 
		/// </summary>
		public TeamRepositoryAsync Repo2 => GetRepo<TeamRepositoryAsync>();
		
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public TeamsController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{
			//dc.FillDatabase();
			//dc.AddUsers(20);
			//dc.AddTeams(20);
			//dc.AddTeamMembers();
			// dc.AddTeamPreferences();
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public async Task<IActionResult> GetTeams() 
		{
			//row new TeamNotFoundException();
			var res = await Repo2.GetTeams();

			//return new OkObjectResult( new [] { "one", "two" } );

			return null;
		} 
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}" )]
		public IActionResult GetTeam( int id ) =>
			Repo[ id ]
				.ToActionResult( x => ToGetTeamByIdReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "search" )]
		public IActionResult Search( string name = "", int page = 1, int perPage = 1000 ) 
		{
			return ( string.IsNullOrEmpty( name ) ) ?
				Repo
					.All
					.ToActionResult( x => ToSearchTeamsReply( x, page, perPage ) ) :

				Repo [ name ]
					.ToActionResult( x => ToSearchTeamsByNameReply( x, page, perPage ) );
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost()]
		public IActionResult Create( TeamRequest r ) =>
			Repo
				.Create( r.ToModel() )
				.ToActionResult( x => new { Message = "Team created", TeamId = x.Value.Id } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}" )]
		public IActionResult Update( int id, TeamRequest r ) =>
			Repo
				.Update( r.ToModel( id ) )
				.ToActionResult( x => new { Message = "Team updated" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}" )]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id )
				.ToActionResult( x => new { Message = "Team deleted"  } );
		#endregion

		#region Class 'Team members' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{teamId}/members" )]
		public IActionResult GetMembers( int teamId ) =>
		Repo
				.GetMembers( teamId )
				.ToActionResult( x => ToGetMembersReply( x, teamId ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[HttpPost( "{teamId}/members/{userId}" )]
		public IActionResult AddMember( int teamId, int userId ) =>
			Repo
				.AddMember( teamId, userId )
				.ToActionResult( x => new { Message = "Member added to team" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		[HttpDelete( "{teamId}/members/{userId}" )]
		public IActionResult RemoveMember( int teamId, int userId ) =>
			Repo
				.RemoveMember( teamId, userId )
				.ToActionResult( x => new { Message = "Team member removed"} );
		#endregion

		#region Class 'Preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{teamId}/preferences" )]
		public IActionResult GetPreferences( int teamId ) =>
			Repo
				.GetPreferences( teamId )
				.ToActionResult( x => ToGetPrefReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpPut( "{teamId}/preferences" )]
		public IActionResult UpdatePreferences( int teamId, TeamPreferencesRequest r ) =>
			Repo
				.UpdatePreferences( r.ToModel( ActualUser.OrgId, teamId ) )
				.ToActionResult( x => new { Message = "Preferences updated" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToGetTeamsReply( OperationResult<ModelTeams> op )
		{
			return op
				.Value
				.Select( x => new
				{
					x.Id,
					x.OrgId,
					x.Name,
					x.Email,
					x.Bag.MembersCount
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToSearchTeamsReply(
			OperationResult<ModelTeams> op,	int page, int perPage )
		{
			var teams = op
				.Value
				.Skip( ( page - 1 ) * perPage )
				.Take( perPage )
				.ToList();

			return new
			{
				TotalCount = op.Value.Count,
				Teams = teams
					.Select( x => new
					{
						x.Id,
						x.OrgId,
						x.Name,
						x.Email,
						x.Bag.MembersCount
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
		internal static object ToSearchTeamsByNameReply(
			OperationResult<ModelTeam> op, int page, int perPage )
		{
			var teams = new ModelTeam [] { op.Value };

			return new
			{
				TotalCount = 1,
				Teams = teams
					.Select( x => new
					{
						x.Id,
						x.OrgId,
						x.Name,
						x.Email,
						x.Bag.MembersCount
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
		internal static object ToGetTeamByIdReply( OperationResult<ModelTeam> op )
		{
			var team = op.Value;

			return new
			{
				team.Id,
				team.OrgId,
				team.Name,
				team.Email,
				team.Bag.Created,
				team.Bag.Updated
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToGetMembersReply( OperationResult<ModelUsers> op, int teamId ) 
		{
			return op
				.Value
				.Select( x => new
				{
					//x.OrgId,
					teamId,
					UserId = x.Id,
					x.Email,
					x.Login,
				} )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal object ToGetPrefReply( OperationResult<ModelPreferences> op )
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
		public class TeamRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Name { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Email { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Name}|{Email}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelTeam ToModel( int id = 0 )
			{
				return new ModelTeam()
				{
					Id = id,
					Name = Name,
					Email = Email
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class TeamPreferencesRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int HomeDashboardId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Theme Theme{ get; set; }
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
			public ModelPreferences ToModel( int orgId, int teamId )
			{
				return new ModelPreferences()
				{
					TeamId = teamId,
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