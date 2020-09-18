#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Playlists
{
	/// <summary>
	/// 
	/// </summary>
	public class Playlist : DomainModel
	{
		#region Class properties
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
		public List<Item> Items { get; set; } = new List<Item>();
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
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class Item : DomainModel
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Title { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Value { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int Order { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public PlaylistItemType Type { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Id}|{Title}|{Value}[{Type}]|{Order}";
			}
			#endregion
		}
		#endregion
	}
}
