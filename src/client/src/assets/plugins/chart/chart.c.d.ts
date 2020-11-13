import { ChartStore } from './base/chart.store';
import { BaseChartComponent } from './base/chart-base';
import { ExtensionsManager } from './view/drawers/extensions-manager';
import * as i0 from "@angular/core";
export declare class ChartComponent extends BaseChartComponent {
    plugins: ExtensionsManager;
    showAlertHandle: boolean;
    options: any;
    control: any;
    constructor(store: ChartStore, plugins: ExtensionsManager);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartComponent, "widget", never, {}, {}, never, never>;
}
//# sourceMappingURL=chart.c.d.ts.map