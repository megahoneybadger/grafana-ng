import { EventEmitter } from '@angular/core';
import { AlertCondition, AlertEvalType, AlertReducer, Panel } from 'common';
import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertConditionEditorComponent extends BaseChartEditorComponent {
    condition: AlertCondition;
    index: number;
    removed: EventEmitter<AlertCondition>;
    AlertEvalTypeRef: string[];
    get reducers$(): import("rxjs").Observable<AlertReducer[]>;
    get evaluators$(): import("rxjs").Observable<string[]>;
    get evaluator(): string;
    get operators$(): import("rxjs").Observable<string[]>;
    get evaluatorType(): AlertEvalType;
    get showEvalParamFrom(): boolean;
    get showEvalParamTo(): boolean;
    get evalParamFrom(): string;
    set evalParamFrom(p: string);
    get evalParamTo(): string;
    set evalParamTo(p: string);
    constructor(panel: Panel);
    onEvaluatorPick(e: string): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertConditionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertConditionEditorComponent, "editor-alert-condition", never, { "condition": "condition"; "index": "index"; }, { "removed": "removed"; }, never, never>;
}
//# sourceMappingURL=cond.d.ts.map