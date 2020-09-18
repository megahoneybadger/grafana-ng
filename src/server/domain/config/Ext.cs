#region Usings

using log4net.Core;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
#endregion

namespace ED.Configuration
{
	/// <summary>
	/// 
	/// </summary>
	public static class BindingExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="configuration"></param>
		/// <param name="instance"></param>
		public static T Read<T>( this IConfigurationRoot config, string sectionName, T instance = default )
			where T : new()
		{
			var o = instance ?? new T();

			var props = o
				.GetType()
				.GetProperties()
				.ToList();

			var section = config.GetSection( sectionName );

			foreach( var u in section.AsEnumerable() ) 
			{
				var k = u
					.Key
					.Replace( $"{sectionName}:", string.Empty )
					.Replace( "_", string.Empty );

				var p = props.FirstOrDefault( x => 0 == string.Compare( x.Name, k, true ));

				if( null == p )
					continue;

				try
				{
					var v = config.GetValue( p.PropertyType, u.Key );

					p.SetValue( o, v );
				}
				catch 
				{
					throw new InvalidValueException( u.Key );
				}
			}

			return o;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="level"></param>
		/// <returns></returns>
		public static Level ToLog4NetLevel( this Log.LogLevel level ) 
		{
			return level switch
			{
				Log.LogLevel.Info => Level.Info,
				Log.LogLevel.Debug => Level.Debug,
				Log.LogLevel.Error => Level.Error,
				Log.LogLevel.Critical => Level.Critical,
				Log.LogLevel.Warn => Level.Warn,
				_ => Level.Off
			};
		}
		#endregion
	}
}

