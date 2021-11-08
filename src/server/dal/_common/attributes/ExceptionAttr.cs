#region Usings
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Method, Inherited = false, AllowMultiple = false )]
	public class ExceptionAttribute : Attribute
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Type Type { get; init; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public ExceptionAttribute( Type t )
		{
			Type = t;
		}
		#endregion
	}
}
