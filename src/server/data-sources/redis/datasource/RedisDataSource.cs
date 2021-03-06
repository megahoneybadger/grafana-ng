﻿#region Usings

using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources.Redis
{
	/// <summary>
	/// 
	/// </summary>
	[DataSource( "redis" )]
	public class RedisDataSource : DataSource
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string PROP_TARGETS = "targets";
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool ACL { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string UserName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? Timeout { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? PipelineWindow { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? PingInterval { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( object.ReferenceEquals( this, obj ) )
				return true;

			if( !base.Equals( obj ) )
				return false;

			var d = obj as RedisDataSource;

			if( null == d )
				return false;
			
			if( ACL != d.ACL )
				return false;

			if( UserName != d.UserName )
				return false;

			if( Password != d.Password )
				return false;

			if( Timeout != d.Timeout )
				return false;

			if( PipelineWindow != d.PipelineWindow )
				return false;

			if( PingInterval != d.PingInterval )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			HashCode hash = new();
			hash.Add( base.GetHashCode() );
			hash.Add( ACL );
			hash.Add( UserName );
			hash.Add( Password );
			hash.Add( Timeout );
			hash.Add( PipelineWindow );
			hash.Add( PingInterval );

			return hash.ToHashCode();
		}

		#endregion

		#region Class 'Command' methods
		/// <summary>
		/// 
		/// </summary>
		public override async Task<OperationResult<bool>> Ping()
		{
			var cmd = new PingCommand( this );

			return await cmd.Execute();
		}
		/// <summary>
		/// 
		/// </summary>
		public override async Task<OperationResult<TimeSeriesList>> Proxy( string query )
		{
			return await Task.FromResult( OperationResult<TimeSeriesList>.Create( null ) );
		}
		/// <summary>
		/// 
		/// </summary>
		public override async Task<OperationResult<TimeSeriesList>> Query( DataSourceQueryRequest r )
		{
			var (from, to) = r.Range.AsEpoch;

			var list = r
				.Queries
				.Select( x => ToMetric( x ) )
				.OfType<MetricQuery>()
				.Where( x => !x.Hidden && x.IsValid )
				.ToList();

			list.ForEach( x => x.Range = r.Range );

			var pipeline = new PipelineCommand( this, list );

			var res = await pipeline.Execute();

			return res;
		}
		#endregion

		#region Class 'Deserialize' methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsonToken"></param>
		/// <returns></returns>
		public override IMetricQuery [] ToQueries( JToken jsonMetric ) =>
			jsonMetric [ PROP_TARGETS ]?.ToObject<MetricQuery []>();

		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsonToken"></param>
		/// <returns></returns>
		public override IMetricQuery ToMetric( JToken jsonMetric ) =>
			jsonMetric?.ToObject<MetricQuery>();
		#endregion
	}

	public static class DataSourceExt
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ds"></param>
		/// <returns></returns>
		public static string ToConfiguration( this RedisDataSource ds )
		{
			var sb = new StringBuilder();
			var separ = ",";

			if( !string.IsNullOrEmpty( ds.Url ) )
			{
				sb.Append( ds.Url );
			}

			if( !( string.IsNullOrEmpty( ds.UserName ) || string.IsNullOrWhiteSpace( ds.UserName ) ) )
			{
				if( sb.Length > 0 )
				{
					sb.Append( separ );
				}

				sb.Append( $"user={ds.UserName}" );
			}

			if( !( string.IsNullOrEmpty( ds.Password ) || string.IsNullOrWhiteSpace( ds.Password ) ) )
			{
				if( sb.Length > 0 )
				{
					sb.Append( separ );
				}

				sb.Append( $"password={ds.Password}" );
			}

			if( sb.Length > 0 )
			{
				sb.Append( separ );
			}

			sb.Append( $",connectTimeout=1000" );
			sb.Append( $",connectRetry=1" );

			return sb.ToString();
		}
		#endregion
	}
}
