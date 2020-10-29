import { Panel } from 'common';
import { DataSet } from '../chart.m';
import * as i0 from "@angular/core";
export declare class DisplayManager {
    private panel;
    private get display();
    private get options();
    constructor(panel: Panel);
    setup(ds: DataSet): void;
    private setupLines;
    private setupPoints;
    private setupNullValue;
    getShowLines(ds: DataSet): boolean;
    getLineWidth(ds: DataSet): number;
    getLineColor(ds: DataSet, opacity: number): string;
    getFill(ds: DataSet): number;
    getStaircase(ds: DataSet): boolean;
    getDashes(ds: DataSet): any;
    getDashLength(ds: DataSet): number;
    getDashSpace(ds: DataSet): number;
    getShowPoints(ds: DataSet): boolean;
    getPointRadius(ds: DataSet): number;
    getLegend(ds: DataSet): boolean;
    getZIndex(ds: DataSet): number;
    getYAxis(ds: DataSet): any;
    getOverride(ds: DataSet): any;
    getOverrideByLabel(label: string): any;
    static ɵfac: i0.ɵɵFactoryDef<DisplayManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<DisplayManager>;
}
//# sourceMappingURL=display-manager.d.ts.map