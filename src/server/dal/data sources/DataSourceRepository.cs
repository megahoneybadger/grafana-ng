#region Usings
using ED.DataSources;
using ED.Plugins;
using Microsoft.EntityFrameworkCore;
using System;
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
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelDataSource> this [ int id ]
		{
			get
			{
				OperationResult<ModelDataSource> res = null;

				try
				{
					var model = DataContext
						.DataSources
						.ForActiveOrg()
						.FirstOrDefault( x => x.Id == id )
						?.ToModel( PluginManager );

					res = OperationResult<ModelDataSource>.Create(
						() => null != model, model, ErrorCode.BadGetDataSource );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelDataSource>.Create( ErrorCode.BadGetDataSource, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelDataSource> this [ string name ]
		{
			get
			{
				OperationResult<ModelDataSource> res = null;

				try
				{
					var model = DataContext
						.DataSources
						.ForActiveOrg()
						.FirstOrDefault( x => x.Name == name )
						?.ToModel( PluginManager );

					res = OperationResult<ModelDataSource>.Create( 
						() => null != model, model, ErrorCode.BadGetDataSource );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelDataSource>.Create( ErrorCode.BadGetDataSource, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelDataSources> All
		{
			get
			{
				OperationResult<ModelDataSources> res;

				try
				{
					var dataSources = DataContext
						.DataSources
						.ForActiveOrg()
						.Select( x => x.ToModel( PluginManager ) )
						.ToNotNullList();

					res = OperationResult<ModelDataSources>.Create( dataSources );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelDataSources>.Create( ErrorCode.BadGetDataSources, e );
				}

				return res;
			}
		}
		#endregion

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

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<ModelDataSource> Create( ModelDataSource ds ) 
		{
			OperationResult<ModelDataSource> res;
			
			try
			{
				if( ds.IsDefault )
				{
					ResetIsDefault();
				}

				var entity = ds
					.ToEntity()
					.IncludeActiveOrgId( DataContext );

				DataContext.DataSources.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( ds )
					.ToModel( PluginManager );
				
				res = OperationResult<ModelDataSource>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDataSource>.Create( ErrorCode.BadCreateDataSource, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<ModelDataSource> Update( ModelDataSource ds )
		{
			OperationResult<ModelDataSource> res;

			try
			{
				if( ds.IsDefault ) 
				{
					ResetIsDefault();
				}

				var entity = DataContext
					.DataSources
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == ds.Id );

				if( null == entity )
					return OperationResult<ModelDataSource>.Create( ErrorCode.BadGetDataSource );
				
				entity.Update( ds );

				DataContext.DataSources.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( ds )
					.ToModel( PluginManager );

				res = OperationResult<ModelDataSource>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDataSource>.Create( ErrorCode.BadUpdateDataSource, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int id )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.DataSources
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetDataSource );

				DataContext.DataSources.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteDataSource, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( string name )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.DataSources
					.ForActiveOrg()
					.FirstOrDefault( x => x.Name == name );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetDataSource );

				DataContext.DataSources.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteDataSource, e );
			}

			return res;
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
			var res = this [ id ];

			if( res.HasError )
				return OperationResult<bool>.Create( ErrorCode.BadGetDataSource );

			var dataSource = res.Value;

			var x = await dataSource.Ping();

			return ( x.HasError || !x.Value ) ? OperationResult<bool>.Create( ErrorCode.NoDatabaseConnection ) : x;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dataSourceId"></param>
		/// <param name="command"></param>
		/// <returns></returns>
		public async Task<OperationResult<TimeSeriesList>> Proxy( int dataSourceId, string command )
		{
			var res = this [ dataSourceId ];

			if( res.HasError )
				return OperationResult<TimeSeriesList>.Create( ErrorCode.BadGetDataSource );

			var dataSource = res.Value;

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
			var res = this [ r.Id ];

			if( res.HasError )
				return OperationResult<TimeSeriesList>.Create( ErrorCode.BadGetDataSource );

			var dataSource = res.Value;

			var x = await dataSource.Query( r );

			return x;
		}
		#endregion
	}
}
