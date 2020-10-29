import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export class AlertConfigEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AlertConfigEditorComponent.ɵfac = function AlertConfigEditorComponent_Factory(t) { return new (t || AlertConfigEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConfigEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConfigEditorComponent, selectors: [["editor-alert-config"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AlertConfigEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "alert config will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertConfigEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-config',
                templateUrl: './alert-config.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvYWxlcnQtY29uZmlnLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvYWxlcnQtY29uZmlnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFNM0UsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHdCQUF3QjtJQUV0RSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUlqQixDQUFDOztvR0FQVSwwQkFBMEIsdUJBRWhCLFdBQVc7K0RBRnJCLDBCQUEwQjtRQ1J2Qyx5Q0FBeUI7O2tERFFaLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHFCQUFxQjthQUNuQzs7c0JBR2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0LWNvbmZpZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1jb25maWcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb25maWdFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG5cbiAgICBcblxuICB9XG59XG4iLCJhbGVydCBjb25maWcgd2lsbCBiZSBoZXJlIl19