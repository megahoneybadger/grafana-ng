#region Usings
using System.Diagnostics;
using System.Collections.Generic;
using System.Threading.Tasks;
using ED.Drivers.Influx;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class QueryCommand : Command<IEnumerable<Serie>>
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private string _query;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public QueryCommand(InfluxDataSource ds, string q)
			: base(ds)
		{
			_query = q;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected override async Task<OperationResult<IEnumerable<Serie>>> Run()
		{
			var arr = _query.Split(";");

			var res = await Connection
				.Client
				.QueryAsync(arr, DataSource.Database);


			return OperationResult<IEnumerable<Serie>>.Create(res);
		}
		#endregion
	}
}
