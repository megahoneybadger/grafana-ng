namespace ED.Drivers.Influx
{
	public class InfluxDbRequestClient_v_0_9_2 : InfluxDbRequestClient_v_1_0_0
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		public InfluxDbRequestClient_v_0_9_2( IInfluxDbClientConfiguration configuration )
				: base( configuration )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override IPointFormatter GetPointFormatter()
		{
			return new PointFormatter_v_0_9_2();
		}
		#endregion
	}
}