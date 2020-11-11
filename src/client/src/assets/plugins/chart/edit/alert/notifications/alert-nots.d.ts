import { AlertService, Panel, AlertChannel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class AlertNotificationsEditorComponent extends BaseChartEditorComponent {
    private alertService;
    availableChannels: AlertChannel[];
    get channels$(): import("rxjs").Observable<string[]>;
    get notifications(): number[];
    getChannelByName(name: string): AlertChannel;
    getChannelById(id: number): AlertChannel;
    constructor(panel: Panel, alertService: AlertService);
    onAdd(e: string): void;
    onRemove(id: number): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertNotificationsEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertNotificationsEditorComponent, "editor-alert-notifications", never, {}, {}, never, never>;
}
//# sourceMappingURL=alert-nots.d.ts.map