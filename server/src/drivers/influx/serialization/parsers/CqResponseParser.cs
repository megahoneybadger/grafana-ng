#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.Drivers.Influx
{
	internal class CqResponseParser : ICqResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="series"></param>
		/// <returns></returns>
		public virtual IEnumerable<ContinuousQuery> GetContinuousQueries( string dbName, IEnumerable<Serie> series )
		{
			var cqs = new List<ContinuousQuery>();

			if( series == null )
				return cqs;

			var serie = series.FirstOrDefault( p => p.Name == dbName );
			if( serie == null || serie.Values == null )
				return cqs;

			var columns = serie.Columns.ToArray();
			var indexOfName = Array.IndexOf( columns, "name" );
			var indexOfQuery = Array.IndexOf( columns, "query" );

			cqs.AddRange( serie.Values.Select( p => new ContinuousQuery()
			{
				Name = ( string )p [ indexOfName ],
				Query = ( string )p [ indexOfQuery ]
			} ) );

			return cqs;
		}
		#endregion
	}
}
