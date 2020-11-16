import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annotation, AnnotationService, TimeRangeStore } from 'common';
import { ChartStore } from '../../../base/chart.store';
import { BaseChartComponent } from '../../../base/chart-base';
import * as i0 from "@angular/core";
export declare class EditAnnotationComponent extends BaseChartComponent {
    store: ChartStore;
    private annotService;
    private time;
    timeLabel: string;
    epochStart: number;
    epochEnd: number;
    close: EventEmitter<any>;
    annotation: Annotation;
    storeSubs: Subscription;
    constructor(store: ChartStore, annotService: AnnotationService, time: TimeRangeStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSave(): void;
    onCreate(): void;
    onUpdate(): void;
    onDelete(): void;
    static ɵfac: i0.ɵɵFactoryDef<EditAnnotationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EditAnnotationComponent, "edit-annotation", never, { "epochStart": "epochStart"; "epochEnd": "epochEnd"; "annotation": "annotation"; }, { "close": "close"; }, never, never>;
}
//# sourceMappingURL=edit-annot.d.ts.map