#region Usings
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	public class SerieClientModule : ClientModuleBase, ISerieClientModule
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly ISerieQueryBuilder _serieQueryBuilder;
		/// <summary>
		/// 
		/// </summary>
		private readonly ISerieResponseParser _serieResponseParser;
		/// <summary>
		/// 
		/// </summary>
		private readonly IBatchWriter _batchWriter;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="requestClient"></param>
		/// <param name="serieQueryBuilder"></param>
		/// <param name="serieResponseParser"></param>
		/// <param name="batchWriter"></param>
		public SerieClientModule( 
			IInfluxDbRequestClient requestClient,
			ISerieQueryBuilder serieQueryBuilder,
			ISerieResponseParser serieResponseParser,
			IBatchWriter batchWriter )
				: base( requestClient )
		{
			_serieQueryBuilder = serieQueryBuilder;
			_serieResponseParser = serieResponseParser;
			_batchWriter = batchWriter;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <param name="filters"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<SerieSet>> GetSeriesAsync( 
			string dbName, string measurementName = null, IEnumerable<string> filters = null )
		{
			var query = _serieQueryBuilder.GetSeries( dbName, measurementName, filters );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var serieSets = _serieResponseParser.GetSerieSets( series );

			return serieSets;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <param name="filters"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DropSeriesAsync( 
			string dbName, string measurementName, IEnumerable<string> filters = null )
		{
			return await DropSeriesAsync( dbName, new List<string>() { measurementName }, filters ).ConfigureAwait( false );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementNames"></param>
		/// <param name="filters"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DropSeriesAsync( 
			string dbName, IEnumerable<string> measurementNames, IEnumerable<string> filters = null )
		{
			var query = _serieQueryBuilder.DropSeries( dbName, measurementNames, filters );
			var response = await base.GetAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="filters"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<Measurement>> GetMeasurementsAsync(
			string dbName, IEnumerable<string> filters = null )
		{
			var query = _serieQueryBuilder.GetMeasurements( dbName, filters );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var measurements = _serieResponseParser.GetMeasurements( series );

			return measurements;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <returns></returns>
		public virtual async Task<IInfluxDataApiResponse> DropMeasurementAsync( 
			string dbName, string measurementName )
		{
			var query = _serieQueryBuilder.DropMeasurement( dbName, measurementName );
			var response = await base.GetAndValidateQueryAsync( query, dbName ).ConfigureAwait( false );

			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<string>> GetTagKeysAsync( 
			string dbName, string measurementName )
		{
			var query = _serieQueryBuilder.GetTagKeys( dbName, measurementName );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var tagKeys = _serieResponseParser.GetTagKeys( series );

			return tagKeys;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <param name="tagName"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<TagValue>> GetTagValuesAsync( 
			string dbName, string measurementName, string tagName )
		{
			var query = _serieQueryBuilder.GetTagValues( dbName, measurementName, tagName );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var tagValues = _serieResponseParser.GetTagValues( series );

			return tagValues;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="measurementName"></param>
		/// <returns></returns>
		public virtual async Task<IEnumerable<FieldKey>> GetFieldKeysAsync( 
			string dbName, string measurementName )
		{
			var query = _serieQueryBuilder.GetFieldKeys( dbName, measurementName );
			var series = await base.ResolveSingleGetSeriesResultAsync( query, dbName ).ConfigureAwait( false );
			var fieldKeys = _serieResponseParser.GetFieldKeys( series );

			return fieldKeys;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="retenionPolicy"></param>
		/// <param name="precision"></param>
		/// <returns></returns>
		public IBatchWriter CreateBatchWriter( string dbName,
			string retenionPolicy = null, string precision = TimeUnit.Milliseconds )
		{
			return ( ( IBatchWriterFactory )_batchWriter ).CreateBatchWriter( dbName, retenionPolicy, precision );
		}
		#endregion
	}
}
