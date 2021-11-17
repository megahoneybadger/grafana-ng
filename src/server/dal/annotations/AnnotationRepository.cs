#region Usings
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public ModelAnnotation this [ int id ]
		{
			get
			{
				var entity = DataContext
					.Annotations
					.ForActiveOrg()
					.FirstOrDefault( x => x.Id == id );

				var model = entity?.ToModel();

				return model;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public AnnotationRepository( DataContext dc ) 
			: base( dc )
		{
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name=""></param>
		public Task<ModelAnnotations> GetAnnotations() =>
			DataContext
				.Annotations
				.ForActiveOrg()
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.Select( x => x.ToModel() )
				.ToListAsync();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filter"></param>
		/// <returns></returns>
		public async Task<ModelAnnotations> Search( AnnotationSearchFilter f )
		{
			var entities = await DataContext
				.Annotations
				.ForActiveOrg()
				.Filter( f )
				.OrderByDescending( x => x.Epoch )
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.Include( x => x.User )
				.ToListAsync();

			if( f.SearchByTags )
			{
				entities = entities.FilterByTags( f );
			}

			var models = entities
				.Select( x => x.ToModel() )
				.ToList();

			return models;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<ModelAnnotation> GetAnnotation( int id )
		{
			var entity = await DataContext
				.Annotations
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			var model = entity?.ToModel();

			return model;
		}
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="team"></param>
		/// <returns></returns>
		public async Task<ModelAnnotation> Create( ModelAnnotation ann )
		{
			var tags = await UpsertTags( ann );

			var entity = ann
				.ToEntity()
				.IncludeTags( tags )
				.IncludeActiveOrgId( DataContext );

			DataContext.Add( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( ann )
				.ToModel();

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ann"></param>
		/// <returns></returns>
		public async Task<ModelAnnotation> Update( ModelAnnotation ann, bool patch = false )
		{
			var entity = await DataContext
				.Annotations
				.ForActiveOrg()
				.Include( x => x.Tags )
				.ThenInclude( x => x.AnnotationTag )
				.FirstOrDefaultAsync( x => x.Id == ann.Id );

			if( null == entity )
				throw new BadGetAnnotationException();

			var tags = await UpsertTags( ann );

			entity.Update( ann, tags, patch );

			DataContext.Update( entity );

			await DataContext.SaveChangesAsync();

			var model = entity
				.UpdateId( ann )
				.ToModel();

			return model;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( int id )
		{
			var entity = await DataContext
				.Annotations
				.ForActiveOrg()
				.FirstOrDefaultAsync( x => x.Id == id );

			if( null == entity )
				throw new BadGetAnnotationException();

			DataContext.Annotations.Remove( entity );

			var count = await DataContext.SaveChangesAsync();

			return ( 0 != count );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public async Task<bool> Delete( int dasboardId, int panelId )
		{
			await DataContext
				.Database
				.ExecuteSqlRawAsync( $"delete from Annotations WHERE " +
					$"OrgId={DataContext.ActiveOrgId} and " +
					$"DashboardId={dasboardId} and " +
					$"PanelId={panelId}" );

			await DataContext.SaveChangesAsync();

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="tags"></param>
		private async Task<List<AnnotationTag>> UpsertTags( ModelAnnotation ann )
		{
			var tags = ann?.Tags;
			var res = new List<AnnotationTag>();

			if( null == tags )
				return null;

			try
			{
				var existingTags = await DataContext
					.AnnotationTags
					.Where( x => tags.Contains( x.Term ) )
					.ToListAsync();

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
					.ToList();
			}
			catch
			{ }

			return res;
		}
		#endregion
	}
}
