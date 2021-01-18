
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDasboardComponent, Dashboard, DashboardService, DashboardStore, TimeRangeStore } from 'common';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes, ResultCodes } from 'uilib';
import {DashboardSaveDispatcherComponent} from '../save-dispatcher';

@Component({
  selector: 'dashboard-save-as',
  templateUrl: './save-as.html'
})
export class DashboardSaveAsComponent extends BaseDasboardComponent  {

  @Output() closed = new EventEmitter();
  @Output() overwrite = new EventEmitter();

  form: FormGroup;
  saving: boolean;

  get name(){
    return this.form.get( 'name' );
  }

  get folder(){
    return this.form.get( 'folder' );
  }

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private time: TimeRangeStore ){
      super( store );

      this.form = new FormGroup({
        'name': new FormControl('New dashboard Copy',  Validators.required),
        'folder': new FormControl(null, Validators.required),
      });

  }

  onDashboardReady(){
    this.form.patchValue( {
      name: this.dashboard.title
    })
  }

  onClose(){
    this.closed.emit();
  }

  onSaveAs(){
    console.log( "save as" );
    this.saving = true;    

    this.dashboard.data.refresh = this.time.refresh;
    this.dashboard.title = this.name.value;

    const folderId = this.folder.value.id;

    this
      .dbService
      .createDashboard( this.dashboard, folderId, false )
      .pipe( 
        finalize( () => {
          this.saving = false;
          this.onClose()
        } ) )
      .subscribe( 
        x => this.redirectToUpdateMode( x ),
        e => {
          console.log( e );
          if( ResultCodes.BAD_CREATE_DASHBOARD_DUPLICATE == e.error?.code ){
            this.overwrite.emit();
          }
          else {
            Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_DASHBOARD,  e.error?.details )
          }
        } );
  }

  redirectToUpdateMode( d: Dashboard ){
    Notes.success( DashboardSaveDispatcherComponent.MSG_DB_SAVE_SUCCESS );
    this.router.navigate( [d.url] );
  }
}
