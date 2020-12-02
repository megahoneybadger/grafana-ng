import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
export class AxisXEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    get axis() {
        return this.axes.x;
    }
    get chartAxis() {
        return this.options.scales.xAxes[0];
    }
    get show() {
        return this.axis.show;
    }
    set show(v) {
        this.axis.show = this.chartAxis.display = v;
        this.refresh();
    }
}
AxisXEditorComponent.ɵfac = function AxisXEditorComponent_Factory(t) { return new (t || AxisXEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AxisXEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisXEditorComponent, selectors: [["editor-axis-x"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"]], template: function AxisXEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "X-Axis");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function AxisXEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.show);
    } }, directives: [i2.CheckBoxComponent, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxisXEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-x',
                templateUrl: './x-axis.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9heGVzL3gtYXhpcy94LWF4aXMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveC1heGlzL3gtYXhpcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBTTNFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUFtQmhFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRWpCLENBQUM7SUFwQkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFFLENBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzt3RkFqQlUsb0JBQW9CLHVCQW1CVixXQUFXO3lEQW5CckIsb0JBQW9CO1FDUmpDLDhCQUNDO1FBQUEsNkJBQTRCO1FBQUEsc0JBQU07UUFBQSxpQkFBSztRQUV2QyxzQ0FJYztRQURiLGlKQUFrQjtRQUNuQixpQkFBYztRQUdmLGlCQUFNOztRQUpKLGVBQWtCO1FBQWxCLGtDQUFrQjs7a0RERVAsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLGVBQWU7YUFDN0I7O3NCQW9CYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYXhpcy14JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3gtYXhpcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBeGlzWEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gICBcbiAgZ2V0IGF4aXMoKXtcbiAgICByZXR1cm4gdGhpcy5heGVzLng7XG4gIH1cblxuICBnZXQgY2hhcnRBeGlzKCl7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY2FsZXMueEF4ZXNbIDAgXTtcbiAgfVxuXG4gIGdldCBzaG93KCk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5zaG93O1xuICB9XG5cbiAgc2V0IHNob3coIHY6IGJvb2xlYW4gKXtcbiAgICB0aGlzLmF4aXMuc2hvdyA9IHRoaXMuY2hhcnRBeGlzLmRpc3BsYXkgPSB2O1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICAgIFxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCIgPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPlgtQXhpczwvaDU+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdGxhYmVsPVwiU2hvd1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInNob3dcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHJcbjwvZGl2PiJdfQ==