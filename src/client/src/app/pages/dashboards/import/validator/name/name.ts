import { forwardRef, Inject } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DashboardService } from 'common';
import { of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged,
  finalize, first, map, switchMap, tap } from 'rxjs/operators';

import { BaseDashboardPropertyValidator } from '../property-validator';
import { ImportValidationComponent } from '../validation';

@Component({
  selector: 'import-dashboard-name-editor',
  templateUrl: './name.html',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => ImportDashboardNameEditorComponent),  
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => ImportDashboardNameEditorComponent),  
    }
  ]
})
export class ImportDashboardNameEditorComponent extends BaseDashboardPropertyValidator  {

  readonly ERR_NAME_TAKEN  = 'invalidDashboardNameTaken';

  @Input() name: string;

  get formControl(){
    return this.parent.name;
  }

  get folderId(){
    return this.parent.folder.value.id;
  }

  get nameAbsent(){
    return this.formControl.hasError( 'required' );
  }

  get namePresent(){
    return !this.nameAbsent;
  }

  get nameTaken(){
    return this.formControl.hasError( this.ERR_NAME_TAKEN );
  }

  get nameNotTaken(){
    return !this.nameTaken;
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
    this.formControl.setAsyncValidators( this.validateNameTaken() )
  }

  ngAfterViewInit(){
    this.formControl.updateValueAndValidity()
  }

  writeValue(n: string) {
    this.name = n;
  }

  validateNameTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          tap( x => this.validating = true ),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap( _ => this
            .dbService
            .search( `folderIds=${this.folderId}&query=${this.name}` )
            .pipe( 
              finalize( () => this.validating = false ))),
          
          map( searchResults => {
            const filterResult = searchResults.filter( x => x.title == this.name && x.type == "dash-db" )
            return ( 0 != filterResult.length ) ? { [this.ERR_NAME_TAKEN]: true } : null;
          }  ),
          catchError( _ => of( { [this.ERR_BAD_REQUEST]: true } ) ),
          first()); 
          
  }
  
}
