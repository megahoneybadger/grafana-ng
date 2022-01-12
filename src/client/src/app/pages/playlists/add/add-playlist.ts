import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { ErrorMessages, Notes } from 'uilib';
import { Playlist, PlaylistService, TeamService } from 'common';

@Component({
  selector: 'add-playlist',
  templateUrl: './add-playlist.html',
	styleUrls: ['./add-playlist.scss']
})
export class AddPlaylistComponent extends BaseComponent {
  form: FormGroup;
	playlist: Playlist;

  get name() {
		return this.form.get('name');
	}

	get interval() {
		return this.form.get('interval');
  }
  
  constructor( 
		public playlistService: PlaylistService,
		public router: Router ) {
      super();

			this.playlist = {
				id: 0,
				name: "",
				interval: "5m",
				items : [
					{ title: "d1", value:1, order:1 },
					{ title: "d2", value:2, order:2 },
					{ title: "d3", value:3, order:3 },
				]
			};
      
      this.form = new FormGroup({
        'name': new FormControl(this.playlist.name, Validators.required ),
        'interval': new FormControl(this.playlist.interval, Validators.required)
      });
  }
  
  
  
	onSubmit(){
		this.waiting = true

    const payload = {
      ...this.form.value,
      //version: this.folder.version
    }
		
		this
			.playlistService
			.createPlaylist( payload )
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( "Playlist created" );
					this.router.navigate( [`/playlists`] );
				},
				e => Notes.error(	e.error?.message ?? ErrorMessages.BAD_CREATE_PLAYLIST ));
  }
}

