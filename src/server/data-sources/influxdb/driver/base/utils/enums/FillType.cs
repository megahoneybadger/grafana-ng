﻿
namespace ED.Drivers.Influx
{
	public enum FillType
	{
		#region Class properties
		/// <summary>
		/// Exhibits the same behavior as the default (sets NULL as the value for intervals with no data).
		/// </summary>
		Null,
		/// <summary>
		/// Reports the value of the previous "time window".
		/// </summary>
		Previous,
		/// <summary>
		/// Suppresses timestamps and values where the value is null (won't add downsampled points for intervals with no data).
		/// </summary>
		None
		#endregion
	}
}
