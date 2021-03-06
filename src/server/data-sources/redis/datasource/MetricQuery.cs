﻿#region Usings
using Newtonsoft.Json;
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
		public string RefId { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public CommandType Command { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string Field { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public bool Hidden { get; init; }
		/// <summary>
		/// 
		/// </summary>
		[JsonIgnore]
		public bool IsValid 
		{
			get 
			{
				return Command switch
				{
					CommandType.HKeys or
					CommandType.HGetAll or
					CommandType.HLen or
					CommandType.LLen or
					CommandType.XRange or
					CommandType.Get => !string.IsNullOrEmpty( Key ),

					CommandType.HGet => !( string.IsNullOrEmpty( Key ) || string.IsNullOrEmpty( Field ) ),

					_ => true
				};
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public Time.Range Range { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string ToString( Time.Range r = null ) => string.Empty;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public Task<TimeSeries> ToTask( IDatabase d )
		{
			var (from, to) = Range.AsEpoch;

			return Command switch
			{
				CommandType.Get => d
					.StringGetAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),


				CommandType.HGet => d
					.HashGetAsync( Key, Field )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HKeys => d
					.HashKeysAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HGetAll => d
					.HashGetAllAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.HLen => d
					.HashLengthAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),


				CommandType.LLen => d
					.ListLengthAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),

				CommandType.LRange => d
					.ListRangeAsync( Key )
					.ContinueWith( x => x.ToTimeSeries( this ) ),


				CommandType.XRange => d
					.StreamRangeAsync( Key, from, to )
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
				RefId = q.RefId,
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
				RefId = q.RefId,
				Name = q.RefId,

				Columns = new List<string>()
				{
					q.Key
				}
			};

			var r = v.Result;

			ts.Values = new List<List<object>>();

			v
				.Result
				.ToList()
				.ForEach( x => ts.Values.Add( new List<object>() { ToObject( x ) } ) );

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
				RefId = q.RefId,
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
				RefId = q.RefId,
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
		/// <param name="v"></param>
		/// <returns></returns>
		public static TimeSeries ToTimeSeries( this Task<HashEntry []> v, MetricQuery q )
		{
			var r = v.Result;

			var ts = new TimeSeries
			{
				RefId = q.RefId,
				Name = q.RefId,
				Columns = r
					.Select( x => x.Name.ToString() )
					.ToList()
			};

			var dict = new Dictionary<string, int>();

			for( int i = 0; i < ts.Columns.Count; ++i )
			{
				dict.Add( ts.Columns [ i ], i );
			}

			var list = new List<List<object>>();
			ts.Values = list;
			var row = new object [ ts.Columns.Count ];
				 
			foreach( var entry in r )
			{
				row [ dict [ entry.Name.ToString() ] ] = ToObject( entry.Value );
			}

			list.Add( row.ToList() );

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
