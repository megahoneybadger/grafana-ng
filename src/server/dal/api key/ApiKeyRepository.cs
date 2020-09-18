#region Usings
using System;
using System.Linq;

using ModelApiKey = ED.Security.ApiKey;
using ModelApiKeys = System.Collections.Generic.List<ED.Security.ApiKey>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class ApiKeyRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelApiKeys> All
		{
			get
			{
				OperationResult<ModelApiKeys> res;

				try
				{
					var teams = DataContext
						.ApiKeys
						.ForActiveOrg()
						.Select( x => x.ToModel() )
						.ToList();

					res = OperationResult<ModelApiKeys>.Create( teams );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelApiKeys>.Create( ErrorCode.BadGetApiKeys, e );
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
		public ApiKeyRepository( DataContext dc ) 
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
		public OperationResult<ModelApiKey> Create( ModelApiKey key )
		{
			OperationResult<ModelApiKey> res;

			try
			{
				var entity = key
					.ToEntity()
					.IncludeActiveOrgId( DataContext );

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( key )
					.ToModel();

				model.Bag.Key = entity.Key;

				res = OperationResult<ModelApiKey>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelApiKey>.Create( ErrorCode.BadCreateApiKey, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int id )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.ApiKeys
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetApiKey );

				DataContext.ApiKeys.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteApiKey, e );
			}

			return res;
		}
		#endregion
	}
}
