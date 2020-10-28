import { ThresholdDrawerPlugin } from './thresholds';
import { TimeRegionsDrawerPlugin } from './time-regions';
import { TrackballDrawerPlugin } from './trackball';
import * as i0 from "@angular/core";
export declare class ExtensionsManager {
    private thresholds;
    private trackball;
    private timeRegions;
    get list(): ChartJsExtension[];
    constructor(thresholds: ThresholdDrawerPlugin, trackball: TrackballDrawerPlugin, timeRegions: TimeRegionsDrawerPlugin);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ExtensionsManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<ExtensionsManager>;
}
export interface ChartJsExtension {
    afterDatasetsDraw(chart: any, easing: any): any;
    destroy(): any;
}
//# sourceMappingURL=extensions-manager.d.ts.map