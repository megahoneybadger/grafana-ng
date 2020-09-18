#region Usings
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Linq;
#endregion

namespace ED.Drivers.Influx
{
	public static class StringExtensions
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private static DateTime _epoch = new DateTime( 1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc );
		#endregion

		#region Class 'String' methods
		/// <summary>
		/// http://www.mvvm.ro/2011/03/sanitize-strings-against-sql-injection.html
		/// </summary>
		/// <param name="stringValue"></param>
		/// <returns></returns>
		public static string Sanitize( this string stringValue )
		{
			if( null == stringValue )
				return stringValue;

			return stringValue
					.RegexReplace( "-{2,}", "-" )
					.RegexReplace( @"[*/]+", String.Empty )
					.RegexReplace( @"(;|\s)(exec|execute|select|insert|update|delete|create|alter|drop|rename|truncate|backup|restore)\s",
							String.Empty, RegexOptions.IgnoreCase );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="stringValue"></param>
		/// <param name="matchPattern"></param>
		/// <param name="toReplaceWith"></param>
		/// <returns></returns>
		private static string RegexReplace( this string stringValue,
			string matchPattern, string toReplaceWith )
		{
			return Regex.Replace( stringValue, matchPattern, toReplaceWith );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="stringValue"></param>
		/// <param name="matchPattern"></param>
		/// <param name="toReplaceWith"></param>
		/// <param name="regexOptions"></param>
		/// <returns></returns>
		private static string RegexReplace( this string stringValue,
			string matchPattern, string toReplaceWith, RegexOptions regexOptions )
		{
			return Regex.Replace( stringValue, matchPattern, toReplaceWith, regexOptions );
		}
		#endregion

		#region Class 'Multipart' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="content"></param>
		/// <param name="name"></param>
		/// <returns></returns>
		public static MultipartFormDataContent ToMultipartHttpContent( this string content, string name )
		{
			var httpContent = new MultipartFormDataContent();
			httpContent.Add( new StringContent( content ), name );

			return httpContent;
		}
		#endregion

		#region Class 'Object' methods

		/// <summary>
		/// Converts objects to JSON (for debugging purposes).
		/// </summary>
		/// <param name="object">Object to convert.</param>
		/// <returns>Object as JSON string.</returns>
		public static string ToJson( this object @object )
		{
			return JsonConvert.SerializeObject( @object );
		}

		/// <summary>
		/// Converts DateTime to unix time (defaults to milliseconds).
		/// </summary>
		/// <param name="date">DateTime to convert.</param>
		/// <param name="precision">Precision (optional, defaults to milliseconds)</param>
		/// <returns>Unix-style timestamp in milliseconds.</returns>
		public static long ToUnixTime( this DateTime date, string precision = TimeUnit.Milliseconds )
		{
			var span = date - _epoch;
			double fractionalSpan;

			switch( precision )
			{
				case TimeUnit.Milliseconds:
					fractionalSpan = span.TotalMilliseconds;
					break;

				case TimeUnit.Seconds:
					fractionalSpan = span.TotalSeconds;
					break;

				case TimeUnit.Minutes:
					fractionalSpan = span.TotalMinutes;
					break;

				case TimeUnit.Hours:
					fractionalSpan = span.TotalHours;
					break;

				default:
					fractionalSpan = span.TotalMilliseconds;
					break;
			}

			return Convert.ToInt64( fractionalSpan );
		}
		/// <summary>
		/// Converts from unix time (expects milliseconds by default) to DateTime.
		/// </summary>
		/// <param name="unixTime">The unix time (expects milliseconds by default).</param>
		/// <param name="precision">Precision (optional, defaults to milliseconds)</param>
		/// <returns>DateTime object.</returns>
		public static DateTime FromUnixTime( this long unixTime, string precision = TimeUnit.Milliseconds )
		{
			switch( precision )
			{
				case TimeUnit.Milliseconds:
					return _epoch.AddMilliseconds( unixTime );

				case TimeUnit.Seconds:
					return _epoch.AddSeconds( unixTime );

				case TimeUnit.Minutes:
					return _epoch.AddMinutes( unixTime );

				case TimeUnit.Hours:
					return _epoch.AddHours( unixTime );

				default:
					return _epoch.AddMilliseconds( unixTime );
			}
		}
		/// <summary>
		/// Joins items separating them with "," (comma).
		/// </summary>
		/// <param name="items">Items to join.</param>
		/// <returns>Comma separated collection as a string.</returns>
		public static string ToCommaSeparatedString( this IEnumerable<string> items )
		{
			return String.Join( ",", items );
		}
		/// <summary>
		/// Joins items separating them with ", " (comma and one whitespace).
		/// </summary>
		/// <param name="items">Items to join.</param>
		/// <returns>Comma-space separated collection as a string.</returns>
		public static string ToCommaSpaceSeparatedString( this IEnumerable<string> items )
		{
			return String.Join( ", ", items );
		}
		/// <summary>
		/// Joins items separating them with "AND " ('AND' and one whitespace).
		/// </summary>
		/// <param name="items">Items to join.</param>
		/// <returns>AND-space separated collection as a string.</returns>
		public static string ToAndSpaceSeparatedString( this IEnumerable<string> items )
		{
			return String.Join( "AND ", items );
		}

		/// <summary>
		/// Joins items separating them with "; " (';' and one whitespace).
		/// </summary>
		/// <param name="items">Items to join.</param>
		/// <returns>Semicolon-space separated collection as a string.</returns>
		public static string ToSemicolonSpaceSeparatedString( this IEnumerable<string> items )
		{
			return String.Join( "; ", items );
		}
		#endregion

		#region Class 'Response' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="response"></param>
		/// <returns></returns>
		public static T ReadAs<T>( this IInfluxDataApiResponse response )
		{
			return response.Body.ReadAs<T>();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="responseBody"></param>
		/// <returns></returns>
		public static T ReadAs<T>( this string responseBody )
		{
			return JsonConvert.DeserializeObject<T>( responseBody );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="response"></param>
		/// <param name="throwOnWarning"></param>
		/// <returns></returns>
		public static IInfluxDataApiResponse ValidateQueryResponse( 
			this IInfluxDataApiResponse response, bool throwOnWarning )
		{
			response.ReadAs<QueryResponse>().Validate( throwOnWarning );
			return response;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="queryResponse"></param>
		/// <param name="throwOnWarning"></param>
		/// <returns></returns>
		public static QueryResponse Validate( this QueryResponse queryResponse, bool throwOnWarning )
		{
			Influx.Validate.IsNotNull( queryResponse, "queryResponse" );
			Influx.Validate.IsNotNull( queryResponse.Results, "queryResponse.Results" );

			if( queryResponse.Error != null )
			{
				throw new InfluxDataApiException( HttpStatusCode.BadRequest, queryResponse.Error );
			}

			if( throwOnWarning )
			{
				var warningMessage = queryResponse
						.Results?
						.FirstOrDefault( p => p.Messages != null )?
						.Messages?
						.FirstOrDefault( p => p.Level == "warning" );
				if( warningMessage != null )
					throw new InfluxDataWarningException( warningMessage.Text );
			}

			// Apparently a 200 OK can return an error in the results
			// https://github.com/influxdb/influxdb/pull/1813
			var erroredResult = queryResponse.Results.FirstOrDefault( result => result.Error != null );
			if( erroredResult != null )
				throw new InfluxDataApiException( HttpStatusCode.BadRequest, erroredResult.Error );

			return queryResponse;
		}
		#endregion

		#region Class 'Query' methods
		/// <summary>
		/// Builds a parametarized query from a query template and parameters object (uses reflection).
		/// </summary>
		/// <param name="queryTemplate">Query template to use.</param>
		/// <param name="parameters">Dynamic parameters object.</param>
		/// <returns>Full query.</returns>
		public static string BuildQuery( this string queryTemplate, object parameters )
		{
			var type = parameters.GetType();
			var properties = type.GetProperties();

			foreach( var propertyInfo in properties )
			{
				var regex = $@"@{propertyInfo.Name}(?!\w)";

				if( !Regex.IsMatch( queryTemplate, regex ) && Nullable.GetUnderlyingType( propertyInfo.GetType() ) != null )
					throw new ArgumentException( $"Missing parameter identifier for @{propertyInfo.Name}" );

				var paramValue = propertyInfo.GetValue( parameters );
				if( paramValue == null )
					continue;

				var paramType = paramValue.GetType();

				if( !paramType.IsPrimitive && paramType != typeof( String ) && paramType != typeof( DateTime ) )
					throw new NotSupportedException( $"The type {paramType.Name} is not a supported query parameter type." );

				var sanitizedParamValue = paramValue;

				if( paramType == typeof( String ) )
				{
					sanitizedParamValue = ( ( string )sanitizedParamValue ).Sanitize();
				}

				while( Regex.IsMatch( queryTemplate, regex ) )
				{
					var match = Regex.Match( queryTemplate, regex );

					queryTemplate = queryTemplate.Remove( match.Index, match.Length );
					queryTemplate = queryTemplate.Insert( match.Index, $"{sanitizedParamValue}" );
				}
			}

			return queryTemplate;
		}
		#endregion

		#region Class 'Serie' methods
		/// <summary>
		/// Gets the byColumn value of the first Serie.Values record item. Usually for series that are
		/// known to return a single serie record-set (such as "SHOW DIAGNOSTICS" or "SHOW STATS").
		/// </summary>
		/// <typeparam name="T">Expected type of the byColumn value (int, long, string..).</typeparam>
		/// <param name="serie">Serie to parse.</param>
		/// <param name="columnKey">Column key of the needed value.</param>
		/// <returns>Parsed column value.</returns>
		public static T FirstRecordValueAs<T>( this Serie serie, string columnKey )
		{
			var firstValue = serie.Values.FirstOrDefault();
			if( firstValue == null )
				return default( T );

			return ( T )( firstValue [ serie.Columns.IndexOf( columnKey ) ] );
		}
		/// <summary>
		/// Converts an ubiquitous enumeration of series to a strongly typed enumeration by matching property names.
		/// </summary>
		/// <typeparam name="T">Type to convert the enumeration of series to</typeparam>
		/// <param name="series">Series to convert</param>
		/// <returns>Strongly typed enumeration representing the series</returns>
		public static IEnumerable<T> As<T>( this IEnumerable<Serie> series ) where T : new()
		{
			if( series == null )
				yield return default( T );

			Type type = typeof( T );

			foreach( var serie in series )
			{
				var properties = type.GetProperties( BindingFlags.Instance | BindingFlags.Public ).ToList();

				var matchedProperties = serie.Columns
						.Select( columnName => properties.FirstOrDefault(
								 property => String.Compare( property.Name, columnName, StringComparison.InvariantCultureIgnoreCase ) == 0 ) )
						.ToList();

				foreach( var value in serie.Values )
				{
					var instance = new T();

					for( var columnIndex = 0; columnIndex < serie.Columns.Count(); columnIndex++ )
					{
						var prop = matchedProperties [ columnIndex ];

						if( prop == null )
							continue;

						Type propType = prop.PropertyType;

						var convertedValue = Convert.ChangeType( value [ columnIndex ], prop.PropertyType );

						prop.SetValue( instance, convertedValue );
					}

					yield return instance;
				}
			}
		}

		/// <summary>
		/// Extracts a serie object from a serie collection by serie/measurement name.
		/// </summary>
		/// <param name="series">Serie collection.</param>
		/// <param name="name">Serie/measurement name.</param>
		/// <returns>Serie item.</returns>
		public static Serie GetByName( this IEnumerable<Serie> series, string name )
		{
			var serie = series.FirstOrDefault( p => p.Name == name );
			Influx.Validate.IsNotNull( serie, String.Format( "serie.GetByName('{0}')", name ) );

			return serie;
		}
		#endregion
	}
}
