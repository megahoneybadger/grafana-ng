#region Usings
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
#endregion

namespace ED.Web
{
	public static class SwaggerExt
	{
		#region Class public methods

		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		public static void AddSwagger( this IServiceCollection services )
		{
			services.AddSwaggerGen( option =>
			{
				option.AddSecurityDefinition( "Bearer", new OpenApiSecurityScheme()
				{
					Name = "Authorization",
					Type = SecuritySchemeType.ApiKey,
					Scheme = "Bearer",
					BearerFormat = "JWT",
					In = ParameterLocation.Header,
					Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 1safsfsdfdfd\"",
				} );
				option.AddSecurityRequirement( new OpenApiSecurityRequirement
				{
					{
						new OpenApiSecurityScheme
						{
								Reference = new OpenApiReference
								{
										Type = ReferenceType.SecurityScheme,
										Id = "Bearer"
								}
						},
						Array.Empty<string>()
					}
				} );
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="app"></param>
		/// <param name="env"></param>
		public static void UseSwagger( this IApplicationBuilder app, IWebHostEnvironment env ) 
		{
			if( env.IsDevelopment() )
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}
		}
		#endregion
	}
}
