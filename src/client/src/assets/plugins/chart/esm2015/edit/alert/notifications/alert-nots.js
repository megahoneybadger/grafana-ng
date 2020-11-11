import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { ErrorMessages, Notes } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
function AlertNotificationsEditorComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "i", 11);
    i0.ɵɵlistener("click", function AlertNotificationsEditorComponent_span_7_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r3); const n_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(n_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    var tmp_0_0 = null;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00A0", (tmp_0_0 = ctx_r0.getChannelById(n_r1)) == null ? null : tmp_0_0.name, "\u00A0 ");
} }
export class AlertNotificationsEditorComponent extends BaseChartEditorComponent {
    constructor(panel, alertService) {
        var _a;
        super(panel);
        this.alertService = alertService;
        this.availableChannels = [];
        this.alert.notifications = (_a = this.notifications) !== null && _a !== void 0 ? _a : [];
        this
            .alertService
            .getNotifications()
            .subscribe(x => {
            this.availableChannels = x;
            this.alert.notifications = this
                .notifications
                .filter(y => this.availableChannels.find(z => z.id == y));
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_GET_ALERT_NOTIFS); });
    }
    get channels$() {
        return of([...this
                .availableChannels
                .filter(x => { var _a; return !((_a = this.notifications) === null || _a === void 0 ? void 0 : _a.includes(x.id)); })
                .map(x => x.name)]);
    }
    get notifications() {
        return this.alert.notifications;
    }
    getChannelByName(name) {
        return this.availableChannels.find(x => x.name == name);
    }
    getChannelById(id) {
        return this.availableChannels.find(x => x.id == id);
    }
    onAdd(e) {
        const notif = this.getChannelByName(e);
        if (notif) {
            this.notifications.push(notif.id);
        }
    }
    onRemove(id) {
        const index = this.notifications.findIndex(x => x == id);
        if (-1 !== index) {
            this.notifications.splice(index, 1);
        }
    }
}
AlertNotificationsEditorComponent.ɵfac = function AlertNotificationsEditorComponent_Factory(t) { return new (t || AlertNotificationsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.AlertService)); };
AlertNotificationsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertNotificationsEditorComponent, selectors: [["editor-alert-notifications"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "section-heading"], [1, "gf-form-inline"], [1, "gf-form-inline", "max-width-30"], [1, "gf-form"], [1, "gf-form-label", "width-8"], ["class", "gf-form gf-form-label", 4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--v-stretch"], ["rows", "10", "placeholder", "Notification message details...", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], [1, "gf-form", "gf-form-label"], [1, "fa", "fa-bell"], ["ng-if", "nc.isDefault === false", 1, "fa", "fa-remove", "pointer", "muted", 3, "click"]], template: function AlertNotificationsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h5", 0);
        i0.ɵɵtext(1, "Notifications");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "Send to");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, AlertNotificationsEditorComponent_span_7_Template, 4, 1, "span", 5);
        i0.ɵɵelementStart(8, "ed-autocomplete-picker", 6);
        i0.ɵɵlistener("pick", function AlertNotificationsEditorComponent_Template_ed_autocomplete_picker_pick_8_listener($event) { return ctx.onAdd($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "span", 4);
        i0.ɵɵtext(11, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "textarea", 8);
        i0.ɵɵlistener("ngModelChange", function AlertNotificationsEditorComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.alert.message = $event; });
        i0.ɵɵtext(13, "\t");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.notifications);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("request", ctx.channels$);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.alert.message);
    } }, directives: [i2.NgForOf, i3.AutoCompletePickerComponent, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertNotificationsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-notifications',
                templateUrl: './alert-nots.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.AlertService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbm90cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvbm90aWZpY2F0aW9ucy9hbGVydC1ub3RzLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9ub3RpZmljYXRpb25zL2FsZXJ0LW5vdHMuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQXVCLFdBQVcsRUFBZ0IsTUFBTSxRQUFRLENBQUM7QUFDeEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7SUNLekUsK0JBQ0M7SUFBQSx3QkFBMEI7SUFBQSxZQUMxQjtJQUFBLDZCQUMwRDtJQUF6RCwrTkFBcUI7SUFBZ0MsaUJBQUk7SUFDM0QsaUJBQU87Ozs7O0lBSG9CLGVBQzFCO0lBRDBCLGlIQUMxQjs7QURESCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsd0JBQXdCO0lBdUI3RSxZQUN5QixLQUFZLEVBQzNCLFlBQTBCOztRQUNoQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFEVCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXZCcEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQTJCbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGFBQWEsbUNBQUksRUFBRSxDQUFDO1FBRXBELElBQUk7YUFDRCxZQUFZO2FBQ1osZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUyxDQUNSLENB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aUM7Y0FKN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxtQkFBbUI7YUFDakM7O3NCQXlCSSxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlLCBQYW5lbCwgUEFORUxfVE9LRU4sIEFsZXJ0Q2hhbm5lbCB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlcywgTm90ZXMgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0LW5vdGlmaWNhdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtbm90cy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydE5vdGlmaWNhdGlvbnNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcblxuICBhdmFpbGFibGVDaGFubmVsczogQWxlcnRDaGFubmVsW10gPSBbXTtcblxuICBnZXQgY2hhbm5lbHMkKCkge1xuICAgIHJldHVybiBvZiggWy4uLnRoaXNcbiAgICAgIC5hdmFpbGFibGVDaGFubmVsc1xuXHRcdFx0LmZpbHRlciggeCA9PiAhdGhpcy5ub3RpZmljYXRpb25zPy5pbmNsdWRlcyggeC5pZCApIClcbiAgICBcdC5tYXAoIHggPT4geC5uYW1lICkgXSApXG4gIH1cblxuICBnZXQgbm90aWZpY2F0aW9ucygpOiBudW1iZXJbXXtcbiAgICByZXR1cm4gdGhpcy5hbGVydC5ub3RpZmljYXRpb25zO1xuICB9XG4gIFxuICBnZXRDaGFubmVsQnlOYW1lKCBuYW1lOiBzdHJpbmcgKXtcblx0XHRyZXR1cm4gdGhpcy5hdmFpbGFibGVDaGFubmVscy5maW5kKCB4ID0+IHgubmFtZSA9PSBuYW1lICk7XG5cdH1cblxuXHRnZXRDaGFubmVsQnlJZCggaWQ6IG51bWJlciApe1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUNoYW5uZWxzLmZpbmQoIHggPT4geC5pZCA9PSBpZCApO1xuXHR9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSl7XG4gICAgICBzdXBlciggcGFuZWwgKTtcblxuICAgICAgXG4gICAgICB0aGlzLmFsZXJ0Lm5vdGlmaWNhdGlvbnMgPSB0aGlzLm5vdGlmaWNhdGlvbnMgPz8gW107XG5cbiAgICAgIHRoaXNcbiAgICAgICAgLmFsZXJ0U2VydmljZVxuICAgICAgICAuZ2V0Tm90aWZpY2F0aW9ucygpXG4gICAgICAgIC5zdWJzY3JpYmUoIFxuICAgICAgICAgIHggPT4ge1xuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDaGFubmVscyA9IHhcblxuICAgICAgICAgICAgdGhpcy5hbGVydC5ub3RpZmljYXRpb25zID0gdGhpc1xuICAgICAgICAgICAgICAubm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICAuZmlsdGVyKCB5ID0+IHRoaXMuYXZhaWxhYmxlQ2hhbm5lbHMuZmluZCh6ID0+IHouaWQgPT0geSApICApIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfR0VUX0FMRVJUX05PVElGUyApKTtcbiAgfVxuXG4gIG9uQWRkKCBlOiBzdHJpbmcgKSB7XG4gICAgY29uc3Qgbm90aWYgPSB0aGlzLmdldENoYW5uZWxCeU5hbWUoIGUgKTtcbiAgICBcblx0XHRpZiggbm90aWYgKXtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoKCBub3RpZi5pZCApO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVtb3ZlKCBpZDogbnVtYmVyICl7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm5vdGlmaWNhdGlvbnMuZmluZEluZGV4KCB4ID0+IHggPT0gaWQgKTtcblx0XHRcbiAgICBpZiAoIC0xICE9PSBpbmRleCApIHtcblx0XHRcdHRoaXMubm90aWZpY2F0aW9ucy5zcGxpY2UoIGluZGV4LCAxIClcbiAgICB9XG5cdH1cbn1cbiIsIjxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPk5vdGlmaWNhdGlvbnM8L2g1PlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lIG1heC13aWR0aC0zMFwiPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC04XCI+U2VuZCB0bzwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLWxhYmVsXCIgKm5nRm9yPVwibGV0IG4gb2Ygbm90aWZpY2F0aW9uc1wiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWJlbGxcIj48L2k+Jm5ic3A7e3tnZXRDaGFubmVsQnlJZCggbiApPy5uYW1lfX0mbmJzcDtcclxuXHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1yZW1vdmUgcG9pbnRlciBtdXRlZFwiIFxyXG5cdFx0XHRcdChjbGljayk9XCJvblJlbW92ZShuKVwiIG5nLWlmPVwibmMuaXNEZWZhdWx0ID09PSBmYWxzZVwiPjwvaT5cclxuXHRcdDwvc3Bhbj5cclxuXHJcblx0XHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdFx0cGxhY2Vob2xkZXI9XCJmYSBmYS1wbHVzXCIgXHJcblx0XHRcdHJlYWRvbmx5PVwidHJ1ZVwiXHJcblx0XHRcdFtyZXF1ZXN0XT1cImNoYW5uZWxzJFwiXHJcblx0XHRcdChwaWNrKT1cIm9uQWRkKCRldmVudClcIj5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tdi1zdHJldGNoXCI+XHJcblx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLThcIj5NZXNzYWdlPC9zcGFuPlxyXG5cdDx0ZXh0YXJlYSBcclxuXHRcdGNsYXNzPVwiZ2YtZm9ybS1pbnB1dFwiIFxyXG5cdFx0cm93cz1cIjEwXCIgXHJcblx0XHRbKG5nTW9kZWwpXT1cImFsZXJ0Lm1lc3NhZ2VcIlxyXG5cdFx0cGxhY2Vob2xkZXI9XCJOb3RpZmljYXRpb24gbWVzc2FnZSBkZXRhaWxzLi4uXCI+XHJcblx0PC90ZXh0YXJlYT5cclxuPC9kaXY+XHJcbiJdfQ==