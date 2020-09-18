#region Usings
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources
{
	/// <summary>
	/// 
	/// </summary>
	public class TimeSeries
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// Serie tags.
		/// </summary>
		public IDictionary<string, string> Tags { get; set; }
		/// <summary>
		/// List of serie fields.
		/// </summary>
		public List<string> Columns { get; set; }
		/// <summary>
		/// Serie values.
		/// </summary>
		public List<List<object>> Values { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public TimeSeriesList Split()
		{
			var list = new TimeSeriesList();

			for( int i = 1; i < Columns.Count; ++i )
			{
				list.Add( new TimeSeries()
				{
					Name = Columns [ i ],
					Tags = Tags?.ToDictionary( e => e.Key, e => e.Value ),

					Columns = new List<string>() { Columns [ 0 ], Columns [ i ] },

					Values = Values
						.Select( x => new List<object>() { x [ 0 ], x [ i ] } )
						.ToList()
				});
			}

			return list;
		}
		#endregion
	}

	
}


