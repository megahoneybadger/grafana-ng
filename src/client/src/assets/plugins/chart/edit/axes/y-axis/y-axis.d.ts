import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ScaleType } from '../../../chart.m';
import * as i0 from "@angular/core";
export declare class AxisYEditorComponent extends BaseChartEditorComponent {
    left: boolean;
    units: any;
    scales: import("primeng").SelectItem[];
    get axis(): import("../../../chart.m").VerticalAxis;
    get chartAxis(): any;
    get show(): boolean;
    set show(v: boolean);
    get unit(): boolean;
    set unit(v: boolean);
    get scale(): ScaleType;
    set scale(v: ScaleType);
    get label(): string;
    set label(v: string);
    get decimals(): number;
    set decimals(v: number);
    get min(): number;
    set min(v: number);
    get max(): number;
    set max(v: number);
    constructor(panel: Panel);
    static ɵfac: i0.ɵɵFactoryDef<AxisYEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxisYEditorComponent, "editor-axis-y", never, { "left": "left"; }, {}, never, never>;
}
//# sourceMappingURL=y-axis.d.ts.map