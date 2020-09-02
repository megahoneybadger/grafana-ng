#region Usings
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class TeamMember
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int TeamId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int UserId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Team Team { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public TeamMember() 
		{
		}
		/// <summary>
		/// 
		/// </summary>
		public TeamMember( int teamId, int userId ) 
		{
			TeamId = teamId;
			UserId = userId;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{TeamId}<->{UserId}";
		}
		#endregion
	}
}
