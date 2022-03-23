#region Usings
using ED.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using ModelOrg = ED.Security.Org;
using ModelPlaylist = ED.Playlists.Playlist;
using ModelTeamPreferences = ED.Security.TeamPreferences;
using ModelUser = ED.Security.User;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// dotnet test tests\ed.tests.dll -v n --filter "FullyQualifiedName~Playlists"
	/// </summary>
	public class Playlists : BaseTest
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private PlaylistRepository _repo;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Playlists()
		{
			_repo = GetRepo<PlaylistRepository>( true );

			CreateDataContext().AddOrgs();
		}
		#endregion

		#region Class 'Create' tests
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreatePlaylist()
		{
			var model = TestFactory.Create<ModelPlaylist>();

			var res = await _repo.Create( model );
			Assert.NotNull( res );
			model = res;

			var list = await _repo.GetPlaylists();

			Assert.NotEmpty( list );
			Assert.Single( list );

			Assert.True( list [ 0 ].Equals( model ) );
		}
		/// <summary>
		/// 
		/// </summary>
		[Fact]
		public async Task Should_CreatePlaylists()
		{
			var models = await CreateDataContext().AddPlaylistsForDefaultOrg( 5 );

			var list = await _repo.GetPlaylists();

			Assert.NotEmpty( list );
			Assert.Equal( list.Count, models.Count );

			for( int i = 0; i < models.Count; ++i )
			{
				Assert.True( models [ i ].Equals( list [ i ] ) );
			}
		}

		#endregion
	}
}
