import { Annotation, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DragRegion, MouseStore } from '../../base/mouse.store';
import * as i0 from "@angular/core";
export declare class AnnotationDispatcherComponent extends BaseChartComponent {
    store: ChartStore;
    private mouse;
    private time;
    offset: any;
    region: DragRegion;
    showAddAnnot: boolean;
    showEditAnnot: boolean;
    annotToShow: Annotation;
    epochEnd: number;
    epochStart: number;
    mouseSubs: Subscription;
    regionSubs: Subscription;
    constructor(store: ChartStore, mouse: MouseStore, time: TimeRangeStore);
    ngOnDestroy(): void;
    onMouseUp(e: MouseEvent): void;
    getPopupLocation(chart: any, e: any, xAdj?: number, yAdj?: number): {
        left: number;
        top: any;
    };
    static ɵfac: i0.ɵɵFactoryDef<AnnotationDispatcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AnnotationDispatcherComponent, "annotation-dispatcher", never, {}, {}, never, never>;
}
//# sourceMappingURL=annotations.d.ts.map