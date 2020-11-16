import { ChartJsExtension } from '../../base/chart-base-extension';
import { AlertDrawerPlugin } from './alert';
import { AnnotationDrawerPlugin } from './annotations';
import { DragRangeDrawerPlugin } from './drag';
import { ThresholdDrawerPlugin } from './thresholds';
import { TimeRegionsDrawerPlugin } from './time-regions';
import { TrackballDrawerPlugin } from './trackball';
import * as i0 from "@angular/core";
export declare class ExtensionsManager {
    private thresholds;
    private trackball;
    private timeRegions;
    private alerts;
    private annotations;
    private drag;
    get list(): ChartJsExtension[];
    constructor(thresholds: ThresholdDrawerPlugin, trackball: TrackballDrawerPlugin, timeRegions: TimeRegionsDrawerPlugin, alerts: AlertDrawerPlugin, annotations: AnnotationDrawerPlugin, drag: DragRangeDrawerPlugin);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ExtensionsManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<ExtensionsManager>;
}
//# sourceMappingURL=extensions-manager.d.ts.map