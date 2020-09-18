#region Usings
using ED.Alerts;
using ED.Data.Alerts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

using ModelAnnotation = ED.Dashboards.Annotation;
using ModelAnnotations = System.Collections.Generic.List<ED.Dashboards.Annotation>;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class AnnotationRepository : Repository
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public AnnotationRepository( DataContext dc ) 
			: base( dc )
		{
			//dc.FillDatabase();
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public OperationResult<ModelAnnotations> All
		{
			get
			{
				OperationResult<ModelAnnotations> res;

				try
				{
					var annots = DataContext
						.Annotations
						.ForActiveOrg()
						.Include( x => x.Tags )
						.ThenInclude( x => x.AnnotationTag )
						.Select( x => x.ToModel() )
						.ToList();

					res = OperationResult<ModelAnnotations>.Create( annots );
				}
				catch( Exception e )
				{
					res = OperationResult<ModelAnnotations>.Create( ErrorCode.BadGetAnnotations, e );
				}

				return res;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <returns></returns>
		public OperationResult<ModelAnnotations> Search( AnnotationSearchFilter f )
		{
			OperationResult<ModelAnnotations> res = null;

			try
			{
				var entities = DataContext
					.Annotations
					.ForActiveOrg()
					.Filter( f )
					.OrderByDescending( x => x.Epoch )
					.Include( x => x.Tags )
					.ThenInclude( x => x.AnnotationTag )
					.Include( x => x.User )
					.ToList();

				if( f.SearchByTags ) 
				{
					entities = entities.FilterByTags( f );
				}

				var models = entities
					.Select( x => x.ToModel() )
					.ToList();

				res = OperationResult<ModelAnnotations>.Create( models );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAnnotations>.Create( ErrorCode.BadGetAnnotations, e );
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
		public OperationResult<ModelAnnotation> Create( ModelAnnotation ann )
		{
			OperationResult<ModelAnnotation> res;

			try
			{
				var tags = UpsertTags( ann );

				var entity = ann
					.ToEntity()
					.IncludeTags( tags )
					.IncludeActiveOrgId( DataContext );

				DataContext.Add( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( ann )
					.ToModel();

				res = OperationResult<ModelAnnotation>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAnnotation>.Create( ErrorCode.BadCreateAnnotation, e );
			}

			return res;
		}
	
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ann"></param>
		/// <returns></returns>
		public OperationResult<ModelAnnotation> Update( ModelAnnotation ann, bool patch = false )
		{
			OperationResult<ModelAnnotation> res;

			try
			{
				var entity = DataContext
					.Annotations
					.ForActiveOrg()
					.Include( x => x.Tags )
					.ThenInclude( x => x.AnnotationTag )
					.FirstOrDefault( x => x.Id == ann.Id );

				if( null == entity )
					return OperationResult<ModelAnnotation>.Create( ErrorCode.BadGetAnnotation );

				var tags = UpsertTags( ann );

				entity.Update( ann, tags, patch );

				DataContext.Update( entity );

				DataContext.SaveChanges();

				var model = entity
					.UpdateId( ann )
					.ToModel();

				res = OperationResult<ModelAnnotation>.Create( model );
			}
			catch( Exception e )
			{
				res = OperationResult<ModelAnnotation>.Create( ErrorCode.BadUpdateAnnotation, e );
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
					.Annotations
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				if( null == entity )
					return OperationResult<bool>.Create( ErrorCode.BadGetAnnotation );

				DataContext.Annotations.Remove( entity );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteAnnotation, e );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public OperationResult<bool> Delete( int dasboardId, int panelId )
		{
			OperationResult<bool> res;

			try
			{
				DataContext
					.Database
					.ExecuteSqlRaw( $"delete from Annotations WHERE " +
						$"OrgId={DataContext.ActiveOrgId} and " +
						$"DashboardId={dasboardId} and " +
						$"PanelId={panelId}" );

				DataContext.SaveChanges();

				res = OperationResult<bool>.Create( true );
			}
			catch( Exception e )
			{
				res = OperationResult<bool>.Create( ErrorCode.BadDeleteAnnotation, e );
			}

			return res;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="tags"></param>
		private List<AnnotationTag> UpsertTags( ModelAnnotation ann )
		{
			var tags = ann.Tags;
			var res = new List<AnnotationTag>();

			if( null == tags )
				return null;

			try
			{
				var existingTags = DataContext
					.AnnotationTags
					.Where( x => tags.Contains( x.Term ) )
					.ToList();

				var newTags = tags
					.Where( t => null == existingTags.FirstOrDefault( x =>
						0 == string.Compare( x.Term, t, StringComparison.OrdinalIgnoreCase ) ) )
					.Select( x => new AnnotationTag( x ) )
					.ToList();

				DataContext
					.AnnotationTags
					.AddRange( newTags );

				res = existingTags
					.Union( newTags )
					.ToList(); ;
			}
			catch
			{ }

			return res;
		}
		#endregion
	}
}
