#region Usings
using System;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Class, Inherited = true, AllowMultiple = false )]
	public class AlertNotificationTypeAttribute : Attribute
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Type{ get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public AlertNotificationTypeAttribute( string t )
		{
			Type = t;
		}
		#endregion
	}
}


