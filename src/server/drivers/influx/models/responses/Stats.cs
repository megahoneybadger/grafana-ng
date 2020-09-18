#region Usings
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	public class Stats
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> CQ { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Engine { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Shard { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Httpd { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> WAL { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Write { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Runtime { get; set; }



		// Added to lib since InfluxDB v1.0.0.
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Database { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> QueryExecutor { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Subscriber { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Tsm1Cache { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Tsm1Filestore { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IEnumerable<Serie> Tsm1Wal { get; set; }
		#endregion
	}
}