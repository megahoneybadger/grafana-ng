import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import { GaugeEditorComponent } from './edit/gauge/gauge';
import { SinglestatPanelEditorComponent } from './edit/editor';
import { SinglestatPanelComponent } from './singlestat.c';
import { LabelEditorComponent } from './edit/label/label';

import { LabelComponent } from './view/label/label';
import { GaugeComponent } from './view/gauge/gauge';
import { GaugeDisplayEditorComponent } from './edit/gauge/display/display';
import { ValueSelectorComponent } from './edit/value/selector/selector';
import { MetricFieldPickerComponent } from './edit/value/selector/query/query';
import { ValueEditorComponent } from './edit/value/value';
import { ThresholdsEditorComponent } from './edit/value/thresholds/thresholds';
import { ThresholdComponent } from './edit/value/thresholds/threshold';
import { GaugeLabelsEditorComponent } from './edit/gauge/labels/labels';

@NgModule({
  declarations: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent,

    LabelComponent,
    GaugeComponent,

    ValueEditorComponent,
    ValueSelectorComponent,
    MetricFieldPickerComponent,
    ThresholdsEditorComponent,
    ThresholdComponent,


    GaugeEditorComponent,
    GaugeDisplayEditorComponent,
    GaugeLabelsEditorComponent,

    LabelEditorComponent,
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
