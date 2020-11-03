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
    i0.ɵɵlistener("remove", function FieldsEditorComponent_field_editor_0_Template_field_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3); const f_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(f_r1); })("add", function FieldsEditorComponent_field_editor_0_Template_field_editor_add_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onAdd(); })("change", function FieldsEditorComponent_field_editor_0_Template_field_editor_change_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.change.emit(); });
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
FieldsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldsEditorComponent, selectors: [["fields-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "query", "field", "remove", "add", "change", 4, "ngFor", "ngForOf"], [3, "query", "field", "remove", "add", "change"]], template: function FieldsEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
      (change)="change.emit()" >
    </field-editor> `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9maWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUE0QixXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBSy9DLHVDQU1lO0lBSGIsd09BQXNCLGtMQUFBLHNLQUVaLG9CQUFhLElBRkQ7SUFHeEIsaUJBQWU7Ozs7SUFMYixvQ0FBZSxlQUFBOztBQU9yQixNQUFNLE9BQU8scUJBQXNCLFNBQVEsa0JBQWtCO0lBRTNELFlBQ3lCLEtBQVksRUFDNUIsU0FBNEI7UUFDakMsS0FBSyxDQUFFLEtBQUssRUFBRSxTQUFTLENBQUUsQ0FBQztRQURyQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtJQUVyQyxDQUFDO0lBRUQsUUFBUTs7UUFDTixJQUFJLFFBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFBLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBUTtRQUNmLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFFckIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUVsQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFDLENBQUUsQ0FBQzthQUN0QztTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJO2FBQ0QsS0FBSzthQUNMLE1BQU07YUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUV6QixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUUxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzBGQTFDVSxxQkFBcUIsdUJBR3JCLFdBQVc7MERBSFgscUJBQXFCO1FBUjlCLHdGQU1BOztRQU5jLDBDQUE4Qjs7a0RBUW5DLHFCQUFxQjtjQVhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7OztxQkFPUzthQUNwQjs7c0JBSUksTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IEFnZ3JGdW5jLCBGaWVsZCwgRnVuY09iamVjdCB9IGZyb20gJy4uLy4uLy4uL21ldHJpY3MubSc7XHJcbmltcG9ydCB7IEJhc2VRdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uL3F1ZXJ5LWJhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWVsZHMtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGZpZWxkLWVkaXRvciAqbmdGb3I9XCJsZXQgZiBvZiBxdWVyeS5maWVsZHNcIiBcclxuICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCIgXHJcbiAgICAgIFtmaWVsZF09XCJmXCJcclxuICAgICAgKHJlbW92ZSk9XCJvblJlbW92ZShmKVwiXHJcbiAgICAgIChhZGQpPVwib25BZGQoKVwiXHJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlLmVtaXQoKVwiID5cclxuICAgIDwvZmllbGQtZWRpdG9yPiBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZHNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlUXVlcnlDb21wb25lbnQgIHtcclxuXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXHJcbiAgICBwdWJsaWMgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSApe1xyXG4gICAgICBzdXBlciggcGFuZWwsIGRzU2VydmljZSApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGRzPy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5xdWVyeS5maWVsZHMgPSBbdGhpcy5jcmVhdGVFbXB5RmllbGQoKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShmOiBGaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5xdWVyeS5maWVsZHM7XHJcblxyXG4gICAgaWYgKDEgPCBmaWVsZHMubGVuZ3RoKSB7XHJcblxyXG4gICAgICBjb25zdCBpbmRleCA9IGZpZWxkcy5pbmRleE9mKCBmICk7XHJcblxyXG4gICAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgICAgdGhpcy5xdWVyeS5maWVsZHMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFkZCgpIHtcclxuICAgIHRoaXNcclxuICAgICAgLnF1ZXJ5XHJcbiAgICAgIC5maWVsZHNcclxuICAgICAgLnB1c2godGhpcy5jcmVhdGVFbXB5RmllbGQoKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbXB5RmllbGQoKSB7XHJcbiAgICBjb25zdCBkZWYgPSBuZXcgRnVuY09iamVjdCgpO1xyXG4gICAgZGVmLm5hbWUgPSBBZ2dyRnVuYy5NZWFuO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkID0gbmV3IEZpZWxkKCk7XHJcbiAgICBmaWVsZC5mdW5jdGlvbnMgPSBbIGRlZiBdO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9XHJcbn0iXX0=