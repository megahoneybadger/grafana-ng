import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDataSourceSettingsEditor } from 'common';

@Component({
  selector: 'ds-settings-editor',
  templateUrl: './settings.html'
})
export class RedisSettingsEditorComponent implements IDataSourceSettingsEditor {
	form: FormGroup;

	get url(){
		return this.form.get('url');
	}

	get acl(){
		return this.form.get('acl');
	}
	
	constructor(){
		this.form = new FormGroup({
			'url': new FormControl( null, Validators.required ),
		
			'acl': new FormControl( false ),
			'password': new FormControl( null ),
			'userName': new FormControl( null ),

			'timeout': new FormControl( null ),
			'pingInterval': new FormControl( null ),
			'pipelineWindow': new FormControl( null ),
		});
	}

	onAclChecked( e ){
		if( !e ){
			this.form.controls['userName'].setValue( '' );
		}
	}
}

