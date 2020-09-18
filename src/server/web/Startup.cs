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
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class Startup
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		public Startup( IConfiguration configuration )
		{
			Configuration = configuration;
		}
		/// <summary>
		/// 
		/// </summary>
		public IConfiguration Configuration { get; }
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
			

			services.AddDbContext<DataContext>( opt =>
				new SqliteConnection( "Data Source=ed.db" ) );

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
			services.ConfigureJwt();
		
			//services.AddLogging();

			
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		public void Configure( IApplicationBuilder app, ILoggerFactory loggerFactory )
		{
			
			//if( env.IsDevelopment() )
			//{
			//  app.UseDeveloperExceptionPage();
			//}
			

			//app.UseHttpsRedirection();

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

			using var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
			using var context = scope.ServiceProvider.GetService<DataContext>();
			context.Database.EnsureCreated();
		}
		#endregion
	}
}
