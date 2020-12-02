import { Panel, AlertCondition, DashboardService, DashboardStore, Dashboard } from 'common';
import { Subscription } from 'rxjs';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertConfigEditorComponent extends BaseChartEditorComponent {
    private store;
    private dsService;
    explorer: any;
    testing: boolean;
    dashboard: Dashboard;
    storeSubs: Subscription;
    availableNoDataOptions: import("primeng/api").SelectItem[];
    availableErrorOptions: import("primeng/api").SelectItem[];
    constructor(panel: Panel, store: DashboardStore, dsService: DashboardService);
    ngOnDestroy(): void;
    onAddCondition(): void;
    onRemoveCondition(c: AlertCondition): void;
    onTestRule(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertConfigEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertConfigEditorComponent, "editor-alert-config", never, {}, {}, never, never>;
}
//# sourceMappingURL=alert-config.d.ts.map