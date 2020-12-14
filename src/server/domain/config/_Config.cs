#region Usings
using log4net;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;

using TotalSettingDictionary = System.Collections.Generic.Dictionary<string, System.Collections.Generic.Dictionary<string, string>>;
using SettingDictionary = System.Collections.Generic.Dictionary<string, string>;
using System;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Config
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private ConfigurationBuilder _builder;
		/// <summary>
		/// 
		/// </summary>
		private IConfigurationRoot _root;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		internal IConfigurationRoot Root => _root;
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "settings" );

		/// <summary>
		/// 
		/// </summary>
		private string InstanceName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		private AppModeType AppMode { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Paths Paths { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public Server Server { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public Security Security { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Alerting Alerting { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Log Log { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="home"></param>
		/// <param name="config"></param>
		public Config()
		{
			_builder = new ConfigurationBuilder();

			Paths = Paths.Read( _builder );
			_root = _builder.Build();

			InstanceName = _root.GetValue<string>( "instance_name", Environment.MachineName );

			AppMode = _root.GetValue<AppModeType>( "app_mode", AppModeType.Production );

			Server = Server.Read( this );

			Security = Security.Read( this );

			Alerting = Alerting.Read( this );

			Log = Log.Read( this );
			ED.Logger.Initialize( this );

			LogReport();
		}
		/// <summary>
		/// 
		/// </summary>
		private void LogReport() 
		{
			Logger.Info( $"Starting easy dashboard" );

			Logger.Info( $"Config loaded from: {Paths.DefaultConfigFile}" );

			if( File.Exists( Paths.CustomConfigFile ) )
			{
				Logger.Info( $"Config merged with: {Paths.CustomConfigFile}" );
			}

			Logger.Info( $"Path Home: {Paths.Home}" );
			Logger.Info( $"Path Data: {Paths.Data}" );
			Logger.Info( $"Path Logs: {Paths.Logs}" );
			Logger.Info( $"Path Pluging: {Paths.Plugins}" );
			Logger.Info( $"Path Provisioning: {Paths.Provisioning}" );
			Logger.Info( $"Path Image: {Paths.Images}" );
			Logger.Info( $"Path Database: {Paths.Database}" );
			Logger.Info( $"Root URL: {Server.RoorUrl}" );
		}
		#endregion

		#region Class 'Export' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public TotalSettingDictionary Export() 
		{
			return new TotalSettingDictionary
			{
				[ "GENERAL" ] = ExportGeneral(),
				[ Paths.SECTION_NAME ] = ExportPaths(),
				[ Server.SECTION_NAME ] = ExportServer(),
				[ Log.SECTION_ROOT_NAME ] = ExportLogRoot(),
				[ Log.SECTION_CONSOLE_NAME ] = ExportLogConsole(),
				[ Log.SECTION_DEBUG_NAME ] = ExportLogDebug()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportGeneral()
		{
			return new Dictionary<string, string>()
			{
				{ "app_mode", AppMode.ToString().ToLower() },
				{ "instance_name", InstanceName },
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportServer() 
		{
			return new Dictionary<string, string>()
			{
				{ "protocol", Server.Protocol.ToString().ToLower() },
				{ "http_port", Server.HttpPort.ToString() },
				{ "domain", Server.Domain },
				{ "root_url", Server.RoorUrl },
				{ "enforce_domain", Server.EnforceDomain.ToString().ToLower() }
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportPaths()
		{
			return new Dictionary<string, string>()
			{
				{ "data", Paths.GetRelative( Paths.Data ) },
				{ "logs", Paths.GetRelative( Paths.Logs ) },
				{ "plugins", Paths.GetRelative( Paths.Plugins ) },
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportLogRoot() 
		{
			return new Dictionary<string, string>()
			{
				{ "level", Log.Level.ToString().ToLower() },
				{ "mode", Log.Target.ToString().ToLower() }
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportLogConsole()
		{
			return new Dictionary<string, string>()
			{
				{ "level", Log.Console.Level.ToString().ToLower() },
				{ "format", Log.Console.Format }
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public SettingDictionary ExportLogDebug()
		{
			return new Dictionary<string, string>()
			{
				{ "level", Log.Debug.Level.ToString().ToLower() },
				{ "format", Log.Debug.Format }
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum AppModeType
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Production,
			/// <summary>
			/// 
			/// </summary>
			Development
			#endregion
		}
		#endregion
	}
}

