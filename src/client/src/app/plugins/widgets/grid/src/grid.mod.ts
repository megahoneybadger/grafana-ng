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



@NgModule({
  declarations: [
    GridPanelComponent,
    GridPanelEditorComponent,

    GridDisplayEditorComponent,
    ColumnRulesManagerComponent,
    ColumnRuleEditorComponent,
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
