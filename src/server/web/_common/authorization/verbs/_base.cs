#region Usings
#endregion

namespace ED.Web
{
	public interface IHttpVerbUnhandledException 
	{
		ErrorCode Error { get; init; }
	}
}
