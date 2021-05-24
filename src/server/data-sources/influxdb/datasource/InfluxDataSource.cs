﻿#region Usings
using ED.Drivers.Influx;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	[DataSource( "influx" )]
	public class InfluxDataSource : DataSource
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool BasicAuthentication { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool WithCredentials { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool TlsClientAuth { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool WithCaCert { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public bool SkipTlsVerification { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Database { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string User { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Password{ get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AccessType AccessMethod { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string WhitelistedCookies { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public override DataSources.QueryBuilder QueryBuilder => new QueryBuilder();
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

			var d = obj as InfluxDataSource;

			if( null == d )
				return false;

			if( !BasicAuthentication.Equals( d.BasicAuthentication ) )
				return false;

			if( WithCredentials != d.WithCredentials )
				return false;

			if( TlsClientAuth != d.TlsClientAuth )
				return false;

			if( WithCaCert != d.WithCaCert )
				return false;

			if( SkipTlsVerification != d.SkipTlsVerification )
				return false;

			if( Database != d.Database )
				return false;

			if( User != d.User )
				return false;

			if( Password != d.Password )
				return false;

			if( AccessMethod != d.AccessMethod )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			HashCode hash = new HashCode();
			hash.Add( base.GetHashCode() );
			hash.Add( BasicAuthentication );
			hash.Add( WithCredentials );
			hash.Add( TlsClientAuth );
			hash.Add( WithCaCert );
			hash.Add( SkipTlsVerification );
			hash.Add( Database );
			hash.Add( User );
			hash.Add( Password );
			hash.Add( AccessMethod );
			return hash.ToHashCode();
		}

		/// <summary>
		/// 
		/// </summary>
		public override Task<OperationResult<bool>> Ping()
		{
			var cmd = new PingCommand( this );

			return cmd.Execute();
		}
		/// <summary>
		/// 
		/// </summary>
		public override async Task<OperationResult<TimeSeriesList>> Proxy( string query )
		{
			var c = new QueryCommand( this, query );
			
			var res = await c.Execute();

			return res.HasError ?
				OperationResult<TimeSeriesList>.Create( res.Error.Code, new Exception( res.Error.Details ) ) :
				
				OperationResult<TimeSeriesList>.Create( res.Value.ToModel() ); 
		}
		/// <summary>
		/// 
		/// </summary>
		public override async Task<OperationResult<TimeSeriesList>> Query( DataSourceQueryRequest r )
		{
			var q = r
				.Queries
				.Select( x => QueryBuilder
					.ParseSingle( x )
					.Compile( r.Range ) )
				.ToSemicolonSeparatedString();

			return await Proxy( q );
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum AccessType
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			Browser = 1,
			/// <summary>
			/// 
			/// </summary>
			Server = 2
			#endregion
		}
		#endregion
	}

	public static class InfluxExt 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="list"></param>
		/// <returns></returns>
		public static TimeSeriesList ToModel( this IEnumerable<Serie> list ) 
		{
			var res = new TimeSeriesList();

			res.AddRange( list
				.Select( x => x.ToModel() )
				.ToList() );

			return res;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="s"></param>
		/// <returns></returns>
		public static TimeSeries ToModel( this Serie s ) 
		{
			var ts = new TimeSeries()
			{
				Name = s.Name,
				Columns = s.Columns?.ToList(),
				Tags = s.Tags?.ToDictionary( e => e.Key, e => e.Value ),
				Values = s
					?.Values
					?.Select( x => x.ToList() )
					.ToList()
			};

			ts.Values?.ForEach( x =>
			{
				if( x [ 0 ] is DateTime time )
				{
					x [ 0 ] = time.ToUnixTime();
				}
			} );

			return ts;
		}
		#endregion
	}
}
