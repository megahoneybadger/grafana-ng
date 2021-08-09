import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dashboard, DashboardService } from 'common';
import { Observable, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap, tap } from 'rxjs/operators';
import { BaseComponent } from '../../../base/base-component';

@Component({
  selector: 'import-dashboard-validation',
  templateUrl: './validation.html'
})
export class ImportValidationComponent extends BaseComponent {

  form: FormGroup;
  @Input() dashboard: Dashboard;

  get name() {
		return this.form.get('name');
	}

  get uid() {
		return this.form.get('uid');
	}

  get folder(){
    return this.form.get('folder');
  }
  
  constructor( public ds: DashboardService ) {
      super();
  }

  ngOnInit(){

    this.form = new FormGroup({
      'name': new FormControl( this.dashboard.title, Validators.required ),
      'folder': new FormControl(null, Validators.required),
      'uid': new FormControl(this.dashboard.uid, Validators.required),
    });
    
    this.name.setAsyncValidators( this.checkNameTaken() )
    this.uid.setAsyncValidators( this.checkUidTaken() )
  }

  ngAfterViewInit(){
    this.name.updateValueAndValidity()
    this.uid.updateValueAndValidity()
  }

  checkNameTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap( _ => this.ds.search( `folderIds=${this.folder.value.id}&query=${this.name.value}` )),
          map( dashboards => 0 != dashboards.length ? { invalidDashboardNameTaken: true } : null ),
          first() ); 
  }

  checkUidTaken(): AsyncValidatorFn {
    return control => control
      .valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap( value => this.ds.getDashboard( value )),
          map( db => db ? { invalidDashboardUidTaken: true } : null ),
          first() ); 
  }
}
