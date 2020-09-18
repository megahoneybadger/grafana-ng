#region Usings
using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
#endregion

namespace ED.Alerts
{
	/// <summary>
	/// 
	/// </summary>
	[AlertNotificationType( "telegram" )]
	public class TelegramNotification : AlertNotification
	{
		#region Class constants
		/// <summary>
		/// 
		/// </summary>
		private const string KEY_CHAT_ID = "chat_id";
		/// <summary>
		/// 
		/// </summary>
		private const string KEY_TEXT = "text";
		/// <summary>
		/// 
		/// </summary>
		private const string KEY_CAPTION = "caption";
		/// <summary>
		/// 
		/// </summary>
		private const string KEY_PHOTO = "photo";

		/// <summary>
		/// 
		/// </summary>
		private const string KEY_PARSE_MODE = "parse_mode";
		/// <summary>
		/// 
		/// </summary>
		private const string VAL_PARSE_MODE = "html";
		/// <summary>
		/// 
		/// </summary>
		private const string CMD_SEND_PHOTO = "sendPhoto";
		/// <summary>
		/// 
		/// </summary>
		private const string CMD_SEND_MESSAGE = "sendMessage";

		#endregion

		#region Class properties
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string Token { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[Required]
		public string ChatId { get; set; }
		#endregion

		#region Class public methods
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override AlertNotification Copy()
		{
			return new TelegramNotification()
			{
				Uid = Uid,
				Name = Name,
				Type = Type,
				IsDefault = IsDefault,

				SendOnAllAlerts = SendOnAllAlerts,
				DisableResolveMessage = DisableResolveMessage,
				SendReminder = SendReminder,
				IncludeImage = IncludeImage,

				Token = Token,
				ChatId = ChatId
			};
		}
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

			var a = obj as TelegramNotification;

			if( null == a )
				return false;

			if( !Token.Equals( a.Token ) )
				return false;

			if( !ChatId.Equals( a.ChatId ) )
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

			hash = hash * 23 + Token.GetHashCode();
			hash = hash * 23 + ChatId.GetHashCode();

			return hash;
		}
		#endregion

		#region Class 'Build' command
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public override AlertNotificationCommand Build( IEvaluationContext c ) 
		{
			var body = new MultipartFormDataContent
			{
				{ new StringContent( ChatId ), KEY_CHAT_ID },
				{ new StringContent( VAL_PARSE_MODE ), KEY_PARSE_MODE },
			};

			string command;

			if( IncludeImage )
			{
				BuildImage( c, body );
				command = CMD_SEND_PHOTO;
			}
			else 
			{
				BuildText( c, body );
				command = CMD_SEND_MESSAGE;
			}

			return new AlertNotificationCommand()
			{
				Url = $"https://api.telegram.org/bot{Token}/{command}",
				Body = body,
				HttpMethod = HttpMethod.Post,
			};
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public void BuildImage( IEvaluationContext c, MultipartFormDataContent body )
		{
			body.Add( new StringContent( GetText( c ) ), KEY_CAPTION );

			if( !File.Exists( c.Notification.ImagePath ) )
				return;
			
			var s = File.OpenRead( c.Notification.ImagePath );

			string contentDisposision = $@"form-data; name=""{KEY_PHOTO}""; filename=""{KEY_PHOTO}""";

			contentDisposision = string.Join( string.Empty,
				Encoding.UTF8.GetBytes( contentDisposision ).Select( Convert.ToChar ) );

			body.Add( new StreamContent( s )
			{
				Headers =
				{
					{"Content-Type", "application/octet-stream"},
					{"Content-Disposition", contentDisposision}
				}
			} );
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		public void BuildText( IEvaluationContext c, MultipartFormDataContent body )
		{
			body.Add( new StringContent( GetText( c ) ), KEY_TEXT );
			body.Add( new StringContent( VAL_PARSE_MODE ), KEY_PARSE_MODE );
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="c"></param>
		/// <returns></returns>
		private string GetText( IEvaluationContext c )
		{
			var header = $"<b>{c.Notification.Title}</b>";
			
			var message = $"Message: {c.Notification.Message}";

			var sbMetrics = new StringBuilder();
			var limit = 4;
			var matches = c.Notification.Matches;

			for( int i = 0; i < matches.Count; ++i ) 
			{
				var (Metric, Value) = matches [ i ];
				sbMetrics.Append( $"\n{Metric}: {Value}" );

				if( i > limit )
					break;
			}

			var root = $"{header}\n{message}";

			if( sbMetrics.Length > 0 ) 
			{
				root = $"{root}\n\n<i>Metrics:</i>{ sbMetrics.ToString()}";
			}

			return root;
		}
		#endregion
	}
}
