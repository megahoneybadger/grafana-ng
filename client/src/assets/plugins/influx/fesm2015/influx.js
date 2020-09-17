import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent, EdUilibModule } from 'uilib';
import { EdCommonModule } from 'common';
import { CommonModule } from '@angular/common';

class InfluxSettingsEditorComponent {
    constructor() {
        this.form = new FormGroup({
            'database': new FormControl(null, Validators.required),
            'user': new FormControl(null),
            'password': new FormControl(null),
            'minTimeInterval': new FormControl(null)
        });
    }
}
InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
InfluxSettingsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 24, vars: 14, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["formControlName", "database", 3, "label", "labelWidth"], [1, "gf-form-inline"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], [1, "grafana-info-box"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h3", 1);
        ɵɵtext(2, "InfluxDB Details");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵelement(4, "ed-textbox", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵelement(6, "ed-textbox", 5);
        ɵɵelement(7, "ed-textbox", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 2);
        ɵɵelementStart(9, "div", 7);
        ɵɵelementStart(10, "h5");
        ɵɵtext(11, "Database Access");
        ɵɵelementEnd();
        ɵɵelementStart(12, "p");
        ɵɵtext(13, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
        ɵɵelementStart(14, "code");
        ɵɵtext(15, "SHOW MEASUREMENTS ON _internal");
        ɵɵelementEnd();
        ɵɵtext(16, " or ");
        ɵɵelementStart(17, "code");
        ɵɵtext(18, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
        ɵɵelementEnd();
        ɵɵelement(19, "br");
        ɵɵelement(20, "br");
        ɵɵtext(21, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 2);
        ɵɵelement(23, "ed-textbox", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(4);
        ɵɵproperty("label", "Database")("labelWidth", 10);
        ɵɵadvance(2);
        ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
        ɵɵadvance(1);
        ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
        ɵɵadvance(16);
        ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
    } }, directives: [NgControlStatusGroup, FormGroupDirective, TextBoxComponent, NgControlStatus, FormControlName], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ds-settings-editor',
                templateUrl: './settings.html'
            }]
    }], function () { return []; }, null); })();

class InfluxModule {
}
InfluxModule.ɵmod = ɵɵdefineNgModule({ type: InfluxModule });
InfluxModule.ɵinj = ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    InfluxSettingsEditorComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule
                ],
                exports: [
                    InfluxSettingsEditorComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of influx
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InfluxModule, InfluxSettingsEditorComponent };
//# sourceMappingURL=influx.js.map
