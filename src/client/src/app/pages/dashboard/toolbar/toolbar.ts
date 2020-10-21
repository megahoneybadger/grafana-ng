import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardStore, NavigationProvider, UserService, TimeRangeStore } from 'common';
import { ErrorMessages, Notes } from 'uilib';
import { BaseDasboardComponent } from '../base/dashboard-base';

@Component({
  selector: 'dashboard-toolbar',
	templateUrl: './toolbar.html',
	styleUrls:[ './toolbar.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardToolbarComponent extends BaseDasboardComponent {

  showSearch: boolean = false;
  @Input() fullscreen: boolean;
	
  constructor( 
		store: DashboardStore,
    private nav: NavigationProvider,
    private router: Router,
    private activeRoute: ActivatedRoute,
		private userService: UserService ){
      super( store );
  }
  
  onBack(){
    this
      .router
      .navigate(['../../'], { relativeTo: this.activeRoute, queryParamsHandling: "merge" })
  }

	onStar(){
		const id = this.dashboard.id;
    const meta = this.dashboard.meta;

    if( this.dashboard.meta.isStarred ){
      this
        .userService
        .unstarDashboard( id )
        .subscribe( x => {
            Notes.success( x.message ); 
            meta.isStarred = false
          },
          e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UNSTAR_DASHBOARD ));
    } else{ 
      this
        .userService
        .starDashboard( id )
        .subscribe( 
          x => {
            Notes.success( x.message ); 
            meta.isStarred = true;
          }, 
          e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UNSTAR_DASHBOARD ));
      
    }
	}

	onAddPanel(p: Plugin){
		console.log( 'add panel' );
		console.log( p );
	}
}
