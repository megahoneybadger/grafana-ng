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
		public string RefId { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; init; }
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
			var index = Columns.IndexOf( "time" );
			var hasTime = ( 0 == index );

			for( int i = 0; i < Columns.Count; ++i )
			{
				if( hasTime && i == 0 )
					continue;

				var ts = new TimeSeries()
				{
					RefId = RefId,
					Name = Columns [ i ],
					Tags = Tags?.ToDictionary( e => e.Key, e => e.Value ),
				};

				if( hasTime )
				{
					ts.Columns = new List<string>() { Columns [ 0 ], Columns [ i ] };

					ts.Values = Values
						.Select( x => new List<object>() { x [ 0 ], x [ i ] } )
						.ToList();
				}
				else 
				{
					ts.Columns = new List<string>() { Columns [ i ] };

					ts.Values = Values
						.Select( x => new List<object>() { x [ i ] } )
						.ToList();
				}

				list.Add( ts );
			}

			return list;
		}
		#endregion
	}

	
}


