import { Subscription } from 'rxjs';
import { Chart } from '../chart.m';
import { ChartStore } from './chart.store';
import * as i0 from "@angular/core";
export declare class BaseChartExtension {
    store: ChartStore;
    widgetSubs: Subscription;
    widget: Chart;
    constructor(store: ChartStore);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseChartExtension, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseChartExtension, never, never, {}, {}, never>;
}
//# sourceMappingURL=chart-base-extension.d.ts.map