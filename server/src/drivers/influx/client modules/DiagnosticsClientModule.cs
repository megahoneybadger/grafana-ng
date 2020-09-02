#region Usings
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class DiagnosticsClientModule : ClientModuleBase, IDiagnosticsClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly IDiagnosticsQueryBuilder _diagnosticsQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly IDiagnosticsResponseParser _diagnosticsResponseParser;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="diagnosticsQueryBuilder"></param>
		/// <param name="diagnosticsResponseParser"></param>
		public DiagnosticsClientModule( IInfluxDbRequestClient requestClient,
			IDiagnosticsQueryBuilder diagnosticsQueryBuilder, IDiagnosticsResponseParser diagnosticsResponseParser )
				: base( requestClient )
		{
			_diagnosticsQueryBuilder = diagnosticsQueryBuilder;
			_diagnosticsResponseParser = diagnosticsResponseParser;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual async Task<Pong> PingAsync()
		{
			var watch = Stopwatch.StartNew();
			var response = await base.RequestClient.RequestAsync( HttpMethod.Get, RequestPaths.Ping, includeAuthToQuery: false, headerIsBody: true ).ConfigureAwait( false );

			watch.Stop();

			var pong = new Pong
			{
				Version = response.Body,
				ResponseTime = watch.Elapsed,
				Success = true
			};

			return pong;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual async Task<Stats> GetStatsAsync()
		{
			var query = _diagnosticsQueryBuilder.GetStats();
			var series = await base.ResolveSingleGetSeriesResultAsync( query ).ConfigureAwait( false );
			var stats = _diagnosticsResponseParser.GetStats( series );

			return stats;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual async Task<Diagnostics> GetDiagnosticsAsync()
		{
			var query = _diagnosticsQueryBuilder.GetDiagnostics();
			var series = await base.ResolveSingleGetSeriesResultAsync( query ).ConfigureAwait( false );
			var diagnostics = _diagnosticsResponseParser.GetDiagnostics( series );

			return diagnostics;
		}
		#endregion
	}
}
