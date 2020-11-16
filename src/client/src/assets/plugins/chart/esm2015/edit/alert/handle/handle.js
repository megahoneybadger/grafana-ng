import { Component, ViewChild, Inject } from '@angular/core';
import { AlertEvalType, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { AXIS_Y_LEFT } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    } }, directives: [i1.NgIf, i1.NgStyle], styles: [".alert-wrapper[_ngcontent-%COMP%]{height:100%}.alert-handle-line[_ngcontent-%COMP%], .alert-handle-line2[_ngcontent-%COMP%]{background-color:rgba(237,46,24,.6);height:2px;margin-left:-20px;position:relative;width:20px;z-index:0}.alert-handle-line2[_ngcontent-%COMP%]{margin-left:-129px;width:129px}.alert-handle[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2f2f32,#262628);border-radius:4px;box-shadow:-1px -1px 0 0 hsla(0,0%,100%,.1),1px 1px 0 0 rgba(0,0,0,.3);color:#8e8e8e;cursor:move;float:right;font-size:12px;position:relative;text-align:left;width:100px;z-index:10}.alert-handle[_ngcontent-%COMP%]:hover{background-color:#303032}.alert-handle[_ngcontent-%COMP%]   .icon-gf[_ngcontent-%COMP%]{border-right:1px solid #333;float:left;font-size:14px;padding:.5rem .3rem .4rem .4rem;position:relative;top:0}.alert-handle-value[_ngcontent-%COMP%]{border-left:1px solid #1f1f20;line-height:2rem;padding:.5rem}.alert-handle-value[_ngcontent-%COMP%]   .alert-handle-grip[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generated by IcoMoon.io --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2212%22 height%3D%2232%22 viewBox%3D%220 0 12 32%22%3E%3Cg id%3D%22icomoon-ignore%22%3E%3C%2Fg%3E%3Cpath d%3D%22M0 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;background-size:8px;float:right;height:2rem;margin-right:2px;width:1rem}.alert-state-critical[_ngcontent-%COMP%]{color:#ed2e18}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertHandleComponent, [{
        type: Component,
        args: [{
                selector: 'alert-handle',
                templateUrl: './handle.html',
                styleUrls: [
                    './handle.scss'
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { handle: [{
            type: ViewChild,
            args: ["handle"]
        }], wrapper: [{
            type: ViewChild,
            args: ["wrapper"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oYW5kbGUvaGFuZGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oYW5kbGUvaGFuZGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQXlCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7O0lDRDlDLCtCQUtDO0lBSEEsdU1BQWtDLENBQUMsS0FBRztJQUd0QywwQkFBdUM7SUFFdkMsOEJBQ0M7SUFBQSx1QkFBNkQ7SUFDN0QsK0JBQWlDO0lBQUEsWUFBbUI7SUFBQSx1QkFBaUM7SUFBQSxpQkFBTztJQUM3RixpQkFBTTtJQUVQLGlCQUFNOzs7SUFYTCxtRUFBOEI7SUFRSSxlQUFtQjtJQUFuQiw0Q0FBbUI7O0FEQXZELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUF1RmpFLFlBQW9DLEtBQVk7UUFDL0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRWhCLENBQUM7SUFuRkQsSUFBSSxlQUFlO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUE7OzsrQkFHVTtRQUFBLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxXQUFXLENBQUUsQ0FBQztRQUFBLENBQUM7SUFDakQsQ0FBQztJQUVE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Z0JBQ3hCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixTQUFTLEVBQUU7b0JBQ1YsZUFBZTtpQkFBQzthQUNqQjs7c0JBd0ZjLE1BQU07dUJBQUUsV0FBVzt3QkFuRlYsTUFBTTtrQkFBNUIsU0FBUzttQkFBRSxRQUFRO1lBQ0ksT0FBTztrQkFBOUIsU0FBUzttQkFBRSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydEV2YWxUeXBlLCBBbGVydEV2YWx1YXRvciwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XHJcbmltcG9ydCB7IEFYSVNfWV9MRUZUIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQubSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FsZXJ0LWhhbmRsZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hhbmRsZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2hhbmRsZS5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SGFuZGxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcclxuXHRyZXNpemVGdW5jSGFuZGxlcjogYW55O1xyXG5cdHN0b3BSZXNpemVGdW5jSGFuZGxlcjogYW55O1xyXG5cclxuXHRAVmlld0NoaWxkKCBcImhhbmRsZVwiICkgaGFuZGxlIDogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKCBcIndyYXBwZXJcIiApIHdyYXBwZXIgOiBFbGVtZW50UmVmO1xyXG5cclxuXHRnZXQgaGFuZGxlTWlkSGVpZ2h0KCkgOiBudW1iZXJ7XHJcblx0XHRyZXR1cm4gMTQ7Lyp0aGlzXHJcblx0XHRcdC5oYW5kbGVcclxuXHRcdFx0Py5uYXRpdmVFbGVtZW50XHJcblx0XHRcdC5vZmZzZXRIZWlnaHQgLyAyKi8xNDtcclxuXHR9XHJcblxyXG5cdGdldCBzY2FsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hhcnRDb250cm9sLnNjYWxlc1sgQVhJU19ZX0xFRlQgXTs7XHJcblx0fVxyXG5cclxuXHRnZXQgZXZhbHVhdG9yKCkgOiBBbGVydEV2YWx1YXRvcntcclxuXHRcdGNvbnN0IGNvbmRzID0gdGhpcy5hbGVydD8uY29uZGl0aW9ucztcclxuXHJcblx0XHRyZXR1cm4gY29uZHMgPyBjb25kc1sgMCBdLmV2YWx1YXRvciA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdGdldCBldmFsdWF0b3JQYXJhbTEoKXtcclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdD8uZXZhbHVhdG9yXHJcblx0XHRcdD8ucGFyYW1zWyAwIF07XHJcblx0fVxyXG5cclxuXHRnZXQgZXZhbHVhdG9yUGFyYW0yKCl7XHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHQ/LmV2YWx1YXRvclxyXG5cdFx0XHQ/LnBhcmFtc1sgMSBdO1xyXG5cdH1cclxuXHJcblx0c2V0IGV2YWx1YXRvclBhcmFtMSggdjogYW55ICl7XHJcblx0XHRpZiggIXRoaXMuZXZhbHVhdG9yICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzXHJcblx0XHRcdC5ldmFsdWF0b3JcclxuXHRcdFx0LnBhcmFtc1sgMCBdID0gdjtcclxuXHR9XHJcblxyXG5cdHNldCBldmFsdWF0b3JQYXJhbTIoIHY6IGFueSApe1xyXG5cdFx0aWYoICF0aGlzLmV2YWx1YXRvciApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpc1xyXG5cdFx0XHQuZXZhbHVhdG9yXHJcblx0XHRcdC5wYXJhbXNbIDEgXSA9IHY7XHJcblx0fVxyXG5cclxuXHRnZXQgcGl4ZWwxKCk6bnVtYmVye1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWwoIHRoaXMuZXZhbHVhdG9yUGFyYW0xIClcclxuXHR9XHJcblxyXG5cdGdldCBwaXhlbDIoKTpudW1iZXJ7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRQaXhlbCggdGhpcy5ldmFsdWF0b3JQYXJhbTIgKVxyXG5cdH1cclxuXHJcblx0Z2V0UGl4ZWwoIHA6IG51bWJlciApe1xyXG5cdFx0aWYoICF0aGlzLnNjYWxlICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdiA9IE1hdGgubWF4KCB0aGlzLnNjYWxlLm1pbiwgcCApO1xyXG5cdFx0diA9IE1hdGgubWluKCB0aGlzLnNjYWxlLm1heCwgdiApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdC5zY2FsZVxyXG5cdFx0XHQ/LmdldFBpeGVsRm9yVmFsdWUoIHYgKSAtIHRoaXMuaGFuZGxlTWlkSGVpZ2h0XHJcblx0fVxyXG5cclxuXHRnZXQgc2hvd1NlY29uZEhhbmRsZSgpe1xyXG5cdFx0c3dpdGNoKCArdGhpcy5ldmFsdWF0b3I/LnR5cGUgKXtcclxuXHRcdFx0Y2FzZSBBbGVydEV2YWxUeXBlLklzV2l0aGluUmFuZ2U6XHJcblx0XHRcdGNhc2UgQWxlcnRFdmFsVHlwZS5Jc091dHNpZGVSYW5nZTpcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvciggQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwgKXtcclxuXHRcdHN1cGVyKCBwYW5lbCApO1xyXG5cclxuXHR9XHJcblx0XHJcblx0b25HcmlwQ2xpY2soZSwgaW5kZXgpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IG9mZnNldCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZO1xyXG5cdFx0Y29uc3QgdG9wID0gb2Zmc2V0ICsgZS5vZmZzZXRZO1xyXG5cclxuXHRcdGxldCByZXNpemVGdW5jID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dGhpcy5jYWxjdWxhdGVWYWx1ZUZvclBpeGVsKCBlLmNsaWVudFkgLSB0b3AsIGluZGV4ICk7XHJcblxyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcblx0XHRsZXQgc3RvcFJlc2l6ZUZ1bmMgPSAoZSkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVGdW5jSGFuZGxlciwgdHJ1ZSk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wUmVzaXplRnVuY0hhbmRsZXIsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnJlc2l6ZUZ1bmNIYW5kbGVyID0gcmVzaXplRnVuYy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wUmVzaXplRnVuY0hhbmRsZXIgPSBzdG9wUmVzaXplRnVuYy5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZUZ1bmNIYW5kbGVyLCB0cnVlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wUmVzaXplRnVuY0hhbmRsZXIsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y2FsY3VsYXRlVmFsdWVGb3JQaXhlbCggcGl4OiBudW1iZXIsIGluZGV4OiBudW1iZXIgKXtcclxuXHRcdGNvbnN0IG1pblkgPSB0aGlzLnNjYWxlLmdldFBpeGVsRm9yVmFsdWUoIHRoaXMuc2NhbGUubWluICkgLSB0aGlzLmhhbmRsZU1pZEhlaWdodDtcclxuXHJcblx0XHRjb25zdCBtYXhZID0gLXRoaXMuaGFuZGxlTWlkSGVpZ2h0O1xyXG5cclxuXHRcdHZhciBwcmljZVBpeGVsID0gTWF0aC5taW4oIG1pblksIE1hdGgubWF4KCBtYXhZLCBwaXggKSApO1xyXG5cdFx0dmFyIHByZWNpc2VWYWx1ZSA9IHRoaXMuc2NhbGUuZ2V0VmFsdWVGb3JQaXhlbCggcHJpY2VQaXhlbCArIHRoaXMuaGFuZGxlTWlkSGVpZ2h0ICk7XHJcblx0XHR2YXIgcm91bmRlZFZhbHVlID0gdGhpcy5yb3VuZCggcHJlY2lzZVZhbHVlICk7XHJcblx0XHJcblx0XHRpZiggMSA9PSBpbmRleCApe1xyXG5cdFx0XHR0aGlzLmV2YWx1YXRvclBhcmFtMSA9IHJvdW5kZWRWYWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZXZhbHVhdG9yUGFyYW0yID0gcm91bmRlZFZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cm91bmQoIHY6IG51bWJlciApIDogbnVtYmVye1xyXG5cdFx0Y29uc3QgZGVjMSA9IHRoaXMuY291bnREZWNpbWFscyggdGhpcy5zY2FsZS5tYXggKTtcclxuXHRcdGNvbnN0IGRlYzIgPSB0aGlzLmNvdW50RGVjaW1hbHMoIHRoaXMuc2NhbGUubWluICk7XHJcblxyXG5cdFx0cmV0dXJuICt2LnRvRml4ZWQoIE1hdGgubWF4KCBkZWMxLCBkZWMyICkgKVxyXG5cdH1cclxuXHJcblx0Y291bnREZWNpbWFscyh2YWx1ZSkge1xyXG4gICAgaWYoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlKSByZXR1cm4gMDtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfHwgMDsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFsZXJ0LXdyYXBwZXIgbXItM1wiICN3cmFwcGVyID5cclxuXHJcblx0PGRpdiBjbGFzcz1cImFsZXJ0LWhhbmRsZSBlZC1mbGV4IG1sLTNcIiBcclxuXHRcdFtuZ1N0eWxlXT1cInsndG9wLnB4JzogcGl4ZWwyfVwiIFxyXG5cdFx0KG1vdXNlZG93bik9XCJvbkdyaXBDbGljayggJGV2ZW50LCAyIClcIlxyXG5cdFx0Km5nSWY9XCJzaG93U2Vjb25kSGFuZGxlXCIgPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydC1oYW5kbGUtbGluZTJcIiA+PC9kaXY+XHRcclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtaGFuZGxlXCIgPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImljb24tZ2YgaWNvbi1nZi1jcml0aWNhbCBhbGVydC1zdGF0ZS1jcml0aWNhbFwiPjwvaT5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJhbGVydC1oYW5kbGUtdmFsdWVcIj57e2V2YWx1YXRvclBhcmFtMn19PGkgY2xhc3M9XCJhbGVydC1oYW5kbGUtZ3JpcFwiPjwvaT48L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJhbGVydC1oYW5kbGUgZWQtZmxleFwiIFxyXG5cdFx0W25nU3R5bGVdPVwieyd0b3AucHgnOiBwaXhlbDF9XCJcclxuXHRcdChtb3VzZWRvd24pPVwib25HcmlwQ2xpY2soICRldmVudCwgMSApXCIgI2hhbmRsZSA+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0LWhhbmRsZS1saW5lXCIgPjwvZGl2Plx0XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0LWhhbmRsZVwiID5cclxuXHRcdFx0PGkgY2xhc3M9XCJpY29uLWdmIGljb24tZ2YtY3JpdGljYWwgYWxlcnQtc3RhdGUtY3JpdGljYWxcIj48L2k+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiYWxlcnQtaGFuZGxlLXZhbHVlXCI+e3tldmFsdWF0b3JQYXJhbTF9fTxpIGNsYXNzPVwiYWxlcnQtaGFuZGxlLWdyaXBcIj48L2k+PC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblx0XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuIl19