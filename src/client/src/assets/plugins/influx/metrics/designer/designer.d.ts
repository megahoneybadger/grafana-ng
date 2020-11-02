import { Panel } from 'common';
import { InfluxQuery } from '../metrics.m';
import * as i0 from "@angular/core";
export declare class InfluxMetricsDesignerComponent {
    panel: Panel;
    get metrics(): any;
    constructor(panel: Panel);
    onRemove(t: InfluxQuery): void;
    onMoveUp(t: InfluxQuery): void;
    onMoveDown(t: InfluxQuery): void;
    onDuplicate(t: InfluxQuery): void;
    static ɵfac: i0.ɵɵFactoryDef<InfluxMetricsDesignerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InfluxMetricsDesignerComponent, "metrics-designer", never, {}, {}, never, never>;
}
//# sourceMappingURL=designer.d.ts.map