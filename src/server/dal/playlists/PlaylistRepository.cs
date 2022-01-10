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
using System.Threading.Tasks;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class PlaylistRepository : Repository
	{
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

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Task<ModelPlaylists> GetPlaylists() =>
			DataContext
				.Playlists
				.ForActiveOrg()
				.Select( x => x.ToModel() )
				.ToListAsync();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelPlaylist> GetPlaylist( int id )
		{
			var entity = await DataContext
				.Playlists
				.Include( x => x.Items )
				.FirstOrDefaultAsync( x => x.Id == id );

			var model = entity?.ToModel();

			return model;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelPlaylist> Create( ModelPlaylist p )
		{
			var entity = p.ToEntity();

			await DataContext.AddAsync( entity );

			await DataContext.SaveChangesAsync();

			var model = entity.ToModel();
			p.Id = entity.Id;

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelPlaylist> Update( ModelPlaylist p )
		{
			var entity = await DataContext
				.Playlists
				.Include( x => x.Items )
				.FirstOrDefaultAsync( x => x.Id == p.Id );

			if( null == entity )
				throw new BadGetPlaylistException();

			entity.Update( p );

			await DataContext.SaveChangesAsync();

			var model = entity.ToModel();

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
				.Playlists
				.FindAsync( id );

			if( null == entity )
				throw new BadGetPlaylistException();

			DataContext.Remove( entity );

			int res = await DataContext.SaveChangesAsync();

			return ( 0 != res );
		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelDashboards> GetDashboards( int id )
		{
			var dashboards = new List<ModelDashboard>();

			var entity = await DataContext
				.Playlists
				.Include( x => x.Items )
				.FirstOrDefaultAsync( x => x.Id == id );

			if( null == entity )
				throw new BadGetPlaylistException();

			dashboards.AddRange( await SearchDashboardsById( entity ) );

			dashboards.AddRange( await SearchDashboardsByTags( entity ) );

			dashboards = Sort( entity, dashboards );

			return dashboards;
		}
		/// <summary>
		/// 
		/// </summary>
		private async Task<ModelDashboards> SearchDashboardsById( EntityPlaylist entity ) 
		{
			var repo = new DashboardRepository( DataContext );

			var ids = entity
				.Items
				.Where( x => x.Type == Playlists.PlaylistItemType.DashboardById )
				.Where( x => int.TryParse( x.Value, out int res ) )
				.Select( x => Convert.ToInt32( x.Value ) )
				.ToList();

			var res = await repo.Search( new DashboardSearchFilter()
			{
				DashboardIds = ids
			} );

			//var col = ( !res.HasError ) ?
			//	res.Value.Dashboards : Enumerable.Empty<ModelDashboard>();

			//return col.ToList();
			return res.Dashboards.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		private async Task<ModelDashboards> SearchDashboardsByTags( EntityPlaylist entity )
		{
			var repo = new DashboardRepository( DataContext );

			var tags = entity
				.Items
				.Where( x => x.Type == Playlists.PlaylistItemType.DashboardByTag )
				.Select( x => x.Value )
				.ToList();

			var res = await repo.Search( new DashboardSearchFilter()
			{
				Tags = tags,
				TagOperator = SearchOperator.Or
			} );

			//var col = ( !res.HasError ) ?
			//	res.Value.Dashboards : Enumerable.Empty<ModelDashboard>();

			return res.Dashboards.ToList();
			//return null;
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
