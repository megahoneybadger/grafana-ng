#region Usings
using CSRedis.Internal.IO;
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
#endregion

namespace CSRedis.Internal
{
	class RedisConnector
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IRedisSocket _redisSocket;
		/// <summary>
		/// 
		/// </summary>
		private readonly EndPoint _endPoint;
		/// <summary>
		/// 
		/// </summary>
		private readonly RedisIO _io;

		/// <summary>
		/// 
		/// </summary>
		private readonly int _concurrency;
		private readonly int _bufferSize;
		private readonly Lazy<AsyncConnector> _asyncConnector;
		
		
		
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public AsyncConnector Async => _asyncConnector.Value;
		/// <summary>
		/// 
		/// </summary>
		public bool IsConnected => _redisSocket.Connected;
		/// <summary>
		/// 
		/// </summary>
		public EndPoint EndPoint => _endPoint;
		/// <summary>
		/// 
		/// </summary>
		public bool IsPipelined => _io.IsPipelined;
		/// <summary>
		/// 
		/// </summary>
		public int ReconnectAttempts { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int ReconnectWait { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int ReceiveTimeout
		{
			get { return _redisSocket.ReceiveTimeout; }
			set { _redisSocket.ReceiveTimeout = value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public int SendTimeout
		{
			get { return _redisSocket.SendTimeout; }
			set { _redisSocket.SendTimeout = value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public Encoding Encoding
		{
			get { return _io.Encoding; }
			set { _io.Encoding = value; }
		}
		#endregion

		#region Class events
		/// <summary>
		/// 
		/// </summary>
		public event EventHandler Connected;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="endPoint"></param>
		/// <param name="socket"></param>
		/// <param name="concurrency"></param>
		/// <param name="bufferSize"></param>
		public RedisConnector( EndPoint endPoint, IRedisSocket socket, int concurrency, int bufferSize )
		{
			_redisSocket = socket;
			_endPoint = endPoint;

			_io = new RedisIO();

			_concurrency = concurrency;
			_bufferSize = bufferSize;

			_asyncConnector = new Lazy<AsyncConnector>( () => 
			{
				var connector = new AsyncConnector( _redisSocket, _endPoint, _io, _concurrency, _bufferSize );
				connector.Connected += OnAsyncConnected;
				return connector;
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		public void Dispose()
		{
			if( _asyncConnector.IsValueCreated )
				_asyncConnector.Value.Dispose();

			_io.Dispose();

			_redisSocket?.Dispose();
		}
		#endregion

		#region Class 'Connection' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public bool Connect()
		{
			_redisSocket.Connect( _endPoint );

			if( _redisSocket.Connected )
				OnConnected();

			return _redisSocket.Connected;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Task<bool> ConnectAsync() => Async.ConnectAsync();
		/// <summary>
		/// 
		/// </summary>
		private void OnConnected()
		{
			_io.SetStream( _redisSocket.GetStream() );
			Connected?.Invoke( this, new EventArgs() );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="args"></param>
		private void OnAsyncConnected( object sender, EventArgs args ) => OnConnected();
		/// <summary>
		/// 
		/// </summary>
		private void ConnectIfNotConnected()
		{
			if( !IsConnected )
				Connect();
		}
		/// <summary>
		/// 
		/// </summary>
		void Reconnect()
		{
			int attempts = 0;
			while( attempts++ < ReconnectAttempts || ReconnectAttempts == -1 )
			{
				if( Connect() )
					return;

				Thread.Sleep( TimeSpan.FromMilliseconds( ReconnectWait ) );
			}

			throw new IOException( "Could not reconnect after " + attempts + " attempts" );
		}
		#endregion

		#region Class 'Write' methods

		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="command"></param>
		/// <returns></returns>
		public T Call<T>( RedisCommand<T> command )
		{
			ConnectIfNotConnected();

			try
			{
				if( IsPipelined )
					return _io.Pipeline.Write( command );

				_io.Writer.Write( command, _io.Stream );

				return command.Parse( _io.Reader );
			}
			catch( IOException )
			{
				if( ReconnectAttempts == 0 )
					throw;
				Reconnect();
				return Call( command );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="command"></param>
		/// <returns></returns>
		public Task<T> CallAsync<T>( RedisCommand<T> command ) => Async.CallAsync( command );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="command"></param>
		public void Write( RedisCommand command )
		{
			ConnectIfNotConnected();

			try
			{
				_io.Writer.Write( command, _io.Stream );
			}
			catch( IOException )
			{
				if( ReconnectAttempts == 0 )
					throw;
				Reconnect();
				Write( command );
			}
		}

		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="func"></param>
		/// <returns></returns>
		public T Read<T>( Func<RedisReader, T> func )
		{
			ExpectConnected();

			try
			{
				return func( _io.Reader );
			}
			catch( IOException )
			{
				if( ReconnectAttempts == 0 )
					throw;
				Reconnect();
				return Read( func );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="destination"></param>
		/// <param name="bufferSize"></param>
		public void Read( Stream destination, int bufferSize )
		{
			ExpectConnected();

			try
			{
				_io.Reader.ExpectType( RedisMessage.Bulk );
				_io.Reader.ReadBulkBytes( destination, bufferSize, false );
			}
			catch( IOException )
			{
				if( ReconnectAttempts == 0 )
					throw;
				Reconnect();
				Read( destination, bufferSize );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		void ExpectConnected()
		{
			if( !IsConnected )
				throw new RedisClientException( "Client is not connected" );
		}
		#endregion

		#region Class 'Pipe' methods
		/// <summary>
		/// 
		/// </summary>
		public void BeginPipe()
		{
			ConnectIfNotConnected();
			_io.Pipeline.Begin();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public object [] EndPipe()
		{
			ExpectConnected();

			try
			{
				return _io.Pipeline.Flush();
			}
			catch( IOException )
			{
				if( ReconnectAttempts == 0 )
					throw;
				Reconnect();
				return EndPipe();
			}
		}
		#endregion
	}
}
