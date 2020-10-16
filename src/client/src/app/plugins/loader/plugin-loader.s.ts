import { Injectable, Compiler, Injector, SkipSelf, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';
import {PLUGIN_EXTERNALS_MAP} from './plugin-externals'
import { Observable, from, of } from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators'

declare const window: any;
const SystemJs = window.System;

@Injectable()
export class PluginLoader {
  constructor(
    private compiler: Compiler,
    @SkipSelf() private injector: Injector) {
      Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey =>
        window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey])
      );
  }
 
  load( plugin: string, selector: string ): Observable<ComponentFactory<any>> {
    return from( SystemJs.import( `/assets/plugins/${plugin}`))
      .pipe( 
        map( (x: any) => {
          const moduleName = Object
            .getOwnPropertyNames( x.default )
            .find( x => x.endsWith( "Module" ) );

          if( !moduleName )
            throw new Error( 'Module not found' );

          const mwcf = this
            .compiler
            .compileModuleAndAllComponentsSync( x.default[ moduleName ] );

          const compFactory = mwcf.componentFactories.find(e => e.selector == selector); 

          if( !compFactory )
            throw new Error( 'Component factory not found' );

          return compFactory;
        } )
        
       );
  }

  embed<T>( plugin: string, selector: string, vcr: ViewContainerRef ) : Observable<ComponentRef<T>>{
    return this
      .load( plugin, selector )
      .pipe( 
        map( cf => {
          vcr.clear();
          return vcr.createComponent(cf);
        } ) )
  }
}
