#region Usings
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
#endregion

namespace ED.Web
{
	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public abstract class JsonBinder<T> : JsonConverter
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public override bool CanWrite { get; } = false;
		/// <summary>
		/// 
		/// </summary>
		public override bool CanRead { get; } = true;
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="writer"></param>
		/// <param name="value"></param>
		/// <param name="serializer"></param>
		public override void WriteJson( JsonWriter writer,
			object value, JsonSerializer serializer )
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="reader"></param>
		/// <param name="objectType"></param>
		/// <param name="existingValue"></param>
		/// <param name="serializer"></param>
		/// <returns></returns>
		public override object ReadJson( JsonReader reader, Type objectType,
			object existingValue, JsonSerializer serializer )
		{
			var jObject = JObject.Load( reader );

			var target = Create( objectType, jObject );

			if( null == target )
				return null;

			serializer.Populate( jObject.CreateReader(), target );

			return target;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="objectType"></param>
		/// <param name="jObject"></param>
		/// <returns></returns>
		protected abstract T Create( Type objectType, JObject jObject );
		/// <summary>
		/// 
		/// </summary>
		/// <param name="objectType"></param>
		/// <returns></returns>
		public override bool CanConvert( Type objectType )
		{
			return typeof( T ) == objectType;
		}
		#endregion
	}
}
