#region Usings
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Dynamic;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Class, Inherited = true, AllowMultiple = false )]
	public class TimeSupportingEntityAttribute : Attribute
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public TimeSupportingEntityAttribute()
		{
			
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class TimeSupportingEntityExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="entity"></param>
		public static T AddTime<T>( this T dm, EntityEntry e ) where T : DomainModel
		{
			var created = ( DateTime )e
				.Property( DataContext.COL_CREATED )
				.CurrentValue;

			var updated = ( DateTime )e
				.Property( DataContext.COL_MODIFIED )
				.CurrentValue;

			dm.Bag.Created = DateTime
				.SpecifyKind( created, DateTimeKind.Local )
				.ToUniversalTime();

			dm.Bag.Updated = DateTime
				.SpecifyKind( updated, DateTimeKind.Local )
				.ToUniversalTime(); ;

			return dm;
		}
		#endregion
	}
}
