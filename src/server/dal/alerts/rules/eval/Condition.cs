#region Usings
using ED.DataSources;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModelDataSource = ED.DataSources.DataSource;
using QueryProvider = System.Func<string, (int, ED.DataSources.IMetricQuery)>;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class Condition
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public Operator Operator { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Reducer Reducer { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Query Query { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Evaluator Evaluator { get; set; }
		/// <summary>
		/// 
		/// </summary>
		internal int Index { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Operator.ToString().ToUpper()} {Reducer.ToString().ToLower()}() {Query} {Evaluator}";
		}
		/// <summary>
		/// 
		/// </summary>
		public void Validate( QueryProvider qp )
		{
			if( null == Query )
				AlertValidationException.ThrowBadQuery();

			if( null == Evaluator )
				AlertValidationException.ThrowBadEvaluator();

			Query.Validate( qp );
			Evaluator.Validate();
		}
		#endregion

		#region Class 'Eval' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public async Task<Result> Eval( EvaluationContext context )
		{
			var dataSource = await context.GetDataSource( Query.DataSourceId );

			var request = ToRequest( context, dataSource );

			var res = await dataSource.Query( request );

			if( res.HasError )
				throw new Exception( res.Error.Details );

			var seriesList = res
				.Value
				.SelectMany( x => x.Split() )
				.ToList();

			return Eval( context, seriesList );
		}
		/// <summary>
		/// 
		/// </summary>
		private DataSourceQueryRequest ToRequest( EvaluationContext context, ModelDataSource ds )
		{
			var jObject = JObject.Parse( Query.Body );
			var m = ds.ToMetric( jObject );

			var r = new DataSourceQueryRequest()
			{
				Id = ds.Id,
				From = Query.Range.From,
				To = Query.Range.To,
				Queries = new JToken [] { jObject }
			};

			var (From, To) = Query.Range.AsEpoch;
			var text = m.ToString( Query.Range );

			context.Log( $"Condition [{Index}]: Query", new
			{
				From,
				To,
				Query = new
				{
					DataSource = new
					{
						ds.Id,
						ds.Name
					},
					//RefId = Query.Target,
					Model = m,
					Text = string.IsNullOrEmpty( text ) ? null : text
				}
			} );

			
			return r;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="seriesList"></param>
		private Result Eval( EvaluationContext context, TimeSeriesList seriesList ) 
		{
			context.Log( $"Condition [{Index}]: Query Result", seriesList );

			var b = EvalBlock.Create( context );

			seriesList.ForEach( s => Eval( b, s ) );

			if( 0 == seriesList.Count )
			{
				EvalEmpty( b );
			}

			return new Result()
			{
				Firing = b.EvalMatchCount > 0,
				NoDataFound = ( b.EmptySerieCount == seriesList.Count ),
				Operator = Operator,
				Matches = b.Matches
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <param name="series"></param>
		private void Eval( EvalBlock b, TimeSeries series ) 
		{
			var reducedValue = Reducer.Reduce( series );
			var evalMatch = Evaluator.Eval( reducedValue );

			if( !reducedValue.HasValue )
			{
				b.EmptySerieCount++;
			}

			if( b.Context.IsTestRun )
			{
				b.Context.Log( $"Condition [{Index}], Eval: {evalMatch}, Metric: {series.Name}, Value: {reducedValue}" );
			}

			if( evalMatch )
			{
				b.Matches.Add( new EvalMatch( series.Name, reducedValue, series.Tags ) );
				b.EvalMatchCount++;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		private void EvalEmpty( EvalBlock b ) 
		{
			var evalMatch = Evaluator.Eval( null );

			if( b.Context.IsTestRun )
			{
				b.Context.Log( $"Condition: Eval: {evalMatch}, Query Returned No Series( reduced to null / no value )" );
			}

			if( evalMatch )
			{
				b.EvalMatchCount++;
				b.Matches.Add( new EvalMatch( "NoData", null ) );
			}
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public class Result 
		{
			#region Class internal structs
			/// <summary>
			/// 
			/// </summary>
			public bool Firing { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public bool NoDataFound { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public Operator Operator { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public List<EvalMatch> Matches { get; set; } = new List<EvalMatch>();
			#endregion
		}
		/// <summary>
		/// 
		/// </summary>
		public class EvalBlock
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			public int EmptySerieCount { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public int EvalMatchCount { get; set; }
			/// <summary>
			/// 
			/// </summary>
			public List<EvalMatch> Matches { get; set; } = new List<EvalMatch>();
			/// <summary>
			/// 
			/// </summary>
			public EvaluationContext Context { get; set; }
			#endregion

			#region Class public methods
			/// <summary>
			/// 
			/// </summary>
			/// <param name="context"></param>
			/// <returns></returns>
			public static EvalBlock Create( EvaluationContext context )
			{
				return new EvalBlock()
				{
					Context = context
				};
			}
			#endregion
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public enum Operator
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		And,
		/// <summary>
		/// 
		/// </summary>
		Or
		#endregion
	}
}
