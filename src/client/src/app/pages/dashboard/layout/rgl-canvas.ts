import { ApplicationRef, Component, ComponentFactoryResolver, Injector, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReactGridLayoutStore } from './rgl.store';
import { DashboardStore, RglRect, PanelHelper, PluginActivator,
  Plugin, Panel, BaseDasboardComponent, Dashboard } from 'common';
import { ReactGridLayoutAdapterComponent } from './rgl-adapter';
import { DashboardPanelComponent } from '../panel/panel';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard-canvas',
  providers: [ReactGridLayoutStore],
  styleUrls: ['./rgl-canvas.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div class="rgl-container" id="rgl-host"
   [ngClass]="{'readonly': !canEdit}" ></div>`
})
export class DashboardCanvasComponent extends BaseDasboardComponent {

  prevDashboard: Dashboard;
  attachedPanels = new Map();
	layoutSubs : Subscription;

  get panels(): Panel[]{
    return this.dashboard.data.panels;
  }
 	
	constructor( 
    private resolver: ComponentFactoryResolver,
    private app: ApplicationRef,
    private layout: ReactGridLayoutStore,
    private injector: Injector,
    private router: Router,
    store: DashboardStore ){
      super( store )

      console.log( 'created DashboardCanvasComponent' );
  }

  ngOnInit(){
    
    setTimeout( () => ReactGridLayoutAdapterComponent.create('rgl-host', this.layout) )
  }

  ngOnDestroy() {
    console.log( "destroy DashboardGridLayoutComponent " )
    ReactGridLayoutAdapterComponent.destroy('rgl-host');

    super.ngOnDestroy();
    
    this.destroyPanels();

    this.layoutSubs?.unsubscribe();
  }  

  destroyPanels(){
    this.attachedPanels?.forEach( ( v, k ) => v.destroy() );
  }

  onDashboardSwitch(){
    if( this.attachedPanels?.size ){
      //console.log( "onDashboardSwitch" );
      // Time handler recv new dashboard$ event and updates old widgets before canvas
      // load new dashboard. As a result we send pull requests for almost dead widgets.
      // dashboardSwitch$ event allows to destroy old widgets.

      this.destroyPanels();
    }
  }

  onDashboardReady(){
    if( this.prevDashboard == this.dashboard ){
      return; // we can recv same dashboard twice when navigating existing <-> new
    }

    console.log( this.dashboard );

    this.prevDashboard = this.dashboard;
    this.layoutSubs?.unsubscribe();
    this.destroyPanels();
    this.attachedPanels?.clear();
    this.layout?.clear();
    this.layoutSubs?.unsubscribe();

    this.layoutSubs = this
      .layout
      .changed
      .subscribe( x => this.onLayoutChanged( x ) );
    
    this.layout.init( PanelHelper.toRects( this.dashboard ) );
  }

  onLayoutChanged( panels: RglRect[] ){
    panels.forEach( p => {

      let existingPanel = this.attachedPanels.get( +p.i )?.instance.panel ?? this.attachPanel( p );

      existingPanel.rect = {
        x: p.x,
        y: p.y,
        w: p.w,
        h: p.h
      }
    } )
  }

  attachPanel( pf: RglRect ) {
    const index = this.panels.findIndex( x => x.id == +pf.i );

    if( -1 == index ){
      return;
    } 

    const p = this.panels[ index ];

    const hostElement = document.getElementById( `panel${pf.i}` )

    const factory = this
      .resolver
      .resolveComponentFactory( DashboardPanelComponent );

    const injector = PluginActivator.extendInjector( p, this.injector );
     
    const ref = factory.create(injector, [], hostElement);
    this.app.attachView(ref.hostView);

    this.attachedPanels.set( +pf.i, ref );

    ref
      .instance
      .remove
      .subscribe( x => this.removePanel( p ));

    ref
      .instance
      .duplicate
      .subscribe( x => this.duplicatePanel( p ));

    return p;
  }

  addPanel( p: Plugin ){
    const ids = this.panels.map( x => x.id );
    const nextId = Math.max( 0, ...ids ) + 1;

    const panel = new Panel();
    panel.id = nextId;
    panel.type = p.id; 
    panel.title = `panel #${nextId}`;

    this.panels.push( panel );

    this.layout.add( nextId );
  }

  removePanel( p: Panel ){
    const index = this.panels.indexOf( p );
    this.panels.splice( index, 1 );
    this.layout.remove( p.id );

    const widget = this.attachedPanels.get( p.id );
    this.attachedPanels.delete( p.id );
    widget.destroy();
  }

  duplicatePanel( p: Panel ){
    const copy = _.cloneDeep( p )

    const ids = this.panels.map( x => x.id );
    const nextId = Math.max( 0, ...ids ) + 1;
    copy.id = nextId;

    delete copy.widget.component;

    this.panels.push( copy );
    this.layout.add( nextId ) 
  }
}
