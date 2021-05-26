#region Usings
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.DataSources
{
	/// <summary>
	/// 
	/// </summary>
	public interface IMetricQuery
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		string RefId { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		string Compile( Time.Range r = null );
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class MetricQueryExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="queries"></param>
		/// <param name="refId"></param>
		/// <returns></returns>
		public static (int,IMetricQuery) WithRefId(
			this IEnumerable<IMetricQuery> queries, int dsId, string refId ) 
		{
			return ( dsId, queries.FirstOrDefault( x => x.RefId == refId ) );
		}
		#endregion
	}
}


