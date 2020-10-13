import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardSearchHelper, DashboardStore, TimeStore } from 'common';
import { ErrorMessages, Notes } from 'uilib';

@Component({
  selector: 'dashboard',
  template: `
    <dashboard-toolbar></dashboard-toolbar>
  `
})
export class DashboardComponent{
  storeSubs: Subscription;
  storeErrorSubs: Subscription;
  
  constructor( 
    private router: Router,
    private store : DashboardStore,
    private time: TimeStore ){

     
  }

  ngOnInit(){
    this.storeSubs = this
      .store
      .dashboard$
      .subscribe( x => {
        if( x ){
          DashboardSearchHelper.addRecent( x.id )
        }
      });

    this.storeErrorSubs = this
      .store
      .error$
      .subscribe( x => {
        if( x ){
          Notes.error( ErrorMessages.BAD_GET_DASHBOARD );
          this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
        }
      } )
  }

  ngOnDestroy(){
    this.storeSubs?.unsubscribe();
    this.storeErrorSubs?.unsubscribe();
  }

  
}
