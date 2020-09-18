#region Usings
using System.Net;
#endregion

namespace ED.Drivers.Influx
{
	public interface IInfluxDataApiResponse
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		HttpStatusCode StatusCode { get; }
		/// <summary>
		/// 
		/// </summary>
		string Body { get; }
		/// <summary>
		/// 
		/// </summary>
		bool Success { get; }
		#endregion
	}
}