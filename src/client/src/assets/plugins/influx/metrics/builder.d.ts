import { TimeRange, TimeRangeStore, MetricsBuilder } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InfluxMetricsBuilder implements MetricsBuilder {
    private time;
    constructor(time: TimeRangeStore);
    build(query: any, range?: TimeRange): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDef<InfluxMetricsBuilder, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InfluxMetricsBuilder, "metrics-builder", never, {}, {}, never, never>;
}
//# sourceMappingURL=builder.d.ts.map