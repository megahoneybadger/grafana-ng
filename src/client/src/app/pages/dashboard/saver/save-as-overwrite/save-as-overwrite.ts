
import { Component, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDasboardComponent, Dashboard, DashboardService, DashboardStore, TimeRangeStore } from 'common';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { DashboardSaveDispatcherComponent } from '../save-dispatcher';

@Component({
  selector: 'dashboard-save-as-overwrite',
  templateUrl: './save-as-overwrite.html'
})
export class DashboardSaveAsOverwriteComponent extends BaseDasboardComponent  {

  @Output() closed = new EventEmitter();
  saving: boolean;

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private time: TimeRangeStore ){
      super( store );

  }

  onClose(){
    this.closed.emit();
  }

  onSaveAsOverwrite(){
    this.saving = true;    

    const folderId = this.dashboard.meta.folder.id;

    this
      .dbService
      .createDashboard( this.dashboard, folderId, true )
      .pipe( 
        finalize( () => {
          this.saving = false;
          this.onClose()
        } ) )
      .subscribe( 
        x => this.redirectToUpdateMode( x ),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_DASHBOARD ));
  }

  redirectToUpdateMode( d: Dashboard ){
    Notes.success( DashboardSaveDispatcherComponent.MSG_DB_SAVE_SUCCESS );
    this.router.navigate( [d.url] );
  }
}
