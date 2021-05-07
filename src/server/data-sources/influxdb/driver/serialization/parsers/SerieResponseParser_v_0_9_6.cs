#region Usings
using System;
using System.Collections.Generic;
using System.Linq;

#endregion

namespace ED.Drivers.Influx
{
	internal class SerieResponseParser_v_0_9_6 : SerieResponseParser
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		protected override string KeyColumnName
		{
			get { return "_key"; }
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		public override IEnumerable<SerieSet> GetSerieSets( IEnumerable<Serie> series )
		{
			var serieSets = new List<SerieSet>();

			if( series == null )
				return serieSets;

			foreach( var serie in series )
			{
				var serieSet = GetSerieSet( serie );
				serieSets.Add( serieSet );
			}

			return serieSets;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="serie"></param>
		/// <returns></returns>
		protected virtual SerieSet GetSerieSet( Serie serie )
		{
			var serieSet = new SerieSet() { Name = serie.Name };
			var keyIndex = serie.Columns.IndexOf( KeyColumnName );
			var indexedKeyColumns = Enumerable.Range( 0, serie.Columns.Count ).ToDictionary( p => serie.Columns [ p ], p => p );

			foreach( var serieValues in serie.Values )
			{
				var serieSetItem = GetSerieSetItem( keyIndex, indexedKeyColumns, serieValues );
				serieSet.Series.Add( serieSetItem );
			}

			return serieSet;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="serieSets"></param>
		/// <param name="serieSetItem"></param>
		protected override void BindSerieSets( List<SerieSet> serieSets, SerieSetItem serieSetItem )
		{
			throw new InvalidOperationException( "Method not applicable to this version of InfluxDB" );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="serie"></param>
		/// <returns></returns>
		protected override IList<SerieSetItem> GetSerieSetItems( Serie serie )
		{
			throw new InvalidOperationException( "Method not applicable to this version of InfluxDB" );
		}
		#endregion
	}
}
