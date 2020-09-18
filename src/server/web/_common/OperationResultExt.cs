#region Usings
using ED.Web.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using ModelUser = ED.Security.User;
using ModelOrg = ED.Security.Org;
using ModelPreferences = ED.Security.Preferences;
using ModelUserPreferences = ED.Security.UserPreferences;
using ED.Data;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public static class OperationResultExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IActionResult ToActionResult<T>( this OperationResult<T> op,
			Func<OperationResult<T>, object> conv = null )
		{
			if( null == op )
				return new StatusCodeResult( StatusCodes.Status404NotFound );

			if( !op.HasError )
				return new OkObjectResult( conv?.Invoke( op ) ?? op.Value );

			var attr = op.Error.Code.GetAttribute<ErrorHintAttribute>();

			if( null != attr ) 
			{
				return attr.Type switch
				{
					ErrorType.NotFound => new NotFoundObjectResult( op.Error ),
					ErrorType.BadPrecondition => new ObjectResult( op.Error )
					{
						StatusCode = new int?( StatusCodes.Status412PreconditionFailed )
					},
					_ => new BadRequestObjectResult( op.Error )
				};
			}

			return new BadRequestObjectResult( op.Error );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="ModelUser"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		public static OperationResult<ModelUser> RefreshToken( 
			this OperationResult<ModelUser> op, bool refreshEntireOrg = false ) 
		{
			if( !op.HasError ) 
			{
				op.Value.Bag.Token = JwtHelper.Create( op.Value );

				if( refreshEntireOrg ) 
				{
					JwtHelper.IncrementUsersVersion( op.Value.OrgId, op.Value.Id );
				}
			}

			return op;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="ModelUser"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		public static OperationResult<ModelUser> RefreshPreferences( 
			this OperationResult<ModelPreferences> _, ModelUser u, DataContext dc )
		{
			var effp = new UserRepository( dc )
				.ForActiveOrg( u.OrgId )
				.GetEffectivePreferences( u.Id );

			u.Preferences = effp.Value;

			return OperationResult<ModelUser>.Create( u );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="ModelUser"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		public static OperationResult<ModelUser> RefreshPreferences(
			this OperationResult<ModelUserPreferences> _, ModelUser u, DataContext dc )
		{
			var effp = new UserRepository( dc )
				.ForActiveOrg( u.OrgId )
				.GetEffectivePreferences( u.Id );

			u.Preferences = effp.Value;

			return OperationResult<ModelUser>.Create( u );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="ModelUser"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns>
		public static OperationResult<ModelUser> RefreshPreferences(
			this OperationResult<ModelOrg> _, ModelUser u, DataContext dc )
		{
			var effp = new UserRepository( dc )
				.ForActiveOrg( u.OrgId )
				.GetEffectivePreferences( u.Id );

			u.Preferences = effp.Value;

			return OperationResult<ModelUser>.Create( u );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="ModelUser"></typeparam>
		/// <param name="op"></param>
		/// <returns></returns> 
		public static OperationResult<ModelOrg> RefreshToken( 
			this OperationResult<ModelOrg> op, ModelUser user )
		{
			if( !op.HasError )
			{
				var sameOrg = ( user.OrgId == op.Value.Id );

				if( sameOrg )
				{
					user.Bag.OrgName = op.Value.Name;
					op.Value.Bag.Token = JwtHelper.Create( user );
				}
				else 
				{
					op.Value.Bag.Token = null;
				}

				JwtHelper.IncrementUsersVersion( op.Value.Id, user.Id );
			}

			return op;
		}
		#endregion
	}
}
