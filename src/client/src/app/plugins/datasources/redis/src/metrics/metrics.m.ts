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
      command: RedisCommand.ClientList,
      description: "Returns information and statistics about the client connections server",
      hasParams: false
    },
  ]

  static getMetadata( c: RedisCommand ) : CommandMetadata{
    return CommandHelper._items.find( x => x.command == c );
  }
  
}


