import { CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelement, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardStore, EdCommonModule } from 'common';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { ProgressComponent, EdUilibModule } from 'uilib';

class ChartComponent {
    constructor(store) {
        this.store = store;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(DashboardStore)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], decls: 5, vars: 0, consts: [["type", "button", "pButton", ""]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " chart works! ");
        ɵɵelement(2, "ed-progress");
        ɵɵelementStart(3, "button", 0);
        ɵɵtext(4, "fuck");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [ProgressComponent, ButtonDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                template: `
    <p>
      chart works!
      <ed-progress></ed-progress>
      <button type="button" pButton >fuck</button>
    </p>
  `
            }]
    }], function () { return [{ type: DashboardStore }]; }, null); })();

class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = ɵɵdefineNgModule({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule,
            ButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule,
        ButtonModule], exports: [ChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule,
                    ButtonModule
                ],
                exports: [
                    ChartComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
