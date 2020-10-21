import { Injectable, Compiler, ComponentFactory, Injector } from '@angular/core';
import { Observable, from, } from 'rxjs';
import {map } from 'rxjs/operators'
import { QueryCompiler } from '../datasource/datasource.m';
import { Plugin } from './plugin.m';

declare const window: any;
const SystemJs = window.System;

@Injectable()
export class PluginLoader {
  constructor( private compiler: Compiler ) {
    //console.log( 'created PluginLoader' )
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

  loadDataSourceQueryCompiler( p: Plugin, injector: Injector ): Observable<QueryCompiler>{
    return this
      .load( `${p.id}/${p.module}`, "query-compiler" )
      .pipe(
        map( x => x.create( injector ).instance ));
  }

  loadWidget( p: Plugin ): Observable<ComponentFactory<any>>{
    return this.load( `${p.id}/${p.module}`, "widget" )
  }

  loadWidgetEditor( p: Plugin ): Observable<ComponentFactory<any>>{
    return this.load( `${p.id}/${p.module}`, "widget-editor" )
  }
}
