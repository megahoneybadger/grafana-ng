import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "uilib";
import * as i3 from "@angular/common";
function InfluxSettingsEditorComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " please enter url ");
} }
function InfluxSettingsEditorComponent_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, InfluxSettingsEditorComponent_5_ng_template_0_Template, 1, 0, "ng-template", 17);
} }
export class InfluxSettingsEditorComponent {
    constructor() {
        this.form = new FormGroup({
            'url': new FormControl(null, Validators.required),
            'whitelistedCookies': new FormControl(null),
            'basicAuthentication': new FormControl(null),
            'withCredentials': new FormControl(null),
            'tlsClientAuth': new FormControl(null),
            'withCaCert': new FormControl(null),
            'skipTlsVerification': new FormControl(null),
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
InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 15, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "tooltip", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "tooltip", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "tooltip", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], [1, "grafana-info-box"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName, i3.NgIf, i2.CheckBoxComponent, i2.TextBoxValidationTemplate], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ds-settings-editor',
                templateUrl: './settings.html'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL3NldHRpbmdzL3NldHRpbmdzLnRzIiwiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9zZXR0aW5ncy9zZXR0aW5ncy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ1NoRSxrQ0FDRDs7O0lBRkEsaUdBQ0M7O0FERkosTUFBTSxPQUFPLDZCQUE2QjtJQU96QztRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFFO1lBQ25ELG9CQUFvQixFQUFFLElBQUksV0FBVyxDQUFFLElBQUksQ0FBRTtZQUU3QyxxQkFBcUIsRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7WUFDOUMsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLENBQUUsSUFBSSxDQUFFO1lBQzFDLGVBQWUsRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7WUFDeEMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksQ0FBRTtZQUNyQyxxQkFBcUIsRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7WUFFOUMsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFFO1lBQ3hELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksQ0FBRTtZQUNuQyxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXBCRCxJQUFJLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7OzBHQUxXLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FDUjFDLDhCQUVDO1FBQUEsNkJBQXlCO1FBQUEsb0JBQUk7UUFBQSxpQkFBSztRQUNsQyw4QkFDQztRQUFBLHFDQUtDO1FBQUEsOEVBQ0M7UUFFRixpQkFBYTtRQUViLGdDQUlhO1FBRWQsaUJBQU07UUFFTiw2QkFBeUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFLO1FBQ2xDLDhCQUNDO1FBQUEsK0JBQ0M7UUFBQSxrQ0FJYztRQUVkLGtDQUtjO1FBQ2YsaUJBQU07UUFFTiwrQkFDQztRQUFBLGtDQUljO1FBRWQsbUNBS2M7UUFDZixpQkFBTTtRQUVOLCtCQUNDO1FBQUEsbUNBSWM7UUFDZixpQkFBTTtRQUdQLGlCQUFNO1FBSU4sOEJBQXlCO1FBQUEsaUNBQWdCO1FBQUEsaUJBQUs7UUFFOUMsK0JBQ0M7UUFBQSxrQ0FJYTtRQUViLCtCQUNDO1FBQUEsa0NBS2E7UUFFYixrQ0FNYTtRQUNkLGlCQUFNO1FBRVAsaUJBQU07UUFFTiwrQkFDQztRQUFBLGdDQUNDO1FBQUEsMkJBQUk7UUFBQSxnQ0FBZTtRQUFBLGlCQUFLO1FBQ3hCLDBCQUNDO1FBQUEsdUxBRUE7UUFBQSw2QkFBTTtRQUFBLCtDQUE4QjtRQUFBLGlCQUFPO1FBQUMscUJBQUc7UUFBQSw2QkFBTTtRQUFBLG1FQUE4QztRQUFBLGlCQUFPO1FBQzFHLHNCQUFLO1FBQUEsc0JBQ0w7UUFBQSx3SEFDRDtRQUFBLGlCQUFJO1FBQ0wsaUJBQU07UUFDUCxpQkFBTTtRQUVOLCtCQUNDO1FBQUEsa0NBU2E7UUFDZCxpQkFBTTtRQUdQLGlCQUFNOztRQTFIRCxvQ0FBa0I7UUFTYyxlQUFpRDtRQUFqRCxzRUFBaUQ7UUE4RG5GLGdCQUFvQjtRQUFwQixrQ0FBb0Isa0JBQUE7UUFPbkIsZUFBZ0I7UUFBaEIsOEJBQWdCLGtCQUFBLFlBQUE7UUFPaEIsZUFBb0I7UUFBcEIsa0NBQW9CLGtCQUFBLFlBQUE7UUF5QnJCLGdCQUE2QjtRQUE3QiwyQ0FBNkIsa0JBQUEsWUFBQSxzQkFBQSx5S0FBQTs7a0REdEduQiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSURhdGFTb3VyY2VTZXR0aW5nc0VkaXRvciB9IGZyb20gJ2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RzLXNldHRpbmdzLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZsdXhTZXR0aW5nc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIElEYXRhU291cmNlU2V0dGluZ3NFZGl0b3Ige1xyXG5cdGZvcm06IEZvcm1Hcm91cDtcclxuXHJcblx0Z2V0IHVybCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3VybCcpO1xyXG5cdH1cclxuXHRcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdCd1cmwnOiBuZXcgRm9ybUNvbnRyb2woIG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQgKSxcclxuXHRcdFx0J3doaXRlbGlzdGVkQ29va2llcyc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cclxuXHRcdFx0J2Jhc2ljQXV0aGVudGljYXRpb24nOiBuZXcgRm9ybUNvbnRyb2woIG51bGwgKSxcclxuXHRcdFx0J3dpdGhDcmVkZW50aWFscyc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHQndGxzQ2xpZW50QXV0aCc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHQnd2l0aENhQ2VydCc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHQnc2tpcFRsc1ZlcmlmaWNhdGlvbic6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHRcclxuXHRcdFx0J2RhdGFiYXNlJzogbmV3IEZvcm1Db250cm9sKCBudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkICksXHJcblx0XHRcdCd1c2VyJzogbmV3IEZvcm1Db250cm9sKCBudWxsICksXHJcblx0XHRcdCdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHQnbWluVGltZUludGVydmFsJzogbmV3IEZvcm1Db250cm9sKCBudWxsIClcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsIjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblxyXG5cdDxoMyBjbGFzcz1cInBhZ2UtaGVhZGluZ1wiPkhUVFA8L2gzPlx0XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cclxuXHRcdDxlZC10ZXh0Ym94XHJcblx0XHRcdGxhYmVsPVwiVVJMXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdFx0dG9vbHRpcD1cIlNwZWNpZnkgYSBjb21wbGV0ZSBIVFRQIFVSTCAoZm9yIGV4YW1wbGUgaHR0cDovL3lvdXJfc2VydmVyOjgwODApXCJcclxuXHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwidXJsXCJcdD5cclxuXHRcdFx0PG5nLXRlbXBsYXRlIGVkVmFsaWRhdGlvblRlbXBsYXRlICpuZ0lmPVwidXJsLmhhc0Vycm9yKCAncmVxdWlyZWQnICkgJiYgdXJsLnRvdWNoZWRcIj5cclxuXHRcdFx0XHRwbGVhc2UgZW50ZXIgdXJsXHJcblx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdFx0PGVkLXRleHRib3hcclxuXHRcdFx0bGFiZWw9XCJXaGl0ZWxpc3RlZCBDb29raWVzXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwid2hpdGVsaXN0ZWRDb29raWVzXCJcdD5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHJcblx0PC9kaXY+XHJcblxyXG5cdDxoMyBjbGFzcz1cInBhZ2UtaGVhZGluZ1wiPkF1dGg8L2gzPlxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRcdGxhYmVsV2lkdGg9XCIxMFwiXHJcblx0XHRcdFx0bGFiZWw9XCJCYXNpYyBBdXRoXCJcclxuXHRcdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJiYXNpY0F1dGhlbnRpY2F0aW9uXCI+XHJcblx0XHRcdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdFx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdFx0XHRsYWJlbD1cIldpdGggQ3JlZGVudGlhbHNcIlxyXG5cdFx0XHRcdHRvb2x0aXA9XCJXaGV0aGVyIGNyZWRlbnRpYWxzIHN1Y2ggYXMgY29va2llcyBvciBhdXRoIGhlYWRlcnMgc2hvdWxkIGJlIHNlbnQgd2l0aCBjcm9zcy1zaXRlIHJlcXVlc3RzLlwiXHJcblx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwid2l0aENyZWRlbnRpYWxzXCI+XHJcblx0XHRcdDwvZWQtY2hlY2tib3g+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRcdGxhYmVsV2lkdGg9XCIxMFwiXHJcblx0XHRcdFx0bGFiZWw9XCJUTFMgQ2xpZW50IEF1dGhcIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cInRsc0NsaWVudEF1dGhcIj5cclxuXHRcdFx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0XHRcdDxlZC1jaGVja2JveCBcclxuXHRcdFx0XHRsYWJlbFdpZHRoPVwiMTBcIlxyXG5cdFx0XHRcdGxhYmVsPVwiV2l0aCBDQSBDZXJ0XCJcclxuXHRcdFx0XHR0b29sdGlwPVwiTmVlZGVkIGZvciB2ZXJpZmluZyBzZWxmLXNpZ25lZCBUTFMgQ2VydHNcIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cIndpdGhDYUNlcnRcIj5cclxuXHRcdFx0PC9lZC1jaGVja2JveD5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdFx0XHRsYWJlbD1cIlNraXAgVExTIFZlcmlmeVwiXHJcblx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwic2tpcFRsc1ZlcmlmaWNhdGlvblwiPlxyXG5cdFx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdFxyXG5cdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdDxoMyBjbGFzcz1cInBhZ2UtaGVhZGluZ1wiPkluZmx1eERCIERldGFpbHM8L2gzPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1ncm91cFwiPlxyXG5cdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdFtsYWJlbF09XCInRGF0YWJhc2UnXCJcclxuXHRcdFx0W2xhYmVsV2lkdGhdPVwiMTBcIlxyXG5cdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJkYXRhYmFzZVwiPlxyXG5cdFx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0XHQ8ZWQtdGV4dGJveCBcclxuXHRcdFx0XHRbbGFiZWxdPVwiJ1VzZXInXCJcclxuXHRcdFx0XHRbbGFiZWxXaWR0aF09XCIxMFwiXHJcblx0XHRcdFx0W3dpZHRoXT1cIjVcIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cInVzZXJcIj5cclxuXHRcdFx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHRcdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdFx0W2xhYmVsXT1cIidQYXNzd29yZCdcIlxyXG5cdFx0XHRcdFtsYWJlbFdpZHRoXT1cIjEwXCJcclxuXHRcdFx0XHRbd2lkdGhdPVwiNVwiXHJcblx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiPlxyXG5cdFx0XHQ8L2VkLXRleHRib3g+XHJcblx0XHQ8L2Rpdj5cclxuXHRcclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJncmFmYW5hLWluZm8tYm94XCI+XHJcblx0XHRcdDxoNT5EYXRhYmFzZSBBY2Nlc3M8L2g1PlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRTZXR0aW5nIHRoZSBkYXRhYmFzZSBmb3IgdGhpcyBkYXRhc291cmNlIGRvZXMgbm90IGRlbnkgYWNjZXNzIHRvIG90aGVyIGRhdGFiYXNlcy4gIFRoZSBJbmZsdXhEQiBxdWVyeSBzeW50YXggYWxsb3dzXHJcblx0XHRcdFx0c3dpdGNoaW5nIHRoZSBkYXRhYmFzZSBpbiB0aGUgcXVlcnkuICBGb3IgZXhhbXBsZTpcclxuXHRcdFx0XHQ8Y29kZT5TSE9XIE1FQVNVUkVNRU5UUyBPTiBfaW50ZXJuYWw8L2NvZGU+IG9yIDxjb2RlPlNFTEVDVCAqIEZST00gXCJfaW50ZXJuYWxcIi4uXCJkYXRhYmFzZVwiIExJTUlUIDEwPC9jb2RlPlxyXG5cdFx0XHRcdDxici8+PGJyLz5cclxuXHRcdFx0XHRUbyBzdXBwb3J0IGRhdGEgaXNvbGF0aW9uIGFuZCBzZWN1cml0eSwgbWFrZSBzdXJlIGFwcHJvcHJpYXRlIHBlcm1pc3Npb25zIGFyZSBjb25maWd1cmVkIGluIEluZmx1eERCLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRbbGFiZWxdPVwiJ01pbiB0aW1lIGludGVydmFsJ1wiXHJcblx0XHRcdFtsYWJlbFdpZHRoXT1cIjExXCJcclxuXHRcdFx0W3dpZHRoXT1cIjVcIlxyXG5cdFx0XHRbcGxhY2Vob2xkZXJdPVwiJzEwcydcIlxyXG5cdFx0XHRbdG9vbHRpcF09XCInQSBsb3dlciBsaW1pdCBmb3IgdGhlIGF1dG8gZ3JvdXAgYnkgdGltZSBpbnRlcnZhbC4gUmVjb21tZW5kZWQgdG8gYmUgc2V0IHRvIHdyaXRlIGZyZXF1ZW5jeSxcclxuXHRcdFx0XHRmb3IgZXhhbXBsZSAxbSBpZiB5b3VyIGRhdGEgaXMgd3JpdHRlbiBldmVyeSBtaW51dGUuJ1wiXHJcblx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdGZvcm1Db250cm9sTmFtZT1cIm1pblRpbWVJbnRlcnZhbFwiPlxyXG5cdFx0PC9lZC10ZXh0Ym94PlxyXG5cdDwvZGl2PlxyXG5cclxuXHRcclxuPC9kaXY+Il19