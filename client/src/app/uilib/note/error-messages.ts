
export class ErrorMessages{
	static readonly BAD_GET_DATA_SOURCE = "Failure to get data source";
	static readonly BAD_GET_DATA_SOURCES = "Failure to get data sources";
	static readonly BAD_ADD_DATA_SOURCE = "Failure to add data source";
	static readonly BAD_UPDATE_DATA_SOURCE = "Failure to update data source";
	static readonly BAD_DELETE_DATA_SOURCE = "Failure to delete data source";
	static readonly BAD_EXEC_PROXY = "Failure to execute query";

	static readonly BAD_GET_USER = "Failure to get user";
	static readonly BAD_GET_USERS = "Failure to get users";
	static readonly BAD_CREATE_USER = "Failure to create user";
	static readonly BAD_UPDATE_USER = "Failure to update user";
	static readonly BAD_CHANGE_USER_PASSWORD = "Failure to change user password";
	static readonly BAD_DELETE_USER = "Failure to delete user";
	static readonly BAD_PASSWORD_CHANGE = "Failure to change user password";
	static readonly BAD_ADMIN_PERM_CHANGE = "Failure to change user admin permissions";
	static readonly BAD_GET_USER_PREF = "Failure to get user preferences";
	static readonly BAD_GET_USER_ORGS = "Failure to get user organizations";
	static readonly BAD_UPDATE_USER_PROF = "Failure to update user profile";
	static readonly BAD_UPDATE_USER_PREF = "Failure to update user preferences";

	static readonly BAD_GET_TEAM = "Failure to get team";
	static readonly BAD_GET_TEAMS = "Failure to get teams";
	static readonly BAD_CREATE_TEAM = "Failure to create team";
	static readonly BAD_UPDATE_TEAM = "Failure to update team";
	static readonly BAD_UPDATE_TEAM_PREF = "Failure to update team preferences";
	static readonly BAD_DELETE_TEAM = "Failure to delete team";
	static readonly BAD_DELETE_TEAM_MEMBER = "Failure to delete team member";
	static readonly BAD_ADD_TEAM_MEMBER = "Failure to add user to team";
	static readonly BAD_GET_TEAM_MEMBERS = "Failure to get team members";

	static readonly BAD_CREATE_FOLDER = "Failure to create folder";
	static readonly BAD_DELETEE_FOLDER = "Failure to delete folder";

	



	static readonly BAD_GET_ORGS = "Failure to get organizations";
	static readonly BAD_GET_ORG = "Failure to get organization";
	static readonly BAD_CREATE_ORG = "Failure to create organization";
	static readonly BAD_UPDATE_ORG = "Failure to update organization";
	static readonly BAD_DELETE_ORG = "Failure to delete organization";
	static readonly BAD_GET_ORG_MEMBERS = "Failure to get organization members";
	static readonly BAD_ADD_ORG_MEMBER = "Failure to add member to organization";
	static readonly BAD_DELETE_ORG_MEMBER = "Failure to delete member from organization";
	static readonly BAD_UPDATE_ORG_MEMBER = "Failure to update organization member";
	static readonly BAD_UPDATE_ORG_PREF = "Failure to update organization preferences";

	static readonly BAD_GET_KEYS = "Failure to get API keys";
	static readonly BAD_CREATE_KEY = "Failure to create API key";
	static readonly BAD_DELETE_KEY = "Failure to delete API key";

	static readonly BAD_CREATE_ANN = "Failure to create annotation";
	static readonly BAD_UPDATE_ANN = "Failure to update annotation";
	static readonly BAD_DELETE_ANN = "Failure to delete annotation";
	static readonly BAD_DELETE_ANNS = "Failure to delete annotations";
	static readonly BAD_GET_ANNS = "Failure to get annotations";


	static readonly BAD_GET_FOLDER = "Failure to get folder";
	static readonly BAD_UPDATE_FOLDER = "Failure to update folder";
	static readonly BAD_DELETE_FOLDER = "Failure to delete folder";
	static readonly BAD_GET_FOLDER_PERMS = "Failure to get folder permissions";
	static readonly BAD_UPDATE_FOLDER_PERMS = "Failure to update folder permissions";

	static readonly BAD_CREATE_DASHBOARD = "Failure to create dashboard";
	static readonly BAD_UPDATE_DASHBOARD = "Failure to update dashboard";
	static readonly BAD_DELETE_DASHBOARD = "Failure to delete dashboard";
	static readonly BAD_COMP_DASHBOARDS = "Failure to compare dashboards";
	static readonly BAD_GET_VERSIONS = "Failure to load dashboard versions";
	static readonly BAD_GET_DB_PERMS = "Failure to get dashboard permissions";
	static readonly BAD_UPDATE_DB_PERMS = "Failure to update dashboard permissions";
	static readonly BAD_RESTORE_DASHBOARD = "Failure to restore dashboard";

	static readonly BAD_STAR_DASHBOARD = "Failure to star dashboard";
	static readonly BAD_UNSTAR_DASHBOARD = "Failure to unstar dashboard";
	static readonly BAD_ALERT_EVAL = "Failure to evaluate alert";
	
	static readonly BAD_GET_ALERT_RULES = "Failure to get alert rules";
	static readonly BAD_PAUSE_ALERT = "Failure to pause alert";

	static readonly BAD_GET_ALERT_NOTIFS = "Failure to get alert notifications";
	static readonly BAD_GET_ALERT_NOTIF = "Failure to get alert notification";
	static readonly BAD_CREATE_ALERT_NOTIF = "Failure to create alert notification";
	static readonly BAD_UPDATE_ALERT_NOTIF = "Failure to update alert notification";
	static readonly BAD_DELETE_ALERT_NOTIF = "Failure to delete alert notification";
	static readonly BAD_TEST_ALERT_NOTIF = "Failure to test alert notification";
}

export class ResultCodes{
	static readonly BAD_CREATE_DASHBOARD_DUPLICATE = "BadCreateDashboardDuplicate";//= 40002;
}