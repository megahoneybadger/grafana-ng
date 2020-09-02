#region Usings
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotificationCommand
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Url { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public HttpContent Body { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public HttpMethod HttpMethod { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public IDictionary<string, string> Headers { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ContentType{ get; set; }
		#endregion
	}
}

