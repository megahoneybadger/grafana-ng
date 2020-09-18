#region Usings
using ED.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;
using ModelPlaylist = ED.Playlists.Playlist;
using ModelPlaylists = System.Collections.Generic.List<ED.Playlists.Playlist>;
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
			
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetPlaylists() =>
			Repo
				.All
				.ToActionResult( x => ToGetPlaylistsReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}" )]
		public IActionResult GetPlaylist( int id ) =>
			Repo[ id ]
				.ToActionResult( x => ToGetPlaylistReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{id}/items" )]
		public IActionResult GetPlaylistItems( int id ) =>
			Repo [ id ]
				.ToActionResult( x => ToGetPlaylistItemsReply( x.Value ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{id}/dashboards" )]
		public IActionResult GetPlaylistDashboards( int id ) =>
			Repo
				.GetDashboards( id )
				.ToActionResult( x => ToGetPlaylistDashboardsReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost()]
		public IActionResult Create( PlaylistRequest r ) =>
			Repo
				.Create( r.ToModel() )
				.ToActionResult( x => ToGetPlaylistShortReply( x.Value ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}" )]
		public IActionResult Update( int id, PlaylistRequest r ) =>
			Repo
				.Update( r.ToModel( id ) )
				.ToActionResult( x => ToGetPlaylistReply( x ) );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}")]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id )
				.ToActionResult( x => new {  Message = "Playlist deleted" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private object ToGetPlaylistsReply( OperationResult<ModelPlaylists> op )
		{
			return op
				.Value
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
		private object ToGetPlaylistReply( OperationResult<ModelPlaylist> op )
		{
			var p = op.Value;

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
					Type = ( x.Type == Playlists.PlaylistItemType.DashboardById ) ?
						PlaylistRequest.TYPE_BY_ID : PlaylistRequest.TYPE_BY_TAG,
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
		private object ToGetPlaylistDashboardsReply( OperationResult<ModelDashboards> op )
		{
			return op
				.Value
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
			#region Class constants
			/// <summary>
			/// 
			/// </summary>
			public const string TYPE_BY_TAG = "dashboard_by_tag";
			/// <summary>
			/// 
			/// </summary>
			public const string TYPE_BY_ID = "dashboard_by_id";
			#endregion

			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[ Required]
			public string Name { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Interval { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public List<Item> Items { get; set; } = new List<Item>();
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Name}|{Interval}";
			}
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
							Type = ( x.Type == TYPE_BY_ID ) ?
								Playlists.PlaylistItemType.DashboardById :
								Playlists.PlaylistItemType.DashboardByTag
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
				public string Type { get; set; }
				#endregion

				#region Class public methods
				/// <summary>
				/// 
				/// </summary>
				/// <returns></returns>
				public override string ToString()
				{
					return $"{Title}|{Value} [{Type}]|{Order}";
				}
				#endregion
			}
			#endregion
		}
		#endregion
	}
}