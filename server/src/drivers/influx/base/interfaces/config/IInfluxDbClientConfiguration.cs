namespace ED.Drivers.Influx
{
	public interface IInfluxDbClientConfiguration : IConfiguration
	{
		#region Class properties
		/// <summary>
		/// InfluxDb server version.
		/// </summary>
		InfluxDbVersion InfluxVersion { get; }
		/// <summary>
		/// Where queries are located in the request (URI params vs. Form Data).
		/// </summary>
		QueryLocation QueryLocation { get; }
		#endregion
	}
}