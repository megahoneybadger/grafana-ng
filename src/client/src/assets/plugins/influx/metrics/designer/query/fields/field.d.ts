import { EventEmitter } from '@angular/core';
import { DataSourceService, Panel } from 'common';
import { FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
export declare class FieldEditorComponent extends BaseQueryComponent {
    dsService: DataSourceService;
    index: number;
    fieldFuncItems: any[];
    field: any;
    remove: EventEmitter<any>;
    add: EventEmitter<any>;
    get functions(): FuncObject[];
    constructor(panel: Panel, dsService: DataSourceService);
    ngOnInit(): void;
    get fields$(): import("rxjs").Observable<any[]>;
    onFieldPick(field: string): void;
    onFuncPick(arg: any): void;
    onFuncRemove(f: FuncObject): void;
    static ɵfac: i0.ɵɵFactoryDef<FieldEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FieldEditorComponent, "field-editor", never, { "field": "field"; }, { "remove": "remove"; "add": "add"; }, never, never>;
}
//# sourceMappingURL=field.d.ts.map