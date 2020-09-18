#region Usings
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		internal protected DataContext DataContext { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		public Repository( DataContext dc ) 
		{
			DataContext = dc;
		}
		#endregion
	}
}
