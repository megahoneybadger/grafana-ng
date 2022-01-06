#region Usings
using ED.DataSources;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

using ModelDataSource = ED.DataSources.DataSource;
using ModelDataSources = System.Collections.Generic.List<ED.DataSources.DataSource>;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DataSourceRepository : Repository
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public DataSourceRepository( DataContext dc ) 
			: base( dc )
		{
			
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<ModelDataSources> GetDataSources()
		{
			var dataSources = await DataContext
				.DataSources
				.ForActiveOrg()
				.Select( x => x.ToModel( PluginManager ) )
				.ToListAsync();

			return dataSources
				.Where( x => null != x )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelDataSource> GetDataSourceById( int id ) 
		{
			var entity = await DataContext
				.DataSources
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			var model = entity?.ToModel( PluginManager );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelDataSource> GetDataSourceByName( string name )
		{
			var entity = await DataContext
				.DataSources
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Name == name );

			var model = entity?.ToModel( PluginManager );

			return model;
		}
	
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<ModelDataSource> Create( ModelDataSource ds ) 
		{
			if( ds.IsDefault )
			{
				ResetIsDefault();
			}

			var entity = ds
				.ToEntity()
				.IncludeActiveOrgId( DataContext );

			await DataContext.DataSources.AddAsync( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( ds )
				.ToModel( PluginManager );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<ModelDataSource> Update( ModelDataSource ds )
		{
			if( ds.IsDefault )
			{
				ResetIsDefault();
			}

			var entity = await DataContext
				.DataSources
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == ds.Id );

			if( null == entity )
				throw new BadGetDataSourceException();

			entity.Update( ds );

			DataContext.DataSources.Update( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( ds )
				.ToModel( PluginManager );

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( int id )
		{
			var entity = await DataContext
				.DataSources
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			if( null == entity )
				throw new BadGetDataSourceException();

			DataContext.DataSources.Remove( entity );

			var res = await DataContext.SaveChangesAsync();

			return ( 0 != res );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( string name )
		{
			var entity = await DataContext
				.DataSources
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Name == name );

			if( null == entity )
				throw new BadGetDataSourceException();

			DataContext.DataSources.Remove( entity );

			var res = await DataContext.SaveChangesAsync();

			return ( 0 != res );
		}
		/// <summary>
		/// 
		/// </summary>
		public void ResetIsDefault() 
		{
			try
			{
				DataContext
					.Database
					.ExecuteSqlRaw( "Update DataSources Set IsDefault=0 Where IsDefault=1" );
			}
			catch
			{	}
		}
		#endregion

		#region Class 'Proxy' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<OperationResult<bool>> Ping( int id )
		{
			var dataSource = await GetDataSourceById( id );

			if( null == dataSource )
				throw new BadGetDashboardException();

			var x = await dataSource.Ping();

			return ( x.HasError || !x.Value ) ? OperationResult<bool>.Create( ErrorCode.NoDatabaseConnection ) : x;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dataSourceId"></param>
		/// <param name="command"></param>
		/// <returns></returns>
		public async Task<OperationResult<TimeSeriesList>> Proxy( int id, string command )
		{
			var dataSource = await GetDataSourceById( id );

			if( null == dataSource )
				throw new BadGetDashboardException();

			var x = await dataSource.Proxy( command );

			return x;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dataSourceId"></param>
		/// <param name="command"></param>
		/// <returns></returns>
		public async Task<OperationResult<TimeSeriesList>> Query( DataSourceQueryRequest r  )
		{
			var dataSource = await GetDataSourceById( r.Id );

			if( null == dataSource )
				throw new BadGetDashboardException();

			var x = await dataSource.Query( r );

			return x;
		}
		#endregion
	}
}
