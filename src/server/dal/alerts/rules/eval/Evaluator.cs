#region Usings
using ED.Time;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Threading.Tasks;
using QueryProvider = System.Func<string, (int, ED.DataSources.IMetricQuery)>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class Evaluator
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Kind Type { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string [] Params { get; set; }
		/// <summary>
		/// 
		/// </summary>
		private double Threshold1 => double.Parse( Params [ 0 ] );
		/// <summary>
		/// 
		/// </summary>
		private double Lower => double.Parse( Params [ 0 ] );
		/// <summary>
		/// 
		/// </summary>
		private double Upper => double.Parse( Params [ 1 ] );

		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return Type switch
			{
				Kind.IsAbove => $"IS ABOVE {Params? [ 0 ]}",
				Kind.IsBelow => $"IS BELOW {Params? [ 0 ]}",
				Kind.IsWithinRange => $"IS WITHIN RANGE {Params? [ 0 ]} to {Params? [ 1 ]}",
				Kind.IsOutsideRange => $"IS OUTSIDE RANGE {Params? [ 0 ]} to {Params? [ 1 ]}",
				_ => "HAS NO VALUE",
			};
		}
		/// <summary>
		/// 
		/// </summary>
		public void Validate()
		{
			bool valid1 =
				( Kind.IsBelow == Type ) &&
				( Params?.Length > 0 ) &&
				( double.TryParse( Params [ 0 ], out _ ) );

			bool valid2 =
				( Kind.IsAbove == Type ) &&
				( Params?.Length > 0 ) &&
				( double.TryParse( Params [ 0 ], out _ ) );

			bool valid3 =
				( Kind.IsOutsideRange == Type ) &&
				( Params?.Length > 1 ) &&
				( double.TryParse( Params [ 0 ], out _ ) ) &&
				( double.TryParse( Params [ 1 ], out _ ) );

			bool valid4 =
				( Kind.IsWithinRange == Type ) &&
				( Params?.Length > 1 ) &&
				( double.TryParse( Params [ 0 ], out _ ) ) &&
				( double.TryParse( Params [ 1 ], out _ ) );

			bool valid5 =
				( Kind.HasNoValue == Type );

			if( !( valid1 || valid2 || valid3 || valid4 || valid5 ) )
				AlertValidationException.ThrowBadEvaluatorBoundaries();
		}
		#endregion

		#region Class 'Eval' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="v"></param>
		public bool Eval( double? v ) 
		{
			if( Type == Kind.HasNoValue )
				return !v.HasValue;

			if( !v.HasValue )
				return false;

			return Type switch
			{
				Kind.IsAbove => v.Value > Threshold1,
				Kind.IsBelow => v.Value < Threshold1,

				Kind.IsWithinRange => ( Lower < v && Upper > v ) || ( Upper < v && Lower > v ),
				Kind.IsOutsideRange => ( Upper < v && Lower < v ) || ( Upper > v && Lower > v ),
				_ => false
			};
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum Kind
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			IsBelow,
			/// <summary>
			/// 
			/// </summary>
			IsAbove,
			/// <summary>
			/// 
			/// </summary>
			IsOutsideRange,
			/// <summary>
			/// 
			/// </summary>
			IsWithinRange,
			/// <summary>
			/// 
			/// </summary>
			HasNoValue
			#endregion
		}
		#endregion
	}
}
