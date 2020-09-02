#region Usings
using System;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public enum ErrorType
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		NotFound,
		/// <summary>
		/// 
		/// </summary>
		BadPrecondition

		#endregion
	}
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Field, Inherited = true, AllowMultiple = false )]
	public class ErrorHintAttribute : Attribute
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public ErrorType Type { get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public ErrorHintAttribute( ErrorType t ) 
		{
			Type = t;
		}
		#endregion
	}
}
