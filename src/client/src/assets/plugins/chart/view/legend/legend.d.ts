import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DataSet } from '../../chart.m';
import * as i0 from "@angular/core";
export declare class ChartLegendComponent extends BaseChartComponent {
    get legend(): import("../../chart.m").Legend;
    constructor(store: ChartStore);
    axis(ds: DataSet): any;
    decimals(ds: DataSet): number;
    unit(ds: DataSet): any;
    color(ds: DataSet): string;
    min(ds: DataSet): any;
    max(ds: DataSet): any;
    avg(ds: DataSet): any;
    current(ds: DataSet): any;
    onSeriesClicked(ds: DataSet, e: any): void;
    toggleSeries(ds: DataSet, selected: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartLegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartLegendComponent, "chart-legend", never, {}, {}, never, never>;
}
//# sourceMappingURL=legend.d.ts.map