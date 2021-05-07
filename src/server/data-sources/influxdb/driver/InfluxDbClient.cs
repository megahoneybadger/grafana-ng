#region Usings
using System;
using System.Net.Http;

#endregion

namespace ED.Drivers.Influx
{
	public class InfluxDbClient : IInfluxDbClient
	{
		#region Class members
		private Lazy<ISerieQueryBuilder> _serieQueryBuilder;
		private Lazy<IDatabaseQueryBuilder> _databaseQueryBuilder;
		private Lazy<IRetentionQueryBuilder> _retentionQueryBuilder;
		private Lazy<ICqQueryBuilder> _cqQueryBuilder;
		private Lazy<IDiagnosticsQueryBuilder> _diagnosticsQueryBuilder;
		private Lazy<IUserQueryBuilder> _userQueryBuilder;

		private Lazy<IBasicResponseParser> _basicResponseParser;
		private Lazy<ISerieResponseParser> _serieResponseParser;
		private Lazy<IDatabaseResponseParser> _databaseResponseParser;
		private Lazy<IRetentionResponseParser> _retentionResponseParser;
		private Lazy<ICqResponseParser> _cqResponseParser;
		private Lazy<IDiagnosticsResponseParser> _diagnosticsResponseParser;
		private Lazy<IUserResponseParser> _userResponseParser;

		private IInfluxDbRequestClient _requestClient;
		private Lazy<IBasicClientModule> _basicClientModule;
		private Lazy<ISerieClientModule> _serieClientModule;
		private Lazy<IDatabaseClientModule> _databaseClientModule;
		private Lazy<IRetentionClientModule> _retentionClientModule;
		private Lazy<ICqClientModule> _cqClientModule;
		private Lazy<IDiagnosticsClientModule> _diagnosticsClientModule;
		private Lazy<IUserClientModule> _userClientModule;
		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public IBasicClientModule Client
		{
			get { return _basicClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public ISerieClientModule Serie
		{
			get { return _serieClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public IDatabaseClientModule Database
		{
			get { return _databaseClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public IInfluxDbRequestClient RequestClient
		{
			get { return _requestClient; }
		}
		/// <summary>
		/// 
		/// </summary>
		public IRetentionClientModule Retention
		{
			get { return _retentionClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public ICqClientModule ContinuousQuery
		{
			get { return _cqClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public IDiagnosticsClientModule Diagnostics
		{
			get { return _diagnosticsClientModule.Value; }
		}
		/// <summary>
		/// 
		/// </summary>
		public IUserClientModule User
		{
			get { return _userClientModule.Value; }
		}
		#endregion

		#region Class initialization
		/// <summary>
		/// InfluxDb client.
		/// </summary>
		/// <param name="endpointUri">InfluxDb server URI.</param>
		/// <param name="username">InfluxDb server username.</param>
		/// <param name="password">InfluxDb server password.</param>
		/// <param name="influxVersion">InfluxDb server version.</param>
		/// <param name="queryLocation">Where queries are located in the request (URI params vs. Form Data) (optional).</param>
		/// <param name="httpClient">Custom HttpClient object (optional).</param>
		/// <param name="throwOnWarning">Should throw exception upon InfluxDb warning message (for debugging) (optional).</param>
		public InfluxDbClient(
				string endpointUri,
				string username,
				string password,
				InfluxDbVersion influxVersion,
				QueryLocation queryLocation = QueryLocation.FormData,
				HttpClient httpClient = null,
				bool throwOnWarning = false
		) : this(
				new InfluxDbClientConfiguration(
						new Uri( endpointUri ),
						username,
						password,
						influxVersion,
						queryLocation,
						httpClient,
						throwOnWarning
				)
		)
		{ }

		/// <summary>
		/// InfluxDb client.
		/// </summary>
		/// <param name="configuration">InfluxDb client configuration.</param>
		public InfluxDbClient( IInfluxDbClientConfiguration configuration )
		{
			switch( configuration.InfluxVersion )
			{
				case InfluxDbVersion.Latest:
				case InfluxDbVersion.v_1_3:
					this.BootstrapInfluxDbLatest( configuration );
					break;

				case InfluxDbVersion.v_1_0_0:
					this.BootstrapInfluxDbLatest( configuration );
					this.BootstrapInfluxDb_v_1_0_0( configuration );
					break;

				case InfluxDbVersion.v_0_9_6:
				case InfluxDbVersion.v_0_9_5:
					this.BootstrapInfluxDbLatest( configuration );
					this.BootstrapInfluxDb_v_0_9_6( configuration );
					break;

				case InfluxDbVersion.v_0_9_2:
					this.BootstrapInfluxDbLatest( configuration );
					this.BootstrapInfluxDb_v_0_9_6( configuration );
					this.BootstrapInfluxDb_v_0_9_2( configuration );
					break;

				case InfluxDbVersion.v_0_8_x:
					throw new NotImplementedException( "InfluxDB v0.8.x is not supported by InfluxData.Net library." );

				default:
					throw new ArgumentOutOfRangeException( "influxDbClientConfiguration", String.Format( "Unknown version {0}.", configuration.InfluxVersion ) );
			}
		}
		/// <summary>
		/// The default (latest supported) dependency chain setup.
		/// </summary>
		/// <param name="configuration">InfluxDb client configuration.</param>
		protected virtual void BootstrapInfluxDbLatest( IInfluxDbClientConfiguration configuration )
		{
			_requestClient = new InfluxDbRequestClient( configuration );

			// NOTE: once a breaking change occures, QueryBuilders will need to be resolved with factories
			_serieQueryBuilder = new Lazy<ISerieQueryBuilder>( () => new SerieQueryBuilder(), true );
			_databaseQueryBuilder = new Lazy<IDatabaseQueryBuilder>( () => new DatabaseQueryBuilder(), true );
			_retentionQueryBuilder = new Lazy<IRetentionQueryBuilder>( () => new RetentionQueryBuilder(), true );
			_cqQueryBuilder = new Lazy<ICqQueryBuilder>( () => new CqQueryBuilder(), true );
			_diagnosticsQueryBuilder = new Lazy<IDiagnosticsQueryBuilder>( () => new DiagnosticsQueryBuilder(), true );
			_userQueryBuilder = new Lazy<IUserQueryBuilder>( () => new UserQueryBuilder(), true );

			// NOTE: once a breaking change occures, Parsers will need to be resolved with factories
			_basicResponseParser = new Lazy<IBasicResponseParser>( () => new BasicResponseParser(), true );
			_serieResponseParser = new Lazy<ISerieResponseParser>( () => new SerieResponseParser(), true );
			_databaseResponseParser = new Lazy<IDatabaseResponseParser>( () => new DatabaseResponseParser(), true );
			_retentionResponseParser = new Lazy<IRetentionResponseParser>( () => new RetentionResponseParser(), true );
			_cqResponseParser = new Lazy<ICqResponseParser>( () => new CqResponseParser(), true );
			_diagnosticsResponseParser = new Lazy<IDiagnosticsResponseParser>( () => new DiagnosticsResponseParser(), true );
			_userResponseParser = new Lazy<IUserResponseParser>( () => new UserResponseParser(), true );

			// NOTE: once a breaking change occures, ClientModules will need to be resolved with factories
			_basicClientModule = new Lazy<IBasicClientModule>( () => new BasicClientModule( _requestClient, _basicResponseParser.Value ) );
			var batchWriter = new Lazy<IBatchWriterFactory>( () => new BatchWriter( _basicClientModule.Value ) );

			_serieClientModule = new Lazy<ISerieClientModule>( () => new SerieClientModule( _requestClient, _serieQueryBuilder.Value, _serieResponseParser.Value, batchWriter.Value ) );
			_databaseClientModule = new Lazy<IDatabaseClientModule>( () => new DatabaseClientModule( _requestClient, _databaseQueryBuilder.Value, _databaseResponseParser.Value ) );
			_retentionClientModule = new Lazy<IRetentionClientModule>( () => new RetentionClientModule( _requestClient, _retentionQueryBuilder.Value, _retentionResponseParser.Value ) );
			_cqClientModule = new Lazy<ICqClientModule>( () => new CqClientModule( _requestClient, _cqQueryBuilder.Value, _cqResponseParser.Value ) );
			_diagnosticsClientModule = new Lazy<IDiagnosticsClientModule>( () => new DiagnosticsClientModule( _requestClient, _diagnosticsQueryBuilder.Value, _diagnosticsResponseParser.Value ) );
			_userClientModule = new Lazy<IUserClientModule>( () => new UserClientModule( _requestClient, _userQueryBuilder.Value, _userResponseParser.Value ) );
		}
		/// <summary>
		/// v1.0.0 and older dependency chain setup.
		/// </summary>
		/// <param name="configuration">InfluxDb client configuration.</param>
		protected virtual void BootstrapInfluxDb_v_1_0_0( IInfluxDbClientConfiguration configuration )
		{
			_requestClient = new InfluxDbRequestClient_v_1_0_0( configuration );
		}
		/// <summary>
		/// v0.9.6 and older dependency chain setup.
		/// </summary>
		/// <param name="configuration">InfluxDb client configuration.</param>
		protected virtual void BootstrapInfluxDb_v_0_9_6( IInfluxDbClientConfiguration configuration )
		{
			_requestClient = new InfluxDbRequestClient_v_0_9_6( configuration );

			_cqQueryBuilder = new Lazy<ICqQueryBuilder>( () => new CqQueryBuilder_v_0_9_6(), true );

			_serieResponseParser = new Lazy<ISerieResponseParser>( () => new SerieResponseParser_v_0_9_6(), true );

			_databaseClientModule = new Lazy<IDatabaseClientModule>( () => new DatabaseClientModule_v_0_9_6( _requestClient, _databaseQueryBuilder.Value, _databaseResponseParser.Value ) );
			_cqClientModule = new Lazy<ICqClientModule>( () => new CqClientModule_v_0_9_6( _requestClient, _cqQueryBuilder.Value, _cqResponseParser.Value ) );
		}
		/// <summary>
		/// v0.9.2 and older dependency chain setup.
		/// </summary>
		/// <param name="configuration">InfluxDb client configuration.</param>
		protected virtual void BootstrapInfluxDb_v_0_9_2( IInfluxDbClientConfiguration configuration )
		{
			_requestClient = new InfluxDbRequestClient_v_0_9_2( configuration );
		}
		#endregion
	}
}