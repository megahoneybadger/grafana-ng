import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormControl,FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { Dashboard, DashboardService } from 'common';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { BaseComponent } from '../../../base/base-component';

@Component({
  selector: 'import-dashboard-validation',
  templateUrl: './validation.html',
})
export class ImportValidationComponent extends BaseComponent {

  form: FormGroup;
  @Input() dashboard: Dashboard;
  @Output() close = new EventEmitter();
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
  
  constructor( 
    public dbService: DashboardService,
    public router: Router ) {
    super();
  }

  ngOnInit(){
    this.form = new FormGroup({
      'name': new FormControl( this.dashboard.title, Validators.required ),
      'folder': new FormControl( null, Validators.required ),
      'uid': new FormControl( this.dashboard.uid, Validators.required ),
    });
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
        x => this.router.navigate([ x.url ]),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_IMPORT_DASHBOARD ) );
  }
}
