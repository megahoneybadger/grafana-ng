import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DataProvider } from 'dist/app/assets/plugins/chart/base/data-provider';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { SinglestatThreshold } from '../../../singlestat.m';

@Component({
  selector: 'threshold',
  host: {'class': 'gf-form-inline'},
  template: `
  <ed-textbox *ngIf="index > 0"
    [(ngModel)]="data.value"
    type="number"
    width="5"
    (blur)="onChange()"
    (keyup.enter)="onChange()" >
  </ed-textbox>

  <ed-textbox *ngIf="index == 0"
    value="base"
    readonly="true"
    width="5" >
  </ed-textbox>

  <ed-color-picker 
    [(ngModel)]="data.color" 
    (pick)="onChange()">
  </ed-color-picker>

  <div class="gf-form" *ngIf="index > 0 || count == 1">
    <label class="gf-form-label pointer" (click)="onRemoveRule()" >
      <i class="fa fa-trash"></i>
    </label>
  </div>`,
  
})
export class ThresholdComponent extends WidgetConsumer {

  @Input() data : SinglestatThreshold;
  @Input() index: number;

  get count() : number {
    return this.widget.thresholds.length;
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onRemoveRule(){
    const index = this
      .widget
      .thresholds
      .indexOf( this.data );

    this.widget.thresholds.splice( index, 1 );
    this.rebuild();
  }

  onChange(){
    const list = this.widget.thresholds;

    let sortedList = list
      .filter( x => x.value !== undefined )
      .sort( ( a, b ) => a.value - b.value );

    sortedList = [ list[ 0 ], ...sortedList ];

    setTimeout( () => {
      this.widget.thresholds = sortedList
      this.rebuild();
    } );
  }
}
