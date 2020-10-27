import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { DataPointNullValueOption, TooltipMode, TooltipSortOrder } from '../../../chart.m';

@Component({
  selector: 'editor-draw-options',
  templateUrl: './options.html'
})
export class DrawOptionsEditorComponent extends BaseChartEditorComponent {
 
  availableWidth = DropDownComponent.wrapArray( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );

  availableTooltipModes	= DropDownComponent.wrapEnum( TooltipMode );

  availableTooltipSortOrders = DropDownComponent.wrapEnum( TooltipSortOrder );

  availableNullValueOptions = DropDownComponent.wrapEnum( DataPointNullValueOption );

  get stack(): boolean{
    return this.display.stack;
  }

  set stack( v: boolean ){
    this.display.stack = v;
    this.options.scales.yAxes[ 0 /*?*/ ].stacked = v

    this.refresh();
  }

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
}
