import { ChartStore } from '../../base/chart.store';
import * as i0 from "@angular/core";
export declare class TrackballDrawerPlugin {
    private store;
    constructor(store: ChartStore);
    afterDatasetsDraw(chart: any, easing: any): void;
    getMousePos(canvas: any, evt: any): {
        x: number;
        y: number;
    };
    static ɵfac: i0.ɵɵFactoryDef<TrackballDrawerPlugin, never>;
    static ɵprov: i0.ɵɵInjectableDef<TrackballDrawerPlugin>;
}
//# sourceMappingURL=trackball.d.ts.map