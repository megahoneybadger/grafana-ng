#region Usings
using System;
#endregion

namespace ED.DataSources.InfluxDb
{
	public class NoDatabaseConnectionException : Exception
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public NoDatabaseConnectionException()
			:base( "database connection failed" )
		{
			
		}
		#endregion
	}
}

