import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AlertHistoryEditorComponent.ɵfac = function AlertHistoryEditorComponent_Factory(t) { return new (t || AlertHistoryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertHistoryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AlertHistoryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "alert history will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertHistoryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-history',
                templateUrl: './alert-history.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvaGlzdG9yeS9hbGVydC1oaXN0b3J5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oaXN0b3J5L2FsZXJ0LWhpc3RvcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU0zRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsd0JBQXdCO0lBRXZFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBSWpCLENBQUM7O3NHQVBVLDJCQUEyQix1QkFFakIsV0FBVztnRUFGckIsMkJBQTJCO1FDUnhDLDBDQUEwQjs7a0REUWIsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsc0JBQXNCO2FBQ3BDOztzQkFHYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYWxlcnQtaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1oaXN0b3J5Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SGlzdG9yeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcblxuICAgIFxuXG4gIH1cbn1cbiIsImFsZXJ0IGhpc3Rvcnkgd2lsbCBiZSBoZXJlIl19