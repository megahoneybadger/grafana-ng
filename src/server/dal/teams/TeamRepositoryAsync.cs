#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityTeam = ED.Data.Team;
using EntityUser = ED.Data.User;
using ModelPreferences = ED.Security.TeamPreferences;
using ModelTeam = ED.Security.Team;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class TeamRepositoryAsync : Repository
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public TeamRepositoryAsync( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Task<ModelTeams> GetTeams() =>
			DataContext
				.Teams
				.ForActiveOrg()
				.Include( x => x.TeamMember )
				.ThenInclude( x => x.User )
				.Select( x => x.ToModel().AddMemberCount( x ) )
				.ToListAsync();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelTeam> GetTeam( int id ) 
		{
			var entity = await DataContext
				.Teams
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			var model = entity?
				.ToModel()
				.AddTime( DataContext.Entry( entity ) );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelTeam> GetTeam( string name )
		{
			var entity = await DataContext
				.Teams
				.ForActiveOrg()
				.Include( x => x.TeamMember )
				.ThenInclude( x => x.User )
				.FirstOrDefaultAsync( x => x.Name == name );

			var model = entity?
				.ToModel()
				.AddMemberCount( entity );

			return model;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelTeam> Create( ModelTeam team )
		{
			var entity = team
				.ToEntity()
				.IncludeActiveOrgId( DataContext );

			await DataContext.AddAsync( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( team )
				.ToModel();

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelTeam> Update( ModelTeam team )
		{
			var entity = await DataContext
				.Teams
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == team.Id );

			if( null == entity )
				throw new BadGetTeamException();

			entity.Update( team );

			DataContext.Update( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( team )
				.ToModel();

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( int id )
		{
			var entity = await DataContext
				.Teams
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			if( null == entity )
				throw new BadGetTeamException();

			DataContext.Teams.Remove( entity );

			var res = await DataContext.SaveChangesAsync();

			return ( 0 == res );
		}
		#endregion

		#region Class 'Team members' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public Task<ModelUsers> GetMembers( int teamId ) =>
			DataContext
				.Teams
				.ForActiveOrg()
				.Where( x => x.Id == teamId )
				.Include( x => x.TeamMember )
				.SelectMany( x => x.TeamMember )
				.Select( x => x.User.ToModel() )
				.ToListAsync();

		
		#endregion
	}
}
