(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('singlestat', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singlestat = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SinglestatService = /** @class */ (function () {
        function SinglestatService() {
        }
        return SinglestatService;
    }());
    SinglestatService.ɵfac = function SinglestatService_Factory(t) { return new (t || SinglestatService)(); };
    SinglestatService.ɵprov = i0.ɵɵdefineInjectable({ token: SinglestatService, factory: SinglestatService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SinglestatService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SinglestatComponent = /** @class */ (function () {
        function SinglestatComponent() {
        }
        SinglestatComponent.prototype.ngOnInit = function () {
        };
        return SinglestatComponent;
    }());
    SinglestatComponent.ɵfac = function SinglestatComponent_Factory(t) { return new (t || SinglestatComponent)(); };
    SinglestatComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SinglestatComponent, selectors: [["lib-singlestat"]], decls: 2, vars: 0, template: function SinglestatComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " singlestat works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SinglestatComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-singlestat',
                        template: "\n    <p>\n      singlestat works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SinglestatModule = /** @class */ (function () {
        function SinglestatModule() {
        }
        return SinglestatModule;
    }());
    SinglestatModule.ɵmod = i0.ɵɵdefineNgModule({ type: SinglestatModule });
    SinglestatModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SinglestatModule_Factory(t) { return new (t || SinglestatModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SinglestatModule, { declarations: [SinglestatComponent], exports: [SinglestatComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SinglestatModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SinglestatComponent],
                        imports: [],
                        exports: [SinglestatComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of singlestat
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SinglestatComponent = SinglestatComponent;
    exports.SinglestatModule = SinglestatModule;
    exports.SinglestatService = SinglestatService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=singlestat.umd.js.map
