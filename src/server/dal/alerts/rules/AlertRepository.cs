#region Usings
using ED.Alerts;
using ED.Data.Alerts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using ModelAlert = ED.Alerts.Alert;
using ModelAlerts = System.Collections.Generic.List<ED.Alerts.Alert>;

#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertRepository : Repository
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAlert> this [ int id ]
		{
			get
			{
				OperationResult<ModelAlert> res = null;

				try
				{
					var entity = DataContext
						.Alerts
						.ForActiveOrg()
						.FirstOrDefault( x => x.Id == id );

					var model = entity?
						.ToModel()
						.AddTime( DataContext.Entry( entity ) );

					res = OperationResult<ModelAlert>.Create(
						() => null != model, model, ErrorCode.BadGetAlert );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelAlert>.Create( ErrorCode.BadGetAlert, e );
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
		public AlertRepository( DataContext dc ) 
			: base( dc )
		{

		}
		#endregion

		#region Class 'CRUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<OperationResult<ModelAlerts>> ReadAllAsync()
		{
			OperationResult<ModelAlerts> res;

			try
			{
				var entities = await DataContext
					.Alerts
					.Include( x => x.Dashboard )
					.ToListAsync();
				
				var models = entities
					.Select( x => x.ToModel() )
					.ToList();

				res = OperationResult<ModelAlerts>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlerts>.Create( ErrorCode.BadGetAlerts, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<OperationResult<ModelAlert>> ReadAsync( int dashboardId, int panelId )
		{
			OperationResult<ModelAlert> res;

			try
			{
				var entity = await DataContext
					.Alerts
					.ForActiveOrg()
					.FirstOrDefaultAsync( x => x.DashboardId == dashboardId && x.PanelId == panelId );

				var model = entity?
					.ToModel()
					.AddTime( DataContext.Entry( entity ) );

				res = OperationResult<ModelAlert>.Create(
					() => null != model, model, ErrorCode.BadGetAlert );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlert>.Create( ErrorCode.BadChangeAlertState, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public async Task<OperationResult<bool>> UpdateAsync( EvaluationContext c ) 
		{
			OperationResult<bool> res;

			try
			{
				var entity = DataContext
					.Alerts
					.FirstOrDefault( x => x.Id == c.AlertId );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetAlert );

				entity.NewStateDate = DateTime.Now;
				entity.State = c.State;
				entity.StateChanges++;

				DataContext.Add( c
					.ToEntity()
					.IncludeActiveOrgId( DataContext ) );

				await DataContext.SaveChangesAsync();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadChangeAlertState, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dashboardId"></param>
		/// <returns></returns>
		public OperationResult<ModelAlerts> GetStates( int dashboardId ) 
		{
			OperationResult<ModelAlerts> res;

			try
			{
				var alerts = DataContext
					.Alerts
					.ForActiveOrg()
					.Include( x => x.Dashboard )
					.Where( x => x.DashboardId == dashboardId )
					.Select( x => x.ToModel() )
					.ToList();

				res = OperationResult<ModelAlerts>.Create( alerts );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlerts>.Create( ErrorCode.BadGetAlerts, e );
			}

			return res;
		}
		#endregion

		#region Class 'Search' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAlerts> Search( AlertSearchFilter f )
		{
			OperationResult<ModelAlerts> res;

			try
			{
				var alerts = DataContext
					.Alerts
					.ForActiveOrg()
					.Include( x => x.Dashboard )
					.ThenInclude( x => x.Folder )
					.Filter( f )
					.Select( x => x.ToModel() )
					.ToList();

				res = OperationResult<ModelAlerts>.Create( alerts );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAlerts>.Create( ErrorCode.BadGetAlerts, e );
			}

			return res;
		}
		#endregion

		#region Class 'Pause' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<AlertState> Pause( int id )
		{
			OperationResult<AlertState> res;

			try
			{
				var entity = DataContext
					.Alerts
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<AlertState>.Create( ErrorCode.BadGetAlert );

				entity.State = ( entity.State == AlertState.Paused ) ?
					AlertState.Unknown : AlertState.Paused;

				entity.NewStateDate = DateTime.Now;

				DataContext.SaveChanges();

				res = OperationResult<AlertState>.Create( entity.State );

				DataContext?
					.AlertManager
					.Reload();
			}
			catch( Exception e )
			{
				res = OperationResult<AlertState>.Create( ErrorCode.BadPauseAlert, e );
			}

			return res;
		}
		#endregion
	}
}

