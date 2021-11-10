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
using System.Collections.Generic;
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
		/// <returns></returns>
		public static OperationResult<T> Finalize<T>( this OperationResult<T> op, Action f )
		{
			if( !op.HasError ) 
			{
				f?.Invoke();
			}

			return op;
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
			if( null == op.Value )
				return op;

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
		public static OperationResult<ModelUser> RevokeToken( this OperationResult<ModelUser> op )
		{
			if( !op.HasError && null != op.Value )
			{
				JwtHelper.RemoveUserFromCache( op.Value.Id );
			}

			return op;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		public static OperationResult<T> Chain<T>(
			this OperationResult<T> op, Action a )
		{
			a.Invoke();

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
		public static OperationResult<ModelUser> RefreshEffectivePreferences(
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

	public static class DomainModelExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="dm"></param>
		/// <param name="conv"></param>
		/// <returns></returns>
		public static IActionResult ToActionResult<T>( this T dm,
			Func<T, object> conv = null ) where T : DomainModel
		{
			if( null == dm )
				// this exception will be handled in a middleware and identified as 404
				throw new NullReferenceException();

			return new OkObjectResult( conv?.Invoke( dm ) ?? dm );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="dm"></param>
		/// <param name="conv"></param>
		/// <returns></returns>
		public static IActionResult ToActionResult( this bool dm,
			Func<bool, object> conv = null ) 
		{
			return new OkObjectResult( conv?.Invoke( dm ) ?? dm );
		}

		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="dm"></param>
		/// <param name="conv"></param>
		/// <returns></returns>
		public static IActionResult ToActionResult<T>( this IEnumerable<T> list,
			Func<IEnumerable<T>, object> conv = null ) where T: DomainModel
		{
			if( null == list )
				// this exception will be handled in a middleware and identified as 404
				throw new NullReferenceException();

			return new OkObjectResult( conv?.Invoke( list ) ?? list );
		}
		#endregion
	}
}
