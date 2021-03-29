#region Usings
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	public static class ServiceExt
	{
		#region Class 'Swagger' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="services"></param>
		public static void AddSwagger( this IServiceCollection services )
		{
			services.AddSwaggerGen( c =>
			{
				c.SwaggerDoc( "v1", new OpenApiInfo
				{
					Title = "Grafana-ng API",
					Version = "v1",
					Description = "Description for the API goes here.",
					Contact = new OpenApiContact
					{
						Name = "megahonemybadger",
						Email = "megahoneybadger@gmail.com",
						Url = new Uri( "https://coderjony.com/" ),
					},
				} );
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		public static void UseSwaggerFull( this IApplicationBuilder app ) 
		{
			// Enable middleware to serve generated Swagger as a JSON endpoint.
			app.UseSwagger();

			// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
			// specifying the Swagger JSON endpoint.
			app.UseSwaggerUI( c =>
			{
				c.SwaggerEndpoint( "./swagger/v1/swagger.json", "Zomato API V1" );

				// To serve SwaggerUI at application's root page, set the RoutePrefix property to an empty string.
				c.RoutePrefix = string.Empty;
			} );
		}
		#endregion
	}
}
