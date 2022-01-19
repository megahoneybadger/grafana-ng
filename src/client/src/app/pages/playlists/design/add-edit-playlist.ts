import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base-component';

@Component({
  selector: 'edit-playlist',
  template: `
	<ed-page [navigation]="'playlists'" [disabled]="waiting">
		<design-playlist [edit]="true"></design-playlist>
	</ed-page>`
})
export class EditPlaylistComponent extends BaseComponent {

}

@Component({
  selector: 'edit-playlist',
  template: `
	<ed-page [navigation]="'playlists'" [disabled]="waiting">
		<design-playlist [edit]="false"></design-playlist>
	</ed-page>`
})
export class AddPlaylistComponent extends BaseComponent {

}