#region Usings
using ED.Configuration;
using log4net;
using log4net.Appender;
using log4net.Core;
using log4net.Filter;
using log4net.Layout;
using log4net.Repository.Hierarchy;
using log4net.Util;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Runtime.CompilerServices;
using static ED.Configuration.Log;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public class Logger
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string REPO = "main-repo";
		/// <summary>
		/// 
		/// </summary>
		private const string FILE_NAME = "ed.log";
		/// <summary>
		/// 
		/// </summary>
		private const string FILE_DATE_PATTERN = "yyyyMMdd-HHmm";
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="log"></param>
		public static void Initialize( Config config ) 
		{
			var repo = ( Hierarchy )LogManager.CreateRepository( REPO );

			var layout = new PatternLayout
			{
				ConversionPattern = "[%date][%level][%logger] %message%newline"
			};

			layout.ActivateOptions();

			if( config.Log.Target.HasFlag( Log.LogTarget.Console ) ) 
			{
				repo.Root.AddAppender( new ConsoleAppender() 
				{
					Layout = layout,
					Threshold = config.Log.Console.Level.ToLog4NetLevel()
				});
			}

			if( config.Log.Target.HasFlag( Log.LogTarget.File ) )
			{
				var rollingFileAppender = new RollingFileAppender
				{
					File = Path.Combine( config.Paths.Logs, FILE_NAME ),
					AppendToFile = true,

					RollingStyle = RollingFileAppender.RollingMode.Size,

					DatePattern = FILE_DATE_PATTERN,
					Layout = layout,
					//ImmediateFlush = true,
					MaximumFileSize = "250KB",
					StaticLogFileName = false,
					//Threshold = Level.All
					//FilterHead = filter

					SecurityContext = NullSecurityContext.Instance
				};

				repo.Root.AddAppender( rollingFileAppender );
			}

			if( config.Log.Target.HasFlag( Log.LogTarget.Debug ) )
			{
				repo.Root.AddAppender( new DebugAppender()
				{
					Layout = layout,
					Category = null,
					Threshold = config.Log.Debug.Level.ToLog4NetLevel()
				});
			}

			repo.Root.Level = config.Log.Level.ToLog4NetLevel();
			AddFilter( config.Log.Filters );

			repo.Configured = true;

			//log4net.Util.LogLog.InternalDebugging = true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filters"></param>
		private static void AddFilter( string filters ) 
		{
			if( string.IsNullOrEmpty( filters ) || string.IsNullOrWhiteSpace( filters ) )
				return;

			var arr = filters.Split( " " );

			foreach( var f in arr ) 
			{
				var kp = f.Split( ":" );

				if( kp.Length < 2 )
					continue;

				var key = kp [ 0 ];

				var res = Enum.TryParse<LogLevel>( kp [ 1 ], true, out LogLevel level );

				if( !res )
					throw new InvalidValueException( kp[ 1 ] );

				var logger = LogManager.GetLogger( REPO, key );

				( ( log4net.Repository.Hierarchy.Logger )logger.Logger ).Level = level.ToLog4NetLevel();
			}
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="name"></param>
		public static ILog GetLogger( string name ) => LogManager.GetLogger( REPO, name );
		#endregion
	}
}
