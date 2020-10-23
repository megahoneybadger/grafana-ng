import { UIChart } from 'primeng';
import { Subscription } from 'rxjs';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class BaseChartComponent {
    store: ChartStore;
    data: ChartData;
    widget: Chart;
    control: UIChart;
    get datasets(): DataSet[];
    dataSubs: Subscription;
    widgetSubs: Subscription;
    ctrlSubs: Subscription;
    get display(): import("../view/render/display-manager").DisplayManager;
    constructor(store: ChartStore);
    onWidgetReady(): void;
    onControlReady(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base.d.ts.map