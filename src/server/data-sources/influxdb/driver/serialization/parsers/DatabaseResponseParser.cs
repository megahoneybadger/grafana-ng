#region Usings
using System.Collections.Generic;
using System.Linq;

#endregion

namespace ED.Drivers.Influx
{
	internal class DatabaseResponseParser : IDatabaseResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		public virtual IEnumerable<Database> GetDatabases( IEnumerable<Serie> series )
		{
			var databases = new List<Database>();

			if( series == null )
				return databases;

			databases.AddRange( series.Single().Values.Select( p => new Database()
			{
				Name = ( string )p [ 0 ]
			} ) );

			return databases;
		}
		#endregion
	}
}
