import { DataSourceService } from 'common';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
export declare class MeasurementEditorComponent extends BaseQueryComponent {
    private dsService;
    readonly DEFAULT_POLICY = "default";
    constructor(dsService: DataSourceService);
    ngOnInit(): void;
    showRetentionPolicies(): import("rxjs").Observable<any[]>;
    showMeasurementsRequest(): import("rxjs").Observable<any>;
    tagOperatorsRequest(tag: Tag): import("rxjs").Observable<TagOperator[]>;
    showTagValuesRequest(tag: Tag): import("rxjs").Observable<any[]>;
    showTagKeysRequest(): import("rxjs").Observable<any[]>;
    isRegex(expr: any): boolean;
    andOrRequest(): import("rxjs").Observable<TagCondition[]>;
    static ɵfac: i0.ɵɵFactoryDef<MeasurementEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MeasurementEditorComponent, "measurement-editor", never, {}, {}, never, never>;
}
//# sourceMappingURL=measurement.d.ts.map