import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dashboard, DashboardRouteChange, Panel } from './dashboard.m';
import { DashboardService } from './dashboard.s';

@Injectable()
export class DashboardStore {
  static readonly ROOT_MANAGEMENT = '/dashboards';

  uid: string;
  private panelId : number; 
  private existing: boolean;

  private dashboard: BehaviorSubject<Dashboard> = new BehaviorSubject(undefined);
  readonly dashboard$: Observable<Dashboard> = this.dashboard.asObservable();

  private panel: BehaviorSubject<Panel> = new BehaviorSubject(null);
  readonly panel$: Observable<Panel> = this.panel.asObservable();

  private error: BehaviorSubject<Error> = new BehaviorSubject(undefined);
  readonly error$: Observable<Error> = this.error.asObservable();

  private get selectedPanel(){
    return this
      .dashboard
      .value
      .data
      ?.panels
      .find( p => p.id == this.panelId );
  }

  constructor( private dbService: DashboardService ){
    console.log( 'created DashboardStore' );

    dbService
      .listenRouteChange()
      .subscribe( p => {
        if( p.existing === undefined ){
          this.clear();
        } else { 
          this.load( p );
        } 
      } )
  }

  private clear(){
    
    this.uid = undefined;
    this.existing = undefined;
    this.panelId = undefined;

    if( this.dashboard.value ){
      console.log( "dashboard store cleared" );
      this.dashboard.next( undefined );
    }

    if( this.panel.value ){
      this.panel.next( undefined );
    }

    this.error.next( undefined );
  }

  reload(){
    const uid = this.dashboard.value.uid;

    this.clear();

    this.load( {
      uid: uid,
      existing: true
    } )
  }

  private load(p: DashboardRouteChange) {
    const sameActivity = ( p.existing == this.existing );

    //console.log( p )
    this.error.next( null );

    this.uid = p.uid;
    this.existing = p.existing;
    this.panelId = p.panelId;

    const fetchedDashboard = this.dashboard.value;

    if( !p.uid ){
      if( fetchedDashboard && sameActivity ){
        console.log( `store gets new dashboard from cache` );
        //this._dashboard.next( DashboardResult.success( existing, this.panel ) )
        this.dashboard.next( fetchedDashboard )
        this.panel.next( this.selectedPanel );
      } else {
        console.log( "create empty dashboard" )
        // const d = new Dashboard();
        // d.title = "New dashboard";
        // this._dashboard.next( DashboardResult.success( d, this.panel ) );
        // this.timeManager.update( d.time, false );
        //console.log( d );
      }
    } else {
      if( p.uid == fetchedDashboard?.uid ){
        console.log( `store gets [${p.uid}] dashboard from cache` );

        if( this.selectedPanel != this.panel.value ){
          this.panel.next( this.selectedPanel );
        }
        
        //this._dashboard.next( DashboardResult.success( existing, this.panel ) )
        //this.dashboard.next( fetchedDashboard )
      } else {
        console.log( `store loads [${p.uid}] dashboard from server` )
        //this._dashboard.next( undefined );

        this
          .dbService
          .getDashboard(this.uid)
          .subscribe(
            x => {
              this.dashboard.next( x )
              this.panel.next( this.selectedPanel );  
              
              // this.timeManager.update( x.time, false );
              // this.updateAllPanelsAlertState();
            },
            e => {
              this.error.next( e );
              this.dashboard.next( null )
            } );
      }
    }
  }
}