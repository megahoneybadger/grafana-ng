#region Usings
using ED.Alerts;
using Newtonsoft.Json;
using System.Linq;
using ModelAlertNotification = ED.Alerts.AlertNotification;
using EntityAlertNotification = ED.Data.Alerts.AlertNotification;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class AlertNotification : IOrgSupportingEntity
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
		public string Uid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsDefault { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public bool DisableResolveMessage { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool SendReminder { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IncludeImage { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool SendOnAllAlerts { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string JsonData { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Name}|{Type}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelAlertNotification ToModel()
		{
			ModelAlertNotification nt = null;

			try
			{
				var target = typeof( ModelAlertNotification )
					.Assembly
					.FindTypesWithCustomAttribute<AlertNotificationTypeAttribute>()
					.FirstOrDefault( x => 0 == string.Compare( x.Item2.Type, Type, true ) );

				if( null == target )
					return nt; // check for plugins in neighbour dll's: todo

				var type = target.Item1;

				nt = JsonConvert.DeserializeObject( JsonData, type ) as ModelAlertNotification;

				if( null == nt )
					return nt;

				nt.Id = Id;
				nt.Uid = Uid;
				nt.IsDefault = IsDefault;
				nt.Name = Name;
				nt.OrgId = OrgId;
				nt.Type = Type;

				nt.DisableResolveMessage = DisableResolveMessage;
				nt.SendReminder = SendReminder;
				nt.IncludeImage = IncludeImage;
				nt.SendOnAllAlerts = SendOnAllAlerts;
			}
			catch
			{ }

			return nt;
		}
		/// <summary>
		/// 
		/// </summary>
		public void Update( ModelAlertNotification nt )
		{
			Name = nt.Name;

			DisableResolveMessage = nt.DisableResolveMessage;
			SendReminder = nt.SendReminder;
			SendOnAllAlerts = nt.SendOnAllAlerts;
			IncludeImage = nt.IncludeImage;
			IsDefault = nt.IsDefault;
			Type = nt.Type;

			if( !string.IsNullOrEmpty( nt.Uid ) )
			{
				Uid = nt.Uid;
			}

			JsonData = JsonConvert.SerializeObject( nt, new JsonSerializerSettings()
			{
				ContractResolver = new AlertNotificationPropertiesJsonResolver( true )
			} );
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class AlertNotificationExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="nt"></param>
		/// <returns></returns>
		public static EntityAlertNotification ToEntity( this ModelAlertNotification nt )
		{
			var e = new EntityAlertNotification()
			{
				Id = nt.Id,
				Uid = nt.Uid,
				OrgId = nt.OrgId,
				IsDefault = nt.IsDefault,
				Name = nt.Name,
				Type = nt.Type.ToString(),

				DisableResolveMessage = nt.DisableResolveMessage,
				SendReminder = nt.SendReminder,
				IncludeImage = nt.IncludeImage,
				SendOnAllAlerts = nt.SendOnAllAlerts
			};

			if( string.IsNullOrEmpty( e.Uid ) )
			{
				e.Uid = TestFactory.GetUid();
			}

			e.JsonData = JsonConvert.SerializeObject( nt, new JsonSerializerSettings()
			{
				ContractResolver = new AlertNotificationPropertiesJsonResolver( true )
			} );

			return e;
		}
		#endregion
	}
}
