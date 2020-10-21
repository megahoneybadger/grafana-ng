
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

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

  getDataSource( type: string ) : Observable<Plugin>{
    return this
      .plugins$
      .pipe( 
        map( plugins => plugins.find(x => x.id == type)))
  }

  getWidget( type: string ) : Observable<Plugin>{
    return this
      .plugins$
      .pipe( 
        map( plugins => plugins.find( y => y.id == type || y.id == "chart")))
  }

  update(){
    console.log( 'loading plugins list' );
    this
      .pluginService
      .getPlugins()
      .subscribe( x => this._plugins.next( x ) );
  }

  get
}
