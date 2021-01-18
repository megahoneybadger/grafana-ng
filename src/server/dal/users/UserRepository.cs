#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
using EntityUser = ED.Data.User;
using ModelUser = ED.Security.User;
using ModelPreferences = ED.Security.UserPreferences;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelOrgs = System.Collections.Generic.List<ED.Security.Org>;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class UserRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelUsers> All
		{
			get
			{
				OperationResult <ModelUsers> res = null;

				try
				{
					var users = DataContext
						.Users
						.ToList()
						.Select( x => x.ToModel() )
						.Where( x => null != x )
						.ToList();

					res = OperationResult<ModelUsers>.Create( users );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelUsers>.Create( ErrorCode.BadGetUsers, e );
				}

				return res;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public UserRepository( DataContext dc ) 
			: base( dc )
		{
			
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelUser> GetUserById( int id )
		{
			OperationResult<ModelUser> res = null;

			try
			{
				var entity = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.Id == id );

				ModelUser model = null;

				if( null != entity ) 
				{
					model = entity
						.ToModel()
						.AddTime( DataContext.Entry( entity ) )
						.AddVersion( DataContext.Entry( entity ) );
				} 

				res = OperationResult<ModelUser>.Create(
					() => null != entity, model, ErrorCode.BadGetUser );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadGetUser, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public OperationResult<ModelUser> GetUserByLoginOrEmail( string key ) 
		{
			OperationResult<ModelUser> res = null;

			try
			{
				var data = DataContext
					.Users
					.SingleOrDefault( x => x.Login == key || x.Email == key );

				var ds = ( null == data ) ? null :
					data.ToModel().AddTime( DataContext.Entry( data ) );

				res = OperationResult<ModelUser>.Create(
					() => null != ds, ds, ErrorCode.BadGetUser );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadGetUser, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelTeams> GetUserTeams( int userId )
		{
			OperationResult<ModelTeams> res = null;

			try
			{
				var teams = DataContext
					.TeamMember
					.Where( p => p.UserId == userId )
					.Include( p => p.Team )
					.ThenInclude( x => x.TeamMember )
					.ThenInclude( x => x.User )
					.Select( x => x.Team )
					.ToList()
					.Select( x => x.ToModel().AddMemberCount( x ) )
					.Where( x => x.OrgId == DataContext.ActiveOrgId )
					.ToList();

				res = OperationResult<ModelTeams>.Create( teams );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelTeams>.Create( ErrorCode.BadGetTeams, e );
			}

			return res;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> Create( ModelUser user )
		{
			OperationResult<ModelUser> res;

			try
			{
				var entity = user.ToEntity();

				entity.OrgId = DataContext.ActiveOrgId;

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity.ToModel();

				user.Id = entity.Id;
				user.OrgId = entity.OrgId;

				entity.OrgMember.Add( new OrgMember( entity.OrgId, entity.Id ) );
				DataContext.SaveChanges();

				res = OperationResult<ModelUser>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadCreateUser, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> Update( ModelUser user )
		{
			OperationResult<ModelUser> res;

			try
			{
				var entity = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.Id == user.Id );

				if( null == entity )
					return OperationResult<ModelUser>.Create( ErrorCode.BadGetUser );

				entity.Update( user );

				DataContext.SaveChanges();

				var model = entity
					.ToModel()
					.AddPreferences( DataContext )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelUser>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadUpdateUser, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<bool> UpdateLastSeen( int userId )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext.Users.Find( userId );

				if( null == entity )
					OperationResult<bool>.Create( ErrorCode.BadGetUser );

				entity.LastSeenAt = DateTime.Now;

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadUpdateUser, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<bool> ChangePassword( int userId,
			string oldPassword, string newPassword )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Users
					.Find( userId );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetUser );

				var changeCount = 0;
				var emptyOldPassword = string.IsNullOrEmpty( oldPassword );

				var canChangePassword = 
					( emptyOldPassword ) ||
					( !emptyOldPassword && entity.EqualPassword( oldPassword ));

				if( canChangePassword )
				{
					entity.ChangePassword( newPassword );

					changeCount = DataContext.SaveChanges();
				}

				res = OperationResult<bool>.Create( 
					() => changeCount > 0, true, ErrorCode.BadChangeUserPassword );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadChangeUserPassword, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int id )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Users
					.Find( id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetUser );

				DataContext.Users.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteUser, e );
			}

			return res;
		}
		#endregion

		#region Class 'Auth' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="login"></param>
		/// <param name="password"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> Login( string login, string password ) 
		{
			OperationResult<ModelUser> res = null;

			try
			{
				var entity = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.Login == login );

				if( null == entity )
					return OperationResult<ModelUser>.Create( ErrorCode.BadLogin );

				var badMembership =
					( 0 == entity.OrgMember.Count ) ||
					( null == entity.OrgMember.FirstOrDefault( x => x.OrgId == entity.OrgId ) );

				if( badMembership )
					return OperationResult<ModelUser>.Create( ErrorCode.BadOrgMembership );

				var samePassword = entity.EqualPassword( password );

				var model = entity
					.ToModel()
					.AddPreferences( DataContext )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelUser>.Create( 
					() => samePassword, model, ErrorCode.BadLogin );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadLogin, e );
			}

			return res;
		}
		#endregion

		#region Class 'Preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelPreferences> GetPreferences( int id )
		{
			OperationResult<ModelPreferences> res = null;

			try
			{
				var entity = DataContext
					.Preferences
					.ForActiveOrg()
					.FirstOrDefault( x => x.UserId == id );

				var model = ( null == entity ) ?
					new ModelPreferences() : entity.ToUserModel();

				model.UserId = id;
				model.OrgId = DataContext.ActiveOrgId;
				
				res = OperationResult<ModelPreferences>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadGetUserProfile, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelPreferences> GetEffectivePreferences( int id )
		{
			var p = new ModelPreferences();
			var res = OperationResult<ModelPreferences>.Create( p );

			try
			{
				var prefs = DataContext
					.Preferences
					.ForActiveOrg()
					.Where( x =>
						( null == x.UserId && null == x.TeamId ) ||
						( x.UserId == id ) )
					.ToList();

				if( 0 != prefs.Count ) 
				{
					var userPref = prefs.FirstOrDefault( x => x.UserId == id );
					var orgPref = prefs.FirstOrDefault( x => x.UserId == null);

					if( null != orgPref )
					{
						p.TimeZone = orgPref.TimeZone;
						p.Theme = orgPref.Theme;
					}

					if( null != userPref ) 
					{
						if( userPref?.TimeZone != Security.TimeZone.Default )
						{
							p.TimeZone = userPref.TimeZone;
						}

						if( userPref?.Theme != Security.Theme.Default )
						{
							p.Theme = userPref.Theme;
						}
					}
				}
			}
			catch
			{}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public OperationResult<ModelPreferences> UpdatePreferences( ModelPreferences pref )
		{
			OperationResult<ModelPreferences> res;

			try
			{
				var entity = DataContext
					.Preferences
					.ForActiveOrg()
					.FirstOrDefault( p => p.UserId == pref.UserId );

				if( null != entity )
				{
					entity.Update( pref );
				}
				else
				{
					entity = pref.ToUserEntity();
					entity.OrgId = DataContext.ActiveOrgId;
					DataContext.Preferences.Add( entity );
				}

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( pref )
					.ToUserModel();

				res = OperationResult<ModelPreferences>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadUpdateUserPreferences, e );
			}

			return res;
		}
		#endregion

		#region Class 'Permissions' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> UpdateRootPermissions( int userId, bool isRoot )
		{
			OperationResult<ModelUser> res;

			try
			{
				var entity = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.Id == userId );

				if( null == entity )
					OperationResult<ModelUser>.Create( ErrorCode.BadGetUser );
				
				if(!( isRoot || HasRoots( userId ) ) )
					return OperationResult<ModelUser>.Create( ErrorCode.BadUpdateUserAdminPermissions );

				entity.IsRoot = isRoot;

				DataContext.SaveChanges();

				var model = entity
					.ToModel()
					.AddPreferences( DataContext )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelUser>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadUpdateUserAdminPermissions, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="userId"></param>
		/// <param name="isRoot"></param>
		/// <returns></returns>
		private bool HasRoots( int userId ) 
		{
			return DataContext
				.Users
				.Include( x => x.OrgMember )
				.Any( x => x.OrgMember.Count > 0 && x.IsRoot && x.Id != userId ); 
		}
		#endregion

		#region Class 'Star' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="userId"></param>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		public OperationResult<bool> Star( int userId, int dashboardId )
		{
			OperationResult<bool> res;

			try
			{
				DataContext.Add( new DashboardStar( userId, dashboardId ) );

				var count = DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadStarDashboard, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="userId"></param>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		public OperationResult<bool> Unstar( int userId, int dashboardId )
		{
			OperationResult<bool> res;

			try
			{
				var star = DataContext
					.Stars
					.First( x => x.UserId == userId && x.DashboardId == dashboardId );

				DataContext.Remove( star );

				var count = DataContext.SaveChanges();

				res = OperationResult<bool>.Create(
					() => count > 0, true, ErrorCode.BadUnstarDashboard );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadUnstarDashboard, e );
			}

			return res;
		}
		#endregion

		#region Class 'Orgs' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelOrgs> GetOrgs( int userId )
		{
			OperationResult<ModelOrgs> res = null;

			try
			{
				var entity = DataContext
					.Users
					.Include( p => p.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( p => p.Id == userId );

				if( null == entity )
					OperationResult<ModelOrgs>.Create( ErrorCode.BadGetUser );

				var orgs = entity
					.OrgMember
					.Select( x => x.Org.ToModel() )
					.ToList();

				foreach( var om in entity.OrgMember ) 
				{
					var existing = orgs.FirstOrDefault( x => x.Id == om.OrgId );

					if( null != existing ) 
					{
						existing.Bag.Role = om.Role;
					}
				}

				res = OperationResult<ModelOrgs>.Create( orgs );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelOrgs>.Create( ErrorCode.BadGetOrgs, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> SwitchOrg( int userId, int orgId )
		{
			OperationResult<ModelUser> res;

			try
			{
				var entity = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x=> x.Id == userId );

				if( null == entity )
					OperationResult<bool>.Create( ErrorCode.BadGetUser );

				entity.OrgId = orgId;

				DataContext.SaveChanges();

				var model = entity
					.ToModel()
					.AddPreferences( DataContext )
					.AddVersion( DataContext.Entry( entity ) );

				res = OperationResult<ModelUser>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadChangeUserContext, e );
			}

			return res;
		}
		#endregion
	}
}
