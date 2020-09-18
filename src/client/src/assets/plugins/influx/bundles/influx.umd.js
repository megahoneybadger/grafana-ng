(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('uilib'), require('@angular/common'), require('common')) :
    typeof define === 'function' && define.amd ? define('influx', ['exports', '@angular/core', '@angular/forms', 'uilib', '@angular/common', 'common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.influx = {}, global.ng.core, global.ng.forms, global.i2, global.ng.common, global.common));
}(this, (function (exports, i0, i1, i2, i3, common) { 'use strict';

    function InfluxSettingsEditorComponent_5_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " please enter url ");
        }
    }
    function InfluxSettingsEditorComponent_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, InfluxSettingsEditorComponent_5_ng_template_0_Template, 1, 0, "ng-template", 17);
        }
    }
    var InfluxSettingsEditorComponent = /** @class */ (function () {
        function InfluxSettingsEditorComponent() {
            this.form = new i1.FormGroup({
                'url': new i1.FormControl(null, i1.Validators.required),
                'whitelistedCookies': new i1.FormControl(null),
                'basicAuthentication': new i1.FormControl(null),
                'withCredentials': new i1.FormControl(null),
                'tlsClientAuth': new i1.FormControl(null),
                'withCaCert': new i1.FormControl(null),
                'skipTlsVerification': new i1.FormControl(null),
                'database': new i1.FormControl(null, i1.Validators.required),
                'user': new i1.FormControl(null),
                'password': new i1.FormControl(null),
                'minTimeInterval': new i1.FormControl(null)
            });
        }
        Object.defineProperty(InfluxSettingsEditorComponent.prototype, "url", {
            get: function () {
                return this.form.get('url');
            },
            enumerable: false,
            configurable: true
        });
        return InfluxSettingsEditorComponent;
    }());
    InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
    InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 15, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "tooltip", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "tooltip", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "tooltip", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], [1, "grafana-info-box"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h3", 1);
                i0.ɵɵtext(2, "HTTP");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelementStart(4, "ed-textbox", 3);
                i0.ɵɵtemplate(5, InfluxSettingsEditorComponent_5_Template, 1, 0, undefined, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "ed-textbox", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "h3", 1);
                i0.ɵɵtext(8, "Auth");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 2);
                i0.ɵɵelementStart(10, "div", 6);
                i0.ɵɵelement(11, "ed-checkbox", 7);
                i0.ɵɵelement(12, "ed-checkbox", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 6);
                i0.ɵɵelement(14, "ed-checkbox", 9);
                i0.ɵɵelement(15, "ed-checkbox", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 6);
                i0.ɵɵelement(17, "ed-checkbox", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "h3", 1);
                i0.ɵɵtext(19, "InfluxDB Details");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "div", 2);
                i0.ɵɵelement(21, "ed-textbox", 12);
                i0.ɵɵelementStart(22, "div", 6);
                i0.ɵɵelement(23, "ed-textbox", 13);
                i0.ɵɵelement(24, "ed-textbox", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "div", 2);
                i0.ɵɵelementStart(26, "div", 15);
                i0.ɵɵelementStart(27, "h5");
                i0.ɵɵtext(28, "Database Access");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "p");
                i0.ɵɵtext(30, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
                i0.ɵɵelementStart(31, "code");
                i0.ɵɵtext(32, "SHOW MEASUREMENTS ON _internal");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(33, " or ");
                i0.ɵɵelementStart(34, "code");
                i0.ɵɵtext(35, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(36, "br");
                i0.ɵɵelement(37, "br");
                i0.ɵɵtext(38, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "div", 2);
                i0.ɵɵelement(40, "ed-textbox", 16);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.url.hasError("required") && ctx.url.touched);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("label", "Database")("labelWidth", 10);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
            }
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName, i3.NgIf, i2.CheckBoxComponent, i2.TextBoxValidationTemplate], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ds-settings-editor',
                        templateUrl: './settings.html'
                    }]
            }], function () { return []; }, null);
    })();

    var InfluxModule = /** @class */ (function () {
        function InfluxModule() {
        }
        return InfluxModule;
    }());
    InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
    InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
                i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                common.EdCommonModule,
                i2.EdUilibModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent], imports: [i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                common.EdCommonModule,
                i2.EdUilibModule], exports: [InfluxSettingsEditorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            InfluxSettingsEditorComponent
                        ],
                        imports: [
                            i3.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            common.EdCommonModule,
                            i2.EdUilibModule
                        ],
                        exports: [
                            InfluxSettingsEditorComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of influx
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InfluxModule = InfluxModule;
    exports.InfluxSettingsEditorComponent = InfluxSettingsEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=influx.umd.js.map
