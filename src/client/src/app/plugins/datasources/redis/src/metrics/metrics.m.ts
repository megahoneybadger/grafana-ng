import {MetricQuery} from "common";

export class RedisQuery implements MetricQuery {
  refId: string;
  hidden: boolean;

	command: RedisCommand;
	key: string;
}

export enum RedisCommand{
	Get = "GET",
	HGet = "HGET",
  HGetAll = "HGETALL",
  HKeys = "HKEYS",
  HLen = "HLEN",
  XRange = "XRANGE",
	ClientList = "CLIENT LIST"
}

export class CommandMetadata{
  command: RedisCommand;
  description: string;
  hasParams: boolean;
}

export class CommandHelper{

  private static _items: CommandMetadata[] = [
    {
      command: RedisCommand.Get,
      description: "Returns the value of key",
      hasParams: true
    },
  
    {
      command: RedisCommand.HGet,
      description: "Returns the value associated with field in the hash stored at key",
      hasParams: true
    },

    {
      command: RedisCommand.HGetAll,
      description: "Returns all fields and values of the hash stored at key",
      hasParams: true
    },
    
    {
      command: RedisCommand.HKeys,
      description: "Returns all field names in the hash stored at key",
      hasParams: true
    },

    {
      command: RedisCommand.HLen,
      description: "Returns the number of fields contained in the hash stored at key",
      hasParams: true
    },

    {
      command: RedisCommand.XRange,
      description: "Returns the stream entries matching a given range of IDs",
      hasParams: true
    },

    {
      command: RedisCommand.ClientList,
      description: "Returns information and statistics about the client connections server", 
      hasParams: false
    },
  ]

  static getMetadata( c: RedisCommand ) : CommandMetadata{
    return CommandHelper._items.find( x => x.command == c );
  }
  
}


