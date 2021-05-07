#region Usings
using System;
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// Validation class which throws Argument exceptions if checks fail.
	/// </summary>
	public static class Validate
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="value"></param>
		/// <param name="paramName"></param>
		public static void IsNotNull<T>( T value, string paramName ) where T : class
		{
			if( value == null )
				throw new ArgumentNullException( paramName );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="value"></param>
		/// <param name="paramName"></param>
		/// <param name="message"></param>
		public static void IsNotNull<T>( T value, string paramName, string message ) where T : class
		{
			if( value == null )
				throw new ArgumentNullException( paramName, message );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <param name="message"></param>
		public static void IsFalse( bool value, string message )
		{
			if( value )
				throw new ArgumentException( message );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <param name="message"></param>
		public static void IsTrue( bool value, string message )
		{
			if( !value )
				throw new ArgumentException( message );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="value"></param>
		/// <param name="paramName"></param>
		public static void IsNotNullOrEmpty( string value, string paramName )
		{
			if( String.IsNullOrEmpty( value ) )
				throw new ArgumentException( paramName );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="array"></param>
		/// <param name="paramName"></param>
		public static void IsNotZeroLength<T>( T [] array, string paramName )
		{
			if( array.Length == 0 )
				throw new ArgumentOutOfRangeException( paramName );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="array"></param>
		/// <param name="paramName"></param>
		/// <param name="message"></param>
		public static void IsNotZeroLength<T>( T [] array, string paramName, string message )
		{
			if( array.Length == 0 )
				throw new ArgumentOutOfRangeException( paramName, message );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="list"></param>
		/// <param name="paramName"></param>
		public static void IsNotZeroLength<T>( List<T> list, string paramName )
		{
			if( list.Count == 0 )
				throw new ArgumentOutOfRangeException( paramName );
		}
		#endregion
	}
}