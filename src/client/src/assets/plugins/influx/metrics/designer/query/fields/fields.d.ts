import { DataSourceService, Panel } from 'common';
import { Field } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
export declare class FieldsEditorComponent extends BaseQueryComponent {
    dsService: DataSourceService;
    constructor(panel: Panel, dsService: DataSourceService);
    ngOnInit(): void;
    onRemove(f: Field): void;
    onAdd(): void;
    createEmpyField(): Field;
    static ɵfac: i0.ɵɵFactoryDef<FieldsEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FieldsEditorComponent, "fields-editor", never, {}, {}, never, never>;
}
//# sourceMappingURL=fields.d.ts.map