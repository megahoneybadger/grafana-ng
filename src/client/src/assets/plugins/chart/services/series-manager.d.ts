import { EventEmitter } from '@angular/core';
import { DataProvider } from './data-provider';
import * as i0 from "@angular/core";
export declare class SeriesManager {
    private dataProvider;
    private dataReadySubs;
    private errorSubs;
    dataSets$: EventEmitter<any>;
    constructor(dataProvider: DataProvider);
    private rebuild;
    private error;
    private getDataSet;
    private generateDataSetName;
    static ɵfac: i0.ɵɵFactoryDef<SeriesManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<SeriesManager>;
}
//# sourceMappingURL=series-manager.d.ts.map