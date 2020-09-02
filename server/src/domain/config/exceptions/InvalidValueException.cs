#region Usings
using System;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class InvalidValueException : Exception
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		public InvalidValueException( string key )
			: base( $"Invalid configuration value: [{key}]" )
		{
		}
		
		#endregion
	}
}

