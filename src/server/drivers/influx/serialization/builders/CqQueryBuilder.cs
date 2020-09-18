#region Usings
using System;
using System.Collections.Generic;
#endregion

namespace ED.Drivers.Influx
{
	/// <summary>
	/// CqQueryBuilder for the latest supported version. All other CqQueryBuilders are supposed to inherit this class.
	/// </summary>
	internal class CqQueryBuilder : ICqQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="cqParams"></param>
		/// <returns></returns>
		public virtual string CreateContinuousQuery( CqParams cqParams )
		{
			var downsamplers = cqParams.Downsamplers.ToCommaSpaceSeparatedString();
			var tags = BuildTags( cqParams.Tags );
			var fillType = BuildFillType( cqParams.FillType );
			var resample = BuildResample( cqParams.Resample );

			var subQuery = String.Format( QueryStatements.CreateContinuousQuerySubQuery,
					downsamplers, cqParams.DsSerieName, cqParams.SourceSerieName, cqParams.Interval, tags, fillType );

			var query = String.Format( QueryStatements.CreateContinuousQuery, cqParams.CqName, cqParams.DbName, resample, subQuery );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public virtual string GetContinuousQueries()
		{
			return QueryStatements.GetContinuousQueries;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="cqName"></param>
		/// <returns></returns>
		public virtual string DeleteContinuousQuery( string dbName, string cqName )
		{
			var query = String.Format( QueryStatements.DropContinuousQuery, cqName, dbName );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="dbName"></param>
		/// <param name="backfill"></param>
		/// <returns></returns>
		public virtual string Backfill( string dbName, BackfillParams backfill )
		{
			var downsamplers = backfill.Downsamplers.ToCommaSpaceSeparatedString();
			var filters = BuildFilters( backfill.Filters );
			var timeFrom = backfill.TimeFrom.ToString( "yyyy-MM-dd HH:mm:ss" );
			var timeTo = backfill.TimeTo.ToString( "yyyy-MM-dd HH:mm:ss" );
			var tags = BuildTags( backfill.Tags );
			var fillType = BuildFillType( backfill.FillType );

			var query = String.Format( QueryStatements.Backfill,
					downsamplers, backfill.DsSerieName, backfill.SourceSerieName, filters, timeFrom, timeTo, backfill.Interval, tags, fillType );

			return query;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="filters"></param>
		/// <returns></returns>
		protected virtual string BuildFilters( IEnumerable<string> filters )
		{
			return filters == null ? String.Empty : String.Join( " ", filters.ToAndSpaceSeparatedString(), "AND" );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="tags"></param>
		/// <returns></returns>
		protected virtual string BuildTags( IEnumerable<string> tags )
		{
			return tags == null ? String.Empty : String.Concat( ", ", tags.ToCommaSpaceSeparatedString() );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="fillType"></param>
		/// <returns></returns>
		protected virtual string BuildFillType( FillType fillType )
		{
			return fillType == FillType.Null ? String.Empty : String.Format( QueryStatements.Fill, fillType.ToString().ToLower() );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="resampleParam"></param>
		/// <returns></returns>
		protected virtual string BuildResample( CqResampleParam resampleParam )
		{
			if( String.IsNullOrEmpty( resampleParam.For ) && String.IsNullOrEmpty( resampleParam.Every ) )
				return String.Empty;

			var everyParam = !String.IsNullOrEmpty( resampleParam.Every ) ? "EVERY " + resampleParam.Every : String.Empty;
			var forParam = !String.IsNullOrEmpty( resampleParam.For ) ? "FOR " + resampleParam.For : String.Empty;

			return String.Format( "RESAMPLE {0} {1} ", everyParam, forParam );
		}
		#endregion
	}
}
