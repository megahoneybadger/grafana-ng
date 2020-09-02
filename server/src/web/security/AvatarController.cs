#region Usings
using ED.Data;
using ED.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
#endregion

namespace ED.Web.Security
{
	/// <summary>
	/// 
	/// </summary>
	[Route( "api/avatar" )]
	public class AvatarController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Gravatar Gravatar { get; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		public AvatarController( DataContext dc, Gravatar g )
			: base( dc )
		{
			Gravatar = g;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "{hash}" )]
		public async Task<IActionResult> GetAvatar( string hash ) => 
			new FileContentResult( await Gravatar.Fetch( hash ), "image/jpeg" );

		#endregion
	}
}