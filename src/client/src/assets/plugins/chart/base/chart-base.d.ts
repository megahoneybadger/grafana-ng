import { Annotation, Panel } from 'common';
import { Subscription } from 'rxjs';
import { ChartComponent } from '../chart.c';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class BaseChartComponent {
    store: ChartStore;
    data: ChartData;
    dataSubs: Subscription;
    widgetSubs: Subscription;
    get dashboardId(): number;
    get panel(): Panel;
    get widget(): Chart;
    get datasets(): DataSet[];
    get display(): import("../view/display-manager").DisplayManager;
    get component(): ChartComponent;
    get nativeControl(): any;
    get scales(): any;
    get annotations(): Annotation[];
    constructor(store: ChartStore);
    ngOnDestroy(): void;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base.d.ts.map