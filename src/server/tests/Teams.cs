#region Usings
using ED.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using ModelOrg = ED.Security.Org;
using ModelTeam = ED.Security.Team;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelUser = ED.Security.User;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~Teams"
	/// </summary>
	public class Teams : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private TeamRepository _repo;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Teams()
		{
			_repo = GetRepo<TeamRepository>( true );

			CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateTeam()
		{
			var model = TestFactory.Create<ModelTeam>();

			var res = await _repo.Create( model );
			Assert.NotNull( res );
			model = res;

			var list = await _repo.GetTeams();

			Assert.NotEmpty( list );
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateTeams()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );

			var list = await _repo.GetTeams();
			
			Assert.NotEmpty( list );
			Assert.Equal( list.Count, models.Count );

			for( int i = 0; i < models.Count; ++i )
			{
				Assert.True( models [ i ].Equals( list [ i ] ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateTeams_InVariousOrgs()
		{
			var models = CreateDataContext().AddTeams( 10 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			var all = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			var totalCounter = 0;

			foreach( var o in orgs )
			{
				var orgTeamsAll = await GetRepo<TeamRepository>()
					.ForActiveOrg( o )
					.GetTeams();

				var localCounter = 0;

				foreach( var team in orgTeamsAll )
				{
					Assert.NotNull( all.FirstOrDefault( x => x.Id == team.Id && x.OrgId == o.Id ) );

					++localCounter;
					++totalCounter;
				}

				Assert.True( localCounter == orgTeamsAll.Count );
			}

			Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateTeam_WhenDuplicateId()
		{
			var models = await CreateDataContext ().AddTeamsForDefaultOrg( 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelTeam>();
				modelDuplicate.Id = m.Id;

				var task = GetRepo<TeamRepository>().Create( modelDuplicate );

				await Assert.ThrowsAsync<DbUpdateException>( () => task );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateTeam_WhenDuplicateName()
		{
			var models = await CreateDataContext().AddTeams( 5 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelTeam>();
				modelDuplicate.Name = m.Name;

				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate );

				await Assert.ThrowsAsync<DbUpdateException>( () => task );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateTeam_WhenNullInput()
		{
			await Assert.ThrowsAsync<NullReferenceException>( () => _repo.Create( null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateTeam_WhenEmptyInput()
		{
			var model = new ModelTeam();

			var team = await _repo.Create( model );
			
			Assert.True( team.Equals( model ) );
		}

		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateTeam_WhenWrongOrgId()
		{
			var models = TestFactory.Create<ModelTeam>( 5 );
			var orgs = GetRepo<OrgRepository>().All.Value;

			foreach( var m in models )
			{
				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.Create( m );

				await Assert.ThrowsAsync<DbUpdateException>( () => task );
				var org = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				var res = await GetRepo<TeamRepository>()
					.ForActiveOrg( org.Id )
					.Create( m );

				//Assert.False( res.HasError );
				Assert.True( res.Equals( m ) );
			}
		}

		#endregion

		#region Class 'Find' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindTeamById()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );

			foreach( var m in models )
			{
				var res = await _repo.GetTeam( m.Id );

				//Assert.False( res.HasError );
				Assert.True( m.Equals( res ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindTeamById_WhenBadId()
		{
			var list = await CreateDataContext().AddTeamsForDefaultOrg( 3 );

			foreach( var m in list ) 
			{
				var team = await _repo.GetTeam( m.Id * 1000 );

				Assert.Null( team );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindTeamByName()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );

			foreach( var m in models )
			{
				var res = await _repo.GetTeam( m.Name );
				
				Assert.True( m.Equals( res ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindTeamByName_WhenBadName()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );

			foreach( var m in models )
			{
				var team = await _repo.GetTeam( m.Name + "_" );

				Assert.Null( team );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindTeamByName_WhenNullName()
		{
			var teams = await CreateDataContext()
				.AddTeamsForDefaultOrg( 3 );

			teams.ForEach( async m => Assert.Null( await _repo.GetTeam( null ) ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );

			var list = await _repo.GetTeams();
			
			Assert.NotEmpty( list );
			Assert.Equal( list.Count, models.Count );

			for( int i = 0; i < models.Count; ++i )
			{
				Assert.True( models [ i ].Equals( list [ i ] ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll_InVariousOrgsById()
		{
			var models = await CreateDataContext().AddTeams( 5 );

			var all = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var t in all )
			{
				var team = await GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.GetTeam( t.Id );

				Assert.Null( team );

				var existing = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetTeam( t.Id );

				Assert.True( existing.Equals( t ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll_InVariousOrgsByName()
		{
			var models = CreateDataContext().AddTeams( 5 );

			var all = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var t in all )
			{
				var team = await GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.GetTeam( t.Name );

				Assert.Null( team );

				var existing = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetTeam( t.Name );

				Assert.True( existing.Equals( t ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll_InVariousOrgsAll()
		{
			var models = CreateDataContext().AddTeams( 5 );

			var all = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var t in all )
			{
				var teams = await GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.GetTeams();

				Assert.Empty( teams );

				var orgTeamsAll = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetTeams();

				var orgTeamsAllDirect = all
					.Where( x => x.OrgId == t.OrgId )
					.ToList();

				Assert.True( orgTeamsAll.Count == orgTeamsAllDirect.Count );

				foreach( var next in orgTeamsAll )
				{
					var existing = orgTeamsAllDirect.FirstOrDefault( x => x.Id == next.Id );

					Assert.True( existing.Equals( next ) );
				}
			}
		}
		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateTeams()
		{
			var models = await CreateDataContext().AddTeams( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.Update( m );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );

				var updatedModel = await GetRepo<TeamRepository>()
					.ForActiveOrg( m.OrgId )
					.Update( m );

				Assert.True( m.Equals( updatedModel ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpsertTeam()
		{
			var model = TestFactory.Create<ModelTeam>();

			await Assert.ThrowsAsync<BadGetTeamException>( () => 
				GetRepo<TeamRepository>().Update( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateTeams_WithWrongId()
		{
			var models = await CreateDataContext().AddTeams( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				m.Id *= 1000;

				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( m.OrgId )
					.Update( m );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateTeams_WithWrongOrgId()
		{
			var models = await CreateDataContext().AddTeams( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.Update( m );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateTeam_WhenNullInput()
		{
			await Assert.ThrowsAnyAsync<Exception>( () => _repo.Update( null ) );
		}
		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeams()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 3 );

			var teams = await GetRepo<TeamRepository>().GetTeams();

			Assert.True( teams.Count == models.Count );

			foreach( var m in models )
			{
				var res = await GetRepo<TeamRepository>().Delete( m.Id );

				Assert.True( res );
			}

			Assert.Empty( await GetRepo<TeamRepository>().GetTeams() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeams_InVariousOrgs()
		{
			var models = await CreateDataContext().AddTeams( 10 );

			var all = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var t in all )
			{
				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.Delete( t.Id );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );

				var count = ( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetTeams())
					.Count;

				Assert.True( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.Delete( t.Id ));

				Assert.True( ( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetTeams() )
					.Count == count - 1 );
			}

			Assert.Empty( await GetRepo<TeamRepository>().GetTeams() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteTeam_WhenBadId()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 3 );

			Assert.True( ( await  GetRepo<TeamRepository>()
				.GetTeams() )
				.Count == models.Count );

			foreach( var m in models )
			{
				var task = GetRepo<TeamRepository>().Delete( m.Id * 1000 );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );
			}

			Assert.True( ( await GetRepo<TeamRepository>()
				.GetTeams())
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeam_OnlyWhenCorrectId()
		{
			var models = await CreateDataContext().AddTeamsForDefaultOrg( 5 );
			var deleteCounter = 0;

			for( int i = 0; i < models.Count; ++i )
			{
				var badCase = ( i % 2 == 0 );
				var id = badCase ? models [ i ].Id * 1000 : models [ i ].Id;
				var task = GetRepo<TeamRepository>().Delete( id );

				if( badCase )
				{
					await Assert.ThrowsAsync<BadGetTeamException>( () => task );
				}
				else
				{
					deleteCounter++;
					Assert.True( await task );
				}
			}

			Assert.True( ( await GetRepo<TeamRepository>()
				.GetTeams())
				.Count == models.Count - deleteCounter );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeams_WithDeletedOrg()
		{
			var models = CreateDataContext().AddTeams( 10 );

			var count = CreateDataContext()
				.Teams
				.Select( x => x.ToModel() )
				.Count();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgTeamsCount = ( await GetRepo<TeamRepository>()
					.ForActiveOrg( o.Id )
					.GetTeams())
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Teams
					.Select( x => x.ToModel() )
					.Count() == count - orgTeamsCount );

				Assert.Empty( await GetRepo<TeamRepository>()
					.ForActiveOrg( o.Id )
					.GetTeams() );

				count -= orgTeamsCount;
			}

			Assert.True( 0 == count );

			Assert.Empty( CreateDataContext()
				.Teams
				.ToList() );
		}
		#endregion

		#region Class 'Team member' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetMembers()
		{
			var teams = await CreateDataContext().AddTeamsForDefaultOrg( 3 );
			var users = CreateDataContext().AddUsers( 10 );
			CreateDataContext().AddTeamMembers();

			var teamMembers = CreateDataContext()
				.TeamMember
				.ToList();

			var count = 0;

			foreach( var t in teams )
			{
				var members = await GetRepo<TeamRepository>().GetMembers( t.Id );

				foreach( var m in members )
				{
					Assert.NotNull( teamMembers.FirstOrDefault( x =>
						x.UserId == m.Id && x.TeamId == t.Id ) );
				}

				count += members.Count;
			}

			Assert.True( teamMembers.Count == count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetMembers_InVariousOrgs()
		{
			var teams = await CreateDataContext().AddTeams( 3 );
			var users = CreateDataContext().AddUsers( 10 );
			CreateDataContext().AddTeamMembers();

			var teamMembers = CreateDataContext()
				.TeamMember
				.ToList();

			var count = 0;

			foreach( var t in teams )
			{
				var members = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id );

				foreach( var m in members )
				{
					Assert.NotNull( teamMembers.FirstOrDefault( x =>
						x.UserId == m.Id && x.TeamId == t.Id ) );
				}

				count += members.Count;
			}

			Assert.True( teamMembers.Count == count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_AddTeamMember()
		{
			var team = TestFactory.Create<ModelTeam>();
			var res = await _repo.Create( team );
			Assert.True( team.Equals( res ) );

			var user = TestFactory.Create<ModelUser>();
			user.Role = Security.Role.Admin;
			var resUser = GetRepo<UserRepository>().Create( user );
			Assert.False( resUser.HasError );

			var resTm = await _repo.AddMember( team.Id, user.Id );
			
			var resTeamMembers = await _repo.GetMembers( team.Id );
			Assert.Single( resTeamMembers );

			var userFromLinkTable = resTeamMembers.FirstOrDefault();

			Assert.True( userFromLinkTable.Equals( user ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_AddTeamMembers()
		{
			var team = await _repo.Create( TestFactory.Create<ModelTeam>() );

			var users = CreateDataContext().AddUsers( 5 );

			users
				.Select( x => x.Id )
				.ToList()
				.ForEach( async x => await _repo.AddMember( team.Id, x ) );

			var linkUsers = await GetRepo<TeamRepository>().GetMembers( team.Id );

			Assert.Equal( linkUsers.Count, users.Count );

			for( int i = 0; i < users.Count; ++i )
			{
				Assert.True( users [ i ].Equals( linkUsers [ i ] ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_AddTeamsMembers()
		{
			var teams = await CreateDataContext().AddTeams( 3 );
			var users = CreateDataContext().AddUsers( 5 );

			foreach( var t in teams )
			{
				var count = TestFactory.GetRandomUShort( ( ushort )users.Count );

				var userIds = TestFactory
					.SelectRandomObjects( users, count )
					.Select( x => x.Id )
					.ToList();

				foreach( var x in userIds ) 
				{
					await GetRepo<TeamRepository>()
						.ForActiveOrg( t.OrgId )
						.AddMember( t.Id, x );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeamsAndTeamMembers()
		{
			var teams = await CreateDataContext().AddTeams( 5 );
			var users = CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddTeamMembers();

			var totalTeamMembersCount = CreateDataContext()
				.TeamMember
				.ToList()
				.Count;

			foreach( var t in teams )
			{
				var count = ( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id ) )
					.Count;

				Assert.True( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.Delete( t.Id ) );

				Assert.Empty( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id ));

				var newTotalCount = CreateDataContext()
					.TeamMember
					.ToList()
					.Count;

				totalTeamMembersCount -= count;

				Assert.True( totalTeamMembersCount == newTotalCount );
			}

			Assert.Empty( CreateDataContext()
				.TeamMember
				.ToList() );

			Assert.True( totalTeamMembersCount == 0 );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteUsersAndTeamMembers()
		{
			var teams = await CreateDataContext().AddTeams( 5 );
			CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddTeamMembers();

			foreach( var t in teams )
			{
				var users = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id );

				foreach( var u in users )
				{
					Assert.False( GetRepo<UserRepository>()
						.Delete( u.Id )
						.HasError );
				}

				Assert.Empty( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id ));
			}

			Assert.Empty( CreateDataContext()
				.TeamMember
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteNotExistingMembers()
		{
			var teams = await CreateDataContext().AddTeams( 3 );
			CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddTeamMembers();

			foreach( var t in teams )
			{
				var members = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetMembers( t.Id );

				foreach( var m in members )
				{
					var task = GetRepo<TeamRepository>()
						.ForActiveOrg( 0 )
						.RemoveMember( t.Id, m.Id );

					await Assert.ThrowsAsync<BadGetTeamException>( () => task );

					Assert.True( await GetRepo<TeamRepository>()
						.ForActiveOrg( t.OrgId )
						.RemoveMember( t.Id, m.Id ) );

					Assert.False( await GetRepo<TeamRepository>()
						.ForActiveOrg( t.OrgId )
						.RemoveMember( t.Id, m.Id ));
				}
			}

			Assert.Empty( CreateDataContext()
				.TeamMember
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		//[Fact]
		//public async Task Should_DeleteOrgsAndTeamsAndTeamMembers()
		//{
		//	var teams = CreateDataContext().AddTeams( 5 );
		//	var users = CreateDataContext().AddUsers( 5 );
		//	CreateDataContext().AddTeamMembers();

		//	var orgs = CreateDataContext()
		//		.Orgs
		//		.ToList();

		//	var totalMembers = CreateDataContext()
		//		.TeamMember
		//		.ToList()
		//		.Count;

		//	var totalTeams = CreateDataContext()
		//		.Teams
		//		.ToList()
		//		.Count;

		//	foreach( var o in orgs )
		//	{
		//		var totalOrgTeamCount = teams
		//			.Where( x => x.OrgId == o.Id )
		//			.Count();



		//		var orgTeams = teams.Where( x => x.OrgId == o.Id );

		//		var res = await orgTeams.SelectManyAsync( x => GetRepo<TeamRepositoryAsync>()
		//				.ForActiveOrg( x.OrgId )
		//				.GetMembers( x.Id ) );


		//		//Assert.False( GetRepo<OrgRepository>()
		//		//	.Delete( o.Id, true )
		//		//	.HasError );

		//		//Assert.True( CreateDataContext()
		//		//	.TeamMember
		//		//	.ToList()
		//		//	.Count == totalMembers - totalOrgTeamMembersCount );

		//		//Assert.True( CreateDataContext()
		//		//	.Teams
		//		//	.ToList()
		//		//	.Count == totalTeams - totalOrgTeamCount );

		//		//Assert.Empty( await GetRepo<TeamRepositoryAsync>()
		//		//	.ForActiveOrg( o.Id )
		//		//	.GetTeams() );

		//		//totalMembers -= totalOrgTeamMembersCount;
		//		//totalTeams -= totalOrgTeamCount;
		//	}


		//	Assert.Empty( CreateDataContext()
		//		.TeamMember
		//		.ToList() );

		//	Assert.Empty( CreateDataContext()
		//		.Teams
		//		.ToList() );

		//	Assert.Empty( CreateDataContext()
		//		.Orgs
		//		.ToList() );
		//}
		#endregion

		#region Class 'Preferences' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetPreferences()
		{
			var teams = await CreateDataContext().AddTeams( 5 );
			var prefs = CreateDataContext().AddTeamPreferences();

			foreach( var t in teams )
			{
				var prefRes = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetPreferences( t.Id );

				var model = prefs.FirstOrDefault( x => x.Id == prefRes.Id );

				Assert.NotNull( model );

				Assert.True( model.Equals( prefRes ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeamsAndPreferences()
		{
			var teams = await CreateDataContext().AddTeams( 5 );
			CreateDataContext().AddTeamPreferences();

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == teams.Count );

			foreach( var t in teams )
			{
				Assert.True( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.Delete( t.Id ) );

				var prefCount = CreateDataContext()
					.Preferences
					.ToList()
					.Count;

				var teamCount = CreateDataContext()
					.Teams
					.ToList()
					.Count;

				Assert.True( prefCount == teamCount );

				var model = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetPreferences( t.Id );

				

				var emptyModel = new ModelTeamPreferences() { OrgId = t.OrgId, TeamId = t.Id };
				Assert.True( emptyModel.Equals( model ) );
			}

			Assert.Empty( CreateDataContext()
				.Preferences
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeamsAndOnlyTeamPreferences()
		{
			var teams = await CreateDataContext().AddTeams( 5 );
			var users = CreateDataContext().AddUsers( 10 );
			CreateDataContext().AddTeamMembers();

			CreateDataContext().AddTeamPreferences();
			CreateDataContext().AddUserPreferences();

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == teams.Count + users.Count );

			Assert.NotEmpty( CreateDataContext()
				.TeamMember
				.ToList() );

			foreach( var t in teams )
			{
				Assert.True( await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.Delete( t.Id ) );

				var prefCount = CreateDataContext()
					.Preferences
					.ToList()
					.Count;

				var teamCount = CreateDataContext()
					.Teams
					.ToList()
					.Count;

				Assert.True( prefCount == teamCount + users.Count );
			}

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == users.Count );

			Assert.Empty( CreateDataContext()
				.TeamMember
				.ToList() );

			foreach( var u in users )
			{
				Assert.False( GetRepo<UserRepository>()
					.Delete( u.Id )
					.HasError );

				var prefCount = CreateDataContext()
					.Preferences
					.ToList()
					.Count;

				var userCount = CreateDataContext()
					.Users
					.ToList()
					.Count;

				Assert.True( prefCount == userCount );
			}

			Assert.Empty( CreateDataContext()
				.Preferences
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdatePreferences()
		{
			var teams = await CreateDataContext().AddTeams( 5 );

			foreach( var t in teams )
			{
				var model = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetPreferences( t.Id );

				var emptyModel = new ModelTeamPreferences() { TeamId = t.Id, OrgId = t.OrgId };
				Assert.True( emptyModel.Equals( model ) );

				TestFactory.Update( model );

				await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.UpdatePreferences( model );

				var model2 = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetPreferences( t.Id );

				Assert.True( model.Equals( model2 ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdatePreferencesWhenBadTeamId()
		{
			var teams = await CreateDataContext().AddTeams( 5 );

			foreach( var t in teams )
			{
				var model = await GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.GetPreferences( t.Id );

				var emptyModel = new ModelTeamPreferences() { TeamId = t.Id, OrgId = t.OrgId };
				Assert.True( emptyModel.Equals( model ) );

				TestFactory.Update( model );

				var task = GetRepo<TeamRepository>()
					.ForActiveOrg( 0 )
					.UpdatePreferences( model );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );

				model.TeamId = TestFactory.GetRandomUShort( 1000 ) + 1000;

				task = GetRepo<TeamRepository>()
					.ForActiveOrg( t.OrgId )
					.UpdatePreferences( model );

				await Assert.ThrowsAsync<BadGetTeamException>( () => task );
			}
		}
		#endregion
	}
}
