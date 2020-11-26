import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  private dashboardSwitch: BehaviorSubject<Dashboard> = new BehaviorSubject(undefined);
  readonly dashboardSwitch$: Observable<Dashboard> = this.dashboardSwitch.asObservable();

  private panel: BehaviorSubject<Panel> = new BehaviorSubject(null);
  readonly panel$: Observable<Panel> = this.panel.asObservable();

  private dashboardError: BehaviorSubject<Error> = new BehaviorSubject(undefined);
  readonly dashboardError$: Observable<Error> = this.dashboardError.asObservable();

  private panelError: BehaviorSubject<Error> = new BehaviorSubject(undefined);
  readonly panelError$: Observable<Error> = this.panelError.asObservable();

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

    this.dashboardError.next( undefined );
    this.panelError.next( undefined );
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
    this.dashboardError.next( null );
    this.panelError.next( null );

    this.uid = p.uid;
    this.existing = p.existing;
    this.panelId = p.panelId;

    const fetchedDashboard = this.dashboard.value;

    if( !p.uid ){
      if( fetchedDashboard && sameActivity ){
        console.log( `store gets new dashboard from cache` );
        //this._dashboard.next( DashboardResult.success( existing, this.panel ) )
        //this.dashboard.next( fetchedDashboard )
        //this.panel.next( this.selectedPanel );
        if( this.selectedPanel != this.panel.value ){
          this.panel.next( this.selectedPanel );
        }
      } else {
        console.log( "create empty dashboard" )
        this.dashboard.next( new Dashboard() );
        
        if( this.panelId ){
          this.panelError.next( new Error() )
        }
        


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
        this.dashboardSwitch.next( this.dashboard.value );
        console.log( `store loads [${p.uid}] dashboard from server` )
        //this._dashboard.next( undefined );
        //this.dashboard.next( undefined );

        this
          .dbService
          .getDashboard(this.uid)
          .subscribe(
            x => {
              //console.log( x );
              this.dashboard.next( x )
              this.panel.next( this.selectedPanel );  

              if( this.panelId && !this.selectedPanel )   {
                this.panelError.next( new Error() )
              }
              
              // this.timeManager.update( x.time, false );
              // this.updateAllPanelsAlertState();
            },
            e => {
              this.dashboardError.next( e );
              this.dashboard.next( null )
            } );
      }
    }
  }
}