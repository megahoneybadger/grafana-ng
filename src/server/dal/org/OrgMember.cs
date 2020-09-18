#region Usings
using ED.Security;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class OrgMember
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int UserId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role Role { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Org Org { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public OrgMember()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="orgId"></param>
		/// <param name="userId"></param>
		public OrgMember( int orgId, int userId )
		{
			OrgId = orgId;
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
			return $"{OrgId}<->{UserId}";
		}
		#endregion
	}
}
