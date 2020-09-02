#region Usings
using System.Threading.Tasks;
#endregion

namespace ED.DataSources.InfluxDb
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
		public PingCommand( InfluxDataSource ds )
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
			var res = await Connection
				.Retention
				.GetRetentionPoliciesAsync( DataSource.Database );

			return OperationResult<bool>.Create( true );
		}
		#endregion
	}
}
