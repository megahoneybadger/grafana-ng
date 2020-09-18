namespace ED.Drivers.Influx
{
	public interface IDiagnosticsQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		string GetStats();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		string GetDiagnostics();
		#endregion
	}
}