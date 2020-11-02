import { Component, EventEmitter, Output } from '@angular/core';
import { BaseQueryComponent } from './query-base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "uilib";
import * as i3 from "./measurement/measurement";
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
    i0.ɵɵtext(3, " query content will be here ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "measurement-editor", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
} }
export class QueryEditorComponent extends BaseQueryComponent {
    constructor() {
        super();
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
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(); };
QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["ng-transclude", "", "class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], ["ng-transclude", "", 1, "gf-form-query-content"], [3, "query"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 0, "div", 8);
        i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 2, 1, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "label", 11);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r7); const _r4 = i0.ɵɵreference(22); return _r4.show($event); });
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
    } }, directives: [i1.NgIf, i2.ContextMenuComponent, i3.MeasurementEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return []; }, { remove: [{
            type: Output
        }], moveUp: [{
            type: Output
        }], moveDown: [{
            type: Output
        }], duplicate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7SUNJeEMsd0JBQStDOzs7SUFDL0Msd0JBQWlEOzs7O0lBUzFELCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSxpQ0FDQztJQUR3RCxrTUFBd0I7SUFDaEYsNENBQ0Q7SUFBQSxpQkFBUTtJQUNULGlCQUFNO0lBQ1AsaUJBQU07OztJQUVOLCtCQUVDO0lBQUEseUNBQXlEO0lBRTFELGlCQUFNOzs7SUFGZSxlQUFlO0lBQWYsb0NBQWU7O0FEbEJyQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBWTFEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFYVixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXpDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTthQUNqRDtZQUVEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsQ0FBRSxDQUFDLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO2FBQ3hDO1lBRUQ7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDckM7WUFFRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsT0FBTyxFQUFFLENBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTthQUN2QztTQUNGLENBQUE7SUFDSCxDQUFDOzt3RkF2Q1Usb0JBQW9CO3lEQUFwQixvQkFBb0I7O1FDUGpDLDhCQUNDO1FBQUEsOEJBQ0M7UUFEK0MsMEhBQXdCO1FBQ3ZFLGdDQUNDO1FBQUEsNEJBQ0s7UUFBQSwrQkFDRTtRQUFBLGlFQUEyQztRQUMzQyxpRUFBNkM7UUFDL0MsaUJBQU87UUFDUCwrQkFBK0M7UUFBQSxZQUFlO1FBQUEsaUJBQU87UUFFdkUsaUJBQUk7UUFDUixpQkFBUTtRQUNULGlCQUFNO1FBR04scUVBQ0M7UUFPRCx1RUFFQztRQUlELGdDQUNDO1FBQUEsa0NBQ0M7UUFENEIsOEpBQVMsZ0JBQWlCLElBQUM7UUFDdkQsOEJBQ0M7UUFBQSx5QkFBMEI7UUFDM0IsaUJBQUk7UUFDTCxpQkFBUTtRQUNOLGlDQUNEO1FBQUEsOEJBQ0M7UUFBQSx5QkFBeUI7UUFDMUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNSLGlDQUNDO1FBQUEsOEJBQ0M7UUFEK0IsNkZBQVMsaUJBQWEsSUFBQztRQUN0RCx5QkFBMkI7UUFDNUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNULGlCQUFNO1FBRVAsaUJBQU07UUFFTiwyQ0FDa0I7O1FBN0NvQixlQUFjO1FBQWQsaUNBQWM7UUFDYixlQUFlO1FBQWYsa0NBQWU7UUFFQyxlQUFlO1FBQWYscUNBQWU7UUFPSSxlQUFlO1FBQWYsa0NBQWU7UUFRdkMsZUFBYztRQUFkLGlDQUFjO1FBMEIzQyxnQkFBMEI7UUFBMUIsNENBQTBCOztrREQxQ2xDLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxjQUFjO2FBQzVCO3NDQVFXLE1BQU07a0JBQWYsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlUXVlcnlDb21wb25lbnQgfSBmcm9tICcuL3F1ZXJ5LWJhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWVyeS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVyeS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlUXVlcnlDb21wb25lbnQge1xyXG5cclxuICBjb250ZXh0TWVudUl0ZW1zID0gW107XHJcblxyXG4gIG9wZW5lZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgZWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZVVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3ZlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHVwbGljYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1RvZ2dsZSBlZGl0IG1vZGUnLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMuZWRpdE1vZGUgIT0gdGhpcy5lZGl0TW9kZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnRHVwbGljYXRlJyxcclxuICAgICAgICBjb21tYW5kOiAoIF8gKSA9PiB0aGlzLmR1cGxpY2F0ZS5lbWl0KClcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ01vdmUgdXAnLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMubW92ZVVwLmVtaXQoKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnTW92ZSBkb3duJyxcclxuICAgICAgICBjb21tYW5kOiAoIF8gKSA9PiB0aGlzLm1vdmVEb3duLmVtaXQoKVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5XCI+XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS1xdWVyeS1sZXR0ZXItY2VsbCBcIiAoY2xpY2spPVwib3BlbmVkPSFvcGVuZWRcIj4gXHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCIgID5cclxuXHRcdFx0PGEgY2xhc3M9XCJwb2ludGVyXCIgdGFiaW5kZXg9XCIxXCIgPlxyXG4gICAgICAgIDxzcGFuICBuZy1jbGFzcz1cInttdXRlZDogIWN0cmwuY2FuQ29sbGFwc2V9XCIgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsLWNhcnJldFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCIgKm5nSWY9XCJvcGVuZWRcIj48L2k+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LXJpZ2h0XCIgKm5nSWY9XCIhb3BlbmVkXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGwtbGV0dGVyXCI+e3txdWVyeS5yZWZJZH19PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHRcclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1jb250ZW50IGdmLWZvcm0tcXVlcnktY29udGVudC0tY29sbGFwc2VkIG1yLTFcIiAqbmdJZj1cIiFvcGVuZWRcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlciBnZi1mb3JtLWxhYmVsLS1ncm93XCIgKGNsaWNrKT1cIm9wZW5lZD0hb3BlbmVkXCI+XHJcblx0XHRcdFx0cXVlcnkgY29udGVudCB3aWxsIGJlIGhlcmVcclxuXHRcdFx0PC9sYWJlbD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IG5nLXRyYW5zY2x1ZGUgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWNvbnRlbnRcIiAqbmdJZj1cIm9wZW5lZFwiPlxyXG5cclxuXHRcdDxtZWFzdXJlbWVudC1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCI+PC9tZWFzdXJlbWVudC1lZGl0b3I+XHJcblxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBlZFwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiIChjbGljayk9XCJjbS5zaG93KCAkZXZlbnQgKVwiPlxyXG5cdFx0XHQ8YSBjbGFzcz1cInBvaW50ZXIgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHRhYmluZGV4PVwiMVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5cclxuXHRcdFx0PGEgbmctY2xpY2s9XCJjdHJsLnRvZ2dsZUhpZGVRdWVyeSgpXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxhIGNsYXNzPVwicG9pbnRlclwiIHRhYmluZGV4PVwiMVwiIChjbGljayk9XCJyZW1vdmUuZW1pdCgpXCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGVkLWNvbnRleHQtbWVudSAjY20gW2l0ZW1zXT1cImNvbnRleHRNZW51SXRlbXNcIj5cclxuPC9lZC1jb250ZXh0LW1lbnU+Il19