import { EventEmitter } from '@angular/core';
import { AlertHelper, AnnotationService, TimeRangeStore } from 'common';
import { TagColorHelper } from 'uilib';
import { ChartStore } from '../../../base/chart.store';
import { EditAnnotationComponent } from '../edit/edit-annot';
import * as i0 from "@angular/core";
export declare class AnnotationHintComponent extends EditAnnotationComponent {
    edit: EventEmitter<any>;
    overPopup: boolean;
    TagColorHelperRef: typeof TagColorHelper;
    AlertHelperRef: typeof AlertHelper;
    constructor(store: ChartStore, annotService: AnnotationService, time: TimeRangeStore);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<AnnotationHintComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AnnotationHintComponent, "annotation-hint", never, {}, { "edit": "edit"; }, never, never>;
}
//# sourceMappingURL=annot-hint.d.ts.map