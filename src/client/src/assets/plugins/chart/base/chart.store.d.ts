import { Panel } from 'common';
import { Observable } from 'rxjs';
import { Chart, DataSet } from '../chart.m';
import { DataProvider } from '../data/data-provider';
import { DisplayManager } from '../view/display-manager';
import * as i0 from "@angular/core";
export declare class ChartStore {
    dataProvider: DataProvider;
    display: DisplayManager;
    panel: Panel;
    private widget;
    readonly widget$: Observable<Chart>;
    private data;
    readonly data$: Observable<DataSet[]>;
    constructor(dataProvider: DataProvider, display: DisplayManager, panel: Panel);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<ChartStore>;
}
//# sourceMappingURL=chart.store.d.ts.map