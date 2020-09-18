#region Usings
using System;
using System.Collections.Generic;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public interface IEvaluationContext
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool Firing { get;  }
		/// <summary>
		/// 
		/// </summary>
		public bool IsTestRun { get; }
		/// <summary>
		/// 
		/// </summary>
		public bool IsDebug { get; }
		/// <summary>
		/// 
		/// </summary>
		public Exception Error { get; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime StartTime { get; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime EndTime { get; }
		/// <summary>
		/// 
		/// </summary>
		public bool NoDataFound { get;  }
		/// <summary>
		/// 
		/// </summary>
		public string ConditionEvals { get; }
		/// <summary>
		/// 
		/// </summary>
		public AlertState State { get; }
		/// <summary>
		/// 
		/// </summary>
		public NotificationReport Notification { get; }
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class NotificationReport 
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public string Title { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Message { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string ImagePath { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public List<(string Metric, double? Value)> Matches { get; set; }
			#endregion
		}
		#endregion

	}

	//
}
