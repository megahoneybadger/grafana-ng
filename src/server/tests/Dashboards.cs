#region Usings
using ED.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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
	/// 
	/// </summary>
	public class Dashboards : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private DashboardRepository _repo;
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
		public void Should_FindDashboardByUid()
		{
			var dashboards = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				var res = GetRepo<DashboardRepository>()
					.ForActiveOrg( d ) [ d.Uid ];

				Assert.False( res.HasError );
				Assert.True( d.Equals( res.Value ) );

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( 0 ) [ d.Uid ]
					.Error
					.Code == ErrorCode.BadGetDashboard );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_FindDashboardByUid_WhenBadUid()
		{
			var dashboards = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				Assert.True( _repo
					.ForActiveOrg( d ) [ d.Uid + "error" ]
					.Error
					.Code == ErrorCode.BadGetDashboard );

				Assert.True( _repo
					.ForActiveOrg( d ) [ null ]
					.Error
					.Code == ErrorCode.BadGetDashboard );

				Assert.True( _repo
					.ForActiveOrg( d ) [ string.Empty ]
					.Error
					.Code == ErrorCode.BadGetDashboard );
			}
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateDashboard()
		{
			var model = TestFactory.Create<ModelDashboard>();
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
		public void Should_CreateDashboards()
		{
			var dashboards = CreateDataContext().AddDashboards( 5, 3 );

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
				var orgDashboardsAll = GetRepo<DashboardRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

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
		public void Should_CreateDashboard_WhenDuplicateTitleOrUid_InVariousOrgs()
		{
			var model = TestFactory.Create<ModelDashboard>();
			var res = GetRepo<DashboardRepository>().Create( model );
			Assert.False( res.HasError );

			var model2 = TestFactory.Create<ModelDashboard>();
			model2.Title = model.Title;

			Assert.False( GetRepo<DashboardRepository>()
				.ForActiveOrg( 2 )
				.Create( model2 )
				.HasError );

			var model3 = TestFactory.Create<ModelDashboard>();
			model3.Uid = model.Uid;

			Assert.False( GetRepo<DashboardRepository>()
				.ForActiveOrg( 3 )
				.Create( model3 )
				.HasError );

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
		public void ShouldNot_CreateDashboard_WhenDuplicateTitleOrUid()
		{
			var model = TestFactory.Create<ModelDashboard>();
			var res = GetRepo<DashboardRepository>().Create( model );
			Assert.False( res.HasError );

			var model2 = TestFactory.Create<ModelDashboard>();
			model2.Title = model.Title;

			Assert.True( GetRepo<DashboardRepository>()
				.Create( model2 )
				.Error
				.Code == ErrorCode.BadCreateDashboardDuplicate );

			var model3 = TestFactory.Create<ModelDashboard>();
			model3.Uid = model.Uid;

			Assert.True( GetRepo<DashboardRepository>()
				.Create( model3 )
				.Error
				.Code == ErrorCode.BadCreateDashboard );

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
		public void ShouldNot_CreateDashboard_WhenDuplicateTitle()
		{
			var models = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
				modelDuplicate.Title = m.Title;
				modelDuplicate.FolderId = m.FolderId;


				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateDashboardDuplicate );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_OverrideDashboard_WhenDuplicateTitle()
		{
			var models = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
				modelDuplicate.Title = m.Title;
				modelDuplicate.FolderId = m.FolderId;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateDashboardDuplicate );

				modelDuplicate.Bag.Overwrite = false;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateDashboardDuplicate );

				modelDuplicate.Bag.Overwrite = true;

				var res = GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate );

				Assert.False( res.HasError );
				Assert.True( modelDuplicate.Equals( res.Value ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateDashboard_WhenDuplicateUid()
		{
			var models = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<ModelDashboard>();
				modelDuplicate.Uid = m.Uid;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Create( modelDuplicate )
					.Error
					.Code == ErrorCode.BadCreateDashboard );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateDashboard_WhenNullInput()
		{
			var res = _repo.Create( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateDashboard );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateDashboard_WhenEmptyInput()
		{
			var model = new ModelDashboard();
			var res = _repo.Create( model );

			Assert.False( res.HasError );

			model.Uid = res.Value.Uid;

			Assert.True( res.Value.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateDashboard_WhenWrongOrgId()
		{
			var models = TestFactory.Create<ModelDashboard>( 5 );

			var orgs = GetRepo<OrgRepository>()
				.All
				.Value;

			foreach( var m in models )
			{
				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( 0 )
					.Create( m )
					.Error
					.Code == ErrorCode.BadCreateDashboard );

				var org = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				var res = GetRepo<DashboardRepository>()
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
		public void ShouldNot_UpdateDashboard_WhenNullInput()
		{
			var res = _repo.Update( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadUpdateDashboard );

			var dashboard = TestFactory.Create<ModelDashboard>();
			res = _repo.Update( dashboard );

			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadGetDashboard );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateDashboards_WhenBadUid()
		{
			var dashboards = CreateDataContext().AddDashboards( 3, 5 );

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

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Update( d )
					.Error
					.Code == ErrorCode.BadGetDashboard );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateDashboards_WhenSameFolderAndDuplicateTitle()
		{
			var dashboards = CreateDataContext().AddDashboards( 3, 5 );

			foreach( var d in dashboards )
			{
				var copy = TestFactory.Create<ModelDashboard>();

				Assert.False( GetRepo<DashboardRepository>()
				 .ForActiveOrg( d.OrgId )
				 .Create( copy )
				 .HasError );

				copy.Title = d.Title;
				copy.FolderId = d.FolderId;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Update( copy )
					.Error
					.Code == ErrorCode.BadCreateDashboardDuplicate );

				copy.Bag.Overwrite = false;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Update( copy )
					.Error
					.Code == ErrorCode.BadCreateDashboardDuplicate );

				//f.Title = oldTitle;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_UpdateDashboards_WithWrongVersion()
		{
			var dashboards = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				d.Data = TestFactory.GetRandomString( 20 );
				d.Bag.Overwrite = true;
				//d.Bag.Version = 0;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Update( d )
					.Error
					.Code == ErrorCode.BadUpdateDashboardVersionMismatch );

				d.Bag.Version = 0;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Update( d )
					.Error
					.Code == ErrorCode.BadUpdateDashboardVersionMismatch );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateDashboards_WithCorrectVersion()
		{
			var dashboards = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				for( int i = 0; i < 3; ++i )
				{
					d.Title = TestFactory.GetRandomNoun();
					//d.Data = TestFactory.GetRandomString( 20 );
					d.Bag.Overwrite = true;
					d.Bag.Version = i + 1;

					var res = GetRepo<DashboardRepository>()
						.ForActiveOrg( d.OrgId )
						.Update( d );

					Assert.False( res.HasError );
					Assert.True( d.Bag.Version + 1 == res.Value.Bag.Version );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_UpdateDashboards()
		{
			var dashboards = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in dashboards )
			{
				for( int i = 0; i < 3; ++i )
				{
					d.Title = TestFactory.GetRandomNoun();
					d.Bag.Version = i + 1;

					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d.OrgId )
						.Update( d )
						.HasError );
				}
			}
		}
		///// <summary>
		///// 
		///// </summary>
		//[Fact]
		//public void Should_UpdateDashboards_WithOverwrite()
		//{
		//	var dashboards = CreateDataContext().AddDashboards( 3, 3 );

		//	foreach( var d in dashboards )
		//	{
		//		var copy = TestFactory.Create<ModelDashboard>();
		//		copy.FolderId = d.FolderId;

		//		Assert.False( GetRepo<DashboardRepository>()
		//			.Update( copy )
		//			.HasError );

		//		//d.Data = TestFactory.GetRandomString( 20 );
		//		d.Title = copy.Title;
		//		d.Bag.Version = 1;
		//		d.Bag.Overwrite = true;

		//		Assert.False( GetRepo<DashboardRepository>()
		//			.ForActiveOrg( d.OrgId )
		//			.Update( d )
		//			.HasError );

		//		Assert.True( GetRepo<DashboardRepository>()
		//			.ForActiveOrg( d.OrgId ) [ copy.Uid ]
		//			.Error
		//			.Code == ErrorCode.BadGetDashboard );
		//	}
		//}
		///// <summary>
		///// 
		///// </summary>
		//[Fact]
		//public void ShouldNot_UpdateDashboards_WithoutOverwrite()
		//{
		//	var dashboards = CreateDataContext().AddDashboards( 3, 3 );

		//	foreach( var d in dashboards )
		//	{
		//		var copy = TestFactory.Create<ModelDashboard>();
		//		copy.FolderId = d.FolderId;

		//		Assert.False( GetRepo<DashboardRepository>()
		//			.ForActiveOrg( d )
		//			.Update( copy )
		//			.HasError );

		//		d.Data = TestFactory.GetRandomString( 20 );
		//		d.Title = copy.Title;
		//		d.Bag.Version = 1;
		//		d.Bag.Overwrite = false;

		//		Assert.True( GetRepo<DashboardRepository>()
		//			.ForActiveOrg( d )
		//			.Update( d )
		//			.Error
		//			.Code == ErrorCode.BadCreateDashboardDuplicate );

		//		Assert.False( GetRepo<DashboardRepository>()
		//			.ForActiveOrg( d.OrgId ) [ copy.Uid ]
		//			.HasError );
		//	}
		//}
		#endregion

		#region Class 'Delete' methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteDashboards()
		{
			var models = CreateDataContext().AddDashboards( 5, 3 );

			var all = CreateDataContext()
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var d in all )
			{
				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( 0 )
					.Delete( d.Uid )
					.Error
					.Code == ErrorCode.BadGetDashboard );

				var count = GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.All
					.Value
					.Count;

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Delete( d.Uid )
					.Value );

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.All
					.Value
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
		public void ShouldNot_DeleteDashboard_WhenBadUid()
		{
			var models = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var m in models )
			{
				Assert.False( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId ) [ m.Uid ]
					.HasError );

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Delete( m.Uid + "error" )
					.Error
					.Code == ErrorCode.BadGetDashboard );

				Assert.True( GetRepo<DashboardRepository>()
					.ForActiveOrg( m.OrgId )
					.Delete( null )
					.Error
					.Code == ErrorCode.BadGetDashboard );
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
		public void ShouldNot_DeleteAbsentDashboards()
		{
			var models = CreateDataContext().AddDashboards( 3, 3 );

			foreach( var d in models )
			{
				Assert.False( GetRepo<DashboardRepository>()
					.ForActiveOrg( d.OrgId )
					.Delete( d.Uid )
					.HasError );

				Assert.True( GetRepo<DashboardRepository>()
					.Delete( d.Uid )
					.Error
					.Code == ErrorCode.BadGetDashboard );
			}

			Assert.Empty( CreateDataContext()
				.Dashboards
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteDashboard_WithDeletedOrg()
		{
			CreateDataContext().AddDashboards( 5, 3 );

			var count = CreateDataContext()
				.Dashboards
				.Count();

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var orgDashboardsCount = GetRepo<DashboardRepository>()
					.ForActiveOrg( o )
					.All
					.Value
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Dashboards
					.Count() == count - orgDashboardsCount );

				Assert.Empty( GetRepo<DashboardRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value );

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
		public void Should_DeleteDashboardsAndTags()
		{
			CreateDataContext().AddDashboards( 3, 5 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = GetRepo<DashboardRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

				var allTagsCount = CreateDataContext()
					.DashboardTags
					.ToList()
					.Count;

				foreach( var d in dashboards )
				{
					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d ) [ d.Uid ]
						.HasError );

					var tags = GetRepo<DashboardRepository>()
						.ForActiveOrg( d ) [ d.Uid ]
						.Value
						.Tags
						.ToList();

					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.Delete( d.Uid )
						.HasError );

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
		public void Should_DeleteDashboardsAndVersions()
		{
			CreateDataContext().AddDashboards( 3, 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = GetRepo<DashboardRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

				var allVersionsCount = CreateDataContext()
					.DashboardVersions
					.ToList()
					.Count;

				foreach( var d in dashboards )
				{
					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d ) [ d.Uid ]
						.HasError );

					var versions = GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.GetVersions( d.Id )
						.Value
						.ToList();

					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.Delete( d.Uid )
						.HasError );

					allVersionsCount -= versions.Count;

					Assert.True( CreateDataContext()
						.DashboardVersions
						.ToList()
						.Count == allVersionsCount );

					Assert.Empty( GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.GetVersions( d.Id )
						.Value
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
		public void Should_DeleteDashboardsAndStars()
		{
			CreateDataContext().AddDashboards( 3, 5 );
			CreateDataContext().AddUsers( 3 );
			CreateDataContext().AddStars( 3 );

			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			foreach( var o in orgs )
			{
				var dashboards = GetRepo<DashboardRepository>()
					.ForActiveOrg( o )
					.All
					.Value;

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

					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( o )
						.Delete( d.Uid )
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
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteFoldersAndPermissions()
		{
			//CreateDataContext().AddDashboards( 3, 5 );
			//CreateDataContext().AddDashboardPermissions();

			//var orgs = CreateDataContext()
			//	.Orgs
			//	.ToList();

			//foreach( var o in orgs )
			//{
			//	var dashboards = GetRepo<DashboardRepository>()
			//		.ForActiveOrg( o )
			//		.All
			//		.Value;

			//	var allPermsCount = CreateDataContext()
			//		.DashboardPermissions
			//		.ToList()
			//		.Count;

			//	foreach( var d in dashboards )
			//	{
			//		var relatedPermCount = CreateDataContext()
			//			.Dashboards
			//			.Include( x => x.Permissions )
			//			.Where( x => x.FolderId == d.Id )
			//			.SelectMany( x => x.Permissions )
			//			.ToList()
			//			.Count;

			//		GetRepo<DashboardRepository>()
			//			.ForActiveOrg( d.OrgId )
			//			.Delete( d.Uid );

			//		var newAllPermsCount = CreateDataContext()
			//			.DashboardPermissions
			//			.ToList()
			//			.Count;

			//		Assert.True( allPermsCount - relatedPermCount == newAllPermsCount );
			//		allPermsCount = newAllPermsCount;
			//	}
			//}
		}
		#endregion

		#region Class 'Versions'methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetDefaultVersions()
		{
			var dashboards = CreateDataContext().AddDashboards( 5, 3 );

			foreach( var d in dashboards )
			{
				var res = GetRepo<DashboardRepository>()
					.ForActiveOrg( d )
					.GetVersions( d.Id );

				Assert.False( res.HasError );
				Assert.True( res.Value.Count == 1 );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetVersions()
		{
			var dashboards = CreateDataContext().AddDashboards( 5, 3 );
			var changeCount = 3;

			foreach( var d in dashboards )
			{
				for( int i = 0; i < changeCount; ++i )
				{
					TestFactory.Update( d, false );

					d.Bag.Message = $"change message #{i + 1}";
					d.Bag.Version = i + 1;

					Assert.False( GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.Update( d )
						.HasError );
				}

				var res = GetRepo<DashboardRepository>()
					.ForActiveOrg( d )
					.GetVersions( d.Id );

				Assert.False( res.HasError );
				Assert.True( res.Value.Count == changeCount + 1 );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_GetVersions_WithLimit()
		{
			var dashboards = CreateDataContext().AddDashboards( 1, 2 );
			var changeCount = 5;
			var message = "change message #";

			foreach( var d in dashboards )
			{
				UpdateDashboard( d, changeCount );

				int limit = 2;
				int start = 0;
				var index = changeCount;

				while( true )
				{
					var res = GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.GetVersions( d.Id, limit, start );

					if( 0 == res.Value.Count )
						break;

					Assert.False( res.HasError );
					Assert.True( res.Value.Count == limit );

					foreach( var v in res.Value )
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
		public void Should_GetVersion()
		{
			var dashboards = CreateDataContext().AddDashboards( 1, 3 );
			var changeCount = 3;

			foreach( var d in dashboards )
			{
				var copies = UpdateDashboard( d, changeCount );

				copies.Reverse();

				var ids = GetRepo<DashboardRepository>()
					.ForActiveOrg( d )
					.GetVersions( d.Id )
					.Value
					.Select( x => x.Id )
					.ToList();

				for( int i = 0; i < ids.Count; ++i )
				{
					var next = GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.GetVersion( d.Id, ids [ i ] );

					Assert.False( next.HasError );

					Assert.True( next
						.Value
						.Data
						.Equals( copies [ i ].Data ) );

					Assert.True( GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.GetVersion( d.Id, ids [ i ] * 100 )
						.Error
						.Code == ErrorCode.BadGetDashboardVersion );
				}
			}
		}
		/// <summary>
		/// 
		/// </summary> 
		[Fact]
		public void Should_RestoreVersion()
		{
			var dashboards = CreateDataContext().AddDashboards( 1, 3 );
			var changeCount = 3;
			var restoreCount = 3;

			foreach( var d in dashboards )
			{
				UpdateDashboard( d, changeCount );

				for( int i = 0; i < restoreCount; ++i )
				{
					var versions = GetVersions( d );

					var versionToRestore = TestFactory
						.SelectRandomObject<ModelVersion>( versions );

					var res = GetRepo<DashboardRepository>()
						.ForActiveOrg( d )
						.Restore( d.Id, versionToRestore.Version );

					Assert.False( res.HasError );

					var newVersions = GetVersions( d );
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
		private ModelDashboards UpdateDashboard( ModelDashboard d, int changeCount ) 
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

				Assert.False( GetRepo<DashboardRepository>()
					.ForActiveOrg( d )
					.Update( d )
					.HasError );
			}

			return copies;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		private ModelVersions GetVersions( ModelDashboard d ) 
		{
			return GetRepo<DashboardRepository>()
					.ForActiveOrg( d )
					.GetVersions( d.Id )
					.Value
					.ToList();
		}
		
		#endregion
	}
}
