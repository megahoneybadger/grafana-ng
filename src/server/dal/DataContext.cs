#region Usings
using ED.Configuration;
using ED.Data.Alerts;
using ED.Plugins;
using log4net;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class DataContext : DbContext
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		internal const string COL_CREATED = "Created";
		/// <summary>
		/// 
		/// </summary>
		internal const string COL_MODIFIED = "LastModified";
		/// <summary>
		/// 
		/// </summary>
		internal const string COL_VERSION = "Version";
		/// <summary>
		/// 
		/// </summary>
		internal const string COL_ORG = "OrgId";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int ActiveOrgId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int ActiveUserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Security.User ActiveUser { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AccessControlList Acl { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<DataSource> DataSources { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<User> Users { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Team> Teams { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Org> Orgs { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<TeamMember> TeamMember{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<OrgMember> OrgMember { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Preferences> Preferences{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Folder> Folders{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Dashboard> Dashboards { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<DashboardTag> DashboardTags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<DashboardVersion> DashboardVersions { get; set; }

		/// <summary>
		/// 
		/// </summary>
		public DbSet<DashboardStar> Stars { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<FolderPermission> FolderPermissions{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<DashboardPermission> DashboardPermissions { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<ApiKey> ApiKeys{ get; set; }

		/// <summary>
		/// 
		/// </summary>
		public DbSet<Playlist> Playlists{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Annotation> Annotations { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<AnnotationTag> AnnotationTags { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<AnnotationTagMember> AnnotationTagMembers{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<Alert> Alerts{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DbSet<AlertNotification> AlertNotifications{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public static readonly ILoggerFactory Logging
			= LoggerFactory.Create( builder => builder.AddLog4Net( new Log4NetProviderOptions()
			{
				ExternalConfigurationSetup = true,
				
				LoggerRepository = ED.Logger.REPO
			} ) );
		/// <summary>
		/// 
		/// </summary>
		public PluginManager PluginManager { get;  }
		/// <summary>
		/// 
		/// </summary>
		public Config Config { get; }
		/// <summary>
		/// 
		/// </summary>
		private readonly ILog Logger = ED.Logger.GetLogger( "sqlstore" );
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public DataContext()
		{
			
		}
		/// <summary>
		/// 
		/// </summary>
		public DataContext( Config c )
		{
			Config = c;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="options"></param>
		public DataContext( 
			DbContextOptions<DataContext> options,
			Config config = null, 
			PluginManager pm = null )
				: base( options )
		{
			Config = config;
			PluginManager = pm;	
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="options"></param>
		protected override void OnConfiguring( DbContextOptionsBuilder options )
		{
			if( !options.IsConfigured )
			{
				options.UseSqlite( $"Data Source={Config.Paths.Database}" );
			}

			if( true == Config?.Log.EnableEF ) 
			{
				options.UseLoggerFactory( Logging ).EnableSensitiveDataLogging();
			}
			
		}
		#endregion

		#region Class 'Model' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mb"></param>
		protected override void OnModelCreating( ModelBuilder mb ) 
		{
			AddShadowTime( mb );

			AddShadowVersion( mb );

			// Datasources
			mb.Entity<DataSource>().HasIndex( x => x.OrgId );
			mb.Entity<DataSource>().HasIndex( x => new { x.OrgId, x.Name } ).IsUnique();

			// Security
			mb.Entity<User>().HasIndex( x => x.Email ).IsUnique( true );
			mb.Entity<User>().HasIndex( x => x.Login ).IsUnique( true );

			mb.Entity<Team>().HasIndex( x => x.OrgId );
			mb.Entity<Team>().HasIndex( x => new { x.OrgId, x.Name } ).IsUnique();

			mb.Entity<TeamMember>().HasIndex( x => new { x.TeamId, x.UserId } ).IsUnique();

			mb.Entity<OrgMember>().HasIndex( x => new { x.OrgId, x.UserId } ).IsUnique();


			mb.Entity<FolderPermission>()
				.HasOne( x => x.Team )
				.WithMany( x => x.FolderPermissions )
				.HasForeignKey( x => x.TeamId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<FolderPermission>()
				.HasOne( x => x.User )
				.WithMany( x => x.FolderPermissions )
				.HasForeignKey( x => x.UserId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<FolderPermission>()
				.HasOne( x => x.Folder )
				.WithMany( x => x.Permissions )
				.HasForeignKey( x => x.FolderId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<Preferences>()
				.HasOne( x => x.Org )
				.WithOne( x => x.Preferences )
				.HasForeignKey<Preferences>( x => x.OrgId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<Preferences>()
				.HasOne( x => x.Team )
				.WithOne( x => x.Preferences )
				.HasForeignKey<Preferences>( x => x.TeamId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<Preferences>()
				.HasOne( x => x.User )
				.WithOne( x => x.Preferences )
				.HasForeignKey<Preferences>( x => x.UserId )
				.OnDelete( DeleteBehavior.Cascade );

			
			mb.Entity<Preferences>().HasIndex( x => new { x.OrgId, x.TeamId } ).IsUnique( true );
			mb.Entity<Preferences>().HasIndex( x => new { x.OrgId, x.UserId } ).IsUnique( true );
			mb.Entity<Preferences>().HasIndex( x => x.UserId ).IsUnique( false );
			mb.Entity<Preferences>().HasIndex( x => x.TeamId ).IsUnique( false );
			mb.Entity<Preferences>().HasIndex( x => x.OrgId ).IsUnique( false );
			

			// Dashboards
			mb.Entity<Folder>().HasIndex( x => x.OrgId );
			mb.Entity<Folder>().HasIndex( x => new { x.OrgId, x.Uid } ).IsUnique();
			mb.Entity<Folder>().HasIndex( x => new { x.OrgId, x.Title } ).IsUnique();

			mb.Entity<FolderPermission>().HasIndex( x => x.FolderId );
			mb.Entity<FolderPermission>().HasIndex( x => new { x.FolderId, x.TeamId } ).IsUnique();
			mb.Entity<FolderPermission>().HasIndex( x => new { x.FolderId, x.UserId } ).IsUnique();

			mb.Entity<DashboardPermission>().HasIndex( x => x.DashboardId );
			mb.Entity<DashboardPermission>().HasIndex( x => new { x.DashboardId, x.TeamId } ).IsUnique();
			mb.Entity<DashboardPermission>().HasIndex( x => new { x.DashboardId, x.UserId } ).IsUnique();

			mb.Entity<Dashboard>().HasIndex( x => x.OrgId );
			mb.Entity<Dashboard>().HasIndex( x => new { x.OrgId, x.Uid } ).IsUnique();
			mb.Entity<Dashboard>().HasIndex( x => new { x.OrgId, x.FolderId, x.Title } ).IsUnique();

			mb.Entity<DashboardStar>().HasIndex( x => new { x.UserId, x.DashboardId } ).IsUnique();

			mb.Entity<DashboardVersion>().HasIndex( x => new { x.DashboardId} );
			mb.Entity<DashboardVersion>().HasIndex( x => new { x.DashboardId, x.Version } ).IsUnique();

			mb.Entity<Dashboard>()
				.HasOne( x => x.Folder )
				.WithMany( x => x.Dashboards )
				.HasForeignKey( x => x.FolderId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<DashboardPermission>()
				.HasOne( x => x.Team )
				.WithMany( x => x.DashboardPermissions )
				.HasForeignKey( x => x.TeamId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<DashboardPermission>()
				.HasOne( x => x.User )
				.WithMany( x => x.DashboardPermissions )
				.HasForeignKey( x => x.UserId )
				.OnDelete( DeleteBehavior.Cascade );


			// api keys
			mb.Entity<ApiKey>().HasIndex( x => x.OrgId );
			mb.Entity<ApiKey>().HasIndex( x => x.Key ).IsUnique();
			mb.Entity<ApiKey>().HasIndex( x => new { x.OrgId, x.Name } ).IsUnique();

			// playlists
			mb.Entity<Playlist>().HasIndex( x => new { x.OrgId, x.Name } ).IsUnique();

			// orgs
			mb.Entity<Org>().HasIndex( x => x.Name ).IsUnique();

			// annotations
			mb.Entity<AnnotationTagMember>().HasIndex( 
				x => new { x.AnnotationId, x.AnnotationTagId } ).IsUnique();

			mb.Entity<AnnotationTag>().HasIndex( x => x.Term ).IsUnique();

			mb.Entity<Annotation>().HasIndex(	x => new { x.OrgId, x.AlertId} );
			mb.Entity<Annotation>().HasIndex( x => new { x.OrgId, x.DashboardId, x.PanelId, x.Epoch } );
			mb.Entity<Annotation>().HasIndex( x => new { x.OrgId, x.Epoch } );
			mb.Entity<Annotation>().HasIndex( x => new { x.OrgId, x.Type } );
			mb.Entity<Annotation>().HasIndex( COL_ORG, COL_CREATED );
			mb.Entity<Annotation>().HasIndex( COL_ORG, COL_MODIFIED );

			mb.Entity<Annotation>()
				.HasOne( x => x.User )
				.WithMany( x => x.Annotations )
				.HasForeignKey( x => x.UserId )
				.OnDelete( DeleteBehavior.SetNull );

			mb.Entity<Annotation>()
				.HasOne( x => x.Alert )
				.WithMany( x => x.Annotations )
				.HasForeignKey( x => x.AlertId )
				.OnDelete( DeleteBehavior.Cascade );

			mb.Entity<AlertNotification>().HasIndex( x => new { x.OrgId, x.Uid } ).IsUnique();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mb"></param>
		private void CreateTeamModels(ModelBuilder mb)
		{

		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mb"></param>
		private void AddShadowTime( ModelBuilder mb ) 
		{
			foreach( var et in mb.Model.GetEntityTypes() )
			{
				var attr = et.ClrType.GetCustomAttribute<TimeSupportingEntityAttribute>();

				if( null == attr )
					continue;

				mb.Entity( et.Name ).Property<DateTime>( COL_CREATED );
				mb.Entity( et.Name ).Property<DateTime>( COL_MODIFIED );
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="mb"></param>
		private void AddShadowVersion( ModelBuilder mb )
		{
			foreach( var et in mb.Model.GetEntityTypes() )
			{
				var attr = et.ClrType.GetCustomAttribute<VersionSupportingEntityAttribute>();

				if( null == attr )
					continue;

				mb.Entity( et.Name ).Property<int>( COL_VERSION );
			}
		}
		#endregion

		#region Class 'Save' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int SaveChanges()
		{
			ChangeTracker.DetectChanges();

			UpdateShadowTime();

			UpdateShadowVersion();

			return base.SaveChanges();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="acceptAllChangesOnSuccess"></param>
		/// <param name="cancellationToken"></param>
		/// <returns></returns>
		public override Task<int> SaveChangesAsync( bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default )
		{
			ChangeTracker.DetectChanges();

			UpdateShadowTime();

			UpdateShadowVersion();

			return base.SaveChangesAsync( acceptAllChangesOnSuccess, cancellationToken );
		}
		/// <summary>
		/// 
		/// </summary>
		private void UpdateShadowTime() 
		{
			var time = DateTime.Now;

			var entries = ChangeTracker
				.Entries()
				.Where( e => null != e.Metadata.ClrType.GetCustomAttribute<TimeSupportingEntityAttribute>() )
				.Where( e => e.State == EntityState.Added || e.State == EntityState.Modified )
				.ToList();

			foreach( var e in entries ) 
			{
				e.Property( COL_MODIFIED ).CurrentValue = time;

				if( e.State == EntityState.Added ) 
				{
					e.Property( COL_CREATED ).CurrentValue = time;
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		private void UpdateShadowVersion()
		{
			var entries = ChangeTracker
				.Entries()
				.Where( e => null != e.Metadata.ClrType.GetCustomAttribute<VersionSupportingEntityAttribute>() )
				.Where( e => e.State == EntityState.Added || e.State == EntityState.Modified )
				.ToList();

			foreach( var e in entries )
			{
				if( e.State == EntityState.Added )
				{
					e.Property( COL_VERSION ).CurrentValue = 1;
				}
				else if( e.State == EntityState.Modified ) 
				{
					e.Property( COL_VERSION ).CurrentValue = 1 + ( int )e.Property( COL_VERSION ).CurrentValue;
				}
			}
		}
		#endregion

		#region Class 'Data seeding' methods
		/// <summary>
		/// 
		/// </summary>
		public void EnsureDataSeed() 
		{
			Database.EnsureCreated();

			EnsureMainOrg();

			EnsureAdmin();
		}
		/// <summary>
		/// 
		/// </summary>
		private void EnsureAdmin() 
		{
			var repo = new UserRepository( this );
			var all = repo.All;

			if( !all.HasError && 0 == all.Value.Count )
			{
				var admin = "admin";
				ActiveOrgId = OrgRepository.DEFAULT_ORG_ID;

				var res = repo.Create( new Security.User()
				{
					Login = admin,
					Password = admin,
					Name = admin,
					IsRoot = true,
					Role = Security.Role.Admin,
					Email = "admin@ed.com",
					OrgId = 1
				} );

				if( !res.HasError )
				{
					Logger.Info( "Add default user" );

					new OrgRepository( this )
						.AddMember( 1, admin, Security.Role.Admin );
				}
				else 
				{
					Logger.Error( "Failure to add default user" );
				}
				
			}
		}
		/// <summary>
		/// 
		/// </summary>
		private void EnsureMainOrg()
		{
			var repo = new OrgRepository( this );

			var main = repo [ OrgRepository.DEFAULT_ORG_ID ];

			if( main.HasError && main.Error.Code == ErrorCode.BadGetOrg ) 
			{
				var res = repo.Create( new Security.Org()
				{
					Id = OrgRepository.DEFAULT_ORG_ID,
					Name = OrgRepository.DEFAULT_ORG_NAME
				}, false );

				if( !res.HasError )
				{
					Logger.Info( "Add default org" );
				}
				else
				{
					Logger.Error( "Failure to add default org" );
				}
			}
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class AccessControlList
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public bool CanAdmin { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool CanEdit { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool CanView { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool CanSave => CanEdit; //{ get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <returns></returns>
			public override string ToString()
			{
				var admin = CanAdmin ? "Admin" : string.Empty;
				var edit = CanEdit ? "Edit" : string.Empty;
				var view = CanView ? "View" : string.Empty;

				return $"{admin}|{edit}|{view}";
			}
			#endregion
		}
		#endregion
	}
}


