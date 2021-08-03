import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { ColumnStyleRule, GridThreshold } from '../../../grid.m';


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

  @Input() rule: ColumnStyleRule;
  @Input() data : GridThreshold;
  @Input() index: number;

  get count() : number {
    return this.rule.thresholds?.length;
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  

  onRemoveRule(){
    const index = this
      .rule
      .thresholds
      .indexOf( this.data );

    this.rule.thresholds.splice( index, 1 );
    //this.rebuild();
    this.fetch();
  }

  onChange(){
    const list = this.rule.thresholds;

    let sortedList = list
      .filter( x => x.value !== undefined )
      .sort( ( a, b ) => a.value - b.value );

    sortedList = [ list[ 0 ], ...sortedList ];

    this.rule.thresholds = sortedList
      //this.rebuild();
    this.fetch();

    // setTimeout( () => {
    //   this.rule.thresholds = sortedList
    //   this.rebuild();
    //   this.fetch();
    // } );
  }
}
