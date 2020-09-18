#region Usings
using System.Security.Cryptography.X509Certificates;
using System.Reflection.PortableExecutable;
using System.Data.Common;
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using ModelApiKey = ED.Security.ApiKey;
using ModelApiKeys = System.Collections.Generic.List<ED.Security.ApiKey>;
using Microsoft.AspNetCore.Http;
#endregion

namespace ED.Web.Security
{
	/// <summary>
	/// 
	/// </summary>
	[Authenticate]
	[Authorize( Role.Admin )]
	[Route( "api/auth/keys" )]
	public class ApiKeysController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public ApiKeyRepository Repo => GetRepo<ApiKeyRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public ApiKeysController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{
			//dc.AddUsers();

			//dc.AddApiKeys( k => k.CreateJwtToken() );
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetApiKeys( bool includeExpired = false ) =>
			Repo
				.All
				.ToActionResult( x => ToGetApiKeyReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost()]
		public IActionResult Create( ApiKeyRequest r ) =>
			Repo
				.Create( r.ToModel( ActualUser.OrgId ) )
				.ToActionResult( x => ToCreateApiKeyReply( x ));
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}" )]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id )
				.ToActionResult( x => new { Message = "API key deleted" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToGetApiKeyReply( OperationResult<ModelApiKeys> op )
		{
			var keys = op.Value;

			return keys.Select( x => new
			{
				x.Id,
				x.Name,
				x.Role
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		internal static object ToCreateApiKeyReply( OperationResult<ModelApiKey> op )
		{
			return new
			{
				op.Value.Name,
				op.Value.Id, // ??
				op.Value.Bag.Key
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class ApiKeyRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public string Name { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public Role? Role { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public uint? SecondsToLive { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Name}|{Role}|{SecondsToLive ?? 0}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelApiKey ToModel( int orgId )
			{
				var key = new ModelApiKey()
				{
					Name = Name,
					Role = Role.Value,
					OrgId = orgId
				};

				key.Bag.SecondsToLive = SecondsToLive;
				key.Bag.Token = key.Create();

				return key;
			}
			#endregion
		}
		#endregion
	}
}