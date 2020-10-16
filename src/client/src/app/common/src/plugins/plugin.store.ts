
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { Plugin } from './plugin.m';
import { PluginService } from './plugin.s';

@Injectable()
export class PluginStore{

  private _plugins: BehaviorSubject<Plugin[]> = new BehaviorSubject([]);
	public readonly plugins$: Observable<Plugin[]> = this._plugins.asObservable();

  constructor( private pluginService: PluginService ){
    console.log( 'created PluginStore' );
    this.update();  
  }

  update(){
    console.log( 'loading plugins list' );
    this
      .pluginService
      .getPlugins()
      .subscribe( x => this._plugins.next( x ) );
  }
}
