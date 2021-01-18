#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class Annotation : OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? UserId { get; set; }
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
		public long? Time { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public long? TimeEnd { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<string> Tags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AlertInfo Alert { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Annotation Copy()
		{
			return new Annotation()
			{
				OrgId = OrgId,
				Id = Id,

				UserId = UserId,
				Title = Title,
				Text = Text,
				DashboardId = DashboardId,
				PanelId = PanelId,
				Time = Time,
				TimeEnd = TimeEnd,
				Tags = Tags?.ToList(),

				Alert = Alert?.Copy()
			};
		}
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
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( ReferenceEquals( this, obj ) )
				return true;

			var a = obj as Annotation;

			if( null == a )
				return false;

			if( !Id.Equals( a.Id ) )
				return false;

			if( !OrgId.Equals( a.OrgId ) )
				return false;

			if( !UserId.Equals( a.UserId ) )
				return false;

			if( Title != a.Title )
				return false;

			if( Text != a.Text )
				return false;

			if( DashboardId != a.DashboardId )
				return false;

			if( PanelId != a.PanelId )
				return false;

			if( !Nullable.Equals( Time, a.Time ) )
				return false;

			if( !Enumerable.SequenceEqual( Tags.OrderBy( x => x ), a.Tags.OrderBy( x => x ) ) )
				return false;

			if( !Nullable.Equals( Alert, a.Alert ) )
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
			hash = hash * 23 + UserId.GetHashCode();
			hash = hash * 23 + Title.GetHashCode();
			hash = hash * 23 + Text.GetHashCode();
			hash = hash * 23 + DashboardId.GetHashCode();
			hash = hash * 23 + PanelId.GetHashCode();
			hash = hash * 23 + Time.GetHashCode();

			if( null != Alert ) 
			{
				hash = hash * 23 + Alert.GetHashCode();
			}

			return hash;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class AlertInfo
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int Id { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Alerts.AlertState PrevState { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Alerts.AlertState CurrentState { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Data { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <param name="id"></param>
			/// <returns></returns>
			public static AlertInfo FromId( int? id ) 
			{
				return ( !id.HasValue ) ? null : new AlertInfo() { Id = id.Value };
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

				var a = obj as AlertInfo;

				if( null == a )
					return false;

				if( !Id.Equals( a.Id ) )
					return false;

				if( !PrevState.Equals( a.PrevState ) )
					return false;

				if( !CurrentState.Equals( a.CurrentState ) )
					return false;

				if( Data != a.Data )
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
				hash = hash * 23 + PrevState.GetHashCode();
				hash = hash * 23 + CurrentState.GetHashCode();
				hash = hash * 23 + Data.GetHashCode();

				return hash;
			}
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public AlertInfo Copy()
			{
				return new AlertInfo
				{
					Id = Id,
					PrevState = PrevState,
					CurrentState = CurrentState,
					Data = Data
				};
			}
			#endregion
		}
		#endregion
	}
}
