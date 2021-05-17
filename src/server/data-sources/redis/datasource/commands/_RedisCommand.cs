#region Usings

using StackExchange.Redis;
using System;
using System.Threading.Tasks;

#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public abstract class Command<T> 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public RedisDataSource DataSource { get; init; }
		/// <summary>
		/// 
		/// </summary>
		protected ConnectionMultiplexer Client{ get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public IDatabase Database => Client.GetDatabase();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public Command( RedisDataSource ds )
		{
			DataSource = ds;
		}
		
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public async Task<OperationResult<T>> Execute()
		{
			OperationResult<T> result;

			try
			{
				Client = await MuxerPool.Get( DataSource );
			}
			catch
			{
				return OperationResult<T>.Create( ErrorCode.NoDatabaseConnection );
			}

			try
			{
				result = await Run();
			}
			catch( Exception e )
			{
				var message = string.Format( "failed to execute database request: {0}", e.Message );

				result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest,	new Exception( message ) );
			}

			return result;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected abstract Task<OperationResult<T>> Run();
		#endregion
	}
}
