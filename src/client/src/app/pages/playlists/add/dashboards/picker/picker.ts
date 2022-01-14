import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { debounceTime, map, tap } from 'rxjs/operators';
import { DashboardRawSearchHit, DashboardService, Playlist,
	SearchFilter, PlaylistItemType } from 'common';
import { fromEvent } from 'rxjs';
import { TagColorHelper } from 'uilib';

@Component({
  selector: 'playlist-dashboards-picker',
  templateUrl: './picker.html',
	styleUrls: ['./picker.scss']
})
export class PlaylistDashboardPickerComponent extends BaseComponent {

	_playlist: Playlist;
	dashboardRows: PlaylistItemRow [];
	tagRows: PlaylistItemRow [];
	TagColorHelperRef = TagColorHelper;

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
	tagMode: boolean = false;
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
    this.searchFilter.query = this.queryTextBox.nativeElement.value;
		this.searchFilter.limit = 20;
    const request = this.searchFilter.request;
   
    this
      .dbService
      .search( request )
			.pipe( 
				map( x => x.filter( y => y.type == 'dash-db' ) ) )
			.subscribe( x => { 
				this.dashboards = [...x];
				this.hidden = [];

				this.convertToRows();

				this.hideSelectedDashboards();
			});
	}

	convertToRows(){
		this.dashboardRows = this.dashboards.map( x => {
			var row = new PlaylistItemRow();
			row.dashboard = x;
			row.type = PlaylistItemRowType.Dashboard 
			return row;
		} )

		var map = new Map<string, number>();

		var tags = this
			.dashboards
			.reduce( (a, b) => a.concat(b.tags), [])
		
		tags.forEach( x => map.set( x, ( map.get( x ) || 0 ) + 1 ));	

		this.tagRows = [];

		for (const [key, value] of map.entries()) {
			var row = new PlaylistItemRow();
			row.tagName = key;
			row.tagCount = value;
			row.type = PlaylistItemRowType.Tag 
			this.tagRows.push( row );
		}

		this.tagRows.sort( (a,b) =>  a.tagName.localeCompare( b.tagName ));
	}

	onToggleStarred(){
		this.searchFilter.starred=!this.searchFilter.starred;
		this.search();
	}

	onToggleTag(){
		this.tagMode = !this.tagMode;
	}

	onPickDashboard( d: DashboardRawSearchHit ){
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

	onPickTag( o: any ){
		console.log( "onPickTag" );
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

export enum PlaylistItemRowType{
	Dashboard,
	Tag
}

export class PlaylistItemRow{
	type: PlaylistItemRowType;
	dashboard: DashboardRawSearchHit;
	tagName: string;
	tagCount: number;

	get tagText(){
		return `${this.tagName} (${this.tagCount})`
	}
}

