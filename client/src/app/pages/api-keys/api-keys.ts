import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ApiKeysService } from 'src/app/core/services/api-keys.s';
import { tap, finalize } from 'rxjs/operators';
import { ErrorMessages, Notes, ObservableEx } from 'uilib2';

import { ApiKey } from 'src/app/core/models/api-keys';

@Component({
  selector: 'api-keys',
  templateUrl: './api-keys.html',
})
export class ApiKeysComponent extends BaseComponent {
  keysRequest: ObservableEx<ApiKey[]>;
  keys: ApiKey[];
  filter: string;

  showAddKeyBand: boolean;
  showAddKeyBandEmpty : boolean;
    
  constructor(private keyService: ApiKeysService){
    super();
  }

  ngOnInit(){
    this.keysRequest = new ObservableEx( this
			.keyService
			.getApiKeys()
			.pipe(
        tap(x => this.keys = [...x] )) );
  }

  onCloseAddBand(key: ApiKey){
    this.showAddKeyBand = this.showAddKeyBandEmpty = false;

    if(key){
      this.keys.push( key )
    }
  }
  
 
  onRemoveKey(key: ApiKey) {
    this.waiting = true;
   
		this
      .keyService
      .delete(key.id)
      .pipe(
        finalize( () => this.waiting = false ))
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
  
  onTryAddKey(){
    console.log( 'onTryAddKey' )
  }
}
