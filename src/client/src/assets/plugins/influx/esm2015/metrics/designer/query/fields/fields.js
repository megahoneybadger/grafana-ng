import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { AggrFunc, Field, FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "./field";
function FieldsEditorComponent_field_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "field-editor", 1);
    i0.ɵɵlistener("remove", function FieldsEditorComponent_field_editor_0_Template_field_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3); const f_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(f_r1); })("add", function FieldsEditorComponent_field_editor_0_Template_field_editor_add_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onAdd(); })("rebuild", function FieldsEditorComponent_field_editor_0_Template_field_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.needRebuild(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r0.query)("field", f_r1);
} }
export class FieldsEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
    }
    ngOnInit() {
        var _a;
        if (!((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length)) {
            this.query.fields = [this.createEmpyField()];
        }
    }
    onRemove(f) {
        const fields = this.query.fields;
        if (1 < fields.length) {
            const index = fields.indexOf(f);
            if (-1 !== index) {
                this.query.fields.splice(index, 1);
            }
        }
    }
    onAdd() {
        this
            .query
            .fields
            .push(this.createEmpyField());
    }
    createEmpyField() {
        const def = new FuncObject();
        def.name = AggrFunc.Mean;
        const field = new Field();
        field.functions = [def];
        return field;
    }
}
FieldsEditorComponent.ɵfac = function FieldsEditorComponent_Factory(t) { return new (t || FieldsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
FieldsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldsEditorComponent, selectors: [["fields-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "query", "field", "remove", "add", "rebuild", 4, "ngFor", "ngForOf"], [3, "query", "field", "remove", "add", "rebuild"]], template: function FieldsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FieldsEditorComponent_field_editor_0_Template, 1, 2, "field-editor", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.query.fields);
    } }, directives: [i2.NgForOf, i3.FieldEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'fields-editor',
                template: `
    <field-editor *ngFor="let f of query.fields" 
      [query]="query" 
      [field]="f"
      (remove)="onRemove(f)"
      (add)="onAdd()"
      (rebuild)="needRebuild()" >
    </field-editor> `
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9maWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUE0QixXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBSy9DLHVDQU1lO0lBSGIsd09BQXNCLGtMQUFBLGdNQUFBO0lBR3hCLGlCQUFlOzs7O0lBTGIsb0NBQWUsZUFBQTs7QUFPckIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjtJQUUzRCxZQUN5QixLQUFZLEVBQzVCLFNBQTRCO1FBQ2pDLEtBQUssQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFEckIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7SUFFckMsQ0FBQztJQUVELFFBQVE7O1FBQ04sSUFBSSxRQUFDLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQVE7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUVqQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBRXJCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFbEMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7YUFDdEM7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSTthQUNELEtBQUs7YUFDTCxNQUFNO2FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM3QixHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7UUFFMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzswRkExQ1UscUJBQXFCLHVCQUdyQixXQUFXOzBEQUhYLHFCQUFxQjtRQVI5Qix3RkFNQTs7UUFOYywwQ0FBOEI7O2tEQVFuQyxxQkFBcUI7Y0FYakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7cUJBT1M7YUFDcEI7O3NCQUlJLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlLCBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBBZ2dyRnVuYywgRmllbGQsIEZ1bmNPYmplY3QgfSBmcm9tICcuLi8uLi8uLi9tZXRyaWNzLm0nO1xyXG5pbXBvcnQgeyBCYXNlUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi9xdWVyeS1iYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmllbGRzLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxmaWVsZC1lZGl0b3IgKm5nRm9yPVwibGV0IGYgb2YgcXVlcnkuZmllbGRzXCIgXHJcbiAgICAgIFtxdWVyeV09XCJxdWVyeVwiIFxyXG4gICAgICBbZmllbGRdPVwiZlwiXHJcbiAgICAgIChyZW1vdmUpPVwib25SZW1vdmUoZilcIlxyXG4gICAgICAoYWRkKT1cIm9uQWRkKClcIlxyXG4gICAgICAocmVidWlsZCk9XCJuZWVkUmVidWlsZCgpXCIgPlxyXG4gICAgPC9maWVsZC1lZGl0b3I+IGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCAge1xyXG5cclxuICBjb25zdHJ1Y3RvciggXHJcbiAgICBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCxcclxuICAgIHB1YmxpYyBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlICl7XHJcbiAgICAgIHN1cGVyKCBwYW5lbCwgZHNTZXJ2aWNlICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5maWVsZHM/Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5LmZpZWxkcyA9IFt0aGlzLmNyZWF0ZUVtcHlGaWVsZCgpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlKGY6IEZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnF1ZXJ5LmZpZWxkcztcclxuXHJcbiAgICBpZiAoMSA8IGZpZWxkcy5sZW5ndGgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmllbGRzLmluZGV4T2YoIGYgKTtcclxuXHJcbiAgICAgIGlmKCAtMSAhPT0gaW5kZXggKXtcclxuICAgICAgICB0aGlzLnF1ZXJ5LmZpZWxkcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQWRkKCkge1xyXG4gICAgdGhpc1xyXG4gICAgICAucXVlcnlcclxuICAgICAgLmZpZWxkc1xyXG4gICAgICAucHVzaCh0aGlzLmNyZWF0ZUVtcHlGaWVsZCgpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVtcHlGaWVsZCgpIHtcclxuICAgIGNvbnN0IGRlZiA9IG5ldyBGdW5jT2JqZWN0KCk7XHJcbiAgICBkZWYubmFtZSA9IEFnZ3JGdW5jLk1lYW47XHJcblxyXG4gICAgY29uc3QgZmllbGQgPSBuZXcgRmllbGQoKTtcclxuICAgIGZpZWxkLmZ1bmN0aW9ucyA9IFsgZGVmIF07XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG4gIH1cclxufSJdfQ==