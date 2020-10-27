import { BaseChartExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { Threshold } from '../../chart.m';
import * as i0 from "@angular/core";
export declare class ThresholdDrawerPlugin extends BaseChartExtension {
    get thresholds(): Threshold[];
    constructor(store: ChartStore);
    afterDatasetsDraw(chart: any, easing: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ThresholdDrawerPlugin, never>;
    static ɵprov: i0.ɵɵInjectableDef<ThresholdDrawerPlugin>;
}
//# sourceMappingURL=thresholds-drawer.d.ts.map