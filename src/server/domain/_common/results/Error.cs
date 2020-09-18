#region Usings
using System.ComponentModel;
using System.Text.Json.Serialization;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public class Error
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public ErrorCode Code { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Message
		{
			get
			{
				return Code.GetAttribute<DescriptionAttribute>().Description;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[JsonIgnore]
		public string Details { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return string.Format( "[{0}]", Code, Message ?? Details );
		}
		#endregion
	}
}
