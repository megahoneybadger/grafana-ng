#region Usings
using ED.DataSources;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public enum Reducer
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		Avg,
		/// <summary>
		/// 
		/// </summary>
		Min,
		/// <summary>
		/// 
		/// </summary>
		Max,
		/// <summary>
		/// 
		/// </summary>
		Sum,
		/// <summary>
		/// 
		/// </summary>
		Count,
		/// <summary>
		/// 
		/// </summary>
		Median,
		/// <summary>
		/// 
		/// </summary>
		Diff,
		/// <summary>
		/// 
		/// </summary>
		PercentDiff,
		/// <summary>
		/// 
		/// </summary>
		CountNotNull,
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class ReducerExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ts"></param>
		/// <returns></returns>
		public static double? Reduce( this Reducer r, TimeSeries ts ) 
		{
			if( null == ts || 0 == ts.Values.Count )
				return null;

			var index = ts.Columns.Count - 1;
			
			var list = ts
				.Values
				.Select( x => ToDouble( x [ index ] ) )
				.Where( x => null != x )
				.OfType<double>()
				.ToList();

			var allNull = ( 0 == list.Count );

			if( allNull )
				return null;

			double? value = r switch
			{
				Reducer.Min => list.Min(),
				Reducer.Max => list.Max(),
				Reducer.Count => ts.Values.Count,
				Reducer.CountNotNull => list.Count,
				Reducer.Sum => list.Sum(),

				Reducer.Median => list.Median(),
				_ => list.Average()
			};

			return value;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="list"></param>
		/// <returns></returns>
		public static double Median( this IEnumerable<double> list ) 
		{
			var sortedPNumbers = list.ToArray();
			Array.Sort( sortedPNumbers );

			//get the median
			int size = sortedPNumbers.Length;
			int mid = size / 2;

			double median = ( size % 2 != 0 ) ? 
				sortedPNumbers [ mid ] : ( sortedPNumbers [ mid ] + sortedPNumbers [ mid - 1 ] ) / 2;

			return median;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="newest"></param>
		/// <param name="oldest"></param>
		/// <returns></returns>
		public static double Diff( double newest, double oldest ) 
			=> newest - oldest;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="newest"></param>
		/// <param name="oldest"></param>
		/// <returns></returns>
		public static double PercentDiff( double newest, double oldest ) 
			=> ( newest - oldest ) / oldest * 100;
		///// <summary>
		///// 
		///// </summary>
		///// <param name="series"></param>
		///// <param name="fn"></param>
		///// <returns></returns>
		//public static double CalculateDiff( List<double> list, Func<double, double, double> fn )
		//{
		//	var list.LastOrDefault();

		//}
		#endregion

		#region Class utility methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="expression"></param>
		/// <returns></returns>
		private static bool IsNumeric( object expression )
		{
			if( expression == null )
				return false;

			return Double.TryParse( Convert.ToString( expression, CultureInfo.InvariantCulture ),
				NumberStyles.Any, NumberFormatInfo.InvariantInfo, out _ );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="expression"></param>
		/// <returns></returns>
		private static  double? ToDouble( object expression )
		{
			if( expression == null )
				return null;

			var res = Double.TryParse( Convert.ToString( expression, CultureInfo.InvariantCulture ),
				NumberStyles.Any, NumberFormatInfo.InvariantInfo, out double number );

			return res ? number : null;
		}
		#endregion
	}


}
