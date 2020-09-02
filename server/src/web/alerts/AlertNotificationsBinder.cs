#region Usings
using ED.Alerts;
using ED.DataSources.InfluxDb;
using ED.DataSources.MySQL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using ModelAlertNotification = ED.Alerts.AlertNotification;
#endregion

namespace ED.Web.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotificationsBinder : JsonBinder<ModelAlertNotification>
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly Dictionary<string, Type> _types;
		#endregion

		#region Class initializations
		/// <summary>
		/// 
		/// </summary>
		public AlertNotificationsBinder()
		{
			_types = new Dictionary<string, Type>();

			ExtractChannels();
		}
		/// <summary>
		/// 
		/// </summary>
		private void ExtractChannels()
		{
			try
			{
				var root = Path.GetDirectoryName(
				Assembly.GetEntryAssembly().Location );

				var domainLibraryPath = Path.Combine( root, "ed.domain.dll" );

				var domainLibrary = Assembly.LoadFrom( domainLibraryPath );

				domainLibrary
					.GetTypes()
					.Select( x => new { Type = x, Attr = x.GetCustomAttribute<AlertNotificationTypeAttribute>() } )
					.Where( x => null != x.Attr )
					.ToList()
					.ForEach( x => _types [ x.Attr.Type.ToLower() ] = x.Type );
			}
			catch { }
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="objectType"></param>
		/// <param name="jObject"></param>
		/// <returns></returns>
		protected override ModelAlertNotification Create( Type objectType, JObject jObject )
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

				var key = type
					.Value<string>()
					.ToLower();

				if( !_types.TryGetValue( key, out Type ntType ) )
					return null;

				return ( ModelAlertNotification )jObject.ToObject( ntType );
			}
			catch//( Exception e )
			{ 
			}

			return null;
		}
		#endregion
	}
}
