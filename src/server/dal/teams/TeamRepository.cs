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
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class TeamRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelTeams> All
		{
			get
			{
				OperationResult<ModelTeams> res;

				try
				{
					var teams = DataContext
						.Teams
						.ForActiveOrg()
						.Include( x => x.TeamMember )
						.ThenInclude( x => x.User )
						.Select( x => x.ToModel().AddMemberCount( x ) )
						.ToList();

					res = OperationResult<ModelTeams>.Create( teams );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelTeams>.Create( ErrorCode.BadGetTeams, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelTeam> this [ int id ]
		{
			get
			{
				OperationResult<ModelTeam> res = null;

				try
				{
					var entity = DataContext
						.Teams
						.ForActiveOrg()
						.FirstOrDefault( x => x.Id == id );

					var model = entity?
						.ToModel()
						.AddTime( DataContext.Entry( entity ));

					res = OperationResult<ModelTeam>.Create(
						() => null != model, model, ErrorCode.BadGetTeam );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelTeam>.Create( ErrorCode.BadGetTeam, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelTeam> this [ string name ]
		{
			get
			{
				OperationResult<ModelTeam> res = null;

				try
				{
					var entity = DataContext
						.Teams
						.ForActiveOrg()
						.Include( x => x.TeamMember )
						.ThenInclude( x => x.User )
						.FirstOrDefault( x => x.Name == name );

					var model = entity?
						.ToModel()
						.AddMemberCount( entity );

					res = OperationResult<ModelTeam>.Create(
						() => null != model, model, ErrorCode.BadGetTeam );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelTeam>.Create( ErrorCode.BadGetTeam, e );
				}

				return res;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public TeamRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelTeam> Create( ModelTeam team ) 
		{
			OperationResult<ModelTeam> res;

			try
			{
				var entity = team
					.ToEntity()
					.IncludeActiveOrgId( DataContext );

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( team )
					.ToModel();

				res = OperationResult<ModelTeam>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelTeam>.Create( ErrorCode.BadCreateTeam, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelTeam> Update( ModelTeam team )
		{
			OperationResult<ModelTeam> res;

			try
			{
				var entity = DataContext
					.Teams
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == team.Id );

				if( null == entity )
					return OperationResult<ModelTeam>.Create( ErrorCode.BadGetTeam );

				entity.Update( team );

				DataContext.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( team )
					.ToModel();

				res = OperationResult<ModelTeam>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelTeam>.Create( ErrorCode.BadUpdateTeam, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int id )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Teams
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetTeam );

				DataContext.Teams.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteTeam, e );
			}

			return res;
		}
		#endregion

		#region Class 'Team members' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public OperationResult<ModelUsers> GetMembers( int teamId ) 
		{
			OperationResult<ModelUsers> res;

			try
			{
				var users = DataContext
					.Teams
					.ForActiveOrg()
					.Where( x => x.Id == teamId )
					.Include( x => x.TeamMember )
					.SelectMany( x => x.TeamMember )
					.Select( x => x.User.ToModel() )
					.ToList();

				res = OperationResult<ModelUsers>.Create( users );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUsers>.Create( ErrorCode.BadGetTeamMembers, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="user"></param>
		/// <returns></returns>
		public OperationResult<bool> AddMember( int teamId, int userId )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Teams
					.ForActiveOrg()
					.Include( x => x.TeamMember )
					.FirstOrDefault( x => x.Id == teamId );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetTeam );

				entity.TeamMember.Add( new TeamMember() 
				{
					TeamId = teamId,
					UserId = userId
				});

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadAddTeamMember, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="user"></param>
		/// <returns></returns>
		public OperationResult<bool> RemoveMember( int teamId, int userId )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Teams
					.ForActiveOrg()
					.Include( x => x.TeamMember )
					.FirstOrDefault( x => x.Id == teamId );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetTeam );

				var tm = entity
					.TeamMember
					.Where( x => x.UserId == userId )
					.FirstOrDefault();

				entity.TeamMember.Remove( tm );

				var count = DataContext.SaveChanges();
			
				res = ( count > 0 ) ? 
					OperationResult<bool>.Create( true ) :
					OperationResult<bool>.Create( ErrorCode.BadRemoveTeamMember );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadRemoveTeamMember, e );
			}

			return res;
		}
		#endregion

		#region Class 'Team preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public OperationResult<ModelPreferences> GetPreferences( int teamId )
		{
			OperationResult<ModelPreferences> res;

			try
			{
				var data = DataContext
					.Teams
					.ForActiveOrg()
					.Include( x => x.Preferences )
					.FirstOrDefault( p => p.Id == teamId );

				var model = ( null == data?.Preferences ) ?
					new ModelPreferences() { TeamId = teamId } :
					data
						.Preferences
						//.IncludeActiveOrgId( DataContext )
						.ToTeamModel();

				model.OrgId = DataContext.ActiveOrgId;

				res = OperationResult<ModelPreferences>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadGetTeamPreferences, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public OperationResult<ModelPreferences> UpdatePreferences( ModelPreferences pref )
		{
			OperationResult<ModelPreferences> res;

			try
			{
				var entity = DataContext
					.Teams
					.ForActiveOrg()
					.Include( x => x.Preferences )
					.FirstOrDefault( x => x.Id == pref.TeamId );

				if( null == entity )
					return OperationResult<ModelPreferences>.Create( ErrorCode.BadGetTeam );

				if( null != entity.Preferences )
				{
					entity.Preferences.Update( pref );
				}
				else 
				{
					entity.Preferences = pref.ToTeamEntity();
				}

				DataContext.SaveChanges();

				var model = entity
					.Preferences
					.UpdateId( pref )
					.ToTeamModel();

				res = OperationResult<ModelPreferences>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadUpdateTeamPreferences, e );
			}

			return res;
		}
		#endregion
	}
}
