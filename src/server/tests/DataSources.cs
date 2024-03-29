#region Usings
using ED.Data;
using ED.DataSources.InfluxDb;
using ED.DataSources.Redis;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using ModelInfluxDataSource = ED.DataSources.InfluxDb.InfluxDataSource;
using ModelRedisDataSource = ED.DataSources.Redis.RedisDataSource;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~DataSources"
	/// </summary>
	public class DataSources : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private DataSourceRepository _repo;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private DataSourceRepository GetRepo() => GetRepo<DataSourceRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public DataSources()
		{
			_repo = GetRepo<DataSourceRepository>( true );

			CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateSingleDataSource()
		{
			var model = TestFactory.Create<InfluxDataSource>();
			var res = _repo.Create( model );
			Assert.NotNull( res );

			var list = await _repo.GetDataSources();
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateMultipleDataSources()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			var list = await _repo.GetDataSources();
			
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
		public async Task ShouldNot_CreateDataSource_WhenDuplicateId()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			foreach( var m in models )
			{
				var modelDuplicate = TestFactory.Create<InfluxDataSource>();
				modelDuplicate.Id = m.Id;

				await Assert.ThrowsAsync<DbUpdateException>( () => GetRepo().Create( modelDuplicate ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateDataSource_WhenNullInput()
		{
			await Assert.ThrowsAsync<NullReferenceException>( () => GetRepo().Create( null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDataSource_WhenEmptyInput()
		{
			var model = new ModelInfluxDataSource();
			var res = await _repo.Create( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreateDataSources_InVariousOrgs()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
					.WithActiveOrg( x.Id )
					.AddDataSources() );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			var totalCounter = 0;

			foreach( var o in orgs )
			{
				var orgDsAll = await GetRepo()
					.ForActiveOrg( o )
					.GetDataSources();

				var localCounter = 0;

				foreach( var ds in orgDsAll )
				{
					Assert.NotNull( all.FirstOrDefault( x => x.Id == ds.Id && x.OrgId == o.Id ) );

					++localCounter;
					++totalCounter;
				}

				Assert.True( localCounter == orgDsAll.Count );
			}

			Assert.True( totalCounter == all.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_CreateDataSource_WhenWrongOrgId()
		{
			var models = TestFactory.Create<InfluxDataSource>( 5 );

			var orgs = GetRepo<OrgRepository>().All.Value;

			foreach( var m in models )
			{
				await Assert.ThrowsAsync<DbUpdateException>( () => 
					GetRepo()
						.ForActiveOrg( 0 )
						.Create( m ) );

				var res = await GetRepo()
					.ForActiveOrg( 1 )
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
		public async Task Should_UpdateSingleInfluxDataSource()
		{
			var model = TestFactory.Create<InfluxDataSource>();
			var res = await _repo.Create( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );

			TestFactory.Update( model );
			res = await GetRepo().Update( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateSingleRedisDataSource()
		{
			var model = TestFactory.Create<RedisDataSource>();
			var res = await _repo.Create( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );

			TestFactory.Update( model );
			res = await GetRepo().Update( model );

			Assert.NotNull( res );
			Assert.True( res.Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateMultipleDataSources()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				var res = await GetRepo().Update( m );

				Assert.NotNull( res );
				Assert.True( res.Equals( m ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpsertInfluxDataSource()
		{
			var model = TestFactory.Create<InfluxDataSource>();

			await Assert.ThrowsAsync<BadGetDataSourceException>( () => _repo.Update( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpsertRedisDataSource()
		{
			var model = TestFactory.Create<RedisDataSource>();

			await Assert.ThrowsAsync<BadGetDataSourceException>( () => _repo.Update( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDataSources_WithWrongId()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				m.Id *= 1000;

				await Assert.ThrowsAsync<BadGetDataSourceException>( () => GetRepo().Update( m ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDataSources_WithWrongOrgId()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			foreach( var m in models )
			{
				TestFactory.Update( m );

				await Assert.ThrowsAsync<BadGetDataSourceException>( () => 
					GetRepo()
						.ForActiveOrg( 0 )
						.Update( m ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_UpdateDataSource_WhenNullInput()
		{
			await Assert.ThrowsAsync<NullReferenceException>( () => _repo.Update( null ) );
			
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_ResetIsDefault_WhenNewIsDefault()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			var model = TestFactory.Create<InfluxDataSource>();
			model.IsDefault = true;

			Assert.NotNull( await _repo.Create( model ) );

			var list = await GetRepo().GetDataSources();

			var isDefaultDatasources = list
				.Where( x => x.IsDefault )
				.ToList();

			Assert.Single( isDefaultDatasources );
			Assert.True( model.Equals( isDefaultDatasources [ 0 ] ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_ResetIsDefault_WhenNewIsNotDefault()
		{
			var models = CreateDataContext().AddDataSources( 5 );

			var all = await GetRepo().GetDataSources();

			var defCount = all
				.Where( x => x.IsDefault )
				.Count();

			var oldDefault = all.FirstOrDefault( x => x.IsDefault );

			Assert.True( 0 == defCount || 1 == defCount );

			var model = TestFactory.Create<InfluxDataSource>();
			model.IsDefault = false;

			Assert.NotNull( _repo.Create( model ) );

			all = await GetRepo().GetDataSources();

			var newDefault = all.FirstOrDefault( x => x.IsDefault );

			Assert.Equal( newDefault, oldDefault );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_UpdateDataSources_InVariousOrgs()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources( 3 ) );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			foreach( var m in all )
			{
				TestFactory.Update( m );

				await Assert.ThrowsAsync<BadGetDataSourceException>( () => 
					GetRepo()
						.ForActiveOrg( 0 )
						.Update( m ) );

				var res = await GetRepo()
					.ForActiveOrg( m.OrgId )
					.Update( m );

				Assert.NotNull( res );
				Assert.True( res.Equals( m ) );
			}
		}
		#endregion

		#region Class 'Delete' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDataSources()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			Assert.True( ( await GetRepo()
				.GetDataSources() )
				.Count == models.Count );

			foreach( var m in models )
			{
				Assert.True( await GetRepo().Delete( m.Id ) );
			}

			Assert.Empty( await GetRepo().GetDataSources() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_DeleteDataSource_WhenBadId()
		{
			var models = await CreateDataContext().AddDataSources( 5 );

			Assert.True( ( await GetRepo()
				.GetDataSources() )
				.Count == models.Count );

			foreach( var m in models )
			{
				await Assert.ThrowsAsync<BadGetDataSourceException>( () => GetRepo().Delete( m.Id * 1000 ) );
			}

			Assert.True( ( await GetRepo()
				.GetDataSources() )
				.Count == models.Count );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDataSource_OnlyWhenCorrectId()
		{
			var models = await CreateDataContext().AddDataSources( 5 );
			var deleteCounter = 0;

			for( int i = 0; i < models.Count; ++i )
			{
				var badCase = ( i % 2 == 0 );
				var id = badCase ? models [ i ].Id * 1000 : models [ i ].Id;

				if( badCase )
				{
					await Assert.ThrowsAsync<BadGetDataSourceException>( () => GetRepo().Delete( id ) );
				}
				else
				{
					deleteCounter++;
					Assert.True( await GetRepo().Delete( id ) );
				}
			}

			Assert.True( ( await GetRepo()
				.GetDataSources() )
				.Count == models.Count - deleteCounter );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDataSource_InVariousOrgs()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources() );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			foreach( var ds in all )
			{
				await Assert.ThrowsAsync<BadGetDataSourceException>( () => 
					GetRepo()
						.ForActiveOrg( 0 )
						.Delete( ds.Id ) );

				var count = ( await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.GetDataSources())
					.Count;

				Assert.True( await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.Delete( ds.Id ) );

				Assert.True( ( await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.GetDataSources())
					.Count == count - 1 );
			}

			Assert.Empty( await GetRepo().GetDataSources() );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_DeleteDataSource_WithDeletedOrg()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources() );

			var dc = CreateDataContext();

			var count = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.Count();

			foreach( var o in orgs )
			{
				var orgDsCount = (await GetRepo()
					.ForActiveOrg( o.Id )
					.GetDataSources() )
					.Count;

				Assert.False( GetRepo<OrgRepository>()
					.Delete( o.Id, true )
					.HasError );

				Assert.True( CreateDataContext()
					.DataSources
					.Select( x => x.ToModel( dc.PluginManager ) )
					.Count() == count - orgDsCount );

				Assert.Empty( await GetRepo()
					.ForActiveOrg( o.Id )
					.GetDataSources() );

				count -= orgDsCount;
			}

			Assert.True( 0 == count );

			Assert.Empty( CreateDataContext()
				.DataSources
				.ToList() );
		}
		#endregion

		#region Class 'Find' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindDatasourceById()
		{
			var models = await CreateDataContext().AddDataSources();

			for( int i = 0; i < models.Count; ++i )
			{
				var m = models [ i ];
				var res = await _repo.GetDataSourceById( m.Id );

				Assert.NotNull( res );
				Assert.True( m.Equals( res ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindDatasourceById_WhenBadId()
		{
			var datasources = await CreateDataContext().AddDataSources();

			foreach( var m in datasources ) 
			{
				Assert.Null( await _repo.GetDataSourceById( m.Id * 1000 ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindDatasourceByName()
		{
			var models = await CreateDataContext().AddDataSources();

			foreach( var m in models )
			{
				var res = await _repo.GetDataSourceByName( m.Name );

				Assert.NotNull( res );
				Assert.True( m.Equals( res ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindDatasourceByName_WhenBadName()
		{
			var models = await CreateDataContext().AddDataSources();

			foreach( var m in models )
			{
				Assert.Null( await _repo.GetDataSourceByName( m.Name + "_" ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task ShouldNot_FindDatasourceByName_WhenNullName()
		{
			var models = await CreateDataContext().AddDataSources();

			foreach( var m in models )
			{
				Assert.Null( await _repo.GetDataSourceByName( null ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll()
		{
			var models = await CreateDataContext().AddDataSources();
			var list = await _repo.GetDataSources();
			
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
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources() );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			foreach( var ds in all )
			{
				Assert.Null( await GetRepo()
					.ForActiveOrg( 0 )
					.GetDataSourceById( ds.Id ));

				var existing = await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.GetDataSourceById( ds.Id );

				Assert.True( existing.Equals( ds ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll_InVariousOrgsByName()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources() );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			foreach( var ds in all )
			{
				Assert.Null( await GetRepo()
					.ForActiveOrg( 0 )
					.GetDataSourceByName( ds.Name ) );

				var existing = await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.GetDataSourceByName( ds.Name );

				Assert.True( existing.Equals( ds ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_FindAll_InVariousOrgsAll()
		{
			var orgs = CreateDataContext()
				.Orgs
				.ToList();

			orgs.ForEach( async x => await CreateDataContext()
				.WithActiveOrg( x.Id )
				.AddDataSources() );

			var dc = CreateDataContext();

			var all = dc
				.DataSources
				.Select( x => x.ToModel( dc.PluginManager ) )
				.ToList();

			foreach( var ds in all )
			{
				Assert.Empty( await GetRepo()
					.ForActiveOrg( 0 )
					.GetDataSources() );

				var orgDsAll = await GetRepo()
					.ForActiveOrg( ds.OrgId )
					.GetDataSources();

				var orgDsAllDirect = all
					.Where( x => x.OrgId == ds.OrgId )
					.ToList();

				Assert.True( orgDsAll.Count == orgDsAllDirect.Count );

				foreach( var next in orgDsAll )
				{
					var existing = orgDsAllDirect.FirstOrDefault( x => x.Id == next.Id );

					Assert.True( existing.Equals( next ) );
				}
			}
		}
		#endregion
	}
}
