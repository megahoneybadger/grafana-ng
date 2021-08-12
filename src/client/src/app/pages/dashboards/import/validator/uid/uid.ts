import { forwardRef, Inject } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dashboard, DashboardService } from 'common';
import { of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged,
  finalize, first, map, switchMap, tap } from 'rxjs/operators';

import { BaseDashboardPropertyValidator } from '../property-validator';
import { ImportValidationComponent } from '../validation';

@Component({
  selector: 'import-dashboard-uid-editor',
  templateUrl: './uid.html',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => ImportDashboardUidEditorComponent),  
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => ImportDashboardUidEditorComponent),  
    }
  ]
})
export class ImportDashboardUidEditorComponent extends BaseDashboardPropertyValidator  {

  readonly ERR_UID_TAKEN  = 'invalidDashboardUidTaken';

  @Input() uid: string;
  existingDashboard: Dashboard;

  get formControl(){
    return this.parent.uid;
  }

  get folderId(){
    return this.parent.folder.value.id;
  }

  get uidTaken(){
    return this.formControl.hasError( this.ERR_UID_TAKEN );
  }

  get uidNotTaken(){
    return !this.uidTaken;
  }

  get badRequest(){
    return this.formControl.hasError( this.ERR_BAD_REQUEST );
  }

  get okRequest(){
    return !this.badRequest;
  }
  

  constructor( public dbService: DashboardService,
    @Inject(ImportValidationComponent) private parent: ImportValidationComponent ) {
      super();
    
  }

  ngOnInit(){
    this.validating = true;
    this.formControl.setAsyncValidators( this.validateUidTaken() )
  }

  ngAfterViewInit(){
    this.formControl.updateValueAndValidity()
  }

  writeValue(n: string) {
    this.uid = n;
  }

  validateUidTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          tap( x => {
            this.validating = true;
            this.existingDashboard = null;
          } ),
          switchMap( value => this
            .dbService
            .getDashboard( value )
            .pipe( 
              finalize( () => this.validating = false ))),
          map( db => {
            this.existingDashboard = db;
            console.log( this.existingDashboard );
            return db ? { [this.ERR_UID_TAKEN]: true } : null 
          } ),
          catchError( e => ( e.status == 404 ) ? of( null ) : of( { [this.ERR_BAD_REQUEST]: true } )   ),
          first() ); 
  }

  onChangeUid(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    this.formControl.setValue( result )
  }
  
}
