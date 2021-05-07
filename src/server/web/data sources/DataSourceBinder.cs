#region Usings
using ED.Plugins;
using log4net;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Web.DataSources
{
	/// <summary>
	/// 
	/// </summary>
	public class DataSourceBinder : JsonBinder<ModelDataSource>
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly Dictionary<string, Type> _types;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "plugins-manager" );
		#endregion

		#region Class initializations
		/// <summary>
		/// 
		/// </summary>
		public DataSourceBinder( PluginManager pm )
		{
			_types = new Dictionary<string, Type>();

			pm
				.DataSourceModelBindings
				.ToList()
				.ForEach( x => _types [ x.id ] = x.type );
		}
	
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="objectType"></param>
		/// <param name="jObject"></param>
		/// <returns></returns>
		protected override ModelDataSource Create( Type objectType, JObject jObject )
		{
			try
			{
				var type = jObject.GetValue( "type", StringComparison.InvariantCultureIgnoreCase );

				if( null == type )
					return null;

				//var res = Enum.TryParse<DataSourceType>(
				//	type.Value<string>(), true, out DataSourceType key );

				//if( !res )
				//	return null;

				var key = type.Value<string>();

				if( !_types.TryGetValue( key, out Type dsType ) )
					return null;

				return ( ModelDataSource )jObject.ToObject( dsType );
			}
			catch//( Exception e )
			{ }

			return null;
		}
		#endregion
	}
}
