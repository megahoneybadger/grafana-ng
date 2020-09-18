#region Usings
using System.Collections.Generic;
using System.Linq;
using ModelPlaylist = ED.Playlists.Playlist;
using EntityPlaylist = ED.Data.Playlist;
using System;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class Playlist
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Interval { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<PlaylistItem> Items { get; set; } = new List<PlaylistItem>();
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{Name}|{Interval}|{Items.Count} items";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelPlaylist ToModel()
		{
			return new ModelPlaylist()
			{
				Id = Id,
				OrgId = OrgId,
				Name = Name,
				Interval = Interval,
				Items = Items
				.Select( x => new ModelPlaylist.Item() 
				{
					Id = x.Id,
					Order = x.Order,
					Value = x.Value,
					Type = x.Type,
					Title = x.Title
				} )
				.ToList()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="p"></param>
		public void Update( ModelPlaylist p ) 
		{
			Name = p.Name;
			Interval = p.Interval;

			Items = p.ToEntity().Items;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class PlaylistModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public static EntityPlaylist ToEntity( this ModelPlaylist p )
		{
			var entity = new EntityPlaylist()
			{
				Id = p.Id,
				OrgId = p.OrgId,
				Name = p.Name,
				Interval = p.Interval,
				Items = p
					.Items
					.Select( x => new PlaylistItem()
					{
						Id = x.Id,
						Order = x.Order,
						Title = x.Title,
						PlaylistId = p.Id,
						Type = x.Type,
						Value = x.Value
					} )
					.ToList()
			};

			return entity;
		}

		#endregion
	}
}
