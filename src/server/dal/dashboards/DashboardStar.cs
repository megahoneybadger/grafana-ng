#region Usings
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardStar
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int UserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Dashboard Dashboard { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public DashboardStar() 
		{
		}
		/// <summary>
		/// 
		/// </summary>
		public DashboardStar( int userId, int dashboardId ) 
		{
			UserId = userId;
			DashboardId = dashboardId;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{UserId}<->{DashboardId}";
		}
		#endregion
	}
}
