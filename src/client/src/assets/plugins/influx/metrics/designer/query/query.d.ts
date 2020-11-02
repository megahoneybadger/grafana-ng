import { EventEmitter } from '@angular/core';
import { BaseQueryComponent } from './query-base';
import * as i0 from "@angular/core";
export declare class QueryEditorComponent extends BaseQueryComponent {
    contextMenuItems: any[];
    opened: boolean;
    editMode: boolean;
    remove: EventEmitter<any>;
    moveUp: EventEmitter<any>;
    moveDown: EventEmitter<any>;
    duplicate: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<QueryEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<QueryEditorComponent, "query-editor", never, {}, { "remove": "remove"; "moveUp": "moveUp"; "moveDown": "moveDown"; "duplicate": "duplicate"; }, never, never>;
}
//# sourceMappingURL=query.d.ts.map