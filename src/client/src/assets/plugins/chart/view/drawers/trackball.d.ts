import { Subscription } from 'rxjs';
import { ChartJsExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import * as i0 from "@angular/core";
export declare class TrackballDrawerPlugin extends ChartJsExtension {
    trackball: MouseEvent;
    posSubs: Subscription;
    constructor(store: ChartStore);
    finalize(): void;
    afterDatasetsDraw(chart: any, _: any): void;
    static ɵfac: i0.ɵɵFactoryDef<TrackballDrawerPlugin, never>;
    static ɵprov: i0.ɵɵInjectableDef<TrackballDrawerPlugin>;
}
//# sourceMappingURL=trackball.d.ts.map