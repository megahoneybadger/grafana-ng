import { EventEmitter } from '@angular/core';
import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { Threshold } from '../../../chart.m';
import * as i0 from "@angular/core";
export declare class ThresholdEditorComponent extends BaseChartEditorComponent {
    threshold: Threshold;
    index: number;
    removed: EventEmitter<Threshold>;
    availableOperatorValues: import("primeng").SelectItem[];
    availableColorValues: import("primeng").SelectItem[];
    availableAxisValues: import("primeng").SelectItem[];
    get value(): number;
    set value(value: number);
    get showCustomColors(): boolean;
    constructor(panel: Panel);
    static ɵfac: i0.ɵɵFactoryDef<ThresholdEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ThresholdEditorComponent, "editor-threshold", never, { "threshold": "threshold"; "index": "index"; }, { "removed": "removed"; }, never, never>;
}
//# sourceMappingURL=threshold.d.ts.map