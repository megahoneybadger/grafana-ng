#region Usings
using log4net;
using PuppeteerSharp;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
#endregion

namespace ED.Data.Alerts
{
	public class Renderer
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		private static ILog Logger => ED.Logger.GetLogger( "renderer" );
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		public static async Task Render( Options o )
		{
			Browser browser = null;

			try
			{
				Logger.Debug( $"Start rendering: {o.RootUrl}{o.Url}" );
				

				browser = await GetBrowserAsync( o );

				var page = await GetPageAsync( browser, o );
			
				var panel = await GetPanelAsync( page, o );

				await panel.ScreenshotAsync( o.FileName );
				Logger.Debug( $"Rendeting complete: {o.FileName}" );
			}
			catch( Exception e )
			{
				Logger.Error( $"Rendering failed. {e.Message}" );

				await RenderEmbeddedImage( o, "rendering_error" );
				//TASKKILL /IM chrome.exe /F
			}
			finally
			{
				await browser?.CloseAsync();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="o"></param>
		/// <returns></returns>
		private static async Task<Browser> GetBrowserAsync( Options o )
		{
			var sw = Stopwatch.StartNew();
			await new BrowserFetcher().DownloadAsync( BrowserFetcher.DefaultRevision );

			var lo = new LaunchOptions
			{
				Headless = true,
				Timeout = 5000,
				Args = new string [] { "--no-sandbox" } 
			};

			lo.DefaultViewport.Height = o.Height;
			lo.DefaultViewport.Width = o.Width;

			var browser = await Puppeteer.LaunchAsync( lo );
			sw.Stop();

			//Logger.Debug( $"Got the browser [{sw.ElapsedMilliseconds}ms]" );

			return browser;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="browser"></param>
		/// <param name="o"></param>
		/// <returns></returns>
		private static async Task<Page> GetPageAsync( Browser browser, Options o )
		{
			var page = await browser.NewPageAsync();

			await page.GoToAsync( o.RootUrl );

			await page.EvaluateExpressionAsync( $@"{{
        localStorage.setItem('jwt', '{o.JwtToken}');
			}}" );

			return page;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="page"></param>
		/// <param name="o"></param>
		/// <returns></returns>
		private static async Task<ElementHandle> GetPanelAsync( Page page, Options o )
		{
			var sw = Stopwatch.StartNew();

			var url = $"{o.RootUrl}{o.Url}/view/{o.PanelId}";
			
			await page.GoToAsync( url, 8000, new WaitUntilNavigation [] {
				WaitUntilNavigation.DOMContentLoaded, WaitUntilNavigation.Networkidle2 } );

			sw.Stop();
			Logger.Debug( $"Fetched the page [{sw.ElapsedMilliseconds}ms]" );

			var panel = await page.QuerySelectorAsync( $"div.pe-content" );

			return panel;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="o"></param>
		/// <returns></returns>
		public static async Task RenderStubImage( Options o ) => await RenderEmbeddedImage( o, "stub.png" );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="assembly"></param>
		/// <param name="searchPattern"></param>
		/// <returns></returns>
		public static async Task RenderEmbeddedImage( Options o, string searchPattern )
		{
			try
			{
				var asm = Assembly.GetExecutingAssembly();

				var resourceName = asm
					.GetManifestResourceNames()
					.FirstOrDefault( x => x.Contains( searchPattern ) );

				using var stream = asm.GetManifestResourceStream( resourceName );

				if( null != stream ) 
				{
					var fileStream = File.Create( o.FileName );
					await stream.CopyToAsync( fileStream );
					fileStream.Close();
				}
			}
			catch { }
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class Options
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int Width { get; set; } = 1000;
			/// <summary>
			/// 
			/// </summary>
			public int Height { get; set; } = 500;
			/// <summary>
			/// 
			/// </summary>
			public int Timeout { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int PanelId { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string Url { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string RootUrl { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string FileName { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public string JwtToken { get; set; }
			#endregion
		}
		#endregion
	}
}
