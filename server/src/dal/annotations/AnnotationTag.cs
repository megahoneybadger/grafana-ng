#region Usings

#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	public class AnnotationTag
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Term { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public AnnotationTag() 
		{ }
		/// <summary>
		/// 
		/// </summary>
		/// <param name="t"></param>
		public AnnotationTag( string t ) 
		{
			Term = t;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{Id}|{Term}";
		}
		#endregion
	}
}
