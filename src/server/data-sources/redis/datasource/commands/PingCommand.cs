﻿#region Usings
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class PingCommand : Command<bool>
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public PingCommand( RedisDataSource ds )
			:base( ds )
		{
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected override async Task<OperationResult<bool>> Run()
		{
			await Database.PingAsync();
			
			return OperationResult<bool>.Create( true );
		}
		#endregion
	}
}
