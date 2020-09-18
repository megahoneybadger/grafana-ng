#region Usings
using System;
#endregion

namespace ED.Drivers.Influx
{
	public class UserQueryBuilder : IUserQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual string GetUsers()
		{
			return QueryStatements.GetUsers;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="password"></param>
		/// <param name="isAdmin"></param>
		/// <returns></returns>
		public virtual string CreateUser( string username,
			string password, bool isAdmin = false )
		{
			return String.Format( QueryStatements.CreateUser,
				username, password, isAdmin ? QueryStatements.WithAllPrivileges : null );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public virtual string DropUser( string username )
		{
			return String.Format( QueryStatements.DropUser, username );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="password"></param>
		/// <returns></returns>
		public virtual string SetPassword( string username, string password )
		{
			return String.Format( QueryStatements.SetPassword, username, password );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public virtual string GetPrivileges( string username )
		{
			return String.Format( QueryStatements.GetGrants, username );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public virtual string GrantAdministator( string username )
		{
			return String.Format( QueryStatements.GrantAdministrator, username );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public virtual string RevokeAdministrator( string username )
		{
			return String.Format( QueryStatements.RevokeAdministrator, username );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="privilege"></param>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public virtual string GrantPrivilege( string username,
			Privileges privilege, string dbName )
		{
			return String.Format( QueryStatements.GrantPrivilege,
				privilege.ToString().ToUpper(), dbName, username );
		}

		public virtual string RevokePrivilege( string username,
			Privileges privilege, string dbName )
		{
			return String.Format( QueryStatements.RevokePrivilege,
				privilege.ToString().ToUpper(), dbName, username );
		}
		#endregion
	}
}
