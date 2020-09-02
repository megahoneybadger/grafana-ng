#region Usings
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
#endregion

namespace ED.Security
{
  /// <summary>
  /// 
  /// </summary>
  public class Gravatar
  {
    #region Class constants
    /// <summary>
    /// 
    /// </summary>
    private const string UNKNOWN = "unknown_user.png";
    #endregion

    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private readonly object _syncObject;
    /// <summary>
    /// 
    /// </summary>
    private readonly Dictionary<string, byte []> _cache;
    /// <summary>
    /// 
    /// </summary>
    private byte [] _unknown;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    public Gravatar() 
    {
      _syncObject = new object();
      _cache = new Dictionary<string, byte []>();

      ReadUnknownUserImage();
    }
    /// <summary>
    /// 
    /// </summary>
    private void ReadUnknownUserImage() 
    {
      try
      {
        var asm = Assembly.GetExecutingAssembly();

        var resourceName = asm
          .GetManifestResourceNames()
          .FirstOrDefault( x => x.EndsWith( UNKNOWN ) );

        using var stream = asm.GetManifestResourceStream( resourceName );

        if( null != stream )
        {
          _unknown = new byte [ stream.Length ];
          stream.Read( _unknown, 0, _unknown.Length );
        }
      }
      catch 
      {
        _unknown = new byte [ 0 ];
      }
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="email"></param>
    /// <returns></returns>
    public async Task<byte []> Fetch( string email )
    {
      lock( _syncObject )
      {
        if( _cache.TryGetValue( email, out byte [] v ) )
          return v;
      }

      var res = await Create( email );

      lock( _syncObject )
      {
        if( null != res && res.Length > 0 )
        {
          _cache [ email ] = res;
        }
        else 
        {
          res = _unknown.ToArray();
        }
      }

      return res;
    }
    /// <summary>
    /// 
    /// </summary>
    public async static Task<byte[]> Create( string email )
    {
      string url = $"http://www.gravatar.com/avatar/{GetHash( email )}?d=retro";
      var result = new byte [ 0 ];

      using var client = new HttpClient();

      try
      {
        var response = await client
          .GetAsync( url )
          .ConfigureAwait( false );

        if( response.IsSuccessStatusCode )
        {
          result = await response
            .Content
            .ReadAsByteArrayAsync()
            .ConfigureAwait( false );
        }
      }
      catch
      { }

      return result;
    }
    /// <summary>
    /// 
    /// </summary>
    public async static Task<string> CreateBase64String( string email ) =>
      Convert.ToBase64String( await Create( email ) );
    /// <summary>
    /// 
    /// </summary>
    /// <param name="email"></param>
    /// <returns></returns>
    public static string GetHash( string email )
    {
      var encoder = new UTF8Encoding();
      var md5Hasher = new MD5CryptoServiceProvider();
      byte [] hashedBytes = md5Hasher.ComputeHash( encoder.GetBytes( email ) );

      var sb = new StringBuilder( hashedBytes.Length * 2 );

      for( int i = 0; i < hashedBytes.Length; i++ )
      {
        sb.Append( hashedBytes [ i ].ToString( "X2" ) );
      }

      var imageHashCode = sb.ToString().ToLower();

      return imageHashCode;
    }
    #endregion
  }
}

