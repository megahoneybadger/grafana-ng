#region Usings
using ED.Security;
using System;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboardPermission = ED.Dashboards.DashboardPermission;
using ModelDashboardPermissions = System.Collections.Generic.List<ED.Dashboards.DashboardPermission>;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class DashboardPermission : DomainPermission
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int OrgId { get; set; }
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
			var header = $"{Id}|{Dashboard?.Id}|{Dashboard?.Uid}";

			var body = ( null != Role ) ?
				$"role [{Role}|{Permission}]" : ( null != Team?.Id ) ?
					$"team [{Team?.Id}|{Permission}]" : $"user [{User?.Id}|{Permission}]"; ;

			return $"{header} {body}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static ModelDashboardPermissions GetDefault( ModelDashboard db )
		{
			var list = new ModelDashboardPermissions();

			var editor = new ModelDashboardPermission()
			{
				Role = Security.Role.Editor,
				Permission = Security.Permission.Edit,
				Dashboard = db,
			};

			var viewer = new ModelDashboardPermission()
			{
				Role = Security.Role.Viewer,
				Permission = Security.Permission.View,
				Dashboard = db,
			};

			editor.Bag.Created = editor.Bag.Updated =
				viewer.Bag.Created = viewer.Bag.Updated = DateTime.Now;

			list.Add( editor );
			list.Add( viewer );

			return list;
		}
		#endregion
	}
}
