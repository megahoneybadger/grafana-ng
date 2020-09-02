#region Usings
using ED.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using EntityUser = ED.Data.User;
using ModelUser = ED.Security.User;
using ModelPreferences = ED.Security.UserPreferences;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class User : IOrgSupportingEntity
	{
		#region Class constaints
		/// <summary>
		/// 
		/// </summary>
		private const int SALT_SIZE = 20;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Login { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Email { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Salt { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Rands { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime LastSeenAt { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsRoot { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<TeamMember> TeamMember { get; set; } = new List<TeamMember>();
		/// <summary>
		/// 
		/// </summary>
		public List<OrgMember> OrgMember { get; set; } = new List<OrgMember>();
		/// <summary>
		/// 
		/// </summary>
		public Preferences Preferences { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<FolderPermission> FolderPermissions { get; set; } = new List<FolderPermission>();
		/// <summary>
		/// 
		/// </summary>
		/// <value></value>
		public List<DashboardPermission> DashboardPermissions { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<Annotation> Annotations { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{Login}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelUser ToModel() 
		{
			return ToModel( null );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelUser ToModel( int? orgId )
		{
			var model = new ModelUser()
			{
				Id = Id,
				OrgId = OrgId,
				Login = Login,
				Name = Name,
				IsRoot = IsRoot,
				Email = Email,
				LastSeenAt = LastSeenAt
			};

			if( orgId.HasValue ) 
			{
				model.OrgId = orgId.Value;
			}

			model.Preferences = new UserPreferences()
			{
				Theme = Preferences?.Theme ?? Theme.Default,
				TimeZone = Preferences?.TimeZone ?? Security.TimeZone.Default,
				HomeDashboardId = Preferences?.HomeDashboardId,
			};

			var member = OrgMember.FirstOrDefault( x => x.OrgId == model.OrgId );

			if( null != member )
			{
				model.Role = member.Role;
				model.Bag.OrgName = member.Org.Name;
			}

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="password"></param>
		public void ChangePassword( string password )
		{
			var salt = CreateSalt( SALT_SIZE );
			var hash = CreateHash( password, salt );
			Salt = Convert.ToBase64String( salt );
			Password = Convert.ToBase64String( hash );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="user"></param>
		public void Update( ModelUser user )
		{
			Login = user.Login;
			Name = user.Name;
			Email = user.Email;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="password"></param>
		/// <returns></returns>
		public bool EqualPassword( string password )
		{
			var salt = Convert.FromBase64String( Salt );
			var p = Convert.ToBase64String( CreateHash( password, salt ) );

			return ( Password.Equals( p ) );
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="size"></param>
		/// <returns></returns>
		private static byte [] CreateSalt( int size )
		{
			//Generate a cryptographic random number.
			var rng = new RNGCryptoServiceProvider();
			byte [] buff = new byte [ size ];
			rng.GetBytes( buff );

			// Return a Base64 string representation of the random number.
			return buff;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <param name="salt"></param>
		/// <returns></returns>
		private static byte [] CreateHash( string value, byte [] salt )
		{
			return CreateHash( Encoding.UTF8.GetBytes( value ), salt );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <param name="salt"></param>
		/// <returns></returns>
		private static byte [] CreateHash( byte [] value, byte [] salt )
		{
			byte [] saltedValue = value.Concat( salt ).ToArray();
			// Alternatively use CopyTo.
			//var saltedValue = new byte[value.Length + salt.Length];
			//value.CopyTo(saltedValue, 0);
			//salt.CopyTo(saltedValue, value.Length);

			return new SHA256Managed().ComputeHash( saltedValue );
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class UserModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public static EntityUser ToEntity( this ModelUser user )
		{
			var entity = new EntityUser()
			{
				Id = user.Id,
				OrgId = user.OrgId,
				Login = user.Login,
				Name = user.Name,
				IsRoot = user.IsRoot,
				Email = user.Email,
				LastSeenAt = user.LastSeenAt,
			};

			entity.ChangePassword( user.Password ?? string.Empty );

			return entity;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public static ModelUser SubstituteOrg( this ModelUser user, int orgId )
		{
			user.OrgId = orgId;

			return user;
		}
		/// <summary>
		/// 
		/// </summary>
		public static ModelUser AddPreferences( this ModelUser u, DataContext dc )
		{
			var res = new UserRepository( dc )
				.ForActiveOrg( u.OrgId )
				.GetEffectivePreferences( u.Id );

			if( !res.HasError ) 
			{
				u.Preferences = res.Value;
			}

			return u;
		}
		#endregion
	}
}
