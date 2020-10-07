import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Dashboard } from 'src/app/common/src/public-api';
import { UserService } from '../user/user.s';
import { DashboardService } from './dashboard.s';

@Injectable()
export class DashboardStore {
  static readonly ROOT_MANAGEMENT = '/dashboards';

  uid: string;
  panelId : number; 
  existing: boolean;

  private dashboard: BehaviorSubject<Dashboard> = new BehaviorSubject(undefined);
  public readonly dashboard$: Observable<Dashboard> = this.dashboard.asObservable();

  private error: BehaviorSubject<Error> = new BehaviorSubject(undefined);
  public readonly error$: Observable<Error> = this.error.asObservable();

  constructor(
    private dbService: DashboardService,
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute ){
      console.log( 'created DashboardStore' );

      this.analyzeRoute()
    }

  analyzeRoute(){
    this
      .router
      .events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.activeRoute),
        map(route => {
          let uid: string;
          let existing: boolean;
          let panel: number;

          while (route.firstChild ) {
            route = route.firstChild;

            uid = uid ?? route.snapshot.params[ "uid" ];
            existing = existing ?? route.snapshot.data.existing;
            const p = +route.snapshot.params['panelId'];

            if( Number.isInteger( p ) ){
              panel = p;
            }
          }

          return {
            uid, existing, panel
          };
        }))
      .subscribe( x => {
        const { uid, panel, existing } = x;

        if( existing === undefined ){
          this.clear();
        } else { 
          this.loadDashboard(uid, existing, panel);
        } 
      } );
  }

  clear(){
    if( this.dashboard.getValue() ){
      console.log( "dashboard store cleared" );
      this.uid = undefined;
      this.existing = undefined;
      this.panelId = undefined;
      this.dashboard.next( undefined );
      //this._time.next( undefined );
    }
  }

  loadDashboard(uid: string, existing: boolean, panel = undefined) {
    const sameActivity = ( existing == this.existing );

    this.uid = uid;
    this.existing = existing;
    this.panelId = panel;

    const fetchedDashboard = this.dashboard.value;

    if( !uid ){
      if( fetchedDashboard && sameActivity ){
        console.log( `store gets new dashboard from cache` );
        //this._dashboard.next( DashboardResult.success( existing, this.panel ) )
        this.dashboard.next( fetchedDashboard )
      } else {
        console.log( "create empty dashboard" )
        // const d = new Dashboard();
        // d.title = "New dashboard";
        // this._dashboard.next( DashboardResult.success( d, this.panel ) );
        // this.timeManager.update( d.time, false );
        //console.log( d );
      }
    } else {
      if( uid == fetchedDashboard?.uid ){
        console.log( `store gets [${uid}] dashboard from cache` );
        //this._dashboard.next( DashboardResult.success( existing, this.panel ) )
        this.dashboard.next( fetchedDashboard )
      } else {
        console.log( `store loads [${uid}] dashboard from server` )
        //this._dashboard.next( undefined );

        this.error.next( null );

        this
          .dbService
          .getDashboard(this.uid)
          .subscribe(
            x => {
              // const panel = x.panels.find( p => p.id == this.panelId );
              this.dashboard.next( x )
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