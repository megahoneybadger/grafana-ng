import { Panel } from 'common';
import { Axes, Chart, Display, Legend } from '../chart.m';
import * as i0 from "@angular/core";
export declare class BaseChartEditorComponent {
    panel: Panel;
    get widget(): Chart;
    get axes(): Axes;
    get legend(): Legend;
    get display(): Display;
    get thresholds(): any;
    get options(): any;
    constructor(panel: Panel);
    refresh(): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartEditorComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartEditorComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base-editor.d.ts.map