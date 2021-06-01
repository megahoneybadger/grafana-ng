#region Usings
using System.Diagnostics;
using System.Collections.Generic;
using System.Threading.Tasks;
using ED.Drivers.Influx;
using System.Net.Http;
using System.Linq;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class QueryCommand : Command<IEnumerable<Serie>>
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private string _query;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public QueryCommand(InfluxDataSource ds, string q)
			: base(ds)
		{
			_query = q;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected override async Task<OperationResult<IEnumerable<Serie>>> Run()
		{
			var queries = InfluxQuery.Split( _query );

			var arr = queries
				.Select( x => x.Query )
				.ToArray();

			var series = await Connection
				.Client
				.QueryAsync( arr, DataSource.Database )
				.ConfigureAwait( false );

			var res = series.ToList();

			for( int i = 0; i < res.Count; ++i ) 
			{
				res[ i ].Id = queries[ i ].RefId;
			}

			return OperationResult<IEnumerable<Serie>>.Create(res);
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		internal class InfluxQuery 
		{
			#region Class constants
			/// <summary>
			/// 
			/// </summary>
			private const string QUERY_SEPAR = ";";
			/// <summary>
			/// 
			/// </summary>
			private const string REF_SEPAR = ":";
			#endregion

			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string RefId { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public string Query { get; init; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <param name="total"></param>
			/// <returns></returns>
			public static IList<InfluxQuery> Split( string total ) 
			{
				var arr = total.Split( QUERY_SEPAR );
				var res = new List<InfluxQuery>();

				foreach( var s in arr )
				{
					var index = s.IndexOf( REF_SEPAR );
					var query = s;
					var refId = string.Empty;

					if( -1 != index )
					{
						refId = s.Substring( 0, index );
						query = s[ ( index + 1 ).. ];
					}

					res.Add( new InfluxQuery()
					{
						RefId = refId,
						Query = query
					} );
					
				}

				return res;
			} 
			#endregion
		}
		#endregion
	}
}
