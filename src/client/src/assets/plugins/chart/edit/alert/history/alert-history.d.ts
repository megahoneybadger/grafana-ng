import { DashboardStore, Panel } from 'common';
import { Subscription } from 'rxjs';
import { AnnotationService, Annotation, AlertHelper } from 'common';
import { ErrorMessages, ObservableEx } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    private store;
    private annotService;
    historyRequest: ObservableEx<Annotation[]>;
    storeSubs: Subscription;
    history: Annotation[];
    ErrorMessagesRef: typeof ErrorMessages;
    AlertHelperRef: typeof AlertHelper;
    dashboardId: number;
    deleteDialogOpened: boolean;
    deleting: boolean;
    constructor(panel: Panel, store: DashboardStore, annotService: AnnotationService);
    ngOnDestroy(): void;
    loadHistory(): void;
    getFormattedTime(a: Annotation): string;
    getInfo(a: Annotation): any;
    onClearHistory(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertHistoryEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertHistoryEditorComponent, "editor-alert-history", never, {}, {}, never, never>;
}
//# sourceMappingURL=alert-history.d.ts.map