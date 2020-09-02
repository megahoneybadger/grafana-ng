#region Usings
using System.Collections.Generic;
using System.Linq;
using System.Text;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	public class FieldList : List<Field> 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string Build() 
		{
			if( 0 == Count )
				return string.Empty;

			var res = new StringBuilder();

			foreach( var f in this )
			{
				if( 0 != res.Length )
				{
					res.Append( ", " );
				}

				res.Append( f.ToString() );
			}

			return res.ToString();
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public class Field
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public FuncObject [] Functions { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var result = string.Empty;
			var key = ( string.IsNullOrEmpty( Key ) ) ? "field" : Key;

			var aggr = Functions.FirstOrDefault( x =>
				x.Name.GetGroup() == AggrFuncGroup.Aggregations ||
				x.Name.GetGroup() == AggrFuncGroup.Selectors );

			if( null != aggr )
			{
				result += aggr.Name.ToString().ToLower() + ( ( null != aggr.Param?.Value ) ?
				$"(\"{key}\", {aggr.Param.Value})" : $"( \"{key}\" )" );
			}
			else
			{
				result = $"\"{key}\"";
			}

			var trans = Functions
				.Where( x => x.Name.GetGroup() == AggrFuncGroup.Transformations )
				.ToList();

			trans.ForEach( x =>
			{
				var p = ( null != x.Param?.Value ) ? $", {x.Param.Value}" : "";
				result = $"{x.Name.ToString().ToLower()} ({result}{p})";
			} );

			var math = Functions.FirstOrDefault( x =>
				x.Name.GetGroup() == AggrFuncGroup.Math );

			if( null != math )
			{
				result = $"{result} {math.Param.Value}";
			}

			var alias = Functions.FirstOrDefault( x =>
				x.Name.GetGroup() == AggrFuncGroup.Alias );

			if( null != alias )
			{
				result = $"{result}	AS {alias.Param.Value}";
			}

			return result;
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class FuncObject
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public AggrFunc Name { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public FuncParam Param { get; set; }
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class FuncParam
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public object Value { get; set; }
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public enum AggrFuncGroup
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Aggregations,
			/// <summary>
			/// 
			/// </summary>
			Selectors,
			/// <summary>
			/// 
			/// </summary>
			Transformations,
			/// <summary>
			/// 
			/// </summary>
			Predictors,
			/// <summary>
			/// 
			/// </summary>
			Math,
			/// <summary>
			/// 
			/// </summary>
			Alias
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public enum AggrFunc
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Count,
			/// <summary>
			/// 
			/// </summary>
			Distinct,
			/// <summary>
			/// 
			/// </summary>
			Integral,
			/// <summary>
			/// 
			/// </summary>
			Mean,
			/// <summary>
			/// 
			/// </summary>
			Median,
			/// <summary>
			/// 
			/// </summary>
			Mode,
			/// <summary>
			/// 
			/// </summary>
			Sum,

			/// <summary>
			/// 
			/// </summary>
			Bottom,
			/// <summary>
			/// 
			/// </summary>
			First,
			/// <summary>
			/// 
			/// </summary>
			Last,
			/// <summary>
			/// 
			/// </summary>
			Max,
			/// <summary>
			/// 
			/// </summary>
			Min,
			/// <summary>
			/// 
			/// </summary>
			Percentile,
			/// <summary>
			/// 
			/// </summary>
			Top,

			/// <summary>
			/// 
			/// </summary>
			Derivative,
			/// <summary>
			/// 
			/// </summary>
			Spread,
			/// <summary>
			/// 
			/// </summary>
			Non_Negative_Derivative,
			/// <summary>
			/// 
			/// </summary>
			Difference,
			/// <summary>
			/// 
			/// </summary>
			Non_Negative_Difference,
			/// <summary>
			/// 
			/// </summary>
			Moving_Average,
			/// <summary>
			/// 
			/// </summary>
			Cumulative_Sum,
			/// <summary>
			/// 
			/// </summary>
			Stddev,
			/// <summary>
			/// 
			/// </summary>
			Elapsed,

			/// <summary>
			/// 
			/// </summary>
			Holt_Winters,
			/// <summary>
			/// 
			/// </summary>
			Holt_Winters_With_Fit,

			/// <summary>
			/// 
			/// </summary>
			Math,
			/// <summary>
			/// 
			/// </summary>
			Alias,
			#endregion
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public static class AggrFuncExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="f"></param>
		/// <returns></returns>
		public static Field.AggrFuncGroup GetGroup( this Field.AggrFunc f )
		{
			switch( f )
			{
				case Field.AggrFunc.Count:
				case Field.AggrFunc.Distinct:
				case Field.AggrFunc.Integral:
				case Field.AggrFunc.Mean:
				case Field.AggrFunc.Median:
				case Field.AggrFunc.Mode:
				case Field.AggrFunc.Sum:
					return Field.AggrFuncGroup.Aggregations;

				case Field.AggrFunc.Bottom:
				case Field.AggrFunc.First:
				case Field.AggrFunc.Last:
				case Field.AggrFunc.Max:
				case Field.AggrFunc.Min:
				case Field.AggrFunc.Percentile:
				case Field.AggrFunc.Top:
					return Field.AggrFuncGroup.Selectors;

				case Field.AggrFunc.Derivative:
				case Field.AggrFunc.Spread:
				case Field.AggrFunc.Non_Negative_Derivative:
				case Field.AggrFunc.Difference:
				case Field.AggrFunc.Non_Negative_Difference:
				case Field.AggrFunc.Moving_Average:
				case Field.AggrFunc.Cumulative_Sum:
				case Field.AggrFunc.Stddev:
				case Field.AggrFunc.Elapsed:
					return Field.AggrFuncGroup.Transformations;

				case Field.AggrFunc.Holt_Winters:
				case Field.AggrFunc.Holt_Winters_With_Fit:
					return Field.AggrFuncGroup.Predictors;

				case Field.AggrFunc.Math:
					return Field.AggrFuncGroup.Math;

				default:
					return Field.AggrFuncGroup.Alias;
			}
		}
		#endregion
	}
}
