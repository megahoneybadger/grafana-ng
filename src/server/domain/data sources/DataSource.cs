#region Usings
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using TimeSeriesList = System.Collections.Generic.List<ED.DataSources.TimeSeries>;
#endregion

namespace ED.DataSources
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class DataSource: OrgSupportingDomainModel
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public bool IsDefault { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Name { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Type 
		{
			get 
			{
				var attr = GetType()
					.GetCustomAttributes()
					.OfType<DataSourceAttribute>()
					.SingleOrDefault();

				return ( null == attr ) ? string.Empty : attr.Type;
			}
		}
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Url { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string TypeLogoUrl { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => $"{OrgId}|{Id}|{Type}|{Name}";
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

			var d = obj as DataSource;

			if( null == d )
				return false;

			if( !Id.Equals( d.Id ) )
				return false;

			if( OrgId != d.OrgId )
				return false;

			if( IsDefault != d.IsDefault )
				return false;

			if( Name != d.Name )
				return false;

			if( Type != d.Type )
				return false;

			if( Url != d.Url )
				return false;

			return true;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override int GetHashCode()
		{
			int hash = 17;

			hash = hash * 23 + Id.GetHashCode();
			hash = hash * 23 + OrgId.GetHashCode();
			hash = hash * 23 + IsDefault.GetHashCode();
			hash = hash * 23 + Name.GetHashCode();
			hash = hash * 23 + Type.GetHashCode();
			hash = hash * 23 + Url.GetHashCode();

			return hash;
		}
		/// <summary>
		/// 
		/// </summary>
		public abstract Task<OperationResult<bool>> Ping();
		/// <summary>
		/// 
		/// </summary>
		public abstract Task<OperationResult<TimeSeriesList>> Proxy( string command );
		/// <summary>
		/// 
		/// </summary>
		public abstract Task<OperationResult<TimeSeriesList>> Query( DataSourceQueryRequest r );
		#endregion

		#region Class 'Deserialization' methods
		/// <summary>
		/// 
		/// </summary>
		public abstract IMetricQuery [] ToQueries( JToken jsonMetric );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsonMetric"></param>
		/// <returns></returns>
		public abstract IMetricQuery ToMetric( JToken jsonMetric );
		#endregion
	}
}


