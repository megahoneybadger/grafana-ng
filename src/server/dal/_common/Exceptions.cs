#region Usings
using System.Collections.Generic;

using EntityTeam = ED.Data.Team;
using ModelTeam = ED.Security.Team;
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
		public BadGetAnnotationException() : base( ErrorCode.BadGetAnnotation ) { }
		#endregion
	}
}
