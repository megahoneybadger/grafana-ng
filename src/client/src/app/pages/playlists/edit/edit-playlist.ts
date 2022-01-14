import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { ErrorMessages, Notes } from 'uilib';
import { Playlist, PlaylistService, TeamService } from 'common';

@Component({
  selector: 'edit-playlist',
  templateUrl: './edit-playlist.html',
	styleUrls: ['./edit-playlist.scss']
})
export class EditPlaylistComponent extends BaseComponent {

	id: number;
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
		public activatedRoute: ActivatedRoute,
		public router: Router ) {
      super();
      
      this.form = new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'interval': new FormControl( null, Validators.required)
      });
  }

	ngOnInit(){

		this.id = +this
			.activatedRoute
			.snapshot
			.params['id'];  

		this
			.playlistService
			.getPlaylist( this.id )
			.subscribe( 
				x => {
					this.playlist = x;

					this.form.patchValue( {
						name: x.name,
						interval: x.interval
					} )
				},
				err => {
					Notes.error( ErrorMessages.BAD_GET_PLAYLIST );
					this.router.navigate( [`/playlists`] );
				});
	}
  
	onSubmit(){
		this.waiting = true

		const payload = {
			...this.form.value,
			items: this.playlist.items ?? []
		}
		
		this
			.playlistService
			.updatePlaylist( this.id, payload )
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( "Playlist updated" );
					this.router.navigate( [`/playlists`] );
				},
				e => Notes.error(	e.error?.message ?? ErrorMessages.BAD_UPDATE_PLAYLIST ));
  }
}

