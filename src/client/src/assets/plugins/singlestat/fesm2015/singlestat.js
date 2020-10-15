import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SinglestatService {
    constructor() { }
}
SinglestatService.ɵfac = function SinglestatService_Factory(t) { return new (t || SinglestatService)(); };
SinglestatService.ɵprov = ɵɵdefineInjectable({ token: SinglestatService, factory: SinglestatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SinglestatService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SinglestatComponent {
    constructor() { }
    ngOnInit() {
    }
}
SinglestatComponent.ɵfac = function SinglestatComponent_Factory(t) { return new (t || SinglestatComponent)(); };
SinglestatComponent.ɵcmp = ɵɵdefineComponent({ type: SinglestatComponent, selectors: [["lib-singlestat"]], decls: 2, vars: 0, template: function SinglestatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " singlestat works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SinglestatComponent, [{
        type: Component,
        args: [{
                selector: 'lib-singlestat',
                template: `
    <p>
      singlestat works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SinglestatModule {
}
SinglestatModule.ɵmod = ɵɵdefineNgModule({ type: SinglestatModule });
SinglestatModule.ɵinj = ɵɵdefineInjector({ factory: function SinglestatModule_Factory(t) { return new (t || SinglestatModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SinglestatModule, { declarations: [SinglestatComponent], exports: [SinglestatComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SinglestatModule, [{
        type: NgModule,
        args: [{
                declarations: [SinglestatComponent],
                imports: [],
                exports: [SinglestatComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of singlestat
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SinglestatComponent, SinglestatModule, SinglestatService };
//# sourceMappingURL=singlestat.js.map
