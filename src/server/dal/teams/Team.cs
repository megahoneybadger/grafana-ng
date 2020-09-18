#region Usings
using System.Collections.Generic;

using EntityTeam = ED.Data.Team;
using ModelTeam = ED.Security.Team;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class Team : IOrgSupportingEntity
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
		public string Email { get; set; }
		
		/// <summary>
		/// 
		/// </summary>
		public List<TeamMember> TeamMember { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Preferences Preferences { get; set; }
		/// <summary>
		/// 
		/// </summary>
		/// <value></value>
		public List<FolderPermission> FolderPermissions{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		/// <value></value>
		public List<DashboardPermission> DashboardPermissions { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Name}|{Email}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelTeam ToModel()
		{
			var model = new ModelTeam()
			{
				Id = Id,
				OrgId = OrgId,
				Name = Name,
				Email = Email
			};

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="m"></param>
		public void Update( ModelTeam m ) 
		{
			Name = m.Name;
			Email = m.Email;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class TeamModelExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityTeam ToEntity( this ModelTeam team )
		{
			return new EntityTeam()
			{
				Id = team.Id,
				OrgId = team.OrgId,
				Name = team.Name,
				Email = team.Email
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static ModelTeam AddMemberCount( this ModelTeam model, EntityTeam team )
		{
			model.Bag.MembersCount = team.TeamMember.Count;

			return model;
		}
		#endregion
	}
}
