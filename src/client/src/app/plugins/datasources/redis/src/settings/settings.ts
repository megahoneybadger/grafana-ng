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

	get address(){
		return this.form.get('address');
	}

	get type(){
		return this.form.get('type');
	}

	get acl(){
		return this.form.get('acl');
	}

	availableConnectionTypes = DropDownComponent.wrapEnum( RedisConnectionType );
  RedisConnectionTypeRef = RedisConnectionType;
	
	constructor(){
		this.form = new FormGroup({
			'type': new FormControl( RedisConnectionType.Standalone ),
			'address': new FormControl( null, Validators.required ),
		
			'acl': new FormControl( false ),
			'password': new FormControl( null ),
			'userName': new FormControl( null ),
			'poolSize': new FormControl( null ),
			'masterName': new FormControl( null ),

			'timeout': new FormControl( null ),
			'ping': new FormControl( null ),
			'pipeline': new FormControl( null ),
			
			

		
		});
	}
}

export enum RedisConnectionType{
	Standalone = "standalone",
	Cluster = "cluster",
	Sentinel = "sentinel",
	Socket = "socket"
}