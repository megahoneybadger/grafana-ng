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
			dm.Bag.Created = e
				.Property( DataContext.COL_CREATED )
				.CurrentValue;

			dm.Bag.Updated = e
				.Property( DataContext.COL_MODIFIED )
				.CurrentValue;

			return dm;
		}
		#endregion
	}
}
