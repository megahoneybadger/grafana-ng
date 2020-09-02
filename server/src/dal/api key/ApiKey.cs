#region Usings
using ED.Security;
using EntityApiKey = ED.Data.ApiKey;
using ModelApiKey = ED.Security.ApiKey;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class ApiKey : IOrgSupportingEntity
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Key{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Role Role{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Name}|{Role}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelApiKey ToModel()
		{
			return new ModelApiKey()
			{
				Id = Id,
				OrgId = OrgId,
				Name = Name,
				Role = Role,
			};
		}

		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class ApiKeyExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityApiKey ToEntity( this ModelApiKey key )
		{
			return new EntityApiKey()
			{
				Id = key.Id,
				OrgId = key.OrgId,
				Name = key.Name,
				Role = key.Role,
				Key = key.Bag.Token
			};
		}
		#endregion
	}
}
