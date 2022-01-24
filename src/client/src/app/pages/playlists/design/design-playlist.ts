import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { Playlist, PlaylistService, TimeRangeParser } from 'common';

@Component({
  selector: 'design-playlist',
  templateUrl: './design-playlist.html',
	styles: [`
		.playlist-description {
			width: 555px;
			margin-bottom: 20px;
		}`
	]
})
export class DesignPlaylistComponent extends BaseComponent {

	id: number;
  form: FormGroup;
	playlist: Playlist;

	@Input() edit: boolean = false;

  get name() {
		return this.form.get('name');
	}

	get interval() {
		return this.form.get('interval');
  }

	get viewer() {
		return this.form.get('viewer');
  }
  
  constructor( 
		public playlistService: PlaylistService,
		public activatedRoute: ActivatedRoute,
		public router: Router ) {
      super();

			this.playlist = {
				id: 0,
				name: "",
				interval: "5m",
				items: []
			};
      
      this.form = new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'interval': new FormControl( null, [Validators.required,this.validateTime.bind( this )] ),
				'viewer': new FormControl( null ),
      });
  }

	ngOnInit(){
		if( this.edit ){
			this.ngOnInitEdit();
		} else {
			this.ngOnInitAdd();
		}
	}

	ngOnInitAdd(){
		this.form.patchValue( {
			interval: this.playlist.interval
		} )
	}

	ngOnInitEdit(){
		this.id = +this
			.activatedRoute
			.snapshot
			.params[ 'id' ];  

		this
			.playlistService
			.getPlaylist( this.id )
			.subscribe( 
				x => {
					this.playlist = x;

					this.form.patchValue( {
						name: x.name,
						interval: x.interval,
						items: x.items
					} )
				},
				e => {
					Notes.error( e.error?.message ?? ErrorMessages.BAD_GET_PLAYLIST );
					this.router.navigate( [`/playlists`] );
				});
	}

	onSubmit(){
		this.waiting = true

		const payload = {
			name: this.name.value,
			interval: this.interval.value,
			items: this.viewer.value
		}

		var service = this.playlistService;

		const request = ( this.edit ) ? 
			service.updatePlaylist( this.id, payload ) :
			service.createPlaylist( payload );

		const successMessage = ( this.edit ) ?
			"Playlist updated" : "Playlist created";

		const errorMessage = ( this.edit ) ? 
			ErrorMessages.BAD_UPDATE_PLAYLIST :
			ErrorMessages.BAD_CREATE_PLAYLIST;

			request
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( successMessage );
					this.router.navigate( [`/playlists`] );
				},
				e => Notes.error(	e.error?.message ?? errorMessage ));
	}

	validateTime(c: FormControl) {
    if( !c.value ){
      return null;
    }

    const v = `now - ${c.value}`

		const interval = TimeRangeParser.toMilliseconds( c.value );

    return ( TimeRangeParser.isValid( v ) && interval > 0 ) ?  null : { invalidTime: true }
  }
}

