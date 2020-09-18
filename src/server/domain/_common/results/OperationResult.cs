#region Usings
using System;
using System.Text.Json.Serialization;
#endregion

namespace ED
{
	public class OperationResult<T> 
	{
		#region Class propertes
		/// <summary>
		/// 
		/// </summary>
		public T Value { get; private set; }
		/// <summary>
		/// 
		/// </summary>
		public Error Error { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool HasError
		{
			get
			{
				return ( null != Error );
			}
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return ( HasError ) ? Error.ToString() : Value.ToString();
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		public static OperationResult<T> Create( T r )
		{
			return new OperationResult<T>()
			{
				Value = r
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		public static OperationResult<T> Create( ErrorCode code, Exception e = null )
		{
			return new OperationResult<T>()
			{
				Error = new Error()
				{
					Code = code,
					Details = ( null != e ) ? e.Message : null
				}
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="r"></param>
		/// <returns></returns>
		public static OperationResult<T> Create( Func<bool> f, T r, ErrorCode code, Exception e = null )
		{
			return f() ? Create( r ) : Create( code, e );
		}
		#endregion
	}
}
