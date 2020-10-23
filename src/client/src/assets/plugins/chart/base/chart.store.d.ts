import { Panel } from 'common';
import { UIChart } from 'primeng';
import { Observable } from 'rxjs';
import { Chart, DataSet } from '../chart.m';
import { DataProvider } from '../view/data/data-provider';
import { DisplayManager } from '../view/render/display-manager';
import * as i0 from "@angular/core";
export declare class ChartStore {
    dataProvider: DataProvider;
    display: DisplayManager;
    panel: Panel;
    private widget;
    readonly widget$: Observable<Chart>;
    private data;
    readonly data$: Observable<DataSet[]>;
    private control_;
    readonly control$: Observable<UIChart>;
    get control(): UIChart;
    set control(ctrl: UIChart);
    constructor(dataProvider: DataProvider, display: DisplayManager, panel: Panel);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<ChartStore>;
}
//# sourceMappingURL=chart.store.d.ts.map