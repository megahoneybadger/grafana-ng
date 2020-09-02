#region Usings
using System.Collections.Generic;

using EntityOrg = ED.Data.Org;
using ModelOrg = ED.Security.Org;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class Org
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Address1{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Address2 { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string City{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string State { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ZipCode{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Country { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string BillingEmail { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<OrgMember> OrgMember { get; set; } = new List<OrgMember>();
		/// <summary>
		/// 
		/// </summary>
		public List<DataSource> DataSources { get; set; } = new List<DataSource>();
		/// <summary>
		/// 
		/// </summary>
		public List<Team> Teams { get; set; } = new List<Team>();
		/// <summary>
		/// 
		/// </summary>
		public List<ApiKey> Keys{ get; set; } = new List<ApiKey>();
		/// <summary>
		/// 
		/// </summary>
		public List<Folder> Folders { get; set; } = new List<Folder>();
		/// <summary>
		/// 
		/// </summary>
		public List<Dashboard> Dashboards { get; set; } = new List<Dashboard>();
		/// <summary>
		/// 
		/// </summary>
		public List<Annotation> Annotations { get; set; } = new List<Annotation>();
		/// <summary>
		/// 
		/// </summary>
		public Preferences Preferences { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{Name}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelOrg ToModel()
		{
			var model = new ModelOrg()
			{
				Id = Id,
				Name = Name,
			};

			return model;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class OrgModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="org"></param>
		/// <returns></returns>
		public static EntityOrg ToEntity( this ModelOrg org )
		{
			return new EntityOrg()
			{
				Id = org.Id,
				Name = org.Name,
			};
		}
		#endregion
	}
}
