import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { GridColumnStyleRule } from '../../grid.m';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'manager-column-rules',
  template: `
    <ed-side-tabstrip [(ngModel)]="index">

      <ng-container *ngFor="let r of widget.rules">
        <ed-tab >
          <ng-template edTabTitle>
            <span >{{r.key? r.key : 'New Rule'}}</span>
          </ng-template>

          <ng-template edTabContent>
            <editor-column-rule [rule]="r" (remove)="onRemoveRule( $event )"></editor-column-rule>
          </ng-template>
        </ed-tab>
      </ng-container>
      
      <ed-tab>
        <ng-template edTabTitle>
          <span (click)="onAddRule( $event )">
            <i class="fa fa-plus"></i>&nbsp;Add
          </span>
        </ng-template>
      </ed-tab>

    </ed-side-tabstrip>`
})
export class ColumnStylesManagerComponent extends WidgetConsumer  {

  index: number = 0;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.rules = this.widget.rules ?? new Array<GridColumnStyleRule>();

    // let rule1 = new GridColumnStyleRule();
    // rule1.header = "header 1";
    // rule1.key = "key 1";

    // let rule2 = new GridColumnStyleRule();
    // rule2.header = "header 2";
    // rule2.key = "key 2";

    // this.widget.rules = [ rule1, rule2 ];

  }

  onAddRule( e ){
    e.stopPropagation()

    const len = this.widget.rules.length;
    let rule = new GridColumnStyleRule();
    rule.header = `header ${len + 1}`;
    rule.key = `key ${len + 1}`;

    this.widget.rules.push( rule );
    this.index = len;
  }

  onRemoveRule( rule: GridColumnStyleRule ){
    const index = this
    .widget
    .rules
    .findIndex(x => x == rule );

    if (-1 !== index) {
      this.widget.rules.splice(index, 1);

      this.index = -1;

      let nextIndex = ( this.widget.rules.length == index ) ? index - 1 : index;

      setTimeout( () => this.index = nextIndex);
    }
  }
}
