#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

using EntityTeam = ED.Data.Team;
using EntityUser = ED.Data.User;
using ModelPreferences = ED.Security.TeamPreferences;
using ModelTeam = ED.Security.Team;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using TaskTeams = System.Threading.Tasks.Task<System.Collections.Generic.List<ED.Security.Team>>;
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
		[Exception( typeof( GetTeamsException ) )]
		public TaskTeams GetTeams() 
		{
			throw new Exception( "suck my dick" );
			return DataContext
						.Teams
						.ForActiveOrg()
						.Include( x => x.TeamMember )
						.ThenInclude( x => x.User )
						.Select( x => x.ToModel().AddMemberCount( x ) )
						.ToListAsync();
		}
		#endregion
	}
}
