#region Usings
using System;
using ModelDashboard = ED.Dashboards.Dashboard;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class Alert : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string DashboardUid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public ModelDashboard Dashboard { get; set; }
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
		public int StateChanges { get; set; }
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
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( ReferenceEquals( this, obj ) )
				return true;

			var a = obj as Alert;

			if( null == a )
				return false;

			if( !Id.Equals( a.Id ) )
				return false;

			if( !OrgId.Equals( a.OrgId ) )
				return false;

			if( !DashboardId.Equals( a.DashboardId ) )
				return false;

			if( PanelId != a.PanelId )
				return false;

			if( Name != a.Name )
				return false;

			if( Message != a.Message )
				return false;

			if( Settings != a.Settings )
				return false;

			if( Frequency != a.Frequency )
				return false;

			if( NewStateDate != a.NewStateDate )
				return false;

			if( StateChanges != a.StateChanges )
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
			hash = hash * 23 + DashboardId.GetHashCode();
			hash = hash * 23 + PanelId.GetHashCode();
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Message.GetHashCode();
			hash = hash * 23 + State.GetHashCode();
			hash = hash * 23 + Settings.GetHashCode();
			hash = hash * 23 + Frequency.GetHashCode();
			hash = hash * 23 + NewStateDate.GetHashCode();
			hash = hash * 23 + StateChanges.GetHashCode();

			return hash;
		}
		#endregion
	}
}
