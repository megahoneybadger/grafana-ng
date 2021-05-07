
namespace ED.Drivers.Influx
{
	public class User
	{
		#region Class properties
		/// <summary>
		/// User name.
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// Whether or not the user is an administrator.
		/// </summary>
		public bool IsAdmin { get; set; }
		#endregion
	}
}
