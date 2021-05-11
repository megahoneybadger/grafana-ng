import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDataSourceSettingsEditor } from 'common';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'ds-settings-editor',
  templateUrl: './settings.html'
})
export class RedisSettingsEditorComponent implements IDataSourceSettingsEditor {
	form: FormGroup;

	get url(){
		return this.form.get('url');
	}

	get target(){
		return this.form.get('target');
	}

	get acl(){
		return this.form.get('acl');
	}

	availableConnectionTypes = DropDownComponent.wrapEnum( RedisConnectionType );
  RedisConnectionTypeRef = RedisConnectionType;
	
	constructor(){
		this.form = new FormGroup({
			'target': new FormControl( RedisConnectionType.Standalone ),
			'url': new FormControl( null, Validators.required ),
		
			'acl': new FormControl( false ),
			'password': new FormControl( null ),
			'userName': new FormControl( null ),
			'poolSize': new FormControl( null ),
			'masterName': new FormControl( null ),

			'timeout': new FormControl( null ),
			'pingInterval': new FormControl( null ),
			'pipelineWindow': new FormControl( null ),
			
			

		
		});
	}
}

export enum RedisConnectionType{
	Standalone = "standalone",
	Cluster = "cluster",
	Sentinel = "sentinel",
	Socket = "socket"
}