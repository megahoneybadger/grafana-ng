#region Usings
using Newtonsoft.Json.Linq;
#endregion

namespace ED.DataSources
{

	public class DataSourceQueryRequest
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string From { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public string To { get; init; }
		/// <summary>
		/// 
		/// </summary>
		public Time.Range Range => new() { From = From, To = To };
		/// <summary>
		/// 
		/// </summary>
		public JToken[] Queries { get; init; }
		#endregion
	}

	public class DataSourceQueryResponse
	{
		#region Class properties

		#endregion
	}
}


