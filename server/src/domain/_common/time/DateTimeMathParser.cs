#region Usings
using System;
using System.Text.RegularExpressions;
using System.Linq;
using System.Collections.Generic;
using System.Globalization;
#endregion

namespace ED.Time
{
	/// <summary>
	/// 
	/// </summary>
	public class DateTimeMathParser
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string NOW = "now";
		/// <summary>
		/// 
		/// </summary>
		public const string DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
		/// <summary>
		/// 
		/// </summary>
		public const string MS_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss.SSS";
		#endregion

		#region Class propeties
		/// <summary>
		/// 
		/// </summary>
		private static List<char> Units
		{
			get
			{
				return Enum.GetValues( typeof( TimeUnit ) )
					.Cast<TimeUnit>()
					.Select( x => ( char )x )
					.ToList();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		public static bool IsValid( string text ) => ToDateTime( text ).HasValue;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		public static bool IsMathString( string text )
		{
			if( string.IsNullOrEmpty( text ) )
				return false;

			return ( text.Substring( 0, 3 ) == NOW || text.Contains( "||" ) );
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <param name="roundUp"></param>
		/// <param name="timezone"></param>
		/// <returns></returns>
		public static DateTime? ToDateTime( string text, 
			bool? roundUp = null, Timezone timezone = Timezone.Browser )
		{
			if( string.IsNullOrEmpty( text ) || text.Length < NOW.Length )
				return null;

			if( DateTimeMathParser.IsDateTime( text, out DateTime absTime ) )
				return absTime;

			DateTime time = DateTime.Now;
			var mathString = string.Empty;
			var index = 0;

			if( text.Substring( 0, NOW.Length ) == NOW )
			{
				time = timezone == Timezone.UTC ? DateTime.UtcNow : DateTime.Now;
				mathString = text.Substring( NOW.Length );
			}
			else
			{
				index = text.IndexOf( "||" );
				var parseString = string.Empty;

				if( -1 == index )
				{
					parseString = text;
					mathString = string.Empty;
				}
				else
				{
					parseString = text.Substring( 0, index );
					mathString = text.Substring( index + 2 );
				}

				// We're going to just require ISO8601 timestamps, k?
				//time = this.dateTime( parseString, ISO_8601 );
				//??
				return null;
			}

			return ShiftDateTime( mathString, time, roundUp );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="math"></param>
		/// <param name="time"></param>
		/// <param name="roundUp"></param>
		public static DateTime? ShiftDateTime( string math, DateTime time, bool? roundUp = null )
		{
			var strippedMathString = Regex.Replace( math, @"\s+", "" );

			var dateTime = time;
			var i = 0;
			var len = strippedMathString.Length;

			while( i < len )
			{
				var c = strippedMathString [ i++ ];
				int num;
				int type;

				if( c == '/' )
				{
					type = 0;
				}
				else if( c == '+' )
				{
					type = 1;
				}
				else if( c == '-' )
				{
					type = 2;
				}
				else
				{
					return null;
				}

				if( i >= strippedMathString.Length )
					return null;

				//char.IsDigit( strippedMathString[ i ] ).

				if( !char.IsDigit( strippedMathString [ i ] ) )
				{
					num = 1;
				}
				else if( strippedMathString.Length == 2 )
				{
					num = strippedMathString [ i ];
				}
				else
				{
					var numFrom = i;

					while( Char.IsDigit( strippedMathString [ i ] ) )
					{
						i++;

						if( i > 10 || i >= strippedMathString.Length )
							return null;
					}

					num = int.Parse( strippedMathString.Substring( numFrom, i - numFrom ) );
				}

				// rounding is only allowed on whole, single, units (eg M or 1M, not 0.5M or 2M)
				if( type == 0 && num != 1 )
					return null;

				var cunit = strippedMathString [ i++ ];

				if( !Units.Contains( cunit ) )
					return null;

				var unit = ( TimeUnit )cunit;

				if( type == 0 )
				{
					if( roundUp.HasValue )
					{
						dateTime = ( roundUp.Value ) ?
							dateTime.EndOf( unit ) : dateTime.StartOf( unit );
					}
				}
				else if( type == 1 )
				{
					dateTime = dateTime.Add( num, unit );
				}
				else if( type == 2 )
				{
					dateTime = dateTime.Subtract( num, unit );
				}
			}

			return dateTime;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="math"></param>
		/// <returns></returns>
		public static ulong? ToDuration( string math, TimeUnit unit = TimeUnit.Second ) 
		{
			var input = $"{NOW}-{math}";

			var dt = ToDateTime( input );

			if( null == dt )
				return null;

			var now = DateTime.Now;

			var span = ( now - dt ).Value;

			var res = unit switch
			{
				TimeUnit.Second => span.TotalSeconds,
				TimeUnit.Minute => span.TotalMinutes,
				TimeUnit.Hour => span.TotalHours,
				TimeUnit.Day => span.TotalDays,
				_ => span.TotalSeconds
			};

			return Convert.ToUInt64( res );
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		public static bool IsDateTime( string text )
		{
			return IsDateTime( text, out DateTime _ );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <param name="res"></param>
		/// <returns></returns>
		public static bool IsDateTime( string text, out DateTime res )
		{
			return DateTime.TryParse( text,
				CultureInfo.InvariantCulture, DateTimeStyles.None, out res );
		}
		#endregion
	}
}
