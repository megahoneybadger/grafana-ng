#region Usings
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Linq;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public interface IOrgSupportingEntity
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		int OrgId { get; set; }		
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class OrgSupportingEntityExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static IQueryable<T> ForActiveOrg<T>( this DbSet<T> e )
			where T : class, IOrgSupportingEntity
		{
			var dc = e.GetContext();

			return e.Where( x => x.OrgId == dc.ActiveOrgId );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static DataContext WithActiveOrg( this DataContext dc, int orgId )
		{
			dc.ActiveOrgId = orgId;

			return dc;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static DataContext WithActiveOrg( this DataContext dc, Org o )
		{
			return WithActiveOrg( dc, o.Id );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static T ForActiveOrg<T>( this T r, int orgId )
			where T: Repository
		{
			r.DataContext.ActiveOrgId = orgId;

			return r;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static T ForActiveOrg<T>( this T r, OrgSupportingDomainModel m )
			where T : Repository
		{
			r.DataContext.ActiveOrgId = m.OrgId;

			return r;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="e"></param>
		public static T ForActiveOrg<T>( this T r, Org o )
			where T : Repository
		{
			return ForActiveOrg<T>( r, o.Id );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="dbSet"></param>
		/// <returns></returns>
		public static DataContext GetContext<T>( this DbSet<T> dbSet ) where T : class
		{
			var infrastructure = dbSet as IInfrastructure<IServiceProvider>;
			var serviceProvider = infrastructure.Instance;
			var currentDbContext = serviceProvider.GetService( typeof( ICurrentDbContext ) )
																 as ICurrentDbContext;

			return currentDbContext.Context as DataContext;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="entity"></param>
		public static T IncludeActiveOrgId<T>( this T e, DataContext dc ) 
			where  T: IOrgSupportingEntity
		{
			e.OrgId = dc.ActiveOrgId;

			return e;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="entity"></param>
		public static T UpdateId<T>( this T e, OrgSupportingDomainModel model )
			where T : IOrgSupportingEntity
		{
			model.OrgId = e.OrgId;
			model.Id = e.Id;

			return e;
		}
		#endregion
	}
}
