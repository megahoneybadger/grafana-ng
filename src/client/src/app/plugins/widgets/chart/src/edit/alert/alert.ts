import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN, AlertRule } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-alert',
  templateUrl: './alert.html'
})
export class AlertEditorComponent extends BaseChartEditorComponent  {
 
  index: number = 0;

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );

    this.toggleAlertHandle( true );
  }

  ngOnInit(){
    //this.onAddAlert(); // just for tests
  }

  ngOnDestroy(){
    this.toggleAlertHandle( false );
  }

  onAddAlert(){
    this.widget.alert = new AlertRule();
  }

  onClose(){
    this.index = 0;
  }

  onDelete(){
    // delete alert
    this.widget.alert = undefined;
    this.refresh();

    this.onClose();
  }
}
