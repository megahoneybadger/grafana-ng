namespace ED.Drivers.Influx
{
	/// <summary>
	/// Different user database permissions.
	/// </summary>
	public enum Privileges
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		None = 0,
		/// <summary>
		/// 
		/// </summary>
		Read = 1,
		/// <summary>
		/// 
		/// </summary>
		Write = 2,
		/// <summary>
		/// 
		/// </summary>
		All = 4,
		#endregion
	}
}
