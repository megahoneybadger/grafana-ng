#region Usings
using System.Net;
#endregion

namespace ED.Drivers.Influx
{
	public class InfluxDataApiResponse : IInfluxDataApiResponse
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public HttpStatusCode StatusCode { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public string Body { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public virtual bool Success
		{
			get { return StatusCode == HttpStatusCode.OK; }
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="statusCode"></param>
		/// <param name="body"></param>
		public InfluxDataApiResponse( HttpStatusCode statusCode, string body )
		{
			StatusCode = statusCode;
			Body = body;
		}
		#endregion
	}

	public class InfluxDataApiWriteResponse : InfluxDataApiResponse
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public override bool Success
		{
			get { return StatusCode == HttpStatusCode.NoContent; }
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="statusCode"></param>
		/// <param name="body"></param>
		public InfluxDataApiWriteResponse( HttpStatusCode statusCode, string body )
				 : base( statusCode, body )
		{
		}
		#endregion
	}

	public class InfluxDataApiDeleteResponse : InfluxDataApiResponse
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public override bool Success
		{
			get { return StatusCode == HttpStatusCode.NoContent || StatusCode == HttpStatusCode.OK; }
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="statusCode"></param>
		/// <param name="body"></param>
		public InfluxDataApiDeleteResponse( HttpStatusCode statusCode, string body )
				 : base( statusCode, body )
		{
		}
		#endregion
	}
}