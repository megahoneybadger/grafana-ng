#region Usings
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
#endregion

namespace ED.Data.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	public class AlertNotificationPropertiesJsonResolver : DefaultContractResolver
	{
		#region Class members
		/// <summary>
		/// 
		/// </summary>
		private bool _ignoreBase = false;
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ignoreBase"></param>
		public AlertNotificationPropertiesJsonResolver( bool ignoreBase )
		{
			_ignoreBase = ignoreBase;
		}
		#endregion

		#region Class override methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="type"></param>
		/// <param name="memberSerialization"></param>
		/// <returns></returns>
		protected override IList<JsonProperty> CreateProperties( Type type, MemberSerialization memberSerialization )
		{
			var allProps = base.CreateProperties( type, memberSerialization );

			if( !_ignoreBase )
				return allProps;

			//Choose the properties you want to serialize/deserialize
			var props = type.GetProperties( ~BindingFlags.FlattenHierarchy );

			return allProps
				.Where( p => props.Any( a => a.Name == p.PropertyName ) )
				.ToList();
		}
		#endregion
	}
}
