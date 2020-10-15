import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class ChartService {
    constructor() { }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(); };
ChartService.ɵprov = ɵɵdefineInjectable({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ChartComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["lib-chart"]], decls: 2, vars: 0, template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " chart works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'lib-chart',
                template: `
    <p>
      chart works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ChartModule {
}
ChartModule.ɵmod = ɵɵdefineNgModule({ type: ChartModule });
ChartModule.ɵinj = ɵɵdefineInjector({ factory: function ChartModule_Factory(t) { return new (t || ChartModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartModule, { declarations: [ChartComponent], exports: [ChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartModule, [{
        type: NgModule,
        args: [{
                declarations: [ChartComponent],
                imports: [],
                exports: [ChartComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartModule, ChartService };
//# sourceMappingURL=chart.js.map
