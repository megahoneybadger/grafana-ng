#region Usings
using ED.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

using ModelOrg = ED.Security.Org;
using ModelFolder = ED.Dashboards.Folder;
using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using ModelUser = ED.Security.User;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using Microsoft.EntityFrameworkCore;
using ED.Security;
using System.Threading.Tasks;
#endregion

namespace ED.Tests
{
	/// <summary>
	///  dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~Folders"
	/// </summary>
	public class Folders : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private FolderRepository _repo;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private FolderRepository GetRepo() => GetRepo<FolderRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Folders()
		{
			_repo = GetRepo<FolderRepository>( true );

			CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Find' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindFolderById()
		{
			var folders = await CreateDataContext().AddFolders();

			foreach( var f in folders ) 
			{
				var res = await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( f.Id );

				Assert.NotNull( res );
				Assert.True( f.Equals( res ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( 0 )
					.GetFolder( f.Id  ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindFolderById_WhenBadId()
		{
			var folders = await CreateDataContext().AddFolders();

			folders.ForEach( async m => Assert.Null( await GetRepo()
					.ForActiveOrg( m )
					.GetFolder( m.Id * 1000 ) ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindFolderByUid()
		{
			var folders = await CreateDataContext().AddFolders();

			foreach( var f in folders )
			{
				var res = await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( f.Uid );

				Assert.NotNull( res );
				Assert.True( f.Equals( res ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( 0 )
					.GetFolder( f.Uid ));
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindFolderByUid_WhenBadUid()
		{
			var folders = await CreateDataContext().AddFolders();

			foreach( var f in folders )
			{
				Assert.Null( await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( f.Uid + "error" ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( null ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( string.Empty ) );
			}
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateFolder()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = _repo.Create( model );
			Assert.NotNull( res );

			var list = await _repo.GetFolders();
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			var all = await GetRepo().GetFolders();
			
			Assert.NotEmpty( all );

			Assert.True( all.Count == folders.Count );

			foreach( var f in folders )
			{
				Assert.True( all
					.FirstOrDefault( x => x.Id == f.Id )
					.Equals( f ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateFolders_InVariousOrgs()
		{
			var models = CreateDataContext().AddFolders( 10 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			var all = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.ToList();

			var totalCounter = 0;

			foreach( var o in orgs )
			{
				var orgFoldersAll = await GetRepo()
					.ForActiveOrg( o )
					.GetFolders();

				var localCounter = 0;

				foreach( var folder in orgFoldersAll )
				{
					Assert.NotNull( all.FirstOrDefault( x => x.Id == folder.Id && x.OrgId == o.Id ) );

					++localCounter;
					++totalCounter;
				}

				Assert.True( localCounter == orgFoldersAll.Count );
			}

			Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateFolder_WhenDuplicateTitleOrUid_InVariousOrgs()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = await GetRepo().Create( model );
			Assert.NotNull( res );

			var model2 = TestFactory.Create<ModelFolder>();
			model2.Title = model.Title;

			Assert.NotNull( await GetRepo()
				.ForActiveOrg( 2 )
				.Create( model2 ) );

			var model3 = TestFactory.Create<ModelFolder>();
			model3.Uid = model.Uid;

			Assert.NotNull( await GetRepo()
				.ForActiveOrg( 3 )
				.Create( model3 ) );

			var list = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.ToList();

			Assert.True( list.Count == 3 );

			Assert.True( list [ 0 ].Equals( model ) );
			Assert.True( list [ 1 ].Equals( model2 ) );
			Assert.True( list [ 2 ].Equals( model3 ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateFolder_WhenDuplicateTitleOrUid()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = GetRepo().Create( model );
			Assert.NotNull( res );

			var model2 = TestFactory.Create<ModelFolder>();
			model2.Title = model.Title;

			await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo().Create( model2 ) );

			var model3 = TestFactory.Create<ModelFolder>();
			model3.Uid = model.Uid;

			await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo().Create( model3 ) );

			var list = await _repo.GetFolders();
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateFolder_WhenDuplicateTitle()
		{
			var models = await CreateDataContext ().AddFolders( 5 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelFolder>();
				modelDuplicate.Title = m.Title;

				await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateFolder_WhenDuplicateUid()
		{
			var models = await CreateDataContext().AddFolders( 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelFolder>();
				modelDuplicate.Uid = m.Uid;

				await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateFolder_WhenNullInput()
		{
			await Assert.ThrowsAsync<NullReferenceException>( () =>  _repo.Create( null ) );
			
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateFolder_WhenEmptyInput()
		{
			var model = new ModelFolder();
			var res = await _repo.Create( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateFolder_WhenWrongOrgId()
		{
			var models = TestFactory.Create<ModelFolder>( 5 );
			var orgs = GetRepo<OrgRepository>().All.Value;

			foreach( var m in models )
			{
				var task = GetRepo()
					.ForActiveOrg( 0 )
					.Create( m );

				await Assert.ThrowsAsync<DbUpdateException>( () => task );

				var org = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				var res = await GetRepo()
					.ForActiveOrg( org.Id )
					.Create( m );

				Assert.NotNull( res );
				Assert.True( res.Equals( m ) );
			}
		}
		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpsertFolder()
		{
			var model = TestFactory.Create<ModelFolder>();

			await Assert.ThrowsAsync<BadGetFolderException>( () =>
				GetRepo().Update( model.Uid, model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolder_WhenNullInputAndNullUid()
		{
			await Assert.ThrowsAsync<BadGetFolderException>( () => 
				GetRepo().Update( null, null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolder_WhenNullInputButExistingUid()
		{
			var model = TestFactory.Create<ModelFolder>();
			await _repo.Create( model );

			await Assert.ThrowsAsync<NullReferenceException>( () =>
				GetRepo().Update( model.Uid, null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolders_WhenBadUid()
		{
			var folders = await CreateDataContext().AddFolders( 5 );

			var all = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var f in folders )
			{
				Assert.True( all
					.FirstOrDefault( x => x.Id == f.Id )
					.Equals( f ) );
			}

			foreach( var f in folders )
			{
				TestFactory.Update( f );

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolders_WhenDuplicateTitle()
		{
			var folders = await CreateDataContext().AddFolders( 10 );

			foreach( var f in folders )
			{
				var list = folders
						.Except( new ModelFolder [] { f } )
						.ToList();

				var d = TestFactory.SelectRandomObject( list, x => x.OrgId == f.OrgId );

				if( null == d )
					continue;

				var oldTitle = f.Title;
				f.Title = d.Title;

				await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f ) );

				f.Title = oldTitle;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolders_WithWrongVersion()
		{
			var folders = await CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				f.Title = TestFactory.GetRandomNoun();
				f.Bag.Overwrite = true;
				f.Bag.Version = 0;

				await Assert.ThrowsAsync<BadUpdateFolderVersionMismatchException>( () => GetRepo()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateFolders_WithCorrectVersion()
		{
			var folders = await CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				for( int i = 0; i < 3; ++i )
				{
					f.Title = TestFactory.GetRandomNoun();
					f.Bag.Overwrite = true;
					f.Bag.Version = i + 1;

					var res = await GetRepo<FolderRepository>()
						.ForActiveOrg( f.OrgId )
						.Update( f.Uid, f );

					Assert.NotNull( res );

					Assert.True( f.Bag.Version + 1 == res.Bag.Version );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateFolder_WhenNullInput()
		{
			await Assert.ThrowsAsync<BadGetFolderException>( () => _repo.Update( null, null ) );

			var folder = TestFactory.Create<ModelFolder>();

			Assert.NotNull( await _repo.Create( folder ) );

			await Assert.ThrowsAsync<NullReferenceException>( () => _repo.Update( folder.Uid, null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateFolders_WithoutOverwrite()
		{
			var folders = await CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				for( int i = 0; i < 3; ++i )
				{
					f.Title = TestFactory.GetRandomNoun();

					Assert.NotNull( GetRepo()
						.ForActiveOrg( f.OrgId )
						.Update( f.Uid, f ) );
				}
			}
		}

		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			Assert.True( ( await GetRepo()
				.GetFolders() )
				.Count == folders.Count );

			foreach( var f in folders )
			{
				Assert.True( await GetRepo().Delete( f.Uid ) );
			}

			Assert.Empty( await GetRepo().GetFolders() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteTeams_InVariousOrgs()
		{
			var models = await CreateDataContext().AddFolders( 10 );

			var all = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var f in all )
			{
				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( 0 )
					.Delete( f.Uid ) );


				var count = ( await GetRepo()
					.ForActiveOrg( f.OrgId )
					.GetFolders() )
					.Count;

				Assert.True( await GetRepo()
					.ForActiveOrg( f.OrgId )
					.Delete( f.Uid ) );

				Assert.True( ( await GetRepo()
					.ForActiveOrg( f.OrgId )
					.GetFolders())
					.Count == count - 1 );
			}

			Assert.Empty( await GetRepo<FolderRepository>().GetFolders() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteFolder_WhenBadUid()
		{
			var models = await CreateDataContext().AddFolders( 5 );

			foreach( var m in models )
			{
				Assert.NotNull( GetRepo()
					.ForActiveOrg( m.OrgId )
					.GetFolder( m.Uid ));

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Delete( m.Uid + "error" ));

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Delete( null ) );
			}

			Assert.True( CreateDataContext()
				.Folders
				.ToList()
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteAbsentFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			foreach( var f in folders )
			{
				Assert.True( await GetRepo().Delete( f.Uid ) );

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo().Delete( f.Uid ) );
			}

			Assert.Empty( await GetRepo().GetFolders() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFolder_WithDeletedOrg()
		{
			var models = await CreateDataContext().AddFolders( 10 );

			var count = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.Count();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgFoldersCount = ( await GetRepo()
					.ForActiveOrg( o.Id )
					.GetFolders())
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Folders
					.Select( x => x.ToModel() )
					.Count() == count - orgFoldersCount );

				Assert.Empty( await GetRepo()
					.ForActiveOrg( o.Id )
					.GetFolders() );

				count -= orgFoldersCount;
			}

			Assert.True( 0 == count );

			Assert.Empty( CreateDataContext()
				.Folders
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFoldersAndDashboards()
		{
			await CreateDataContext().AddDashboards( 5, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = await GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.GetFolders();

				var dashboardsCount = CreateDataContext()
					.Dashboards
					.ToList()
					.Count;

				foreach( var f in folders )
				{
					Assert.True( await GetRepo()
						.ForActiveOrg( o )
						.Delete( f.Uid ) );

					var newDashboardsCount = CreateDataContext()
						.Dashboards
						.ToList()
						.Count;

					Assert.True( newDashboardsCount == dashboardsCount - 5 );

					dashboardsCount = newDashboardsCount;
				}

				Assert.Empty( await GetRepo()
					.ForActiveOrg( o )
					.GetFolders() );

				Assert.True( CreateDataContext()
						.Dashboards
						.Where( x => x.OrgId == o.Id )
						.ToList()
						.Count == 5 );
			}

			Assert.True( CreateDataContext()
					.Dashboards
					.ToList()
					.Count == 5 * orgs.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFoldersAndDashboardTags()
		{
			await CreateDataContext().AddDashboards( 5, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = await GetRepo()
					.ForActiveOrg( o )
					.GetFolders();

				foreach( var f in folders )
				{
					var allTags = CreateDataContext()
						.DashboardTags
						.ToList();

					Assert.NotNull( await GetRepo()
						.ForActiveOrg( f )
						.GetFolder( f.Uid ) );

					var filter = new DashboardSearchFilter() { FolderIds = new int [] { f.Id } };

					var dashboards = await GetRepo<DashboardRepository>()
						.ForActiveOrg( f )
						.ForActiveFakeUser()
						.Search( filter );

					var tags = dashboards
						.Dashboards
						.SelectMany( x => x.Tags )
						.ToList();

					Assert.True( await GetRepo<FolderRepository>()
						.ForActiveOrg( f )
						.Delete( f.Uid ) );

					Assert.True( CreateDataContext()
						.DashboardTags
						.ToList()
						.Count == allTags.Count - tags.Count );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFoldersAndDashboardPermissions()
		{
			await CreateDataContext().AddDashboards( 5, 5 );
			await CreateDataContext().AddDashboardPermissions();

			var folders = await GetRepo<FolderRepository>().GetFolders();

			var allPermsCount = CreateDataContext()
				.DashboardPermissions
				.ToList()
				.Count;

			foreach( var f in folders )
			{
				var relatedPermCount = CreateDataContext()
					.Dashboards
					.Include( x => x.Permissions )
					.Where( x => x.FolderId == f.Id )
					.SelectMany( x => x.Permissions )
					.ToList()
					.Count;

				await GetRepo().Delete( f.Uid );

				var newAllPermsCount = CreateDataContext()
					.DashboardPermissions
					.ToList()
					.Count;

				Assert.True( allPermsCount - relatedPermCount == newAllPermsCount );
				allPermsCount = newAllPermsCount;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFoldersAndFolderPermissions()
		{
			await CreateDataContext().AddTeams();
			CreateDataContext().AddUsers();
			CreateDataContext().AddTeamMembers();
			await CreateDataContext().AddDashboards( 5, 5 );
			await CreateDataContext().AddFolderPermissions();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = await GetRepo()
					.ForActiveOrg( o )
					.GetFolders();

				var allPermissionsCount = CreateDataContext()
					.FolderPermissions
					.ToList()
					.Count;

				foreach( var f in folders )
				{
					var p = await GetRepo()
						.ForActiveOrg( o )
						.GetPermissions( f.Uid );

					Assert.True( await GetRepo()
						.ForActiveOrg( o )
						.Delete( f.Uid ) );

					if( f.HasAcl )
					{
						Assert.True( CreateDataContext()
						.FolderPermissions
						.ToList()
						.Count == allPermissionsCount - p.Count );

						allPermissionsCount -= p.Count;
					}
				}
			}

			Assert.Empty( CreateDataContext()
				.FolderPermissions
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteFoldersAndDashboardStars()
		{
			await CreateDataContext().AddDashboards( 5, 5 );
			CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddStars( 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = await GetRepo()
					.ForActiveOrg( o )
					.GetFolders();

				var allStarsCount = CreateDataContext()
					.Stars
					.ToList()
					.Count;

				foreach( var f in folders )
				{
					var relatedStarsCount = CreateDataContext()
						.Dashboards
						.Include( x => x.Stars )
						.Where( x => x.FolderId == f.Id )
						.SelectMany( x => x.Stars )
						.ToList()
						.Count;

					Assert.True( await GetRepo()
						.ForActiveOrg( o )
						.Delete( f.Uid ) );

					var newAllStarsCount = CreateDataContext()
						.Stars
						.ToList()
						.Count;

					Assert.True( allStarsCount - relatedStarsCount == newAllStarsCount );
					allStarsCount = newAllStarsCount;
				}
			}

			Assert.Empty( CreateDataContext()
				.Stars
				.Include( x => x.Dashboard )
				.Where( x => x.Dashboard.FolderId.HasValue )
				.ToList() );
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetPermissions()
		{
			var folders = await CreateFolderPermissions();
			var perms = GetAllPermissions();

			var count = 0;

			foreach( var f in folders )
			{
				var fPermsRes = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.NotNull( fPermsRes );

				if( f.HasAcl )
				{
					foreach( var fp in fPermsRes )
					{
						var existing = perms.FirstOrDefault( x => x.Id == fp.Id );
						Assert.True( fp.Equals( existing ) );
						++count;
					}
				}
				else
				{
					CheckDefaultPermissions( fPermsRes );
				}
			}

			Assert.True( count == perms.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_GetPermissions_ForBadUids()
		{
			var folders = await CreateFolderPermissions();

			foreach( var f in folders )
			{
				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( 0 )
					.GetPermissions( f.Uid ) );

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid + "bad" ) );

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( null ));

				Assert.NotNull( GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeletePermissions_IfFolderDeleted()
		{
			var folders = await CreateFolderPermissions();
			var perms = GetAllPermissions();

			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPermsRes = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.NotNull( fPermsRes );

				Assert.True( await GetRepo()
					.ForActiveOrg( f )
					.Delete( f.Uid ) );

				var newPerms = CreateDataContext()
					.FolderPermissions
					.ToList();

				if( f.HasAcl )
				{
					Assert.True( newPerms.Count == permsCount - fPermsRes.Count );
					permsCount -= fPermsRes.Count;
				}
				else
				{
					Assert.True( newPerms.Count == permsCount );

					CheckDefaultPermissions( fPermsRes );
				}
			}

			Assert.Empty( CreateDataContext()
				.FolderPermissions
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeletePermissions_IfUsersDeleted()
		{
			var folders = await CreateFolderPermissions();
			var perms = GetAllPermissions();

			var oldCount = perms.Count;
			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				var fPermsCount = fPerms.Count;
				var deletedCount = 0;

				fPerms
					.Where( x => null != x.User )
					.ToList()
					.ForEach( u =>
					{
						Assert.False( GetRepo<UserRepository>()
							.Delete( u.User.Id )
							.HasError );

						++deletedCount;
					} );

				var fPermsNew = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.True( fPermsNew.Count == fPermsCount - deletedCount );
			}

			Assert.Empty( CreateDataContext()
				.FolderPermissions
				.ToList()
				.Where( x => null != x.User )
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeletePermissions_IfTeamsDeleted()
		{
			var folders = await CreateFolderPermissions();
			var perms = GetAllPermissions();

			var oldCount = perms.Count;
			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				var fPermsCount = fPerms.Count;
				var deletedCount = 0;

				fPerms
					.Where( x => null != x.Team )
					.ToList()
					.ForEach( async u =>
					{
						Assert.True( await GetRepo<TeamRepository>()
							.ForActiveOrg( u.Team )
							.Delete( u.Team.Id ) );

						++deletedCount;
					} );

				var fPermsNew = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.True( fPermsNew.Count == fPermsCount - deletedCount );
			}

			Assert.Empty( CreateDataContext()
				.FolderPermissions
				.ToList()
				.Where( x => null != x.Team )
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeletePermissions_IfOrgsDeleted()
		{
			var folders = await CreateFolderPermissions();
			var perms = GetAllPermissions();

			var oldCount = perms.Count;
			var permsCount = perms.Count;

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgPerms = GetAllPermissions()
					.Where( x => x.Folder.OrgId == o.Id )
					.ToList();

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.Empty( GetAllPermissions()
					.Where( x => x.Folder.OrgId == o.Id ) );
			}

			Assert.Empty( CreateDataContext().FolderPermissions );
			Assert.Empty( CreateDataContext().Teams );
			Assert.Empty( CreateDataContext().Folders );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdatePermissions()
		{
			var folders = await CreateFolderPermissions();
			var users = GetRepo<UserRepository>().All.Value;
			var teams = await GetRepo<TeamRepository>().GetTeams();

			foreach( var f in folders )
			{
				var newPerms = TestFactory.CreateFolderPermissions( f.Uid, users, teams );

				if( !f.HasAcl )
				{
					CheckDefaultPermissions( await GetRepo()
						.ForActiveOrg( f )
						.GetPermissions( f.Uid ) );
				}

				Assert.NotNull( await GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.UpdatePermissions( f.Uid, newPerms ) );

				Assert.True( ( await GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetFolder( f.Uid ))
					.HasAcl );
			}

			var perms = GetAllPermissions();

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.NotNull( fPerms );

				foreach( var fp in fPerms )
				{
					var existing = perms.FirstOrDefault( x => x.Id == fp.Id );
					Assert.True( fp.Equals( existing ) );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDuplicatePermissions()
		{
			var folders = await CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				foreach( var p in fPerms )
				{
					var copy = p.Copy();
					var newPerms = fPerms.ToList();
					newPerms.Add( copy );

					copy.Permission = TestFactory.GetRandomEnumValue<Permission>();

					await Assert.ThrowsAsync<BadUpdateFolderPermissionsDuplicateException>( () => GetRepo()
						.ForActiveOrg( f )
						.UpdatePermissions( f.Uid, newPerms ) );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateNotExistingFolder()
		{
			var folders = await CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				await Assert.ThrowsAsync<BadGetFolderException>( () =>
					GetRepo().UpdatePermissions( f.Uid + "bad", fPerms ) );

				await Assert.ThrowsAsync<BadGetFolderException>( () => GetRepo()
					.ForActiveOrg( 0 )
					.UpdatePermissions( f.Uid, fPerms ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateSamePermissions()
		{
			var folders = await CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = await GetRepo()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				if( !f.HasAcl )
				{
					Assert.False( ( await GetRepo()
						.ForActiveOrg( f )
						.GetFolder( f.Uid ) )
						.HasAcl );

					CheckDefaultPermissions( fPerms );
				}

				Assert.NotNull( await GetRepo()
					.ForActiveOrg( f )
					.UpdatePermissions( f.Uid, fPerms ) );

				Assert.True( ( await GetRepo()
					.ForActiveOrg( f )
					.GetFolder( f.Uid ) )
					.HasAcl );
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private async Task<ModelFolders> CreateFolderPermissions()
		{
			await CreateDataContext().AddTeams();
			CreateDataContext().AddUsers();
			CreateDataContext().AddTeamMembers();
			var folders = await CreateDataContext ().AddFolders();
			var perms = await CreateDataContext().AddFolderPermissions();

			perms
				.Select( x => x.Folder.Id )
				.Distinct()
				.ToList()
				.ForEach( x => folders
					.FirstOrDefault( y => y.Id == x )
					.HasAcl = true );

			return folders;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private ModelFolderPermissions GetAllPermissions()
		{
			return CreateDataContext()
				.FolderPermissions
				.Include( x => x.Folder )
				.Include( x => x.User )
				.Include( x => x.Team )
				.ToList()
				.Select( x => x.ToModel() )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="perms"></param>
		private void CheckDefaultPermissions( ModelFolderPermissions perms ) 
		{
			Assert.True( perms.Count == 2 );
			var def = ModelFolderPermission.GetDefault( perms.FirstOrDefault().Folder );

			for( int i = 0; i < perms.Count; ++i ) 
			{
				Assert.True( perms [ i ].Equals( def [ i ] ) );
			}
		}
		#endregion
	}
}
