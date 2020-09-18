#region Usings
using Newtonsoft.Json;
using System.Dynamic;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public class DomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[JsonIgnore]
		public dynamic Bag { get; set; } = new ExpandoObject();
		#endregion
	}

	public class OrgSupportingDomainModel : DomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		#endregion
	}
}

