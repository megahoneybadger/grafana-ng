(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chart = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ChartService = /** @class */ (function () {
        function ChartService() {
        }
        return ChartService;
    }());
    ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(); };
    ChartService.ɵprov = i0.ɵɵdefineInjectable({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
        }
        ChartComponent.prototype.ngOnInit = function () {
        };
        return ChartComponent;
    }());
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["lib-chart"]], decls: 2, vars: 0, template: function ChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " chart works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-chart',
                        template: "\n    <p>\n      chart works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        return ChartModule;
    }());
    ChartModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartModule });
    ChartModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartModule_Factory(t) { return new (t || ChartModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartModule, { declarations: [ChartComponent], exports: [ChartComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ChartComponent],
                        imports: [],
                        exports: [ChartComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of chart
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;
    exports.ChartService = ChartService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
