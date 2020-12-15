#region Usings
using ED.Data;
using ED.Data.Alerts;
using ED.Web.Alerts;
using ED.Web.DataSources;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Globalization;
using Microsoft.Extensions.Logging;
using ED.Security;
using ED.Plugins;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using ED.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using log4net;
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
		public Startup( IConfiguration configuration, Config c)
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
			services.AddSingleton( typeof( AlertManager ), typeof( AlertManager ) );
			services.AddSingleton( typeof( AlertNotificationDispatcher ), typeof( AlertNotificationDispatcher ) );
			services.AddSingleton( typeof( Gravatar ), typeof( Gravatar ) );
			services.AddSingleton( typeof( PluginManager ), typeof( PluginManager ) );

			//var config = Configuration;

			services.AddSpaStaticFiles( configuration =>
			{
				configuration.RootPath = AppConfiguration.Paths.SpaDist;
			} );

			services.AddDbContext<DataContext>( opt => 
			{
				opt.UseSqlite( new SqliteConnection( $"Data Source={AppConfiguration.Paths.Database}" ) );
			});

			var converter = new IsoDateTimeConverter
			{
				DateTimeStyles = DateTimeStyles.AdjustToUniversal,
				DateTimeFormat = "yyyy'-'MM'-'dd'T'HH':'mm':'ssK"
			};

			services
				.AddControllers()
				.AddNewtonsoftJson( o =>
				{
					o.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;

					o.SerializerSettings.Converters.Add( new DataSourceBinder() );
					o.SerializerSettings.Converters.Add( new AlertNotificationsBinder() );
					o.SerializerSettings.Converters.Add( new StringEnumConverter() );
				} );

			services.Configure<KestrelServerOptions>( options =>
			{
				options.AllowSynchronousIO = true;
			} );

			services.Configure<IISServerOptions>( options =>
			{
				options.AllowSynchronousIO = true;
			} );

			services.AddMemoryCache();
			services.AddHttpContextAccessor();
			services.ConfigureJwt( () => ServiceProvider );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		public void Configure( IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory )
		{

			//if( env.IsDevelopment() )
			//{
			//  app.UseDeveloperExceptionPage();
			//}


			//app.UseHttpsRedirection();
			app.UseStaticFiles();
			if( !env.IsDevelopment() )
			{
				app.UseSpaStaticFiles();
			}

			Logger.Debug( $"Is Development:{env.IsDevelopment()}" );

			app.UseRouting();

			app.UseAuthentication();
			app.UseAuthorization();

			app.UseCors( options => options
				.SetIsOriginAllowed( x => _ = true )

				.AllowAnyMethod()
				.AllowAnyHeader()
				.AllowCredentials()
				);

			app.UseNeedTokenRefreshMiddleware();
			app.UseLastSeenMiddleware();

			//loggerFactory.AddLog4Net( ); 

			app.UseEndpoints( endpoints =>
			{
				endpoints.MapControllers();
			} );

			app.UseSpa( spa =>
			{
				// To learn more about options for serving an Angular SPA from ASP.NET Core,
				// see https://go.microsoft.com/fwlink/?linkid=864501

				spa.Options.SourcePath = AppConfiguration.Paths.Spa;

				if( env.IsDevelopment() )
				{
					Logger.Debug( $"Start CLI server" );
					//spa.UseAngularCliServer( npmScript: "start" );
					spa.UseProxyToSpaDevelopmentServer( "http://localhost:4200" );
				}
			} );

			var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
			var context = scope.ServiceProvider.GetService<DataContext>();
			ServiceProvider = scope.ServiceProvider;
			context.EnsureDataSeed();
		}
		#endregion
	}
}
