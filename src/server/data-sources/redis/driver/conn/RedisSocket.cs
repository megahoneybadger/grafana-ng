#region Usings
using System;
using System.IO;
using System.Net;
using System.Net.Security;
using System.Net.Sockets;
#endregion

namespace CSRedis.Internal.IO
{
	class RedisSocket : IRedisSocket
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly bool _ssl;
		/// <summary>
		/// 
		/// </summary>
		private Socket _socket;
		/// <summary>
		/// 
		/// </summary>
		private EndPoint _remote;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool Connected => _socket?.Connected == true;
		/// <summary>
		/// 
		/// </summary>
		public int ReceiveTimeout
		{
			get { return _socket.ReceiveTimeout; }
			set { _socket.ReceiveTimeout = value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public int SendTimeout
		{
			get { return _socket.SendTimeout; }
			set { _socket.SendTimeout = value; }
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ssl"></param>
		public RedisSocket( bool ssl )
		{
			_ssl = ssl;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="endpoint"></param>
		private void InitSocket( EndPoint endpoint )
		{
			_socket?.Dispose();

			_socket = new Socket( AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp );

			_remote = endpoint;
		}
		/// <summary>
		/// 
		/// </summary>
		public void Dispose()
		{
			_socket?.Dispose();
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="endpoint"></param>
		public void Connect( EndPoint endpoint )
		{
			InitSocket( endpoint );

			_socket.Connect( endpoint );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="args"></param>
		/// <returns></returns>
		public bool ConnectAsync( SocketAsyncEventArgs args )
		{
			InitSocket( args.RemoteEndPoint );

			return _socket.ConnectAsync( args );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="args"></param>
		/// <returns></returns>
		public bool SendAsync( SocketAsyncEventArgs args ) => _socket.SendAsync( args );
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Stream GetStream()
		{
			var netStream = new NetworkStream( _socket );

			if( !_ssl ) return netStream;

			var sslStream = new SslStream( netStream, true );

			sslStream.AuthenticateAsClient( GetHostForAuthentication() );

			return sslStream;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		private string GetHostForAuthentication()
		{
			if( _remote == null )
				throw new ArgumentNullException( "Remote endpoint is not set" );
			else if( _remote is DnsEndPoint )
				return ( _remote as DnsEndPoint ).Host;
			else if( _remote is IPEndPoint )
				return ( _remote as IPEndPoint ).Address.ToString();

			throw new InvalidOperationException( "Cannot get remote host" );
		}
		#endregion
	}
}
