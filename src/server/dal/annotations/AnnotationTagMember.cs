#region Usings
using EntityTag = ED.Data.DashboardTag;
#endregion

namespace ED.Data
{
	/// <summary>
	/// 
	/// </summary>
	[TimeSupportingEntity]
	public class AnnotationTagMember
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int AnnotationId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int AnnotationTagId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public Annotation Annotation { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public AnnotationTag AnnotationTag { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			return $"{AnnotationId}<->{AnnotationTagId}";
		}
		#endregion
	}
}
