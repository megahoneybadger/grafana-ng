#region Usings
using ED.Configuration;
using ED.DataSources;
using log4net;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
#endregion

namespace ED.Plugins
{
	/// <summary>
	/// 
	/// </summary>
	public class PluginManager : IPluginManager
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string PLUGIN_FILE = "plugin.json";
		/// <summary>
		/// 
		/// </summary>
		private const string EXCLUDE_FOLDER = "node_modules";
		#endregion

		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly Config _config;
		/// <summary>
		/// 
		/// </summary>
		private List<Plugin> _plugins;
		/// <summary>
		/// 
		/// </summary>
		private Dictionary<string, Type> _dataSourceBindings;
		/// <summary>
		/// 
		/// </summary>
		private readonly object _syncObject;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "plugins-manager" );
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Plugin> Plugins 
		{
			get 
			{
				lock( _syncObject ) 
				{
					return _plugins
						.Select( x => x.Copy() )
						.ToList();
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<(string id, Type type)> Bindings
		{
			get
			{
				lock( _syncObject ) 
				{
					return _dataSourceBindings
						.Select( x => (x.Key, x.Value) )
						.ToList();
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Plugin> DataSources 
		{
			get 
			{
				return Plugins
					.Where( x => x.Type == Plugin.Kind.Datasource )
					.ToList();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		/// <returns></returns>
		public IEnumerable<Plugin> this [ Plugin.Kind? t ] 
		{
			get 
			{
				var plugins = ( t.HasValue ) ? Plugins.Where( x => x.Type == t ) : Plugins;

				return plugins.ToList();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		/// <returns></returns>
		public Plugin this [ string id ] =>
			Plugins.FirstOrDefault( x => x.Id == id );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		public PluginManager( Config c ) 
		{
			_config = c;
			Logger.Info( "Initialized" );

			_plugins = new List<Plugin>();
			_dataSourceBindings = new Dictionary<string, Type>();
			_syncObject = new object();

			Scan( c.Paths.EmbeddedPlugins );
			//Scan( c.Paths.EmbeddedPlugins2 );
		}
		#endregion

		#region Class 'Scan' methods
		/// <summary>
		/// 
		/// </summary>
		private void Scan( string folder ) 
		{
			try
			{
				if( !Directory.Exists( folder ) )
				{
					Logger.Error( $"Directory [{folder}] does not exist" );
					return;
				}

				static bool filter( string d ) =>
					!d.Contains( EXCLUDE_FOLDER, StringComparison.OrdinalIgnoreCase );

				GetFiles( folder, filter, PLUGIN_FILE )
					.Select( x => Read( x ) )
					.Where( x => null != x )
					.ToList();
					
			}
			catch( Exception e ) 
			{
				Logger.Error( $"Failed to scan [{folder}]: {e.Message}" );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="file"></param>
		/// <returns></returns>
		private Plugin Read( string file ) 
		{
			try
			{
				var content = File.ReadAllText( file );

				var p = JsonConvert.DeserializeObject<Plugin>( content );

				if( string.IsNullOrEmpty( p.Id ) )
					throw new Exception( "Id property is null or empty" );

				p.Folder = Path.GetDirectoryName( file );

				var module = Path.Combine( p.Folder, p.Module );

				if( !File.Exists( module ) )
					throw new Exception( $"Module file [{p.Module}] not found." );

				//p.Module = module;

				p.Info.Logos.Normalize( p.Folder );

				lock( _syncObject )
				{
					_plugins.Add( p );
				}

				Logger.Info( $"Add {p.Type.ToString().ToLower()} [{p.Name}]" );

				if( p.Type == Plugin.Kind.Datasource ) 
				{
					AddDataSourceModelBinding( p );
				}
			}
			catch ( Exception e )
			{
				Logger.Error( $"Failed to read [{file}]. {e.Message}" );
			}

			return null;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="p"></param>
		private void AddDataSourceModelBinding( Plugin p ) 
		{
			var file = Path.Combine( _config.Paths.Bin, p.BackendLibrary );

			try
			{
				var tp = Assembly
					.LoadFrom( file )
					.FindTypeWithCustomAttribute<DataSourceAttribute>();

				if( null != tp )
				{
					_dataSourceBindings [ tp.Item2.Type ] = tp.Item1;
				}
				else 
				{
					Logger.Error( $"Binder for [{p.Name}] not found" );
				}
			}
			catch
			{
				Logger.Error( $"Plugin's backend library [{file}] does not exist" );
			}
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="rootDirectory"></param>
		/// <param name="directoryFilter"></param>
		/// <param name="filePattern"></param>
		/// <returns></returns>
		public static IEnumerable<string> GetFiles( string rootDirectory,
			Func<string, bool> directoryFilter, string filePattern )
		{
			foreach( string matchedFile in Directory.GetFiles( rootDirectory, filePattern, SearchOption.TopDirectoryOnly ) )
			{
				yield return matchedFile;
			}

			var matchedDirectories = Directory
				.GetDirectories( rootDirectory, "*.*", SearchOption.TopDirectoryOnly )
				.Where( directoryFilter );

			foreach( var dir in matchedDirectories )
			{
				foreach( var file in GetFiles( dir, directoryFilter, filePattern ) )
				{
					yield return file;
				}
			}
		}
		#endregion
	}
}


