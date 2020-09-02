#region Usings
using System.Collections.Generic;
using System;
#endregion

namespace ED.Drivers.Influx
{
	internal static class RequestParamsBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="query"></param>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public static IDictionary<string, string> BuildQueryRequestParams( string query = null,
			string dbName = null, string epochFormat = null, long? chunkSize = null )
		{
			var requestParams = new Dictionary<string, string>();

			if( !String.IsNullOrEmpty( dbName ) )
				requestParams.Add( QueryParams.Db, Uri.EscapeDataString( dbName ) );

			if( !String.IsNullOrEmpty( query ) )
				requestParams.Add( QueryParams.Query, Uri.EscapeDataString( query ) );

			if( !String.IsNullOrEmpty( epochFormat ) )
				requestParams.Add( QueryParams.Epoch, Uri.EscapeDataString( epochFormat ) );

			if( chunkSize != null )
			{
				requestParams.Add( QueryParams.Chunked, "true" );
				requestParams.Add( QueryParams.ChunkSize, chunkSize.ToString() );
			}

			return requestParams;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="epochFormat"></param>
		/// <param name="chunkSize"></param>
		/// <returns></returns>
		public static IDictionary<string, string> BuildRequestParams( string dbName = null,
			string epochFormat = null, long? chunkSize = null )
		{
			return BuildQueryRequestParams( null, dbName, epochFormat, chunkSize );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="paramKey1"></param>
		/// <param name="paramValue1"></param>
		/// <param name="paramKey2"></param>
		/// <param name="paramValue2"></param>
		/// <returns></returns>
		public static IDictionary<string, string> BuildRequestParams( string dbName, 
			string paramKey1, string paramValue1, string paramKey2, string paramValue2 )
		{
			var requestParams = new Dictionary<string, string>();

			if( !String.IsNullOrEmpty( dbName ) )
				requestParams.Add( QueryParams.Db, Uri.EscapeDataString( dbName ) );

			if( paramKey1 != null && paramValue1 != null )
				requestParams.Add( paramKey1, Uri.EscapeDataString( paramValue1 ) );

			if( paramKey2 != null && paramValue2 != null )
				requestParams.Add( paramKey2, Uri.EscapeDataString( paramValue2 ) );

			return requestParams;
		}
		#endregion
	}
}
