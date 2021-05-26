#region Usings
using StackExchange.Redis;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class PipelineCommand : Command<TimeSeriesList>
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private readonly List<MetricQuery> _queries;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mc"></param>
		public PipelineCommand( RedisDataSource ds, IEnumerable<MetricQuery> queries )
			: base( ds )
		{
			_queries = queries.ToList();


		}

		#endregion

		#region Class public methods

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected override async Task<OperationResult<TimeSeriesList>> Run()
		{
			var tasks = _queries
				.Select( x => x.ToTask( Database ) )
				.Where( x => x != null );

			var res = await Task.WhenAll( tasks );

			return OperationResult<TimeSeriesList>.Create( res.ToList() );
		}
		#endregion

		#region Class 'Convert' methods
		#endregion
	}
}
