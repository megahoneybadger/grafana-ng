#region Usings
using System;
#endregion

namespace ED.Time
{
	/// <summary>
	/// 
	/// </summary>
	public enum TimeUnit
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Year = 'y',
		/// <summary>
		/// 
		/// </summary>
		Month = 'M',
		/// <summary>
		/// 
		/// </summary>
		Week = 'w',
		/// <summary>
		/// 
		/// </summary>
		Day = 'd',
		/// <summary>
		/// 
		/// </summary>
		Hour = 'h',
		/// <summary>
		/// 
		/// </summary>
		Minute = 'm',
		/// <summary>
		/// 
		/// </summary>
		Second = 's'
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public enum Timezone
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Default,
		/// <summary>
		/// 
		/// </summary>
		Browser,
		/// <summary>
		/// 
		/// </summary>
		UTC
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	static class DateTimeExt 
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const int SECOND = 1;
		/// <summary>
		/// 
		/// </summary>
		private const int MINUTE = 60 * SECOND;
		/// <summary>
		/// 
		/// </summary>
		private const int HOUR = 60 * MINUTE;
		/// <summary>
		/// 
		/// </summary>
		private const int DAY = 24 * HOUR;
		/// <summary>
		/// 
		/// </summary>
		private const int MONTH = 30 * DAY;
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="time"></param>
		/// <param name="u"></param>
		public static DateTime Add( this DateTime time, int value, TimeUnit unit ) 
		{
			switch( unit ) 
			{
				case TimeUnit.Second:
					return time.AddSeconds( value );

				case TimeUnit.Minute:
					return time.AddMinutes( value );

				case TimeUnit.Hour:
					return time.AddHours( value );

				case TimeUnit.Day:
					return time.AddDays( value );

				case TimeUnit.Week:
					return time.AddDays( value * 7 );

				case TimeUnit.Month:
					return time.AddMonths( value );

				case TimeUnit.Year:
					return time.AddYears( value );
			}

			return time;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="time"></param>
		/// <param name="value"></param>
		/// <param name="unit"></param>
		public static DateTime Subtract( this DateTime time, int value, TimeUnit unit )
		{
			return time.Add( -value, unit );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="time"></param>
		/// <param name="unit"></param>
		/// <returns></returns>
		public static DateTime StartOf( this DateTime time, TimeUnit unit ) 
		{
			switch( unit )
			{
				case TimeUnit.Minute:
					return new DateTime( time.Year, time.Month, time.Day, time.Hour, time.Minute, 0 );

				case TimeUnit.Hour:
					return new DateTime( time.Year, time.Month, time.Day, time.Hour, 0, 0 );

				case TimeUnit.Day:
					return new DateTime( time.Year, time.Month, time.Day, 0, 0, 0 );

				case TimeUnit.Week:
					return time.AddDays( -( int )time.DayOfWeek + ( int )DayOfWeek.Monday ).Date;

				case TimeUnit.Month:
					return new DateTime( time.Year, time.Month, 1, 0, 0, 0 );

				case TimeUnit.Year:
					return new DateTime( time.Year, 1, 1, 0, 0, 0 );
			}

			return time;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="time"></param>
		/// <param name="unit"></param>
		/// <returns></returns>
		public static DateTime EndOf( this DateTime time, TimeUnit unit )
		{
			switch( unit )
			{
				case TimeUnit.Minute:
					return new DateTime( time.Year, time.Month, time.Day, time.Hour, time.Minute, 59 );

				case TimeUnit.Hour:
					return new DateTime( time.Year, time.Month, time.Day, time.Hour, 59, 59 );

				case TimeUnit.Day:
					return new DateTime( time.Year, time.Month, time.Day, 23, 59, 59 );

				case TimeUnit.Week:
					return time.AddDays( -( int )DateTime.Today.DayOfWeek + ( int )DayOfWeek.Monday )
						.Date
						.AddDays( 7 )
						.AddSeconds( -1 );

				case TimeUnit.Month:
					return new DateTime( time.Year, time.Month, 1, 0, 0, 0 )
						.AddMonths( 1 )
						.AddSeconds( -1 );

				case TimeUnit.Year:
					return new DateTime( time.Year, 1, 1, 0, 0, 0 )
						.AddYears( 1 )
						.AddSeconds( -1 );
			}

			return time;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string FromNow( this DateTime date ) 
		{
			var ts = new TimeSpan( DateTime.Now.Ticks - date.Ticks );
			double delta = Math.Abs( ts.TotalSeconds );

			if( delta < 1 * MINUTE )
				return ts.Seconds <= 44 ? "a few seconds ago" : $"{ts.Seconds} seconds ago";

			if( delta < 2 * MINUTE )
				return "a minute ago";

			if( delta < 45 * MINUTE )
				return ts.Minutes + " minutes ago";

			if( delta < 90 * MINUTE )
				return "an hour ago";

			if( delta < 24 * HOUR )
				return ts.Hours + " hours ago";

			if( delta < 48 * HOUR )
				return "yesterday";

			if( delta < 30 * DAY )
				return ts.Days + " days ago";

			if( delta < 12 * MONTH )
			{
				int months = Convert.ToInt32( Math.Floor( ( double )ts.Days / 30 ) );
				return months <= 1 ? "one month ago" : months + " months ago";
			}
			else
			{
				int years = Convert.ToInt32( Math.Floor( ( double )ts.Days / 365 ) );
				return years <= 1 ? "one year ago" : years + " years ago";
			}
		}
		#endregion
	}
}
