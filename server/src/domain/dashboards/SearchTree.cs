#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class SearchTree 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Folder> Folders{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Dashboard> Dashboards{ get; set; }
		#endregion
	}
}
