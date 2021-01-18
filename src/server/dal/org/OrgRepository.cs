#region Usings
using ED.Security;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using ModelOrg = ED.Security.Org;
using ModelPreferences = ED.Security.Preferences;
using ModelOrgs = System.Collections.Generic.List<ED.Security.Org>;
using ModelUser = ED.Security.User;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class OrgRepository : Repository
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const int DEFAULT_ORG_ID = 1;
		/// <summary>
		/// 
		/// </summary>
		public const string DEFAULT_ORG_NAME = "Main Org.";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelOrgs> All
		{
			get
			{
				OperationResult<ModelOrgs> res = null;

				try
				{
					var models = DataContext
						.Orgs
						.ToList()
						.Select( x => x.ToModel() )
						.ToList();

					res = OperationResult<ModelOrgs>.Create( models );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelOrgs>.Create( ErrorCode.BadGetOrgs, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelOrg> this [ int id ]
		{
			get
			{
				OperationResult<ModelOrg> res = null;

				try
				{
					var data = DataContext
						.Orgs
						.SingleOrDefault( x => x.Id == id );

					var model = ( null == data ) ? null :
						data.ToModel().AddTime( DataContext.Entry( data ) );

					res = OperationResult<ModelOrg>.Create(
						() => null != model, model, ErrorCode.BadGetOrg );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelOrg>.Create( ErrorCode.BadGetOrg, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelOrg> this [ string name ]
		{
			get
			{
				OperationResult<ModelOrg> res = null;

				try
				{
					var data = DataContext
						.Orgs
						.SingleOrDefault( x => x.Name == name );

					var model = ( null == data ) ? null :
						data.ToModel().AddTime( DataContext.Entry( data ) );

					res = OperationResult<ModelOrg>.Create(
						() => null != model, model, ErrorCode.BadGetOrg );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelOrg>.Create( ErrorCode.BadGetOrg, e );
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
		public OrgRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelOrg> Create( ModelOrg org, bool addMembership = true )
		{
			OperationResult<ModelOrg> res;

			try
			{
				var entity = org.ToEntity();

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity.ToModel();

				org.Id = model.Id;

				if( addMembership ) 
				{
					DataContext.OrgMember.Add( new OrgMember( entity.Id, DataContext.ActiveUserId ) );
					DataContext.SaveChanges();
				}

				res = OperationResult<ModelOrg>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelOrg>.Create( ErrorCode.BadCreateOrg, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<ModelOrg> Update( ModelOrg org )
		{
			OperationResult<ModelOrg> res;

			try
			{
				var entity = org.ToEntity();

				DataContext.Update( entity );

				DataContext.SaveChanges();

				var model = entity.ToModel();

				res = OperationResult<ModelOrg>.Create( model );

				IncrementUsersVersion( org.Id );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelOrg>.Create( ErrorCode.BadUpdateOrg, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int id, bool bForceDelete = false )
		{
			OperationResult<bool> res;

			try
			{
				if( id == DEFAULT_ORG_ID && !bForceDelete )
					return OperationResult<bool>.Create( ErrorCode.BadDeleteDefaultOrg );

				var entity = DataContext
					.Orgs
					.Include( x => x.OrgMember )
					.FirstOrDefault( x => x.Id == id );

				if( null == entity || ( entity.OrgMember.Count > 0 && !bForceDelete ) )
					return OperationResult<bool>.Create( ErrorCode.BadGetOrg );

				DataContext.Orgs.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteOrg, e );
			}

			return res;
		}
		#endregion

		#region Class 'Org members' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <returns></returns>
		public OperationResult<ModelUsers> GetMembers( int orgId )
		{
			OperationResult<ModelUsers> res;

			try
			{
				var users = DataContext
					.OrgMember
					.Where( p => p.OrgId == orgId )
					.Include( p => p.User )
					.ThenInclude( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.Select( x => x.User )
					.ToList()
					.Select( x => x
						.ToModel( orgId )
						.AddVersion( DataContext.Entry( x ) ) )
					.OrderBy( x => x.Login )
					.ToList();

				res = OperationResult<ModelUsers>.Create( users );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUsers>.Create( ErrorCode.BadGetOrgMembers, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="user"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> AddMember( int orgId, string loginOrEmail, Role role )
		{
			try
			{
				var entity = DataContext
					.Users
					.FirstOrDefault( x => x.Login == loginOrEmail || x.Email == loginOrEmail );

				if( null == entity )
					return OperationResult<ModelUser>.Create( ErrorCode.BadGetUser );

				return AddOrgMember( orgId, entity.Id, role );
			}
			catch//( Exception e )
			{}

			return OperationResult<ModelUser>.Create( ErrorCode.BadAddOrgMember );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="user"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> AddOrgMember( int orgId, int userId, Role role )
		{
			OperationResult<ModelUser> res;
			ModelUser affectedUser = null;

			try
			{
				var user = DataContext
					.Users
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.Id == userId );

				if( null == user )
					return OperationResult<ModelUser>.Create( ErrorCode.BadGetUser );

				if( 0 == user.OrgId ) 
				{
					var org = DataContext
						.Orgs
						.FirstOrDefault( x => x.Id == orgId );

					user.OrgId = orgId;

					affectedUser = user
						.ToModel( orgId )
						.AddVersion( DataContext.Entry( user ) );

					affectedUser.Role = role;
					affectedUser.Bag.OrgName = org.Name;
				}

				DataContext.Add( new OrgMember()
				{
					OrgId = orgId,
					UserId = userId,
					Role = role
				} );

				var count = DataContext.SaveChanges();

				res = OperationResult<ModelUser>.Create( affectedUser );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadAddOrgMember, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="teamId"></param>
		/// <param name="user"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> UpdateMember( int orgId, int userId, Role role )
		{
			OperationResult<ModelUser> res;
			
			try
			{
				var entity = DataContext
					.OrgMember
					.Include( x => x.User )
					.ThenInclude( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.FirstOrDefault( x => x.OrgId == orgId && x.UserId == userId );

				if( null != entity ) 
				{
					DataContext.Remove( entity );
				}

				DataContext.Add( new OrgMember()
				{
					OrgId = orgId,
					UserId = userId,
					Role = role
				} );

				DataContext
					.Entry( entity.User )
					.State = EntityState.Modified;

				var count = DataContext.SaveChanges();

				var model = entity
					.User
					.ToModel( orgId )
					.AddVersion( DataContext.Entry( entity.User ) );

				res = OperationResult<ModelUser>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadUpdateOrgMember, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="orgId"></param>
		/// <param name="userId"></param>
		/// <returns></returns>
		public OperationResult<ModelUser> RemoveMember( int orgId, int userId )
		{
			OperationResult<ModelUser> res;
			ModelUser affectedUser = null;

			try
			{
				var org = DataContext
					.Orgs
					.Include( x => x.OrgMember )
					.ThenInclude( x => x.User )
					.ThenInclude( x => x.OrgMember )
					.ThenInclude( x => x.Org )
					.First( x => x.Id == orgId );

				var om = org
					.OrgMember
					.Where( x => x.UserId == userId )
					.FirstOrDefault();

				var user = om.User;

				var isLastActorMembership =
					( userId == DataContext.ActiveUserId ) &&
					( user.OrgMember.Count == 1 ) &&
					( user.OrgMember [ 0 ].OrgId == orgId );

				if( isLastActorMembership )
					return OperationResult<ModelUser>.Create( ErrorCode.BadDeleteOrgMember );

				org.OrgMember.Remove( om );

				// if user's current org membership was deleted
				if( user.OrgId == orgId ) 
				{
					var nextOrgCandidate = om
						.User
						.OrgMember
						.FirstOrDefault( x => x.OrgId != orgId );

					user.OrgId = ( null == nextOrgCandidate ) ? 0 : nextOrgCandidate.OrgId;

					affectedUser = user
						.ToModel()
						.AddVersion( DataContext.Entry( user ) );
				}

				var count = DataContext.SaveChanges();

				res = OperationResult<ModelUser>.Create( 
					() => count > 0, affectedUser, ErrorCode.BadDeleteOrgMember );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelUser>.Create( ErrorCode.BadDeleteOrgMember, e );
			}

			return res;
		}
		
		#endregion

		#region Class 'Preferences' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelPreferences> GetPreferences()
		{
			OperationResult<ModelPreferences> res;

			try
			{
				var entity = DataContext
					.Preferences
					.ForActiveOrg()
					.FirstOrDefault( x => !x.UserId.HasValue && !x.TeamId.HasValue );

				var model = ( null == entity ) ?
					new ModelPreferences() : entity.ToModel();

				model.OrgId = DataContext.ActiveOrgId;

				res = OperationResult<ModelPreferences>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadGetOrgPreferences, e );
			}

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
					.FirstOrDefault( x => !x.UserId.HasValue && !x.TeamId.HasValue );

				if( null != entity )
				{
					entity.Update( pref );
				}
				else
				{
					entity = pref.ToEntity();
					DataContext.Preferences.Add( entity );
				}

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( pref )
					.ToModel();

				res = OperationResult<ModelPreferences>.Create( model );

				IncrementUsersVersion( DataContext.ActiveOrgId );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelPreferences>.Create( ErrorCode.BadUpdateOrgPreferences, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		public void IncrementUsersVersion( int orgId )
		{
			try
			{
				DataContext
					.Database
					.ExecuteSqlRaw( $"Update Users Set Version=Version+1 Where Id!={DataContext.ActiveUserId} and OrgId={orgId}" );
			}
			catch
			{ }
		}
		#endregion
	}
}
