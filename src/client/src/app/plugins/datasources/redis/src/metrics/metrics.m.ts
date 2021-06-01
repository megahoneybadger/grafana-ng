import {MetricQuery} from "common";

export class RedisQuery implements MetricQuery {
  refId: string;
  hidden: boolean;

	command: RedisCommand;
	key: string;
  field: string;
}

export enum RedisCommand{
	Get = "GET",
	HGet = "HGET",
  HGetAll = "HGETALL",
  HKeys = "HKEYS",
  HLen = "HLEN",
  XRange = "XRANGE",
  LLen = "LLEN",
	ClientList = "CLIENT LIST"
}

export class CommandMetadata{
  command: RedisCommand;
  description: string;
  hasKey: boolean;
  hasField?: boolean;
}

export class CommandHelper{

  private static _items: CommandMetadata[] = [
    {
      command: RedisCommand.Get,
      description: "Returns the value of key",
      hasKey: true
    },
  
    {
      command: RedisCommand.HGet,
      description: "Returns the value associated with field in the hash stored at key",
      hasKey: true,
      hasField: true
    },

    {
      command: RedisCommand.HGetAll,
      description: "Returns all fields and values of the hash stored at key",
      hasKey: true
    },
    
    {
      command: RedisCommand.HKeys,
      description: "Returns all field names in the hash stored at key",
      hasKey: true
    },

    {
      command: RedisCommand.HLen,
      description: "Returns the number of fields contained in the hash stored at key",
      hasKey: true
    },

    {
      command: RedisCommand.XRange,
      description: "Returns the stream entries matching a given range of IDs",
      hasKey: true
    },

    {
      command: RedisCommand.ClientList,
      description: "Returns information and statistics about the client connections server", 
      hasKey: false
    },

    {
      command: RedisCommand.LLen,
      description: "Returns the length of the list stored at key",
      hasKey: true
    },
  ]

  static getMetadata( c: RedisCommand ) : CommandMetadata{
    return CommandHelper._items.find( x => x.command == c );
  }
  
}


