import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../base/base-component';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { Playlist, PlaylistService, PlaylistStore, Team,  } from 'common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.html',
})
export class PlaylistsComponent extends BaseComponent {
  playlistsRequest: ObservableEx<Playlist[]>
  playlists: Playlist[];
  filter: string;

  constructor( 
    private playlistService: PlaylistService,
    private playlistStore: PlaylistStore,
		public router: Router,
		public activatedRoute: ActivatedRoute ){
			super();
		
  }

  ngOnInit() {
    this.playlistsRequest = new ObservableEx<Playlist[]>(this
			.playlistService
			.getPlaylists()
			.pipe(
				tap(x => this.playlists = [...x])));
  }

	onRemovePlaylist( p: Playlist ){
		this
			.playlistService
			.deletePlaylist(p.id)
			.subscribe(
				x => {
					delete (<any>p).confirmDelete;

					Notes.success(x.message);

					const index = this
						.playlists
						.findIndex(y => p.id == y.id );

					if (-1 !== index) {
						this.playlists.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_PLAYLIST ));
	}


	onStartPlaylist( p: Playlist ){
		this.playlistStore.start( p );
	}

}
