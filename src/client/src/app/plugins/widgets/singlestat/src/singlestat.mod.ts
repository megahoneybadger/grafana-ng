import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import {  GaugeEditorComponent } from './edit/gauge/gauge';
import { SinglestatPanelEditorComponent } from './edit/editor';
import { SinglestatPanelComponent } from './singlestat.c';
import { LabelEditorComponent } from './edit/label/label';
import { MetricFieldPickerComponent } from './edit/selector/query/query';
import { LabelComponent } from './view/label/label';
import { GaugeComponent } from './view/gauge/gauge';
import { GaugeDisplayEditorComponent } from './edit/gauge/display/display';
import { ValueSelectorComponent } from './edit/selector/selector';


@NgModule({
  declarations: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent,

    LabelComponent,
    GaugeComponent,

    ValueSelectorComponent,

    GaugeEditorComponent,
    GaugeDisplayEditorComponent,
    LabelEditorComponent,
    

    MetricFieldPickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule,
    
    PerfectScrollbarModule
  ],
  exports: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent
  ]
})
export class SinglestatModule { }
