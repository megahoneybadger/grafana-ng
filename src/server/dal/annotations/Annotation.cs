#region Usings
using ED.Data.Alerts;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using ModelAnnotation = ED.Dashboards.Annotation;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class Annotation : IOrgSupportingEntity
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
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
		public int CategoryId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Title { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Text { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public Alert Alert { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? AlertId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public ED.Alerts.AlertState? PrevAlertState { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public ED.Alerts.AlertState? CurrentAlertState { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string AlertData { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public long Epoch { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public long? EpochEnd { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<AnnotationTagMember> Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public User User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Dashboard Dashboard { get; set; }
		
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{DashboardId}|{Text}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>^
		public ModelAnnotation ToModel()
		{
			var m = new ModelAnnotation()
			{
				Id = Id,
				OrgId = OrgId,
				UserId = UserId,

				DashboardId = DashboardId ?? 0,
				PanelId = PanelId,
				Text = Text,
				Title = Title,
				Time = Epoch,
				TimeEnd = EpochEnd,
				Tags = Tags?
					.Select( x => x.AnnotationTag.Term )
					.OrderBy( x => x )
					.ToList(),
			};

			if( AlertId.HasValue && AlertId != 0 ) 
			{
				m.Alert = new ModelAnnotation.AlertInfo()
				{
					Id = AlertId.Value,
					PrevState = PrevAlertState ?? ED.Alerts.AlertState.Unknown,
					CurrentState = CurrentAlertState ?? ED.Alerts.AlertState.Unknown,
					Data = AlertData
				};
			}

			m.Bag.UserName = ( null != User ) ? User.Login : string.Empty;

			return m;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public void Update( ModelAnnotation ann, List<AnnotationTag> tags, bool patch )
		{
			if( patch )
			{
				UserId = ann.UserId ?? UserId;
				Epoch = ann.Time ?? Epoch;
				EpochEnd = ann.TimeEnd ?? EpochEnd;
				Text = ann.Text ?? Text;

				if( null != tags ) 
				{
					IncludeTags( tags );
				}
			}
			else 
			{
				UserId = ann.UserId;
				Epoch = ann.Time ?? 0;
				EpochEnd = ann.TimeEnd ?? 0;
				Text = ann.Text;

				IncludeTags( tags );
			}

			if( null != ann.Alert && 0 != ann.Alert.Id ) 
			{
				AlertId = ann.Alert?.Id;
				UserId = null;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="tags"></param>
		public Annotation IncludeTags( List<AnnotationTag> tags ) 
		{
			Tags = tags?
				.Select( x => new AnnotationTagMember()
				{
					Annotation = this,
					AnnotationTag = x
				} )
				.ToList();

			return this;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class AnnotationExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Annotation ToEntity( this ModelAnnotation a )
		{
			return new Annotation()
			{
				Id = a.Id,
				OrgId = a.OrgId,
				UserId = a.UserId,

				DashboardId = a.DashboardId,
				PanelId = a.PanelId,
				Text = a.Text,
				Title = a.Title,
				Epoch = a.Time ?? 0,
				EpochEnd = a.TimeEnd
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Annotation ToEntity( this EvaluationContext a )
		{
			return new Annotation()
			{
				UserId = null,

				DashboardId = a.DashboardId,
				PanelId = a.PanelId,
				//Text = a.Text,
				//Title = a.Title,

				Epoch = ( ( DateTimeOffset )a.EndTime ).ToUnixTimeMilliseconds(),
				//EpochEnd = a.TimeEnd
				AlertId = a.AlertId,
				PrevAlertState = a.PrevAlertState,
				CurrentAlertState = a.State,
				AlertData = ( null != a.Matches && a.Matches.Count > 0 ) ?
					JsonConvert.SerializeObject( a.Matches ) : null
			};
		}
		#endregion
	}
}
