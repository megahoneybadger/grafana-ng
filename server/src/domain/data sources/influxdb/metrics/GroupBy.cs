#region Usings
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	public class GroupByList : List<GroupBy>
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string GROUP_BY_AUTO_KEY = "$__interval";
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => Build( string.Empty, null );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string Build( string root, Time.Range r )
		{
			var list = this
				.Where( x => x.Params?.Length > 0 )
				.ToList();

			var groupByTime = list.FirstOrDefault( x => x.Type == GroupBy.Kind.Time );

			var groupByFill = list.FirstOrDefault( x => x.Type == GroupBy.Kind.Fill );

			var groupByTag = list
				.Where( x => x.Type == GroupBy.Kind.Tag )
				.ToList();

			if( null != groupByTime )
			{
				var influxGroupBy = InfluxDateTimeHelper.GetGroupBy( r );

				//query = query.Replace( VmFilter.TIME_FILTER_KEY, influxFilter );

				//var gb = ( this.range ) ? this.getOptimalAutoGroupBy() : groupByTime.params[ 0 ];
				var gb = groupByTime.Params?[ 0 ];
				root = $"{root}	GROUP BY time({gb})";

				var groupByAutoIndex = root.IndexOf( GROUP_BY_AUTO_KEY );

				if( -1 != groupByAutoIndex )
				{
					root = root.Replace( GROUP_BY_AUTO_KEY, influxGroupBy );// TODO
				}
			}

			if( groupByTag.Count > 0 )
			{
				root = ( null == groupByTime ) ? $"{root} GROUP BY" : $"{root},";
				var index = 0;

				groupByTag
					.ForEach( e =>
					{
						var i = index > 0 ? ", " : " ";
						root = $"{root}{i} \"{e.Params [ 0 ]}\"";
						++index;
					} );
			}

			if( null != groupByFill )
			{
				root = $"{root} FILL({groupByFill.Params [ 0 ] })";
			}

			return root;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public class GroupBy
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		public Kind Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string [] Params { get; set; }
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum Kind
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Time,
			/// <summary>
			/// 
			/// </summary>
			Fill,
			/// <summary>
			/// 
			/// </summary>
			Tag
			#endregion
		}
		#endregion
	}
}
