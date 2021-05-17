#region Usings

using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
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
	[DataSourceType( "redis" )]
	public class RedisDataSource : DataSource
	{
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
		/// <summary>
		/// 
		/// </summary>
		public override DataSources.QueryBuilder QueryBuilder => null /*todo*/;
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
			return await Task.FromResult( OperationResult<TimeSeriesList>.Create( null ));

			//var c = new QueryCommand( this, query );

			//var res = await c.Execute();

			//return res.HasError ?
			//	OperationResult<TimeSeriesList>.Create( res.Error.Code, new Exception( res.Error.Details ) ) :

			//	OperationResult<TimeSeriesList>.Create( res.Value.ToModel() );
		}
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

			return sb.ToString();
		}
		#endregion
	}

	//public static class InfluxExt 
	//{
	//	#region Class public methods
	//	/// <summary>
	//	/// 
	//	/// </summary>
	//	/// <param name="list"></param>
	//	/// <returns></returns>
	//	public static TimeSeriesList ToModel( this IEnumerable<Serie> list ) 
	//	{
	//		var res = new TimeSeriesList();

	//		res.AddRange( list
	//			.Select( x => x.ToModel() )
	//			.ToList() );

	//		return res;
	//	}
	//	/// <summary>
	//	/// 
	//	/// </summary>
	//	/// <param name="s"></param>
	//	/// <returns></returns>
	//	public static TimeSeries ToModel( this Serie s ) 
	//	{
	//		var ts = new TimeSeries()
	//		{
	//			Name = s.Name,
	//			Columns = s.Columns?.ToList(),
	//			Tags = s.Tags?.ToDictionary( e => e.Key, e => e.Value ),
	//			Values = s
	//				?.Values
	//				?.Select( x => x.ToList() )
	//				.ToList()
	//		};

	//		ts.Values?.ForEach( x =>
	//		{
	//			if( x [ 0 ] is DateTime )
	//			{
	//				x [ 0 ] = ( ( DateTime )x [ 0 ] ).ToUnixTime();
	//			}
	//		} );

	//		return ts;
	//	}
	//	#endregion
	//}
}
