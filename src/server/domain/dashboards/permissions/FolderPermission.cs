#region Usings
using ED.Security;
using System;

using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelFolder = ED.Dashboards.Folder;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
#endregion

namespace ED.Dashboards
{
	/// <summary>
	/// 
	/// </summary>
	public class FolderPermission : DomainPermission
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Folder Folder { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var header = $"{Id}|{Folder?.Id}|{Folder?.Uid}";

			var body = ( null != Role ) ?
				$"role [{Role}|{Permission}]" : ( null != Team?.Id ) ?
					$"team [{Team?.Id}|{Permission}]" : $"user [{User?.Id}|{Permission}]"; ;

			return $"{header} {body}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public FolderPermission Copy()
		{
			return new FolderPermission()
			{
				Folder = Folder,
				User = User,
				Team = Team,
				Role = Role,
				Permission = Permission
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static ModelFolderPermissions GetDefault( ModelFolder f )
		{
			var list = new ModelFolderPermissions();

			var editor = new ModelFolderPermission()
			{
				Folder = f,
				Role = Security.Role.Editor,
				Permission = Security.Permission.Edit,
			};

			var viewer = new ModelFolderPermission()
			{
				Folder = f,
				Role = Security.Role.Viewer,
				Permission = Security.Permission.View
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
