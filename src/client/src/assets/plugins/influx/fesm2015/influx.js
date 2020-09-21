import { ɵɵtext, ɵɵtemplate, ɵɵdefineComponent, ɵɵelementStart, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate, EdUilibModule } from 'uilib';
import { NgIf, CommonModule } from '@angular/common';
import { EdCommonModule } from 'common';

function InfluxSettingsEditorComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " please enter url ");
} }
function InfluxSettingsEditorComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, InfluxSettingsEditorComponent_5_ng_template_0_Template, 1, 0, "ng-template", 16);
} }
class InfluxSettingsEditorComponent {
    constructor() {
        this.form = new FormGroup({
            'url': new FormControl(null, Validators.required),
            'whitelistedCookies': new FormControl(null),
            'basicAuthentication': new FormControl(false),
            'withCredentials': new FormControl(false),
            'tlsClientAuth': new FormControl(false),
            'withCaCert': new FormControl(false),
            'skipTlsVerification': new FormControl(false),
            'database': new FormControl(null, Validators.required),
            'user': new FormControl(null),
            'password': new FormControl(null),
            'minTimeInterval': new FormControl(null)
        });
    }
    get url() {
        return this.form.get('url');
    }
}
InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
InfluxSettingsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 15, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "tooltip", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "tooltip", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "tooltip", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h3", 1);
        ɵɵtext(2, "HTTP");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "ed-textbox", 3);
        ɵɵtemplate(5, InfluxSettingsEditorComponent_5_Template, 1, 0, undefined, 4);
        ɵɵelementEnd();
        ɵɵelement(6, "ed-textbox", 5);
        ɵɵelementEnd();
        ɵɵelementStart(7, "h3", 1);
        ɵɵtext(8, "Auth");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 2);
        ɵɵelementStart(10, "div", 6);
        ɵɵelement(11, "ed-checkbox", 7);
        ɵɵelement(12, "ed-checkbox", 8);
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 6);
        ɵɵelement(14, "ed-checkbox", 9);
        ɵɵelement(15, "ed-checkbox", 10);
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 6);
        ɵɵelement(17, "ed-checkbox", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "h3", 1);
        ɵɵtext(19, "InfluxDB Details");
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 2);
        ɵɵelement(21, "ed-textbox", 12);
        ɵɵelementStart(22, "div", 6);
        ɵɵelement(23, "ed-textbox", 13);
        ɵɵelement(24, "ed-textbox", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "div", 2);
        ɵɵelementStart(26, "ed-info-box");
        ɵɵelementStart(27, "h5");
        ɵɵtext(28, "Database Access");
        ɵɵelementEnd();
        ɵɵelementStart(29, "p");
        ɵɵtext(30, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
        ɵɵelementStart(31, "code");
        ɵɵtext(32, "SHOW MEASUREMENTS ON _internal");
        ɵɵelementEnd();
        ɵɵtext(33, " or ");
        ɵɵelementStart(34, "code");
        ɵɵtext(35, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
        ɵɵelementEnd();
        ɵɵelement(36, "br");
        ɵɵelement(37, "br");
        ɵɵtext(38, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(39, "div", 2);
        ɵɵelement(40, "ed-textbox", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.url.hasError("required") && ctx.url.touched);
        ɵɵadvance(16);
        ɵɵproperty("label", "Database")("labelWidth", 10);
        ɵɵadvance(2);
        ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
        ɵɵadvance(1);
        ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
        ɵɵadvance(16);
        ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
    } }, directives: [NgControlStatusGroup, FormGroupDirective, TextBoxComponent, NgControlStatus, FormControlName, NgIf, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate], encapsulation: 2 });
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
