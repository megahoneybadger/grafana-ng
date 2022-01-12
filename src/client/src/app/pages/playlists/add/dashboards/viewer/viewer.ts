import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { DashboardRawSearchHit, DashboardService, Playlist,	PlaylistItem,	SearchFilter } from 'common';

@Component({
  selector: 'playlist-dashboards-viewer',
  templateUrl: './viewer.html',
	styleUrls: ['./viewer.scss']
})
export class PlaylistDashboardViewerComponent extends BaseComponent {

	@Input() playlist: Playlist;
	dashboards: DashboardRawSearchHit[];
	
	searchFilter = new SearchFilter();
	@ViewChild('tbQuery') queryTextBox: ElementRef;

	@Output() remove = new EventEmitter<number>();
  
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

	onRemoveItem( item: PlaylistItem ){

		const index = this
			.playlist
			.items
			.findIndex(y => item.value == y.value );

		if (-1 !== index) {
			this.playlist.items.splice(index, 1);
		}

		this.remove.emit( item.value );
	}

}

