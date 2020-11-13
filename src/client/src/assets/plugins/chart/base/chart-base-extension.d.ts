import { Subscription } from 'rxjs';
import { Chart } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class BaseChartExtension {
    store: ChartStore;
    widgetSubs: Subscription;
    widget: Chart;
    constructor(store: ChartStore);
    finalize(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartExtension, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartExtension, never, never, {}, {}, never>;
}
export declare class BaseDrawer {
    chart: any;
    get context(): any;
    get canvas(): any;
    get scaleY(): any;
    get scaleX(): any;
    get minY(): any;
    get maxY(): any;
    constructor(chart: any);
    alignPixel(pixel: number, width: number): number;
}
//# sourceMappingURL=chart-base-extension.d.ts.map