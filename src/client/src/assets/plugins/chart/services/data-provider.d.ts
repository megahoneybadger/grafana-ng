import { EventEmitter, Injector } from "@angular/core";
import { Subscription } from "rxjs";
import { IPanel, TimeRangeStore, PluginLoader, PluginStore, DataSourceService } from 'common';
import * as i0 from "@angular/core";
export declare class DataProvider {
    private pluginStore;
    private dsService;
    private time;
    private pluginLoader;
    private injector;
    private panel;
    request: string;
    data$: EventEmitter<any>;
    error$: EventEmitter<any>;
    timeSubs: Subscription;
    get metrics(): any;
    constructor(pluginStore: PluginStore, dsService: DataSourceService, time: TimeRangeStore, pluginLoader: PluginLoader, injector: Injector, panel: IPanel);
    destroy(): void;
    pull(request: string): void;
    static ɵfac: i0.ɵɵFactoryDef<DataProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<DataProvider>;
}
//# sourceMappingURL=data-provider.d.ts.map