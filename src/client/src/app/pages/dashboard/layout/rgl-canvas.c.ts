import { ApplicationRef, Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReactGridLayoutStore } from './rgl.store';
import { DashboardStore, IRglRect, PanelHelper, TimeRangeStore } from 'common';
import { ReactGridLayoutAdapterComponent } from './rgl-adapter';
import { BaseDasboardComponent } from '../base/dashboard-base';
import { DashboardPanelComponent } from '../panel/panel';

@Component({
  selector: 'dashboard-canvas',
  providers: [ReactGridLayoutStore],
  template: `<div class="rgl-container" id="rgl-host" ></div>`
})
export class DashboardCanvasComponent extends BaseDasboardComponent {

  attachedPanels = new Map();

	layoutSubs : Subscription;

	get editable(){
    //return this.dashboard && this.dashboard.editable;
    return true;
  }
 	
	constructor( 
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private layout: ReactGridLayoutStore,
    store: DashboardStore,
    time: TimeRangeStore ){
      super( store, time )
  }

  ngOnInit(){
    ReactGridLayoutAdapterComponent.create('rgl-host', this.layout)
  }

  ngOnDestroy() {
    console.log( "destroy DashboardGridLayoutComponent" )
    ReactGridLayoutAdapterComponent.destroy('rgl-host');
    
    this.dashboardStoreSubs?.unsubscribe();
    this.timeStoreSubs?.unsubscribe();
    this.layoutSubs?.unsubscribe();

    this.attachedPanels.forEach( ( v, k ) => v.destroy() );
  }  

  onDashboardReady(){
    this.attachedPanels.forEach( ( v, k ) => v.destroy() );
    this.attachedPanels.clear();
    this.layout.clear();
    this.layoutSubs?.unsubscribe();

    this.layoutSubs = this
      .layout
      .changed
      .subscribe( x => this.onLayoutChanged( x ) );
    
    this.layout.init( PanelHelper.toRects( this.dashboard ) );
  }

  onLayoutChanged( panels: IRglRect[] ){
    // if( !this.dashboard ){
    //   return;
    // }

    panels.forEach( p => {
      // if( +p.i >= 2 )
      //   return;

      let existingPanel = this.attachedPanels.get( +p.i )?.instance.panel ?? this.attachPanel( p );

      //existingPanel.rect = new PanelRect( p.x, p.y, p.w, p.h );
    } )
  }

  attachPanel( pf: IRglRect ) {
    //console.log( "attach panel" );

    const dbPanels = this
      .dashboard
      .data
      .panels;

    const index = dbPanels.findIndex( x => x.id == +pf.i );
    let p;

    if( -1 == index ){
      //p = new Panel(PanelType.CartesianChart, +pf.i)
      //p.widget.info.title = `panel #${+pf.i}`
      dbPanels.push( p );
    } else {
      p = dbPanels[ index ];
    }

    let factory = this
      .resolver
      .resolveComponentFactory( DashboardPanelComponent );

    const hostElement = document.getElementById( `panel${pf.i}` )

    const ref = factory.create(this.injector, [], hostElement);
    this.app.attachView(ref.hostView);

    ref.instance.createContent( p );
   
    this.attachedPanels.set( +pf.i, ref );

    // ref
    //   .instance
    //   .removed
    //   .subscribe( () => this.removePanel( p ));

    return p;
  }
}
