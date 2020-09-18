#region Usings

using ED.Configuration;
using ED.Data.Alerts;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public class Program
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="homepath"></param>
		/// <param name="args"></param>
		public static void Main( string [] args )
		{
			try
			{
				var config = new Config();
				config.Alerting.JwtGenerator = ( int org ) => JwtHelper.Create( org );

				WebHost
					.CreateDefaultBuilder( args )
					.ConfigureLogging( ( context, logging ) =>
					{
						// this removes the logging from all providers (mostly console)
						logging.ClearProviders();

						if( config.Log.EnableASP )
						{
							logging.AddLog4Net( new Log4NetProviderOptions()
							{
								ExternalConfigurationSetup = true,
								LoggerRepository = Logger.REPO,
							} );
						}
					} )
					.ConfigureServices( x => x.AddSingleton( typeof( Config ), config ))
					.UseUrls( config.Server.RoorUrl )
					.UseStartup<Startup>()
					.SuppressStatusMessages( true )
					.Build()
					.Run();
			}
			catch( Exception e )
			{
				Console.Error.WriteLine( $"Easy dashboard init failed. {e.Message}" );
			}
		}
		#endregion
	}
}
