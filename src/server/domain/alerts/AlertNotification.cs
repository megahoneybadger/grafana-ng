#region Usings
using System;
using System.ComponentModel.DataAnnotations;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotification : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Uid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsDefault { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public bool SendOnAllAlerts{ get; set; }
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
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( ReferenceEquals( this, obj ) )
				return true;

			var a = obj as AlertNotification;

			if( null == a )
				return false;

			if( !Id.Equals( a.Id ) )
				return false;

			if( !OrgId.Equals( a.OrgId ) )
				return false;

			if( Name != a.Name )
				return false;

			if( Type != a.Type )
				return false;

			if( IsDefault != a.IsDefault )
				return false;

			if( DisableResolveMessage != a.DisableResolveMessage )
				return false;

			if( SendReminder != a.SendReminder )
				return false;

			if( IncludeImage != a.IncludeImage )
				return false;

			if( SendOnAllAlerts != a.SendOnAllAlerts )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = 17;

			hash = hash * 23 + Id.GetHashCode();
			hash = hash * 23 + OrgId.GetHashCode();
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Type.GetHashCode();
			hash = hash * 23 + IsDefault.GetHashCode();
			hash = hash * 23 + DisableResolveMessage.GetHashCode();
			hash = hash * 23 + SendReminder.GetHashCode();
			hash = hash * 23 + IncludeImage.GetHashCode();
			hash = hash * 23 + SendOnAllAlerts.GetHashCode();

			return hash;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual AlertNotification Copy() 
		{
			return new AlertNotification()
			{
				Uid = Uid,
				Name = Name,
				Type = Type,
				IsDefault = IsDefault,

				SendOnAllAlerts = SendOnAllAlerts,
				DisableResolveMessage = DisableResolveMessage,
				SendReminder = SendReminder,
				IncludeImage = IncludeImage
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual AlertNotificationCommand Build( IEvaluationContext c )
		{
			return null;
		}
		#endregion
	}


}
