import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { GridPanelEditorComponent } from './edit/editor';
import { GridPanelComponent } from './grid.c';
import {TableModule} from 'primeng/table';
import { GridDisplayEditorComponent } from './edit/display/display';
import { ColumnStylesManagerComponent as ColumnRulesManagerComponent } from './edit/columns/rules';
import { ColumnRuleEditorComponent } from './edit/columns/rule';
import { ThresholdsEditorComponent } from './edit/columns/thresholds/thresholds';
import { ThresholdComponent } from './edit/columns/thresholds/threshold';



@NgModule({
  declarations: [
    GridPanelComponent,
    GridPanelEditorComponent,

    GridDisplayEditorComponent,
    ColumnRulesManagerComponent,
    ColumnRuleEditorComponent,
    ThresholdsEditorComponent,
    ThresholdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule,

    TableModule
  ],
  exports: [
    GridPanelComponent,
    GridPanelEditorComponent
  ]
})
export class GridModule { }
