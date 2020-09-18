#region Usings
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardVersion : DomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Version { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? ParentVersion { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? RestoredFrom { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Message { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Data { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{DashboardId}|{ParentVersion ?? 0 }->{Version}";
		}
		#endregion
	}
}
