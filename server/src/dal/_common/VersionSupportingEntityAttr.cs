#region Usings
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage( AttributeTargets.Class, Inherited = true, AllowMultiple = false )]
	public class VersionSupportingEntityAttribute : Attribute
	{
		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public VersionSupportingEntityAttribute()
		{

		}
		#endregion
	}

	public static class VersionSupportingEntityExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dc"></param>
		/// <param name="entity"></param>
		public static T AddVersion<T>( this T dm, EntityEntry e ) where T : DomainModel
		{
			dm.Bag.Version = e
				.Property( DataContext.COL_VERSION )
				.CurrentValue;

			return dm;
		}
		#endregion
	}
}
