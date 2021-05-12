using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CSRedis
{
  
  
    /// <summary>
    /// Provides data for the event that is raised when a transaction command has been processed by the server
    /// </summary>
    public class RedisTransactionQueuedEventArgs : EventArgs
    {
        /// <summary>
        /// The status code of the transaction command
        /// </summary>
        public string Status { get; private set; }

        /// <summary>
        /// The command that was queued
        /// </summary>
        public string Command { get; private set; }

        /// <summary>
        /// The arguments of the queued command
        /// </summary>
        public object[] Arguments { get; private set; }

        internal RedisTransactionQueuedEventArgs(string status, string command, object[] arguments)
        {
            Status = status;
            Command = command;
            Arguments = arguments;
        }
    }

}
