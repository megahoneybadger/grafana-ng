#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class UserClientModule : ClientModuleBase, IUserClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IUserQueryBuilder _userQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly IUserResponseParser _userResponseParser;
		#endregion

		#region Class initialization
		public UserClientModule( 
			IInfluxDbRequestClient requestClient,
			IUserQueryBuilder userQueryBuilder,
			IUserResponseParser userResponseParser )
				: base( requestClient )
		{
			_userQueryBuilder = userQueryBuilder;
			_userResponseParser = userResponseParser;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public async Task<IEnumerable<User>> GetUsersAsync()
		{
			var query = _userQueryBuilder.GetUsers();
			var series = await base.ResolveSingleGetSeriesResultAsync( query ).ConfigureAwait( false );
			var users = _userResponseParser.GetUsers( series );
			return users;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="password"></param>
		/// <param name="isAdmin"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> CreateUserAsync( string username,
			string password, bool isAdmin = false )
		{
			var query = _userQueryBuilder.CreateUser( username, password, isAdmin );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> DropUserAsync( string username )
		{
			var query = _userQueryBuilder.DropUser( username );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="password"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> SetPasswordAsync( string username, string password )
		{
			var query = _userQueryBuilder.SetPassword( username, password );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public async Task<IEnumerable<Grant>> GetPrivilegesAsync( string username )
		{
			var query = _userQueryBuilder.GetPrivileges( username );
			var series = await base.ResolveSingleGetSeriesResultAsync( query ).ConfigureAwait( false );
			var grants = _userResponseParser.GetPrivileges( series );
			return grants;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> GrantAdministratorAsync( string username )
		{
			var query = _userQueryBuilder.GrantAdministator( username );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> RevokeAdministratorAsync( string username )
		{
			var query = _userQueryBuilder.RevokeAdministrator( username );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="privilege"></param>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> GrantPrivilegeAsync( string username,
			Privileges privilege, string dbName )
		{
			var query = _userQueryBuilder.GrantPrivilege( username, privilege, dbName );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="username"></param>
		/// <param name="privilege"></param>
		/// <param name="dbName"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> RevokePrivilegeAsync( string username,
			Privileges privilege, string dbName )
		{
			var query = _userQueryBuilder.RevokePrivilege( username, privilege, dbName );
			var response = await base.PostAndValidateQueryAsync( query ).ConfigureAwait( false );
			return response;
		}
		#endregion
	}
}
