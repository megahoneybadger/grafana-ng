import { EventEmitter } from '@angular/core';
import { DataSourceService, Panel, Series, Metrics } from 'common';
import { Observable } from 'rxjs';
import { InfluxQuery, Tag, Field, GroupByObject } from '../../metrics.m';
import * as i0 from "@angular/core";
export declare class BaseQueryComponent {
    panel: Panel;
    dsService: DataSourceService;
    readonly REMOVE = "--remove--";
    readonly ADD = "--add--";
    query: InfluxQuery;
    change: EventEmitter<any>;
    rebuild: EventEmitter<any>;
    queryAsString: string;
    get metrics(): Metrics;
    get dataSourceId(): number;
    get tags(): Tag[];
    get fields(): Field[];
    get groupBy(): GroupByObject[];
    constructor(panel: Panel, dsService: DataSourceService);
    proxy(command: string): Observable<Series[]>;
    needRebuild(): void;
    build(fireRebuild?: boolean): void;
    onRebuild(): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseQueryComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseQueryComponent, never, never, { "query": "query"; }, { "change": "change"; "rebuild": "rebuild"; }, never>;
}
//# sourceMappingURL=query-base.d.ts.map