#region Usings
using ED.Data;
using ED.DataSources;
using ED.Plugins;
using ED.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Threading.Tasks;

using ActionResultTask = System.Threading.Tasks.Task<Microsoft.AspNetCore.Mvc.IActionResult>;
using ModelDataSource = ED.DataSources.DataSource;
using static ED.ErrorCode;
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
		[HttpGet( Role.Viewer, Error = BadGetDataSources )]
		public async ActionResultTask GetDataSources() =>
			( await Repo
				.GetDataSources() )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet( "{id}", Role.Admin, Error = BadGetDataSource )]
		public async ActionResultTask GetDataSource( int id ) =>
			( await Repo
				.GetDataSourceById( id ) )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "name/{name}", Role.Admin, Error = BadGetDataSource )]
		public async ActionResultTask GetDataSource( string name ) =>
			( await Repo
				.GetDataSourceByName( name ) )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "id/{name}", Role.Admin, Error = BadGetDataSource )]
		public async ActionResultTask GetDataSourceId( string name ) =>
			( await Repo
				.GetDataSourceByName( name ) )
				.ToActionResult( x => new { x.Id } );
		#endregion

		#region Class 'CUD' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPost( Role.Admin, Error = BadCreateDataSource )]
		public async ActionResultTask Create( ModelDataSource ds ) =>
			( await Repo
				.Create( ds ) )
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpPut( "{id}", Role.Admin, Error = BadUpdateDataSource )]
		public async ActionResultTask Update( ModelDataSource ds ) =>
			( await Repo
				.Update( ds ))
				.ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "{id}", Role.Admin, Error = BadDeleteDataSource )]
		public async ActionResultTask Delete( int id ) =>
			( await Repo
				.Delete( id ))
				.ToActionResult( x => new { Message = "Data source deleted" } );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		[HttpDelete( "name/{name}", Role.Admin, Error = BadDeleteDataSource )]
		public async ActionResultTask Delete( string name ) =>
			( await Repo
				.Delete( name ) ) 
				.ToActionResult( x => new { Message = "Data source deleted" } );
		#endregion

		#region Class 'Proxy' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "ping/{id}" )]
		public async ActionResultTask Ping( int id ) =>
			( await Repo.Ping( id ) ).ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpGet( "proxy/{id}", Role.Viewer )]
		public async ActionResultTask Proxy( int id, [FromQuery] string query ) =>
			( await Repo.Proxy( id, query ) ).ToActionResult();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		[HttpPost( "query/{id}", Role.Viewer )]
		public async ActionResultTask Query( [FromBodyRoute] DataSourceQueryRequest c ) =>
			( await Repo.Query( c ) ).ToActionResult();
		#endregion
	}
}