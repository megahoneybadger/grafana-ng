#region Usings
using System.Collections.Generic;
using EntityFolder = ED.Data.Folder;
using ModelFolder = ED.Dashboards.Folder;
using System.Linq;

#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class Folder : IOrgSupportingEntity
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
		public string Title { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Uid { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasAcl { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<Dashboard> Dashboards { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<FolderPermission> Permissions{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Title}|{Uid}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelFolder ToModel()
		{
			return new ModelFolder()
			{
				OrgId = OrgId,
				Id = Id,
				Title = Title,
				Uid = Uid,
				HasAcl = HasAcl
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		public void Update( ModelFolder f ) 
		{
			Title = f.Title;

			if( !string.IsNullOrEmpty( f.Uid ) ) 
			{
				Uid = f.Uid;
			}
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class FolderModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityFolder ToEntity( this ModelFolder f )
		{
			var e = new EntityFolder()
			{
				Id = f.Id,
				OrgId = f.OrgId,
				Title = f.Title,
				Uid = f.Uid
			};

			if( string.IsNullOrEmpty( e.Uid ) )
			{
				e.Uid = TestFactory.GetUid();
			}

			return e;
		}
		
		#endregion
	}
}
