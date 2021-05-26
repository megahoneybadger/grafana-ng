#region Usings
using StackExchange.Redis;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources.Redis
{
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
		public static TimeSeries ToTimeSeries( this Task<RedisValue[]> v, MetricQuery q )
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

			v.Result.ToList().ForEach( x => list.Add( ToObject( x ) ) );

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
