import { DashboardStore, Panel } from 'common';
import { Subscription } from 'rxjs';
import { AnnotationService, Annotation } from 'common';
import { ErrorMessages, ObservableEx } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    private store;
    private annotService;
    historyRequest: ObservableEx<any[]>;
    storeSubs: Subscription;
    history: Annotation[];
    messages: typeof ErrorMessages;
    dashboardId: number;
    deleteDialogOpened: boolean;
    deleting: boolean;
    constructor(panel: Panel, store: DashboardStore, annotService: AnnotationService);
    ngOnDestroy(): void;
    loadHistory(): void;
    getStateClass(a: Annotation): "alert-state-critical" | "alert-state-warning" | "alert-state-paused" | "alert-state-ok";
    getStateIconClass(a: Annotation): "icon-gf icon-gf-critical" | "fa fa-question" | "fa fa-exclamation" | "icon-gf icon-gf-online" | "fa fa-pause";
    getFormattedTime(a: Annotation): string;
    getInfo(a: Annotation): any;
    onClearHistory(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertHistoryEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertHistoryEditorComponent, "editor-alert-history", never, {}, {}, never, never>;
}
//# sourceMappingURL=alert-history.d.ts.map