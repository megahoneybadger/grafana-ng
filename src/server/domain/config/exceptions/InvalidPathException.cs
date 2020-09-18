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
	public class InvalidPathException : Exception
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="key"></param>
		public InvalidPathException( string key, string value )
			: base( $"Invalid configuration path: [{key}][{value}] does not exists" )
		{
		}
		
		#endregion
	}
}

