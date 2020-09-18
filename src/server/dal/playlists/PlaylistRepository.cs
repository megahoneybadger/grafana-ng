#region Usings
using System;
using System.Collections.Generic;
using System.Linq;

using EntityPlaylist = ED.Data.Playlist;
using ModelPlaylist = ED.Playlists.Playlist;
using ModelPlaylists = System.Collections.Generic.List<ED.Playlists.Playlist>;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;

using Microsoft.EntityFrameworkCore;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class PlaylistRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelPlaylists> All
		{
			get
			{
				var list = new ModelPlaylists();
				OperationResult<ModelPlaylists> res = null;

				try
				{
					var playlists = DataContext
						.Playlists
						.Include( x => x.Items )
						.ToList()
						.Select( x => x.ToModel()	)
						.ToList();

					res = OperationResult<ModelPlaylists>.Create( playlists );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelPlaylists>.Create( ErrorCode.BadGetPlaylists, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelPlaylist> this [ int id ]
		{
			get
			{
				OperationResult<ModelPlaylist> res = null;

				try
				{
					var data = DataContext
						.Playlists
						.Include( x => x.Items )
						.FirstOrDefault( x =>  x.Id == id );

					var playlist = ( null == data ) ? null :	data.ToModel();

					res = OperationResult<ModelPlaylist>.Create(
						() => null != playlist, playlist, ErrorCode.BadGetPlaylist );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelPlaylist>.Create( ErrorCode.BadGetPlaylist, e );
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
		public PlaylistRepository( DataContext dc )
			: base( dc )
		{

		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelPlaylist> Create( ModelPlaylist p )
		{
			OperationResult<ModelPlaylist> res;

			try
			{
				var entity = p.ToEntity();

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity.ToModel();
				p.Id = entity.Id;

				res = OperationResult<ModelPlaylist>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPlaylist>.Create( ErrorCode.BadCreatePlaylist, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelPlaylist> Update( ModelPlaylist p )
		{
			OperationResult<ModelPlaylist> res;

			try
			{
				var entity = DataContext
					.Playlists
					.Include( x => x.Items )
					.FirstOrDefault( x => x.Id == p.Id );

				if( null == entity )
					return OperationResult<ModelPlaylist>.Create( ErrorCode.BadGetPlaylist );

				entity.Update( p );

				DataContext.SaveChanges();

				var model = entity.ToModel();

				res = OperationResult<ModelPlaylist>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPlaylist>.Create( ErrorCode.BadUpdatePlaylist, e );
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
					.Playlists
					.Find( id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetPlaylist );

				DataContext.Remove( entity );

				int count = DataContext.SaveChanges();

				res = OperationResult<bool>.Create(
					() => count > 0, true, ErrorCode.BadDeletePlaylist );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeletePlaylist, e );
			}

			return res;
		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelDashboards> GetDashboards( int id )
		{
			OperationResult<ModelDashboards> res = null;
			var dashboards = new List<ModelDashboard>();

			try
			{
				var entity = DataContext
					.Playlists
					.Include( x => x.Items )
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<ModelDashboards>.Create( ErrorCode.BadGetPlaylist );

				dashboards.AddRange( SearchDashboardsById( entity ) );

				dashboards.AddRange( SearchDashboardsByTags( entity ) );

				dashboards = Sort( entity, dashboards );

				res = OperationResult<ModelDashboards>.Create( dashboards );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelDashboards>.Create( ErrorCode.BadGetPlaylistDashboards, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		private ModelDashboards SearchDashboardsById( EntityPlaylist entity ) 
		{
			var repo = new DashboardRepository( DataContext );

			var ids = entity
				.Items
				.Where( x => x.Type == Playlists.PlaylistItemType.DashboardById )
				.Where( x => int.TryParse( x.Value, out int res ) )
				.Select( x => Convert.ToInt32( x.Value ) )
				.ToList();

			var res = repo.Search( new DashboardSearchFilter()
			{
				DashboardIds = ids
			} );

			var col = ( !res.HasError ) ?
				res.Value.Dashboards : Enumerable.Empty<ModelDashboard>();

			return col.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		private ModelDashboards SearchDashboardsByTags( EntityPlaylist entity )
		{
			var repo = new DashboardRepository( DataContext );

			var tags = entity
				.Items
				.Where( x => x.Type == Playlists.PlaylistItemType.DashboardByTag )
				.Select( x => x.Value )
				.ToList();

			var res = repo.Search( new DashboardSearchFilter()
			{
				Tags = tags,
				TagOperator = SearchOperator.Or
			} );

			var col = ( !res.HasError ) ?
				res.Value.Dashboards : Enumerable.Empty<ModelDashboard>();

			return col.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="entity"></param>
		/// <param name="dashboards"></param>
		private ModelDashboards Sort( EntityPlaylist entity, ModelDashboards dashboards ) 
		{
			var list = new ModelDashboards();

			foreach( var item in entity.Items ) 
			{
				if( item.Type == Playlists.PlaylistItemType.DashboardById )
				{
					var existing = dashboards.FirstOrDefault( x =>
						x.Id == Convert.ToInt32( item.Value ));

					if( null != existing ) 
					{
						list.Add( existing );
					}
				}
				else 
				{
					list.AddRange( dashboards
						.Where( x => x.Tags.Contains( item.Value ) )
						.ToList() );
				}
			}

			return list;
		}
		#endregion
	}
}
