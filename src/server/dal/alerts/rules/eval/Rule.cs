#region Usings
using ED.Time;
using Newtonsoft.Json;
using System;
using System.Linq;
using ModelAlert = ED.Alerts.Alert;
using QueryProvider = System.Func<string, (int, ED.DataSources.IMetricQuery)>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class Rule
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		[JsonIgnore]
		public int PanelId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string For { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Frequency { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Condition [] Conditions { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public NoDataOptions NoDataOption { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public ErrorOptions ErrorOption { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Message { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int [] Notifications { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"[{Name}] evaluate every: '{Frequency}'; for '{For}'";
		}
		/// <summary>
		/// 
		/// </summary>
		public Rule Validate( QueryProvider qp )
		{
			if( null == DateTimeMathParser.ToDuration( Frequency, TimeUnit.Second ) )
				AlertValidationException.ThrowBadParseFrequency();

			if( !string.IsNullOrEmpty( For ) && !DateTimeMathParser.ToDuration( For, TimeUnit.Second ).HasValue )
				AlertValidationException.ThrowBadParseFor();

			if( null == Conditions || 0 == Conditions.Length )
				AlertValidationException.ThrowNoCondtitions();

			if( !Enum.IsDefined( typeof( NoDataOptions ), NoDataOption ) )
				AlertValidationException.ThrowBadParseNoDataOption();

			if( !Enum.IsDefined( typeof( ErrorOptions ), ErrorOption ) )
				AlertValidationException.ThrowBadParseErrorOption();

			Conditions
				.ToList()
				.ForEach( c => c.Validate( qp ) );

			return this;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum NoDataOptions
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Alerting,
			/// <summary>
			/// 
			/// </summary>
			NoData,
			/// <summary>
			/// 
			/// </summary>
			KeepLastState,
			/// <summary>
			/// 
			/// </summary>
			Ok
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public enum ErrorOptions
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Alerting,
			/// <summary>
			/// 
			/// </summary>
			KeepLastState,
			#endregion
		}
		#endregion
	}
}
