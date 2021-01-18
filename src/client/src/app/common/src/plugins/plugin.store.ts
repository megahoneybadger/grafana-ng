
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeMap, skipWhile } from 'rxjs/operators';

import { Plugin } from './plugin.m';
import { PluginService } from './plugin.s';

@Injectable()
export class PluginStore{

  private _plugins: BehaviorSubject<Plugin[]> = new BehaviorSubject([]);
  public readonly plugins$: Observable<Plugin[]> = this._plugins.asObservable();
  
  private _preLoad: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private readonly preLoad$: Observable<boolean> = this._preLoad.asObservable();

  constructor( private pluginService: PluginService ){
    console.log( 'created PluginStore' );
    this.preLoad();  
  }

  getPlugin( type: string ) : Observable<Plugin>{
    return this
      .preLoad$
      .pipe( 
        skipWhile( v => !v ),
        mergeMap( x => this.findPlugin( type ) ) );
  }

  private findPlugin( type: string ): Observable<Plugin>{
    return this
      .plugins$
      .pipe( 
        map( plugins => {
          //console.log( "find plugin: " + type );

          const p = plugins.find( y => y.id == type );

          if( !p )
            throw new Error('Failure to find plugin');
          
          return p;
        }))
  }

  private preLoad(){
    //console.log( 'loading plugins list...' );
    this
      .pluginService
      .getPlugins()
      .subscribe( x => {
        //console.log( 'loading plugins complete' );
        this._plugins.next( x );
        this._preLoad.next( true );
      });
  }
}
