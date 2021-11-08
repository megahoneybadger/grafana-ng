#region Usings
using System.Collections.Generic;

using EntityTeam = ED.Data.Team;
using ModelTeam = ED.Security.Team;
#endregion

namespace ED.Data
{
	public abstract class BaseEasyDashboardException : System.Exception 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public abstract ErrorCode Code { get; }
		#endregion

		#region Class initialization
		#endregion
	}

	public class GetTeamsException : BaseEasyDashboardException
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public override ErrorCode Code => ErrorCode.BadGetTeams;
		#endregion
	}


}
