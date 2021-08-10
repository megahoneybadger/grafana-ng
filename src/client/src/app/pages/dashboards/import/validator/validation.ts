import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Dashboard, DashboardService } from 'common';
import { of, throwError } from 'rxjs';


import { catchError, debounceTime, distinctUntilChanged, finalize, first, map, switchMap, tap } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { BaseComponent } from '../../../base/base-component';

@Component({
  selector: 'import-dashboard-validation',
  templateUrl: './validation.html'
})
export class ImportValidationComponent extends BaseComponent {

  form: FormGroup;
  @Input() dashboard: Dashboard;
  @Output() close = new EventEmitter();

  checkingNameTaken: boolean = false;
  checkingUidTaken: boolean = false;
  saving: boolean = false;

  get name() {
		return this.form.get('name');
	}

  get uid() {
		return this.form.get('uid');
	}

  get folder(){
    return this.form.get('folder');
  }

  get isDashboardNameAbsent(){
    return this.name.hasError( 'required' );
  }

  get isDashboardNameExists(){
    return !this.isDashboardNameAbsent;
  }

  get isFolderNameAbsent(){
    return this.folder.hasError( 'required' );
  }

  get isFolderNameExists(){
    return !this.isFolderNameAbsent;
  }

  get isDashboardNameTaken(){
    return this.name.hasError( 'invalidDashboardNameTaken' );
  }

  get isDashboardNameNotTaken(){
    return !this.isDashboardNameTaken;
  }

  get isDashboardUidTaken(){
    return this.uid.hasError( 'invalidDashboardUidTaken' );
  }

  get isDashboardUidNotTaken(){
    return !this.isDashboardUidTaken;
  }

  get checkingInProgress(){
    return this.checkingNameTaken || this.checkingUidTaken;
  }

  get canImport(){
    return this.isDashboardNameExists && this.isDashboardNameNotTaken;
  }

  get canOverride(){
    return this.isDashboardNameExists && this.isDashboardNameTaken;
  }
  
  constructor( public dbService: DashboardService ) {
      super();
  }

  ngOnInit(){

    this.form = new FormGroup({
      'name': new FormControl( this.dashboard.title, Validators.required ),
      'folder': new FormControl(null, Validators.required ),
      'uid': new FormControl(this.dashboard.uid, Validators.required),
    });
    
    this.checkingNameTaken = true;
    this.checkingUidTaken = true;

    this.name.setAsyncValidators( this.checkNameTaken() )
    this.uid.setAsyncValidators( this.checkUidTaken() )
  }

  checkNameTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          tap( x => this.checkingNameTaken = true ),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap( _ => this
            .dbService
            .search( `folderIds=${this.folder?.value?.id}&query=${this.name.value}` )
            .pipe( 
              finalize( () => this.checkingNameTaken = false ))),
          
          map( searchResults => {
            const filterResult = searchResults.filter( x => x.title == this.name.value && x.type == "dash-db" )
            return ( 0 != filterResult.length ) ? { invalidDashboardNameTaken: true } : null;
          }  ),
          catchError( e => of( { invalidDashboardNameTaken: true } ) ),
          first()); 
          
  }

  checkUidTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          tap( x => this.checkingUidTaken = true ),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap( value => this
            .dbService
            .getDashboard( value )
            .pipe( 
              finalize( () => this.checkingUidTaken = false ))),
          map( db => {
            console.log( db );
            return db ? { invalidDashboardUidTaken: true } : null
           } ),
          catchError( _ => of( null )  ),
          first() ); 
  }


  onImport( override: boolean = false ){
    this.saving = true;

    this.dashboard.title = this.name.value;
    this.dashboard.version = 1;

    this
      .dbService
      .createDashboard( this.dashboard, this.folder.value.id, override )
      .pipe( 
        finalize( () => this.saving = false ) )
      .subscribe( 
        _ => Notes.success( "Dashboard imported" ),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_IMPORT_DASHBOARD ) );
  }
  

  onOverride(){

    this.dashboard.title = this.name.value;

    console.log( this.dashboard );

   
  }
}
