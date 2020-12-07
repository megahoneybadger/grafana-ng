#region Usings
using ED.Data;
using ED.Plugins;
using ED.Security;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Web.DataSources
{
	/// <summary>
	/// https://grafana.com/docs/grafana/latest/http_api/data_source/
	/// </summary>
	[Authenticate]
	[Route( "api/datasources" )]
	public class DataSourcesController : BaseController
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public DataSourceRepository Repo => GetRepo<DataSourceRepository>();
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public DataSourcesController( DataContext dc )
			: base( dc )
		{
			//dc.FillDatabase();
		}
		#endregion

		#region Class 'Read' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( Role.Viewer )]
		public IActionResult GetDataSources() =>
			Repo
				.All
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{id}", Role.Admin )]
		public IActionResult GetDataSource( int id ) =>
			Repo [ id ].ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "name/{name}", Role.Admin )]
		public IActionResult GetDataSource( string name ) =>
			Repo [ name ].ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "id/{name}", Role.Admin )]
		public IActionResult GetDataSourceId( string name ) =>
			Repo [ name ]
				.ToActionResult( x => new { x.Value.Id } );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( Role.Admin )]
		public IActionResult Create( ModelDataSource ds ) =>
			Repo
				.Create( ds )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}", Role.Admin )]
		public IActionResult Update( ModelDataSource ds ) =>
			Repo
				.Update( ds )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}", Role.Admin )]
		public IActionResult Delete( int id ) =>
			Repo
				.Delete( id )
				.ToActionResult( x => new { Message = "Data source deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "name/{name}", Role.Admin )]
		public IActionResult Delete( string name ) =>
			Repo
				.Delete( name )
				.ToActionResult( x => new { Message = "Data source deleted" } );
		#endregion

		#region Class 'Proxy' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "ping/{id}" )]
		public async Task<IActionResult> Ping( int id ) =>
			( await Repo.Ping( id ) ).ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "proxy/{id}", Role.Viewer )]
		public async Task<IActionResult> Proxy( int id, [FromQuery] string query ) =>
			( await Repo.Proxy( id, query ) ).ToActionResult();
		#endregion
	}
}