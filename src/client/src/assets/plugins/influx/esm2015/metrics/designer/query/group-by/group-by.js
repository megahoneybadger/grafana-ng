import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseQueryComponent } from '../query-base';
import { GroupByFillOptions, GroupByObject, GroupByOption, GroupByTimeOptions, MetricVars, OrderByTime } from '../../../metrics.m';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./tag-label.c";
function GroupByEditorComponent_ed_autocomplete_picker_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 12);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_ed_autocomplete_picker_5_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.timeValue = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.timeValue)("request", ctx_r0.timeOptions$);
} }
function GroupByEditorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("removed", function GroupByEditorComponent_div_6_Template_div_removed_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onRemoveTag($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r8.params[0]);
} }
function GroupByEditorComponent_ed_autocomplete_picker_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_ed_autocomplete_picker_7_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.fillValue = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r2.fillValue)("request", ctx_r2.fillOptions$);
} }
function GroupByEditorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, " ORDER BY ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 15);
    i0.ɵɵlistener("click", function GroupByEditorComponent_div_11_Template_label_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); ctx_r13.query.order = ctx_r13.OrderByTimeRef.Asc; return ctx_r13.needRebuild(); });
    i0.ɵɵtext(5, " time ");
    i0.ɵɵelementStart(6, "span", 16);
    i0.ɵɵtext(7, "DESC");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelement(10, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function GroupByEditorComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, "LIMIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 18);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_12_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.limit = $event; })("change", function GroupByEditorComponent_div_12_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r4.limit);
} }
function GroupByEditorComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, "SLIMIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 18);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_13_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.slimit = $event; })("change", function GroupByEditorComponent_div_13_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r5.slimit);
} }
export class GroupByEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.OrderByTimeRef = OrderByTime;
        this.selectedCommands = [];
        this.availableCommands = [
            new GroupByCommand(GroupByCommandType.Fill, "fill(null)", "null"),
            new GroupByCommand(GroupByCommandType.Time, "time($interval)", MetricVars.TIME_INTERVAL),
            new GroupByCommand(GroupByCommandType.Limit, "LIMIT", 10),
            new GroupByCommand(GroupByCommandType.SLimit, "SLIMIT", 10),
            new GroupByCommand(GroupByCommandType.OrderBy, "ORDER BY time DESC")
        ];
    }
    get limit() {
        return this.query.limit;
    }
    set limit(l) {
        this.query.limit = l;
        if (!l) {
            this.needRebuild();
        }
    }
    get slimit() {
        return this.query.slimit;
    }
    set slimit(l) {
        this.query.slimit = l;
        if (!l) {
            this.needRebuild();
        }
    }
    get time() {
        return this.groupBy.find(x => x.type == GroupByOption.Time);
    }
    get timeValue() {
        return this.time.params[0];
    }
    set timeValue(v) {
        if (v == this.REMOVE) {
            const index = this
                .groupBy
                .findIndex(x => x.type == GroupByOption.Time);
            if (-1 !== index) {
                this.groupBy.splice(index, 1);
            }
        }
        else {
            this.time.params = [v];
        }
        this.needRebuild();
    }
    get tags() {
        return this.query.groupBy.filter(x => x.type == GroupByOption.Tag);
    }
    get fill() {
        return this.groupBy.find(x => x.type == GroupByOption.Fill);
    }
    get fillValue() {
        return this.fill.params[0];
    }
    set fillValue(v) {
        if (v == this.REMOVE) {
            const index = this
                .groupBy
                .findIndex(x => x.type == GroupByOption.Fill);
            if (-1 !== index) {
                this.groupBy.splice(index, 1);
            }
        }
        else {
            this.fill.params = [v];
        }
        this.needRebuild();
    }
    get timeOptions$() {
        return of([this.REMOVE, ...Object.values(GroupByTimeOptions)]);
    }
    get fillOptions$() {
        return of([this.REMOVE, ...Object.values(GroupByFillOptions)]);
    }
    get groupByOptions$() {
        var options = [];
        if (!this.fill) {
            options.push(this.availableCommands[0].text);
        }
        if (!this.time) {
            options.push(this.availableCommands[1].text);
        }
        if (!this.query.limit) {
            options.push(this.availableCommands[2].text);
        }
        if (!this.query.slimit) {
            options.push(this.availableCommands[3].text);
        }
        if (this.query.order != OrderByTime.Desc) {
            options.push(this.availableCommands[4].text);
        }
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .proxy(q)
            .pipe(map(x => {
            const tags = (!x.length) ?
                [] : x[0].values.reduce((acc, value) => acc.concat(value), []);
            this.availableCommands = this
                .availableCommands
                .filter(x => x.type != GroupByCommandType.Tag);
            tags.forEach(e => this.availableCommands.push(new GroupByCommand(GroupByCommandType.Tag, `tag(${e})`, e)));
            const tagCommands = this
                .availableCommands
                .filter(c => c.type == GroupByCommandType.Tag)
                .filter(c => !this.query.groupBy.find(x => x.type == GroupByCommandType.Tag && x.params[0] == c.value))
                .map(c => c.text);
            return [...options, ...tagCommands];
        }));
    }
    onOptionPick(e) {
        var command = this
            .availableCommands
            .find(x => x.text == e);
        if (!command) {
            return;
        }
        this.selectedCommands.push(command);
        switch (command.type) {
            case GroupByCommandType.Time:
                this.groupBy.push(new GroupByObject(GroupByOption.Time, [command.value]));
                break;
            case GroupByCommandType.Fill:
                this.groupBy.push(new GroupByObject(GroupByOption.Fill, [command.value]));
                break;
            case GroupByCommandType.Limit:
                this.query.limit = command.value;
                break;
            case GroupByCommandType.SLimit:
                this.query.slimit = command.value;
                break;
            case GroupByCommandType.OrderBy:
                this.query.order = OrderByTime.Desc;
                break;
            case GroupByCommandType.Tag:
                this.groupBy.push(new GroupByObject(GroupByOption.Tag, [command.value]));
                break;
        }
        this.needRebuild();
    }
    onRemoveTag(t) {
        this.query.groupBy = this
            .groupBy
            .filter(x => !(x.type == GroupByOption.Tag && x.params[0] == t));
        this.needRebuild();
    }
}
GroupByEditorComponent.ɵfac = function GroupByEditorComponent_Factory(t) { return new (t || GroupByEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
GroupByEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupByEditorComponent, selectors: [["group-by-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 8, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange", 4, "ngIf"], ["tag-label", "", "class", "gf-form pointer", 3, "value", "removed", 4, "ngFor", "ngForOf"], ["formatString", "fill({0})", 3, "ngModel", "request", "ngModelChange", 4, "ngIf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["class", "gf-form-inline", 4, "ngIf"], [1, "gf-form", "max-width-30"], ["type", "text", "spellcheck", "false", "placeholder", "Naming pattern", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange"], ["tag-label", "", 1, "gf-form", "pointer", 3, "value", "removed"], ["formatString", "fill({0})", 3, "ngModel", "request", "ngModelChange"], [1, "gf-form-label", "pointer", 3, "click"], [1, "query-keyword"], [1, "fa", "fa-remove", "ml-1"], ["type", "text", "spellcheck", "false", "placeholder", "No Limit", 1, "gf-form-input", "width-9", 3, "ngModel", "ngModelChange", "change"]], template: function GroupByEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4, "GROUP BY");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, GroupByEditorComponent_ed_autocomplete_picker_5_Template, 1, 2, "ed-autocomplete-picker", 3);
        i0.ɵɵtemplate(6, GroupByEditorComponent_div_6_Template, 1, 1, "div", 4);
        i0.ɵɵtemplate(7, GroupByEditorComponent_ed_autocomplete_picker_7_Template, 1, 2, "ed-autocomplete-picker", 5);
        i0.ɵɵelementStart(8, "ed-autocomplete-picker", 6);
        i0.ɵɵlistener("pick", function GroupByEditorComponent_Template_ed_autocomplete_picker_pick_8_listener($event) { return ctx.onOptionPick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelement(10, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, GroupByEditorComponent_div_11_Template, 11, 0, "div", 9);
        i0.ɵɵtemplate(12, GroupByEditorComponent_div_12_Template, 7, 1, "div", 9);
        i0.ɵɵtemplate(13, GroupByEditorComponent_div_13_Template, 7, 1, "div", 9);
        i0.ɵɵelementStart(14, "div", 0);
        i0.ɵɵelementStart(15, "div", 10);
        i0.ɵɵelementStart(16, "label", 2);
        i0.ɵɵtext(17, "ALIAS BY");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "input", 11);
        i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_Template_input_ngModelChange_18_listener($event) { return ctx.query.alias = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 7);
        i0.ɵɵelement(20, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.time);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.fill);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("request", ctx.groupByOptions$);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.query.order == ctx.OrderByTimeRef.Desc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.query.limit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.query.slimit);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.query.alias);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.AutoCompletePickerComponent, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.GroupByTagLabelComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupByEditorComponent, [{
        type: Component,
        args: [{
                selector: 'group-by-editor',
                templateUrl: './group-by.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, null); })();
class GroupByCommand {
    constructor(type, text, value = undefined) {
        this.type = type;
        this.text = text;
        this.value = value;
    }
}
var GroupByCommandType;
(function (GroupByCommandType) {
    GroupByCommandType[GroupByCommandType["Fill"] = 0] = "Fill";
    GroupByCommandType[GroupByCommandType["Time"] = 1] = "Time";
    GroupByCommandType[GroupByCommandType["Tag"] = 2] = "Tag";
    GroupByCommandType[GroupByCommandType["Limit"] = 3] = "Limit";
    GroupByCommandType[GroupByCommandType["SLimit"] = 4] = "SLimit";
    GroupByCommandType[GroupByCommandType["OrderBy"] = 5] = "OrderBy";
})(GroupByCommandType || (GroupByCommandType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvZ3JvdXAtYnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvZ3JvdXAtYnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTRCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFDeEMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDQW5DLGtEQUswQjtJQUh4Qix5UEFBdUI7SUFHekIsaUJBQTBCOzs7SUFIeEIsMENBQXVCLGdDQUFBOzs7O0lBS3pCLCtCQUVNO0lBRG9CLHlNQUFpQztJQUMzRCxpQkFBTTs7O0lBRnNCLHNDQUF1Qjs7OztJQUluRCxrREFJeUI7SUFGdkIsNFBBQXVCO0lBRXpCLGlCQUF5Qjs7O0lBRnZCLDBDQUF1QixnQ0FBQTs7OztJQWdCM0IsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLGdDQUNFO0lBQUEsMEJBQ0Y7SUFBQSxpQkFBUTtJQUVSLGlDQUNFO0lBRG1DLGdQQUF1RDtJQUMxRixzQkFBSztJQUFB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dEIsMkRBQUksQ0FBQTtJQUNKLDJEQUFJLENBQUE7SUFDSix5REFBRyxDQUFBO0lBQ0gsNkRBQUssQ0FBQTtJQUNMLCtEQUFNLENBQUE7SUFDTixpRUFBTyxDQUFBO0FBQ1IsQ0FBQyxFQVBJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFPdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgQmFzZVF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcXVlcnktYmFzZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgR3JvdXBCeUZpbGxPcHRpb25zLCBHcm91cEJ5T2JqZWN0LCBcclxuICBHcm91cEJ5T3B0aW9uLCBHcm91cEJ5VGltZU9wdGlvbnMsIE1ldHJpY1ZhcnMsIE9yZGVyQnlUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWV0cmljcy5tJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdncm91cC1ieS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1ieS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBCeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCAge1xyXG5cclxuICBhdmFpbGFibGVDb21tYW5kcyA6IEFycmF5PEdyb3VwQnlDb21tYW5kPjtcclxuICBzZWxlY3RlZENvbW1hbmRzIDogQXJyYXk8R3JvdXBCeUNvbW1hbmQ+O1xyXG4gIE9yZGVyQnlUaW1lUmVmID0gT3JkZXJCeVRpbWU7XHJcblxyXG4gIGdldCBsaW1pdCgpIDogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLnF1ZXJ5LmxpbWl0O1xyXG5cdH1cclxuXHJcblx0c2V0IGxpbWl0KCBsOiBudW1iZXIgKXtcclxuICAgIHRoaXMucXVlcnkubGltaXQgPSBsO1xyXG4gICAgXHJcbiAgICBpZiggIWwgKXtcclxuICAgICAgdGhpcy5uZWVkUmVidWlsZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXQgc2xpbWl0KCkgOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVlcnkuc2xpbWl0O1xyXG5cdH1cclxuXHJcblx0c2V0IHNsaW1pdCggbDogbnVtYmVyICl7XHJcbiAgICB0aGlzLnF1ZXJ5LnNsaW1pdCA9IGw7XHJcbiAgICBcclxuICAgIGlmKCAhbCApe1xyXG4gICAgICB0aGlzLm5lZWRSZWJ1aWxkKCk7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuXHRnZXQgdGltZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdyb3VwQnkuZmluZCggeCA9PiB4LnR5cGUgPT0gR3JvdXBCeU9wdGlvbi5UaW1lICk7XHJcblx0fVxyXG5cclxuXHRnZXQgdGltZVZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZS5wYXJhbXNbIDAgXTtcclxuICB9XHJcbiAgXHJcbiAgc2V0IHRpbWVWYWx1ZSggdjogc3RyaW5nICl7XHJcbiAgICBpZiggdiA9PSB0aGlzLlJFTU9WRSApe1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXNcclxuICAgICAgICAuZ3JvdXBCeVxyXG4gICAgICAgIC5maW5kSW5kZXgoIHg9PiB4LnR5cGUgPT0gR3JvdXBCeU9wdGlvbi5UaW1lICk7XHJcblxyXG4gICAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgICAgdGhpcy5ncm91cEJ5LnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgICAgfVxyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHR0aGlzLnRpbWUucGFyYW1zID0gWyB2IF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMubmVlZFJlYnVpbGQoKTtcclxuICB9XHJcblxyXG5cdGdldCB0YWdzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVlcnkuZ3JvdXBCeS5maWx0ZXIoIHggPT4geC50eXBlID09IEdyb3VwQnlPcHRpb24uVGFnICk7XHJcblx0fVxyXG5cclxuXHRnZXQgZmlsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdyb3VwQnkuZmluZCggeCA9PiB4LnR5cGUgPT0gR3JvdXBCeU9wdGlvbi5GaWxsICk7XHJcblx0fVxyXG5cclxuXHRnZXQgZmlsbFZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsbC5wYXJhbXNbIDAgXTtcclxuXHR9XHJcblxyXG5cdHNldCBmaWxsVmFsdWUoIHY6IHN0cmluZyApe1xyXG4gICAgaWYoIHYgPT0gdGhpcy5SRU1PVkUgKXtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzXHJcbiAgICAgICAgLmdyb3VwQnlcclxuICAgICAgICAuZmluZEluZGV4KCB4PT4geC50eXBlID09IEdyb3VwQnlPcHRpb24uRmlsbCApO1xyXG5cclxuICAgICAgaWYoIC0xICE9PSBpbmRleCApe1xyXG4gICAgICAgIHRoaXMuZ3JvdXBCeS5zcGxpY2UoIGluZGV4LCAxICk7XHJcbiAgICAgIH1cclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0dGhpcy5maWxsLnBhcmFtcyA9IFsgdiBdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLm5lZWRSZWJ1aWxkKCk7XHJcbiAgfVxyXG4gIFx0XHJcbiAgZ2V0IHRpbWVPcHRpb25zJCgpIHtcclxuICAgIHJldHVybiBvZiggW3RoaXMuUkVNT1ZFLCAuLi5PYmplY3QudmFsdWVzKEdyb3VwQnlUaW1lT3B0aW9ucyldICk7XHJcblx0fVxyXG5cclxuXHRnZXQgZmlsbE9wdGlvbnMkKCl7XHJcblx0XHRyZXR1cm4gb2YoIFt0aGlzLlJFTU9WRSwgLi4uT2JqZWN0LnZhbHVlcyhHcm91cEJ5RmlsbE9wdGlvbnMpXSApO1xyXG4gIH1cclxuICBcclxuICBnZXQgZ3JvdXBCeU9wdGlvbnMkKCl7XHJcblx0XHR2YXIgb3B0aW9ucyA9IFtdO1xyXG5cclxuXHRcdGlmKCAhdGhpcy5maWxsICl7XHJcblx0XHRcdG9wdGlvbnMucHVzaCggdGhpcy5hdmFpbGFibGVDb21tYW5kc1sgMCBdLnRleHQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggIXRoaXMudGltZSApe1xyXG5cdFx0XHRvcHRpb25zLnB1c2goIHRoaXMuYXZhaWxhYmxlQ29tbWFuZHNbIDEgXS50ZXh0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICF0aGlzLnF1ZXJ5LmxpbWl0ICl7XHJcblx0XHRcdG9wdGlvbnMucHVzaCggdGhpcy5hdmFpbGFibGVDb21tYW5kc1sgMiBdLnRleHQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggIXRoaXMucXVlcnkuc2xpbWl0ICl7XHJcblx0XHRcdG9wdGlvbnMucHVzaCggdGhpcy5hdmFpbGFibGVDb21tYW5kc1sgMyBdLnRleHQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggdGhpcy5xdWVyeS5vcmRlciAhPSBPcmRlckJ5VGltZS5EZXNjICl7XHJcblx0XHRcdG9wdGlvbnMucHVzaCggdGhpcy5hdmFpbGFibGVDb21tYW5kc1sgNCBdLnRleHQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBxID0gKHRoaXMucXVlcnkubWVhc3VyZW1lbnQpID9cclxuXHRcdFx0YFNIT1cgVEFHIEtFWVMgZnJvbSAke3RoaXMucXVlcnkubWVhc3VyZW1lbnR9YCA6XHJcblx0XHRcdGBTSE9XIFRBRyBLRVlTYDtcclxuXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHQucHJveHkocSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0bWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGFncyA9ICgheC5sZW5ndGgpID9cclxuXHRcdFx0XHRcdFx0W10gOiB4WzBdLnZhbHVlcy5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYy5jb25jYXQodmFsdWUpLCBbXSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5hdmFpbGFibGVDb21tYW5kcyA9IHRoaXNcclxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZUNvbW1hbmRzXHJcblx0XHRcdFx0XHRcdC5maWx0ZXIoIHggPT4geC50eXBlICE9IEdyb3VwQnlDb21tYW5kVHlwZS5UYWcgKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhZ3MuZm9yRWFjaCggZSA9PiB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzLnB1c2goIFxyXG5cdFx0XHRcdFx0XHRuZXcgR3JvdXBCeUNvbW1hbmQoIEdyb3VwQnlDb21tYW5kVHlwZS5UYWcsIGB0YWcoJHtlfSlgLCBlICkpKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0YWdDb21tYW5kcyA9IHRoaXNcclxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZUNvbW1hbmRzXHJcblx0XHRcdFx0XHRcdC5maWx0ZXIoIGMgPT4gYy50eXBlID09IEdyb3VwQnlDb21tYW5kVHlwZS5UYWcgKVxyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKCBjID0+ICF0aGlzLnF1ZXJ5Lmdyb3VwQnkuZmluZCggeCA9PlxyXG5cdFx0XHRcdFx0XHRcdHgudHlwZSA9PSBHcm91cEJ5Q29tbWFuZFR5cGUuVGFnICYmXHR4LnBhcmFtc1sgMCBdID09IGMudmFsdWUgKSApXHJcblx0XHRcdFx0XHRcdC5tYXAoIGMgPT4gYy50ZXh0IClcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gWyAuLi5vcHRpb25zLCAuLi50YWdDb21tYW5kc1x0XTtcclxuXHRcdFx0XHR9KSlcclxuXHJcblx0fVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXHJcbiAgICBwdWJsaWMgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSApe1xyXG4gICAgICBzdXBlciggcGFuZWwsIGRzU2VydmljZSApO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZENvbW1hbmRzID0gW107XHJcblxyXG4gICAgICB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzID0gW1xyXG4gICAgICAgIG5ldyBHcm91cEJ5Q29tbWFuZCggR3JvdXBCeUNvbW1hbmRUeXBlLkZpbGwsIFwiZmlsbChudWxsKVwiLCBcIm51bGxcIiApLFxyXG4gICAgICAgIG5ldyBHcm91cEJ5Q29tbWFuZCggR3JvdXBCeUNvbW1hbmRUeXBlLlRpbWUsIFwidGltZSgkaW50ZXJ2YWwpXCIsIE1ldHJpY1ZhcnMuVElNRV9JTlRFUlZBTCApLFxyXG4gICAgICAgIG5ldyBHcm91cEJ5Q29tbWFuZCggR3JvdXBCeUNvbW1hbmRUeXBlLkxpbWl0LCBcIkxJTUlUXCIsIDEwICksXHJcbiAgICAgICAgbmV3IEdyb3VwQnlDb21tYW5kKCBHcm91cEJ5Q29tbWFuZFR5cGUuU0xpbWl0LCBcIlNMSU1JVFwiLCAxMCApLFxyXG5cdFx0XHRcdG5ldyBHcm91cEJ5Q29tbWFuZCggR3JvdXBCeUNvbW1hbmRUeXBlLk9yZGVyQnksIFwiT1JERVIgQlkgdGltZSBERVNDXCIgKV1cclxuXHR9XHJcbiAgXHJcblx0b25PcHRpb25QaWNrKCBlOiBzdHJpbmcgKXtcclxuICAgIHZhciBjb21tYW5kID0gdGhpc1xyXG4gICAgICAuYXZhaWxhYmxlQ29tbWFuZHNcclxuICAgICAgLmZpbmQoIHggPT4geC50ZXh0ID09IGUgKTtcclxuXHJcbiAgICBpZiggIWNvbW1hbmQgKXtcclxuICAgICAgcmV0dXJuIFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRDb21tYW5kcy5wdXNoKCBjb21tYW5kICk7XHJcbiAgICBcclxuXHRcdHN3aXRjaCggY29tbWFuZC50eXBlICl7XHJcbiAgICAgIGNhc2UgR3JvdXBCeUNvbW1hbmRUeXBlLlRpbWU6XHJcblx0XHRcdFx0dGhpcy5ncm91cEJ5LnB1c2goIG5ldyBHcm91cEJ5T2JqZWN0KCBHcm91cEJ5T3B0aW9uLlRpbWUsIFtjb21tYW5kLnZhbHVlXSApICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcblx0XHRcdGNhc2UgR3JvdXBCeUNvbW1hbmRUeXBlLkZpbGw6XHJcblx0XHRcdFx0dGhpcy5ncm91cEJ5LnB1c2goIG5ldyBHcm91cEJ5T2JqZWN0KCBHcm91cEJ5T3B0aW9uLkZpbGwsIFtjb21tYW5kLnZhbHVlXSApICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEdyb3VwQnlDb21tYW5kVHlwZS5MaW1pdDpcclxuXHRcdFx0XHR0aGlzLnF1ZXJ5LmxpbWl0ID0gY29tbWFuZC52YWx1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBHcm91cEJ5Q29tbWFuZFR5cGUuU0xpbWl0OlxyXG5cdFx0XHRcdHRoaXMucXVlcnkuc2xpbWl0ID0gY29tbWFuZC52YWx1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgR3JvdXBCeUNvbW1hbmRUeXBlLk9yZGVyQnk6XHJcblx0XHRcdFx0dGhpcy5xdWVyeS5vcmRlciA9IE9yZGVyQnlUaW1lLkRlc2M7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEdyb3VwQnlDb21tYW5kVHlwZS5UYWc6XHJcblx0XHRcdFx0dGhpcy5ncm91cEJ5LnB1c2goIG5ldyBHcm91cEJ5T2JqZWN0KCBHcm91cEJ5T3B0aW9uLlRhZywgW2NvbW1hbmQudmFsdWVdICkgKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5uZWVkUmVidWlsZCgpXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZVRhZyggdDogc3RyaW5nICl7XHJcbiAgICB0aGlzLnF1ZXJ5Lmdyb3VwQnkgPSB0aGlzXHJcbiAgICAgIC5ncm91cEJ5XHJcbiAgICAgIC5maWx0ZXIoIHggPT4gISggeC50eXBlID09IEdyb3VwQnlPcHRpb24uVGFnICYmIHgucGFyYW1zWyAwIF0gPT0gdCApICk7XHJcblxyXG4gICAgdGhpcy5uZWVkUmVidWlsZCgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgR3JvdXBCeUNvbW1hbmR7XHJcblx0Y29uc3RydWN0b3IoIFxyXG5cdFx0cHVibGljIHR5cGU6R3JvdXBCeUNvbW1hbmRUeXBlLFxyXG5cdFx0cHVibGljIHRleHQ6IHN0cmluZyxcclxuXHRcdHB1YmxpYyB2YWx1ZTogYW55ID0gdW5kZWZpbmVkICl7XHJcblxyXG5cdH1cclxufVxyXG5cclxuZW51bSBHcm91cEJ5Q29tbWFuZFR5cGV7XHJcblx0RmlsbCxcclxuXHRUaW1lLFxyXG5cdFRhZyxcclxuXHRMaW1pdCxcclxuXHRTTGltaXQsXHJcblx0T3JkZXJCeVxyXG59IiwiPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCB3aWR0aC03XCI+XHJcbiAgICAgIDxzcGFuPkdST1VQIEJZPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgICBcclxuICAgICpuZ0lmPVwidGltZVwiIFxyXG4gICAgWyhuZ01vZGVsKV09XCJ0aW1lVmFsdWVcIlxyXG4gICAgZm9ybWF0U3RyaW5nPVwidGltZSh7MH0pXCJcclxuICAgIFtyZXF1ZXN0XT1cInRpbWVPcHRpb25zJFwiPlxyXG4gIDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlciA+XHJcblxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHQgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0LnBhcmFtc1sgMCBdXCIgdGFnLWxhYmVsIFxyXG4gICAgY2xhc3M9XCJnZi1mb3JtIHBvaW50ZXJcIiAocmVtb3ZlZCk9XCJvblJlbW92ZVRhZyggJGV2ZW50IClcIlx0PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciAqbmdJZj1cImZpbGxcIiBcclxuICAgIGZvcm1hdFN0cmluZz1cImZpbGwoezB9KVwiIFxyXG4gICAgWyhuZ01vZGVsKV09XCJmaWxsVmFsdWVcIlxyXG4gICAgW3JlcXVlc3RdPVwiZmlsbE9wdGlvbnMkXCIgPlxyXG4gIDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcbiAgPGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgICBcclxuICAgIHBsYWNlaG9sZGVyPVwiZmEgZmEtcGx1c1wiXHJcbiAgICByZWFkb25seT1cInRydWVcIlxyXG4gICAgW3JlcXVlc3RdPVwiZ3JvdXBCeU9wdGlvbnMkXCJcclxuICAgIChwaWNrKT1cIm9uT3B0aW9uUGljayggJGV2ZW50ICk7XCI+XHJcbiAgPC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCIgKm5nSWY9XCJxdWVyeS5vcmRlciA9PSBPcmRlckJ5VGltZVJlZi5EZXNjO1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmQgd2lkdGgtN1wiPlxyXG4gICAgICBPUkRFUiBCWVxyXG4gICAgPC9sYWJlbD5cclxuXHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicXVlcnkub3JkZXI9T3JkZXJCeVRpbWVSZWYuQXNjOyBuZWVkUmVidWlsZCgpXCI+XHJcbiAgICAgIHRpbWUgPHNwYW4gY2xhc3M9XCJxdWVyeS1rZXl3b3JkXCI+REVTQzwvc3Bhbj4gPGkgY2xhc3M9XCJmYSBmYS1yZW1vdmUgbWwtMVwiPjwvaT5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCIgKm5nSWY9XCJxdWVyeS5saW1pdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmQgd2lkdGgtN1wiPkxJTUlUPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZ2YtZm9ybS1pbnB1dCB3aWR0aC05XCIgWyhuZ01vZGVsKV09XCJsaW1pdFwiXHJcbiAgICAgIHNwZWxsY2hlY2s9J2ZhbHNlJyBwbGFjZWhvbGRlcj1cIk5vIExpbWl0XCIgKGNoYW5nZSk9XCJuZWVkUmVidWlsZCgpXCIgPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCIgKm5nSWY9XCJxdWVyeS5zbGltaXRcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHdpZHRoLTdcIj5TTElNSVQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJnZi1mb3JtLWlucHV0IHdpZHRoLTlcIiBbKG5nTW9kZWwpXT1cInNsaW1pdFwiXHJcbiAgICAgIHNwZWxsY2hlY2s9J2ZhbHNlJyBwbGFjZWhvbGRlcj1cIk5vIExpbWl0XCIgKGNoYW5nZSk9XCJuZWVkUmVidWlsZCgpXCI+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMzBcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCB3aWR0aC03XCI+QUxJQVMgQlk8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJnZi1mb3JtLWlucHV0XCIgWyhuZ01vZGVsKV09XCJxdWVyeS5hbGlhc1wiIHNwZWxsY2hlY2s9J2ZhbHNlJ1xyXG4gICAgICBwbGFjZWhvbGRlcj1cIk5hbWluZyBwYXR0ZXJuXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==