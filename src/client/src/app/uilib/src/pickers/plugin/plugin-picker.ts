import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Plugin, PluginHelper, PluginService, PluginType } from 'common';

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

	@Output() selected = new EventEmitter<Plugin>();

	get showDropdown(): boolean{
		return this._showDropdown;
	}

	set showDropdown( v: boolean ){
		if( v == this._showDropdown ){
			return;
		}

		this._showDropdown = v;

		if( v ){
			this
				.pluginService
				.getPlugins( PluginType.Widget )
				.subscribe( 
					x => this.plugins = x,
					_ => Notes.error( ErrorMessages.BAD_GET_PLUGINS ) )
		}
	}

	constructor( private pluginService: PluginService ){
		
	}
}
