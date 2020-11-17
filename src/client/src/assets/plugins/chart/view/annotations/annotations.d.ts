import { Annotation, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DragRegion } from '../../base/mouse.store';
import * as i0 from "@angular/core";
export declare class AnnotationDispatcherComponent extends BaseChartComponent {
    store: ChartStore;
    private time;
    readonly MIN_LEFT_X = 65;
    offset: any;
    region: DragRegion;
    annotation: Annotation;
    epochEnd: number;
    epochStart: number;
    mouseUpSubs: Subscription;
    mouseDragSubs: Subscription;
    mouseHover: Subscription;
    showAddAnnot: boolean;
    showEditAnnot: boolean;
    get showViewAnnot(): boolean;
    constructor(store: ChartStore, time: TimeRangeStore);
    ngOnDestroy(): void;
    onMouseUp(e: MouseEvent): void;
    onMouseHover(e: MouseEvent): void;
    getPopupLocation(e: MouseEvent, xAdj?: number, yAdj?: number): {
        left: number;
        top: any;
    };
    onEditAnnotation(): void;
    onEscPressed(_: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<AnnotationDispatcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AnnotationDispatcherComponent, "annotation-dispatcher", never, {}, {}, never, never>;
}
//# sourceMappingURL=annotations.d.ts.map