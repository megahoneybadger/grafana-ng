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
		public override string ToString() => $"{Id}|{Name}|{Interval}|{Items.Count} items";
		/// <summary>
		/// 
		/// </summary>
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( object.ReferenceEquals( this, obj ) )
				return true;

			var t = obj as Playlist;

			if( null == t )
				return false;

			if( !Id.Equals( t.Id ) )
				return false;

			if( OrgId != t.OrgId )
				return false;

			if( Name != t.Name )
				return false;

			if( Interval != t.Interval )
				return false;

			var itemsA = Items ?? new();
			var itemsB = t.Items ?? new();

			if( itemsB.Count != itemsA.Count )
				return false;

			for( int i = 0; i < Items.Count; ++i ) 
			{
				if( !itemsA [ i ].Equals( itemsB [ i ] ) )
					return false;
			}

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = 17;

			hash = hash * 23 + Id.GetHashCode();
			hash = hash * 23 + OrgId.GetHashCode();
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Interval.GetHashCode();

			if( null != Items && Items.Count > 0 ) 
			{
				foreach( var item in Items ) 
				{
					hash = hash * 23 + item.GetHashCode();
				}
			}

			return hash;
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
			public override string ToString() => $"{Id}|{Title}|{Value}[{Type}]|{Order}";
			/// <summary>
			/// 
			/// </summary>
			/// <param name="obj"></param>
			/// <returns></returns>
			public override bool Equals( object obj )
			{
				if( null == obj )
					return false;

				if( object.ReferenceEquals( this, obj ) )
					return true;

				var t = obj as Item;

				if( null == t )
					return false;

				if( !Id.Equals( t.Id ) )
					return false;

				if( Title != t.Title )
					return false;

				if( Value != t.Value )
					return false;

				if( Order != t.Order )
					return false;

				if( Type != t.Type )
					return false;

				return true;
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override int GetHashCode()
			{
				int hash = 17;

				hash = hash * 23 + Id.GetHashCode();
				hash = hash * 23 + Title.GetHashCode();
				hash = hash * 23 + Value.GetHashCode();
				hash = hash * 23 + Order.GetHashCode();
				hash = hash * 23 + Type.GetHashCode();

				return hash;
			}
			#endregion
		}
		#endregion
	}
}
