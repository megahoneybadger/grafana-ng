#region Usings
using System;
using System.Net.Http;
#endregion

namespace ED.Drivers.Influx
{
	public class InfluxDbClientConfiguration : IInfluxDbClientConfiguration
	{
		#region Class propertiese
		/// <summary>
		/// 
		/// </summary>
		public Uri EndpointUri { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public string Username { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public bool ThrowOnWarning { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public InfluxDbVersion InfluxVersion { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public QueryLocation QueryLocation { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public HttpClient HttpClient { get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// InfluxDb client configuration.
		/// </summary>
		/// <param name="endpointUri">InfluxDb server URI.</param>
		/// <param name="username">InfluxDb server username.</param>
		/// <param name="password">InfluxDb server password.</param>
		/// <param name="influxVersion">InfluxDb server version.</param>
		/// <param name="queryLocation">Where queries are located in the request (URI params vs. Form Data) (optional).</param>
		/// <param name="httpClient">Custom HttpClient object (optional).</param>
		/// <param name="throwOnWarning">Should throw exception upon InfluxDb warning message (for debugging) (optional).</param>
		public InfluxDbClientConfiguration(
				Uri endpointUri,
				string username,
				string password,
				InfluxDbVersion influxVersion,
				QueryLocation queryLocation = QueryLocation.FormData,
				HttpClient httpClient = null,
				bool throwOnWarning = false )
		{
			Validate.IsNotNull( endpointUri, "Endpoint may not be null or empty." );

			EndpointUri = SanitizeEndpoint( endpointUri, false );
			Username = username;
			Password = password;
			InfluxVersion = influxVersion;
			QueryLocation = queryLocation;
			HttpClient = httpClient ?? new HttpClient();
			ThrowOnWarning = throwOnWarning;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="endpointUri"></param>
		/// <param name="isTls"></param>
		/// <returns></returns>
		private static Uri SanitizeEndpoint( Uri endpointUri, bool isTls )
		{
			var builder = new UriBuilder( endpointUri );

			if( isTls )
			{
				builder.Scheme = "https";
			}
			else if( builder.Scheme.Equals( "tcp", StringComparison.CurrentCultureIgnoreCase ) ) // InvariantCultureIgnoreCase, not supported in PCL
			{
				builder.Scheme = "http";
			}

			return builder.Uri;
		}
		#endregion
	}
}