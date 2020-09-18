#region Usings
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;
using ED.Drivers.Influx;
#endregion

namespace ED.DataSources.InfluxDb
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
		public string Url{ get; private set; }
		/// <summary>
		/// 
		/// </summary>
		protected InfluxDbClient Connection { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public virtual string Id
		{
			get
			{
				return GetType().Name;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		public InfluxDataSource DataSource { get; protected set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public Command( InfluxDataSource ds )
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
			OperationResult<T> result = null;

			try
			{
				Connection = new InfluxDbClient( 
					DataSource.Url,
					/*DataSource.User*/"root" ?? "",
					/*DataSource.Password*/"root" ?? "",
					InfluxDbVersion.Latest/*,
					InfluxDB.Net.Enums.InfluxVersion.Auto, TimeSpan.FromSeconds( 1 )*/ );
			}
			catch
			{
				return OperationResult<T>.Create( ErrorCode.NoDatabaseConnection );
			}

			try
			{
				result = await Run();
			}
			catch( InfluxDataApiException e )
			{
				var error = e.ResponseBody;

				try
				{
					error = JsonConvert.DeserializeObject<ErrorResponseBody>( e.ResponseBody ).Error;
				}
				catch { }

				result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest,
					new BadDatabaseRequestException( error ) );

			}
			catch( Exception e )
			{
				var message = string.Format( "failed to execute database request: {0}", e.Message );

				result = OperationResult<T>.Create( ErrorCode.BadDatabaseRequest, 
					new BadDatabaseRequestException( message ) );
			}

			return result;
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
