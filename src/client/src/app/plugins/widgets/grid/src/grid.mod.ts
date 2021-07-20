import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { GridPanelEditorComponent } from './edit/editor';
import { GridPanelComponent } from './grid.c';
import {TableModule} from 'primeng/table';
import { GridDisplayEditorComponent } from './edit/display/display';



@NgModule({
  declarations: [
    GridPanelComponent,
    GridPanelEditorComponent,

    GridDisplayEditorComponent
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
