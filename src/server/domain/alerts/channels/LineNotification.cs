#region Usings
using System.ComponentModel.DataAnnotations;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	[AlertNotificationType( "line" )]
	public class LineNotification : AlertNotification 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Token { get; set; }
		#endregion

		#region Class public methods
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

			var a = obj as LineNotification;

			if( null == a )
				return false;

			if( !Token.Equals( a.Token ) )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = base.GetHashCode();

			hash = hash * 23 + Token.GetHashCode();

			return hash;
		}
		#endregion

		#region Class 'Build' command
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override AlertNotificationCommand Build( IEvaluationContext c )
		{
			return null;
		}
		#endregion
	}
}
