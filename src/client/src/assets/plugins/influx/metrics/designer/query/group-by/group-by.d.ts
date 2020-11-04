import { DataSourceService, Panel } from 'common';
import { BaseQueryComponent } from '../query-base';
import { GroupByObject, OrderByTime } from '../../../metrics.m';
import * as i0 from "@angular/core";
export declare class GroupByEditorComponent extends BaseQueryComponent {
    dsService: DataSourceService;
    availableCommands: Array<GroupByCommand>;
    selectedCommands: Array<GroupByCommand>;
    OrderByTimeRef: typeof OrderByTime;
    get limit(): number;
    set limit(l: number);
    get slimit(): number;
    set slimit(l: number);
    get time(): GroupByObject;
    get timeValue(): string;
    set timeValue(v: string);
    get groupByTags(): GroupByObject[];
    get fill(): GroupByObject;
    get fillValue(): any;
    get showFill(): boolean;
    get timeOptions$(): import("rxjs").Observable<string[]>;
    get fillOptions(): import("rxjs").Observable<string[]>;
    get groupByOptions$(): import("rxjs").Observable<any[]>;
    constructor(panel: Panel, dsService: DataSourceService);
    onOptionPick(e: string): void;
    onRemoveTag(t: string): void;
    static ɵfac: i0.ɵɵFactoryDef<GroupByEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GroupByEditorComponent, "group-by-editor", never, {}, {}, never, never>;
}
declare class GroupByCommand {
    type: GroupByCommandType;
    text: string;
    value: any;
    constructor(type: GroupByCommandType, text: string, value?: any);
}
declare enum GroupByCommandType {
    Fill = 0,
    Time = 1,
    Tag = 2,
    Limit = 3,
    SLimit = 4,
    OrderBy = 5
}
export {};
//# sourceMappingURL=group-by.d.ts.map