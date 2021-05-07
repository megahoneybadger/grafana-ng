
namespace ED.Drivers.Influx
{
	public interface IPointFormatter
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="point"></param>
		/// <param name="precision"></param>
		/// <returns></returns>
		string PointToString( Point point, string precision = TimeUnit.Milliseconds );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="point"></param>
		/// <returns></returns>
		Serie PointToSerie( Point point );
		#endregion
	}
}