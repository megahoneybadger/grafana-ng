import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { debounceTime, filter, finalize, map, tap } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { DashboardRawSearchHit, DashboardService, Playlist,
	SearchFilter, TeamService } from 'common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'playlist-dashboards-picker',
  templateUrl: './picker.html',
	styleUrls: ['./picker.scss']
})
export class PlaylistDashboardPickerComponent extends BaseComponent {

	@Input() playlist: Playlist;
	dashboards: DashboardRawSearchHit[];
	
	searchFilter = new SearchFilter();
	@ViewChild('tbQuery') queryTextBox: ElementRef;
  
  constructor( 
		private dbService: DashboardService,
		public router: Router ) {
      super();
  }

	ngOnInit(){
		// this.dashboardRequest = new ObservableEx<DashboardRawSearchHit[]>(this
		// 	.dbService
		// 	.search( 'limit=20&query=&starred=false&type=dash-db' )
		// 	.pipe( 
		// 		map( x => x.filter( y => y.type == 'dash-db' ) ),
		// 		tap( x => this.dashboards = [...x]) ) );
			
	}

	ngAfterViewInit(){
    fromEvent(this.queryTextBox.nativeElement, 'keyup')
    .pipe(
      map((event:any) => event.target.value ),
      debounceTime(500),
      tap( x => this.searchFilter.query = x ) )
    .subscribe( q => this.search()  );

		this.search();
	}

	search(){
    // if( this.searchFilter.empty ){
		// 	this.searchDefault();
    // } else {
      
    // }
		this.searchByFilter()
	}

	searchByFilter(){
    this.searchFilter.query = this.queryTextBox.nativeElement.value;
		this.searchFilter.limit = 20;
    const request = this.searchFilter.request;
   
    this
      .dbService
      .search( request )
			.pipe( 
				map( x => x.filter( y => y.type == 'dash-db' ) ) )
			.subscribe( x => this.dashboards = [...x]) ;
	}

	onChangeStarred(){
		this.searchFilter.starred=!this.searchFilter.starred;
		this.search();
	}

	onAddDashboard( d: DashboardRawSearchHit ){
		event.stopPropagation();
		console.log( d );

		this.playlist.items.push( {
			title: d.title,
			value: d.id,
			order: 1
		} )

		const index = this
			.dashboards
			.findIndex(y => d.id == y.id );

		if (-1 !== index) {
			this.dashboards.splice(index, 1);
		}
	}

	restore( id: number ){
		console.log( 'should add dashboard back' );
	}
}

