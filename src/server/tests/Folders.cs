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
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
	/// </summary>
	public class Folders : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private FolderRepository _repo;
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
		public void Should_FindFolderById()
		{
			var folders = CreateDataContext().AddFolders();

			foreach( var f in folders ) 
			{
				var res = GetRepo<FolderRepository>()
					.ForActiveOrg( f )[ f.Id ];

				Assert.False( res.HasError );
				Assert.True( f.Equals( res.Value ) );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 ) [ f.Id ]
					.Error
					.Code == ErrorCode.BadGetFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindFolderById_WhenBadId()
		{
			CreateDataContext()
				.AddFolders()
				.ForEach( m => Assert.True( _repo
					.ForActiveOrg( m ) [ m.Id * 1000 ]
					.Error
					.Code == ErrorCode.BadGetFolder ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_FindFolderByUid()
		{
			var folders = CreateDataContext().AddFolders();

			foreach( var f in folders )
			{
				var res = GetRepo<FolderRepository>()
					.ForActiveOrg( f ) [ f.Uid ];

				Assert.False( res.HasError );
				Assert.True( f.Equals( res.Value ) );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 ) [ f.Uid ]
					.Error
					.Code == ErrorCode.BadGetFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindFolderByUid_WhenBadUid()
		{
			var folders = CreateDataContext().AddFolders();

			foreach( var f in folders )
			{
				Assert.True( _repo
					.ForActiveOrg( f ) [ f.Uid + "error" ]
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( _repo
					.ForActiveOrg( f ) [ null ]
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( _repo
					.ForActiveOrg( f ) [ string.Empty ]
					.Error
					.Code == ErrorCode.BadGetFolder );
			}

		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateFolder()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = _repo.Create( model );
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
		public void Should_CreateFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			var allRes = GetRepo<FolderRepository>().All;
			var all = allRes.Value;
			Assert.False( allRes.HasError );

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
		public void Should_CreateFolders_InVariousOrgs()
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
				var orgFoldersAll = GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

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
		public void Should_CreateFolder_WhenDuplicateTitleOrUid_InVariousOrgs()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = GetRepo<FolderRepository>().Create( model );
			Assert.False( res.HasError );

			var model2 = TestFactory.Create<ModelFolder>();
			model2.Title = model.Title;

			Assert.False( GetRepo<FolderRepository>()
				.ForActiveOrg( 2 )
				.Create( model2 )
				.HasError );

			var model3 = TestFactory.Create<ModelFolder>();
			model3.Uid = model.Uid;

			Assert.False( GetRepo<FolderRepository>()
				.ForActiveOrg( 3 )
				.Create( model3 )
				.HasError );

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
		public void ShouldNot_CreateFolder_WhenDuplicateTitleOrUid()
		{
			var model = TestFactory.Create<ModelFolder>();
			var res = GetRepo<FolderRepository>().Create( model );
			Assert.False( res.HasError );

			var model2 = TestFactory.Create<ModelFolder>();
			model2.Title = model.Title;

			Assert.True( GetRepo<FolderRepository>()
				.Create( model2 )
				.Error
				.Code == ErrorCode.BadCreateFolder );

			var model3 = TestFactory.Create<ModelFolder>();
			model3.Uid = model.Uid;

			Assert.True( GetRepo<FolderRepository>()
				.Create( model3 )
				.Error
				.Code == ErrorCode.BadCreateFolder );

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
		public void ShouldNot_CreateFolder_WhenDuplicateTitle()
		{
			var models = CreateDataContext().AddFolders( 5 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelFolder>();
				modelDuplicate.Title = m.Title;

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateFolder_WhenDuplicateUid()
		{
			var models = CreateDataContext().AddFolders( 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelFolder>();
				modelDuplicate.Uid = m.Uid;

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateFolder_WhenNullInput()
		{
			var res = _repo.Create( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateFolder );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateFolder_WhenEmptyInput()
		{
			var model = new ModelFolder();
			var res = _repo.Create( model );

			Assert.False( res.HasError );
			Assert.True( res.Value.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateFolder_WhenWrongOrgId()
		{
			var models = TestFactory.Create<ModelFolder>( 5 );
			var orgs = GetRepo<OrgRepository>().All.Value;

			foreach( var m in models )
			{
				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 )
					.Create( m )
					.Error
					.Code == ErrorCode.BadCreateFolder );

				var org = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				var res = GetRepo<FolderRepository>()
					.ForActiveOrg( org.Id )
					.Create( m );

				Assert.False( res.HasError );
				Assert.True( res.Value.Equals( m ) );
			}
		}
		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpsertFolder()
		{
			var model = TestFactory.Create<ModelFolder>();

			Assert.True( GetRepo<FolderRepository>()
				.Update( model.Uid, model )
				.Error
				.Code == ErrorCode.BadGetFolder );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolder_WhenNullInputAndNullUid()
		{
			Assert.True( GetRepo<FolderRepository>()
				.Update( null, null )
				.Error
				.Code == ErrorCode.BadGetFolder );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolder_WhenNullInputButExistingUid()
		{
			var model = TestFactory.Create<ModelFolder>();
			_repo.Create( model );

			Assert.True( GetRepo<FolderRepository>()
				.Update( model.Uid, null )
				.Error
				.Code == ErrorCode.BadUpdateFolder );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolders_WhenBadUid()
		{
			var folders = CreateDataContext().AddFolders( 5 );

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

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f )
					.Error
					.Code == ErrorCode.BadGetFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolders_WhenDuplicateTitle()
		{
			var folders = CreateDataContext().AddFolders( 10 );

			foreach( var f in folders )
			{
				var list = folders
						.Except( new ModelFolder [] { f } )
						.ToList();

				var d = TestFactory.SelectRandomObject<ModelFolder>( list, x => x.OrgId == f.OrgId );

				if( null == d )
					continue;

				var oldTitle = f.Title;
				f.Title = d.Title;

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f )
					.Error
					.Code == ErrorCode.BadUpdateFolder );

				f.Title = oldTitle;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolders_WithWrongVersion()
		{
			var folders = CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				f.Title = TestFactory.GetRandomNoun();
				f.Bag.Overwrite = true;
				f.Bag.Version = 0;

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.Update( f.Uid, f )
					.Error
					.Code == ErrorCode.BadUpdateFolderVersionMismatch );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateFolders_WithCorrectVersion()
		{
			var folders = CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				for( int i = 0; i < 3; ++i )
				{
					f.Title = TestFactory.GetRandomNoun();
					f.Bag.Overwrite = true;
					f.Bag.Version = i + 1;

					var res = GetRepo<FolderRepository>()
						.ForActiveOrg( f.OrgId )
						.Update( f.Uid, f );

					Assert.False( res.HasError );

					Assert.True( f.Bag.Version + 1 == res.Value.Bag.Version );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateFolder_WhenNullInput()
		{
			var res = _repo.Update( null, null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadGetFolder );

			var folder = TestFactory.Create<ModelFolder>();

			Assert.False( _repo
				.Create( folder )
				.HasError );

			res = _repo.Update( folder.Uid, null );

			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadUpdateFolder );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateFolders_WithoutOverwrite()
		{
			var folders = CreateDataContext().AddFolders( 5 );

			foreach( var f in folders )
			{
				for( int i = 0; i < 3; ++i )
				{
					f.Title = TestFactory.GetRandomNoun();

					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( f.OrgId )
						.Update( f.Uid, f )
						.HasError );
				}
			}
		}

		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			Assert.True( GetRepo<FolderRepository>()
				.All
				.Value
				.Count == folders.Count );

			foreach( var f in folders )
			{
				Assert.False( GetRepo<FolderRepository>()
					.Delete( f.Uid )
					.HasError );
			}

			Assert.Empty( GetRepo<FolderRepository>()
				.All
				.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteTeams_InVariousOrgs()
		{
			var models = CreateDataContext().AddFolders( 10 );

			var all = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var f in all )
			{
				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 )
					.Delete( f.Uid )
					.Error
					.Code == ErrorCode.BadGetFolder );

				var count = GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.All
					.Value
					.Count;

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.Delete( f.Uid )
					.Value );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f.OrgId )
					.All
					.Value
					.Count == count - 1 );
			}

			Assert.Empty( GetRepo<FolderRepository>()
				.All
				.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_DeleteFolder_WhenBadUid()
		{
			var models = CreateDataContext().AddFolders( 5 );

			foreach( var m in models )
			{
				Assert.False( GetRepo<FolderRepository>()
					.ForActiveOrg( m.OrgId ) [ m.Uid ]
					.HasError );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( m.OrgId )
					.Delete( m.Uid + "error" )
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( m.OrgId )
					.Delete( null )
					.Error
					.Code == ErrorCode.BadGetFolder );
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
		public void ShouldNot_DeleteAbsentFolders()
		{
			var folders = CreateDataContext().AddFoldersForDefaultOrg( 5 );

			foreach( var f in folders )
			{
				Assert.False( GetRepo<FolderRepository>()
					.Delete( f.Uid )
					.HasError );

				Assert.True( GetRepo<FolderRepository>()
					.Delete( f.Uid )
					.Error
					.Code == ErrorCode.BadGetFolder );
			}

			Assert.Empty( GetRepo<FolderRepository>().All.Value );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteFolder_WithDeletedOrg()
		{
			var models = CreateDataContext().AddFolders( 10 );

			var count = CreateDataContext()
				.Folders
				.Select( x => x.ToModel() )
				.Count();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgFoldersCount = GetRepo<FolderRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Folders
					.Select( x => x.ToModel() )
					.Count() == count - orgFoldersCount );

				Assert.Empty( GetRepo<FolderRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value );

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
		public void Should_DeleteFoldersAndDashboards()
		{
			CreateDataContext().AddDashboards( 5, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

				var dashboardsCount = CreateDataContext()
					.Dashboards
					.ToList()
					.Count;

				foreach( var f in folders )
				{
					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( o )
						.Delete( f.Uid )
						.HasError );

					var newDashboardsCount = CreateDataContext()
						.Dashboards
						.ToList()
						.Count;

					Assert.True( newDashboardsCount == dashboardsCount - 5 );

					dashboardsCount = newDashboardsCount;
				}

				Assert.Empty( GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value );

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
		public void Should_DeleteFoldersAndDashboardTags()
		{
			CreateDataContext().AddDashboards( 5, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

				foreach( var f in folders )
				{
					var allTags = CreateDataContext()
						.DashboardTags
						.ToList();

					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( f ) [ f.Uid ]
						.HasError );

					var filter = new DashboardSearchFilter() { FolderIds = new int [] { f.Id } };

					var dashboards = GetRepo<DashboardRepository>()
						.ForActiveOrg( f )
						.ForActiveFakeUser()
						.Search( filter );

					var tags = dashboards
						.Value
						.Dashboards
						.SelectMany( x => x.Tags )
						.ToList();

					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( f )
						.Delete( f.Uid )
						.HasError );

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
		public void Should_DeleteFoldersAndDashboardPermissions()
		{
			CreateDataContext().AddDashboards( 5, 5 );
			CreateDataContext().AddDashboardPermissions();

			var folders = GetRepo<FolderRepository>().All.Value;

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

				GetRepo<FolderRepository>().Delete( f.Uid );

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
		public void Should_DeleteFoldersAndFolderPermissions()
		{
			CreateDataContext().AddTeams();
			CreateDataContext().AddUsers();
			CreateDataContext().AddTeamMembers();
			CreateDataContext().AddDashboards( 5, 5 );
			CreateDataContext().AddFolderPermissions();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

				var allPermissionsCount = CreateDataContext()
					.FolderPermissions
					.ToList()
					.Count;

				foreach( var f in folders )
				{
					var p = GetRepo<FolderRepository>()
						.ForActiveOrg( o )
						.GetPermissions( f.Uid )
						.Value;

					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( o )
						.Delete( f.Uid )
						.HasError );

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
		public void Should_DeleteFoldersAndDashboardStars()
		{
			CreateDataContext().AddDashboards( 5, 5 );
			CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddStars( 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var folders = GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

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

					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( o )
						.Delete( f.Uid )
						.HasError );

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
		public void Should_GetPermissions()
		{
			var folders = CreateFolderPermissions();
			var perms = GetAllPermissions();

			var count = 0;

			foreach( var f in folders )
			{
				var fPermsRes = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.False( fPermsRes.HasError );

				if( f.HasAcl )
				{
					foreach( var fp in fPermsRes.Value )
					{
						var existing = perms.FirstOrDefault( x => x.Id == fp.Id );
						Assert.True( fp.Equals( existing ) );
						++count;
					}
				}
				else
				{
					CheckDefaultPermissions( fPermsRes.Value );
				}
			}

			Assert.True( count == perms.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_GetPermissions_ForBadUids()
		{
			var folders = CreateFolderPermissions();

			foreach( var f in folders )
			{
				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 )
					.GetPermissions( f.Uid )
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid + "bad" )
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( null )
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.False( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.HasError );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeletePermissions_IfFolderDeleted()
		{
			var folders = CreateFolderPermissions();
			var perms = GetAllPermissions();

			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPermsRes = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.False( fPermsRes.HasError );

				Assert.False( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.Delete( f.Uid )
					.HasError );

				var newPerms = CreateDataContext()
					.FolderPermissions
					.ToList();

				if( f.HasAcl )
				{
					Assert.True( newPerms.Count == permsCount - fPermsRes.Value.Count );
					permsCount -= fPermsRes.Value.Count;
				}
				else
				{
					Assert.True( newPerms.Count == permsCount );

					CheckDefaultPermissions( fPermsRes.Value );
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
		public void Should_DeletePermissions_IfUsersDeleted()
		{
			var folders = CreateFolderPermissions();
			var perms = GetAllPermissions();

			var oldCount = perms.Count;
			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPerms = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

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

				var fPermsNew = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

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
		public void Should_DeletePermissions_IfTeamsDeleted()
		{
			var folders = CreateFolderPermissions();
			var perms = GetAllPermissions();

			var oldCount = perms.Count;
			var permsCount = perms.Count;

			foreach( var f in folders )
			{
				var fPerms = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

				var fPermsCount = fPerms.Count;
				var deletedCount = 0;

				fPerms
					.Where( x => null != x.Team )
					.ToList()
					.ForEach( u =>
					{
						Assert.False( GetRepo<TeamRepository>()
							.ForActiveOrg( u.Team )
							.Delete( u.Team.Id )
							.HasError );

						++deletedCount;
					} );

				var fPermsNew = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

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
		public void Should_DeletePermissions_IfOrgsDeleted()
		{
			var folders = CreateFolderPermissions();
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
		public void Should_UpdatePermissions()
		{
			var folders = CreateFolderPermissions();
			var users = GetRepo<UserRepository>().All.Value;
			var teams = GetRepo<TeamRepository>().All.Value;

			foreach( var f in folders )
			{
				var newPerms = TestFactory.CreateFolderPermissions( f.Uid, users, teams );

				if( !f.HasAcl )
				{
					CheckDefaultPermissions( GetRepo<FolderRepository>()
						.ForActiveOrg( f )
						.GetPermissions( f.Uid )
						.Value );
				}

				Assert.False( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.UpdatePermissions( f.Uid, newPerms )
					.HasError );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f ) [ f.Uid ]
					.Value
					.HasAcl );
			}

			var perms = GetAllPermissions();

			foreach( var f in folders )
			{
				var fPermsRes = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid );

				Assert.False( fPermsRes.HasError );

				var fPerms = fPermsRes.Value;

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
		public void ShouldNot_UpdateDuplicatePermissions()
		{
			var folders = CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

				foreach( var p in fPerms )
				{
					var copy = p.Copy();
					var newPerms = fPerms.ToList();
					newPerms.Add( copy );

					copy.Permission = TestFactory.GetRandomEnumValue<Permission>();

					Assert.True( GetRepo<FolderRepository>()
						.ForActiveOrg( f )
						.UpdatePermissions( f.Uid, newPerms )
						.Error
						.Code == ErrorCode.BadUpdateFolderPermissionsDuplicate );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateNotExistingFolder()
		{
			var folders = CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

				Assert.True( GetRepo<FolderRepository>()
					.UpdatePermissions( f.Uid + "bad", fPerms )
					.Error
					.Code == ErrorCode.BadGetFolder );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( 0 )
					.UpdatePermissions( f.Uid, fPerms )
					.Error
					.Code == ErrorCode.BadGetFolder );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateSamePermissions()
		{
			var folders = CreateFolderPermissions();

			foreach( var f in folders )
			{
				var fPerms = GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.GetPermissions( f.Uid )
					.Value;

				if( !f.HasAcl )
				{
					Assert.False( GetRepo<FolderRepository>()
						.ForActiveOrg( f ) [ f.Uid ]
						.Value
						.HasAcl );

					CheckDefaultPermissions( fPerms );
				}

				Assert.False( GetRepo<FolderRepository>()
					.ForActiveOrg( f )
					.UpdatePermissions( f.Uid, fPerms )
					.HasError );

				Assert.True( GetRepo<FolderRepository>()
					.ForActiveOrg( f ) [ f.Uid ]
					.Value
					.HasAcl );
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private ModelFolders CreateFolderPermissions()
		{
			CreateDataContext().AddTeams();
			CreateDataContext().AddUsers();
			CreateDataContext().AddTeamMembers();
			var folders = CreateDataContext().AddFolders();
			var perms = CreateDataContext().AddFolderPermissions();

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
