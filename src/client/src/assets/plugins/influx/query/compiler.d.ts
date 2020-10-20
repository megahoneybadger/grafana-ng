import { TimeRange, TimeRangeStore, QueryCompiler } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InfluxQueryCompiler implements QueryCompiler {
    private time;
    constructor(time: TimeRangeStore);
    compile(query: any, range?: TimeRange): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDef<InfluxQueryCompiler, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InfluxQueryCompiler, "query-compiler", never, {}, {}, never, never>;
}
//# sourceMappingURL=compiler.d.ts.map