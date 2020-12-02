import { Component, ViewChild, Inject } from '@angular/core';
import { AlertEvalType, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { AXIS_Y_LEFT } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
const _c0 = ["handle"];
const _c1 = ["wrapper"];
const _c2 = function (a0) { return { "top.px": a0 }; };
function AlertHandleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("mousedown", function AlertHandleComponent_div_2_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onGripClick($event, 2); });
    i0.ɵɵelement(1, "div", 11);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelement(3, "i", 7);
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelement(6, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r1.pixel2));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.evaluatorParam2);
} }
export class AlertHandleComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    get handleMidHeight() {
        return 14; /*this
            .handle
            ?.nativeElement
            .offsetHeight / 2*/
        14;
    }
    get scale() {
        return this.chartControl.scales[AXIS_Y_LEFT];
        ;
    }
    get evaluator() {
        var _a;
        const conds = (_a = this.alert) === null || _a === void 0 ? void 0 : _a.conditions;
        return conds ? conds[0].evaluator : undefined;
    }
    get evaluatorParam1() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[0];
    }
    get evaluatorParam2() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[1];
    }
    set evaluatorParam1(v) {
        if (!this.evaluator) {
            return;
        }
        this
            .evaluator
            .params[0] = v;
    }
    set evaluatorParam2(v) {
        if (!this.evaluator) {
            return;
        }
        this
            .evaluator
            .params[1] = v;
    }
    get pixel1() {
        return this.getPixel(this.evaluatorParam1);
    }
    get pixel2() {
        return this.getPixel(this.evaluatorParam2);
    }
    getPixel(p) {
        var _a;
        if (!this.scale) {
            return;
        }
        let v = Math.max(this.scale.min, p);
        v = Math.min(this.scale.max, v);
        return ((_a = this
            .scale) === null || _a === void 0 ? void 0 : _a.getPixelForValue(v)) - this.handleMidHeight;
    }
    get showSecondHandle() {
        var _a;
        switch (+((_a = this.evaluator) === null || _a === void 0 ? void 0 : _a.type)) {
            case AlertEvalType.IsWithinRange:
            case AlertEvalType.IsOutsideRange:
                return true;
        }
        return false;
    }
    onGripClick(e, index) {
        e.preventDefault();
        const offset = this.wrapper.nativeElement.getBoundingClientRect().top + window.scrollY;
        const top = offset + e.offsetY;
        let resizeFunc = function (e) {
            e.preventDefault();
            this.calculateValueForPixel(e.clientY - top, index);
            this.refresh();
        };
        let stopResizeFunc = (e) => {
            window.removeEventListener('mousemove', this.resizeFuncHandler, true);
            window.removeEventListener('mouseup', this.stopResizeFuncHandler, true);
        };
        this.resizeFuncHandler = resizeFunc.bind(this);
        this.stopResizeFuncHandler = stopResizeFunc.bind(this);
        window.addEventListener('mousemove', this.resizeFuncHandler, true);
        window.addEventListener('mouseup', this.stopResizeFuncHandler, true);
    }
    calculateValueForPixel(pix, index) {
        const minY = this.scale.getPixelForValue(this.scale.min) - this.handleMidHeight;
        const maxY = -this.handleMidHeight;
        var pricePixel = Math.min(minY, Math.max(maxY, pix));
        var preciseValue = this.scale.getValueForPixel(pricePixel + this.handleMidHeight);
        var roundedValue = this.round(preciseValue);
        if (1 == index) {
            this.evaluatorParam1 = roundedValue;
        }
        else {
            this.evaluatorParam2 = roundedValue;
        }
    }
    round(v) {
        const dec1 = this.countDecimals(this.scale.max);
        const dec2 = this.countDecimals(this.scale.min);
        return +v.toFixed(Math.max(dec1, dec2));
    }
    countDecimals(value) {
        if (Math.floor(value) === value)
            return 0;
        return value.toString().split(".")[1].length || 0;
    }
}
AlertHandleComponent.ɵfac = function AlertHandleComponent_Factory(t) { return new (t || AlertHandleComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHandleComponent, selectors: [["alert-handle"]], viewQuery: function AlertHandleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handle = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "alert-wrapper", "mr-3"], ["wrapper", ""], ["class", "alert-handle ed-flex ml-3", 3, "ngStyle", "mousedown", 4, "ngIf"], [1, "alert-handle", "ed-flex", 3, "ngStyle", "mousedown"], ["handle", ""], [1, "alert-handle-line"], [1, "alert-handle"], [1, "icon-gf", "icon-gf-critical", "alert-state-critical"], [1, "alert-handle-value"], [1, "alert-handle-grip"], [1, "alert-handle", "ed-flex", "ml-3", 3, "ngStyle", "mousedown"], [1, "alert-handle-line2"]], template: function AlertHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, AlertHandleComponent_div_2_Template, 7, 4, "div", 2);
        i0.ɵɵelementStart(3, "div", 3, 4);
        i0.ɵɵlistener("mousedown", function AlertHandleComponent_Template_div_mousedown_3_listener($event) { return ctx.onGripClick($event, 1); });
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelement(7, "i", 7);
        i0.ɵɵelementStart(8, "span", 8);
        i0.ɵɵtext(9);
        i0.ɵɵelement(10, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showSecondHandle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c2, ctx.pixel1));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.evaluatorParam1);
    } }, directives: [i2.NgIf, i2.NgStyle], styles: [".alert-wrapper[_ngcontent-%COMP%]{height:100%}.alert-handle-line[_ngcontent-%COMP%], .alert-handle-line2[_ngcontent-%COMP%]{background-color:rgba(237,46,24,.6);height:2px;margin-left:-20px;position:relative;width:20px;z-index:0}.alert-handle-line2[_ngcontent-%COMP%]{margin-left:-129px;width:129px}.alert-handle[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2f2f32,#262628);border-radius:4px;box-shadow:-1px -1px 0 0 hsla(0,0%,100%,.1),1px 1px 0 0 rgba(0,0,0,.3);color:#8e8e8e;cursor:move;float:right;font-size:12px;position:relative;text-align:left;width:100px;z-index:10}.alert-handle[_ngcontent-%COMP%]:hover{background-color:#303032}.alert-handle[_ngcontent-%COMP%]   .icon-gf[_ngcontent-%COMP%]{border-right:1px solid #333;float:left;font-size:14px;padding:.5rem .3rem .4rem .4rem;position:relative;top:0}.alert-handle-value[_ngcontent-%COMP%]{border-left:1px solid #1f1f20;line-height:2rem;padding:.5rem}.alert-handle-value[_ngcontent-%COMP%]   .alert-handle-grip[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generated by IcoMoon.io --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2212%22 height%3D%2232%22 viewBox%3D%220 0 12 32%22%3E%3Cg id%3D%22icomoon-ignore%22%3E%3C%2Fg%3E%3Cpath d%3D%22M0 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;background-size:8px;float:right;height:2rem;margin-right:2px;width:1rem}.alert-state-critical[_ngcontent-%COMP%]{color:#ed2e18}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertHandleComponent, [{
        type: Component,
        args: [{
                selector: 'alert-handle',
                templateUrl: './handle.html',
                styleUrls: [
                    './handle.scss'
                ]
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { handle: [{
            type: ViewChild,
            args: ["handle"]
        }], wrapper: [{
            type: ViewChild,
            args: ["wrapper"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oYW5kbGUvaGFuZGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oYW5kbGUvaGFuZGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQXlCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7OztJQ0Q5QywrQkFLQztJQUhBLHVNQUFrQyxDQUFDLEtBQUc7SUFHdEMsMEJBQXVDO0lBRXZDLDhCQUNDO0lBQUEsdUJBQTZEO0lBQzdELCtCQUFpQztJQUFBLFlBQW1CO0lBQUEsdUJBQWlDO0lBQUEsaUJBQU87SUFDN0YsaUJBQU07SUFFUCxpQkFBTTs7O0lBWEwsbUVBQThCO0lBUUksZUFBbUI7SUFBbkIsNENBQW1COztBREF2RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCO0lBdUZqRSxZQUFvQyxLQUFZO1FBQy9DLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVoQixDQUFDO0lBbkZELElBQUksZUFBZTtRQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFBOzs7K0JBR1U7UUFBQSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUUsV0FBVyxDQUFFLENBQUM7UUFBQSxDQUFDO0lBQ2pELENBQUM7SUFF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O2dCQUN4QixXQUFXLEVBQUUsZUFBZTtnQkFDNUIsU0FBUyxFQUFFO29CQUNWLGVBQWU7aUJBQUM7YUFDakI7O3NCQXdGYyxNQUFNO3VCQUFFLFdBQVc7d0JBbkZWLE1BQU07a0JBQTVCLFNBQVM7bUJBQUUsUUFBUTtZQUNJLE9BQU87a0JBQTlCLFNBQVM7bUJBQUUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRFdmFsVHlwZSwgQWxlcnRFdmFsdWF0b3IsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xyXG5pbXBvcnQgeyBBWElTX1lfTEVGVCB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhbGVydC1oYW5kbGUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9oYW5kbGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9oYW5kbGUuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEhhbmRsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XHJcblx0cmVzaXplRnVuY0hhbmRsZXI6IGFueTtcclxuXHRzdG9wUmVzaXplRnVuY0hhbmRsZXI6IGFueTtcclxuXHJcblx0QFZpZXdDaGlsZCggXCJoYW5kbGVcIiApIGhhbmRsZSA6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCggXCJ3cmFwcGVyXCIgKSB3cmFwcGVyIDogRWxlbWVudFJlZjtcclxuXHJcblx0Z2V0IGhhbmRsZU1pZEhlaWdodCgpIDogbnVtYmVye1xyXG5cdFx0cmV0dXJuIDE0Oy8qdGhpc1xyXG5cdFx0XHQuaGFuZGxlXHJcblx0XHRcdD8ubmF0aXZlRWxlbWVudFxyXG5cdFx0XHQub2Zmc2V0SGVpZ2h0IC8gMiovMTQ7XHJcblx0fVxyXG5cclxuXHRnZXQgc2NhbGUoKXtcclxuXHRcdHJldHVybiB0aGlzLmNoYXJ0Q29udHJvbC5zY2FsZXNbIEFYSVNfWV9MRUZUIF07O1xyXG5cdH1cclxuXHJcblx0Z2V0IGV2YWx1YXRvcigpIDogQWxlcnRFdmFsdWF0b3J7XHJcblx0XHRjb25zdCBjb25kcyA9IHRoaXMuYWxlcnQ/LmNvbmRpdGlvbnM7XHJcblxyXG5cdFx0cmV0dXJuIGNvbmRzID8gY29uZHNbIDAgXS5ldmFsdWF0b3IgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRnZXQgZXZhbHVhdG9yUGFyYW0xKCl7XHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHQ/LmV2YWx1YXRvclxyXG5cdFx0XHQ/LnBhcmFtc1sgMCBdO1xyXG5cdH1cclxuXHJcblx0Z2V0IGV2YWx1YXRvclBhcmFtMigpe1xyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHRcdFx0Py5ldmFsdWF0b3JcclxuXHRcdFx0Py5wYXJhbXNbIDEgXTtcclxuXHR9XHJcblxyXG5cdHNldCBldmFsdWF0b3JQYXJhbTEoIHY6IGFueSApe1xyXG5cdFx0aWYoICF0aGlzLmV2YWx1YXRvciApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpc1xyXG5cdFx0XHQuZXZhbHVhdG9yXHJcblx0XHRcdC5wYXJhbXNbIDAgXSA9IHY7XHJcblx0fVxyXG5cclxuXHRzZXQgZXZhbHVhdG9yUGFyYW0yKCB2OiBhbnkgKXtcclxuXHRcdGlmKCAhdGhpcy5ldmFsdWF0b3IgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXNcclxuXHRcdFx0LmV2YWx1YXRvclxyXG5cdFx0XHQucGFyYW1zWyAxIF0gPSB2O1xyXG5cdH1cclxuXHJcblx0Z2V0IHBpeGVsMSgpOm51bWJlcntcclxuXHRcdHJldHVybiB0aGlzLmdldFBpeGVsKCB0aGlzLmV2YWx1YXRvclBhcmFtMSApXHJcblx0fVxyXG5cclxuXHRnZXQgcGl4ZWwyKCk6bnVtYmVye1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWwoIHRoaXMuZXZhbHVhdG9yUGFyYW0yIClcclxuXHR9XHJcblxyXG5cdGdldFBpeGVsKCBwOiBudW1iZXIgKXtcclxuXHRcdGlmKCAhdGhpcy5zY2FsZSApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHYgPSBNYXRoLm1heCggdGhpcy5zY2FsZS5taW4sIHAgKTtcclxuXHRcdHYgPSBNYXRoLm1pbiggdGhpcy5zY2FsZS5tYXgsIHYgKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHQuc2NhbGVcclxuXHRcdFx0Py5nZXRQaXhlbEZvclZhbHVlKCB2ICkgLSB0aGlzLmhhbmRsZU1pZEhlaWdodFxyXG5cdH1cclxuXHJcblx0Z2V0IHNob3dTZWNvbmRIYW5kbGUoKXtcclxuXHRcdHN3aXRjaCggK3RoaXMuZXZhbHVhdG9yPy50eXBlICl7XHJcblx0XHRcdGNhc2UgQWxlcnRFdmFsVHlwZS5Jc1dpdGhpblJhbmdlOlxyXG5cdFx0XHRjYXNlIEFsZXJ0RXZhbFR5cGUuSXNPdXRzaWRlUmFuZ2U6XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsICl7XHJcblx0XHRzdXBlciggcGFuZWwgKTtcclxuXHJcblx0fVxyXG5cdFxyXG5cdG9uR3JpcENsaWNrKGUsIGluZGV4KXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBvZmZzZXQgPSB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdGNvbnN0IHRvcCA9IG9mZnNldCArIGUub2Zmc2V0WTtcclxuXHJcblx0XHRsZXQgcmVzaXplRnVuYyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVGb3JQaXhlbCggZS5jbGllbnRZIC0gdG9wLCBpbmRleCApO1xyXG5cclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG5cdFx0bGV0IHN0b3BSZXNpemVGdW5jID0gKGUpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplRnVuY0hhbmRsZXIsIHRydWUpO1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcFJlc2l6ZUZ1bmNIYW5kbGVyLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5yZXNpemVGdW5jSGFuZGxlciA9IHJlc2l6ZUZ1bmMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RvcFJlc2l6ZUZ1bmNIYW5kbGVyID0gc3RvcFJlc2l6ZUZ1bmMuYmluZCh0aGlzKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVGdW5jSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcFJlc2l6ZUZ1bmNIYW5kbGVyLCB0cnVlKTtcclxuXHR9XHJcblxyXG5cdGNhbGN1bGF0ZVZhbHVlRm9yUGl4ZWwoIHBpeDogbnVtYmVyLCBpbmRleDogbnVtYmVyICl7XHJcblx0XHRjb25zdCBtaW5ZID0gdGhpcy5zY2FsZS5nZXRQaXhlbEZvclZhbHVlKCB0aGlzLnNjYWxlLm1pbiApIC0gdGhpcy5oYW5kbGVNaWRIZWlnaHQ7XHJcblxyXG5cdFx0Y29uc3QgbWF4WSA9IC10aGlzLmhhbmRsZU1pZEhlaWdodDtcclxuXHJcblx0XHR2YXIgcHJpY2VQaXhlbCA9IE1hdGgubWluKCBtaW5ZLCBNYXRoLm1heCggbWF4WSwgcGl4ICkgKTtcclxuXHRcdHZhciBwcmVjaXNlVmFsdWUgPSB0aGlzLnNjYWxlLmdldFZhbHVlRm9yUGl4ZWwoIHByaWNlUGl4ZWwgKyB0aGlzLmhhbmRsZU1pZEhlaWdodCApO1xyXG5cdFx0dmFyIHJvdW5kZWRWYWx1ZSA9IHRoaXMucm91bmQoIHByZWNpc2VWYWx1ZSApO1xyXG5cdFxyXG5cdFx0aWYoIDEgPT0gaW5kZXggKXtcclxuXHRcdFx0dGhpcy5ldmFsdWF0b3JQYXJhbTEgPSByb3VuZGVkVmFsdWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmV2YWx1YXRvclBhcmFtMiA9IHJvdW5kZWRWYWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJvdW5kKCB2OiBudW1iZXIgKSA6IG51bWJlcntcclxuXHRcdGNvbnN0IGRlYzEgPSB0aGlzLmNvdW50RGVjaW1hbHMoIHRoaXMuc2NhbGUubWF4ICk7XHJcblx0XHRjb25zdCBkZWMyID0gdGhpcy5jb3VudERlY2ltYWxzKCB0aGlzLnNjYWxlLm1pbiApO1xyXG5cclxuXHRcdHJldHVybiArdi50b0ZpeGVkKCBNYXRoLm1heCggZGVjMSwgZGVjMiApIClcclxuXHR9XHJcblxyXG5cdGNvdW50RGVjaW1hbHModmFsdWUpIHtcclxuICAgIGlmKE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7IFxyXG5cdH1cclxufVxyXG5cclxuXHJcbiIsIjxkaXYgY2xhc3M9XCJhbGVydC13cmFwcGVyIG1yLTNcIiAjd3JhcHBlciA+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJhbGVydC1oYW5kbGUgZWQtZmxleCBtbC0zXCIgXHJcblx0XHRbbmdTdHlsZV09XCJ7J3RvcC5weCc6IHBpeGVsMn1cIiBcclxuXHRcdChtb3VzZWRvd24pPVwib25HcmlwQ2xpY2soICRldmVudCwgMiApXCJcclxuXHRcdCpuZ0lmPVwic2hvd1NlY29uZEhhbmRsZVwiID5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtaGFuZGxlLWxpbmUyXCIgPjwvZGl2Plx0XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0LWhhbmRsZVwiID5cclxuXHRcdFx0PGkgY2xhc3M9XCJpY29uLWdmIGljb24tZ2YtY3JpdGljYWwgYWxlcnQtc3RhdGUtY3JpdGljYWxcIj48L2k+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiYWxlcnQtaGFuZGxlLXZhbHVlXCI+e3tldmFsdWF0b3JQYXJhbTJ9fTxpIGNsYXNzPVwiYWxlcnQtaGFuZGxlLWdyaXBcIj48L2k+PC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiYWxlcnQtaGFuZGxlIGVkLWZsZXhcIiBcclxuXHRcdFtuZ1N0eWxlXT1cInsndG9wLnB4JzogcGl4ZWwxfVwiXHJcblx0XHQobW91c2Vkb3duKT1cIm9uR3JpcENsaWNrKCAkZXZlbnQsIDEgKVwiICNoYW5kbGUgPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydC1oYW5kbGUtbGluZVwiID48L2Rpdj5cdFxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydC1oYW5kbGVcIiA+XHJcblx0XHRcdDxpIGNsYXNzPVwiaWNvbi1nZiBpY29uLWdmLWNyaXRpY2FsIGFsZXJ0LXN0YXRlLWNyaXRpY2FsXCI+PC9pPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cImFsZXJ0LWhhbmRsZS12YWx1ZVwiPnt7ZXZhbHVhdG9yUGFyYW0xfX08aSBjbGFzcz1cImFsZXJ0LWhhbmRsZS1ncmlwXCI+PC9pPjwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==