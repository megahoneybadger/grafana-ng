namespace ED.Drivers.Influx
{
	// NOTE: potential "regions/classes": https://docs.influxdata.com/influxdb/v0.9/query_language/

	public interface IInfluxDbClient
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		IBasicClientModule Client { get; }
		/// <summary>
		/// 
		/// </summary>
		ISerieClientModule Serie { get; }
		/// <summary>
		/// 
		/// </summary>
		IDatabaseClientModule Database { get; }
		/// <summary>
		/// 
		/// </summary>
		IRetentionClientModule Retention { get; }
		/// <summary>
		/// 
		/// </summary>
		ICqClientModule ContinuousQuery { get; }
		/// <summary>
		/// 
		/// </summary>
		IDiagnosticsClientModule Diagnostics { get; }
		/// <summary>
		/// 
		/// </summary>
		IUserClientModule User { get; }
		/// <summary>
		/// 
		/// </summary>
		IInfluxDbRequestClient RequestClient { get; }
		#endregion
	}
}