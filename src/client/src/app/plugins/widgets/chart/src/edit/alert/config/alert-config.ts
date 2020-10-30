import { Component, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN, AlertNoDataOption, AlertErrorOption, AlertCondition } from 'common';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages, Notes, JsonExplorerComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-config',
  templateUrl: './alert-config.html'
})
export class AlertConfigEditorComponent extends BaseChartEditorComponent  {

  @ViewChild(JsonExplorerComponent) explorer; 
  testing : boolean;

  availableNoDataOptions = DropDownComponent.wrapEnum( AlertNoDataOption );

  availableErrorOptions = DropDownComponent.wrapEnum( AlertErrorOption );
  
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }

  onAddCondition(){
    this.alert.conditions = this.alert.conditions ?? [];
    this.alert.conditions.push( new AlertCondition() );

    this.panel.error = !this.panel.error ? "Mega error occured" : undefined;
  }

  onRemoveCondition( c: AlertCondition ){
    const index = this.alert.conditions.indexOf( c );

    if( -1 !== index ){
      this.alert.conditions.splice( index, 1 );
    }
  }

  onTestRule(){
    this.testing = true;

    of( this.alert )
      .pipe(
        delay(2000),
        finalize( () => this.testing = false ))
        .subscribe( 
          x => {
            this.explorer.content = x;
            
            // if( x.error ){
            //   Notes.error( x.error );
            // }
          },
          e => Notes.error( 
            e.error?.message ?? ErrorMessages.BAD_ALERT_EVAL ))
  }
}
