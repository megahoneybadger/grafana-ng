import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "uilib";
export class InfluxSettingsEditorComponent {
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
InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 24, vars: 14, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["formControlName", "database", 3, "label", "labelWidth"], [1, "gf-form-inline"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], [1, "grafana-info-box"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("label", "Database")("labelWidth", 10);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ds-settings-editor',
                templateUrl: './settings.html'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL3NldHRpbmdzL3NldHRpbmdzLnRzIiwiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9zZXR0aW5ncy9zZXR0aW5ncy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNcEUsTUFBTSxPQUFPLDZCQUE2QjtJQUd6QztRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFFO1lBQ3hELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFFLElBQUksQ0FBRTtZQUNuQyxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7MEdBVlcsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNQMUMsOEJBRUM7UUFBQSw2QkFBeUI7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBSztRQUU5Qyw4QkFDQztRQUFBLGdDQUlhO1FBRWIsOEJBQ0M7UUFBQSxnQ0FLYTtRQUViLGdDQU1hO1FBQ2QsaUJBQU07UUFFUCxpQkFBTTtRQUVOLDhCQUNDO1FBQUEsOEJBQ0M7UUFBQSwyQkFBSTtRQUFBLGdDQUFlO1FBQUEsaUJBQUs7UUFDeEIsMEJBQ0M7UUFBQSx1TEFFQTtRQUFBLDZCQUFNO1FBQUEsK0NBQThCO1FBQUEsaUJBQU87UUFBQyxxQkFBRztRQUFBLDZCQUFNO1FBQUEsbUVBQThDO1FBQUEsaUJBQU87UUFDMUcsc0JBQUs7UUFBQSxzQkFDTDtRQUFBLHdIQUNEO1FBQUEsaUJBQUk7UUFDTCxpQkFBTTtRQUNQLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSxpQ0FTYTtRQUNkLGlCQUFNO1FBR1AsaUJBQU07O1FBekRELG9DQUFrQjtRQU1wQixlQUFvQjtRQUFwQixrQ0FBb0Isa0JBQUE7UUFPbkIsZUFBZ0I7UUFBaEIsOEJBQWdCLGtCQUFBLFlBQUE7UUFPaEIsZUFBb0I7UUFBcEIsa0NBQW9CLGtCQUFBLFlBQUE7UUF5QnJCLGdCQUE2QjtRQUE3QiwyQ0FBNkIsa0JBQUEsWUFBQSxzQkFBQSx5S0FBQTs7a0REdENuQiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHMtc2V0dGluZ3MtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmx1eFNldHRpbmdzRWRpdG9yQ29tcG9uZW50e1xyXG5cdGZvcm06IEZvcm1Hcm91cDtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdCdkYXRhYmFzZSc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCApLFxyXG5cdFx0XHQndXNlcic6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApLFxyXG5cdFx0XHQncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woIG51bGwgKSxcclxuXHRcdFx0J21pblRpbWVJbnRlcnZhbCc6IG5ldyBGb3JtQ29udHJvbCggbnVsbCApXHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCI8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cclxuXHQ8aDMgY2xhc3M9XCJwYWdlLWhlYWRpbmdcIj5JbmZsdXhEQiBEZXRhaWxzPC9oMz5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRbbGFiZWxdPVwiJ0RhdGFiYXNlJ1wiXHJcblx0XHRcdFtsYWJlbFdpZHRoXT1cIjEwXCJcclxuXHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwiZGF0YWJhc2VcIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdFx0W2xhYmVsXT1cIidVc2VyJ1wiXHJcblx0XHRcdFx0W2xhYmVsV2lkdGhdPVwiMTBcIlxyXG5cdFx0XHRcdFt3aWR0aF09XCI1XCJcclxuXHRcdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJ1c2VyXCI+XHJcblx0XHRcdDwvZWQtdGV4dGJveD5cclxuXHJcblx0XHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRcdFtsYWJlbF09XCInUGFzc3dvcmQnXCJcclxuXHRcdFx0XHRbbGFiZWxXaWR0aF09XCIxMFwiXHJcblx0XHRcdFx0W3dpZHRoXT1cIjVcIlxyXG5cdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuXHRcdFx0PC9lZC10ZXh0Ym94PlxyXG5cdFx0PC9kaXY+XHJcblx0XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3JhZmFuYS1pbmZvLWJveFwiPlxyXG5cdFx0XHQ8aDU+RGF0YWJhc2UgQWNjZXNzPC9oNT5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0U2V0dGluZyB0aGUgZGF0YWJhc2UgZm9yIHRoaXMgZGF0YXNvdXJjZSBkb2VzIG5vdCBkZW55IGFjY2VzcyB0byBvdGhlciBkYXRhYmFzZXMuICBUaGUgSW5mbHV4REIgcXVlcnkgc3ludGF4IGFsbG93c1xyXG5cdFx0XHRcdHN3aXRjaGluZyB0aGUgZGF0YWJhc2UgaW4gdGhlIHF1ZXJ5LiAgRm9yIGV4YW1wbGU6XHJcblx0XHRcdFx0PGNvZGU+U0hPVyBNRUFTVVJFTUVOVFMgT04gX2ludGVybmFsPC9jb2RlPiBvciA8Y29kZT5TRUxFQ1QgKiBGUk9NIFwiX2ludGVybmFsXCIuLlwiZGF0YWJhc2VcIiBMSU1JVCAxMDwvY29kZT5cclxuXHRcdFx0XHQ8YnIvPjxici8+XHJcblx0XHRcdFx0VG8gc3VwcG9ydCBkYXRhIGlzb2xhdGlvbiBhbmQgc2VjdXJpdHksIG1ha2Ugc3VyZSBhcHByb3ByaWF0ZSBwZXJtaXNzaW9ucyBhcmUgY29uZmlndXJlZCBpbiBJbmZsdXhEQi5cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XHJcblx0XHQ8ZWQtdGV4dGJveCBcclxuXHRcdFx0W2xhYmVsXT1cIidNaW4gdGltZSBpbnRlcnZhbCdcIlxyXG5cdFx0XHRbbGFiZWxXaWR0aF09XCIxMVwiXHJcblx0XHRcdFt3aWR0aF09XCI1XCJcclxuXHRcdFx0W3BsYWNlaG9sZGVyXT1cIicxMHMnXCJcclxuXHRcdFx0W3Rvb2x0aXBdPVwiJ0EgbG93ZXIgbGltaXQgZm9yIHRoZSBhdXRvIGdyb3VwIGJ5IHRpbWUgaW50ZXJ2YWwuIFJlY29tbWVuZGVkIHRvIGJlIHNldCB0byB3cml0ZSBmcmVxdWVuY3ksXHJcblx0XHRcdFx0Zm9yIGV4YW1wbGUgMW0gaWYgeW91ciBkYXRhIGlzIHdyaXR0ZW4gZXZlcnkgbWludXRlLidcIlxyXG5cdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJtaW5UaW1lSW50ZXJ2YWxcIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0XHJcbjwvZGl2PiJdfQ==