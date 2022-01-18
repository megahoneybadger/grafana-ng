import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { DashboardRawSearchHit, DashboardService, Playlist,
	PlaylistItem,	PlaylistItemType,	SearchFilter } from 'common';

@Component({
  selector: 'playlist-dashboards-viewer',
  templateUrl: './viewer.html',
	styleUrls: ['./viewer.scss']
})
export class PlaylistDashboardViewerComponent extends BaseComponent {

	@Input() playlist: Playlist;
	@Output() remove = new EventEmitter<PlaylistItem>();

	PlaylistItemTypeRef = PlaylistItemType;
  
  constructor( 
		private dbService: DashboardService,
		public router: Router ) {
      super();
  }

	onUp( item: PlaylistItem ){
		const index = this
			.playlist
			.items
			.indexOf( item );

		const itemOrder = item.order;
		item.order = this.playlist.items[ index - 1 ].order;
		this.playlist.items[ index - 1 ].order = itemOrder;

		this
			.playlist
			.items
			.splice( index, 1 );

		this
			.playlist
			.items
			.splice( index - 1, 0, item );
	}

	onDown( item: PlaylistItem ){
		const index = this
			.playlist
			.items
			.indexOf( item );

		const itemOrder = item.order;
		item.order = this.playlist.items[ index + 1 ].order;
		this.playlist.items[ index + 1 ].order = itemOrder;

		this
			.playlist
			.items
			.splice( index, 1 );

		this
			.playlist
			.items
			.splice( index + 1, 0, item );
	}

	onDelete( item: PlaylistItem ){
		const index = this
			.playlist
			.items
			.findIndex(y => item.value == y.value );

		if (-1 !== index) {
			this.playlist.items.splice(index, 1);
		}

		this.remove.emit( item );
	}

}

