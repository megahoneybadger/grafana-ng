#region Usings

using Newtonsoft.Json;
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
		public virtual string Id => GetType().Name;
		/// <summary>
		/// 
		/// </summary>
		protected ConnectionMultiplexer Client{ get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public RedisDataSource DataSource { get; init; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public Command( RedisDataSource ds )
		{
			DataSource = ds;
			SetupClient();
		}
		/// <summary>
		/// 
		/// </summary>
		private void SetupClient() 
		{
			//Client = new RedisClient( DataSource.Url );
			
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
				Client = ConnectionMultiplexer.Connect( "localhost" );

				result = await Run();
			}
			catch( Exception e )
			{
				var message = string.Format( "failed to execute database request: {0}", e.Message );

				result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest,
					new Exception( message ) );
			}

			return result;


			//try
			//{
			//	Connection = new InfluxDbClient( 
			//		DataSource.Url,
			//		DataSource.User?? string.Empty,
			//		DataSource.Password ?? string.Empty,
			//		InfluxDbVersion.Latest );
			//}
			//catch
			//{
			//	return OperationResult<T>.Create( ErrorCode.NoDatabaseConnection );
			//}

			//try
			//{
			//	result = await Run();
			//}
			//catch( InfluxDataApiException e )
			//{
			//	var error = e.ResponseBody;

			//	try
			//	{
			//		error = JsonConvert.DeserializeObject<ErrorResponseBody>( e.ResponseBody ).Error;
			//	}
			//	catch { }

			//	result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest,
			//		new BadDatabaseRequestException( error ) );

			//}
			//catch( Exception e )
			//{
			//	var message = string.Format( "failed to execute database request: {0}", e.Message );

			//	result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest, 
			//		new BadDatabaseRequestException( message ) );
			//}

			//return result;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected abstract Task<OperationResult<T>> Run();
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		private class ErrorResponseBody
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Error { get; set; }
			#endregion
		}
		#endregion
	}
}
