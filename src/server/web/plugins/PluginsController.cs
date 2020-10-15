#region Usings
using ED.Data;
using ED.Plugins;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
#endregion

namespace ED.Web.Plugins
{
	/// <summary>
	/// 
	/// </summary>
	[Authenticate]
	[Route( "api/plugins" )]
	public class PluginsController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public PluginManager PluginManager { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public PluginsController( IHttpContextAccessor accessor, DataContext dc, PluginManager pm )
			: base( accessor, dc )
		{
			PluginManager = pm;
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="type"></param>
		/// <returns></returns>
		[HttpGet()]
		public IActionResult GetPlugins( Plugin.Kind? type ) =>
			PluginManager [ type ].ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[ HttpGet( "{id}/settings" )]
		public IActionResult GetPlugin( string id ) =>
			PluginManager [ id ].ToActionResult();
		#endregion
	}
}