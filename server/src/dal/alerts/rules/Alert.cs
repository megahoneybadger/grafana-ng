#region Usings
using ED.Alerts;
using ED.Time;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using ModelAlert = ED.Alerts.Alert;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class Alert : IOrgSupportingEntity
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
		public int DashboardId{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Message { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AlertState State { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Settings { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Frequency { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime NewStateDate { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int StateChanges{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Dashboard Dashboard { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<Annotation> Annotations { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{DashboardId}|{Name}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>^
		public ModelAlert ToModel()
		{
			var m = new ModelAlert()
			{
				Id = Id,
				OrgId = OrgId,
				DashboardId = DashboardId,
				DashboardUid = Dashboard?.Uid,
				Dashboard = Dashboard?.ToModel(),
				PanelId = PanelId,
				Name = Name,
				Message = Message,
				State = State,
				Settings = Settings,
				Frequency = Frequency,
				NewStateDate = NewStateDate,
				StateChanges = StateChanges,
			};

			m.Bag.DashboardTitle = Dashboard?.Title;

			return m;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		public void Update( Alerts.Rule r ) 
		{
			Name = r.Name;
			Frequency = ( int )DateTimeMathParser.ToDuration( r.Frequency );

			Settings = JsonConvert.SerializeObject( r, new JsonSerializerSettings 
			{
				NullValueHandling = NullValueHandling.Ignore,
				Formatting = Formatting.Indented
			}  );
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class AlertExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Alert ToEntity( this Alerts.Rule r )
		{
			var alert = new Alert()
			{
				PanelId = r.PanelId,
			};

			alert.Update( r );

			return alert;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static Alert ToEntity( this ModelAlert a )
		{
			var alert = new Alert()
			{
				DashboardId = a.DashboardId,
				OrgId = a.OrgId,
				PanelId = a.PanelId,
				Name = a.Name,
				State = a.State
			};

			return alert;
		}
		#endregion
	}

}

