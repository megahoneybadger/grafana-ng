import { TrackballDrawerPlugin } from './extensions/trackball-drawer';
import { DataProvider } from './services/data-provider';
import { SeriesManager } from './services/series-manager';
import * as i0 from "@angular/core";
export declare class ChartComponent {
    private dataProvider;
    private seriesManager;
    data: any;
    options: any;
    plugins: TrackballDrawerPlugin[];
    constructor(dataProvider: DataProvider, seriesManager: SeriesManager);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartComponent, "widget", never, {}, {}, never, never>;
}
//# sourceMappingURL=chart.c.d.ts.map