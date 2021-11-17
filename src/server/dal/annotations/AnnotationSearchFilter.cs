#region Usings
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
	public class AnnotationSearchFilter
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public long? From { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public long? To { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? Limit { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? UserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string [] Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool MatchAny { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool SearchByDashboard => DashboardId.HasValue;
		/// <summary>
		/// 
		/// </summary>
		public bool SearchByTags => !SearchByDashboard;
		/// <summary>
		/// 
		/// </summary>
		public Kind? Type { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var root = $"{From}-{To}";

			if( SearchByDashboard )
				return $"{root} [Dashboard: {DashboardId}]";

			var tags = string.Join( ",", Tags );
			var matchAny = MatchAny ? "(match any)" : string.Empty;

			return $"{root} [Tags: {tags} {matchAny}]";
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum Kind 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Alert,
			/// <summary>
			/// 
			/// </summary>
			Annotation
			#endregion
		}
		
		#endregion
	}

	public static class AnnotationSearchFilterExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <param name="f"></param>
		/// <returns></returns>
		public static IQueryable<Annotation> Filter( 
			this IQueryable<Annotation> r, AnnotationSearchFilter f ) 
		{
			if( f.From.HasValue )
			{
				r = r.Where( x =>
				 ( 0 == x.EpochEnd && x.Epoch >= f.From ) ||
				 ( 0 != x.EpochEnd && ( x.Epoch >= f.From || x.EpochEnd >= f.From ) ) );
			}

			if( f.To.HasValue )
			{
				r = r.Where( x =>
					( 0 == x.EpochEnd && x.Epoch <= f.To ) ||
					( 0 != x.EpochEnd && ( x.Epoch <= f.To || x.EpochEnd <= f.To ) ) );
			}

			if( f.Type.HasValue ) 
			{
				r = ( f.Type.Value == AnnotationSearchFilter.Kind.Alert ) ?
					r.Where( x => x.AlertId.HasValue && x.AlertId > 0 ) :
					r.Where( x => !x.AlertId.HasValue || 0 == x.AlertId );
				//
			}

			if( f.SearchByDashboard )
			{
				if( f.DashboardId.HasValue )
				{
					r = r.Where( x => x.DashboardId == f.DashboardId.Value );
				}

				if( f.PanelId.HasValue )
				{
					r = r.Where( x => x.PanelId == f.PanelId.Value );
				}

				if( f.UserId.HasValue )
				{
					r = r.Where( x => x.UserId == f.UserId );
				}
			}

			if( f.Limit.HasValue )
			{
				r = r.Take( f.Limit.Value );
			}

			return r;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <param name="f"></param>
		/// <returns></returns>
		public static List<Annotation> FilterByTags( 
			this List<Annotation> r, AnnotationSearchFilter f ) 
		{
			bool tagPred( Annotation x ) => ( !f.MatchAny ) ?
				f.Tags.Intersect( x.Tags.Select( y => y.AnnotationTag.Term ) ).Count() == f.Tags.Length :
				f.Tags.Intersect( x.Tags.Select( y => y.AnnotationTag.Term ) ).Count() > 0;

			return r.Where( tagPred ).ToList();
		}
		#endregion
	}
}
