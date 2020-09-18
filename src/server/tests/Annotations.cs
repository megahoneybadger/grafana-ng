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
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
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
		private List<ModelDashboard> _dashboards;
		/// <summary>
		/// 
		/// </summary>
		private List<ModelUser> _users;
		/// <summary>
		/// 
		/// </summary>
		private List<ModelOrg> _orgs;
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
		public void Should_CreateAnnot()
		{
			var model = TestFactory.Create<ModelAnnotation>();
			TestFactory.Update( model, GetRandomDashboard(), GetRandomUser());
		
			var res = _repo.Create( model );
			Assert.False( res.HasError );

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
		public void Should_CreateAnnots()
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
				var orgAnnotsAll = GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value;

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
		public void ShouldNot_CreateAnnot_WhenNullInput()
		{
			var res = _repo.Create( null );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateAnnotation );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void ShouldNot_CreateAnnot_WhenEmptyInput()
		{
			var model = TestFactory.Create<ModelAnnotation>();

			var res = GetRepo<AnnotationRepository>().Create( model );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateAnnotation );

			TestFactory.Update( model, GetRandomDashboard() );

			res = GetRepo<AnnotationRepository>().Create( model );
			Assert.True( res.HasError );
			Assert.True( res.Error.Code == ErrorCode.BadCreateAnnotation );

			var dashboard = GetRandomDashboard();

			TestFactory.Update( model, dashboard, GetRandomUser() );

			res = GetRepo<AnnotationRepository>()
				.ForActiveOrg( dashboard.OrgId )
				.Create( model );

			Assert.False( res.HasError );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_CreateAnnotTags() 
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

				Assert.False( _repo.Create( model ).HasError );

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
		public void Should_CreateAnnot_AddOnlyNewTags()
		{
			var annots = CreateDataContext().AddAnnotations(2);

			for( int i = 0; i < 3; ++i )
			{
				var dbTags = CreateDataContext()
				 .AnnotationTags
				 .Select( x => x.Term )
				 .ToList();

				dbTags.Sort();

				var model = TestFactory.Create<ModelAnnotation>();
				TestFactory.Update( model, GetRandomDashboard(), GetRandomUser() );

				var existingTag = TestFactory.SelectRandomObject<string>( dbTags );
				string newTag = string.Empty;

				do
				{
					newTag = TestFactory.GetRandomTags( 1 ).FirstOrDefault();
				}
				while( dbTags.Contains( newTag ) );

				model.Tags = new string [] { existingTag, newTag };

				Assert.False( GetRepo<AnnotationRepository>()
					.Create( model )
					.HasError );

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
		public void Should_UpdateAnnots()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_UpdateAnnots_SetEmptyTags()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );

				a.Tags = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_PatchAnnots_SetUserId()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Time = a.TimeEnd = null;
				a.Tags = null;
				a.Text = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_PatchAnnots_SetText()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Time = a.TimeEnd = null;
				a.Tags = null;
				a.UserId = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_PatchAnnots_SetTime()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = null;
				//a.Time = 
				a.Tags = null;
				a.UserId = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_PatchAnnots_SetEndTime()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = TestFactory.GetRandomUShort( 4000 );
				a.Time = null;
				a.Tags = null;
				a.UserId = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_PatchAnnots_SetTags()
		{
			var annots = CreateDataContext().AddAnnotations();

			foreach( var a in annots )
			{
				var old = a.Copy();
				TestFactory.Update( a, GetRandomUser() );
				a.Text = null;
				a.TimeEnd = null;
				a.Time = a.TimeEnd = null;
				a.UserId = null;

				var res = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Update( a, true );

				Assert.False( res.HasError );
				var dbAnnot = res.Value;

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
		public void Should_DeleteAnnots()
		{
			var models = CreateDataContext().AddAnnotations();

			foreach( var a in models )
			{
				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( 0 )
					.Delete( a.Id )
					.Error
					.Code == ErrorCode.BadGetAnnotation );

				var count = GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.All
					.Value
					.Count;

				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.Delete( a.Id )
					.Value );

				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( a )
					.All
					.Value
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
		public void ShouldNot_DeleteAnnot_WhenBadId()
		{
			var models = CreateDataContext().AddAnnotations();

			foreach( var m in models )
			{
				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id + 1000 )
					.Error
					.Code == ErrorCode.BadGetAnnotation );

				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( 0 )
					.Delete( m.Id )
					.Error
					.Code == ErrorCode.BadGetAnnotation );
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
		public void ShouldNot_DeleteAbsentAnnots()
		{
			var models = CreateDataContext().AddAnnotations();

			foreach( var m in models )
			{
				Assert.False( GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id )
					.HasError );

				Assert.True( GetRepo<AnnotationRepository>()
					.ForActiveOrg( m )
					.Delete( m.Id )
					.Error
					.Code == ErrorCode.BadGetAnnotation );
			}

			Assert.Empty( CreateDataContext()
				.Annotations
				.ToList() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_DeleteAnnots_WithDeletedOrg()
		{
			var models = CreateDataContext().AddAnnotations();

			var count = CreateDataContext()
				.Annotations
				.Count();

			foreach( var o in _orgs )
			{
				var orgAnnotsCount = GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id )
					.HasError );

				Assert.True( CreateDataContext()
					.Annotations
					.Count() == count - orgAnnotsCount );

				Assert.Empty( GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.All
					.Value );

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
		public void Should_SearchAnnots()
		{
			var count = 5;
			var annots = CreateDataContext().AddAnnotations( count );

			foreach( var d in _dashboards ) 
			{
				var f = new AnnotationSearchFilter()
				{
					DashboardId = d.Id,
					From = ( ( DateTimeOffset )DateTime.Today ).ToUnixTimeMilliseconds(),
					To = ( ( DateTimeOffset )DateTime.Today.AddDays( 1 ) ).ToUnixTimeMilliseconds()
				};

				var op = GetRepo<AnnotationRepository>()
					.ForActiveOrg( d )
					.Search( f );

				var dbAnnots = GetAnnotations( d.Id );
				var searchAnnots = op.Value;

				Assert.False( op.HasError );
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
		public void Should_SearchAnnots_WithLimits()
		{
			var count = 5;
			var annots = CreateDataContext().AddAnnotations( count );

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

				var op = GetRepo<AnnotationRepository>()
					.ForActiveOrg( d )
					.Search( f );

				var dbAnnots = GetAnnotations( d.Id );
				var searchAnnots = op.Value;

				Assert.False( op.HasError );
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
		public void Should_SearchAnnots_ByTags()
		{
			var annots = CreateDataContext().AddAnnotations();

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

				var op = GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.Search( f );

				Assert.False( op.HasError );
				var searchAnnots = op.Value;

				Assert.True( searchAnnots.All( y => y.Tags.Contains( t ) ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public void Should_SearchAnnots_ByTagsMatchAny()
		{
			var annots = CreateDataContext().AddAnnotations();

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

				var op = GetRepo<AnnotationRepository>()
					.ForActiveOrg( o.Id )
					.Search( f );

				Assert.False( op.HasError );
				var searchAnnots = op.Value;

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
