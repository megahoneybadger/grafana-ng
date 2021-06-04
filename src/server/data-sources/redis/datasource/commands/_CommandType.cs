#region Usings
using Newtonsoft.Json.Linq;
using System.Text;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	public enum CommandType 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Get,
		/// <summary>
		/// 
		/// </summary>
		HGet,
		/// <summary>
		/// 
		/// </summary>
		HGetAll,
		/// <summary>
		/// 
		/// </summary>
		HKeys,
		/// <summary>
		/// 
		/// </summary>
		HLen,
		/// <summary>
		/// 
		/// </summary>
		XRange,
		/// <summary>
		/// 
		/// </summary>
		ClientList,
		/// <summary>
		/// 
		/// </summary>
		LLen,
		/// <summary>
		/// 
		/// </summary>
		LRange
		#endregion
	}
}
