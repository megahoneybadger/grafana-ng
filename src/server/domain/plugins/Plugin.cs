#region Usings
using System.IO;
#endregion

namespace ED.Plugins
{
	/// <summary>
	/// 
	/// </summary>
	public class Plugin
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public Kind Type { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public Information Info { get; init; } = new Information();
		/// <summary>
		/// 
		/// </summary>
		public string Module { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string BaseUrl { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Category { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Folder { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string IsCorePlugin { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string BackendLibrary { get; init; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => Id;
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Plugin Copy() 
		{
			return this;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class Information 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Description { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public string Version { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public Creator Author { get; init; } = new Creator();
			/// <summary>
			/// 
			/// </summary>
			public Images Logos { get; init; } = new Images();
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString() => Description;
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class Creator
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Name { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public string Url { get; init; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString() => Name;
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class Images
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Small { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public string Large { get; init; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public void Normalize( string root ) 
			{
				//if( !string.IsNullOrEmpty( Large ) )
				//{
				//	Large = Path.Combine( root, Large );
				//}

				//if( !string.IsNullOrEmpty( Small ) )
				//{
				//	Small = Path.Combine( root, Small );
				//}
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public enum Kind 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Datasource,
			/// <summary>
			/// 
			/// </summary>
			Widget
			#endregion
		}
		#endregion
	}
}


