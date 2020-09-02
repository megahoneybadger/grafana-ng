#region Usings
using ED.Security;

using ModelPreferences = ED.Security.Preferences;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelUserPreferences = ED.Security.UserPreferences;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class Preferences : IOrgSupportingEntity
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
		public Org Org { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? UserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? TeamId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Team Team { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? HomeDashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public TimeZone TimeZone { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Theme Theme { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{TeamId ?? UserId}|{HomeDashboardId}|{Theme}|{TimeZone}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="pref"></param>
		public void Update( ModelPreferences pref )
		{
			HomeDashboardId = pref.HomeDashboardId;
			Theme = pref.Theme;
			TimeZone = pref.TimeZone;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelUserPreferences ToUserModel()
		{
			return new ModelUserPreferences()
			{
				Id = Id,
				OrgId = OrgId,
				UserId = UserId.Value,

				HomeDashboardId = HomeDashboardId,
				TimeZone = TimeZone,
				Theme = Theme
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelTeamPreferences ToTeamModel()
		{
			return new ModelTeamPreferences()
			{
				Id = Id,
				OrgId = OrgId,
				TeamId = TeamId.Value,

				HomeDashboardId = HomeDashboardId,
				TimeZone = TimeZone,
				Theme = Theme
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelPreferences ToModel()
		{
			return new ModelPreferences()
			{
				Id = Id,
				OrgId = OrgId,

				HomeDashboardId = HomeDashboardId,
				TimeZone = TimeZone,
				Theme = Theme
			};
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class PreferencesExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Preferences ToEntity( this ModelPreferences d )
		{
			return new Preferences()
			{
				Id = d.Id,
				OrgId = d.OrgId,

				HomeDashboardId = d.HomeDashboardId,
				Theme = d.Theme,
				TimeZone = d.TimeZone
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Preferences ToTeamEntity( this ModelTeamPreferences d )
		{
			return new Preferences()
			{
				Id = d.Id,
				OrgId = d.OrgId,
				TeamId = d.TeamId,

				HomeDashboardId = d.HomeDashboardId,
				Theme = d.Theme,
				TimeZone = d.TimeZone
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Preferences ToUserEntity( this ModelUserPreferences d )
		{
			return new Preferences()
			{
				Id = d.Id,
				OrgId = d.OrgId,
				UserId = d.UserId,

				HomeDashboardId = d.HomeDashboardId,
				Theme = d.Theme,
				TimeZone = d.TimeZone
			};
		}
		#endregion
	}
}
