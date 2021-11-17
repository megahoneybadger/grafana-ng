#region Usings
using ED.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

using ModelAnnotation = ED.Dashboards.Annotation;
using ModelAnnotations = System.Collections.Generic.List<ED.Dashboards.Annotation>;
using ModelOrg = ED.Security.Org;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using ModelUser = ED.Security.User;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using Microsoft.EntityFrameworkCore;
using ED.Security;
using System.Diagnostics;
using System.Threading.Tasks;
#endregion

namespace ED.Tests
{
	/// <summary>
	///  dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~Annotations"
	/// </summary>
	public class Annotations : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private AnnotationRepository _repo;
		/// <summary>
		/// 
		/// </summary>
		private readonly List<ModelDashboard> _dashboards;
		/// <summary>
		/// 
		/// </summary>
		private readonly List<ModelUser> _users;
		/// <summary>
		/// 
		/// </summary>
		private readonly List<ModelOrg> _orgs;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Annotations()
		{
			_repo = GetRepo<AnnotationRepository>( true );

			_orgs = CreateDataContext().AddOrgs( 2 );
			_dashboards = CreateDataContext().AddDashboards( 2, 2 );
			_users = CreateDataContext().AddUsers( 2 );
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateAnnot()
		{
			var model = TestFactory.Create<ModelAnnotation>();
			TestFactory.Update( model, GetRandomDashboard(), GetRandomUser());
		
			var res = await _repo.Create( model );

			var list = CreateDataContext()
				.Annotations
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.ToList();
			
			Assert.Single( list );

			Assert.True( list [ 0 ].ToModel().Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateAnnots()
		{
			var annots = CreateDataContext().AddAnnotations();

			var all = CreateDataContext()
				.Annotations
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.Select( x => x.ToModel() )
				.ToList();

			var totalCounter = 0;

			foreach( var o in _orgs )
			{
				var orgAnnotsAll = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.GetAnnotations();

				var localCounter = 0;

				foreach( var annot in orgAnnotsAll )
				{
					var cand = all.FirstOrDefault( x => x.Id == annot.Id && x.OrgId == o.Id );
					Assert.NotNull( cand );

					Assert.True( cand.Equals( annot ) );

					++localCounter;
					++totalCounter;
				}

				Assert.True( localCounter == orgAnnotsAll.Count );
			}

			Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateAnnot_WhenNullInput()
		{
			await Assert.ThrowsAsync<NullReferenceException>( () => _repo.Create( null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateAnnot_WhenEmptyInput()
		{
			var model = TestFactory.Create<ModelAnnotation>();

			await Assert.ThrowsAsync<DbUpdateException>( () =>
				GetRepo<AnnotationRepository>().Create( model ) );

			TestFactory.Update( model, GetRandomDashboard() );

			await Assert.ThrowsAsync<DbUpdateException>( () =>
				GetRepo<AnnotationRepository>().Create( model ) );

			var dashboard = GetRandomDashboard();

			TestFactory.Update( model, dashboard, GetRandomUser() );

			var res = await GetRepo<AnnotationRepository>()
				.ForActiveOrg( dashboard.OrgId )
				.Create( model );

			Assert.NotNull( res );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateAnnotTags()
		{
			var tags = new List<string>();

			for( int i = 0; i < 10; ++i )
			{
				var model = TestFactory.Create<ModelAnnotation>();
				TestFactory.Update( model, GetRandomDashboard(), GetRandomUser() );

				if( i % 2 == 0 )
				{
					model.Tags = null;
				}

				if( i % 3 == 0 )
				{
					model.Tags = new List<string>();
				}

				await _repo.Create( model );
				//Assert.False( .HasError );

				if( model.Tags?.Count() > 0 )
				{
					tags.AddRange( model.Tags );
				}

				var dbTags = CreateDataContext()
					.AnnotationTags
					.Select( x => x.Term )
					.ToList();

				var insertedTags = tags
					.Distinct()
					.ToList();

				dbTags.Sort();
				insertedTags.Sort();

				Assert.True( dbTags.Count == insertedTags.Count );

				Assert.True( Enumerable.SequenceEqual( dbTags, insertedTags ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateAnnot_AddOnlyNewTags()
		{
			var annots = CreateDataContext().AddAnnotations( 2 );

			for( int i = 0; i < 3; ++i )
			{
				var dbTags = CreateDataContext()
				 .AnnotationTags
				 .Select( x => x.Term )
				 .ToList();

				dbTags.Sort();

				var model = TestFactory.Create<ModelAnnotation>();
				TestFactory.Update( model, GetRandomDashboard(), GetRandomUser() );

				var existingTag = TestFactory.SelectRandomObject( dbTags );
				string newTag = string.Empty;

				do
				{
					newTag = TestFactory.GetRandomTags( 1 ).FirstOrDefault();
				}
				while( dbTags.Contains( newTag ) );

				model.Tags = new string [] { existingTag, newTag };

				await GetRepo<AnnotationRepository>().Create( model );

				var dbNewTags = CreateDataContext()
				 .AnnotationTags
				 .Select( x => x.Term )
				 .ToList();

				dbNewTags.Sort();

				Assert.True( dbNewTags.Count == dbTags.Count + 1 );

				dbTags.Add( newTag );
				dbTags.Sort();

				Assert.True( Enumerable.SequenceEqual( dbTags, dbNewTags ) );
			}
		}
		#endregion

		#region Class 'Update' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateAnnots()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == a.UserId );
				Assert.True( dbAnnot.Time == a.Time );
				Assert.True( dbAnnot.TimeEnd == a.TimeEnd );
				Assert.True( dbAnnot.Text == a.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, a.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateAnnots_SetEmptyTags()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );

				a.Tags = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == a.UserId );
				Assert.True( dbAnnot.Time == a.Time );
				Assert.True( dbAnnot.TimeEnd == a.TimeEnd );
				Assert.True( dbAnnot.Text == a.Text );
				Assert.Null( dbAnnot.Tags );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_PatchAnnots_SetUserId()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Time = a.TimeEnd = null;
				a.Tags = null;
				a.Text = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == a.UserId );
				Assert.True( dbAnnot.Time == old.Time );
				Assert.True( dbAnnot.TimeEnd == old.TimeEnd );
				Assert.True( dbAnnot.Text == old.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, old.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_PatchAnnots_SetText()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Time = a.TimeEnd = null;
				a.Tags = null;
				a.UserId = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == old.UserId );
				Assert.True( dbAnnot.Time == old.Time );
				Assert.True( dbAnnot.TimeEnd == old.TimeEnd );
				Assert.True( dbAnnot.Text == a.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, old.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_PatchAnnots_SetTime()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = null;
				//a.Time = 
				a.Tags = null;
				a.UserId = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == old.UserId );
				Assert.True( dbAnnot.Time == a.Time );
				Assert.True( dbAnnot.TimeEnd == old.TimeEnd );
				Assert.True( dbAnnot.Text == old.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, old.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_PatchAnnots_SetEndTime()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = TestFactory.GetRandomUShort( 4000 );
				a.Time = null;
				a.Tags = null;
				a.UserId = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == old.UserId );
				Assert.True( dbAnnot.Time == old.Time );
				Assert.True( dbAnnot.TimeEnd == a.TimeEnd );
				Assert.True( dbAnnot.Text == old.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, old.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_PatchAnnots_SetTags()
		{
			var annots = await CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = null;
				a.Time = a.TimeEnd = null;
				a.UserId = null;

				var dbAnnot = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.NotNull( dbAnnot );

				Assert.True( dbAnnot.UserId == old.UserId );
				Assert.True( dbAnnot.Time == old.Time );
				Assert.True( dbAnnot.TimeEnd == old.TimeEnd );
				Assert.True( dbAnnot.Text == old.Text );
				Assert.True( Enumerable.SequenceEqual( dbAnnot.Tags, a.Tags ) );

				Assert.True( dbAnnot.Id == old.Id );
				Assert.True( dbAnnot.OrgId == old.OrgId );
				Assert.True( dbAnnot.PanelId == old.PanelId );
				Assert.True( dbAnnot.DashboardId == old.DashboardId );
			}
		}
		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteAnnots()
		{
			var models = await CreateDataContext().AddAnnotations();

			foreach( var a in models )
			{
				var task = GetRepo<AnnotationRepository>()
					.ForActiveOrg( 0 )
					.Delete( a.Id );

				await Assert.ThrowsAsync<BadGetAnnotationException>( () => task );

				var count = (await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.GetAnnotations())
					.Count;

				Assert.True( await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Delete( a.Id ) );

				Assert.True( ( await GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.GetAnnotations() )
					.Count == count - 1 );
			}

			Assert.Empty( CreateDataContext()
				.Annotations
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteAnnot_WhenBadId()
		{
			var models = await CreateDataContext().AddAnnotations();

			foreach( var m in models )
			{
				var task = GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id + 1000 );

				await Assert.ThrowsAsync<BadGetAnnotationException>( () => task );

				task = GetRepo<AnnotationRepository>()
					.ForActiveOrg( 0 )
					.Delete( m.Id );

				await Assert.ThrowsAsync<BadGetAnnotationException>( () => task );
			}

			Assert.True( CreateDataContext()
				.Annotations
				.ToList()
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteAbsentAnnots()
		{
			var models = await CreateDataContext().AddAnnotations();

			foreach( var m in models )
			{
				Assert.True( await GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id ) );

				var task = GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id );

				await Assert.ThrowsAsync<BadGetAnnotationException>( () => task );
			}

			Assert.Empty( CreateDataContext()
				.Annotations
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteAnnots_WithDeletedOrg()
		{
			var models = await CreateDataContext().AddAnnotations();

			var count = CreateDataContext()
				.Annotations
				.Count();

			foreach( var o in _orgs )
			{
				var orgAnnotsCount = ( await GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.GetAnnotations())
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.Annotations
					.Count() == count - orgAnnotsCount );

				Assert.Empty( await GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.GetAnnotations() );

				count -= orgAnnotsCount;
			}

			Assert.True( 0 == count );

			Assert.Empty( CreateDataContext()
				.Annotations
				.ToList() );
		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_SearchAnnots()
		{
			var count = 5;
			var annots = await CreateDataContext().AddAnnotations( count );

			foreach( var d in _dashboards )
			{
				var f = new AnnotationSearchFilter()
				{
					DashboardId = d.Id,
					From = ( ( DateTimeOffset )DateTime.Today ).ToUnixTimeMilliseconds(),
					To = ( ( DateTimeOffset )DateTime.Today.AddDays( 1 ) ).ToUnixTimeMilliseconds()
				};

				var searchAnnots = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( d )
					.Search( f );

				var dbAnnots = GetAnnotations( d.Id );
				
				Assert.True( searchAnnots.Count == count );

				dbAnnots.ForEach( x =>
				{
					var a = searchAnnots.FirstOrDefault( y => x.Id == y.Id );
					Assert.NotNull( a );
					Assert.True( a.Equals( x ) );
				} );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_SearchAnnots_WithLimits()
		{
			var count = 5;
			var annots = await CreateDataContext().AddAnnotations( count );

			foreach( var d in _dashboards )
			{
				int limit = TestFactory.GetRandomUShort( ( ushort )count );

				var f = new AnnotationSearchFilter()
				{
					DashboardId = d.Id,
					From = ( ( DateTimeOffset )DateTime.Today ).ToUnixTimeMilliseconds(),
					To = ( ( DateTimeOffset )DateTime.Today.AddDays( 1 ) ).ToUnixTimeMilliseconds(),
					Limit = limit
				};

				var searchAnnots = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( d )
					.Search( f );

				var dbAnnots = GetAnnotations( d.Id );
	
				Assert.True( searchAnnots.Count == limit );

				searchAnnots.ForEach( x =>
				{
					var a = dbAnnots.FirstOrDefault( y => x.Id == y.Id );
					Assert.NotNull( a );
					Assert.True( a.Equals( x ) );
				} );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_SearchAnnots_ByTags()
		{
			var annots = await CreateDataContext().AddAnnotations();

			var tags = annots
				.SelectMany( x => x.Tags )
				.Distinct()
				.OrderBy( x => x )
				.ToList();

			foreach( var t in tags )
			{
				var f = new AnnotationSearchFilter()
				{
					Tags = new string [] { t }
				};

				var o = TestFactory.SelectRandomObject<ModelOrg>( _orgs );

				var searchAnnots = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.Search( f );

				Assert.NotNull( searchAnnots );

				Assert.True( searchAnnots.All( y => y.Tags.Contains( t ) ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_SearchAnnots_ByTagsMatchAny()
		{
			var annots = await CreateDataContext().AddAnnotations();

			var tags = annots
				.SelectMany( x => x.Tags )
				.Distinct()
				.OrderBy( x => x )
				.ToList();

			foreach( var t in tags )
			{
				var searchTags = TestFactory
					.SelectRandomObjects<string>( tags )
					.ToArray();

				var f = new AnnotationSearchFilter()
				{
					Tags = searchTags,
					MatchAny = true
				};

				var o = TestFactory.SelectRandomObject<ModelOrg>( _orgs );

				var searchAnnots = await GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.Search( f );

				searchAnnots.ForEach( x =>
				{
					Assert.True( searchTags.Intersect( x.Tags ).Count() > 0 );
				} );
			}
		}

		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private ModelDashboard GetRandomDashboard() 
		{
			return TestFactory.SelectRandomObject<ModelDashboard>( _dashboards );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private ModelUser GetRandomUser()
		{
			return TestFactory.SelectRandomObject<ModelUser>( _users );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		private ModelAnnotations GetAnnotations( int dashboardId ) 
		{
			return CreateDataContext()
				.Annotations
				.Where( x => x.DashboardId == dashboardId )
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.Include( x => x.User )
				.Select( x => x.ToModel() )
				.ToList();
		}
		#endregion
	}
}
