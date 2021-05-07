#region Usings
using System.Collections.Generic;
using System.Linq;

#endregion

namespace ED.Drivers.Influx
{
	internal class BasicResponseParser : IBasicResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="seriesResults"></param>
		/// <returns></returns>
		public virtual IEnumerable<Serie> FlattenResultsSeries( IEnumerable<SeriesResult> seriesResults )
		{
			var series = new List<Serie>();

			foreach( var result in seriesResults )
			{
				series.AddRange( result.Series ?? new List<Serie>() );

				if( null == result.Series )
				{
					series.Add( new Serie() );
				}
			}

			return series;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="seriesResults"></param>
		/// <returns></returns>
		public virtual IEnumerable<IEnumerable<Serie>> MapResultsSeries( IEnumerable<SeriesResult> seriesResults )
		{
			return seriesResults.Select( GetSeries );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="result"></param>
		/// <returns></returns>
		protected virtual IEnumerable<Serie> GetSeries( SeriesResult result )
		{
			Validate.IsNotNull( result, "result" );
			return result.Series != null ? result.Series.ToList() : new List<Serie>();
		}
		#endregion
	}
}
