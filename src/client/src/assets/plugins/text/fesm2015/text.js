import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

class TextService {
    constructor() { }
}
TextService.ɵfac = function TextService_Factory(t) { return new (t || TextService)(); };
TextService.ɵprov = ɵɵdefineInjectable({ token: TextService, factory: TextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TextComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
TextComponent.ɵcmp = ɵɵdefineComponent({ type: TextComponent, selectors: [["widget"]], decls: 2, vars: 0, template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " text works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                template: `
    <p>
      text works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TextModule {
}
TextModule.ɵmod = ɵɵdefineNgModule({ type: TextModule });
TextModule.ɵinj = ɵɵdefineInjector({ factory: function TextModule_Factory(t) { return new (t || TextModule)(); }, imports: [[
            ButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TextModule, { declarations: [TextComponent], imports: [ButtonModule], exports: [TextComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextModule, [{
        type: NgModule,
        args: [{
                declarations: [TextComponent],
                imports: [
                    ButtonModule
                ],
                exports: [TextComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of text
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TextComponent, TextModule, TextService };
//# sourceMappingURL=text.js.map
