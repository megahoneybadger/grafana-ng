#region Usings
using System.ComponentModel;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public enum ErrorCode
	{
		#region Class 'Data source' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create datasource" )]
		BadCreateDataSource = 1,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update datasource" )]
		BadUpdateDataSource = 2,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get datasources" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDataSources = 3,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get datasource" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDataSource = 4,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete datasource" )]
		BadDeleteDataSource = 5,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to establish database connection" )]
		NoDatabaseConnection = 10,
		#endregion

		#region Class 'Team' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create team" )]
		BadCreateTeam = 10001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update team" )]
		BadUpdateTeam = 10002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get teams" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetTeams = 10003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get team" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetTeam = 10004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete team" )]
		BadDeleteTeam = 10005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to add member to team" )]
		BadAddTeamMember = 10006,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to remove member from team" )]
		BadRemoveTeamMember = 10007,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get team members" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetTeamMembers = 10008,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get team preferences" )]
		BadGetTeamPreferences = 10009,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update team preferences" )]
		BadUpdateTeamPreferences = 10010,
		#endregion

		#region Class 'User' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create user" )]
		BadCreateUser = 20001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update user" )]
		BadUpdateUser = 20003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get users" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetUsers = 20004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get user" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetUser = 20005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete user" )]
		BadDeleteUser = 20006,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get teams for user" )]
		BadGetUserTeams = 20008,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Invalid username or password" )]
		BadLogin = 20009,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Invalid org membership" )]
		BadOrgMembership = 20017,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to change user password" )]
		BadChangeUserPassword = 20010,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to star dashboard" )]
		BadStarDashboard = 20011,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to unstar dashboard" )]
		BadUnstarDashboard = 20012,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get user profile" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetUserProfile = 20013,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update user preferences" )]
		BadUpdateUserPreferences = 20014,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to change user admin permissions" )]
		BadUpdateUserAdminPermissions = 20015,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to change user active organization" )]
		BadChangeUserContext = 20016,
		#endregion

		#region Class 'API Key' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create an API key" )]
		BadCreateApiKey = 50001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get API key" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetApiKey = 50004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get API keys" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetApiKeys = 50005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete an API key" )]
		BadDeleteApiKey = 50006,
		#endregion

		#region Class 'Folder' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create folder" )]
		BadCreateFolder = 30001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update folder" )]
		BadUpdateFolder = 30003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "The folder has been changed by someone else" )]
		[ErrorHint( ErrorType.BadPrecondition )]
		BadUpdateFolderVersionMismatch = 30007,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get folders" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetFolders = 30004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get folder" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetFolder = 30005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete folder" )]
		BadDeleteFolder = 30006,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get folder permissions" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetFolderPermissions = 30007,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update folder permissions" )]
		BadUpdateFolderPermissions = 30008,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Folder permission already exists" )]
		BadUpdateFolderPermissionsDuplicate = 30009,
		#endregion

		#region Class 'Dashboard' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create a dashboard" )]
		BadCreateDashboard = 40001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "A dashboard with the same name in selected folder already exists" )]
		BadCreateDashboardDuplicate = 40002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update a dashboard" )]
		BadUpdateDashboard = 40003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "The dashboard has been changed by someone else" )]
		[ErrorHint( ErrorType.BadPrecondition )]
		BadUpdateDashboardVersionMismatch = 40007,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get dashboards" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDashboards = 40004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get a dashboard" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDashboard = 40005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete a dashboard" )]
		BadDeleteDashboard = 40006,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get dashboard tags" )]
		BadGetDashboardTags = 40008,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get dashboard versions" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDashboardVersions = 40009,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get dashboard version" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDashboardVersion = 40010,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to restore dashboard" )]
		BadDashboardRestore = 40011,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get dashboard permissions" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetDashboardPermissions = 40012,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Dashboard permission already exists" )]
		BadUpdateDashboardPermissionsDuplicate = 40013,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update dashboard permissions" )]
		BadUpdateDashboardPermissions = 40014,
		/// <summary>
		/// 
		/// </summary>
		[Description( "You can only override a permission to be higher" )]
		BadUpdateDashboardPermissionsDowngrade = 40015,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update a dashboard" )]
		BadUpdateDashboardValidation = 40016,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to import a dashboard" )]
		BadImportDashboard = 40017,
		#endregion

		#region Class 'Playlist' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get playlists" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetPlaylists = 11001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get playlist" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetPlaylist = 11002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete playlist" )]
		BadDeletePlaylist = 11003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create list" )]
		BadCreatePlaylist = 11004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get playlist dashboards" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetPlaylistDashboards = 11005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update playlist" )]
		BadUpdatePlaylist = 11006,
		#endregion

		#region Class 'Org' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create organization" )]
		BadCreateOrg = 12001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update organization" )]
		BadUpdateOrg = 12002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete organization" )]
		BadDeleteOrg = 12003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update default organization" )]
		BadDeleteDefaultOrg = 12012,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get organizations" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetOrgs = 12004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get organization" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetOrg = 12005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get organization members" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetOrgMembers = 12006,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to add member to organization" )]
		BadAddOrgMember = 12007,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete member from organization" )]
		BadDeleteOrgMember = 12008,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update organization member" )]
		BadUpdateOrgMember = 12009,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get org preferences" )]
		BadGetOrgPreferences = 12010,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update org preferences" )]
		BadUpdateOrgPreferences = 12011,
		#endregion

		#region Class 'Annotation' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create annotation" )]
		BadCreateAnnotation = 13001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update annotation" )]
		BadUpdateAnnotation = 13002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update annotation" )]
		BadDeleteAnnotation = 13003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get annotations" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAnnotations = 13004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get annotation" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAnnotation = 13005,
		#endregion

		#region Class 'Alert' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get alerts" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAlerts = 14001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get alert" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAlert = 14002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to pause alert" )]
		BadPauseAlert = 14003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to change alert state" )]
		BadChangeAlertState = 14004,
		#endregion

		#region Class 'Alert notification' properties
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get alert notifications" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAlertNotifications = 15001,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to get alert notification" )]
		[ErrorHint( ErrorType.NotFound )]
		BadGetAlertNotification = 15002,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to create alert notification" )]
		BadCreateAlertNotification = 15003,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to delete alert notification" )]
		BadDeleteAlertNotification = 15004,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to update alert notification" )]
		BadUpdateAlertNotification = 15005,
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to test alert notification" )]
		BadTestAlertNotification = 15006,
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Unknown = 0,
	
		/// <summary>
		/// 
		/// </summary>
		[Description( "Failure to execute database request" )]
		BadDatabaseRequest = 101,
		#endregion
	}
}
