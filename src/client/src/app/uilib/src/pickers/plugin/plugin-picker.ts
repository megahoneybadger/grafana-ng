import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Plugin, PluginHelper, PluginService, PluginStore, PluginType } from 'common';
import { Subscription } from 'rxjs';

import { ErrorMessages } from '../../note/error-messages';
import { Notes } from '../../note/note-dispatcher';


@Component({
  selector: 'ed-plugin-picker',
	templateUrl: './plugin-picker.html',
	styleUrls:[ './plugin-picker.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class PluginPickerComponent {
	_showDropdown: boolean = false;
	plugins: Plugin[];
	filter: string;

	PluginHelperRef = PluginHelper;
	pluginSubs: Subscription;

	@Output() selected = new EventEmitter<Plugin>();

	get showDropdown(): boolean{
		return this._showDropdown;
	}

	set showDropdown( v: boolean ){
		if( v == this._showDropdown ){
			return;
		}

		this._showDropdown = v;
	}

	constructor( private pluginStore: PluginStore ){
		this.pluginSubs = this
			.pluginStore
			.plugins$
			.subscribe( x=> this.plugins = x.filter( x => x.type == PluginType.Widget ) );
	}

	ngOnDestroy(){
		this.pluginSubs?.unsubscribe();
	}
}
