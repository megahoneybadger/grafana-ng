import { Dashboard, Panel } from 'common';
import { Chart } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class ChartJsExtension {
    store: ChartStore;
    get widget(): Chart;
    get dashboard(): Dashboard;
    get panel(): Panel;
    constructor(store: ChartStore);
    afterDatasetsDraw(chart: any, easing: any): void;
    finalize(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartJsExtension, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ChartJsExtension, never, never, {}, {}, never>;
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