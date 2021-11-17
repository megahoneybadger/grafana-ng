#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ModelAnnotation = ED.Dashboards.Annotation;
#endregion

namespace ED.Web.Dashboards
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/annotations/
	/// </summary>
	[Authenticate]
	[Route( "api/annotations" )]
	public class AnnotationController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public AnnotationRepository Repo => GetRepo<AnnotationRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public AnnotationController( IHttpContextAccessor accessor, DataContext dc )
			: base( accessor, dc )
		{
			//dc.FillDatabase();
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[DashboardHttpGet()]
		public async Task<IActionResult> Search( [FromQuery] SearchRequest sr ) =>
			( await Repo
				.Search( sr.ToFilter() ))
				.ToActionResult( x => ToSearchReply( x ) );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[AnnotationHttpPost( Permission.Edit )]
		public async Task<IActionResult> Create( AnnotationRequest r ) =>
			( await Repo
				.Create( r.ToModel( ActualUser.Id ) ) )
				.ToActionResult( x => new { Message = "Annotation added", x.Id } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[AnnotationHttpPut( "{id}", Permission.Edit )]
		public async Task<IActionResult> Update( int id, AnnotationUpdateRequest r ) =>
			(await Repo
				.Update( r.ToModel( ActualUser.Id, id ) ) )
				.ToActionResult( x => new { Message = "Annotation updated" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPatch( "{id}" )]
		public async Task<IActionResult> Patch( int id, AnnotationUpdateRequest r ) =>
			( await Repo
				.Update( r.ToModel( ActualUser.Id, id ), true ) )
				.ToActionResult( x => new { Message = "Annotation patched" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[AnnotationHttpDelete( "{id}", Permission.Edit )]
		public async Task<IActionResult> Delete( int id ) =>
			( await Repo
				.Delete( id ))
				.ToActionResult( x => new { Message = "Annotation deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[AnnotationHttpPost( "mass-delete", Permission.Edit )]
		public async Task<IActionResult> Delete( ClearRequest r ) =>
			( await Repo
				.Delete( r.DashboardId, r.PanelId ) )
				.ToActionResult( x => new { Message = "Annotations deleted" } );
		#endregion

		#region Class 'Convert' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		private static object ToSearchReply( IEnumerable<ModelAnnotation> op )
		{
			return op
				.Select( x => new
				{
					x.Id,
					x.DashboardId,
					x.PanelId,
					x.UserId,
					x.Bag.UserName,
					x.Time,
					x.TimeEnd,
					x.Text,
					x.Tags,

					Alert = ( null == x.Alert ) ? null : new 
					{
						x.Alert.Id,
						x.Alert.PrevState,
						x.Alert.CurrentState,
						Data = x.Alert.Data?.GetDataAsJsonElements()
					}
				} )
				.ToList();
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class AnnotationRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int? DashboardId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int? PanelId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public long? Time { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public long? TimeEnd { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Text { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string [] Tags { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Text}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelAnnotation ToModel( int userId, int annotId = 0 )
			{
				return new ModelAnnotation()
				{
					Id = annotId,
					UserId = userId,

					DashboardId = DashboardId.Value,
					PanelId = PanelId.Value,
					Time = Time,
					TimeEnd = TimeEnd,
					Text = Text,
					Tags = Tags
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class AnnotationUpdateRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public long? Time { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public long? TimeEnd { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Text { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string [] Tags { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int? AlertId { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				return $"{Text}";
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public ModelAnnotation ToModel( int userId, int annotId = 0 )
			{
				return new ModelAnnotation()
				{
					Id = annotId,
					UserId = userId,

					Time = Time,
					TimeEnd = TimeEnd,

					Text = Text,
					Tags = Tags,

					Alert = ModelAnnotation
						.AlertInfo
						.FromId( AlertId ) 
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class SearchRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public long? From{ get; set; }
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
			public AnnotationSearchFilter.Kind? Type { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public AnnotationSearchFilter ToFilter()
			{
				return new AnnotationSearchFilter()
				{
					UserId = UserId,
					DashboardId = DashboardId,
					PanelId = PanelId,

					From = From,
					To = To,
					Limit = Limit,

					MatchAny = MatchAny,
					Tags = Tags ?? new string [ 0 ],
					Type = Type
				};
			}
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class ClearRequest
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int DashboardId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			[Required]
			public int PanelId { get; set; }
			#endregion
		}
		#endregion
	}
}