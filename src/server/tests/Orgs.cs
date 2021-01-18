#region Usings
using ED.Data;
using System.Linq;
using Xunit;
using ModelOrg = ED.Security.Org;
using ModelPreference = ED.Security.Preferences;
using ModelUser = ED.Security.User;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
	/// </summary>
	public class Orgs : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private OrgRepository _repo;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Orgs()
		{
			_repo = GetRepo<OrgRepository>( true );

			
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateOrg()
		{
			var model = TestFactory.Create<ModelOrg>();
			var res = _repo.Create( model, false );
			Assert.False( res.HasError );

			var resAll = _repo.All;
			var list = resAll.Value;
			Assert.False( resAll.HasError );
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateOrgs()
		{
			var models = CreateDataContext().AddOrgs();

			var resAll = _repo.All;
			var list = resAll.Value;
			Assert.False( resAll.HasError );
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
		public void ShouldNot_CreateOrg_WhenDuplicateId()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelOrg>();
				modelDuplicate.Id = m.Id;

				Assert.True( GetRepo<OrgRepository>()
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateOrg );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateOrg_WhenDuplicateName()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelOrg>();
				modelDuplicate.Name = m.Name;

				Assert.True( GetRepo<OrgRepository>()
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateOrg );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateOrg_WhenNullInput()
		{
			var res = _repo.Create( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateOrg );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateOrg_WhenEmptyInput()
		{
			var model = new ModelOrg();
			var res = _repo.Create( model, false );

			Assert.False( res.HasError );
			Assert.True( res.Value.Equals( model ) );
		}
		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateOrgs()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				TestFactory.Update( m );

				var updatedModel = GetRepo<OrgRepository>()
					.Update( m )
					.Value;

				Assert.True( m.Equals( updatedModel ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpsertOrg()
		{
			var model = TestFactory.Create<ModelOrg>();

			Assert.False( GetRepo<OrgRepository>()
				.Update( model )
				.HasError );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpsertOrgTwice()
		{
			var model = TestFactory.Create<ModelOrg>();

			Assert.False( GetRepo<OrgRepository>()
				.Update( model )
				.HasError );

			Assert.True( GetRepo<OrgRepository>()
				.Update( model )
				.Error
				.Code == ErrorCode.BadUpdateOrg );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateOrg_WhenNullInput()
		{
			Assert.True( _repo
				.Update( null )
				.Error
				.Code == ErrorCode.BadUpdateOrg );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateOrgs_IncrementUserVersions()
		{
			var models = CreateDataContext().AddOrgs();
			CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddOrgMembers();

			foreach( var m in models )
			{
				var orgUsers = GetActiveUsersForOrg( m.Id );

				TestFactory.Update( m );

				var updatedModel = GetRepo<OrgRepository>()
					.Update( m )
					.Value;

				Assert.True( m.Equals( updatedModel ) );

				var orgUsersUpdated = GetActiveUsersForOrg( m.Id );

				for( int i = 0; i < orgUsers.Count; ++i )
				{
					var oldVersion = orgUsers [ i ].Bag.Version;
					var newVersion = orgUsersUpdated [ i ].Bag.Version;

					Assert.True( oldVersion + 1 == newVersion );
				}
			}
		}
		#endregion

		#region Class 'Find' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_FindOrgById()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				var res = _repo [ m.Id ];

				Assert.False( res.HasError );
				Assert.True( m.Equals( res.Value ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindOrgById_WhenBadId()
		{
			CreateDataContext()
				.AddOrgs()
				.ForEach( m => Assert.True( _repo [ m.Id * 1000 ]
					.Error
					.Code == ErrorCode.BadGetOrg ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_FindOrgByName()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				var res = _repo [ m.Name ];

				Assert.False( res.HasError );
				Assert.True( m.Equals( res.Value ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindOrgByName_WhenBadName()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				Assert.True( _repo [ m.Name + "_" ]
					.Error
					.Code == ErrorCode.BadGetOrg );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindOrgByName_WhenNullName()
		{
			CreateDataContext()
				.AddOrgs()
				.ForEach( m => Assert.True( _repo [ null ]
					.Error
					.Code == ErrorCode.BadGetOrg ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_FindAll()
		{
			var models = CreateDataContext().AddOrgs();

			var resAll = _repo.All;
			var list = resAll.Value;
			Assert.False( resAll.HasError );
			Assert.Equal( list.Count, models.Count );

			for( int i = 0; i < models.Count; ++i )
			{
				Assert.True( models [ i ].Equals( list [ i ] ) );
			}
		}
		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteOrgs()
		{
			var models = CreateDataContext().AddOrgs();

			Assert.True( GetRepo<OrgRepository>()
				.All
				.Value
				.Count == models.Count );

			foreach( var m in models )
			{
				Assert.False( GetRepo<OrgRepository>()
					.Delete( m.Id, true )
					.HasError );
			}

			Assert.Empty( GetRepo<OrgRepository>()
				.All
				.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_DeleteOrg_WhenBadId()
		{
			var models = CreateDataContext().AddOrgs();

			Assert.True( GetRepo<OrgRepository>()
				.All
				.Value
				.Count == models.Count );

			foreach( var m in models )
			{
				Assert.True( GetRepo<OrgRepository>()
					.Delete( m.Id * 1000, true )
					.Error
					.Code == ErrorCode.BadGetOrg );
			}

			Assert.True( GetRepo<OrgRepository>()
				.All
				.Value
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteOrg_OnlyWhenCorrectId()
		{
			var models = CreateDataContext().AddOrgs();
			var deleteCounter = 0;

			for( int i = 0; i < models.Count; ++i )
			{
				var badCase = ( i % 2 == 0 );
				var id = badCase ? models [ i ].Id * 1000 : models [ i ].Id;
				var res = GetRepo<OrgRepository>().Delete( id, true );

				if( badCase )
				{
					Assert.True( res.HasError );
					Assert.True( res.Error.Code == ErrorCode.BadGetOrg );
				}
				else
				{
					deleteCounter++;
					Assert.False( res.HasError );
					Assert.True( res.Value );
				}
			}

			Assert.True( GetRepo<OrgRepository>()
				.All
				.Value
				.Count == models.Count - deleteCounter );
		}
		#endregion

		#region Class 'Preferences' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetPreferences()
		{
			var models = CreateDataContext().AddOrgs();
			var prefs = CreateDataContext().AddOrgPreferences();

			foreach( var o in models )
			{
				var prefRes = GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.GetPreferences();

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
		public void Should_DeleteOrgsAndPreferences()
		{
			var models = CreateDataContext().AddOrgs();
			CreateDataContext().AddOrgPreferences();

			Assert.True( CreateDataContext()
				.Preferences
				.ToList()
				.Count == models.Count );

			foreach( var o in models )
			{
				Assert.False( GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.Delete( o.Id, true )
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

				var model = GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.GetPreferences();

				Assert.False( model.HasError );

				var emptyModel = new ModelPreference() { OrgId = o.Id };
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
			var models = CreateDataContext().AddOrgs();

			foreach( var o in models )
			{
				var prefRes = GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.GetPreferences();

				Assert.False( prefRes.HasError );

				var model = prefRes.Value;
				var emptyModel = new ModelPreference() { OrgId = o.Id };
				Assert.True( emptyModel.Equals( prefRes.Value ) );

				TestFactory.Update( model );
				model.OrgId = o.Id;

				Assert.False( GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.UpdatePreferences( model )
					.HasError );

				prefRes = GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.GetPreferences();

				Assert.False( prefRes.HasError );

				Assert.True( model.Equals( prefRes.Value ) );
			}
		}
		///// <summary>
		///// 
		///// </summary>
		[Fact]
		public void ShouldNot_UpdatePreferencesWhenBadOrgId()
		{
			var models = CreateDataContext().AddOrgs();

			foreach( var m in models )
			{
				var prefRes = GetRepo<OrgRepository>()
					.ForActiveOrg( m.Id )
					.GetPreferences();

				Assert.False( prefRes.HasError );

				var model = prefRes.Value;
				var emptyModel = new ModelPreference() { OrgId = m.Id };
				Assert.True( emptyModel.Equals( prefRes.Value ) );

				TestFactory.Update( model );

				var res = GetRepo<OrgRepository>()
					.ForActiveOrg( 0 )
					.UpdatePreferences( model );

				Assert.False( res.HasError );
				Assert.True( res.Value.Equals( model ) );

				model.OrgId = TestFactory.GetRandomUShort( 1000 ) + 1000;

				res = GetRepo<OrgRepository>()
					.ForActiveOrg( m.Id )
					.UpdatePreferences( model );

				Assert.False( res.HasError );
				Assert.True( res.Value.Equals( model ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdatePreferences_IncrementUserVersions()
		{
			var models = CreateDataContext().AddOrgs();
			var users = CreateDataContext().AddUsers( 5 );
			CreateDataContext().AddOrgMembers();

			foreach( var o in models )
			{
				var orgUsers = GetActiveUsersForOrg( o.Id );

				var prefRes = GetRepo<OrgRepository>()
					.ForActiveOrg( o.Id )
					.GetPreferences();

				TestFactory.Update( prefRes.Value );

				var dc = CreateDataContext();
				dc.ActiveUserId = TestFactory.SelectRandomObject<ModelUser>( users ).Id;
				var repo = new OrgRepository( dc );

				repo
					.ForActiveOrg( o.Id )
					.UpdatePreferences( prefRes.Value );

				var orgUsersUpdated = GetActiveUsersForOrg( o.Id );

				for( int i = 0; i < orgUsers.Count; ++i )
				{
					var oldVersion = orgUsers [ i ].Bag.Version;
					var newVersion = orgUsersUpdated [ i ].Bag.Version;

					if( dc.ActiveUserId == orgUsers [ i ].Id )
					{
						Assert.True( oldVersion == newVersion );
					}
					else
					{
						Assert.True( oldVersion + 1 == newVersion );
					}
				}
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="orgId"></param>
		/// <returns></returns>
		private ModelUsers GetActiveUsersForOrg( int orgId ) 
		{
			var dc = CreateDataContext();

			return dc
				.Users
				.Where( x => x.OrgId == orgId )
				.Select( x => x
					.ToModel( orgId )
					.AddVersion( dc.Entry( x ) ) )
				.ToList();
		}
		#endregion
	}
}
