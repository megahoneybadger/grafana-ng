import { Panel, AlertCondition } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertConfigEditorComponent extends BaseChartEditorComponent {
    explorer: any;
    testing: boolean;
    availableNoDataOptions: import("primeng").SelectItem[];
    availableErrorOptions: import("primeng").SelectItem[];
    constructor(panel: Panel);
    ngOnInit(): void;
    onAddCondition(): void;
    onRemoveCondition(c: AlertCondition): void;
    onTestRule(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertConfigEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertConfigEditorComponent, "editor-alert-config", never, {}, {}, never, never>;
}
//# sourceMappingURL=alert-config.d.ts.map