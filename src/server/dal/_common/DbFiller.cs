#region Usings
using ED.Security;
using System.Collections.Generic;
using System.Linq;

using ModelTeam = ED.Security.Team;
using ModelDashboard = ED.Dashboards.Dashboard;
using ModelDashboards = System.Collections.Generic.List<ED.Dashboards.Dashboard>;
using ModelTeams = System.Collections.Generic.List<ED.Security.Team>;
using ModelFolder = ED.Dashboards.Folder;
using ModelFolderPermission = ED.Dashboards.FolderPermission;
using ModelFolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using ModelAnnotation = ED.Dashboards.Annotation;
using ModelAnnotations = System.Collections.Generic.List<ED.Dashboards.Annotation>;

using ModelFolders = System.Collections.Generic.List<ED.Dashboards.Folder>;
using ModelDataSource = ED.DataSources.DataSource;
using ModelDataSources = System.Collections.Generic.List<ED.DataSources.DataSource>;
using ModelPlaylists = System.Collections.Generic.List<ED.Playlists.Playlist>;
using ModelPlaylist = ED.Playlists.Playlist;
using ModelUser = ED.Security.User;
using ModelOrg = ED.Security.Org;
using ModelOrgs = System.Collections.Generic.List<ED.Security.Org>;
using ModelUsers = System.Collections.Generic.List<ED.Security.User>;
using ModelTeamsPreferences = System.Collections.Generic.List<ED.Security.TeamPreferences>;
using ModelPreferences = System.Collections.Generic.List<ED.Security.Preferences>;
using ModelUsersPreferences = System.Collections.Generic.List<ED.Security.UserPreferences>;
using ModelAlert = ED.Alerts.Alert;
using System;
using System.Threading.Tasks;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public static class DbFiller
	{
		#region Class 'Create' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task FillDatabase( this DataContext dc )
		{
			dc.AddOrgs();
			dc.AddUsersWithRoot();
			await dc.AddTeams();
			dc.AddTeamMembers();
			dc.AddOrgMembers();
			dc.AddTeamPreferences();
			dc.AddUserPreferences();
			await dc.AddDashboards();
			//dc.AddFolderPermissions();
			//dc.AddDashboardPermissions();
			//dc.AddPlaylists();
			//dc.AddStars();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelDataSources AddDataSources( this DataContext dc, int count = 5 )
		{
			var bindings = dc
				.PluginManager
				.Bindings
				.ToList();

			var listAdded = new ModelDataSources();

			for( int i = 0; i < count; ++i ) 
			{
				var b = TestFactory.SelectRandomObject( bindings );

				var model = ( ModelDataSource )Activator.CreateInstance( b.type );

				TestFactory.Update( model );

				new DataSourceRepository( dc ).Create( model );

				if( model.IsDefault )
				{
					listAdded.ForEach( x => x.IsDefault = false );
				}

				listAdded.Add( model );
			}


			return listAdded;
			//var datasources = TestFactory.Create<DataSources.InfluxDb.InfluxDataSource>( count );
			

			//foreach( var x in datasources )
			//{
			//	new DataSourceRepository( dc ).Create( x );

			//	if( x.IsDefault )
			//	{
			//		listAdded.ForEach( x => x.IsDefault = false );
			//	}

			//	listAdded.Add( x );
			//}

			//return datasources;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static void AddApiKeys( this DataContext dc,	Func<Security.ApiKey, string> gen )
		{
			var repo = new ApiKeyRepository( dc );

			for( int i = 0; i < 5; ++i )
			{
				var key = new ED.Security.ApiKey()
				{
					Name = TestFactory.GetRandomNoun( false ),
					Role = TestFactory.GetRandomEnumValue<Role>()
				};

				key.Bag.SecondsToLive = TestFactory.GetRandomUShort( ushort.MaxValue );
				key.Bag.Token = gen.Invoke( key );

				repo.Create( key );
			}


		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelPlaylists AddPlaylists( this DataContext dc, int count = 5 )
		{
			var playlists = TestFactory.Create<ED.Playlists.Playlist>( count );

			var tags = dc
				.DashboardTags
				.Select( x => x.Term )
				.ToList();

			var dashboards = dc
				.Dashboards
				.Select( x => x.Id )
				.ToList();

			foreach( var p in playlists )
			{
				var itemsCount = 3;
				var itemDashboards = TestFactory.SelectRandomObjects<int>( dashboards, itemsCount );

				for( int i = 0; i < itemsCount; ++i )
				{
					var item = new ModelPlaylist.Item()
					{
						Order = i,
						Title = TestFactory.GetRandomNoun(),
						Value = TestFactory.GetRandomUShort( 10 ).ToString(),
						Type = TestFactory.GetRandomEnumValue<ED.Playlists.PlaylistItemType>()
					};

					if( tags.Count > 0 && item.Type == ED.Playlists.PlaylistItemType.DashboardByTag )
					{
						item.Value = TestFactory.SelectRandomObject<string>( tags );
					}

					if( itemDashboards.Count > 0 && item.Type == ED.Playlists.PlaylistItemType.DashboardById )
					{
						item.Value = itemDashboards [ i ].ToString();
					}

					p.Items.Add( item );
				}

				dc.GetRepo<PlaylistRepository>().Create( p );
			}

			return playlists;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelOrgs AddOrgs( this DataContext dc, int count = 3 )
		{
			var repo = new OrgRepository( dc );

			var companies = TestFactory.GetRandomCompanyNames( count );
			var list = new ModelOrgs();

			foreach( var c in companies )
			{
				var o = new ModelOrg()
				{
					Name = c
				};

				var op = repo.Create( o, false );
				o.Id = op.Value.Id;

				list.Add( o );
			}

			return list;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static void AddOrgMembers( this DataContext dc )
		{
			var repo = new OrgRepository( dc );
			var users = dc.Users.ToList();
			var orgs = repo.All.Value;

			foreach( var u in users )
			{
				var myOrgs = TestFactory.SelectRandomObjects<ModelOrg>( orgs, 3 );

				foreach( var o in myOrgs )
				{
					repo.AddOrgMember( o.Id, u.Id, TestFactory.GetRandomEnumValue<Role>() );
				}

				var currentOrgId = TestFactory.SelectRandomObject<ModelOrg>( orgs ).Id;
				new UserRepository( dc ).SwitchOrg( u.Id, currentOrgId );
			}
		}
		#endregion

		#region Class 'Create users&teams' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelUsers AddUsers( this DataContext dc, int count = 10 )
		{
			var repo = new UserRepository( dc );

			var users = TestFactory.Create<ModelUser>( count );

			var orgs = dc
				.Orgs
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var u in users )
			{
				var o = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				u.OrgId = o.Id;

				GetRepo<UserRepository>( dc ).Create( u );
			}

			return users;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <returns></returns>
		public static void AddUsersWithRoot( this DataContext dc )
		{
			var repo = new UserRepository( dc );

			dc.AddUsers( 11 );

			var user = TestFactory.Create<ModelUser>();

			user.Login = "plochish";
			user.Password = "pwd1";
			user.Role = ED.Security.Role.Admin;
			user.IsRoot = true;

			repo.Create( user );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelTeams> AddTeams( this DataContext dc, int count = 10 )
		{
			var repo = new TeamRepository( dc );

			var teams = TestFactory.Create<ModelTeam>( count );

			var orgs = dc
				.Orgs
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var t in teams ) 
			{
				var o = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				t.Name = $"{o.Name.Substring( 0, 3 )}-{t.Name}";

				await GetRepo<TeamRepository>( dc )
					.ForActiveOrg( o.Id )
					.Create( t );
			}

			return teams;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelTeams> AddTeamsForDefaultOrg( this DataContext dc, int count = 10 )
		{
			var teams = TestFactory.Create<ModelTeam>( count );

			foreach( var t in teams )
			{
				await GetRepo<TeamRepository>( dc ).Create( t );
			}

			return teams;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static void AddTeamMembers( this DataContext dc )
		{
			var repo = new TeamRepository( dc );
			var users = new UserRepository( dc ).All.Value;
			var teams = dc.Teams.ToList();

			foreach( var t in teams )
			{
				var count = TestFactory.GetRandomUShort( ( ushort )users.Count );

				TestFactory
					.SelectRandomObjects<ModelUser>( users, count )
					.Select( x => x.Id )
					.ToList()
					.ForEach( async x => await repo
						.ForActiveOrg( t.OrgId )
						.AddMember( t.Id, x ) );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelTeamsPreferences AddTeamPreferences( this DataContext dc )
		{
			var teams = dc.Teams;

			try
			{
				foreach( var t in teams )
				{
					t.Preferences = new Preferences()
					{
						OrgId = t.OrgId,

						TeamId = t.Id,
						Theme = TestFactory.GetRandomEnumValue<Theme>(),
						TimeZone = TestFactory.GetRandomEnumValue<ED.Security.TimeZone>()
					};
				}

				dc.SaveChanges();
			}
			catch //( Exception _ )
			{

			}

			return teams
				.Select( x => x.Preferences.ToTeamModel() )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelUsersPreferences AddUserPreferences( this DataContext dc )
		{
			var users = dc.Users;
			var list = new ModelUsersPreferences();

			foreach( var u in users )
			{
				var p = new UserPreferences()
				{
					OrgId = u.OrgId,

					UserId = u.Id,
					Theme = TestFactory.GetRandomEnumValue<Theme>(),
					TimeZone = TestFactory.GetRandomEnumValue<ED.Security.TimeZone>()
				};

				list.Add( p );

				GetRepo<UserRepository>( dc )
					.ForActiveOrg( u.OrgId )
					.UpdatePreferences( p );
			}

			return list;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelPreferences AddOrgPreferences( this DataContext dc )
		{
			var orgs = dc.Orgs;

			foreach( var o in orgs )
			{
				o.Preferences = new Preferences()
				{
					Theme = TestFactory.GetRandomEnumValue<Theme>(),
					TimeZone = TestFactory.GetRandomEnumValue<Security.TimeZone>()
				};
			}

			dc.SaveChanges();

			return orgs
				.Where( x => null == x.Preferences.TeamId && null == x.Preferences.UserId )
				.Select( x => x.Preferences.ToModel() )
				.ToList();
		}
		#endregion

		#region Class 'Create dashboards&folders' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelFolders> AddFolders( this DataContext dc, int fCount = 5 )
		{
			//var repo = new TeamRepositoryAsync( dc );

			var folders = TestFactory.Create<ModelFolder>( fCount );

			var orgs = dc
				.Orgs
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var f in folders )
			{
				var o = TestFactory.SelectRandomObject<ModelOrg>( orgs );

				//t.Name = $"{o.Name.Substring( 0, 3 )}-{t.Name}";

				await GetRepo<FolderRepository>( dc )
					.ForActiveOrg( o.Id )
					.Create( f );
			}

			return folders;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelFolders AddFoldersForDefaultOrg( this DataContext dc, int fCount = 5 )
		{
			var folders = TestFactory.Create<ModelFolder>( fCount );

			folders
				.ToList()
				.ForEach( async f => await dc
					.GetRepo<FolderRepository>()
					.Create( f ) );

			return folders;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelDashboards> AddDashboards( this DataContext dc, int fCount = 5, int dCount = 5 )
		{
			await dc.AddFolders( fCount );

			var orgs = dc
				.Orgs
				.ToList();

			var res = new ModelDashboards();

			foreach( var o in orgs )
			{
				var folders = await dc
					.GetRepo<FolderRepository>()
					.ForActiveOrg( o )
					.GetFolders();

				foreach( var f in folders )
				{
					var dashboards = TestFactory.Create<ModelDashboard>( dCount );

					dashboards
						.ToList()
						.ForEach(  ( Action<ModelDashboard> )( async d =>
						{
							d.FolderId = f.Id;
							d.Tags = TestFactory.GetRandomTags();
							d.Data = TestFactory.GetEmptyDashboardContent();

							await dc
								.GetRepo<DashboardRepository>()
								.ForActiveOrg( ( int )f.OrgId )
								.Create( ( ModelDashboard )d );
						}) );

					res.AddRange( dashboards );
				}

				// dashboards in general (0) folder
				TestFactory
					.Create<ModelDashboard>( dCount )
					.ToList()
					.ForEach( ( Action<ModelDashboard> )(async d =>
					{
						d.Tags = TestFactory.GetRandomTags();
						d.Data = TestFactory.GetEmptyDashboardContent();
						
						await dc.GetRepo<DashboardRepository>()
							.ForActiveOrg( ( Org )o )
							.Create( ( ModelDashboard )d );

						res.Add( d );
					}) );
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelDashboards AddStars( this DataContext dc, int count )
		{
			var list = new ModelDashboards();

			var users = dc
				.Users
				.ToList();

			foreach( var u in users )
			{
				list.AddRange( dc.AddStars( u.Id, count ) );
			}

			return list;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static ModelDashboards AddStars( this DataContext dc, int userId, int count )
		{
			var dashboards = dc
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			var users = dc
				.Users
				.ToList();

			var cands = TestFactory.SelectRandomObjects<Dashboards.Dashboard>( dashboards, count );

			foreach( var c in cands )
			{
				//dc.ActiveUser = TestFactory
				//	.SelectRandomObject( users )
				//	.ToModel();

				dc.GetRepo<UserRepository>().Star( userId, c.Id );
			}

			return cands;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelFolderPermissions> AddFolderPermissions( this DataContext dc )
		{
			var repo = new FolderRepository( dc );
			var res = new ModelFolderPermissions();

			var folders = dc.Folders;

			var users = dc
				.Users
				.Select( x => x.ToModel() )
				.ToList();

			var teams = dc
				.Teams
				.Select( x => x.ToModel() )
				.ToList();

			foreach( var f in folders )
			{
				var hasAcl = TestFactory.GetRandomBoolean();

				if( hasAcl ) 
				{
					var perms = TestFactory.CreateFolderPermissions( f.Uid, users, teams );

					res.AddRange( perms );

					await repo
						.ForActiveOrg( f.OrgId )
						.UpdatePermissions( f.Uid, perms );
				}
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task AddDashboardPermissions( this DataContext dc )
		{
			var repo = new DashboardRepository( dc );

			var dashboards = dc.Dashboards;
			var users = dc.Users.ToList();
			var teams = dc.Teams.ToList();

			foreach( var d in dashboards )
			{
				var perms = new List<ED.Dashboards.DashboardPermission>();

				TestFactory
					.SelectRandomObjects<User>( users )
					.ForEach( c => perms.Add( TestFactory.CreateDashboardPermission( d.Uid, c.ToModel() ) ) );

				TestFactory
					.SelectRandomObjects<Team>( teams )
					.ForEach( c => perms.Add( TestFactory.CreateDashboardPermission( d.Uid, c.ToModel() ) ) );

				Enumerable
					.Range( 0, 1 )
					.ToList()
					.ForEach( c => perms.Add( TestFactory.CreateDashboardPermission( d.Uid ) ) );

				await repo.UpdatePermissions( d.Id, perms );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static async Task<ModelAnnotations> AddAnnotations( this DataContext dc, int count = 3 ) 
		{
			var dashboards = dc
				.Dashboards
				.Select( x => x.ToModel() )
				.ToList();

			var users = dc
				.Users
				.Select( x => x.ToModel() )
				.ToList();

			var res = new ModelAnnotations();

			foreach( var d in dashboards ) 
			{
				for( int i = 0; i < count; ++i ) 
				{
					var u = TestFactory.SelectRandomObject<ModelUser>( users );

					var model = TestFactory.Create<ModelAnnotation>();
					TestFactory.Update( model, d, u );

					res.Add( await GetRepo<AnnotationRepository>( dc )
						.ForActiveOrg( d.OrgId )
						.Create( model ) );
				}
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="count"></param>
		public static void AddAlerts( this DataContext dc, int count = 3 ) 
		{
			var dashboards = dc
				.Dashboards
				.ToList();

			var list = new List<Alert>();

			foreach( var d in dashboards ) 
			{
				for( int i = 0; i < count; ++i ) 
				{
					var a = TestFactory.Create<ModelAlert>();
					a.PanelId = i + 1;
					a.DashboardId = d.Id;
					a.OrgId = d.OrgId;

					list.Add( a.ToEntity() );
				}
			}

			dc.Alerts.AddRange( list );

			dc.SaveChanges();
		}
		#endregion

		#region Class 'Remove' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		public static void RemoveDashboards( this DataContext dc )
		{
			dc.Dashboards.RemoveRange( dc.Dashboards );
			dc.Folders.RemoveRange( dc.Folders );
			dc.SaveChanges();

		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="ensureDeleted"></param>
		/// <returns></returns>
		public static T GetRepo<T>( this DataContext dc ) where T : Repository
		{
			return ( T )Activator.CreateInstance( typeof( T ), new object [] { dc } );
		}
		#endregion
	}
}
