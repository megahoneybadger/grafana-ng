#region Usings
using ED.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using ModelTeam = ED.Security.Team;
using ModelUser = ED.Security.User;
#endregion

namespace ED.Tests
{
	/// <summary>
	/// 
	/// </summary>
	public class BaseTest : IDisposable
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		protected const string DB_NAME = "test_ed";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string DatabaseName => $"Data Source={DB_NAME}_{GetType().Name}";
		/// <summary>
		/// 
		/// </summary>
		public DbContextOptions<DataContext> Options =>
			new DbContextOptionsBuilder<DataContext>()
				.UseSqlite( DatabaseName )
				.Options;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		static BaseTest() 
		{
			ED.Logger.InitializeForTests();
		}
		/// <summary>
		/// 
		/// </summary>
		public BaseTest()
		{
			
		}
		/// <summary>
		/// 
		/// </summary>
		public void Dispose()
		{
			new DataContext( Options ).Database.EnsureDeleted();
		}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected DataContext CreateEmptyDataContext( bool ensureDeleted = false )
		{
			return CreateDataContext( true );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		protected DataContext CreateDataContext( bool ensureDeleted = false ) 
		{
			var dc = new DataContext( Options );

			if( ensureDeleted )
			{
				dc.Database.EnsureDeleted();
			}

			dc.Database.EnsureCreated();

			dc.ActiveOrgId = 1;

			return dc;
		}
		
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="ensureDeleted"></param>
		/// <returns></returns>
		protected T GetRepo<T>( bool ensureDeleted = false ) where T : Repository
		{
			var dc = CreateDataContext( ensureDeleted );

			return ( T )Activator.CreateInstance( typeof( T ), new object [] { dc } );
		}
		#endregion
	}
}
