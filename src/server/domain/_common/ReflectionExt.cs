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
	public static class ReflectExt
	{
		#region Class 'Reflection' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="t"></param>
		/// <returns></returns>
		public static Tuple<Type, T> FindTypeWithCustomAttribute<T>( this Assembly a )
		{
			return FindTypesWithCustomAttribute<T>( a ).FirstOrDefault();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="t"></param>
		/// <returns></returns>
		public static List<Tuple<Type, T>> FindTypesWithCustomAttribute<T>( this Assembly a )
		{
			return ( from t in a.GetTypes()
							 let attributes = t.GetCustomAttributes( typeof( T ), true )
							 where attributes != null && attributes.Length > 0
							 select new Tuple<Type, T>( t, attributes.Cast<T>().FirstOrDefault() ) ).ToList();

		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="t"></param>
		/// <returns></returns>
		public static List<T> FindProperties<T>( this Type t, object obj )
		{
			return t
					.GetProperties()
					.Where( x =>
						x.PropertyType.Equals( typeof( T ) ) ||
						x.PropertyType.IsSubclassOf( typeof( T ) ) )
					.Select( x => ( T )x.GetValue( obj ) )
					.ToList();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="t"></param>
		/// <returns></returns>
		public static IEnumerable<IEnumerable<T>> FindCollections<T>( this Type t, object obj )
		{
			var res = new List<IEnumerable<T>>();

			foreach( var prop in t.GetProperties() )
			{
				// is IEnumerable<T>?
				if( typeof( IEnumerable<T> ).IsAssignableFrom( prop.PropertyType ) )
				{
					var get = prop.GetGetMethod();
					if( !get.IsStatic && get.GetParameters().Length == 0 ) // skip indexed & static
					{
						var collection = ( IEnumerable<T> )get.Invoke( obj, null );
						if( collection != null ) res.Add( collection );
					}
				}
			}

			return res;

			//return  t
			//		.GetProperties()
			//		.Where( x =>
			//			x.PropertyType.IsGenericType &&
			//			( x.PropertyType.GetGenericTypeDefinition() == typeof( List<> ) ||
			//				x.PropertyType.GetGenericTypeDefinition() == typeof( IEnumerable<> ) ) )
			//		.ToList();
		}
		#endregion

		#region Class 'Attribute' methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="TAttribute"></typeparam>
		/// <param name="value"></param>
		/// <returns></returns>
		public static TAttribute GetAttribute<TAttribute>( this Enum value )
				where TAttribute : Attribute
		{
			var enumType = value.GetType();
			var name = Enum.GetName( enumType, value );
			return enumType.GetField( name ).GetCustomAttributes( false ).OfType<TAttribute>().SingleOrDefault();
		}

		#endregion

		#region Class 'String' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="phrase"></param>
		/// <returns></returns>
		public static string GenerateSlug( this string phrase )
		{
			string str = RemoveDiacritics( phrase ).ToLower();
			// invalid chars           
			str = Regex.Replace( str, @"[^a-z0-9\s-]", "" );
			// convert multiple spaces into one space   
			str = Regex.Replace( str, @"\s+", " " ).Trim();
			// cut and trim 
			str = str.Substring( 0, str.Length <= 45 ? str.Length : 45 ).Trim();
			str = Regex.Replace( str, @"\s", "-" ); // hyphens   
			return str;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		private static string RemoveDiacritics( string text )
		{
			var normalizedString = text.Normalize( NormalizationForm.FormD );
			var stringBuilder = new StringBuilder();

			foreach( var c in normalizedString )
			{
				var unicodeCategory = CharUnicodeInfo.GetUnicodeCategory( c );
				if( unicodeCategory != UnicodeCategory.NonSpacingMark )
				{
					stringBuilder.Append( c );
				}
			}

			return stringBuilder.ToString().Normalize( NormalizationForm.FormC );
		}
		#endregion
	}
}
