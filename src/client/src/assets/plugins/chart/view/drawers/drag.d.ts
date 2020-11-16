import { Subscription } from 'rxjs';
import { ChartJsExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { DragRegion } from '../../base/mouse.store';
import * as i0 from "@angular/core";
export declare class DragRangeDrawerPlugin extends ChartJsExtension {
    region: DragRegion;
    posSubs: Subscription;
    constructor(store: ChartStore);
    finalize(): void;
    afterDatasetsDraw(chart: any, _: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DragRangeDrawerPlugin, never>;
    static ɵprov: i0.ɵɵInjectableDef<DragRangeDrawerPlugin>;
}
//# sourceMappingURL=drag.d.ts.map