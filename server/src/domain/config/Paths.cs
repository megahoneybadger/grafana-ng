#region Usings
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Paths
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_NAME = "paths";
		/// <summary>
		/// 
		/// </summary>
		private const string ARG_HOMEPATH = "homepath";
		/// <summary>
		/// 
		/// </summary>
		private const string ARG_CONFIG_FILE = "config";
		/// <summary>
		/// 
		/// </summary>
		private const string DEFAULT_CONFIG_FILE = "defaults.ini";
		/// <summary>
		/// 
		/// </summary>
		private const string CUSTOM_CONFIG_FILE = "custom.ini";
		/// <summary>
		/// 
		/// </summary>
		private const string FOLDER_CONF = "conf";
		/// <summary>
		/// 
		/// </summary>
		private const string KEY_DATABASE = "database:path";
		/// <summary>
		/// 
		/// </summary>
		private const string VALUE_DATABASE = "ed.db";

		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Home { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Conf => Path.Combine( Home, FOLDER_CONF );
		/// <summary>
		/// 
		/// </summary>
		public string DefaultConfigFile => Path.Combine( Conf, DEFAULT_CONFIG_FILE );
		/// <summary>
		/// 
		/// </summary>
		public string CustomConfigFile { get; set; }
		/// <summary>
		/// Path to where ed can store temp files, sessions, and the sqlite3 db (if that is used)
		/// </summary>
		public string Data { get; set; } = string.Empty;
		/// <summary>
		/// Directory where ed can store logs
		/// </summary>
		public string Logs { get; set; } = string.Empty;
		/// <summary>
		/// Temporary files in `data` directory older than given duration will be removed
		/// </summary>
		public string TempDataLifetime { get; set; } = string.Empty;
		/// <summary>
		/// Directory where ed will automatically scan and look for plugins
		/// </summary>
		public string Plugins { get; set; } = string.Empty;
		/// <summary>
		/// Folder that contains provisioning config files that ed will apply on startup and while running.
		/// </summary>
		public string Provisioning { get; set; } = string.Empty;
		/// <summary>
		/// 
		/// </summary>
		public string Database { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Images => Path.Combine( Data, "png" );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public static Paths Read( ConfigurationBuilder builder )
		{
			var p = new Paths();

			p.ReadCommandLineArgs( builder );

			var root = builder.Build();

			root.Read<Paths>( SECTION_NAME, p );

			p.Data = p.NormalizeFolder( p.Data );

			p.Plugins = p.NormalizeFolder( p.Plugins );

			p.Provisioning = p.NormalizeFolder( p.Provisioning );

			p.Logs = p.NormalizeFolder( p.Logs );

			p.NormalizeFolder( p.Images );

			var database = root.GetValue( KEY_DATABASE, VALUE_DATABASE );
			p.Database = p.NormalizeFile( p.Data, database );

			return p;
		}
		/// <summary>
		/// 
		/// </summary>
		private void ReadCommandLineArgs( ConfigurationBuilder builder ) 
		{
			var config = builder
				.AddCommandLine( Environment.GetCommandLineArgs() )
				.Build();

			Home = Path.GetFullPath( config.GetValue(
				ARG_HOMEPATH, Environment.CurrentDirectory ) );

			CheckFolderExists( ARG_HOMEPATH, Home );

			NormalizeFolder( Conf );

			CustomConfigFile = NormalizeFile( Conf, 
				config.GetValue( ARG_CONFIG_FILE, CUSTOM_CONFIG_FILE ) );

			CheckFileExists( ARG_CONFIG_FILE, DefaultConfigFile );

			MergeIniFile( builder, DefaultConfigFile );

			if( File.Exists( CustomConfigFile ) )
			{
				MergeIniFile( builder, CustomConfigFile );
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		/// <param name="value"></param>
		internal static void CheckFolderExists( string key, string value )
		{
			if( !Directory.Exists( value ) )
				throw new InvalidPathException( key, value );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		/// <param name="value"></param>
		internal static void CheckFileExists( string key, string value )
		{
			if( !File.Exists( value ) )
				throw new InvalidPathException( key, value );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="folder"></param>
		/// <returns></returns>
		private string NormalizeFolder( string folder ) 
		{
			if( !Path.IsPathFullyQualified( folder ) )
			{
				folder = Path.GetFullPath( Path.Combine( Home, folder ) );
			}

			if( !Directory.Exists( folder ) ) 
			{
				Directory.CreateDirectory( folder );
			}

			return folder;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="folder"></param>
		/// <returns></returns>
		private string NormalizeFile( string root, string file )
		{
			if( Path.IsPathFullyQualified( file ) )
				return file;

			file = Path.GetFullPath( Path.Combine( root, file ) );

			return file;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="builder"></param>
		/// <param name="path"></param>
		/// <returns></returns>
		private void MergeIniFile( ConfigurationBuilder builder, string path )
		{
			try
			{
				builder
					.AddIniFile( path )
					.Build();
			}
			catch( Exception e )
			{
				throw new InvalidIniFileException( path, e.Message );
			}

		}
		#endregion
	}
}

