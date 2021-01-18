#region Usings
using ED.DataSources;
using ED.Plugins;
using Newtonsoft.Json;
using System.Linq;
using EntityDataSource = ED.Data.DataSource;
using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	[VersionSupportingEntity]
	public class DataSource : IOrgSupportingEntity
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
		public bool IsDefault { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Url { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string JsonData { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{OrgId}|{Id}|{Type}|{Name}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public ModelDataSource ToModel()
		{
			ModelDataSource ds = null;

			try
			{
				var target = typeof( ModelDataSource )
					.Assembly
					.FindTypesWithCustomAttribute<DataSourceTypeAttribute>()
					.FirstOrDefault( x => x.Item2.Type == Type );

				if( null == target )
					return ds; // check for plugins in neighbour dll's: todo

				var type = target.Item1;

				ds = JsonConvert.DeserializeObject( JsonData, type ) as ModelDataSource;

				if( null == ds )
					return ds;

				ds.Id = Id;
				ds.IsDefault = IsDefault;
				ds.Name = Name;
				ds.OrgId = OrgId;
				ds.Url = Url;
			}
			catch
			{ }

			return ds;
		}
		/// <summary>
		/// 
		/// </summary>
		public void Update( ModelDataSource ds ) 
		{
			Name = ds.Name;
			Url = ds.Url;
			IsDefault = ds.IsDefault;

			JsonData = JsonConvert.SerializeObject( ds, new JsonSerializerSettings()
			{
				ContractResolver = new DataSourcePropertiesJsonResolver( true )
			} );
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	internal static class DataSourceExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static DataSource ToEntity( this ModelDataSource ds )
		{
			var entity = new EntityDataSource()
			{
				Id = ds.Id,
				OrgId = ds.OrgId,
				IsDefault = ds.IsDefault,
				Name = ds.Name,
				Type = ds.Type.ToString(),
				Url = ds.Url
			};

			entity.JsonData = JsonConvert.SerializeObject( ds, new JsonSerializerSettings()
			{
				ContractResolver = new DataSourcePropertiesJsonResolver( true )
			} );

			return entity;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static ModelDataSource IncludePluginInfo( this ModelDataSource m, PluginManager pm )
		{
			var plugin = pm?[ m.Type ];

			if( null != plugin ) 
			{
				m.TypeLogoUrl = $"{m.Type}/{plugin.Info.Logos.Large}";
			}

			return m; 
		}
		///// <summary>
		///// 
		///// </summary>
		///// <param name="ds"></param>
		///// <returns></returns>
		//public static EntityDataSource IncludeId( this EntityDataSource entity )
		//{
		//	ds.Id = entity.Id;
		//	ds.OrgId = entity.OrgId;

		//	return entity;
		//}
		#endregion
	}
}
