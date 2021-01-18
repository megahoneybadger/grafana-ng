#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using ModelAlertNotification = ED.Alerts.AlertNotification;
using ModelAlertNotifications = System.Collections.Generic.List<ED.Alerts.AlertNotification>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotificationRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAlertNotifications> All
		{
			get
			{
				OperationResult<ModelAlertNotifications> res;

				try
				{
					var nots = DataContext
						.AlertNotifications
						.ForActiveOrg()
						.Select( x => x.ToModel() )
						.ToList();

					res = OperationResult<ModelAlertNotifications>.Create( nots );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelAlertNotifications>.Create( ErrorCode.BadGetAlertNotifications, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAlertNotification> this [ int id ]
		{
			get
			{
				OperationResult<ModelAlertNotification> res = null;

				try
				{
					var entity = DataContext
						.AlertNotifications
						.ForActiveOrg()
						.FirstOrDefault( x => x.Id == id );

					var model = entity?.ToModel();

					res = OperationResult<ModelAlertNotification>.Create(
						() => null != model, model, ErrorCode.BadGetAlertNotification );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelAlertNotification>.Create( ErrorCode.BadGetAlertNotification, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAlertNotification> this [ string uid ]
		{
			get
			{
				OperationResult<ModelAlertNotification> res = null;

				try
				{
					var entity = DataContext
						.AlertNotifications
						.ForActiveOrg()
						.FirstOrDefault( x => x.Uid == uid );

					var model = entity?.ToModel();

					res = OperationResult<ModelAlertNotification>.Create(
						() => null != model, model, ErrorCode.BadGetAlertNotification );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelAlertNotification>.Create( ErrorCode.BadGetAlertNotification, e );
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
		public AlertNotificationRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<OperationResult<ModelAlertNotifications>> ReadAllAsync()
		{
			OperationResult<ModelAlertNotifications> res;

			try
			{
				var entities = await DataContext
					.AlertNotifications
					.ToListAsync();

				var models = entities
					.Select( x => x.ToModel() )
					.ToList();

				res = OperationResult<ModelAlertNotifications>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlertNotifications>.Create( ErrorCode.BadGetAlertNotifications, e );
			}

			return res;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="nt"></param>
		/// <returns></returns>
		public OperationResult<ModelAlertNotification> Create( ModelAlertNotification nt )
		{
			OperationResult<ModelAlertNotification> res;

			try
			{
				if( nt.IsDefault )
				{
					ResetIsDefault();
				}

				var entity = nt
					.ToEntity()
					.IncludeActiveOrgId( DataContext );

				DataContext.AlertNotifications.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( nt )
					.ToModel();

				res = OperationResult<ModelAlertNotification>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlertNotification>.Create( ErrorCode.BadCreateAlertNotification, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="nt"></param>
		/// <returns></returns>
		public OperationResult<ModelAlertNotification> Update( int id, ModelAlertNotification nt )
		{
			OperationResult<ModelAlertNotification> res;

			try
			{
				if( nt.IsDefault )
				{
					ResetIsDefault();
				}

				var entity = DataContext
					.AlertNotifications
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<ModelAlertNotification>.Create( ErrorCode.BadGetAlertNotification );

				entity.Update( nt );

				DataContext
					.AlertNotifications
					.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( nt )
					.ToModel();

				res = OperationResult<ModelAlertNotification>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlertNotification>.Create( ErrorCode.BadUpdateAlertNotification, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="nt"></param>
		/// <returns></returns>
		public OperationResult<ModelAlertNotification> Update( string uid, ModelAlertNotification nt )
		{
			OperationResult<ModelAlertNotification> res;

			try
			{
				if( nt.IsDefault )
				{
					ResetIsDefault();
				}

				var entity = DataContext
					.AlertNotifications
					.ForActiveOrg()
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<ModelAlertNotification>.Create( ErrorCode.BadGetAlertNotification );

				entity.Update( nt );

				DataContext
					.AlertNotifications
					.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( nt )
					.ToModel();

				res = OperationResult<ModelAlertNotification>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlertNotification>.Create( ErrorCode.BadUpdateAlertNotification, e );
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
					.AlertNotifications
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetAlertNotification );

				DataContext
					.AlertNotifications
					.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteAlertNotification, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( string uid )
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.AlertNotifications
					.ForActiveOrg()
					.FirstOrDefault( x => x.Uid == uid );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetAlertNotification );

				DataContext
					.AlertNotifications
					.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteAlertNotification, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		public void ResetIsDefault()
		{
			try
			{
				DataContext
					.Database
					.ExecuteSqlRaw( "Update AlertNotifications Set IsDefault=0 Where IsDefault=1" );
			}
			catch
			{ }
		}
		#endregion
	}
}

