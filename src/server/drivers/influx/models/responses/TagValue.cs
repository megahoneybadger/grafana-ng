namespace ED.Drivers.Influx
{
	public class TagValue
	{
		#region Class properties
		/// <summary>
		/// The tag's name/key.
		/// </summary>
		public string Name { get; set; }

		/// <summary>
		/// The tag value.
		/// </summary>
		public string Value { get; set; }
		#endregion
	}
}
