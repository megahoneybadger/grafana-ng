import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseQueryComponent } from './query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "./measurement/measurement";
import * as i5 from "./fields/fields";
function QueryEditorComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
function QueryEditorComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} }
function QueryEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵelementStart(2, "label", 24);
    i0.ɵɵlistener("click", function QueryEditorComponent_div_9_Template_label_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.opened = !ctx_r5.opened; });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.queryAsString, " ");
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "measurement-editor", 26);
    i0.ɵɵlistener("change", function QueryEditorComponent_div_10_Template_measurement_editor_change_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "fields-editor", 26);
    i0.ɵɵlistener("change", function QueryEditorComponent_div_10_Template_fields_editor_change_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
} }
export class QueryEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService, time) {
        super(panel, dsService);
        this.dsService = dsService;
        this.time = time;
        this.contextMenuItems = [];
        this.opened = true;
        this.editMode = false;
        this.remove = new EventEmitter();
        this.moveUp = new EventEmitter();
        this.moveDown = new EventEmitter();
        this.duplicate = new EventEmitter();
    }
    ngOnInit() {
        this.contextMenuItems = [
            {
                label: 'Toggle edit mode',
                command: (_) => this.editMode != this.editMode
            },
            {
                label: 'Duplicate',
                command: (_) => this.duplicate.emit()
            },
            {
                label: 'Move up',
                command: (_) => this.moveUp.emit()
            },
            {
                label: 'Move down',
                command: (_) => this.moveDown.emit()
            },
        ];
        //this.build();
    }
    onRebuild() {
        //console.log( 'on rebuild' );
        this.time.tick();
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], [1, "gf-form-query-content"], [3, "query", "change"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_div_click_1_listener() { return ctx.opened = !ctx.opened; });
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵelementStart(3, "a", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtemplate(5, QueryEditorComponent_i_5_Template, 1, 0, "i", 5);
        i0.ɵɵtemplate(6, QueryEditorComponent_i_6_Template, 1, 0, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 1, "div", 8);
        i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 3, 2, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "label", 11);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r10); const _r4 = i0.ɵɵreference(22); return _r4.show($event); });
        i0.ɵɵelementStart(13, "a", 12);
        i0.ɵɵelement(14, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵelementStart(16, "a", 14);
        i0.ɵɵelement(17, "i", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "label", 2);
        i0.ɵɵelementStart(19, "a", 16);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_a_click_19_listener() { return ctx.remove.emit(); });
        i0.ɵɵelement(20, "i", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "ed-context-menu", 18, 19);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.opened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.opened);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.query.refId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.opened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.opened);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("items", ctx.contextMenuItems);
    } }, directives: [i2.NgIf, i3.ContextMenuComponent, i4.MeasurementEditorComponent, i5.FieldsEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }, { type: i1.TimeRangeStore }]; }, { remove: [{
            type: Output
        }], moveUp: [{
            type: Output
        }], moveDown: [{
            type: Output
        }], duplicate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBNEIsV0FBVyxFQUNmLE1BQU0sUUFBUSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7SUNFeEMsd0JBQStDOzs7SUFDL0Msd0JBQWlEOzs7O0lBUzFELCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSxpQ0FDQztJQUR3RCxrTUFBd0I7SUFDaEYsWUFDRDtJQUFBLGlCQUFRO0lBQ1QsaUJBQU07SUFDUCxpQkFBTTs7O0lBSEgsZUFDRDtJQURDLHFEQUNEOzs7O0lBSUYsK0JBRUM7SUFBQSw4Q0FBNEU7SUFBeEMsa01BQWtCO0lBQUMsaUJBQXFCO0lBRTVFLHlDQUFrRTtJQUFuQyw2TEFBa0I7SUFBQyxpQkFBZ0I7SUFFbkUsaUJBQU07OztJQUplLGVBQWU7SUFBZixvQ0FBZTtJQUVwQixlQUFlO0lBQWYsb0NBQWU7O0FEbEJoQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBWTFELFlBQ3lCLEtBQVksRUFDNUIsU0FBNEIsRUFDNUIsSUFBb0I7UUFDekIsS0FBSyxDQUFFLEtBQUssRUFBRSxTQUFTLENBQUUsQ0FBQztRQUZyQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQWI3QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3pDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTthQUNqRDtZQUVEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsQ0FBRSxDQUFDLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO2FBQ3hDO1lBRUQ7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDckM7WUFFRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsT0FBTyxFQUFFLENBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTthQUN2QztTQUNGLENBQUE7UUFFRCxlQUFlO0lBQ2pCLENBQUM7SUFFRCxTQUFTO1FBQ1AsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7d0ZBaERVLG9CQUFvQix1QkFhcEIsV0FBVzt5REFiWCxvQkFBb0I7O1FDVGpDLDhCQUNDO1FBQUEsOEJBQ0M7UUFEK0MsMEhBQXdCO1FBQ3ZFLGdDQUNDO1FBQUEsNEJBQ0s7UUFBQSwrQkFDRTtRQUFBLGlFQUEyQztRQUMzQyxpRUFBNkM7UUFDL0MsaUJBQU87UUFDUCwrQkFBK0M7UUFBQSxZQUFlO1FBQUEsaUJBQU87UUFFdkUsaUJBQUk7UUFDUixpQkFBUTtRQUNULGlCQUFNO1FBR04scUVBQ0M7UUFPRCx1RUFFQztRQU1ELGdDQUNDO1FBQUEsa0NBQ0M7UUFENEIsK0pBQVMsZ0JBQWlCLElBQUM7UUFDdkQsOEJBQ0M7UUFBQSx5QkFBMEI7UUFDM0IsaUJBQUk7UUFDTCxpQkFBUTtRQUNOLGlDQUNEO1FBQUEsOEJBQ0M7UUFBQSx5QkFBeUI7UUFDMUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNSLGlDQUNDO1FBQUEsOEJBQ0M7UUFEK0IsNkZBQVMsaUJBQWEsSUFBQztRQUN0RCx5QkFBMkI7UUFDNUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNULGlCQUFNO1FBRVAsaUJBQU07UUFFTiwyQ0FDa0I7O1FBL0NvQixlQUFjO1FBQWQsaUNBQWM7UUFDYixlQUFlO1FBQWYsa0NBQWU7UUFFQyxlQUFlO1FBQWYscUNBQWU7UUFPSSxlQUFlO1FBQWYsa0NBQWU7UUFRckQsZUFBYztRQUFkLGlDQUFjO1FBNEI3QixnQkFBMEI7UUFBMUIsNENBQTBCOztrREQxQ2xDLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxjQUFjO2FBQzVCOztzQkFjSSxNQUFNO3VCQUFFLFdBQVc7cUZBTlosTUFBTTtrQkFBZixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTixcclxuICBUaW1lUmFuZ2VTdG9yZSwgTWV0cmljUXVlcnkgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBCYXNlUXVlcnlDb21wb25lbnQgfSBmcm9tICcuL3F1ZXJ5LWJhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWVyeS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVyeS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlUXVlcnlDb21wb25lbnQge1xyXG5cclxuICBjb250ZXh0TWVudUl0ZW1zID0gW107XHJcblxyXG4gIG9wZW5lZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgZWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3ZlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHVwbGljYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsLFxyXG4gICAgcHVibGljIGRzU2VydmljZTogRGF0YVNvdXJjZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdGltZSA6VGltZVJhbmdlU3RvcmUgKXtcclxuICAgICAgc3VwZXIoIHBhbmVsLCBkc1NlcnZpY2UgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1RvZ2dsZSBlZGl0IG1vZGUnLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMuZWRpdE1vZGUgIT0gdGhpcy5lZGl0TW9kZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnRHVwbGljYXRlJyxcclxuICAgICAgICBjb21tYW5kOiAoIF8gKSA9PiB0aGlzLmR1cGxpY2F0ZS5lbWl0KClcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ01vdmUgdXAnLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMubW92ZVVwLmVtaXQoKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnTW92ZSBkb3duJyxcclxuICAgICAgICBjb21tYW5kOiAoIF8gKSA9PiB0aGlzLm1vdmVEb3duLmVtaXQoKVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG5cclxuICAgIC8vdGhpcy5idWlsZCgpO1xyXG4gIH1cclxuXHJcbiAgb25SZWJ1aWxkKCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKCAnb24gcmVidWlsZCcgKTtcclxuICAgIHRoaXMudGltZS50aWNrKCk7XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImdmLWZvcm0tcXVlcnlcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsIFwiIChjbGljayk9XCJvcGVuZWQ9IW9wZW5lZFwiPiBcclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIiAgPlxyXG5cdFx0XHQ8YSBjbGFzcz1cInBvaW50ZXJcIiB0YWJpbmRleD1cIjFcIiA+XHJcbiAgICAgICAgPHNwYW4gIG5nLWNsYXNzPVwie211dGVkOiAhY3RybC5jYW5Db2xsYXBzZX1cIiBjbGFzcz1cImdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGwtY2FycmV0XCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIiAqbmdJZj1cIm9wZW5lZFwiPjwvaT5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHRcIiAqbmdJZj1cIiFvcGVuZWRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1sZXR0ZXItY2VsbC1sZXR0ZXJcIj57e3F1ZXJ5LnJlZklkfX08L3NwYW4+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdFxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWNvbnRlbnQgZ2YtZm9ybS1xdWVyeS1jb250ZW50LS1jb2xsYXBzZWQgbXItMVwiICpuZ0lmPVwiIW9wZW5lZFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyIGdmLWZvcm0tbGFiZWwtLWdyb3dcIiAoY2xpY2spPVwib3BlbmVkPSFvcGVuZWRcIj5cclxuXHRcdFx0XHR7e3F1ZXJ5QXNTdHJpbmd9fVxyXG5cdFx0XHQ8L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWNvbnRlbnRcIiAqbmdJZj1cIm9wZW5lZFwiPlxyXG5cclxuXHRcdDxtZWFzdXJlbWVudC1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCIgKGNoYW5nZSk9XCJidWlsZCgpXCI+PC9tZWFzdXJlbWVudC1lZGl0b3I+XHJcblxyXG5cdFx0PGZpZWxkcy1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCIgKGNoYW5nZSk9XCJidWlsZCgpXCI+PC9maWVsZHMtZWRpdG9yPlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZWRcIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIiAoY2xpY2spPVwiY20uc2hvdyggJGV2ZW50IClcIj5cclxuXHRcdFx0PGEgY2xhc3M9XCJwb2ludGVyIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiB0YWJpbmRleD1cIjFcIj5cclxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxhIG5nLWNsaWNrPVwiY3RybC50b2dnbGVIaWRlUXVlcnkoKVwiIHJvbGU9XCJtZW51aXRlbVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8YSBjbGFzcz1cInBvaW50ZXJcIiB0YWJpbmRleD1cIjFcIiAoY2xpY2spPVwicmVtb3ZlLmVtaXQoKVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxlZC1jb250ZXh0LW1lbnUgI2NtIFtpdGVtc109XCJjb250ZXh0TWVudUl0ZW1zXCI+XHJcbjwvZWQtY29udGV4dC1tZW51PiJdfQ==