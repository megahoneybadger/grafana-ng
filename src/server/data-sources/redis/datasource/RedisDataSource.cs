#region Usings

using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
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
		[Required]
		public ConnectionTarget Target { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string MasterName { get; set; }
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
		public int? PoolSize { get; set; }
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

			if( Target != d.Target )
				return false;

			if( MasterName != d.MasterName )
				return false;

			if( ACL != d.ACL )
				return false;

			if( UserName != d.UserName )
				return false;

			if( Password != d.Password )
				return false;

			if( PoolSize != d.PoolSize )
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
			hash.Add( Target );
			hash.Add( MasterName );
			hash.Add( ACL );
			hash.Add( UserName );
			hash.Add( Password );
			hash.Add( PoolSize );
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

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum ConnectionTarget
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Standalone,
			/// <summary>
			/// 
			/// </summary>
			Cluster,
			/// <summary>
			/// 
			/// </summary>
			Sentinel,
			/// <summary>
			/// 
			/// </summary>
			Socket
			#endregion
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
