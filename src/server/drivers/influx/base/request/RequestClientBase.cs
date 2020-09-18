#region Usings
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class RequestClientBase
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private readonly string _userAgent;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public IConfiguration Configuration { get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>`
		/// <param name="configuration"></param>
		/// <param name="userAgent"></param>
		protected RequestClientBase( IInfluxDbClientConfiguration configuration, string userAgent )
				: this( ( IConfiguration )configuration, userAgent )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		/// <param name="userAgent"></param>
		protected RequestClientBase( IKapacitorClientConfiguration configuration, string userAgent )
				: this( ( IConfiguration )configuration, userAgent )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		/// <param name="userAgent"></param>
		protected RequestClientBase( IConfiguration configuration, string userAgent )
		{
			this.Configuration = configuration;
			_userAgent = userAgent;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="method"></param>
		/// <param name="path"></param>
		/// <param name="requestParams"></param>
		/// <param name="content"></param>
		/// <param name="includeAuthToQuery"></param>
		/// <param name="headerIsBody"></param>
		/// <returns></returns>
		public async Task<IInfluxDataApiResponse> RequestAsync(
				HttpMethod method,
				string path,
				IDictionary<string, string> requestParams = null,
				HttpContent content = null,
				bool includeAuthToQuery = true,
				bool headerIsBody = false )
		{
			var response = await RequestInnerAsync(
					HttpCompletionOption.ResponseHeadersRead,
					CancellationToken.None,
					method,
					path,
					requestParams,
					content,
					includeAuthToQuery ).ConfigureAwait( false );

			string responseContent = String.Empty;

			if( !headerIsBody )
			{
				responseContent = await response.Content.ReadAsStringAsync().ConfigureAwait( false );
			}
			else
			{
				IEnumerable<string> values;

				if( response.Headers.TryGetValues( "X-Influxdb-Version", out values ) )
				{
					responseContent = values.First();
				}
				else if( response.Headers.TryGetValues( "X-Kapacitor-Version", out values ) )
				{
					responseContent = values.First();
				}
			}

			HandleIfErrorResponse( response.StatusCode, responseContent );

#if DEBUG
			//Debug.WriteLine( "[Response] {0}", response.ToJson() );
			//Debug.WriteLine( "[ResponseData] {0}", responseContent );
#endif

			return new InfluxDataApiResponse( response.StatusCode, responseContent );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="completionOption"></param>
		/// <param name="cancellationToken"></param>
		/// <param name="method"></param>
		/// <param name="path"></param>
		/// <param name="extraParams"></param>
		/// <param name="content"></param>
		/// <param name="includeAuthToQuery"></param>
		/// <returns></returns>
		private async Task<HttpResponseMessage> RequestInnerAsync(
				HttpCompletionOption completionOption,
				CancellationToken cancellationToken,
				HttpMethod method,
				string path,
				IDictionary<string, string> extraParams = null,
				HttpContent content = null,
				bool includeAuthToQuery = true )
		{
			var uri = BuildUri( path, extraParams, includeAuthToQuery );
			var request = BuildRequest( method, content, uri );

#if DEBUG
			//Debug.WriteLine( "[Request] {0}", request.ToJson() );
			//if( content != null )
			//{
			//	Debug.WriteLine( "[RequestData] {0}", content.ReadAsStringAsync().Result );
			//}
#endif

			return await Configuration
				.HttpClient
				.SendAsync( request, completionOption, cancellationToken )
				.ConfigureAwait( false );
		}

		#endregion Request Base

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="path"></param>
		/// <param name="requestParams"></param>
		/// <param name="includeAuthToQuery"></param>
		/// <returns></returns>
		private StringBuilder BuildUri( string path,
			IDictionary<string, string> requestParams, bool includeAuthToQuery )
		{
			var urlBuilder = new StringBuilder();
			urlBuilder.AppendFormat( "{0}{1}", this.Configuration.EndpointUri.AbsoluteUri, path );

			if( includeAuthToQuery )
			{
				urlBuilder.AppendFormat( "?{0}={1}&{2}={3}",
						QueryParams.Username, Uri.EscapeDataString( this.Configuration.Username ),
						QueryParams.Password, Uri.EscapeDataString( this.Configuration.Password )
				);
			}

			if( requestParams != null && requestParams.Count > 0 )
			{
				var keyValues = new List<string>( requestParams.Count );
				keyValues.AddRange( requestParams.Select( param => String.Format( "{0}={1}", param.Key, param.Value ) ) );
				urlBuilder.AppendFormat( "{0}{1}", includeAuthToQuery ? "&" : "?", String.Join( "&", keyValues ) );
			}

			return urlBuilder;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="method"></param>
		/// <param name="content"></param>
		/// <param name="urlBuilder"></param>
		/// <returns></returns>
		private HttpRequestMessage BuildRequest( HttpMethod method,
			HttpContent content, StringBuilder urlBuilder )
		{
			var request = new HttpRequestMessage( method, urlBuilder.ToString() );
			request.Headers.Add( "User-Agent", _userAgent );
			request.Headers.Add( "Accept", "application/json" );
			request.Content = content;

			return request;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="statusCode"></param>
		/// <param name="responseBody"></param>
		private void HandleIfErrorResponse( HttpStatusCode statusCode, string responseBody )
		{
			if( statusCode < HttpStatusCode.OK || statusCode >= HttpStatusCode.BadRequest )
			{
#if DEBUG
				//Debug.WriteLine( String.Format( "[Error] {0} {1}", statusCode, responseBody ) );
#endif
				throw new InfluxDataApiException( statusCode, responseBody );
			}
		}
		#endregion
	}
}