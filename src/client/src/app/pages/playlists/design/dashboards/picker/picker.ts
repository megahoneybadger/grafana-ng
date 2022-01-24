import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { debounceTime, map, tap } from 'rxjs/operators';
import { DashboardService, Playlist, SearchFilter,
	PlaylistItemType, PlaylistItem } from 'common';
import { fromEvent } from 'rxjs';
import { PlaylistItemRow, PlaylistItemRows } from './picker.m';

@Component({
  selector: 'playlist-dashboards-picker',
  templateUrl: './picker.html',
	styleUrls: ['./picker.scss']
})
export class PlaylistDashboardPickerComponent extends BaseComponent {

	_playlist: Playlist;
	rows = new PlaylistItemRows();
	
	searchFilter = new SearchFilter();
	@ViewChild('tbQuery') queryTextBox: ElementRef;

	@Output() pick = new EventEmitter<PlaylistItem>();

	get playlist(){
		return this._playlist;
	}

	@Input() set playlist( p : Playlist ){
		this._playlist = p;
		this.hidePickedRows();
	}
  
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
    .subscribe( _ => this.search()  );

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
				this.rows.update( [...x] );
				this.hidePickedRows();
			});
	}

	private hidePickedRows(){
		this
			?.playlist
			?.items
			?.forEach( x => this.rows?.hide( x ) );
	}

	onPick( r: PlaylistItemRow ){
		event.stopPropagation();
		
		this.rows.pick( r );

		this.playlist.items = this.playlist.items ?? [];
		const items = this.playlist.items;
		const order = ( items.length ) ? Math.max( ...items.map( x => x.order )) : 0;

		const isDashboard = r.type == PlaylistItemType.Id;

		this.pick.emit( {
			title: isDashboard ? r.dashboard.title : r.tagName,
			value: isDashboard ? r.dashboard.id.toString() : r.tagName,
			type: r.type,
			order: order + 1
		} );
	}

	push( r: PlaylistItem ){
		this.rows.push( r );
	}
}

