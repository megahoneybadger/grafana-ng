#region Usings
using ED.Data;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using ModelOrg = ED.Security.Org;
using ModelPreference = ED.Security.Preferences;
using ModelUser = ED.Security.User;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelUserPreferences = ED.Security.UserPreferences;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
	/// </summary>
	public class Users : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private UserRepository _repo;
		/// <summary>
		/// 
		/// </summary>
		private List<ModelOrg> _orgs;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Users()
		{
			_repo = GetRepo<UserRepository>( true );

			_orgs = CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateUser()
		{
			var model = TestFactory.Create<ModelUser>();
			var res = _repo.Create( model );
			Assert.False( res.HasError );
			model = res.Value;

			var list = CreateDataContext()
				.Users
				.Select( x => x.ToModel() )
				.ToList();
			
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateUsers()
		{
			var models = CreateDataContext().AddUsers( 3 );

			var list = CreateDataContext()
				.Users
				.Select( x => x.ToModel() )
				.ToList();
			
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
		public void Should_CreateUsers_InVariousOrgs()
		{
			//var models = CreateDataContext().AddUsers( 5 );
			//CreateDataContext().AddOrgMembers();

			//var all = GetRepo<UserRepository>()
			//	.All
			//	.Value;

			//var totalCounter = 0;

			//foreach( var o in _orgs )
			//{
			//	var orgUsersAll = GetRepo<UserRepository>()
			//		.ForActiveOrg( o.Id )
			//		.All
			//		.Value;

			//	var localCounter = 0;

			//	foreach( var user in orgUsersAll )
			//	{
			//		Assert.NotNull( all.FirstOrDefault( x => x.Id == user.Id && x.OrgId == o.Id ) );

			//		++localCounter;
			//		++totalCounter;
			//	}

			//	Assert.True( localCounter == orgUsersAll.Count );
			//}

			//Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateUser_WhenDuplicateId()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelUser>();
				modelDuplicate.Id = m.Id;

				Assert.True( GetRepo<UserRepository>()
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateUser );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateUser_WhenDuplicateEmailOrLogin()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelUser>();
				modelDuplicate.Email = m.Email;

				Assert.True( GetRepo<UserRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateUser );

				modelDuplicate = TestFactory.Create<ModelUser>();
				modelDuplicate.Login = m.Login;

				Assert.True( GetRepo<UserRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateUser );

				modelDuplicate = TestFactory.Create<ModelUser>();

				Assert.False( GetRepo<UserRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.HasError );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateUser_WhenNullInput()
		{
			var res = _repo.Create( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateUser );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateUser_WhenEmptyInput()
		{
			var model = new ModelUser();
			var res = _repo.Create( model );

			Assert.False( res.HasError );
			Assert.True( res.Value.Equals( model ) );
		}
		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteUsers()
		{
			var models = CreateDataContext().AddUsers( 3 );

			Assert.True( GetRepo<UserRepository>()
				.All
				.Value
				.Count == models.Count );

			foreach( var m in models )
			{
				Assert.False( GetRepo<UserRepository>()
					.Delete( m.Id )
					.HasError );
			}

			Assert.Empty( GetRepo<UserRepository>()
				.All
				.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_DeleteUser_WhenBadId()
		{
			var models = CreateDataContext().AddUsers();
			CreateDataContext().AddOrgMembers();

			Assert.True( GetRepo<UserRepository>()
				.All
				.Value
				.Count == models.Count );

			foreach( var m in models )
			{
				Assert.True( GetRepo<UserRepository>()
					.Delete( m.Id * 1000 )
					.Error
					.Code == ErrorCode.BadGetUser );
			}

			Assert.True( GetRepo<UserRepository>()
				.All
				.Value
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteUser_OnlyWhenCorrectId()
		{
			var models = CreateDataContext().AddUsers();
			CreateDataContext().AddOrgMembers();

			var deleteCounter = 0;

			for( int i = 0; i < models.Count; ++i )
			{
				var badCase = ( i % 2 == 0 );
				var id = badCase ? models [ i ].Id * 1000 : models [ i ].Id;
				var res = GetRepo<UserRepository>().Delete( id );

				if( badCase )
				{
					Assert.True( res.HasError );
					Assert.True( res.Error.Code == ErrorCode.BadGetUser );
				}
				else
				{
					deleteCounter++;
					Assert.False( res.HasError );
					Assert.True( res.Value );
				}
			}

			Assert.True( GetRepo<UserRepository>()
				.All
				.Value
				.Count == models.Count - deleteCounter );
		}

		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateUsers()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				TestFactory.Update( m );

				var updatedModel = GetRepo<UserRepository>()
					.Update( m )
					.Value;

				Assert.True( m.Equals( updatedModel ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateUsers_WithWrongId()
		{
			var models = CreateDataContext().AddUsers( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				m.Id *= 1000;

				Assert.True( GetRepo<UserRepository>()
					.Update( m )
					.Error
					.Code == ErrorCode.BadGetUser );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateUser_WhenNullInput()
		{
			Assert.True( _repo
				.Update( null )
				.Error
				.Code == ErrorCode.BadUpdateUser );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateUserPassword()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var newPassword = TestFactory.GetRandomString( 10 );

				Assert.False( GetRepo<UserRepository>()
					.ChangePassword( m.Id, m.Password, newPassword )
					.HasError );

				var res = GetRepo<UserRepository>().Login( m.Login, newPassword );

				Assert.True( res.Value.Equals( m ) );
				
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateUserPassword_WhenBadOldPassword()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var newPassword = TestFactory.GetRandomString( 10 );

				Assert.True( GetRepo<UserRepository>()
					.ChangePassword( m.Id, m.Password + "err", newPassword )
					.Error
					.Code == ErrorCode.BadChangeUserPassword );

				var res = GetRepo<UserRepository>().Login( m.Login, m.Password );

				Assert.True( res.Value.Equals( m ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateUserPassword_WhenBadId()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var newPassword = TestFactory.GetRandomString( 10 );

				Assert.True( GetRepo<UserRepository>()
					.ChangePassword( m.Id + 1000, m.Password, newPassword )
					.Error
					.Code == ErrorCode.BadGetUser );

				var res = GetRepo<UserRepository>().Login( m.Login, m.Password );

				Assert.True( res.Value.Equals( m ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateUserPassword_WhenEmptyNewPassword()
		{
			var models = CreateDataContext().AddUsers();

			foreach( var m in models )
			{
				var newPassword = TestFactory.GetRandomString( 10 );

				Assert.True( GetRepo<UserRepository>()
					.ChangePassword( m.Id, m.Password, null )
					.Error
					.Code == ErrorCode.BadChangeUserPassword );

				var res = GetRepo<UserRepository>().Login( m.Login, m.Password );

				Assert.True( res.Value.Equals( m ) );
			}
		}
		#endregion

		#region Class 'Star' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_StarDashboards() 
		{
			var models = CreateDataContext().AddUsers(3);
			CreateDataContext().AddDashboards( 3, 3 );

			foreach( var u in models )
			{
				var favorites = CreateDataContext().AddStars( u.Id, 3 );

				AssertStarred( u.Id, favorites );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_StarDashboard_WhenBadUserId()
		{
			var models = CreateDataContext().AddUsers( 3 );
			var dashboards = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var u in models )
			{
				var favorites = TestFactory
					.SelectRandomObjects<ModelDashboard>( dashboards, 3 )
					.ToList();

				foreach( var d in favorites )
				{
					Assert.True( GetRepo<UserRepository>()
						.Star( u.Id * 1000, d.Id )
						.Error
						.Code == ErrorCode.BadStarDashboard );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_StarDashboard_WhenBadDashboardId()
		{
			var models = CreateDataContext().AddUsers( 3 );

			foreach( var u in models )
			{
				Assert.True( GetRepo<UserRepository>()
					.Star( u.Id, 1000 )
					.Error
					.Code == ErrorCode.BadStarDashboard );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UnstarDashboards()
		{
			var models = CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddDashboards( 3, 3 );

			foreach( var u in models )
			{
				var favorites = CreateDataContext().AddStars( u.Id, 3 );
				AssertStarred( u.Id, favorites );

				favorites.ForEach( x => Assert.False(
					GetRepo<UserRepository>()
					.Unstar( u.Id, x.Id )
					.HasError ) );
			}

			Assert.Empty( CreateDataContext()
				.Stars
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UnstarDashboards_WhenBadUserId()
		{
			var models = CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddDashboards( 3, 3 );

			foreach( var u in models )
			{
				var favorites = CreateDataContext().AddStars( u.Id, 3 );

				foreach( var d in favorites )
				{
					Assert.True( GetRepo<UserRepository>()
						.Unstar( u.Id * 1000, d.Id )
						.Error
						.Code == ErrorCode.BadUnstarDashboard );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UnstarDashboards_WhenBadDashboardId()
		{
			var models = CreateDataContext().AddUsers( 3 );

			foreach( var u in models )
			{
				Assert.True( GetRepo<UserRepository>()
					.Unstar( u.Id, 1000 )
					.Error
					.Code == ErrorCode.BadUnstarDashboard );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="userId"></param>
		/// <param name="favorites"></param>
		private void AssertStarred( int userId, ModelDashboards favorites ) 
		{
			int foundCounter = 0;

			foreach( var o in _orgs )
			{
				var res = GetRepo<DashboardRepository>()
					.ForActiveOrg( o.Id )
					.Search( new DashboardSearchFilter()
					{
						UserId = userId,
						Starred = true
					} );

				foreach( var d in res.Value.Dashboards )
				{
					Assert.NotNull( favorites.FirstOrDefault( x => x.Id == d.Id ) );
					++foundCounter;
				}
			}

			Assert.True( foundCounter == favorites.Count );
		}
		#endregion

		#region Class 'Preferences' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetPreferences()
		{
			var models = CreateDataContext().AddUsers( 3 );
			var prefs = CreateDataContext().AddUserPreferences();

			foreach( var u in models )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId ) 
					.GetPreferences( u.Id );

				Assert.False( prefRes.HasError );

				var model = prefs.FirstOrDefault( x => x.Id == prefRes.Value.Id );

				Assert.NotNull( model );
				Assert.True( model.Equals( prefRes.Value ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteUsersAndPreferences()
		{
			var users = CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddUserPreferences();

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == users.Count );

			foreach( var u in users )
			{
				Assert.False( GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
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

				var model = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences( u.Id );

				Assert.False( model.HasError );

				var emptyModel = new ModelUserPreferences() { UserId = u.Id, OrgId = u.OrgId };
				Assert.True( emptyModel.Equals( model.Value ) );
			}

			Assert.Empty( CreateDataContext()
				.Preferences
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdatePreferences()
		{
			var users = CreateDataContext().AddUsers( 5 );

			foreach( var u in users )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences( u.Id );

				Assert.False( prefRes.HasError );

				var model = prefRes.Value;
				var emptyModel = new ModelUserPreferences() { UserId = u.Id, OrgId = u.OrgId };
				Assert.True( emptyModel.Equals( prefRes.Value ) );

				TestFactory.Update( model );

				Assert.False( GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.UpdatePreferences( model )
					.HasError );

				prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences( u.Id );

				Assert.False( prefRes.HasError );

				Assert.True( model.Equals( prefRes.Value ) );
			}
		}
		///// <summary>
		///// 
		///// </summary>
		[Fact]
		public void ShouldNot_UpdatePreferencesWhenBadUserId()
		{
			var users = CreateDataContext().AddUsers( 5 );

			foreach( var u in users )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences( u.Id );

				Assert.False( prefRes.HasError );

				var model = prefRes.Value;
				var emptyModel = new ModelUserPreferences() { UserId = u.Id, OrgId = u.OrgId };
				Assert.True( emptyModel.Equals( prefRes.Value ) );

				TestFactory.Update( model );

				Assert.True( GetRepo<UserRepository>()
					.ForActiveOrg( 0 )
					.UpdatePreferences( model )
					.Error
					.Code == ErrorCode.BadUpdateUserPreferences );

				model.UserId = TestFactory.GetRandomUShort( 1000 ) + 1000;

				Assert.True( GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.UpdatePreferences( model )
					.Error
					.Code == ErrorCode.BadUpdateUserPreferences );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetEffectivePreferences()
		{
			var models = CreateDataContext().AddUsers( 3 );
			var userPrefs = CreateDataContext().AddUserPreferences();
			var orgPrefs = CreateDataContext().AddOrgPreferences();

			foreach( var u in models )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetEffectivePreferences( u.Id );

				Assert.False( prefRes.HasError );

				var userPref = userPrefs.FirstOrDefault( x => x.UserId == u.Id );
				var orgPref = orgPrefs.FirstOrDefault( x => x.OrgId == u.OrgId );

				if( userPref.TimeZone == Security.TimeZone.Default )
				{
					Assert.True( prefRes.Value.TimeZone == orgPref.TimeZone );
				}
				else 
				{
					Assert.True( prefRes.Value.TimeZone == userPref.TimeZone );
				}

				if( userPref.Theme == Security.Theme.Default )
				{
					Assert.True( prefRes.Value.Theme == orgPref.Theme );
				}
				else
				{
					Assert.True( prefRes.Value.Theme == userPref.Theme );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetEffectivePreferences_WhenNoUserPrefs()
		{
			var models = CreateDataContext().AddUsers( 3 );
			var orgPrefs = CreateDataContext().AddOrgPreferences();

			foreach( var u in models )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetEffectivePreferences( u.Id );

				Assert.False( prefRes.HasError );

				var orgPref = orgPrefs.FirstOrDefault( x => x.OrgId == u.OrgId );

				var userPref = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences( u.Id );

				Assert.True( prefRes.Value.TimeZone == orgPref.TimeZone );
				Assert.True( prefRes.Value.Theme == orgPref.Theme );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetEffectivePreferences_WhenNoOrgPrefs()
		{
			var models = CreateDataContext().AddUsers( 3 );
			var userPrefs = CreateDataContext().AddUserPreferences();

			foreach( var u in models )
			{
				var prefRes = GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
					.GetEffectivePreferences( u.Id );

				Assert.False( prefRes.HasError );

				var userPref = userPrefs.FirstOrDefault( x => x.UserId == u.Id );

				var orgPref = GetRepo<OrgRepository>()
					.ForActiveOrg( u.OrgId )
					.GetPreferences();

				Assert.True( prefRes.Value.TimeZone == userPref.TimeZone );
				Assert.True( prefRes.Value.Theme == userPref.Theme );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteUsersAndOnlyUserPreferences()
		{
			var users = CreateDataContext().AddUsers( 5 );

			var userPrefs = CreateDataContext().AddUserPreferences();
			var orgPrefs = CreateDataContext().AddOrgPreferences();

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == userPrefs.Count + orgPrefs.Count );

			foreach( var u in users )
			{
				Assert.False( GetRepo<UserRepository>()
					.ForActiveOrg( u.OrgId )
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

				Assert.True( prefCount == userCount + orgPrefs.Count );
			}

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == orgPrefs.Count );

			foreach( var o in _orgs )
			{
				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id )
					.HasError );

				var prefCount = CreateDataContext()
					.Preferences
					.ToList()
					.Count;

				var orgCount = CreateDataContext()
					.Orgs
					.ToList()
					.Count;

				Assert.True( prefCount == orgCount );
			}

			Assert.Empty( CreateDataContext()
				.Preferences
				.ToList() );
		}
		#endregion
	}
}

