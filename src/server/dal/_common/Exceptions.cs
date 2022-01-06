#region Usings
using System.Collections.Generic;

using EntityTeam = ED.Data.Team;
using ModelTeam = ED.Security.Team;
using static ED.ErrorCode;
#endregion

namespace ED.Data
{
	public class EasyDashboardException : System.Exception 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public ErrorCode Code { get; init; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public EasyDashboardException( ErrorCode code ) => ( Code ) = ( code );
		#endregion
	}

	public class BadGetTeamException : EasyDashboardException 
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetTeamException() : base( ErrorCode.BadGetTeam ) { }
		#endregion
	}

	public class BadGetAnnotationException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetAnnotationException() : base( BadGetAnnotation ) { }
		#endregion
	}

	public class BadGetFolderException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetFolderException() : base( BadGetFolder ) { }
		#endregion
	}

	public class BadUpdateFolderVersionMismatchException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadUpdateFolderVersionMismatchException() : base( BadUpdateFolderVersionMismatch ) { }
		#endregion
	}

	public class BadUpdateFolderPermissionsDuplicateException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadUpdateFolderPermissionsDuplicateException() : base( BadUpdateFolderPermissionsDuplicate ) { }
		#endregion
	}

	public class BadCreateDashboardDuplcateException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadCreateDashboardDuplcateException() : base( BadCreateDashboardDuplicate ) { }
		#endregion
	}


	public class BadGetDashboardException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetDashboardException() : base( BadGetDashboard ) { }
		#endregion
	}

	public class BadUpdateDashboardVersionMismatchException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadUpdateDashboardVersionMismatchException() : base( BadUpdateDashboardVersionMismatch ) { }
		#endregion
	}

	public class BadUpdateDashboardPermissionsDuplicateException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadUpdateDashboardPermissionsDuplicateException() : base( BadUpdateDashboardPermissionsDuplicate ) { }
		#endregion
	}

	public class BadGetDashboardVersionException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetDashboardVersionException() : base( BadGetDashboardVersion ) { }
		#endregion
	}

	public class BadUpdateDashboardPermissionsDowngradeException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadUpdateDashboardPermissionsDowngradeException() : base( BadUpdateDashboardPermissionsDowngrade ) { }
		#endregion
	}

	public class BadGetDataSourceException : EasyDashboardException
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="code"></param>
		public BadGetDataSourceException() : base( BadGetDataSource ) { }
		#endregion
	}
}
