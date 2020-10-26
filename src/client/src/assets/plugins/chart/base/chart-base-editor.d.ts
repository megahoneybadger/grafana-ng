import { Panel } from 'common';
import { Chart } from '../chart.m';
import * as i0 from "@angular/core";
export declare class BaseChartEditorComponent {
    panel: Panel;
    get widget(): Chart;
    get axes(): import("../chart.m").Axes;
    get legend(): import("../chart.m").Legend;
    get options(): any;
    constructor(panel: Panel);
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartEditorComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartEditorComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base-editor.d.ts.map