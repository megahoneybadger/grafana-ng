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

			'basicAuthentication': new FormControl( null ),
			'withCredentials': new FormControl( null ),
			'tlsClientAuth': new FormControl( null ),
			'withCaCert': new FormControl( null ),
			'skipTlsVerification': new FormControl( null ),
			
			'database': new FormControl( null, Validators.required ),
			'user': new FormControl( null ),
			'password': new FormControl( null ),
			'minTimeInterval': new FormControl( null )
		});
	}
}