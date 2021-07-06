import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { GaugeEditorComponent } from './edit/gauge/gauge';
import { SinglestatPanelEditorComponent } from './edit/editor';
import { SinglestatPanelComponent } from './singlestat.c';

import { LabelComponent } from './view/label/label';
import { GaugeComponent } from './view/gauge/gauge';
import { GaugeDisplayEditorComponent } from './edit/gauge/display/display';
import { ValueSelectorComponent } from './edit/value/display/selector/selector';
import { MetricFieldPickerComponent } from './edit/value/display/selector/query/query';
import { ValueEditorComponent } from './edit/value/value';
import { ThresholdsEditorComponent } from './edit/value/display/thresholds/thresholds';
import { ThresholdComponent } from './edit/value/display/thresholds/threshold';
import { GaugeLabelsEditorComponent } from './edit/gauge/markers/markers';
import { GaugeTicksEditorComponent } from './edit/gauge/ticks/ticks';
import { ValueDisplayEditorComponent } from './edit/value/display/display';
import { LabelEditorComponent } from './edit/value/label/label';


@NgModule({
  declarations: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent,

    LabelComponent,
    GaugeComponent,

    ValueEditorComponent,
    ValueDisplayEditorComponent,
    ValueSelectorComponent,
    LabelEditorComponent,
    MetricFieldPickerComponent,
    ThresholdsEditorComponent,
    ThresholdComponent,

    GaugeEditorComponent,
    GaugeDisplayEditorComponent,
    GaugeLabelsEditorComponent,
    GaugeTicksEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule,
  ],
  exports: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent
  ]
})
export class SinglestatModule { }
