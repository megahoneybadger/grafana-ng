import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { ApiKeysService } from 'src/app/core/services/api-keys.s';
import { tap, finalize } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { ApiKey } from 'src/app/core/models/api-keys';
import { DropDownComponent } from 'src/app/uilib/dropdown/dropdown';
import { Role } from 'src/app/core/models/settings';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'apy-keys',
  templateUrl: './api-keys.html',
  providers:[
    ApiKeysService
  ]
})
export class ApiKeysComponent extends BaseComponent {
  keysRequest: ObservableEx<ApiKey[]>;
  keys: ApiKey[];
  filter: string;

  showAddKeyBand: boolean = true;
  availableRoles = DropDownComponent.wrapEnum( Role );

  form: FormGroup;

  isApiKeyReportOpened: boolean = true;
  reportSecretKey: string;
  jwtHelper = new JwtHelperService();

  get name() {
		return this.form.get('name');
	}

	get role() {
		return this.form.get('role');
  }
  
  constructor(private keyService: ApiKeysService){
    super();

    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required ),
      'role': new FormControl( Role.Editor, Validators.required)
    });
  }

  ngOnInit(){
		this.keysRequest = new ObservableEx( this
			.keyService
			.getApiKeys()
			.pipe(
        tap(x => this.keys = [...x])) );
  }

  onAddKey(){
    this.waiting = true;

    console.log( this.form.value );

		this
			.keyService
			.create( this.form.value )
			.pipe(
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					this.reportSecretKey = x.key;
					this.isApiKeyReportOpened = true;

          const decodedToken = this.jwtHelper.decodeToken( x.key )
          
          console.log( x );

					this.keys.push( {
						name: x.name,
						id: x.id,
						role: Role[ decodedToken.r as keyof typeof Role ] 
					} )

					this.form.reset();
					this.showAddKeyBand = false;
					
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_KEY ));
  }

  onCloseReport(){
		this.isApiKeyReportOpened = false;
		this.reportSecretKey = '';
	}
  
  onRemoveKey(key: ApiKey) {
    //this.waiting = true;
   
		this
      .keyService
      .delete(key.id)
      // .pipe(
      //   finalize( () => this.waiting = false ))
      .subscribe(
        x => {
          delete (<any>key).confirmDelete;
          Notes.success(x.message);

          const index = this
            .keys
            .findIndex(y => key.id == y.id );

          if (-1 !== index) {
            this.keys.splice(index, 1);
          }
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_KEY ))
	}
}
