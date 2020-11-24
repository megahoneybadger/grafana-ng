
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BaseDasboardComponent, DashboardService, DashboardStore, TimeRangeStore } from 'common';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes, ResultCodes } from 'uilib';
import {DashboardSaveDispatcherComponent} from '../save-dispatcher';

@Component({
  selector: 'dashboard-save',
  templateUrl: './save.html'
})
export class DashboardSaveComponent extends BaseDasboardComponent  {

  @Output() closed = new EventEmitter();
  @Output() overwrite = new EventEmitter();

  form: FormGroup;
  saving: boolean;

  get message(): string{
    return this.form.get( 'message' ).value;
  }

  get saveTime(): boolean{
    return this.form.get( 'saveTime' ).value;
  }

  get folderId(): number{
    return  this
      .dashboard
      .meta
      .folder
      ?.id;
  }

  get showSaveTimeCheckbox(): boolean{
    const range = this.time.range.raw;
    const dbTime = this.dashboard?.data.time;

    if( !( range && dbTime )  )  {
      return false;
    }

    return ( range.from !== dbTime.from ) || ( range.to !== dbTime.to );
  }

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    private time: TimeRangeStore ){
      super( store );

      this.form = new FormGroup({
        'message': new FormControl(''),
        'saveTime': new FormControl(''),
      });

  }

  onClose(){
    this.closed.emit();
  }

  onSave(){
    this.saving = true;    

    if( this.saveTime ){
      this.dashboard.data.time = this.time.range.raw;
    }

    this.dashboard.data.refresh = this.time.refresh;

    this
      .dbService
      .updateDashboard( this.dashboard, this.message, this.folderId, false )
      .pipe( 
        finalize( () => {
          this.saving = false;
          this.onClose()
        } ) )
      .subscribe( 
        x => {
          this.dashboard.version = x.version;// ? anything else ?
          Notes.success( DashboardSaveDispatcherComponent.MSG_DB_SAVE_SUCCESS );
        },
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
}
