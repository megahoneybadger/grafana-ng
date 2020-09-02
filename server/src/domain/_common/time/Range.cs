#region Usings
#endregion

namespace ED.Time
{
	/// <summary>
	/// 
	/// </summary>
	public class Range
	{
		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		public string From { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string To { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string Display { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int Section { get; set; }
		#endregion

		#region Class initialization
		/// <summary>
		/// 
		/// </summary>
		public Range()
		{
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="from"></param>
		/// <param name="to"></param>
		/// <param name="display"></param>
		/// <param name="section"></param>
		public Range( string from, string to, string display = "", int section = 0 ) 
		{
			From = from;
			To = to;
			Display = display;
			Section = section;
		}
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override string ToString() => Display;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="obj"></param>
		/// <returns></returns>
		public override bool Equals( object obj )
		{
			if( null == obj )
				return false;

			if( ReferenceEquals( this, obj ) )
				return true;

			var r = obj as Range;

			if( null == r )
				return false;

			if( !From.Equals( r.From ) )
				return false;

			if( !To.Equals( r.To ) )
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

			hash = hash * 23 + From.GetHashCode();
			hash = hash * 23 + To.GetHashCode();

			return hash;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public Range Copy()
		{
			return new Range()
			{
				From = From,
				To = To,
				Display = Display,
				Section = Section
			};
		}
		#endregion
	}
}
