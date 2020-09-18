#region Usings
using System.Collections.Generic;
using System.Linq;
#endregion

namespace ED.DataSources.InfluxDb
{
	/// <summary>
	/// 
	/// </summary>
	public class TagList : List<Tag> 
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => Build();
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string Build() 
		{
			var cond = string.Empty;
			var tagIndex = 0;

			this
				.Where( x => !string.IsNullOrEmpty( x.Key ) && !string.IsNullOrEmpty( x.Value ) )
				.ToList()
				.ForEach( x => 
				{
					if( tagIndex > 0 )
					{
						cond += $" {x.Condition.ToString().ToUpper()} ";
					}

					cond += x.ToString();
					++tagIndex;
				} );

			return cond;
		}
		#endregion
	}

	/// <summary>
	/// 
	/// </summary>
	public class Tag
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string Key { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Value { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public TagCondition Condition { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Operator { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $" \"{Key}\" {Operator} '{Value}'";
		}
		#endregion

		#region Class internal structs
		/// <summary>
		/// 
		/// </summary>
		public enum TagCondition
		{
			#region Class properties
			/// <summary>
			/// 
			/// </summary>
			And,
			/// <summary>
			/// 
			/// </summary>
			Or
			#endregion
		}
		#endregion
	}
}
