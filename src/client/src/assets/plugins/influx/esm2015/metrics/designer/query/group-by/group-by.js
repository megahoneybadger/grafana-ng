import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseQueryComponent } from '../query-base';
import { GroupByFillOptions, GroupByObject, GroupByOption, GroupByTimeOptions, OrderByTime } from '../../../metrics.m';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./tag-label.c";
function GroupByEditorComponent_ed_autocomplete_picker_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 11);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_ed_autocomplete_picker_5_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.timeValue = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.timeValue)("request", ctx_r0.timeOptions$);
} }
function GroupByEditorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("removed", function GroupByEditorComponent_div_6_Template_div_removed_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onRemoveTag($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r7.params[0]);
} }
function GroupByEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, " ORDER BY ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 13);
    i0.ɵɵlistener("click", function GroupByEditorComponent_div_10_Template_label_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); ctx_r10.query.order = ctx_r10.OrderByTimeRef.Asc; return ctx_r10.needRebuild(); });
    i0.ɵɵtext(5, " time ");
    i0.ɵɵelementStart(6, "span", 14);
    i0.ɵɵtext(7, "DESC");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 6);
    i0.ɵɵelement(10, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function GroupByEditorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, "LIMIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 16);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_11_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.limit = $event; })("change", function GroupByEditorComponent_div_11_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelement(6, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.limit);
} }
function GroupByEditorComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelementStart(2, "label", 2);
    i0.ɵɵtext(3, "SLIMIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 16);
    i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_12_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.slimit = $event; })("change", function GroupByEditorComponent_div_12_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelement(6, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r4.slimit);
} }
export class GroupByEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.OrderByTimeRef = OrderByTime;
        this.selectedCommands = [];
        this.availableCommands = [
            new GroupByCommand(GroupByCommandType.Fill, "fill(null)", "null"),
            new GroupByCommand(GroupByCommandType.Time, "time($interval)", "$__interval"),
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
    get groupByTags() {
        return this.query.groupBy.filter(x => x.type == GroupByOption.Tag);
    }
    get fill() {
        return this.groupBy.find(x => x.type == GroupByOption.Fill);
    }
    get fillValue() {
        return this.fill.params[0];
    }
    get showFill() {
        return (undefined != this.fill);
    }
    get timeOptions$() {
        return of([this.REMOVE, ...Object.values(GroupByTimeOptions)]);
    }
    get fillOptions() {
        return of([this.REMOVE, ...Object.values(GroupByFillOptions)]);
    }
    get groupByOptions$() {
        var options = [];
        if (!this.selectedCommands.find(x => x.type == GroupByCommandType.Fill)) {
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
            const tags = x[0].values.reduce((acc, value) => acc.concat(value), []);
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
GroupByEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupByEditorComponent, selectors: [["group-by-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 20, vars: 7, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange", 4, "ngIf"], ["tag-label", "", "class", "gf-form pointer", 3, "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["class", "gf-form-inline", 4, "ngIf"], [1, "gf-form", "max-width-30"], ["type", "text", "spellcheck", "false", "placeholder", "Naming pattern", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange"], ["tag-label", "", 1, "gf-form", "pointer", 3, "value", "removed"], [1, "gf-form-label", "pointer", 3, "click"], [1, "query-keyword"], [1, "fa", "fa-remove", "ml-1"], ["type", "text", "spellcheck", "false", "placeholder", "No Limit", 1, "gf-form-input", "width-9", 3, "ngModel", "ngModelChange", "change"]], template: function GroupByEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(7, "ed-autocomplete-picker", 5);
        i0.ɵɵlistener("pick", function GroupByEditorComponent_Template_ed_autocomplete_picker_pick_7_listener($event) { return ctx.onOptionPick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelement(9, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, GroupByEditorComponent_div_10_Template, 11, 0, "div", 8);
        i0.ɵɵtemplate(11, GroupByEditorComponent_div_11_Template, 7, 1, "div", 8);
        i0.ɵɵtemplate(12, GroupByEditorComponent_div_12_Template, 7, 1, "div", 8);
        i0.ɵɵelementStart(13, "div", 0);
        i0.ɵɵelementStart(14, "div", 9);
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵtext(16, "ALIAS BY");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "input", 10);
        i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.query.alias = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 6);
        i0.ɵɵelement(19, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.time);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.groupByTags);
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
    }], function () { return [{ type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvZ3JvdXAtYnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvZ3JvdXAtYnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTRCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFDeEMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNBbkMsa0RBSzBCO0lBSHhCLHlQQUF1QjtJQUd6QixpQkFBMEI7OztJQUh4QiwwQ0FBdUIsZ0NBQUE7Ozs7SUFLekIsK0JBRU07SUFEb0Isd01BQWlDO0lBQzNELGlCQUFNOzs7SUFGNkIsc0NBQXVCOzs7O0lBZ0I1RCw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsZ0NBQ0U7SUFBQSwwQkFDRjtJQUFBLGlCQUFRO0lBRVIsaUNBQ0U7SUFEbUMsZ1BBQXVEO0lBQzFGLHNCQUFLO0lBQUEsZ0NBQTRCO0lBQUEsb0JBQUk7SUFBQSxpQkFBTztJQUFDLHdCQUFpQztJQUNoRixpQkFBUTtJQUNWLGlCQUFNO0lBRU4sOEJBQ0U7SUFBQSwwQkFBcUQ7SUFDdkQsaUJBQU07SUFDUixpQkFBTTs7OztJQUdOLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSxnQ0FBbUQ7SUFBQSxxQkFBSztJQUFBLGlCQUFRO0lBQ2hFLGlDQUVGO0lBRm1ELHFOQUFtQixtTEFBQTtJQUFwRSxpQkFFRjtJQUFBLGlCQUFNO0lBRU4sOEJBQ0U7SUFBQSx5QkFBcUQ7SUFDdkQsaUJBQU07SUFDUixpQkFBTTs7O0lBUCtDLGVBQW1CO0lBQW5CLHNDQUFtQjs7OztJQVN4RSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsZ0NBQW1EO0lBQUEsc0JBQU07SUFBQSxpQkFBUTtJQUNqRSxpQ0FFRjtJQUZtRCxzTkFBb0IsbUxBQUE7SUFBckUsaUJBRUY7SUFBQSxpQkFBTTtJQUVOLDhCQUNFO0lBQUEseUJBQXFEO0lBQ3ZELGlCQUFNO0lBQ1IsaUJBQU07OztJQVArQyxlQUFvQjtJQUFwQix1Q0FBb0I7O0FEakR6RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCO0lBbUk1RCxZQUN5QixLQUFZLEVBQzVCLFNBQTRCO1FBQ2pDLEtBQUssQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFEckIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFqSXJDLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBb0l6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixJQUFJLGNBQWMsQ0FBRSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBRTtZQUNuRSxJQUFJLGNBQWMsQ0FBRSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFFO1lBQy9FLElBQUksY0FBYyxDQUFFLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFFO1lBQzNELElBQUksY0FBYyxDQUFFLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFFO1lBQzdELElBQUksY0FBYyxDQUFFLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBRTtTQUFDLENBQUE7SUFDN0UsQ0FBQztJQTFJRCxJQUFJLEtBQUs7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBRSxDQUFTO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFFLENBQVM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFNBQVMsQ0FBRSxDQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSTtpQkFDZixPQUFPO2lCQUNQLFNBQVMsQ0FBRSxDQUFDLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDO1lBRWpELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7YUFDakM7U0FDSjthQUFLO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUYsSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDWCxPQUFPLENBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2QsT0FBTyxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFFLEVBQUU7WUFDMUUsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ2pEO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsc0JBQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNoRCxlQUFlLENBQUM7UUFFakIsT0FBTyxJQUFJO2FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk7aUJBQzNCLGlCQUFpQjtpQkFDakIsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUUsQ0FBQTtZQUVqRCxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FDN0MsSUFBSSxjQUFjLENBQUUsa0JBQWtCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sV0FBVyxHQUFHLElBQUk7aUJBQ3RCLGlCQUFpQjtpQkFDakIsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUU7aUJBQy9DLE1BQU0sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQzNDLENBQUMsQ0FBQyxJQUFJLElBQUksa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFFO2lCQUNoRSxHQUFHLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUE7WUFFcEIsT0FBTyxDQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFrQkQsWUFBWSxDQUFFLENBQVM7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSTthQUNmLGlCQUFpQjthQUNqQixJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFNO1NBQ1A7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBRSxDQUFDO1FBRXhDLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLGtCQUFrQixDQUFDLElBQUk7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksYUFBYSxDQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBRSxDQUFDO2dCQUMxRSxNQUFNO1lBRVgsS0FBSyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQWEsQ0FBRSxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUUsQ0FBQztnQkFDOUUsTUFBTTtZQUVQLEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDakMsTUFBTTtZQUVOLEtBQUssa0JBQWtCLENBQUMsTUFBTTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbEMsTUFBTTtZQUVQLEtBQUssa0JBQWtCLENBQUMsT0FBTztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDcEMsTUFBTTtZQUVQLEtBQUssa0JBQWtCLENBQUMsR0FBRztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxhQUFhLENBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFFLENBQUM7Z0JBQzdFLE1BQU07U0FDTDtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFFLENBQVM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSTthQUN0QixPQUFPO2FBQ1AsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFFekUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OzRGQWhNVyxzQkFBc0IsdUJBb0l0QixXQUFXOzJEQXBJWCxzQkFBc0I7UUNibkMsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLGdDQUNFO1FBQUEsNEJBQU07UUFBQSx3QkFBUTtRQUFBLGlCQUFPO1FBQ3ZCLGlCQUFRO1FBQ1YsaUJBQU07UUFFTiw2R0FLQTtRQUVBLHVFQUVBO1FBRUEsaURBS3lCO1FBRHZCLHVIQUFRLHdCQUFzQixJQUFFO1FBQ2xDLGlCQUF5QjtRQUV6Qiw4QkFDRTtRQUFBLHlCQUFxRDtRQUN2RCxpQkFBTTtRQUNSLGlCQUFNO1FBRU4sMEVBQ0U7UUFnQkYseUVBQ0U7UUFXRix5RUFDRTtRQVdGLCtCQUNFO1FBQUEsK0JBQ0U7UUFBQSxpQ0FBbUQ7UUFBQSx5QkFBUTtRQUFBLGlCQUFRO1FBQ25FLGtDQUVGO1FBRjJDLHFKQUF5QjtRQUFsRSxpQkFFRjtRQUFBLGlCQUFNO1FBQ04sK0JBQ0U7UUFBQSwwQkFBcUQ7UUFDdkQsaUJBQU07UUFDUixpQkFBTTs7UUF4RUYsZUFBWTtRQUFaLCtCQUFZO1FBTVQsZUFBNkI7UUFBN0IseUNBQTZCO1FBT2hDLGVBQTJCO1FBQTNCLDZDQUEyQjtRQVNILGVBQTJDO1FBQTNDLGlFQUEyQztRQWlCM0MsZUFBbUI7UUFBbkIsc0NBQW1CO1FBWW5CLGVBQW9CO1FBQXBCLHVDQUFvQjtRQWVILGVBQXlCO1FBQXpCLHlDQUF5Qjs7a0REN0R6RCxzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0I7O3NCQXFJSSxNQUFNO3VCQUFFLFdBQVc7O0FBK0R4QixNQUFNLGNBQWM7SUFDbkIsWUFDUSxJQUF1QixFQUN2QixJQUFZLEVBQ1osUUFBYSxTQUFTO1FBRnRCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFpQjtJQUU5QixDQUFDO0NBQ0Q7QUFFRCxJQUFLLGtCQU9KO0FBUEQsV0FBSyxrQkFBa0I7SUFDdEIsMkRBQUksQ0FBQTtJQUNKLDJEQUFJLENBQUE7SUFDSix5REFBRyxDQUFBO0lBQ0gsNkRBQUssQ0FBQTtJQUNMLCtEQUFNLENBQUE7SUFDTixpRUFBTyxDQUFBO0FBQ1IsQ0FBQyxFQVBJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFPdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgQmFzZVF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcXVlcnktYmFzZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgR3JvdXBCeUZpbGxPcHRpb25zLCBHcm91cEJ5T2JqZWN0LCBcclxuICBHcm91cEJ5T3B0aW9uLCBHcm91cEJ5VGltZU9wdGlvbnMsIE9yZGVyQnlUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWV0cmljcy5tJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdncm91cC1ieS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1ieS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBCeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCAge1xyXG5cclxuICBhdmFpbGFibGVDb21tYW5kcyA6IEFycmF5PEdyb3VwQnlDb21tYW5kPjtcclxuICBzZWxlY3RlZENvbW1hbmRzIDogQXJyYXk8R3JvdXBCeUNvbW1hbmQ+O1xyXG4gIE9yZGVyQnlUaW1lUmVmID0gT3JkZXJCeVRpbWU7XHJcblxyXG4gIGdldCBsaW1pdCgpIDogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLnF1ZXJ5LmxpbWl0O1xyXG5cdH1cclxuXHJcblx0c2V0IGxpbWl0KCBsOiBudW1iZXIgKXtcclxuICAgIHRoaXMucXVlcnkubGltaXQgPSBsO1xyXG4gICAgXHJcbiAgICBpZiggIWwgKXtcclxuICAgICAgdGhpcy5uZWVkUmVidWlsZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXQgc2xpbWl0KCkgOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVlcnkuc2xpbWl0O1xyXG5cdH1cclxuXHJcblx0c2V0IHNsaW1pdCggbDogbnVtYmVyICl7XHJcbiAgICB0aGlzLnF1ZXJ5LnNsaW1pdCA9IGw7XHJcbiAgICBcclxuICAgIGlmKCAhbCApe1xyXG4gICAgICB0aGlzLm5lZWRSZWJ1aWxkKCk7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuXHRnZXQgdGltZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdyb3VwQnkuZmluZCggeCA9PiB4LnR5cGUgPT0gR3JvdXBCeU9wdGlvbi5UaW1lICk7XHJcblx0fVxyXG5cclxuXHRnZXQgdGltZVZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZS5wYXJhbXNbIDAgXTtcclxuICB9XHJcbiAgXHJcbiAgc2V0IHRpbWVWYWx1ZSggdjogc3RyaW5nICl7XHJcbiAgICBpZiggdiA9PSB0aGlzLlJFTU9WRSApe1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXNcclxuICAgICAgICAuZ3JvdXBCeVxyXG4gICAgICAgIC5maW5kSW5kZXgoIHg9PiB4LnR5cGUgPT0gR3JvdXBCeU9wdGlvbi5UaW1lICk7XHJcblxyXG4gICAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgICAgdGhpcy5ncm91cEJ5LnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgICAgfVxyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHR0aGlzLnRpbWUucGFyYW1zID0gWyB2IF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMubmVlZFJlYnVpbGQoKTtcclxuICB9XHJcblxyXG5cdGdldCBncm91cEJ5VGFncygpIHtcclxuXHRcdHJldHVybiB0aGlzLnF1ZXJ5Lmdyb3VwQnkuZmlsdGVyKCB4ID0+IHgudHlwZSA9PSBHcm91cEJ5T3B0aW9uLlRhZyApO1xyXG5cdH1cclxuXHJcblx0Z2V0IGZpbGwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncm91cEJ5LmZpbmQoIHggPT4geC50eXBlID09IEdyb3VwQnlPcHRpb24uRmlsbCApO1xyXG5cdH1cclxuXHJcblx0Z2V0IGZpbGxWYWx1ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbGwucGFyYW1zWyAwIF07XHJcblx0fVxyXG5cclxuXHRnZXQgc2hvd0ZpbGwoKTpib29sZWFue1xyXG5cdFx0cmV0dXJuICggdW5kZWZpbmVkICE9IHRoaXMuZmlsbCApO1xyXG4gIH1cclxuICBcdFxyXG4gIGdldCB0aW1lT3B0aW9ucyQoKSB7XHJcbiAgICByZXR1cm4gb2YoIFt0aGlzLlJFTU9WRSwgLi4uT2JqZWN0LnZhbHVlcyhHcm91cEJ5VGltZU9wdGlvbnMpXSApO1xyXG5cdH1cclxuXHJcblx0Z2V0IGZpbGxPcHRpb25zKCl7XHJcblx0XHRyZXR1cm4gb2YoIFt0aGlzLlJFTU9WRSwgLi4uT2JqZWN0LnZhbHVlcyhHcm91cEJ5RmlsbE9wdGlvbnMpXSApO1xyXG4gIH1cclxuICBcclxuICBnZXQgZ3JvdXBCeU9wdGlvbnMkKCl7XHJcblx0XHR2YXIgb3B0aW9ucyA9IFtdO1xyXG5cclxuXHRcdGlmKCAhdGhpcy5zZWxlY3RlZENvbW1hbmRzLmZpbmQoIHggPT4geC50eXBlID09IEdyb3VwQnlDb21tYW5kVHlwZS5GaWxsICkgKXtcclxuXHRcdFx0b3B0aW9ucy5wdXNoKCB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzWyAwIF0udGV4dCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAhdGhpcy50aW1lICl7XHJcblx0XHRcdG9wdGlvbnMucHVzaCggdGhpcy5hdmFpbGFibGVDb21tYW5kc1sgMSBdLnRleHQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggIXRoaXMucXVlcnkubGltaXQgKXtcclxuXHRcdFx0b3B0aW9ucy5wdXNoKCB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzWyAyIF0udGV4dCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAhdGhpcy5xdWVyeS5zbGltaXQgKXtcclxuXHRcdFx0b3B0aW9ucy5wdXNoKCB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzWyAzIF0udGV4dCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCB0aGlzLnF1ZXJ5Lm9yZGVyICE9IE9yZGVyQnlUaW1lLkRlc2MgKXtcclxuXHRcdFx0b3B0aW9ucy5wdXNoKCB0aGlzLmF2YWlsYWJsZUNvbW1hbmRzWyA0IF0udGV4dCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHEgPSAodGhpcy5xdWVyeS5tZWFzdXJlbWVudCkgP1xyXG5cdFx0XHRgU0hPVyBUQUcgS0VZUyBmcm9tICR7dGhpcy5xdWVyeS5tZWFzdXJlbWVudH1gIDpcclxuXHRcdFx0YFNIT1cgVEFHIEtFWVNgO1xyXG5cclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdC5wcm94eShxKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoeCA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB0YWdzID0geFswXS52YWx1ZXMucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MuY29uY2F0KHZhbHVlKSwgW10pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYXZhaWxhYmxlQ29tbWFuZHMgPSB0aGlzXHJcblx0XHRcdFx0XHRcdC5hdmFpbGFibGVDb21tYW5kc1xyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKCB4ID0+IHgudHlwZSAhPSBHcm91cEJ5Q29tbWFuZFR5cGUuVGFnIClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWdzLmZvckVhY2goIGUgPT4gdGhpcy5hdmFpbGFibGVDb21tYW5kcy5wdXNoKCBcclxuXHRcdFx0XHRcdFx0bmV3IEdyb3VwQnlDb21tYW5kKCBHcm91cEJ5Q29tbWFuZFR5cGUuVGFnLCBgdGFnKCR7ZX0pYCwgZSApKSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGFnQ29tbWFuZHMgPSB0aGlzXHJcblx0XHRcdFx0XHRcdC5hdmFpbGFibGVDb21tYW5kc1xyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKCBjID0+IGMudHlwZSA9PSBHcm91cEJ5Q29tbWFuZFR5cGUuVGFnIClcclxuXHRcdFx0XHRcdFx0LmZpbHRlciggYyA9PiAhdGhpcy5xdWVyeS5ncm91cEJ5LmZpbmQoIHggPT5cclxuXHRcdFx0XHRcdFx0XHR4LnR5cGUgPT0gR3JvdXBCeUNvbW1hbmRUeXBlLlRhZyAmJlx0eC5wYXJhbXNbIDAgXSA9PSBjLnZhbHVlICkgKVxyXG5cdFx0XHRcdFx0XHQubWFwKCBjID0+IGMudGV4dCApXHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIFsgLi4ub3B0aW9ucywgLi4udGFnQ29tbWFuZHNcdF07XHJcblx0XHRcdFx0fSkpXHJcblxyXG5cdH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCBcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsLFxyXG4gICAgcHVibGljIGRzU2VydmljZTogRGF0YVNvdXJjZVNlcnZpY2UgKXtcclxuICAgICAgc3VwZXIoIHBhbmVsLCBkc1NlcnZpY2UgKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb21tYW5kcyA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5hdmFpbGFibGVDb21tYW5kcyA9IFtcclxuICAgICAgICBuZXcgR3JvdXBCeUNvbW1hbmQoIEdyb3VwQnlDb21tYW5kVHlwZS5GaWxsLCBcImZpbGwobnVsbClcIiwgXCJudWxsXCIgKSxcclxuICAgICAgICBuZXcgR3JvdXBCeUNvbW1hbmQoIEdyb3VwQnlDb21tYW5kVHlwZS5UaW1lLCBcInRpbWUoJGludGVydmFsKVwiLCBcIiRfX2ludGVydmFsXCIgKSxcclxuICAgICAgICBuZXcgR3JvdXBCeUNvbW1hbmQoIEdyb3VwQnlDb21tYW5kVHlwZS5MaW1pdCwgXCJMSU1JVFwiLCAxMCApLFxyXG4gICAgICAgIG5ldyBHcm91cEJ5Q29tbWFuZCggR3JvdXBCeUNvbW1hbmRUeXBlLlNMaW1pdCwgXCJTTElNSVRcIiwgMTAgKSxcclxuICAgICAgICBuZXcgR3JvdXBCeUNvbW1hbmQoIEdyb3VwQnlDb21tYW5kVHlwZS5PcmRlckJ5LCBcIk9SREVSIEJZIHRpbWUgREVTQ1wiICldXHJcbiAgfVxyXG4gIFxyXG5cdG9uT3B0aW9uUGljayggZTogc3RyaW5nICl7XHJcbiAgICB2YXIgY29tbWFuZCA9IHRoaXNcclxuICAgICAgLmF2YWlsYWJsZUNvbW1hbmRzXHJcbiAgICAgIC5maW5kKCB4ID0+IHgudGV4dCA9PSBlICk7XHJcblxyXG4gICAgaWYoICFjb21tYW5kICl7XHJcbiAgICAgIHJldHVybiBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQ29tbWFuZHMucHVzaCggY29tbWFuZCApO1xyXG4gICAgXHJcblx0XHRzd2l0Y2goIGNvbW1hbmQudHlwZSApe1xyXG4gICAgICBjYXNlIEdyb3VwQnlDb21tYW5kVHlwZS5UaW1lOlxyXG5cdFx0XHRcdHRoaXMuZ3JvdXBCeS5wdXNoKCBuZXcgR3JvdXBCeU9iamVjdCggR3JvdXBCeU9wdGlvbi5UaW1lLCBbY29tbWFuZC52YWx1ZV0gKSApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG5cdFx0XHRjYXNlIEdyb3VwQnlDb21tYW5kVHlwZS5GaWxsOlxyXG5cdFx0XHRcdHRoaXMuZ3JvdXBCeS5wdXNoKCBuZXcgR3JvdXBCeU9iamVjdCggR3JvdXBCeU9wdGlvbi5GaWxsLCBbY29tbWFuZC52YWx1ZV0gKSApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBHcm91cEJ5Q29tbWFuZFR5cGUuTGltaXQ6XHJcblx0XHRcdFx0dGhpcy5xdWVyeS5saW1pdCA9IGNvbW1hbmQudmFsdWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgR3JvdXBCeUNvbW1hbmRUeXBlLlNMaW1pdDpcclxuXHRcdFx0XHR0aGlzLnF1ZXJ5LnNsaW1pdCA9IGNvbW1hbmQudmFsdWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEdyb3VwQnlDb21tYW5kVHlwZS5PcmRlckJ5OlxyXG5cdFx0XHRcdHRoaXMucXVlcnkub3JkZXIgPSBPcmRlckJ5VGltZS5EZXNjO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBHcm91cEJ5Q29tbWFuZFR5cGUuVGFnOlxyXG5cdFx0XHRcdHRoaXMuZ3JvdXBCeS5wdXNoKCBuZXcgR3JvdXBCeU9iamVjdCggR3JvdXBCeU9wdGlvbi5UYWcsIFtjb21tYW5kLnZhbHVlXSApICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMubmVlZFJlYnVpbGQoKVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVUYWcoIHQ6IHN0cmluZyApe1xyXG4gICAgdGhpcy5xdWVyeS5ncm91cEJ5ID0gdGhpc1xyXG4gICAgICAuZ3JvdXBCeVxyXG4gICAgICAuZmlsdGVyKCB4ID0+ICEoIHgudHlwZSA9PSBHcm91cEJ5T3B0aW9uLlRhZyAmJiB4LnBhcmFtc1sgMCBdID09IHQgKSApO1xyXG5cclxuICAgIHRoaXMubmVlZFJlYnVpbGQoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEdyb3VwQnlDb21tYW5ke1xyXG5cdGNvbnN0cnVjdG9yKCBcclxuXHRcdHB1YmxpYyB0eXBlOkdyb3VwQnlDb21tYW5kVHlwZSxcclxuXHRcdHB1YmxpYyB0ZXh0OiBzdHJpbmcsXHJcblx0XHRwdWJsaWMgdmFsdWU6IGFueSA9IHVuZGVmaW5lZCApe1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbmVudW0gR3JvdXBCeUNvbW1hbmRUeXBle1xyXG5cdEZpbGwsXHJcblx0VGltZSxcclxuXHRUYWcsXHJcblx0TGltaXQsXHJcblx0U0xpbWl0LFxyXG5cdE9yZGVyQnlcclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmQgd2lkdGgtN1wiPlxyXG4gICAgICA8c3Bhbj5HUk9VUCBCWTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxlZC1hdXRvY29tcGxldGUtcGlja2VyICAgXHJcbiAgICAqbmdJZj1cInRpbWVcIiBcclxuICAgIFsobmdNb2RlbCldPVwidGltZVZhbHVlXCJcclxuICAgIGZvcm1hdFN0cmluZz1cInRpbWUoezB9KVwiXHJcbiAgICBbcmVxdWVzdF09XCJ0aW1lT3B0aW9ucyRcIj5cclxuICA8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXIgPlxyXG5cclxuICA8ZGl2ICpuZ0Zvcj1cImxldCB0IG9mIGdyb3VwQnlUYWdzXCIgW3ZhbHVlXT1cInQucGFyYW1zWyAwIF1cIiB0YWctbGFiZWwgXHJcbiAgICBjbGFzcz1cImdmLWZvcm0gcG9pbnRlclwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlVGFnKCAkZXZlbnQgKVwiXHQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxlZC1hdXRvY29tcGxldGUtcGlja2VyICAgXHJcbiAgICBwbGFjZWhvbGRlcj1cImZhIGZhLXBsdXNcIlxyXG4gICAgcmVhZG9ubHk9XCJ0cnVlXCJcclxuICAgIFtyZXF1ZXN0XT1cImdyb3VwQnlPcHRpb25zJFwiXHJcbiAgICAocGljayk9XCJvbk9wdGlvblBpY2soICRldmVudCApO1wiPlxyXG4gIDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiICpuZ0lmPVwicXVlcnkub3JkZXIgPT0gT3JkZXJCeVRpbWVSZWYuRGVzYztcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHdpZHRoLTdcIj5cclxuICAgICAgT1JERVIgQllcclxuICAgIDwvbGFiZWw+XHJcblxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyXCIgKGNsaWNrKT1cInF1ZXJ5Lm9yZGVyPU9yZGVyQnlUaW1lUmVmLkFzYzsgbmVlZFJlYnVpbGQoKVwiPlxyXG4gICAgICB0aW1lIDxzcGFuIGNsYXNzPVwicXVlcnkta2V5d29yZFwiPkRFU0M8L3NwYW4+IDxpIGNsYXNzPVwiZmEgZmEtcmVtb3ZlIG1sLTFcIj48L2k+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiICpuZ0lmPVwicXVlcnkubGltaXRcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHdpZHRoLTdcIj5MSU1JVDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImdmLWZvcm0taW5wdXQgd2lkdGgtOVwiIFsobmdNb2RlbCldPVwibGltaXRcIlxyXG4gICAgICBzcGVsbGNoZWNrPSdmYWxzZScgcGxhY2Vob2xkZXI9XCJObyBMaW1pdFwiIChjaGFuZ2UpPVwibmVlZFJlYnVpbGQoKVwiID5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiICpuZ0lmPVwicXVlcnkuc2xpbWl0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCB3aWR0aC03XCI+U0xJTUlUPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZ2YtZm9ybS1pbnB1dCB3aWR0aC05XCIgWyhuZ01vZGVsKV09XCJzbGltaXRcIlxyXG4gICAgICBzcGVsbGNoZWNrPSdmYWxzZScgcGxhY2Vob2xkZXI9XCJObyBMaW1pdFwiIChjaGFuZ2UpPVwibmVlZFJlYnVpbGQoKVwiPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm0gbWF4LXdpZHRoLTMwXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmQgd2lkdGgtN1wiPkFMSUFTIEJZPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZ2YtZm9ybS1pbnB1dFwiIFsobmdNb2RlbCldPVwicXVlcnkuYWxpYXNcIiBzcGVsbGNoZWNrPSdmYWxzZSdcclxuICAgICAgcGxhY2Vob2xkZXI9XCJOYW1pbmcgcGF0dGVyblwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=