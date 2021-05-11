#region Usings
using ED.Configuration;
using ED.Data;
using ED.Data.Alerts;
using ED.Plugins;
using ED.Security;
using ED.Web.Alerts;
using ED.Web.DataSources;
using log4net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class Startup
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public IConfiguration Configuration { get; }
		/// <summary>
		/// 
		/// </summary>
		public Config AppConfiguration { get; }
		/// <summary>
		/// 
		/// </summary>
		public IServiceProvider ServiceProvider { get; set; }
		/// <summary>
		/// 
		/// </summary>
		private ILog Logger => ED.Logger.GetLogger( "startup" );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		public Startup( IConfiguration configuration, Config c )
		{
			Configuration = configuration;
			AppConfiguration = c;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="services"></param>
		public void ConfigureServices( IServiceCollection services )
		{
			services.AddSingleton<AlertManager>();
			services.AddSingleton<AlertNotificationDispatcher>();
			services.AddSingleton<Gravatar>();
			services.AddSingleton<IPluginManager, PluginManager>();

			services.AddSpaStaticFiles( c => c.RootPath = AppConfiguration.Paths.SpaDist );

			services.AddDbContext<DataContext>( opt =>
				opt.UseSqlite( new SqliteConnection( $"Data Source={AppConfiguration.Paths.Database}" ) ) );

			services
				.AddControllers()
				.AddNewtonsoftJson( o =>
				{
					o.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
					o.SerializerSettings.Converters.Add( new AlertNotificationsBinder() );
					o.SerializerSettings.Converters.Add( new StringEnumConverter() );

					var pm = ServiceProvider.GetService<IPluginManager>();
					o.SerializerSettings.Converters.Add( new DataSourceBinder( pm ) );
				} );

			// Need to read context body
			services.Configure<KestrelServerOptions>( o => o.AllowSynchronousIO = true );
			services.Configure<IISServerOptions>( o => o.AllowSynchronousIO = true );

			services.AddMemoryCache();
			services.AddHttpContextAccessor();
			services.ConfigureJwt( () => ServiceProvider );
			services.AddResponseCompression();
			//services.AddSwagger();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		public void Configure(
			IApplicationBuilder app,
			IWebHostEnvironment env,
			ILoggerFactory loggerFactory,
			AlertManager _ /*warm up service*/)
		{
			Logger.Debug( $"Is Development:{env.IsDevelopment()}" );

			// Tricky workaround how to pass scope provider
			// into the VersionBasedJwtSecurityTokenHandler
			ServiceProvider = app.ApplicationServices;

			//app.UseSwaggerFull();
			app.UseResponseCompression();

			app.UseStaticFiles();

			app.UseRouting();
			app.UseAuthentication();
			app.UseAuthorization();

			// Sends back 401 if user's jwt is obsolete
			app.UseNeedTokenRefreshMiddleware();

			app.UseLastSeenMiddleware();
			app.UseEndpoints( e => e.MapControllers() );

			ConfigureSpa( app, env );

			EnsureDataSeed( app );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		private void ConfigureSpa( IApplicationBuilder app, IWebHostEnvironment env )
		{
			if( !env.IsDevelopment() )
			{
				app.UseSpaStaticFiles();
			}

			app.UseSpa( spa =>
			{
				spa.Options.SourcePath = AppConfiguration.Paths.Spa;

				if( env.IsDevelopment() )
				{
					Logger.Debug( $"Start CLI server" );

					//spa.UseAngularCliServer( npmScript: "start" );
					spa.UseProxyToSpaDevelopmentServer( "http://localhost:4200" );
				}
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		private void EnsureDataSeed( IApplicationBuilder app )
		{
			var scope = app
				.ApplicationServices
				.GetRequiredService<IServiceScopeFactory>()
				.CreateScope();

			var context = scope
				.ServiceProvider
				.GetService<DataContext>();

			context.EnsureDataSeed();
		}
		#endregion
	}
}
