#region Usings
using System;
using System.Globalization;

#endregion

namespace ED.Drivers.Influx
{
	public class PointFormatter_v_1_0_0 : PointFormatter
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		/// <param name="value"></param>
		/// <returns></returns>
		protected override string FormatPointTag( string key, object value )
		{
			return $"{key}={EscapeTagValue( value.ToString() )}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		/// <param name="value"></param>
		/// <returns></returns>
		protected override string FormatPointField( string key, object value )
		{
			Validate.IsNotNullOrEmpty( key, "key" );
			Validate.IsNotNull( value, "value" );

			var result = value.ToString();

			if( value.GetType() == typeof( string ) )
			{
				// Surround strings with quotes
				result = QuoteFieldStringValue( EscapeNonTagValue( value.ToString() ) );
			}
			else if( value.GetType() == typeof( bool ) )
			{
				// API needs lowercase booleans
				result = value.ToString().ToLower();
			}
			else if( value.GetType() == typeof( DateTime ) )
			{
				// InfluxDb does not support a datetime type for fields or tags
				// Convert datetime to UNIX long
				result = ( ( DateTime )value ).ToUnixTime().ToString();
			}
			else if( value.GetType() == typeof( decimal ) )
			{
				// For cultures using other decimal characters than '.'
				result = ( ( decimal )value ).ToString( "0.0###################", CultureInfo.InvariantCulture );
			}
			else if( value.GetType() == typeof( float ) )
			{
				result = ( ( float )value ).ToString( "0.0###################", CultureInfo.InvariantCulture );
			}
			else if( value.GetType() == typeof( double ) )
			{
				result = ( ( double )value ).ToString( "0.0###################", CultureInfo.InvariantCulture );
			}
			else if( value.GetType() == typeof( long ) || value.GetType() == typeof( int ) )
			{
				// Int requires 'i' at the end of the number - otherwise it will be represented as float
				result = ToInt( result );
			}

			return $"{EscapeNonTagValue( key )}={result}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="point"></param>
		/// <param name="tags"></param>
		/// <returns></returns>
		protected override string FormatPointKey( Point point, string tags )
		{
			var escapedPointKey = EscapeNonTagValue( point.Name );
			return String.IsNullOrEmpty( tags ) ? escapedPointKey : $"{escapedPointKey},{tags}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <returns></returns>
		protected virtual string EscapeTagValue( string value )
		{
			Validate.IsNotNull( value, "value" );

			var result = value
					.Replace( @" ", @"\ " )
					.Replace( @"=", @"\=" )
					.Replace( @",", @"\," );

			return result;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <returns></returns>
		protected virtual string EscapeNonTagValue( string value )
		{
			Validate.IsNotNull( value, "value" );

			var result = value
					// literal backslash escaping is broken
					// https://github.com/influxdb/influxdb/issues/3070
					.Replace( @"\", @"\\" )
					.Replace( @"""", @"\""" )
					.Replace( @" ", @"\ " )
					.Replace( @"=", @"\=" )
					.Replace( @",", @"\," );

			return result;
		}
		#endregion
	}
}