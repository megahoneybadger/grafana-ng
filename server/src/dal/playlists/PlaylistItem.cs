#region Usings
using ED.Playlists;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class PlaylistItem
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int PlaylistId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Value{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Title { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Order { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public PlaylistItemType Type { get; set; }
		#endregion
	}
}
