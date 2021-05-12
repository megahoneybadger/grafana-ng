#region Usings
using System;
using System.IO;
using System.Text;
#endregion

namespace CSRedis.Internal.IO
{
	class RedisIO : IDisposable
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private BufferedStream _stream;
		/// <summary>
		/// 
		/// </summary>
		private readonly RedisWriter _writer;
		/// <summary>
		/// 
		/// </summary>
		private RedisReader _reader;
		/// <summary>
		/// 
		/// </summary>
		private RedisPipeline _pipeline;
		
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public RedisWriter Writer => _writer;
		/// <summary>
		/// 
		/// </summary>
		public RedisReader Reader => GetOrThrow( _reader );
		/// <summary>
		/// 
		/// </summary>
		public Encoding Encoding { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Stream Stream => GetOrThrow( _stream );
		/// <summary>
		/// 
		/// </summary>
		public bool IsPipelined => Pipeline != null && Pipeline.Active;
		/// <summary>
		/// 
		/// </summary>
		public RedisPipeline Pipeline => GetOrThrow( _pipeline );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public RedisIO()
		{
			_writer = new RedisWriter( this );
			Encoding = new UTF8Encoding( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="stream"></param>
		public void SetStream( Stream stream )
		{
			_stream?.Dispose();

			_stream = new BufferedStream( stream );
			_reader = new RedisReader( this );
			_pipeline = new RedisPipeline( this );
		}
		/// <summary>
		/// 
		/// </summary>
		public void Dispose()
		{
			_pipeline?.Dispose();
			_stream?.Dispose();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj"></param>
		/// <returns></returns>
		static T GetOrThrow<T>( T obj )
		{
			if( obj == null )
				throw new RedisClientException( "Connection was not opened" );
			return obj;
		}
		#endregion
	}
}
