import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { SvgPanelEditorComponent } from './edit/editor';
import { MappingEditorComponent } from './edit/mapping/mapping';
import { SvgPanelComponent } from './svg.c';

@NgModule({
  declarations: [
    SvgPanelComponent,
    SvgPanelEditorComponent,
    MappingEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EdCommonModule,
    EdUilibModule,
  ],
  exports: [
    SvgPanelComponent,
    SvgPanelEditorComponent
  ]
})
export class SvgModule { }
