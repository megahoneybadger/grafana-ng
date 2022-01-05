#region Usings
using ED.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;
using ModelOrg = ED.Security.Org;
using ModelVersion = ED.Dashboards.DashboardVersion;
using ModelVersions = System.Collections.Generic.List<ED.Dashboards.DashboardVersion>;
#endregion

namespace ED.Tests
{
	/// <summary>
	///  dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~Dashboards"
	/// </summary>
	public class Dashboards : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private DashboardRepository _repo;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private DashboardRepository GetRepo() => GetRepo<DashboardRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Dashboards()
		{
			_repo = GetRepo<DashboardRepository>( true );

			CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Find' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindDashboardByUid()
		{
			var dashboards = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				var res = await GetRepo()
					.ForActiveOrg( d )
					.GetDashboardByUid( d.Uid );

				Assert.NotNull( res );
				Assert.Equal( d, res );

				Assert.Null( await GetRepo()
					.ForActiveOrg( 0 )
					.GetDashboardByUid( d.Uid ));
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindDashboardByUid_WhenBadUid()
		{
			var dashboards = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				Assert.Null( await GetRepo()
					.ForActiveOrg( d )
					.GetDashboardByUid( d.Uid + "error" ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( d )
					.GetDashboardByUid( null ) );

				Assert.Null( await GetRepo()
					.ForActiveOrg( d )
					.GetDashboardByUid( string.Empty ) );
			}
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDashboard()
		{
			var model = TestFactory.Create<ModelDashboard>();
			Assert.NotNull( _repo.Create( model ) );

			var list = await _repo.GetDashboards();
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDashboards()
		{
			var dashboards = await CreateDataContext().AddDashboards( 5, 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			var all = CreateDataContext()
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			var totalCounter = 0;

			foreach( var o in orgs )
			{
				var orgDashboardsAll = await GetRepo()
					.ForActiveOrg( o )
					.GetDashboards();

				var localCounter = 0;

				foreach( var dashboard in orgDashboardsAll )
				{
					Assert.NotNull( all.FirstOrDefault( x => x.Id == dashboard.Id && x.OrgId == o.Id ) );

					++localCounter;
					++totalCounter;
				}

				Assert.True( localCounter == orgDashboardsAll.Count );
			}

			Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDashboard_WhenDuplicateTitleOrUid_InVariousOrgs()
		{
			var model = TestFactory.Create<ModelDashboard>();
			Assert.NotNull( await GetRepo().Create( model ) );

			var model2 = TestFactory.Create<ModelDashboard>();
			model2.Title = model.Title;

			Assert.NotNull( GetRepo()
				.ForActiveOrg( 2 )
				.Create( model2 ) );

			var model3 = TestFactory.Create<ModelDashboard>();
			model3.Uid = model.Uid;

			Assert.NotNull( await GetRepo()
				.ForActiveOrg( 3 )
				.Create( model3 ));

			var list = CreateDataContext()
				.Dashboards
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
		public async Task ShouldNot_CreateDashboard_WhenDuplicateTitleOrUid()
		{
			var model = TestFactory.Create<ModelDashboard>();
			Assert.NotNull( await GetRepo().Create( model ));

			var model2 = TestFactory.Create<ModelDashboard>();
			model2.Title = model.Title;

			await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () => GetRepo().Create( model2 ) );

			var model3 = TestFactory.Create<ModelDashboard>();
			model3.Uid = model.Uid;

			await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo().Create( model3 ) );

			var list = await _repo.GetDashboards();
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateDashboard_WhenDuplicateTitle()
		{
			var models = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
				modelDuplicate.Title = m.Title;
				modelDuplicate.FolderId = m.FolderId;

				await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_OverrideDashboard_WhenDuplicateTitle()
		{
			var models = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
				modelDuplicate.Title = m.Title;
				modelDuplicate.FolderId = m.FolderId;

				await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate ) );

				modelDuplicate.Bag.Overwrite = false;

				await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () => GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate ) );

				modelDuplicate.Bag.Overwrite = true;

				var res = await GetRepo()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate );

				Assert.NotNull( res );
				Assert.True( modelDuplicate.Equals( res ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateDashboard_WhenDuplicateUid()
		{
			var models = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
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
		public async Task ShouldNot_CreateDashboard_WhenNullInput()
		{
			await Assert.ThrowsAsync<InvalidOperationException>( () => _repo.Create( null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDashboard_WhenEmptyInput()
		{
			var model = new ModelDashboard();
			var res = await _repo.Create( model );

			Assert.NotNull( res );

			model.Uid = res.Uid;

			Assert.True( res.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateDashboard_WhenWrongOrgId()
		{
			var models = TestFactory.Create<ModelDashboard>( 5 );

			var orgs = GetRepo<OrgRepository>()
				.All
				.Value;

			foreach( var m in models )
			{
				await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo()
					.ForActiveOrg( 0 )
					.Create( m ) );

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
		public async Task ShouldNot_UpdateDashboard_WhenNullInput()
		{
			await Assert.ThrowsAsync<InvalidOperationException>( () => _repo.Update( null ) );

			var dashboard = TestFactory.Create<ModelDashboard>();

			await Assert.ThrowsAsync<BadGetDashboardException>( () => _repo.Update( dashboard ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDashboards_WhenBadUid()
		{
			var dashboards = await CreateDataContext().AddDashboards( 3, 5 );

			var all = CreateDataContext()
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var d in dashboards )
			{
				Assert.True( all
					.FirstOrDefault( x => x.Id == d.Id )
					.Equals( d ) );
			}

			foreach( var d in dashboards )
			{
				TestFactory.Update( d );

				await Assert.ThrowsAsync<BadGetDashboardException>( () => 
					GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( d ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDashboards_WhenSameFolderAndDuplicateTitle()
		{
			var dashboards = await CreateDataContext().AddDashboards( 3, 5 );

			foreach( var d in dashboards )
			{
				var copy = TestFactory.Create<ModelDashboard>();

				Assert.NotNull( GetRepo()
				 .ForActiveOrg( d.OrgId )
				 .Create( copy ) );

				copy.Title = d.Title;
				copy.FolderId = d.FolderId;

				await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () =>
					GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( copy ) );

				copy.Bag.Overwrite = false;

				await Assert.ThrowsAsync<BadCreateDashboardDuplcateException>( () =>
					GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( copy ) );

				//f.Title = oldTitle;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDashboards_WithWrongVersion()
		{
			var dashboards = await CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				d.Data = TestFactory.GetRandomString( 20 );
				d.Bag.Overwrite = true;
				//d.Bag.Version = 0;

				await Assert.ThrowsAsync<BadUpdateDashboardVersionMismatchException>( () =>
					GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( d ) );

				d.Bag.Version = 0;

				await Assert.ThrowsAsync<BadUpdateDashboardVersionMismatchException>( () =>
					GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( d ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateDashboards_WithCorrectVersion()
		{
			var dashboards = await CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				for( int i = 0; i < 3; ++i )
				{
					d.Title = TestFactory.GetRandomNoun();
					//d.Data = TestFactory.GetRandomString( 20 );
					d.Bag.Overwrite = true;
					d.Bag.Version = i + 1;

					var res = await GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( d );

					Assert.NotNull( res );
					Assert.True( d.Bag.Version + 1 == res.Bag.Version );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateDashboards()
		{
			var dashboards = await CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				for( int i = 0; i < 3; ++i )
				{
					d.Title = TestFactory.GetRandomNoun();
					d.Bag.Version = i + 1;

					Assert.NotNull( await GetRepo()
						.ForActiveOrg( d.OrgId )
						.Update( d ) );
				}
			}
		}
		///// <summary>
		///// 
		///// </summary>
		//[Fact]
		//public async Task Should_UpdateDashboards_WithOverwrite()
		//{
		//	var dashboards = await CreateDataContext().AddDashboards( 3, 3 );

		//	foreach( var d in dashboards )
		//	{
		//		var copy = TestFactory.Create<ModelDashboard>();
		//		copy.FolderId = d.FolderId;

		//		Assert.NotNull( await GetRepo().Update( copy ) );

		//		//d.Data = TestFactory.GetRandomString( 20 );
		//		//d.Title = copy.Title;
		//		//d.Bag.Version = 1;
		//		//d.Bag.Overwrite = true;

		//		//Assert.False( GetRepo<DashboardRepository>()
		//		//	.ForActiveOrg( d.OrgId )
		//		//	.Update( d )
		//		//	.HasError );

		//		//Assert.True( GetRepo<DashboardRepository>()
		//		//	.ForActiveOrg( d.OrgId ) [ copy.Uid ]
		//		//	.Error
		//		//	.Code == ErrorCode.BadGetDashboard );
		//	}
		//}
		/////// <summary>
		/////// 
		/////// </summary>
		////[Fact]
		////public async Task ShouldNot_UpdateDashboards_WithoutOverwrite()
		////{
		////	var dashboards = CreateDataContext().AddDashboards( 3, 3 );

		////	foreach( var d in dashboards )
		////	{
		////		var copy = TestFactory.Create<ModelDashboard>();
		////		copy.FolderId = d.FolderId;

		////		Assert.False( GetRepo<DashboardRepository>()
		////			.ForActiveOrg( d )
		////			.Update( copy )
		////			.HasError );

		////		d.Data = TestFactory.GetRandomString( 20 );
		////		d.Title = copy.Title;
		////		d.Bag.Version = 1;
		////		d.Bag.Overwrite = false;

		////		Assert.True( GetRepo<DashboardRepository>()
		////			.ForActiveOrg( d )
		////			.Update( d )
		////			.Error
		////			.Code == ErrorCode.BadCreateDashboardDuplicate );

		////		Assert.False( GetRepo<DashboardRepository>()
		////			.ForActiveOrg( d.OrgId ) [ copy.Uid ]
		////			.HasError );
		////	}
		////}
		#endregion

		#region Class 'Delete' methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDashboards()
		{
			var models = await CreateDataContext().AddDashboards( 5, 3 );

			var all = CreateDataContext()
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var d in all )
			{
				await Assert.ThrowsAsync<BadGetDashboardException>( () =>
					GetRepo()
						.ForActiveOrg( 0 )
						.Delete( d.Uid ));

				var count = ( await GetRepo()
					.ForActiveOrg( d.OrgId )
					.GetDashboards())
					.Count;

				Assert.True( await GetRepo()
					.ForActiveOrg( d.OrgId )
					.Delete( d.Uid ) );

				Assert.True( ( await GetRepo()
					.ForActiveOrg( d.OrgId )
					.GetDashboards() )
					.Count == count - 1 );
			}

			Assert.Empty( CreateDataContext()
				.Dashboards
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteDashboard_WhenBadUid()
		{
			var models = await CreateDataContext().AddDashboards( 3, 3 );

			foreach( var m in models )
			{
				Assert.NotNull( GetRepo()
					.ForActiveOrg( m.OrgId )
					.GetDashboardByUid( m.Uid ) );

				await Assert.ThrowsAsync<BadGetDashboardException>( () =>
					GetRepo()
						.ForActiveOrg( m.OrgId )
						.Delete( m.Uid + "error" ) );

				await Assert.ThrowsAsync<BadGetDashboardException>( () =>
					GetRepo()
						.ForActiveOrg( m.OrgId )
						.Delete( null ) );
			}

			Assert.True( CreateDataContext()
				.Dashboards
				.ToList()
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteAbsentDashboards()
		{
			var models = await CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in models )
			{
				Assert.True( await GetRepo()
					.ForActiveOrg( d.OrgId )
					.Delete( d.Uid ) );

				await Assert.ThrowsAsync<BadGetDashboardException>( () =>
					GetRepo()
						.Delete( d.Uid ) );
			}

			Assert.Empty( CreateDataContext()
				.Dashboards
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDashboard_WithDeletedOrg()
		{
			await CreateDataContext().AddDashboards( 5, 3 );

			var count = CreateDataContext()
				.Dashboards
				.Count();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgDashboardsCount = ( await GetRepo()
					.ForActiveOrg( o )
					.GetDashboards())
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Dashboards
					.Count() == count - orgDashboardsCount );

				Assert.Empty( await GetRepo()
					.ForActiveOrg( o.Id )
					.GetDashboards() );

				count -= orgDashboardsCount;
			}

			Assert.True( 0 == count );

			Assert.Empty( CreateDataContext()
				.Dashboards
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDashboardsAndTags()
		{
			await CreateDataContext().AddDashboards( 3, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = await GetRepo()
					.ForActiveOrg( o )
					.GetDashboards();

				var allTagsCount = CreateDataContext()
					.DashboardTags
					.ToList()
					.Count;

				foreach( var d in dashboards )
				{
					Assert.NotNull( await GetRepo()
						.ForActiveOrg( d )
						.GetDashboardByUid( d.Uid ) );

					var tags = ( await GetRepo()
						.ForActiveOrg( d )
						.GetDashboardByUid( d.Uid ) )
						.Tags
						.ToList();

					Assert.True( await GetRepo()
						.ForActiveOrg( d )
						.Delete( d.Uid ) );

					allTagsCount -= tags.Count;

					Assert.True( CreateDataContext()
						.DashboardTags
						.ToList()
						.Count == allTagsCount );
				}
			}

			Assert.Empty( CreateDataContext()
				.DashboardTags
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDashboardsAndVersions()
		{
			await CreateDataContext().AddDashboards( 3, 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = await GetRepo()
					.ForActiveOrg( o )
					.GetDashboards();

				var allVersionsCount = CreateDataContext()
					.DashboardVersions
					.ToList()
					.Count;

				foreach( var d in dashboards )
				{
					Assert.NotNull( await GetRepo()
						.ForActiveOrg( d )
						.GetDashboardByUid( d.Uid ) );

					var versions = ( await GetRepo()
						.ForActiveOrg( d )
						.GetVersions( d.Id ) )
						.ToList();

					Assert.True( await GetRepo()
						.ForActiveOrg( d )
						.Delete( d.Uid ) );

					allVersionsCount -= versions.Count;

					Assert.True( CreateDataContext()
						.DashboardVersions
						.ToList()
						.Count == allVersionsCount );

					Assert.Empty( ( await GetRepo()
						.ForActiveOrg( d )
						.GetVersions( d.Id ) )						
						.ToList() );
				}
			}

			Assert.Empty( CreateDataContext()
				.DashboardVersions
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDashboardsAndStars()
		{
			await CreateDataContext().AddDashboards( 3, 5 );
			CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddStars( 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = await GetRepo()
					.ForActiveOrg( o )
					.GetDashboards();

				var allStarsCount = CreateDataContext()
					.Stars
					.ToList()
					.Count;

				foreach( var d in dashboards )
				{
					var relatedStarsCount = CreateDataContext()
						.Dashboards
						.Include( x => x.Stars )
						.Where( x => x.Id == d.Id )
						.SelectMany( x => x.Stars )
						.ToList()
						.Count;

					Assert.True( await GetRepo()
						.ForActiveOrg( o )
						.Delete( d.Uid ) );

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
				.ToList() );
		}
		///// <summary>
		///// 
		///// </summary>
		//[Fact]
		//public async Task Should_DeleteFoldersAndPermissions()
		//{
		//	//CreateDataContext().AddDashboards( 3, 5 );
		//	//CreateDataContext().AddDashboardPermissions();

		//	//var orgs = CreateDataContext()
		//	//	.Orgs
		//	//	.ToList();

		//	//foreach( var o in orgs )
		//	//{
		//	//	var dashboards = GetRepo<DashboardRepository>()
		//	//		.ForActiveOrg( o )
		//	//		.All
		//	//		.Value;

		//	//	var allPermsCount = CreateDataContext()
		//	//		.DashboardPermissions
		//	//		.ToList()
		//	//		.Count;

		//	//	foreach( var d in dashboards )
		//	//	{
		//	//		var relatedPermCount = CreateDataContext()
		//	//			.Dashboards
		//	//			.Include( x => x.Permissions )
		//	//			.Where( x => x.FolderId == d.Id )
		//	//			.SelectMany( x => x.Permissions )
		//	//			.ToList()
		//	//			.Count;

		//	//		GetRepo<DashboardRepository>()
		//	//			.ForActiveOrg( d.OrgId )
		//	//			.Delete( d.Uid );

		//	//		var newAllPermsCount = CreateDataContext()
		//	//			.DashboardPermissions
		//	//			.ToList()
		//	//			.Count;

		//	//		Assert.True( allPermsCount - relatedPermCount == newAllPermsCount );
		//	//		allPermsCount = newAllPermsCount;
		//	//	}
		//	//}
		//}
		#endregion

		#region Class 'Versions'methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetDefaultVersions()
		{
			var dashboards = await CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				var res = await GetRepo()
					.ForActiveOrg( d )
					.GetVersions( d.Id );

				Assert.NotNull( res );
				Assert.True( res.Count == 1 );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetVersions()
		{
			var dashboards = await CreateDataContext().AddDashboards( 5, 3 );
			var changeCount = 3;

			foreach( var d in dashboards )
			{
				for( int i = 0; i < changeCount; ++i )
				{
					TestFactory.Update( d, false );

					d.Bag.Message = $"change message #{i + 1}";
					d.Bag.Version = i + 1;

					Assert.NotNull( await GetRepo()
						.ForActiveOrg( d )
						.Update( d ) );
				}

				var res = await GetRepo()
					.ForActiveOrg( d )
					.GetVersions( d.Id );

				Assert.NotNull( res );
				Assert.True( res.Count == changeCount + 1 );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetVersions_WithLimit()
		{
			var dashboards = await CreateDataContext().AddDashboards( 1, 2 );
			var changeCount = 5;
			var message = "change message #";

			foreach( var d in dashboards )
			{
				await UpdateDashboard( d, changeCount );

				int limit = 2;
				int start = 0;
				var index = changeCount;

				while( true )
				{
					var res = await GetRepo()
						.ForActiveOrg( d )
						.GetVersions( d.Id, limit, start );

					if( 0 == res.Count )
						break;

					Assert.NotNull( res );
					Assert.True( res.Count == limit );

					foreach( var v in res )
					{
						if( 0 == index )
						{
							Assert.True( string.IsNullOrEmpty( v.Message ) );
						}
						else
						{
							Assert.True( v.Message == $"{message}{index}" );
						}

						Assert.True( v.ParentVersion == index );
						Assert.True( v.Version == index + 1 );

						--index;
					}

					start += limit;
				}

			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_GetVersion()
		{
			var dashboards = await CreateDataContext().AddDashboards( 1, 3 );
			var changeCount = 3;

			foreach( var d in dashboards )
			{
				var copies = await UpdateDashboard( d, changeCount );

				copies.Reverse();

				var ids = ( await GetRepo()
					.ForActiveOrg( d )
					.GetVersions( d.Id ))
					.Select( x => x.Id )
					.ToList();

				for( int i = 0; i < ids.Count; ++i )
				{
					var next = await GetRepo()
						.ForActiveOrg( d )
						.GetVersion( d.Id, ids [ i ] );

					Assert.NotNull( next );

					Assert.True( next
						.Data
						.Equals( copies [ i ].Data ) );

					await Assert.ThrowsAsync<BadGetDashboardVersionException>( () => 
						GetRepo()
							.ForActiveOrg( d )
							.GetVersion( d.Id, ids [ i ] * 100 ) );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary> 
		[Fact]
		public async Task Should_RestoreVersion()
		{
			var dashboards = await CreateDataContext().AddDashboards( 1, 3 );
			var changeCount = 3;
			var restoreCount = 3;

			foreach( var d in dashboards )
			{
				await UpdateDashboard( d, changeCount );

				for( int i = 0; i < restoreCount; ++i )
				{
					var versions = await GetVersions( d );

					var versionToRestore = TestFactory.SelectRandomObject( versions );

					var res = GetRepo()
						.ForActiveOrg( d )
						.Restore( d.Id, versionToRestore.Version );

					Assert.NotNull( res );

					var newVersions = await GetVersions( d );
					var restored = newVersions.FirstOrDefault();

					Assert.True( restored.RestoredFrom == versionToRestore.Version );
					Assert.True( restored.Data == versionToRestore.Data );
					Assert.True( restored.Version == versions.FirstOrDefault().Version + 1 );
				}
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <param name="changeCount"></param>
		private async Task<ModelDashboards> UpdateDashboard( ModelDashboard d, int changeCount ) 
		{
			var copies = new ModelDashboards();

			copies.Add( d.Duplicate() );

			for( int i = 0; i < changeCount; ++i )
			{
				TestFactory.Update( d, false );

				//d.Data = TestFactory.GetRandomString( 100 );

				d.Bag.Message = $"change message #{i + 1}";
				d.Bag.Version = i + 1;

				copies.Add( d.Duplicate() );

				Assert.NotNull( await GetRepo()
					.ForActiveOrg( d )
					.Update( d ) );
			}

			return copies;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		private async Task<ModelVersions> GetVersions( ModelDashboard d ) 
		{
			return await GetRepo()
				.ForActiveOrg( d )
				.GetVersions( d.Id );
		}
		
		#endregion
	}
}
