#region Usings
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class CompareRequest 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int BaseDashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int BaseVersion { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int NewDashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int NewVersion { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public CompareType DiffType { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{BaseDashboardId}|{BaseVersion} vs {NewDashboardId}{NewVersion} [{DiffType}]";
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public enum CompareType
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Json,
		/// <summary>
		/// 
		/// </summary>
		Basic
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public class CompareReply
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Base { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string New { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Diff { get; set; }
		#endregion
	}

}
