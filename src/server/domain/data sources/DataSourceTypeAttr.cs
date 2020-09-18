#region Usings
using System;
#endregion

namespace ED.DataSources
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Class, Inherited = true, AllowMultiple = false )]
	public class DataSourceTypeAttribute : Attribute
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Type{ get; private set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public DataSourceTypeAttribute( string t )
		{
			Type = t;
		}
		#endregion
	}
}


