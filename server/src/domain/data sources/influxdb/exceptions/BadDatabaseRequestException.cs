#region Usings
using System;

#endregion

namespace ED.DataSources.InfluxDb
{
	public class BadDatabaseRequestException : Exception
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public BadDatabaseRequestException( string m )
			:base( m )
		{
			
		}
		#endregion
	}
}

