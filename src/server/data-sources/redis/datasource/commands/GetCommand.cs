#region Usings
using StackExchange.Redis;
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class GetCommand : Command<RedisValue>
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public GetCommand( RedisDataSource ds, string key )
			:base( ds )
		{
			Key = key;
		}
		#endregion

		#region Class public methods
		
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected override async Task<OperationResult<RedisValue>> Run()
		{
			var v = await Database.StringGetAsync( Key );
			
			return OperationResult<RedisValue>.Create( v );
		}
		#endregion
	}
}
