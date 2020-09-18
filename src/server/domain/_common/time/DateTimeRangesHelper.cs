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
	public class DateTimeRangesHelper 
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string NOW = "now";
		/// <summary>
		/// 
		/// </summary>
		private const string AXES_LABEL_FORMAT0 = "HH:mm:ss";
		/// <summary>
		/// 
		/// </summary>
		private const string AXES_LABEL_FORMAT1 = "HH:mm";
		/// <summary>
		/// 
		/// </summary>
		private const string AXES_LABEL_FORMAT2 = "M/d HH:mm";
		/// <summary>
		/// 
		/// </summary>
		private const string AXES_LABEL_FORMAT3 = "M/d";
		/// <summary>
		/// 
		/// </summary>
		private const string AXES_LABEL_FORMAT4 = "yyyy/M";
		#endregion

		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private static readonly Dictionary<string, Range> _dictQuickRanges;
		/// <summary>
		/// 
		/// </summary>
		private static readonly Dictionary<string, string> _dictSpans;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public static List<Range> QuickRanges
		{
			get
			{
				return new Range []
				{
					new Range( from: "now/d", to: "now/d", display: "Today", section: 2 ),
					new Range( from: "now/d", to: "now", display: "Today so far", section: 2 ),
					new Range( from: "now/w", to: "now/w", display: "This week", section: 2 ),
					new Range( from: "now/w", to: "now", display: "This week so far", section: 2 ),
					new Range( from: "now/M", to: "now/M", display: "This month", section: 2 ),
					new Range( from: "now/M", to: "now", display: "This month so far", section: 2 ),
					new Range( from: "now/y", to: "now/y", display: "This year", section: 2 ),
					new Range( from: "now/y", to: "now", display: "This year so far", section: 2 ),

					new Range( from: "now-1d/d", to: "now-1d/d", display: "Yesterday", section: 1 ),
					new Range( from: "now-2d/d", to: "now-2d/d", display: "Day before yesterday", section: 1 ),
					new Range( from: "now-7d/d", to: "now-7d/d", display: "This day last week", section: 1 ),
					new Range( from: "now-1w/w", to: "now-1w/w", display: "Previous week", section: 1 ),
					new Range( from: "now-1M/M", to: "now-1M/M", display: "Previous month", section: 1 ),
					new Range( from: "now-1y/y", to: "now-1y/y", display: "Previous year", section: 1 ),

					new Range( from: "now-5m", to: "now", display: "Last 5 minutes", section: 3 ),
					new Range( from: "now-15m", to: "now", display: "Last 15 minutes", section: 3 ),
					new Range( from: "now-30m", to: "now", display: "Last 30 minutes", section: 3 ),
					new Range( from: "now-1h", to: "now", display: "Last 1 hour", section: 3 ),
					new Range( from: "now-3h", to: "now", display: "Last 3 hours", section: 3 ),
					new Range( from: "now-6h", to: "now", display: "Last 6 hours", section: 3 ),
					new Range( from: "now-12h", to: "now", display: "Last 12 hours", section: 3 ),
					new Range( from: "now-24h", to: "now", display: "Last 24 hours", section: 3 ),

					new Range( from: "now-2d", to: "now", display: "Last 2 days", section: 0 ),
					new Range( from: "now-7d", to: "now", display: "Last 7 days", section: 0 ),
					new Range( from: "now-30d", to: "now", display: "Last 30 days", section: 0 ),
					new Range( from: "now-90d", to: "now", display: "Last 90 days", section: 0 ),
					new Range( from: "now-6M", to: "now", display: "Last 6 months", section: 0 ),
					new Range( from: "now-1y", to: "now", display: "Last 1 year", section: 0 ),
					new Range( from: "now-2y", to: "now", display: "Last 2 years", section: 0 ),
					new Range( from: "now-5y", to: "now", display: "Last 5 years", section: 0 ),
				}
				.ToList();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public static Range Last1Hour => QuickRanges [ 17 ];
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		static DateTimeRangesHelper()
		{
			_dictQuickRanges = new Dictionary<string, Range>();

			QuickRanges.ForEach( frame =>
				_dictQuickRanges [ frame.From + " to " + frame.To ] = frame );

			_dictSpans = new Dictionary<string, string>
			{
				[ "s" ] = "second",
				[ "m" ] = "minute",
				[ "h" ] = "hour",
				[ "d" ] = "day",
				[ "w" ] = "week",
				[ "M" ] = "month",
				[ "y" ] = "year"
			};
		}
		#endregion

		#region Class 'Range' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		public static string ToLabel( Range range )
		{
			var quickKey = ToLabel( range.From, range.To );
			_dictQuickRanges.TryGetValue( quickKey, out Range option );

			if( null != option )
				return option.Display;

			if( IsDateTime( range.From ) && IsDateTime( range.To ) )
				return ToLabel( Format( range.From ), Format( range.To ) );

			if( IsDateTime( range.From ) )
			{
				var to = DateTimeMathParser.ToDateTime( range.To, true );
				return to.HasValue ? ToLabel( Format( range.From ), to.Value.FromNow() ) : string.Empty;
			}

			if( IsDateTime( range.To ) )
			{
				var from = DateTimeMathParser.ToDateTime( range.From, false );
				return from.HasValue ? ToLabel( from.Value.FromNow(), Format( range.To ) ) : string.Empty;
			}

			if( range.To == NOW )
				return ToRange( range.From ).Display;

			return quickKey;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="from"></param>
		/// <param name="to"></param>
		/// <returns></returns>
		private static string ToLabel( string from, string to ) => $"{from} to {to}";
		/// <summary>
		/// 
		/// </summary>
		/// <param name="expr"></param>
		/// <returns></returns>
		public static Range ToRange( string expr )
		{
			var isLast = expr.IndexOf( '+' ) != 0;

			if( expr.IndexOf( NOW ) == -1 )
			{
				expr = ( isLast ? $"{NOW}-" : $"{NOW}" ) + expr;
			}

			var quickKey = $"{expr} + to {NOW}";
			_dictQuickRanges.TryGetValue( quickKey, out Range opt );

			if( null != opt )
				return opt;

			opt = ( isLast ) ?
				new Range( from: expr, to: NOW ) :
				new Range( from: NOW, to: expr );

			var parts = Regex.Split( expr, @"^now([-+])(\d+)(\w)" );

			if( null != parts && parts.Count() >= 4 )
			{
				var unit = parts [ 3 ];
				int.TryParse( parts [ 2 ], out int amount );
				_dictSpans.TryGetValue( unit, out string span );

				if( !string.IsNullOrEmpty( span ) )
				{
					opt.Display = isLast ? "Last " : "Next ";
					opt.Display += $"{amount} {span}";

					//opt.Section = span.section;
					if( amount > 1 )
					{
						opt.Display += 's';
					}
				}
			}
			else
			{
				opt.Display = $"{opt.From} to {opt.To}";
				//opt.Invalid = true;
			}

			return opt;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="range"></param>
		/// <returns></returns>
		public static bool IsAbsoluteTimeRange( Range range )
		{
			if( null == range )
				return false;

			return 
				( !DateTimeMathParser.IsMathString( range.From ) ) ||
				( !DateTimeMathParser.IsMathString( range.To ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="time"></param>
		/// <param name="shift"></param>
		/// <returns></returns>
		public static Range Shift( Range time, string shift ) 
		{
			var shiftedAbsTime = $"{NOW}-{shift}";

			var shiftedAbsTimeInMs = (( DateTimeOffset )DateTimeMathParser
				.ToDateTime( shiftedAbsTime ))
				.ToUnixTimeMilliseconds();

			var nowInMs = ( ( DateTimeOffset )DateTime.Now ).ToUnixTimeMilliseconds();

			var shiftInMs = nowInMs - shiftedAbsTimeInMs;

			var tf = DateTimeMathParser
				.ToDateTime( time.From, false )
				.Value
				.AddMilliseconds( -shiftInMs );

			var tt = DateTimeMathParser
				.ToDateTime( time.To, true )
				.Value
				.AddMilliseconds( -shiftInMs );

			return new Range( 
				tf.ToString( DateTimeMathParser.DEFAULT_DATE_TIME_FORMAT ),
				tt.ToString( DateTimeMathParser.DEFAULT_DATE_TIME_FORMAT ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetTimeAxeLabelFormat( Range r )
		{
			var from = DateTimeMathParser.ToDateTime( r.From, false ).Value;
			var to = DateTimeMathParser.ToDateTime( r.To, true ).Value;

			var diff = to - from;

			if( diff <= TimeSpan.FromMinutes( 5 ) )
				return AXES_LABEL_FORMAT0;

			if( diff <= TimeSpan.FromHours( 24 ) )
				return AXES_LABEL_FORMAT1;

			if( diff <= TimeSpan.FromDays( 7 ) )
				return AXES_LABEL_FORMAT2;

			if( diff <= TimeSpan.FromDays( 365 ) )
				return AXES_LABEL_FORMAT3;

			return AXES_LABEL_FORMAT4;
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		private static string Format( DateTime time )
		{
			return time.ToString( DateTimeMathParser.DEFAULT_DATE_TIME_FORMAT );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		private static string Format( string text )
		{
			var res = DateTime.TryParse( text, CultureInfo.InvariantCulture,
				DateTimeStyles.None, out DateTime date );

			return res ? Format( date ) : text;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		private static bool IsDateTime( string text )	=> DateTimeMathParser.IsDateTime( text );
		#endregion
	}
}
