import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { GaugeEditorComponent } from './edit/gauge/gauge';
import { SinglestatPanelEditorComponent } from './edit/editor';
import { SinglestatPanelComponent } from './singlestat.c';

import { LabelComponent } from './view/label/label';
import { GaugeComponent } from './view/gauge';
import { GaugeDisplayEditorComponent } from './edit/gauge/display/display';
import { ValueSelectorComponent } from './edit/value/selector/selector';
import { MetricFieldPickerComponent } from './edit/value/selector/query/query';
import { ValueEditorComponent } from './edit/value/value';
import { ValueThresholdsEditorComponent } from './edit/value/thresholds/thresholds';
import { ThresholdComponent } from './edit/value/thresholds/threshold';
import { GaugeMarkersEditorComponent } from './edit/gauge/markers/markers';
import { GaugeTicksEditorComponent } from './edit/gauge/ticks/ticks';
import { ValueLabelEditorComponent } from './edit/value/label/label';
import { ValueMappingsEditorComponent } from './edit/value/mappings/mappings';
import { ValueDiscreteMappingComponent } from './edit/value/mappings/mapping-discrete';
import { ValueRangeMappingComponent } from './edit/value/mappings/mapping-range';
import { SparklineComponent } from './view/sparkline/spark';
import { SparklineEditorComponent } from './edit/sparkline/spark';

@NgModule({
  declarations: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent,

    LabelComponent,
    GaugeComponent,
    SparklineComponent,

    ValueEditorComponent,
    ValueLabelEditorComponent,
    ValueThresholdsEditorComponent,
    ThresholdComponent,
    ValueSelectorComponent,
    MetricFieldPickerComponent,
    ValueMappingsEditorComponent,
    ValueDiscreteMappingComponent,
    ValueRangeMappingComponent,
    SparklineEditorComponent,

    GaugeEditorComponent,
    GaugeDisplayEditorComponent,
    GaugeMarkersEditorComponent,
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
