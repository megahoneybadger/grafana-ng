import { EventEmitter } from '@angular/core';
import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegion } from '../../../chart.m';
import * as i0 from "@angular/core";
export declare class TimeRegionEditorComponent extends BaseChartEditorComponent {
    timeRegion: TimeRegion;
    index: number;
    removed: EventEmitter<TimeRegion>;
    availableColors: import("primeng").SelectItem[];
    availableDays: import("primeng").SelectItem[];
    fromTime: string;
    toTime: string;
    get showCustomColors(): boolean;
    get showCustomFillColor(): boolean;
    get showCustomLineColor(): boolean;
    constructor(panel: Panel);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TimeRegionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimeRegionEditorComponent, "editor-time-region", never, { "timeRegion": "timeRegion"; "index": "index"; }, { "removed": "removed"; }, never, never>;
}
//# sourceMappingURL=time-region.d.ts.map