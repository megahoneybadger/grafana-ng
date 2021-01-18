import { Component, EventEmitter, Output } from '@angular/core';

import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BaseComponent } from '../../base/base-component';
import { ErrorMessages, Notes } from 'uilib';
import { DropDownComponent } from 'uilib';
import { ApiKey, Role, ApiKeysService } from 'common';

@Component({
  selector: 'add-api-key',
  templateUrl: './add-api-key.html',
  styleUrls:[ 'add-api-key.scss']
})
export class AddApiKeyComponent extends BaseComponent{

  @Output() close = new EventEmitter<ApiKey>();

  isReportOpen: boolean;
  secretKey: string;

  form: FormGroup;
  availableRoles = DropDownComponent.wrapEnum( Role );

  newKey: ApiKey;
  baseUrl: string;

  get name() {
		return this.form.get('name');
	}

	get role() {
		return this.form.get('role');
  }
  
  constructor(private keyService: ApiKeysService){
    super();

    const parsedUrl = new URL(window.location.href);
    this.baseUrl = parsedUrl.origin;

    this.form = new FormGroup({
      'name': new FormControl( null, Validators.required ),
      'role': new FormControl( Role.Editor, Validators.required)
    });

    
  }

 

  onAddKey(){
    this.waiting = true;

		this
			.keyService
			.create( this.form.value )
			.pipe(
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					this.secretKey = x.key;
          this.isReportOpen = true;
          
          const decodedToken = new JwtHelperService().decodeToken( x.key )

          this.newKey = {
						name: x.name,
						id: x.id,
						role: Role[ decodedToken.r ] 
					}

					this.form.reset();
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_KEY ));
  }
}
