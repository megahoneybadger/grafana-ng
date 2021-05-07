
namespace ED.Drivers.Influx
{
	public interface IKapacitorClientConfiguration : IConfiguration
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		KapacitorVersion KapacitorVersion { get; }
		#endregion
	}
}