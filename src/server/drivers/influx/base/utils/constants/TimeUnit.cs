namespace ED.Drivers.Influx
{
	/// <summary>
	/// Time unit used in writing data points or parsing series.
	/// </summary>
	public static class TimeUnit
	{
		#region Class properties
		// NOTE: currently not supported
		//public const string Nanoseconds = "n";

		// NOTE: currently not supported
		//public const string Microseconds = "u";
		/// <summary>
		/// 
		/// </summary>
		public const string Milliseconds = "ms";
		/// <summary>
		/// 
		/// </summary>
		public const string Seconds = "s";
		/// <summary>
		/// 
		/// </summary>
		public const string Minutes = "m";
		/// <summary>
		/// 
		/// </summary>
		public const string Hours = "h";
		#endregion
	}
}