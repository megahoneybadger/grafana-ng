#region Usings

using Microsoft.Extensions.Configuration;
using System;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.IO;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public class InvalidIniFileException : Exception
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		public InvalidIniFileException( string value, string details )
			: base( $"Invalid ini file: [{value}]. {details}" )
		{
		}
		
		#endregion
	}
}

