#region Usings
using ED.Dashboards;
using ED.DataSources.InfluxDb;
using ED.Playlists;
using ED.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

using FolderPermissions = System.Collections.Generic.List<ED.Dashboards.FolderPermission>;
using Users = System.Collections.Generic.List<ED.Security.User>;
using Teams = System.Collections.Generic.List<ED.Security.Team>;
using ED.Alerts;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public static class TestFactory
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private static Random _random = new Random();
		#endregion

		#region Class 'Create' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <returns></returns>
		public static T Create<T>() where T : class, new()
		{
			var value = new T();

			switch( value )
			{
				case InfluxDataSource ds:
					Update( ds );
					break;

				case Team t:
					Update( t );
					break;

				case User u:
					Update( u );
					break;

				case Org o:
					Update( o );
					break;

				case Folder f:
					Update( f );
					break;

				case Dashboard d:
					Update( d );
					break;

				case Annotation ann:
					Update( ann );
					break;

				case Playlist p:
					Update( p );
					break;

				case Alert al:
					Update( al );
					break;
			}

			return value;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <returns></returns>
		public static List<T> Create<T>( int count ) where T : class, new()
		{
			return Enumerable
				.Range( 0, count )
				.Select( x => Create<T>() )
				.ToList();
		}
		#endregion

		#region Class 'Permissions'
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static FolderPermission CreateFolderPermission( string uid, User u )
		{
			return new FolderPermission()
			{
				Folder = new Folder()
				{
					Uid = uid
				},

				User = u,

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static FolderPermission CreateFolderPermission( string uid, Team t )
		{
			return new FolderPermission()
			{
				Folder = new Folder()
				{
					Uid = uid
				},

				Team = t,

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static FolderPermission CreateFolderPermission( string uid )
		{
			return new FolderPermission()
			{
				Folder = new Folder()
				{
					Uid = uid
				},

				Role = GetRandomEnumValue<Role>(),

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static FolderPermissions CreateFolderPermissions( string uid, Users users, Teams teams )
		{
			var perms = new List<Dashboards.FolderPermission>();

			TestFactory
				.SelectRandomObjects<User>( users, 2 )
				.ForEach( c => perms.Add( TestFactory.CreateFolderPermission( uid, c ) ) );

			TestFactory
				.SelectRandomObjects<Team>( teams, 2 )
				.ForEach( c => perms.Add( TestFactory.CreateFolderPermission( uid, c ) ) );

			perms.Add( TestFactory.CreateFolderPermission( uid ) );

			return perms;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static DashboardPermission CreateDashboardPermission( string uid, User u )
		{
			return new DashboardPermission()
			{
				Dashboard = new Dashboard()
				{
					Uid = uid
				},

				User = u,

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static DashboardPermission CreateDashboardPermission( string uid, Team t )
		{
			return new DashboardPermission()
			{
				Dashboard = new Dashboard()
				{
					Uid = uid
				},

				Team = t,

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="u"></param>
		public static DashboardPermission CreateDashboardPermission( string uid )
		{
			return new DashboardPermission()
			{
				Dashboard = new Dashboard()
				{
					Uid = uid
				},

				Role = GetRandomEnumValue<Role>(),

				Permission = GetRandomEnumValue<Security.Permission>()
			};
		}
		#endregion

		#region Class 'Update' methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( InfluxDataSource m )
		{
			//Id = 1,
			//m.OrgId = /*GetRandomUShort( 10 )*/1;
			m.IsDefault = GetRandomBoolean();
			m.Name = GetRandomNoun();
			//Type = DataSources.DataSourceType.InfluxDB,
			m.Url = GetRandomString( 30 );

			m.BasicAuthentication = GetRandomBoolean();
			m.WithCredentials = GetRandomBoolean();
			m.TlsClientAuth = GetRandomBoolean();
			m.WithCaCert = GetRandomBoolean();
			m.SkipTlsVerification = GetRandomBoolean();
			m.Database = GetRandomString( 20 );
			m.User = GetRandomString( 10 );
			m.Password = GetRandomString( 10 );
			m.AccessMethod = InfluxDataSource.AccessType.Server;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Team t )
		{
			//Id = do not change,
			//t.OrgId = GetRandomUShort( 10 );
			t.Name = GetRandomNoun();
			t.Email = $"{t.Name }@gmail.com";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( User u )
		{
			//Id = do not change,
			//u.OrgId = GetRandomUShort( 10 );
			u.Login = GetRandomNoun();
			u.Name = GetRandomString( 10 );
			u.Email = GetRandomEmail();
			u.Password = $"raw_passwd_{GetRandomString( 30 )}";
			u.LastSeenAt = GetRandomDay();
			//u.Role = GetRandomEnumValue<Role>();
			u.Role = Role.Admin; // !?
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Folder f, bool changeUid = true )
		{
			f.Title = GetRandomNoun();

			if( changeUid )
			{
				f.Uid = GetUid();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Org o )
		{
			o.Name = GetRandomNoun();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Dashboard d, bool changeUid = true )
		{
			d.Title = GetRandomNoun();

			if( changeUid )
			{
				d.Uid = GetUid();
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Preferences p )
		{
			p.Theme = TestFactory.GetRandomEnumValue<Theme>();
			p.TimeZone = TestFactory.GetRandomEnumValue<ED.Security.TimeZone>();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Playlist p )
		{
			p.Name = GetRandomNoun();
			p.Interval = $"{GetRandomUShort( 30 )}s";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Annotation ann, Dashboard d = null, User u = null )
		{
			ann.Title = GetRandomNoun();
			ann.Text = GetRandomString( 15 );
			ann.PanelId = GetRandomUShort( 3 );

			ann.DashboardId = d?.Id ?? 0;
			ann.UserId = u?.Id ?? 0;
			ann.OrgId = d?.OrgId ?? 1;

			ann.Time = ( ( DateTimeOffset )DateTime
				.Today
				.AddSeconds( GetRandomUShort( 50000 ) ) )
				.ToUnixTimeMilliseconds();

			ann.Tags = GetRandomTags( 2 );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Annotation ann, User u )
		{
			ann.UserId = u.Id;
			ann.Text = GetRandomString( 15 );

			ann.Time = ( ( DateTimeOffset )DateTime
				.Today
				.AddSeconds( GetRandomUShort( 50000 ) ) )
				.ToUnixTimeSeconds();

			ann.TimeEnd = 0;

			ann.Tags = GetRandomTags( 2 )
				.OrderBy( x => x )
				.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static void Update( Alert a )
		{
			a.Name = GetRandomNoun( true );
			a.State = GetRandomEnumValue<AlertState>();
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="length"></param>
		/// <returns></returns>
		public static string GetRandomString( int length )
		{
			const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			return new string( Enumerable.Repeat( chars, length )
				.Select( s => s [ _random.Next( s.Length ) ] ).ToArray() );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="length"></param>
		/// <returns></returns>
		public static string GetRandomEmail()
		{
			return $"{GetRandomNoun()}@gmail.com";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="max"></param>
		/// <returns></returns>
		public static int GetRandomUShort( ushort max )
		{
			return _random.Next( 0, max );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static bool GetRandomBoolean()
		{
			return _random.Next( 0, 10 ) > 5;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static DateTime GetRandomDay()
		{
			var start = new DateTime( 1995, 1, 1 );
			int range = ( DateTime.Today - start ).Days;
			return start.AddDays( _random.Next( range ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <returns></returns>
		public static T GetRandomEnumValue<T>()
		{
			var v = Enum.GetValues( typeof( T ) );
			return ( T )v.GetValue( new Random().Next( v.Length ) );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="size"></param>
		/// <returns></returns>
		public static string GetUid( int size = 10 )
		{
			char [] chars =
					"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();

			byte [] data = new byte [ size ];
			var result = new StringBuilder( size );

			using( var crypto = new RNGCryptoServiceProvider() )
			{
				crypto.GetBytes( data );
			}

			foreach( byte b in data )
			{
				result.Append( chars [ b % ( chars.Length ) ] );
			}

			return result.ToString();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string [] GetNouns()
		{
			return new string []
			{
				"haircut"
			, "truck"
			, "history"
			, "side"
			, "horse"
			, "trucks"
			, "cable"
			, "country"
			, "steam"
			, "nut"
			, "wave"
			, "verse"
			, "babies"
			, "plate"
			, "plastic"
			, "scarecrow"
			, "quicksand"
			, "rain"
			, "appliance"
			, "burst"
			, "thunder"
			, "grandfather"
			, "balance"
			, "key"
			, "match"
			, "adjustment"
			, "wire"
			, "skin"
			, "ring"
			, "cow"
			, "orange"
			, "tin"
			, "ice"
			, "grandmother"
			, "cup"
			, "duck"
			, "sticks"
			, "trousers"
			, "silk"
			, "furniture"
			, "cars"
			, "question"
			, "downtown"
			, "car"
			, "direction"
			, "time"
			, "boy"
			, "laugh"
			, "tub"
			, "addition"
			, "mist"
			, "daughter"
			, "slave"
			, "sack"
			, "chin"
			, "crook"
			, "box"
			, "spy"
			, "song"
			, "ship"
			, "vegetable"
			, "cemetery"
			, "oranges"
			, "hobbies"
			, "quiet"
			, "string"
			, "scene"
			, "cart"
			, "chickens"
			, "calendar"
			, "pets"
			, "smash"
			, "card"
			, "soup"
			, "tree"
			, "exchange"
			, "money"
			, "planes"
			, "fog"
			, "change"
			, "distribution"
			, "head"
			, "blade"
			, "bee"
			, "pie"
			, "blood"
			, "marble"
			, "houses"
			, "wing"
			, "crate"
			, "gate"
			, "day"
			, "twig"
			, "feeling"
			, "representative"
			, "zebra"
			, "ball"
			, "field"
			, "lock"
			, "frame"
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string [] GetTags()
		{
			return new string []
			{
				"shade",
				"kittens",
				"camera",
				"art",
				"scale",
				"hammer",
				"flame",
				"cover",
				"base",
				"screw",
				"sleep",
				"birthday",
				"mitten",
				"position",
				"line",
				"icicle",
				"afternoon",
				"soda",
				"trees",
				"bottle",
				"rod",
				"watch",
				"curtain",
				"beginner",
				"calculator",
				"stretch",
				"advice",
				"corn",
				"voice",
				"iron"
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string [] GetCompanies()
		{
			return new string []
			{
				"Microsoft",
				"Google",
				"Facebook",
				"Uber",
				"IBM",
				"LinkedIn"
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IEnumerable<string> GetRandomTags( int count = 0 )
		{
			count = ( 0 == count ) ? _random.Next( 0, 5 ) : count;
			var tags = GetTags();
			var list = new List<string>();

			for( int i = 0; i < count; ++i )
			{
				while( true )
				{
					var index = _random.Next( 0, tags.Count() );
					var n = tags [ index ];

					if( !list.Contains( n ) )
					{
						list.Add( n );
						break;
					}
				}
			}

			return list;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static IEnumerable<string> GetRandomCompanyNames( int count = 0 )
		{
			return SelectRandomObjects<string>( GetCompanies(), count );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetRandomNoun( bool addPrefix = true )
		{
			var arr = GetNouns();

			var n = arr [ _random.Next( 0, arr.Count() ) ];

			return addPrefix ? $"{n}-{GetRandomString( 3 )}" : n;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public static string GetEmptyDashboardContent()
		{
			return @"{
				""panels"": [],
				""time"": {
					""from"": ""now/d"",
					""to"": ""now/d"",
					""rate"": """"
				}
			}";
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="list"></param>
		/// <param name="count"></param>
		/// <returns></returns>
		public static List<T> SelectRandomObjects<T>( IList<T> list, int count = 0 )
		{
			count = ( 0 == count ) ? GetRandomUShort( 5 ) : count;

			if( count > list.Count )
				return list.ToList();

			var res = new List<T>();

			while( count > 0 )
			{
				while( true )
				{
					int index = GetRandomUShort( ( ushort )list.Count() );
					var cand = list [ index ];

					if( !res.Contains( cand ) )
					{
						res.Add( cand );
						break;
					}
				}

				--count;

				if( res.Count() == list.Count() )
					break;
			}

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="list"></param>
		/// <param name="count"></param>
		/// <returns></returns>
		public static T SelectRandomObject<T>( IList<T> list )
		{
			return SelectRandomObjects<T>( list, 1 ).FirstOrDefault();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="list"></param>
		/// <param name="count"></param>
		/// <returns></returns>
		public static T SelectRandomObject<T>( IList<T> list, Func<T, bool> pred )
			where T : class
		{
			var count = 0;

			while( count < list.Count )
			{
				var obj = SelectRandomObject( list );

				if( pred.Invoke( obj ) )
					return obj;

				++count;
			}

			return null;
		}
		#endregion
	}
}
