#region Usings
using ED.Configuration;
using ED.DataSources;
using log4net;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
#endregion

namespace ED.Plugins
{
	public interface IPluginManager 
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		IEnumerable<Plugin> Plugins { get; }
		/// <summary>
		/// 
		/// </summary>
		IEnumerable<Plugin> DataSources { get; }
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		Plugin this [ string id ]{ get;}
		/// <summary>
		/// 
		/// </summary>
		IEnumerable<Plugin> this[ Plugin.Target? t ]  { get; }
		/// <summary>
		/// 
		/// </summary>
		IEnumerable<(string id, Type type)> Bindings { get; }
		#endregion
	}
}


