import { Injectable, Compiler, ComponentFactory, Injector } from '@angular/core';
import { Observable, from, throwError, of } from 'rxjs';
import {catchError, map } from 'rxjs/operators'

declare const window: any;
const SystemJs = window.System;

@Injectable()
export class PluginLoader {
  hash = new Map();

  constructor( private compiler: Compiler ) {
    //console.log( 'created PluginLoader' )
  }
 
  load( plugin: string, selector: string ): Observable<ComponentFactory<any>> {
    const key = `[${plugin}][${selector}]`

    if( this.hash.has( key )  ){
      //console.log( 'got cf from cache' );
      return of( this.hash.get( key ) );
    }

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
            throw new Error( `Component factory for [${selector}] not found` );

          this.hash.set( key, compFactory );

          //console.timeEnd( key )

          return compFactory;
        } ));
  }
}
