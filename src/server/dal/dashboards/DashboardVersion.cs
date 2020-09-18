#region Usings
using ModelVersion = ED.Dashboards.DashboardVersion;
using ModelDashboard = ED.Dashboards.Dashboard;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class DashboardVersion
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int DashboardId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Version { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? ParentVersion{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? RestoredFrom { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Message { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Data { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int UserId { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public DashboardVersion() 
		{

		}
		/// <summary>
		/// 
		/// </summary>
		public DashboardVersion( ModelDashboard d  )
		{
			DashboardId = d.Id;

			var version = ExpandoHelper.GetProperty<int>( d, "Version" );
			var userId = ExpandoHelper.GetProperty<int>( d, "UserId" );

			var message = ExpandoHelper.HasProperty( d, "Message" ) ?
				d.Bag.Message : string.Empty;

			Version = version + 1;
			ParentVersion = version;
			RestoredFrom = 0;
			
			Message = ( string.IsNullOrEmpty( d.Uid ) ) ? "Initial save" : message;
			Data = d.Data;

			UserId = userId;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{DashboardId}|{ParentVersion ?? 0 }->{Version}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ModelVersion ToModel() 
		{
			return new ModelVersion()
			{
				Id = Id,
				DashboardId = DashboardId,
				Version = Version,
				ParentVersion = ParentVersion,
				RestoredFrom = RestoredFrom,
				Message = Message,
				Data = Data
			};
		}
		#endregion
	}
}
