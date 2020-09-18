#region Usings
using ED.Time;
using System;
using System.Linq;

#endregion


namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertValidationException : Exception
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_FREQUENCY = "evaluate every";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_FOR = "for";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_NO_DATA_OPTION = "noDataOption";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_ERROR_OPTION = "errorOption";
		
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_QUERY = "query";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_EVAL = "evaluator";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_FROM = "query.from";
		/// <summary>
		/// 
		/// </summary>
		public const string FIELD_TO = "query.to";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_NO_COND = "conditions not found";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_BAD_EVAL_BOUND = "evaluator is missing correct boundaries";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_BAD_DATA_SOURCE = "correct data source is missing";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_BAD_QUERY = "referred query is either invalid or missing";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_BAD_EXEC = "failure to execute query";
		/// <summary>
		/// 
		/// </summary>
		public const string MESSAGE_BAD_PANEL = "required panel is either invalid or missing";
		#endregion

		#region Class properties
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="m"></param>
		public AlertValidationException( string m ) 
			: base( $"Alert validation error: {m}" ) 
		{ }
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseFrequency() => Throw( GetBadParseMessage( FIELD_FREQUENCY ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseFor() => Throw( GetBadParseMessage( FIELD_FOR ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseNoDataOption() => Throw( GetBadParseMessage( FIELD_NO_DATA_OPTION ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseErrorOption() => Throw( GetBadParseMessage( FIELD_ERROR_OPTION ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseFrom() => Throw( GetBadParseMessage( FIELD_FROM ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadParseTo() => Throw( GetBadParseMessage( FIELD_TO ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadEvaluatorBoundaries() => Throw( MESSAGE_BAD_EVAL_BOUND );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadQuery() => Throw( GetBadParseMessage( FIELD_QUERY ) );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadEvaluator() => Throw( GetBadParseMessage( FIELD_EVAL )  );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowNoCondtitions() => Throw( MESSAGE_NO_COND );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadDataSource() => Throw( MESSAGE_BAD_DATA_SOURCE );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadQueryRef() => Throw( MESSAGE_BAD_QUERY );
		/// <summary>
		/// 
		/// </summary>
		public static void ThrowBadPanel() => Throw( MESSAGE_BAD_PANEL );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="message"></param>
		public static void ThrowBadDeserialization( string message ) => Throw( $"invalid JSON structure or values. {message}" );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="m"></param>
		private static void Throw( string m ) => throw new AlertValidationException( m );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="field"></param>
		/// <returns></returns>
		private static string GetBadParseMessage( string field ) => $"'{field}' field could not be parsed";
		#endregion
	}
}
