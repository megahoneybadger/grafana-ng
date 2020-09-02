#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents an InfluxDb write request.
	/// </summary>
	public class WriteRequest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IPointFormatter _formatter;
		#endregion

		#region Class properties
		/// <summary>
		/// Database name.
		/// </summary>
		public string DbName { get; set; }
		/// <summary>
		/// Points to write.
		/// </summary>
		public IEnumerable<Point> Points { get; set; }
		/// <summary>
		/// Point data time precision.
		/// </summary>
		public string Precision { get; set; }
		/// <summary>
		/// Data retention policy.
		/// </summary>
		public string RetentionPolicy { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="formatter"></param>
		public WriteRequest( IPointFormatter formatter )
		{
			_formatter = formatter;
		}
		/// <summary>
		/// Gets the set of points in line protocol format.
		/// </summary>
		/// <returns></returns>
		public string GetLines()
		{
			return String.Join( "\n", Points.Select( p => _formatter.PointToString( p, Precision ) ) );
		}
		#endregion


	}
}
