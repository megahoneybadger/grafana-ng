import { Injectable } from "@angular/core";
import { PluginLoader } from '../plugins/plugin-loader.s';
import { Plugin, PluginType } from '../plugins/plugin.m';

import { PluginStore } from '../plugins/plugin.store';

@Injectable()
export class DataSourceDispatcher {
  plugins: Plugin[];
  
  constructor( 
    private pluginStore: PluginStore ){
      pluginStore
        .plugins$
        .subscribe( x => this.plugins = x.filter( y => y.type == PluginType.DataSource ));

      console.log( "created DataSourceDispatcher" );
  }

  getPlugin( id: number ){
    const p = this.plugins.find( x => x.id == "influx" );

    //console.log( p );
    //this.pluginLoader.load( p.module, "" )

    return p;
  }
}