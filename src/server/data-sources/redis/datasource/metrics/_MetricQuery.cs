#region Usings
using Newtonsoft.Json.Linq;
using StackExchange.Redis;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class MetricQuery : IMetricQuery
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string RefId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public CommandType Command{ get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string Compile( Time.Range r = null ) => string.Empty;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public Task<TimeSeries> ToTask( IDatabase d )
		{
			return Command switch
			{
				CommandType.Get => d
					.StringGetAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HKeys => d
					.HashKeysAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HLen => d
					.HashLengthAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.XRange => d
					.StreamRangeAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

			_ => null
			};
		}
		#endregion
	}

	public static class RedisExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="v"></param>
		/// <returns></returns>
		public static TimeSeries ToTimeSeries( this Task<RedisValue> v, MetricQuery q )
		{
			var ts = new TimeSeries
			{
				Name = q.RefId,

				Columns = new List<string>()
				{
					q.Key
				}
			};

			var r = v.Result;

			ts.Values = new List<List<object>>();

			if( r.HasValue )
			{
				ts.Values.Add( new List<object>() { ToObject( r ) } );
			};

			return ts;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="v"></param>
		/// <returns></returns>
		public static TimeSeries ToTimeSeries( this Task<RedisValue []> v, MetricQuery q )
		{
			var ts = new TimeSeries
			{
				Name = q.RefId,

				Columns = new List<string>()
				{
					q.Key
				}
			};

			var r = v.Result;

			ts.Values = new List<List<object>>();
			var list = new List<object>();
			ts.Values.Add( list );

			v
				.Result
				.ToList()
				.ForEach( x => list.Add( ToObject( x ) ) );

			return ts;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="v"></param>
		/// <returns></returns>
		public static TimeSeries ToTimeSeries( this Task<long> v, MetricQuery q )
		{
			var ts = new TimeSeries
			{
				Name = q.RefId,

				Columns = new List<string>()
				{
					q.Key
				}
			};

			ts.Values = new List<List<object>>
			{
				new List<object>() { v.Result }
			};

			return ts;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="v"></param>
		/// <returns></returns>
		public static TimeSeries ToTimeSeries( this Task<StreamEntry []> t, MetricQuery q )
		{
			var ts = new TimeSeries
			{
				Name = q.RefId,
				Tags = new Dictionary<string, string>()
			};

			var arr = t.Result;

			var values = arr
				.ToList()
				.SelectMany( x => x.Values )
				.ToList();

			var dict = new Dictionary<string, int>();

			ts.Columns = values
				.Select( x => x.Name.ToString() )
				.Distinct()
				.ToList();

			ts.Columns.Insert( 0, "time" );

			for( int i = 0; i < ts.Columns.Count; ++i )
			{
				dict.Add( ts.Columns [ i ], i );
			}

			var list = new List<List<object>>();

			foreach( var entry in arr )
			{
				var time = entry.Id.ToString();
				var row = new object [ ts.Columns.Count ];

				var index = time.IndexOf( "-" );

				if( -1 != index )
				{
					time = time.Substring( 0, index );
				}

				row [ 0 ] = ( long.TryParse( time, out long ltime ) ) ? ltime : time;

				foreach( var v in entry.Values )
				{
					row [ dict [ v.Name ] ] = ToObject( v.Value );
				}

				list.Add( row.ToList() );
			}

			ts.Values = list;

			return ts;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		public static object ToObject( RedisValue r )
		{
			if( r.TryParse( out int i ) )
				return i;

			if( r.TryParse( out long l ) )
				return l;

			if( r.TryParse( out double d ) )
				return d;

			return r.ToString();
		}
		#endregion
	}
}
