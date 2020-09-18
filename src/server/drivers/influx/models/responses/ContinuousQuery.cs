namespace ED.Drivers.Influx
{
	/// <summary>
	/// Represents <see cref="{ContinuousQuery}"/> query response.
	/// </summary>
	public class ContinuousQuery
	{
		#region Class properties
		/// <summary>
		/// CQ name.
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// CQ query.
		/// </summary>
		public string Query { get; set; }
		#endregion
	}
}

