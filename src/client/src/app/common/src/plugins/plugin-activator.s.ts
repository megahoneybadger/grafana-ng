import { ComponentFactory, ComponentFactoryResolver, ComponentRef,
  Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { EMPTY, empty, Observable, of, throwError } from 'rxjs';

import { catchError, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { PANEL_TOKEN } from './plugin.m';
import { Panel } from '../dashboard/dashboard.m';

import { DataSourceService } from '../datasource/datasource.s';
import { PluginLoader } from './plugin-loader.s';
import { Plugin } from './plugin.m';
import { PluginStore } from './plugin.store';
import { IDataSourceDispatcher, Series } from '../datasource/datasource.m'
import { DataSourceStore } from '../datasource/datasource.store';
import { TimeRange } from '../time/time.m';
import { TimeRangeStore } from '../time/time.store';


@Injectable()
export class PluginActivator {
  constructor(
    private pluginLoader: PluginLoader,
    private pluginStore: PluginStore,
    private injector: Injector,
    private dsService: DataSourceService,
    private dsStore: DataSourceStore,
    private resolver: ComponentFactoryResolver,
    private time: TimeRangeStore ) {
    
  }

  extendInjector( p: Panel ): Injector{
    return Injector.create({
      providers: [{ provide: PANEL_TOKEN, useValue: p}],
      parent: this.injector
   })
  }

  static extendInjector( p: Panel, injector: Injector ): Injector{
    return Injector.create({
      providers: [{ provide: PANEL_TOKEN, useValue: p}],
      parent: injector
   })
  }

  getPath( p: Plugin ){
    return `${p.id}/${p.module}`;
  }

  createWidget( panel: Panel, vcr: ViewContainerRef ) : Observable<ComponentRef<any>>{
    return this.createPluginInstance( panel, vcr, "widget" );
  }

  createWidgetEditor( panel: Panel, vcr: ViewContainerRef ) : Observable<ComponentRef<any>>{
    return this.createPluginInstance( panel, vcr, "widget-editor" );
  }

  createPanel( panel: Panel, vcr: ViewContainerRef, type: Type<any> ){
    const cf = this
      .resolver
      .resolveComponentFactory( type );

    const injector = PluginActivator.extendInjector( panel, this.injector );

    vcr.createComponent( cf, 0, injector );
  }

  createDataSourceDispatcher( p: Panel ): Observable<IDataSourceDispatcher>{
    if( !p.widget.metrics?.dataSource )  {
      return of();
    }

    return this
      .dsStore
      .getDataSource( p.widget.metrics?.dataSource )
      .pipe( 
        mergeMap( d => this.pluginStore.getPlugin( d.type ) ),
        mergeMap( p => this.pluginLoader.load( this.getPath( p ), "ds-dispatcher" ) ),
        map( x => x.create( this.injector ).instance ),
        catchError( err => this.logAndThrowError( err ) ) );
  }

  dispatchDataSourceRequest( p: Panel, errHandler: (err: string) => any = undefined ) : Observable<Series[]> {
    if( !p.widget.metrics?.dataSource )  {
      return of();
    }

    return this
      .createDataSourceDispatcher( p )
      .pipe( 
        tap( () =>{
          p.error = undefined;
          p.loading = true
        }  ),
        mergeMap( r => r
          .dispatch( p.widget.metrics, this.getRange( p ) )
          .pipe( 
            finalize( () => p.loading = false ),
            catchError( e => {
              const message = e.error?.details
              p.error = message;

              if( errHandler ){
                errHandler( message );
              }
          
              return EMPTY;
            } ) ) ) );
  }

  private getRange( p: Panel ): TimeRange{
		const range = <TimeRange>this.time.range.raw;
		const mod = p?.widget?.time;

		return this
			.time
			.converter
			.modify( range, mod )
	}

  createDataSourceMetricsDesigner( p: Panel, vcr: ViewContainerRef ): Observable<ComponentRef<any>>{
    if( !p.widget.metrics?.dataSource )  {
      return of();
    }
    
    return this
      .dsStore
      .getDataSource( p.widget.metrics.dataSource )
      .pipe( // concat map ??
        mergeMap( d => this.pluginStore.getPlugin( d.type ) ),
        mergeMap( p => this.pluginLoader.load( this.getPath( p ), "metrics-designer" ) ),
        map( cf => this.createComponent( p, vcr, cf ) ),
        catchError( err => this.logAndThrowError( err ) ) );
        
  }

 

  private createPluginInstance( panel: Panel, vcr: ViewContainerRef, selector: string ) : Observable<ComponentRef<any>>{
    return this
      .pluginStore
      .getPlugin( panel.type )
      .pipe( 
        mergeMap( p => this.pluginLoader.load( this.getPath( p ), selector ) ),
        map( cf => this.createComponent( panel, vcr, cf ) ),
        catchError( err => this.logAndThrowError( err ) ) );
  }

  private createComponent( panel:Panel, vcr: ViewContainerRef,
    cf: ComponentFactory<any> ) : ComponentRef<any>{
      vcr.clear();

      return vcr.createComponent(cf, 0, this.extendInjector( panel ));
  }

  private logAndThrowError( err ){

    console.error( err );
    console.error( `[PLE]: ${err.message}` );
    return throwError( err );
  }
}
