using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CSRedis
{
    /// <summary>
    /// Provides data for the event that is raised when a subscription message is received
    /// </summary>
    public class RedisSubscriptionReceivedEventArgs : EventArgs
    {
        /// <summary>
        /// The subscription message
        /// </summary>
        public RedisSubscriptionMessage Message { get; private set; }

        internal RedisSubscriptionReceivedEventArgs(RedisSubscriptionMessage message)
        {
            Message = message;
        }
    }

   
}
