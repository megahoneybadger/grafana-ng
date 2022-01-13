import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { debounceTime, filter, finalize, map, tap } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { DashboardRawSearchHit, DashboardService, Playlist,
	SearchFilter, PlaylistItemType } from 'common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'playlist-dashboards-picker',
  templateUrl: './picker.html',
	styleUrls: ['./picker.scss']
})
export class PlaylistDashboardPickerComponent extends BaseComponent {

	_playlist: Playlist;

	get playlist(){
		return this._playlist;
	}

	@Input() set playlist( p : Playlist ){
		this._playlist = p;
		this.hideSelectedDashboards();
	}

	dashboards: DashboardRawSearchHit[];
	hidden: DashboardRawSearchHit[] = [];
	
	searchFilter = new SearchFilter();
	@ViewChild('tbQuery') queryTextBox: ElementRef;
  
  constructor( 
		private dbService: DashboardService,
		public router: Router ) {
      super();
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
			.subscribe( x => { 
				this.dashboards = [...x]
				this.hideSelectedDashboards();
			});
	}

	onChangeStarred(){
		this.searchFilter.starred=!this.searchFilter.starred;
		this.search();
	}

	onAddDashboard( d: DashboardRawSearchHit ){
		event.stopPropagation();
		
		this.hidden.push( d );

		this.playlist.items = this.playlist.items ?? [];
		const items = this.playlist.items;
		const order = ( items.length ) ? Math.max( ...items.map( x => x.order )) : 0;

		this.playlist.items.push( {
			title: d.title,
			value: d.id,
			type: PlaylistItemType.id,
			order: order + 1
		} )

		const index = this
			.dashboards
			.findIndex(y => d.id == y.id );

		if (-1 !== index) {
			( <any>d ).index = index;
			this.dashboards.splice(index, 1);
		}
	}

	hideSelectedDashboards(){
		if(!this.dashboards){
			return
		}

		this
			.playlist
			?.items
			?.forEach( x => {
				const index = this
					.dashboards
					.findIndex(y => +x.value == y.id );

				if (-1 !== index) {
					const d = this.dashboards[ index ];
					( <any>d ).index = index;
					this.dashboards.splice(index, 1);

					this.hidden.push( d );
				}
		});
	}

	restoreDeselectedDashboard( id: number ){
		const index = this
			.hidden
			.findIndex( x => id == x.id );

		if (-1 !== index) {
			const d = this.hidden[ index ];
			this.hidden.splice(index, 1);
			this.dashboards.splice( ( <any>d ).index, 0, d );
		}	
	}
}

