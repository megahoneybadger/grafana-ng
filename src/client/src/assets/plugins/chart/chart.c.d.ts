import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { DataProvider } from './view/data/data-provider';
import { ChartData } from './chart.m';
import * as i0 from "@angular/core";
export declare class ChartComponent {
    private dataProvider;
    data: ChartData;
    options: any;
    plugins: TrackballDrawerPlugin[];
    constructor(dataProvider: DataProvider);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartComponent, "widget", never, {}, {}, never, never>;
}
//# sourceMappingURL=chart.c.d.ts.map