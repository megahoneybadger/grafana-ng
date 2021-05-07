#region Usings
using System.Collections.Generic;
using System.Linq;

#endregion

namespace ED.Drivers.Influx
{
	public class UserResponseParser : IUserResponseParser
	{
		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		public virtual IEnumerable<User> GetUsers( IEnumerable<Serie> series )
		{
			var users = new List<User>();

			if( series == null || series.Count() == 0 || series.Single().Values == null )
				return users;

			users.AddRange( series.Single().Values.Select( p => new User()
			{
				Name = ( string )p [ 0 ],
				IsAdmin = bool.Parse( p [ 1 ].ToString() )
			} ) );

			return users;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="series"></param>
		/// <returns></returns>
		public virtual IEnumerable<Grant> GetPrivileges( IEnumerable<Serie> series )
		{
			var grants = new List<Grant>();

			if( series == null || series.Count() == 0 )
				return grants;

			foreach( var serie in series )
			{
				if( serie.Values == null ) continue; // skip empty privileges

				foreach( var row in serie.Values )
				{
					var database = row [ 0 ].ToString();
					var privilegeName = row [ 1 ].ToString().ToLower();
					var privilege = Privileges.None;

					if( privilegeName.StartsWith( "all" ) )
					{
						privilege = Privileges.All;
					}
					else
					{
						if( !System.Enum.TryParse( privilegeName, true, out privilege ) )
						{
							privilege = Privileges.None;
						}
					}

					grants.Add( new Grant()
					{
						Database = database,
						Privilege = privilege
					} );
				}
			}

			return grants;
		}
		#endregion
	}
}
