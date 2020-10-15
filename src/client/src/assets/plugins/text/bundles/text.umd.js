(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('text', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.text = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var TextService = /** @class */ (function () {
        function TextService() {
        }
        return TextService;
    }());
    TextService.ɵfac = function TextService_Factory(t) { return new (t || TextService)(); };
    TextService.ɵprov = i0.ɵɵdefineInjectable({ token: TextService, factory: TextService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var TextComponent = /** @class */ (function () {
        function TextComponent() {
        }
        TextComponent.prototype.ngOnInit = function () {
        };
        return TextComponent;
    }());
    TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
    TextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextComponent, selectors: [["lib-text"]], decls: 2, vars: 0, template: function TextComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " text works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-text',
                        template: "\n    <p>\n      text works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var TextModule = /** @class */ (function () {
        function TextModule() {
        }
        return TextModule;
    }());
    TextModule.ɵmod = i0.ɵɵdefineNgModule({ type: TextModule });
    TextModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TextModule_Factory(t) { return new (t || TextModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TextModule, { declarations: [TextComponent], exports: [TextComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TextComponent],
                        imports: [],
                        exports: [TextComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of text
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TextComponent = TextComponent;
    exports.TextModule = TextModule;
    exports.TextService = TextService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=text.umd.js.map
