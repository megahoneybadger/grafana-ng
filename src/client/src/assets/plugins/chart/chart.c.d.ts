import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { ChartStore } from './base/chart.store';
import { BaseChartComponent } from './base/chart-base';
import * as i0 from "@angular/core";
export declare class ChartComponent extends BaseChartComponent {
    options: any;
    plugins: TrackballDrawerPlugin[];
    private ctrlChart;
    get legend(): import("./chart.m").Legend;
    constructor(store: ChartStore);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartComponent, "widget", never, {}, {}, never, never>;
}
//# sourceMappingURL=chart.c.d.ts.map