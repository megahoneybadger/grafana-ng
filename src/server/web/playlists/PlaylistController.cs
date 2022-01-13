#region Usings
using ED.Data;
using ED.Playlists;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using static ED.ErrorCode;
using ActionResultTask = System.Threading.Tasks.Task<Microsoft.AspNetCore.Mvc.IActionResult>;
using ModelDashboards = System.Collections.Generic.IEnumerable<ED.Dashboards.Dashboard>;
using ModelPlaylist = ED.Playlists.Playlist;
using ModelPlaylists = System.Collections.Generic.IEnumerable<ED.Playlists.Playlist>;
#endregion

namespace ED.Web.Dashboards
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/playlist/
	/// </summary>
	[Microsoft.AspNetCore.Authorization.Authorize]
	[Route( "api/playlists" )]
	public class PlaylistController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public PlaylistRepository Repo => GetRepo<PlaylistRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public PlaylistController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{
			//dc.FillDatabase();
			//dc.AddPlaylists();

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( Error = BadGetPlaylists )]
		public async ActionResultTask GetPlaylists() =>
			( await Repo
				.GetPlaylists() )
				.ToActionResult( x => ToGetPlaylistsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}", Error = BadGetPlaylist )]
		public async ActionResultTask GetPlaylist( int id ) =>
			( await Repo
				.GetPlaylist( id ))
				.ToActionResult( x => ToGetPlaylistReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}/items", Error = BadGetPlaylist )]
		public async ActionResultTask GetPlaylistItems( int id ) =>
			( await Repo
				.GetPlaylist( id ) )
				.ToActionResult( x => ToGetPlaylistItemsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{id}/dashboards", Error = BadGetPlaylistDashboards )]
		public async ActionResultTask GetPlaylistDashboards( int id ) =>
			( await Repo
				.GetDashboards( id ))
				.ToActionResult( x => ToGetPlaylistDashboardsReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( Error = BadCreatePlaylist )]
		public async ActionResultTask Create( PlaylistRequest r ) =>
			( await Repo
				.Create( r.ToModel() ))
				.ToActionResult( x => ToGetPlaylistShortReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}", Error = BadUpdatePlaylist )]
		public async ActionResultTask Update( int id, PlaylistRequest r ) =>
			( await Repo
				.Update( r.ToModel( id ) ))
				.ToActionResult( x => ToGetPlaylistReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}", Error = BadDeletePlaylist )]
		public async ActionResultTask Delete( int id ) =>
			( await Repo
				.Delete( id ) )
				.ToActionResult( x => new {  Message = "Playlist deleted" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistsReply( ModelPlaylists list )
		{
			return list
				.Select( x => ToGetPlaylistShortReply( x ) )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistShortReply( ModelPlaylist x )
		{
			return new
			{
				x.Id,
				x.Name,
				x.Interval
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistReply( ModelPlaylist p )
		{
			return new
			{
				p.Id,
				p.Name,
				p.Interval,
				p.OrgId,
				Items = ToGetPlaylistItemsReply( p )
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistItemsReply( ModelPlaylist p )
		{
			return p
				.Items
				.Select( x => new
				{
					x.Id,
					PlaylistId = p.Id,
					x.Type,
					x.Value,
					x.Order,
					x.Title
				} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistDashboardsReply( ModelDashboards list )
		{
			return list
				.Select( x => new 
				{
					x.Id,
					x.Title,
					x.Tags
				} )
				.ToList();
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class PlaylistRequest 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Name { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Interval { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public List<Item> Items { get; set; } = new ();
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString() => $"{Name}|{Interval}";
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelPlaylist ToModel( int id = 0 )   
			{
				return new ModelPlaylist()
				{
					Id = id,
					Name = Name,
					Interval = Interval,
					Items = Items
						.Select( x => new ModelPlaylist.Item()
						{
							Title = x.Title,
							Order = x.Order,
							Value = x.Value,
							Type = x.Type
						} )
						.ToList()
				};
			}
			#endregion

			#region Class internal structs
			/// <summary>
			/// 
			/// </summary>
			public class Item 
			{
				#region Class properties
				/// <summary>
				/// 
				/// </summary>
				[Required]
				public string Title { get; set; }
				/// <summary>
				/// 
				/// </summary>
				[Required]
				public string Value { get; set; }
				/// <summary>
				/// 
				/// </summary>
				[Required]
				public int Order { get; set; }
				/// <summary>
				/// 
				/// </summary>
				[Required]
				public PlaylistItemType Type { get; set; }
				#endregion

				#region Class public methods
				/// <summary>
				/// 
				/// </summary>
				/// <returns></returns>
				public override string ToString() => $"{Title}|{Value} [{Type}]|{Order}";
				
				#endregion
			}
			#endregion
		}
		#endregion
	}
}