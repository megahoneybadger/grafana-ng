import { ElementRef } from '@angular/core';
import { AlertEvaluator, Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertHandleComponent extends BaseChartEditorComponent {
    resizeFuncHandler: any;
    stopResizeFuncHandler: any;
    handle: ElementRef;
    wrapper: ElementRef;
    get handleMidHeight(): number;
    get scale(): any;
    get evaluator(): AlertEvaluator;
    get evaluatorParam1(): any;
    get evaluatorParam2(): any;
    set evaluatorParam1(v: any);
    set evaluatorParam2(v: any);
    get pixel1(): number;
    get pixel2(): number;
    getPixel(p: number): number;
    get showSecondHandle(): boolean;
    constructor(panel: Panel);
    onGripClick(e: any, index: any): void;
    calculateValueForPixel(pix: number, index: number): void;
    round(v: number): number;
    countDecimals(value: any): any;
    static ɵfac: i0.ɵɵFactoryDef<AlertHandleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertHandleComponent, "alert-handle", never, {}, {}, never, never>;
}
//# sourceMappingURL=handle.d.ts.map