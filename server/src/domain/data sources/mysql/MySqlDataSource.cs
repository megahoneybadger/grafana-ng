#region Usings
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources.MySQL
{
	[DataSourceType( "mysql" )]
	public class MySqlDataSource : DataSource
	{
		#region Class properties
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
		public string Password { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public override QueryBuilder QueryBuilder => null;
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

			var d = obj as MySqlDataSource;

			if( null == d )
				return false;

			if( Database != d.Database )
				return false;

			if( User != d.User )
				return false;

			if( Password != d.Password )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = base.GetHashCode();

			hash = hash * 23 + Database.GetHashCode();
			hash = hash * 23 + User.GetHashCode();
			hash = hash * 23 + Password.GetHashCode();

			return hash;
		}
		/// <summary>
		/// 
		/// </summary>
		public override Task<OperationResult<bool>> Ping()
		{
			return Task
				.Delay( 3000 )
				.ContinueWith<OperationResult<bool>>( x =>
					OperationResult<bool>.Create( ErrorCode.NoDatabaseConnection ) );
		}
		/// <summary>
		/// 
		/// </summary>
		public override Task<OperationResult<TimeSeriesList>> Proxy( string command )
		{
			return null;
		}
		#endregion
	}
}
