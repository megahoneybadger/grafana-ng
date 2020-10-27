import { Subscription } from 'rxjs';
import { ChartComponent } from '../chart.c';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class BaseChartComponent {
    store: ChartStore;
    data: ChartData;
    widget: Chart;
    get datasets(): DataSet[];
    dataSubs: Subscription;
    widgetSubs: Subscription;
    get component(): ChartComponent;
    get display(): import("../view/render/display-manager").DisplayManager;
    constructor(store: ChartStore);
    onWidgetReady(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base.d.ts.map