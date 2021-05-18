#region Usings
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	public class MuxerPool
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const int TIMEOUT = 60000;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private static readonly Dictionary<string, MultiplexerTuple> _dictConnections = new();
		/// <summary>
		/// 
		/// </summary>
		private static Timer _timer;
		/// <summary>
		/// 
		/// </summary>
		private static readonly object _syncObject = new();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		static MuxerPool() 
		{
			_timer = new Timer( OnTimerElapsed, null, Timeout.Infinite, Timeout.Infinite );
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static async Task<ConnectionMultiplexer> Get( RedisDataSource ds )
		{
			var config = ds.ToConfiguration();

			lock( _syncObject )
			{
				_dictConnections.TryGetValue( config, out MultiplexerTuple t );

				if( null != t )
				{
					t.Time = DateTime.Now;
					return t.Muxer;
				}
			}

			//Debug.WriteLine( $"ready to connect to {config}" );

			var cm = await ConnectionMultiplexer.ConnectAsync( config );

			lock( _syncObject )
			{
				var preCount = _dictConnections.Count;
				var res = _dictConnections.TryAdd( config, new MultiplexerTuple( cm, DateTime.Now ) );

				if( res )
				{
					if( 0 == preCount )
					{
						//Debug.WriteLine( "start timer: muxer appeared " );
						_timer.Change( TIMEOUT, Timeout.Infinite );
					}

					cm.ConnectionFailed += ( o, ea ) => Remove( ds );

					//Debug.WriteLine( $"pool size [add]: {_dictConnections.Count}" );

					return cm;
				}
			}

			//Debug.WriteLine( $"possible duplicate found" );

			cm.Dispose();

			return await Get( ds );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		public static void Remove( RedisDataSource ds )
		{
			var config = ds.ToConfiguration();
			MultiplexerTuple t;
			var count = 0;

			lock( _syncObject )
			{
				_dictConnections.Remove( config, out t );
				count = _dictConnections.Count;
			}

			if( null != t )
			{
				t.Muxer.Dispose();
				//Debug.WriteLine( $"pool size [remove]: {count}" );
			}
		}
		#endregion

		#region Class event handlers
		/// <summary>
		/// 
		/// </summary>
		private static void OnTimerElapsed( object state )
		{
			List<ConnectionMultiplexer> list = new();

			lock( _syncObject )
			{
				//Debug.WriteLine( "timer" );

				if( 0 == _dictConnections.Count )
				{
					Debug.WriteLine( "redis timer stopped: no muxers" );
					return;
				}

				try
				{
					_dictConnections
						.Where( x => ( DateTime.Now - x.Value.Time ).TotalSeconds > 60 )
						.ToList()
						.ForEach( x =>
						{
							_dictConnections.Remove( x.Key );
							list.Add( x.Value.Muxer );
						} );
				}
				finally
				{
					_timer.Change( TIMEOUT, Timeout.Infinite );
				}
			}

			list?.ForEach( x => x.Dispose() );
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class MultiplexerTuple
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public ConnectionMultiplexer Muxer { get; init; }
			/// <summary>
			/// 
			/// </summary>
			public DateTime Time { get; set; }
			#endregion

			#region Class initialization
			/// <summary>
			/// 
			/// </summary>
			/// <param name="m"></param>
			/// <param name="time"></param>
			public MultiplexerTuple( ConnectionMultiplexer m, DateTime time )
			{
				Muxer = m;
				Time = time;
			}
			#endregion
		}
		#endregion
	}
}
