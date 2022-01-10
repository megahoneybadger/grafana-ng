#region Usings
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using EntityDashboard = ED.Data.Dashboard;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelVersion = ED.Dashboards.DashboardVersion;
using EntityTag = ED.Data.DashboardTag;
using Newtonsoft.Json.Linq;
using System;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class Dashboard : IOrgSupportingEntity
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
		public string Data { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? FolderId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Folder Folder { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<DashboardTag> Tags { get; set; } = new List<DashboardTag>();
		/// <summary>
		/// 
		/// </summary>
		public List<DashboardStar> Stars { get; set; } = new List<DashboardStar>();
		/// <summary>
		/// 
		/// </summary>
		public List<DashboardVersion> Versions{ get; set; } = new List<DashboardVersion>();
		/// <summary>
		/// 
		/// </summary>
		public List<DashboardPermission> Permissions { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<Annotation> Annotations { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public List<Alert> Alerts{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Title}|{Uid}" + ( FolderId.HasValue ? $" @{FolderId}" : "" );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelDashboard ToModel()
		{
			var md = new ModelDashboard()
			{
				OrgId = OrgId,
				Id = Id,
				Title = Title,
				Uid = Uid,
				HasAcl = HasAcl,
				Data = Data,
				FolderId = FolderId,
				Tags = Tags
					.Select( x => x.Term )
					.ToList(),
				Stars = Stars
					.Select( x => x.UserId )
					.ToList()
			};

			md.Bag.FolderUid = Folder?.Uid;
			md.Bag.FolderTitle = Folder?.Title;
			md.Bag.FolderUrl = Folder?.ToModel().Url;

			return md;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		public void Update( DataContext dc, ModelDashboard d )
		{
			Title = d.Title;
			FolderId = d.FolderId;
			Data = d.Data;
			
			Tags = new List<EntityTag>();

			if( null != d.Tags && d.Tags.Count() > 0 ){
				Tags = d
					.Tags
					.Select( x => new EntityTag(){ Term = x } )
					.ToList();
			}

			if( !string.IsNullOrEmpty( d.Uid ) )
			{
				Uid = d.Uid;
			}

			Versions.Add( new DashboardVersion( d ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		public void Restore( int version, DashboardVersion v )
		{
			Data = v.Data;

			Versions.Add( new DashboardVersion()
			{
				DashboardId = Id,
				Version = version + 1,
				ParentVersion = v.Version,

				RestoredFrom = v.Version,
				Message = $"Restored from version {v.Version}",
				Data = v.Data
			} );
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class DashboardModelExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static EntityDashboard	ToEntity( this ModelDashboard d, DataContext dc )
		{
			var e = new EntityDashboard()
			{
				Id = d.Id,
				OrgId = d.OrgId,
				Title = d.Title,
				Uid = d.Uid,
				Data = d.Data,
				FolderId = d.FolderId
			};

			if( null != d.Tags ) 
			{
				e.Tags = d
					.Tags
					.Select( x => new DashboardTag() { Term = x } )
					.ToList();
			}

			if( string.IsNullOrEmpty( e.Uid ) )
			{
				e.Uid = TestFactory.GetUid();
			}

			return e;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public static object GetDataAsJsonElement( this ModelDashboard d ) 
		{
			return GetDataAsJsonElement( d.Data );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public static object GetDataAsJsonElement( this ModelVersion d )
		{
			return GetDataAsJsonElement( d.Data );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public static object GetDataAsJsonElement( this string text )
		{
			//var data = new JsonElement();
			var data = new JObject();

			if( null != text )
			{
				try
				{
					//data = JsonSerializer.Deserialize<JsonElement>( d.Data );
					data = JObject.Parse( text );
				}
				catch//( Exception e ) 
				{
				}
			}

			//return ( data.ValueKind == JsonValueKind.Undefined ) ? null : ( object )data;
			return data;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		public static object GetDataAsJsonElements( this string text )
		{
			//var data = new JsonElement();
			var data = new JArray();

			if( null != text )
			{
				try
				{
					//data = JsonSerializer.Deserialize<JsonElement>( d.Data );
					data = JArray.Parse( text );
				}
				catch//( Exception e ) 
				{
				}
			}

			//return ( data.ValueKind == JsonValueKind.Undefined ) ? null : ( object )data;
			return data;
		}
		#endregion
	}
}
