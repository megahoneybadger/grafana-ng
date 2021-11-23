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
}
