import { Component, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN, AlertNoDataOption, AlertErrorOption, AlertCondition, DashboardService, DashboardStore, Dashboard } from 'common';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages, Notes, JsonExplorerComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-config',
  templateUrl: './alert-config.html'
})
export class AlertConfigEditorComponent extends BaseChartEditorComponent  {

  @ViewChild(JsonExplorerComponent) explorer; 
  testing : boolean;

  dashboard: Dashboard;
  storeSubs: Subscription;

  availableNoDataOptions = DropDownComponent.wrapEnum( AlertNoDataOption );

  availableErrorOptions = DropDownComponent.wrapEnum( AlertErrorOption );
  
  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    private store: DashboardStore,
    private dsService: DashboardService ){
      super( panel );

      this.storeSubs = store
        .dashboard$
        .subscribe( x => this.dashboard = x );
  }

  ngOnDestroy(){
    this.storeSubs?.unsubscribe();
  }

  onAddCondition(){
    this.alert.conditions = this.alert.conditions ?? [];
    this.alert.conditions.push( new AlertCondition() );
  }

  onRemoveCondition( c: AlertCondition ){
    const index = this.alert.conditions.indexOf( c );

    if( -1 !== index ){
      this.alert.conditions.splice( index, 1 );
      this.refresh();
    }
  }

  onTestRule(){
    this.testing = true;
    this.explorer.clean();

    this
      .dsService
      .evalAlert( this.dashboard, <number>this.panel.id )
      .pipe( 
        finalize( () => this.testing = false ))
      .subscribe( 
        x => {
          this.explorer.content = x;
          
          if( x.error ){
            Notes.error( x.error );
          }
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_ALERT_EVAL ))
  }
}
