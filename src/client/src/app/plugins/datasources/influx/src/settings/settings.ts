import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDataSourceSettingsEditor } from 'common';

@Component({
  selector: 'ds-settings-editor',
  templateUrl: './settings.html'
})
export class InfluxSettingsEditorComponent implements IDataSourceSettingsEditor {
	form: FormGroup;

	get url(){
		return this.form.get('url');
	}
	
	constructor(){
		this.form = new FormGroup({
			'url': new FormControl( null, Validators.required ),
			'whitelistedCookies': new FormControl( null ),

			'basicAuthentication': new FormControl( false ),
			'withCredentials': new FormControl( false ),
			'tlsClientAuth': new FormControl( false ),
			'withCaCert': new FormControl( false ),
			'skipTlsVerification': new FormControl( false ),
			
			'database': new FormControl( null, Validators.required ),
			'user': new FormControl( null ),
			'password': new FormControl( null ),
			'minTimeInterval': new FormControl( null )
		});
	}
}