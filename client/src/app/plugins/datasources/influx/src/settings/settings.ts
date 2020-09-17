import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ds-settings-editor',
  templateUrl: './settings.html'
})
export class InfluxSettingsEditorComponent{
	form: FormGroup;
	
	constructor(){
		this.form = new FormGroup({
			'database': new FormControl( null, Validators.required ),
			'user': new FormControl( null ),
			'password': new FormControl( null ),
			'minTimeInterval': new FormControl( null )
		});
	}
}