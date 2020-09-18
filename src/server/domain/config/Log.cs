#region Usings
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class Log
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_ROOT_NAME = "log";
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_CONSOLE_NAME = "log.console";
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_DEBUG_NAME = "log.debug";
		/// <summary>
		/// 
		/// </summary>
		private const string SECTION_FILE_NAME = "log:file";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public LogTarget Target { get; set; } = LogTarget.Console;
		/// <summary>
		/// 
		/// </summary>
		public LogLevel Level { get; set; } = LogLevel.Info;
		/// <summary>
		/// 
		/// </summary>
		public bool EnableEF { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool EnableASP { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public LogConsole Console { get; set; } = new LogConsole();
		/// <summary>
		/// 
		/// </summary>
		public LogDebug Debug { get; set; } = new LogDebug();
		/// <summary>
		/// 
		/// </summary>
		public string Filters { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public static Log Read( Config c )
		{
			var s = c
				.Root
				.Read<Log>( SECTION_ROOT_NAME );

			var mode = c
				.Root
				.GetValue<string>( $"{SECTION_ROOT_NAME}:mode", LogTarget.Console.ToString() );

			var target = LogTarget.None;

			mode
				.Split( " " )
				.ToList()
				.ForEach( x =>
				{
					var res = Enum.TryParse<LogTarget>( x, true, out LogTarget mode );

					if( !res )
						throw new InvalidValueException( x );

					target |= mode;
				} );

			s.Target = target;

			s.Console = c
				.Root
				.Read<LogConsole>( SECTION_CONSOLE_NAME );


			if( s.Console.Level == LogLevel.Inherit )
			{
				s.Console.Level = s.Level;
			}

			s.Debug = c
				.Root
				.Read<LogDebug>( SECTION_DEBUG_NAME );

			if( s.Debug.Level == LogLevel.Inherit )
			{
				s.Debug.Level = s.Level;
			}

			return s;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum LogLevel
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Debug,
			/// <summary>
			/// 
			/// </summary>
			Info,
			/// <summary>
			/// 
			/// </summary>
			Warn,
			/// <summary>
			/// 
			/// </summary>
			Error,
			/// <summary>
			/// 
			/// </summary>
			Critical,
			/// <summary>
			///
			/// </summary>
			Inherit,
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		[Flags]
		public enum LogTarget
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			None = 0,
			/// <summary>
			/// 
			/// </summary>
			Console = 1,
			/// <summary>
			/// 
			/// </summary>
			File = 2,
			/// <summary>
			/// 
			/// </summary>
			Debug = 4,
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class LogConsole
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public LogLevel Level { get; set; } = LogLevel.Info;
			/// <summary>
			/// 
			/// </summary>
			public string Format { get; set; }
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class LogDebug
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public LogLevel Level { get; set; } = LogLevel.Info;
			/// <summary>
			/// 
			/// </summary>
			public string Format { get; set; }
			#endregion
		}
		#endregion
	}

	
}

