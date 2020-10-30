import { EventEmitter } from '@angular/core';
import { AlertCondition, Panel } from 'common';
import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertConditionEditorComponent extends BaseChartEditorComponent {
    condition: AlertCondition;
    index: number;
    removed: EventEmitter<AlertCondition>;
    constructor(panel: Panel);
    static ɵfac: i0.ɵɵFactoryDef<AlertConditionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertConditionEditorComponent, "editor-alert-condition", never, { "condition": "condition"; "index": "index"; }, { "removed": "removed"; }, never, never>;
}
//# sourceMappingURL=cond.d.ts.map