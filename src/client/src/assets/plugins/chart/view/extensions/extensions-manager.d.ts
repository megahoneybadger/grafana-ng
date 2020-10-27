import { ThresholdDrawerPlugin } from './thresholds-drawer';
import { TrackballDrawerPlugin } from './trackball-drawer';
import * as i0 from "@angular/core";
export declare class ExtensionsManager {
    private thresholds;
    private trackball;
    get list(): ChartJsExtension[];
    constructor(thresholds: ThresholdDrawerPlugin, trackball: TrackballDrawerPlugin);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ExtensionsManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<ExtensionsManager>;
}
export interface ChartJsExtension {
    afterDatasetsDraw(chart: any, easing: any): any;
    destroy(): any;
}
//# sourceMappingURL=extensions-manager.d.ts.map