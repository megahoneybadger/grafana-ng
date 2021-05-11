#region Usings
using ED.Data;
using ED.DataSources.InfluxDb;
using ED.Plugins;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using ModelOrg = ED.Security.Org;
using ModelTeam = ED.Security.Team;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelUser = ED.Security.User;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
	/// </summary>
	public class Plugins : BaseTest
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		public const string DS_REDIS = "redis";
		/// <summary>
		/// 
		/// </summary>
		public const string DS_INFLUX = "influx";
		#endregion


		#region Class members
		/// <summary>
		/// 
		/// </summary>
		//private PluginsManager _repo;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IPluginManager MockPluginManager
		{
			get
			{
				var mock = Substitute.For<IPluginManager>();

				var plugins = new List<Plugin>()
				{
					new Plugin() { Id = DS_INFLUX, Type = Plugin.Kind.Datasource },
					new Plugin() { Id = DS_REDIS, Type = Plugin.Kind.Datasource }
				};

				mock.Plugins.Returns( plugins.ToList() );
				mock.Plugins.Returns( plugins.ToList() );

				var bindings = new List<(string id, Type type)>()
				{
					( DS_INFLUX, typeof( InfluxDataSource ) ),
					( DS_REDIS, typeof( InfluxDataSource ) ),
				};

				mock.Bindings.Returns( bindings );

				mock [ DS_INFLUX ].Returns( plugins[ 0 ] );
				mock [ DS_REDIS ].Returns( plugins[ 1 ] );

				return mock;
			}
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Plugins()
		{
			
		}
		#endregion
	}

	public class PluginsTestHelper 
	{
		#region Class public methods
	
		#endregion
	}
}
