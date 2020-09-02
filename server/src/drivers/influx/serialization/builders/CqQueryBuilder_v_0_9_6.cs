#region Usings
using System;
#endregion

namespace ED.Drivers.Influx
{
	internal class CqQueryBuilder_v_0_9_6 : CqQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="resampleParam"></param>
		/// <returns></returns>
		protected override string BuildResample( CqResampleParam resampleParam )
		{
			if( !String.IsNullOrEmpty( resampleParam.For ) || !String.IsNullOrEmpty( resampleParam.Every ) )
				throw new NotSupportedException( "Resampling is not supported by this version of InfluxDB" );

			return String.Empty;
		}
		#endregion
	}
}
