#region Usings
using EntityTag = ED.Data.DashboardTag;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardTag
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Term { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{DashboardId}|{Term}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityTag ToEntity( EntityTag t )
		{
			return new EntityTag()
			{
				Id = t.Id,
				DashboardId = t.DashboardId,
				Term = t.Term
			};
		}
		#endregion
	}
}
