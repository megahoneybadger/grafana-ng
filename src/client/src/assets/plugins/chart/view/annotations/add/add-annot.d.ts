import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annotation, AnnotationService } from 'common';
import { ChartStore } from '../../../base/chart.store';
import { BaseChartComponent } from '../../../base/chart-base';
import * as i0 from "@angular/core";
export declare class AddAnnotationComponent extends BaseChartComponent {
    store: ChartStore;
    private annotService;
    desc: string;
    tags: string[];
    timeLabel: string;
    epochStart: number;
    epochEnd: number;
    close: EventEmitter<any>;
    storeSubs: Subscription;
    annotation: Annotation;
    chart: any;
    chartSubs: Subscription;
    constructor(store: ChartStore, annotService: AnnotationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSave(): void;
    create(): void;
    update(): void;
    onAddTag(e: any): void;
    onRemoveTag(tag: any): void;
    onDelete(): void;
    static ɵfac: i0.ɵɵFactoryDef<AddAnnotationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddAnnotationComponent, "add-annotation", never, { "epochStart": "epochStart"; "epochEnd": "epochEnd"; }, { "close": "close"; }, never, never>;
}
//# sourceMappingURL=add-annot.d.ts.map