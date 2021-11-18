#region Usings
#endregion

namespace ED.Web
{
	public interface IHttpVerbUnhandledException 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		ErrorCode Error { get; init; }
		#endregion
	}
}
