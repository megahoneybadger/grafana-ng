import { Panel, TimeRangeMod, AlertRule } from 'common';
import { Axes, Chart, Display, Legend, SeriesOverride, Threshold, TimeRegion } from '../chart.m';
import * as i0 from "@angular/core";
export declare class BaseChartEditorComponent {
    panel: Panel;
    get widget(): Chart;
    get axes(): Axes;
    get legend(): Legend;
    get display(): Display;
    get thresholds(): Threshold[];
    get timeRegions(): TimeRegion[];
    get overrides(): SeriesOverride[];
    get time(): TimeRangeMod;
    get alert(): AlertRule;
    get options(): any;
    constructor(panel: Panel);
    refresh(): void;
    update(): void;
    pull(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartEditorComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartEditorComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base-editor.d.ts.map