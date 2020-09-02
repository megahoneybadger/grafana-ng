namespace ED.Drivers.Influx
{
	internal class DiagnosticsQueryBuilder : IDiagnosticsQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual string GetStats()
		{
			return QueryStatements.GetStats;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual string GetDiagnostics()
		{
			return QueryStatements.GetDiagnostics;
		}
		#endregion
	}
}
