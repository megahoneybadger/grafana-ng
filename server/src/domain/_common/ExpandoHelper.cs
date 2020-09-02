#region Usings
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Dynamic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
#endregion

namespace ED
{
	/// <summary>
	/// 
	/// </summary>
	public static class ExpandoHelper
	{
		#region Class 'Expando' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="obj"></param>
		/// <param name="propertyName"></param>
		/// <returns></returns>
		public static bool HasProperty( ExpandoObject obj, string propertyName )
		{
			return ( ( IDictionary<String, object> )obj ).ContainsKey( propertyName );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="m"></param>
		/// <param name="propertyName"></param>
		/// <returns></returns>
		public static bool HasProperty( DomainModel m, string propertyName ) 
		{
			return HasProperty( m.Bag, propertyName );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="m"></param>
		/// <param name="p"></param>
		/// <returns></returns>
		public static T GetProperty<T>( DomainModel m, string p ) 
			where T : new()
		{
			var dict = ( ( IDictionary<String, object> )m.Bag );

			var hasKey = dict.TryGetValue( p, out object res );

			if( !hasKey )
				return default;

			if( res is T )
				return ( T )res;

			try
			{
				return ( T )Convert.ChangeType( res, typeof( T ) );
			}
			catch( InvalidCastException )
			{}

			return default( T ); ;
		}
		#endregion
	}
}
