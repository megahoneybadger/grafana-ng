#region Usings
using ED.Time;
using System;
using System.Text.RegularExpressions;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	public class InfluxDateTimeHelper 
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string TIME_FILTER = "time-filter";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public static string NOW => $"{DateTimeMathParser.NOW}()";
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetFilter( Time.Range range )
		{
			if( null == range )
				return TIME_FILTER;

			var from = GetTime( range?.From, false );
			var to = GetTime( range?.To, true );

			var fromIsAbsolute = from.EndsWith( "ms" );

			if( to == "now()" && !fromIsAbsolute )
				return $"time >= {from}";

			return $"time >= {from} and time <= {to}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private static string GetTime( string expr, bool roundUp )
		{
			if( string.IsNullOrEmpty( expr ) )
				return string.Empty;

			if( DateTimeMathParser.IsDateTime( expr, out DateTime date ) )
				return ToUnixTimeMilliseconds( date );

			if( expr == DateTimeMathParser.NOW )
				return NOW;

			var parts = Regex.Split( expr, @"^now-(\d+)([dhms])$" );

			if( parts?.Length > 2 )
			{
				int.TryParse( parts [ 1 ], out int amount );
				var unit = parts [ 2 ];
				
				return $"{NOW} - {amount}{unit}";
			}

			var res = DateTimeMathParser.ToDateTime( expr, roundUp );

			return res.HasValue ? ToUnixTimeMilliseconds( res.Value ) : string.Empty;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		private static string ToUnixTimeMilliseconds( DateTime d ) =>
			$"{( ( DateTimeOffset )d ).ToUnixTimeMilliseconds()}ms";
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetGroupBy( Time.Range r ) 
		{
			var from = DateTimeMathParser.ToDateTime( r.From, false );
			var to = DateTimeMathParser.ToDateTime( r.To, true );

			return ( from.HasValue && to.HasValue ) ? GetGroupBy( from.Value, to.Value ) : "1m";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetGroupBy( DateTime from, DateTime to )
		{
			var diff = to - from;

			if( diff <= TimeSpan.FromMinutes( 5 ) )
				return "200ms";

			if( diff <= TimeSpan.FromMinutes( 15 ) )
				return "1s";

			if( diff <= TimeSpan.FromMinutes( 30 ) )
				return "2s";

			if( diff <= TimeSpan.FromHours( 1 ) )
				return "5s";

			if( diff <= TimeSpan.FromHours( 3 ) )
				return "10s";

			if( diff <= TimeSpan.FromHours( 6 ) )
				return "20s";

			if( diff <= TimeSpan.FromHours( 12 ) )
				return "1m";

			if( diff <= TimeSpan.FromHours( 24 ) )
				return "2m";

			if( diff <= TimeSpan.FromDays( 7 ) )
				return "10m";

			if( diff <= TimeSpan.FromDays( 31 ) )
				return "1h";

			if( diff <= TimeSpan.FromDays( 365 ) )
				return "12h";

			return "24h";
		}
		#endregion
	}
}
