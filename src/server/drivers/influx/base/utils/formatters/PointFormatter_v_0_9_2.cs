namespace ED.Drivers.Influx
{
	public class PointFormatter_v_0_9_2 : PointFormatter_v_1_0_0
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="result"></param>
		/// <returns></returns>
		protected override string ToInt( string result )
		{
			return result;
		}
		#endregion
	}
}