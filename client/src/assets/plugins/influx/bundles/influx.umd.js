(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('uilib'), require('common'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('influx', ['exports', '@angular/core', '@angular/forms', 'uilib', 'common', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.influx = {}, global.ng.core, global.ng.forms, global.i2, global.common$1, global.ng.common));
}(this, (function (exports, i0, i1, i2, common$1, common) { 'use strict';

    var InfluxSettingsEditorComponent = /** @class */ (function () {
        function InfluxSettingsEditorComponent() {
            this.form = new i1.FormGroup({
                'database': new i1.FormControl(null, i1.Validators.required),
                'user': new i1.FormControl(null),
                'password': new i1.FormControl(null),
                'minTimeInterval': new i1.FormControl(null)
            });
        }
        return InfluxSettingsEditorComponent;
    }());
    InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
    InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 24, vars: 14, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["formControlName", "database", 3, "label", "labelWidth"], [1, "gf-form-inline"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], [1, "grafana-info-box"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h3", 1);
                i0.ɵɵtext(2, "InfluxDB Details");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelement(4, "ed-textbox", 3);
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵelement(6, "ed-textbox", 5);
                i0.ɵɵelement(7, "ed-textbox", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 2);
                i0.ɵɵelementStart(9, "div", 7);
                i0.ɵɵelementStart(10, "h5");
                i0.ɵɵtext(11, "Database Access");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "p");
                i0.ɵɵtext(13, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
                i0.ɵɵelementStart(14, "code");
                i0.ɵɵtext(15, "SHOW MEASUREMENTS ON _internal");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(16, " or ");
                i0.ɵɵelementStart(17, "code");
                i0.ɵɵtext(18, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(19, "br");
                i0.ɵɵelement(20, "br");
                i0.ɵɵtext(21, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "div", 2);
                i0.ɵɵelement(23, "ed-textbox", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("label", "Database")("labelWidth", 10);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
            }
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName], encapsulation: 2 });
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
                common.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                common$1.EdCommonModule,
                i2.EdUilibModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent], imports: [common.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                common$1.EdCommonModule,
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
                            common.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            common$1.EdCommonModule,
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
