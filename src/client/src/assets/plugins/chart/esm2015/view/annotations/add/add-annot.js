import { Component, Output, EventEmitter, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { Moment } from 'common';
import { BaseChartComponent } from '../../../base/chart-base';
import { ErrorMessages, Notes } from 'uilib';
import * as i0 from "@angular/core";
import * as i1 from "../../../base/chart.store";
import * as i2 from "common";
import * as i3 from "@angular/forms";
import * as i4 from "uilib";
import * as i5 from "@angular/common";
function AddAnnotationComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function AddAnnotationComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onDelete(); });
    i0.ɵɵtext(1, "Delete");
    i0.ɵɵelementEnd();
} }
export class AddAnnotationComponent extends BaseChartComponent {
    constructor(store, annotService) {
        super(store);
        this.store = store;
        this.annotService = annotService;
        this.tags = [];
        this.close = new EventEmitter();
        // this.chartSubs = chartStore
        //   .chart$
        //   .subscribe( x => this.chart = x )
    }
    ngOnInit() {
        console.log(this.epochStart);
        // this.storeSubs = this
        //   .store
        //   .dashboard$
        //   .subscribe( x => {
        //     if( !x?.error ){
        //       this.dashboard = x.dashboard;
        //     } 
        //   });
        // if( !this.chart?.widget.annotations ){
        //   this.chart.widget.annotations = [];
        // }
        // if( this.annotation ){
        //   this.timeLabel = this.timeManager.absoluteTzDateToString( this.annotation.time );
        //   this.desc = this.annotation.text;
        //   this.tags = [...this.annotation.tags];
        // } else {
        //   this
        //     .chart
        //     .widget
        //     .annotations
        //     .push( {
        //       time: moment( this.epochStart ),
        //       timeEnd: ( this.epochEnd != this.epochStart ) ?
        //         moment( this.epochEnd ) : undefined,
        //     } );
        //   this.timeLabel =  this.timeManager.absoluteTzDateToString( this.epochStart );
        //   this.chart.update();
        // }
    }
    ngOnDestroy() {
        // this.storeSubs.unsubscribe();
        // this.chartSubs.unsubscribe();
        // const w = this
        //   .chart
        //   .widget;
        // w.annotations = w
        //   .annotations
        //   .filter( x => x.id )
        // this.chart.update();
    }
    onSave() {
        if (this.annotation) {
            this.update();
        }
        else {
            this.create();
        }
    }
    create() {
        console.log("create");
        const annot = {
            time: this.epochStart,
            timeEnd: (this.epochStart != this.epochEnd) ? this.epochEnd : 0,
            dashboardId: 20,
            panelId: this.store.panel.id,
            text: this.desc,
            tags: [...this.tags]
        };
        let toAdd = _.omit(annot, 'time');
        toAdd.time = Moment.toDate(annot.time);
        this
            .annotService
            .create(annot)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            //this.annotsManager.update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_CREATE_ANN); });
    }
    update() {
        // const annot = {
        //   time: this.annotation.time,
        //   timeEnd: this.annotation.timeEnd,
        //   text: this.desc,
        //   tags: [...this.tags],
        //   alertId: this.annotation.alert?.id
        // };
        // this
        // 	.annotService
        //   .update( this.annotation.id, annot )
        //   .pipe( 
        //     finalize( () => this.close.emit() ) )
        // 	.subscribe( 
        //     x =>{
        //       NotificationDispatcher.success( x.message );
        //       this.annotsManager.update();
        //     },
        //     e => NotificationDispatcher.error( 
        // 			e.error?.message ?? ResultMessages.BAD_UPDATE_ANN ))
    }
    onAddTag(e) {
        // const tag = e.target.value;
        // if( tag ) {
        // 	if( !this.tags ){
        // 		this.tags = [];
        // 	}
        // 	if( !this.tags.includes( tag )){
        // 		this.tags.push( tag );
        // 	}
        // 	e.target.value = '';
        // } 
    }
    onRemoveTag(tag) {
        // event.stopPropagation();
        // const index = this.tags.indexOf( tag );
        // if( -1 !== index ){
        // 	this.tags.splice( index, 1 );
        // }
    }
    onDelete() {
        // this
        // 	.annotService
        //   .delete( this.annotation.id )
        //   .pipe( 
        //     finalize( () => this.close.emit() ) )
        // 	.subscribe( 
        //     x => {
        //       NotificationDispatcher.success( x.message );
        //       this.annotsManager.update();
        //     } ,
        //     e => NotificationDispatcher.error( 
        // 			e.error?.message ?? ResultMessages.BAD_DELETE_ANN ))
    }
}
AddAnnotationComponent.ɵfac = function AddAnnotationComponent_Factory(t) { return new (t || AddAnnotationComponent)(i0.ɵɵdirectiveInject(i1.ChartStore), i0.ɵɵdirectiveInject(i2.AnnotationService)); };
AddAnnotationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddAnnotationComponent, selectors: [["add-annotation"]], inputs: { epochStart: "epochStart", epochEnd: "epochEnd" }, outputs: { close: "close" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 3, consts: [[1, "graph-annotation"], [1, "graph-annotation__header"], [1, "graph-annotation__body", "text-center"], [1, "gf-form", "gf-form--v-stretch"], [1, "gf-form-label", "width-7"], ["rows", "2", "placeholder", "Description", 1, "gf-form-input", "width-20", 3, "ngModel", "ngModelChange"], ["label", "Tags", "labelWidth", "7", 3, "ngModel", "ngModelChange"], [1, "gf-form-button-row"], [1, "btn", "btn-success", 3, "click"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn-text", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AddAnnotationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2, " todo ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "Description");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "textarea", 5);
        i0.ɵɵlistener("ngModelChange", function AddAnnotationComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.desc = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ed-tagbox", 6);
        i0.ɵɵlistener("ngModelChange", function AddAnnotationComponent_Template_ed_tagbox_ngModelChange_8_listener($event) { return ctx.tags = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "button", 8);
        i0.ɵɵlistener("click", function AddAnnotationComponent_Template_button_click_10_listener() { return ctx.onSave(); });
        i0.ɵɵtext(11, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, AddAnnotationComponent_button_12_Template, 2, 0, "button", 9);
        i0.ɵɵelementStart(13, "a", 10);
        i0.ɵɵlistener("click", function AddAnnotationComponent_Template_a_click_13_listener() { return ctx.close.emit(); });
        i0.ɵɵtext(14, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.desc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.tags);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.annotation);
    } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.TagBoxComponent, i5.NgIf], styles: [".graph-annotation[_ngcontent-%COMP%]   .label-tag[_ngcontent-%COMP%]{margin-right:4px;margin-top:8px}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__header[_ngcontent-%COMP%]{background-color:#333;display:flex;padding:6px 10px}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__title[_ngcontent-%COMP%]{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__edit-icon[_ngcontent-%COMP%]{padding-left:1rem}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__time[_ngcontent-%COMP%]{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__body[_ngcontent-%COMP%]{padding:.65rem}.graph-annotation[_ngcontent-%COMP%]   .graph-annotation__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:16px;width:16px}.graph-annotation[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]{color:#33b5e5;text-decoration:underline}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddAnnotationComponent, [{
        type: Component,
        args: [{
                selector: 'add-annotation',
                templateUrl: './add-annot.html',
                styleUrls: ['./add-annot.scss']
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.AnnotationService }]; }, { epochStart: [{
            type: Input
        }], epochEnd: [{
            type: Input
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWFubm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9hZGQvYWRkLWFubm90LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9hZGQvYWRkLWFubm90Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFpQyxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLENBQUM7Ozs7Ozs7OztJQ2tCMUMsa0NBQXVFO0lBQXJCLDRMQUFvQjtJQUFDLHNCQUFNO0lBQUEsaUJBQVM7O0FEWHpGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7SUFtQjVELFlBQ1MsS0FBaUIsRUFDaEIsWUFBK0I7UUFNckMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBUFYsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFuQnpDLFNBQUksR0FBYSxFQUFFLENBQUE7UUFNVCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXFCbkMsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixzQ0FBc0M7SUFDeEMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFF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LEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs2RkFNVSxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiwgQW5ub3RhdGlvblNlcnZpY2UsIE1vbWVudCB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LnN0b3JlJztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlJztcclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlcywgTm90ZXMgfSBmcm9tICd1aWxpYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FkZC1hbm5vdGF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWFubm90Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1hbm5vdC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEFubm90YXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xyXG4gIGRlc2M6IHN0cmluZztcclxuICB0YWdzOiBzdHJpbmdbXSA9IFtdXHJcbiAgdGltZUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGVwb2NoU3RhcnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBlcG9jaEVuZDogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHN0b3JlU3ViczogU3Vic2NyaXB0aW9uO1xyXG4gIGFubm90YXRpb246IEFubm90YXRpb247XHJcblxyXG4gIC8vZGFzaGJvYXJkIDogRGFzaGJvYXJkO1xyXG5cclxuICBjaGFydDogYW55O1xyXG5cclxuICBjaGFydFN1YnMgOiBTdWJzY3JpcHRpb247XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgcHVibGljIHN0b3JlOiBDaGFydFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBhbm5vdFNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxyXG4gICAgLy9wcml2YXRlIGFubm90c01hbmFnZXI6IEFubm90YXRpb25NYW5hZ2VyLFxyXG4gICAgLy9wcml2YXRlIHN0b3JlOiBEYXNoYm9hcmRTdG9yZSxcclxuICAgIC8vcHJpdmF0ZSBjaGFydFN0b3JlOiBDaGFydFN0b3JlLFxyXG4gICAgLy9wcml2YXRlIHRpbWVNYW5hZ2VyOiBUaW1lTWFuYWdlciBcclxuICAgICl7XHJcbiAgICAgIHN1cGVyKCBzdG9yZSApO1xyXG5cclxuICAgIC8vIHRoaXMuY2hhcnRTdWJzID0gY2hhcnRTdG9yZVxyXG4gICAgLy8gICAuY2hhcnQkXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoIHggPT4gdGhpcy5jaGFydCA9IHggKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGNvbnNvbGUubG9nKCB0aGlzLmVwb2NoU3RhcnQgKTtcclxuICAgIC8vIHRoaXMuc3RvcmVTdWJzID0gdGhpc1xyXG4gICAgLy8gICAuc3RvcmVcclxuICAgIC8vICAgLmRhc2hib2FyZCRcclxuICAgIC8vICAgLnN1YnNjcmliZSggeCA9PiB7XHJcbiAgICAvLyAgICAgaWYoICF4Py5lcnJvciApe1xyXG4gICAgLy8gICAgICAgdGhpcy5kYXNoYm9hcmQgPSB4LmRhc2hib2FyZDtcclxuICAgIC8vICAgICB9IFxyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyBpZiggIXRoaXMuY2hhcnQ/LndpZGdldC5hbm5vdGF0aW9ucyApe1xyXG4gICAgLy8gICB0aGlzLmNoYXJ0LndpZGdldC5hbm5vdGF0aW9ucyA9IFtdO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKCB0aGlzLmFubm90YXRpb24gKXtcclxuICAgIC8vICAgdGhpcy50aW1lTGFiZWwgPSB0aGlzLnRpbWVNYW5hZ2VyLmFic29sdXRlVHpEYXRlVG9TdHJpbmcoIHRoaXMuYW5ub3RhdGlvbi50aW1lICk7XHJcblxyXG4gICAgLy8gICB0aGlzLmRlc2MgPSB0aGlzLmFubm90YXRpb24udGV4dDtcclxuICAgIC8vICAgdGhpcy50YWdzID0gWy4uLnRoaXMuYW5ub3RhdGlvbi50YWdzXTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXNcclxuICAgIC8vICAgICAuY2hhcnRcclxuICAgIC8vICAgICAud2lkZ2V0XHJcbiAgICAvLyAgICAgLmFubm90YXRpb25zXHJcbiAgICAvLyAgICAgLnB1c2goIHtcclxuICAgIC8vICAgICAgIHRpbWU6IG1vbWVudCggdGhpcy5lcG9jaFN0YXJ0ICksXHJcbiAgICAvLyAgICAgICB0aW1lRW5kOiAoIHRoaXMuZXBvY2hFbmQgIT0gdGhpcy5lcG9jaFN0YXJ0ICkgP1xyXG4gICAgLy8gICAgICAgICBtb21lbnQoIHRoaXMuZXBvY2hFbmQgKSA6IHVuZGVmaW5lZCxcclxuICAgIC8vICAgICB9ICk7XHJcblxyXG4gICAgLy8gICB0aGlzLnRpbWVMYWJlbCA9ICB0aGlzLnRpbWVNYW5hZ2VyLmFic29sdXRlVHpEYXRlVG9TdHJpbmcoIHRoaXMuZXBvY2hTdGFydCApO1xyXG5cclxuICAgIC8vICAgdGhpcy5jaGFydC51cGRhdGUoKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIC8vIHRoaXMuc3RvcmVTdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAvLyB0aGlzLmNoYXJ0U3Vicy51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHcgPSB0aGlzXHJcbiAgICAvLyAgIC5jaGFydFxyXG4gICAgLy8gICAud2lkZ2V0O1xyXG4gICAgXHJcbiAgICAvLyB3LmFubm90YXRpb25zID0gd1xyXG4gICAgLy8gICAuYW5ub3RhdGlvbnNcclxuICAgIC8vICAgLmZpbHRlciggeCA9PiB4LmlkIClcclxuXHJcbiAgICAvLyB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TYXZlKCl7XHJcbiAgICBpZiggdGhpcy5hbm5vdGF0aW9uICl7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCl7XHJcbiAgICBjb25zb2xlLmxvZyggXCJjcmVhdGVcIiApO1xyXG5cclxuICAgIGNvbnN0IGFubm90ID0ge1xyXG4gICAgICB0aW1lIDogdGhpcy5lcG9jaFN0YXJ0LFxyXG4gICAgICB0aW1lRW5kOiAoIHRoaXMuZXBvY2hTdGFydCAhPSB0aGlzLmVwb2NoRW5kICkgPyB0aGlzLmVwb2NoRW5kIDogMCxcclxuXHRcdFx0ZGFzaGJvYXJkSWQ6IDIwLCAvL3RoaXMuZGFzaGJvYXJkLmlkLFxyXG4gICAgICBwYW5lbElkOiB0aGlzLnN0b3JlLnBhbmVsLmlkLFxyXG5cclxuICAgICAgdGV4dDogdGhpcy5kZXNjLFxyXG4gICAgICB0YWdzOiBbLi4udGhpcy50YWdzXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b0FkZCA9IF8ub21pdChhbm5vdCwgJ3RpbWUnKTtcclxuICAgIHRvQWRkLnRpbWUgPSBNb21lbnQudG9EYXRlKCBhbm5vdC50aW1lICk7XHJcblxyXG4gICAgdGhpc1xyXG5cdFx0XHQuYW5ub3RTZXJ2aWNlXHJcbiAgICAgIC5jcmVhdGUoIGFubm90IClcclxuICAgICAgLnBpcGUoIFxyXG4gICAgICAgIGZpbmFsaXplKCAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSApIClcclxuXHRcdFx0LnN1YnNjcmliZSggXHJcbiAgICAgICAgeCA9PiB7XHJcbiAgICAgICAgICBOb3Rlcy5zdWNjZXNzKCB4Lm1lc3NhZ2UgKTtcclxuXHJcbiAgICAgICAgICAvL3RoaXMuYW5ub3RzTWFuYWdlci51cGRhdGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfQ1JFQVRFX0FOTiApKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCl7XHJcbiAgICAvLyBjb25zdCBhbm5vdCA9IHtcclxuICAgIC8vICAgdGltZTogdGhpcy5hbm5vdGF0aW9uLnRpbWUsXHJcbiAgICAvLyAgIHRpbWVFbmQ6IHRoaXMuYW5ub3RhdGlvbi50aW1lRW5kLFxyXG4gICAgLy8gICB0ZXh0OiB0aGlzLmRlc2MsXHJcbiAgICAvLyAgIHRhZ3M6IFsuLi50aGlzLnRhZ3NdLFxyXG4gICAgLy8gICBhbGVydElkOiB0aGlzLmFubm90YXRpb24uYWxlcnQ/LmlkXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHRoaXNcclxuXHRcdC8vIFx0LmFubm90U2VydmljZVxyXG4gICAgLy8gICAudXBkYXRlKCB0aGlzLmFubm90YXRpb24uaWQsIGFubm90IClcclxuICAgIC8vICAgLnBpcGUoIFxyXG4gICAgLy8gICAgIGZpbmFsaXplKCAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSApIClcclxuXHRcdC8vIFx0LnN1YnNjcmliZSggXHJcbiAgICAvLyAgICAgeCA9PntcclxuICAgIC8vICAgICAgIE5vdGlmaWNhdGlvbkRpc3BhdGNoZXIuc3VjY2VzcyggeC5tZXNzYWdlICk7XHJcblxyXG4gICAgLy8gICAgICAgdGhpcy5hbm5vdHNNYW5hZ2VyLnVwZGF0ZSgpO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZSA9PiBOb3RpZmljYXRpb25EaXNwYXRjaGVyLmVycm9yKCBcclxuXHRcdC8vIFx0XHRcdGUuZXJyb3I/Lm1lc3NhZ2UgPz8gUmVzdWx0TWVzc2FnZXMuQkFEX1VQREFURV9BTk4gKSlcclxuICB9XHJcblxyXG4gIG9uQWRkVGFnKCBlICl7XHJcblx0XHQvLyBjb25zdCB0YWcgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcblx0XHQvLyBpZiggdGFnICkge1xyXG5cdFx0Ly8gXHRpZiggIXRoaXMudGFncyApe1xyXG5cdFx0Ly8gXHRcdHRoaXMudGFncyA9IFtdO1xyXG5cdFx0Ly8gXHR9XHJcblxyXG5cdFx0Ly8gXHRpZiggIXRoaXMudGFncy5pbmNsdWRlcyggdGFnICkpe1xyXG5cdFx0Ly8gXHRcdHRoaXMudGFncy5wdXNoKCB0YWcgKTtcclxuXHRcdC8vIFx0fVxyXG5cclxuXHRcdC8vIFx0ZS50YXJnZXQudmFsdWUgPSAnJztcclxuXHRcdC8vIH0gXHJcblx0fVxyXG5cclxuXHRvblJlbW92ZVRhZyh0YWcpe1xyXG4gICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHQvLyBjb25zdCBpbmRleCA9IHRoaXMudGFncy5pbmRleE9mKCB0YWcgKTtcclxuXHJcblx0XHQvLyBpZiggLTEgIT09IGluZGV4ICl7XHJcblx0XHQvLyBcdHRoaXMudGFncy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblx0XHQvLyB9XHJcbiAgfVxyXG4gIFxyXG4gIG9uRGVsZXRlKCl7XHJcbiAgICAvLyB0aGlzXHJcblx0XHQvLyBcdC5hbm5vdFNlcnZpY2VcclxuICAgIC8vICAgLmRlbGV0ZSggdGhpcy5hbm5vdGF0aW9uLmlkIClcclxuICAgIC8vICAgLnBpcGUoIFxyXG4gICAgLy8gICAgIGZpbmFsaXplKCAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSApIClcclxuXHRcdC8vIFx0LnN1YnNjcmliZSggXHJcbiAgICAvLyAgICAgeCA9PiB7XHJcbiAgICAvLyAgICAgICBOb3RpZmljYXRpb25EaXNwYXRjaGVyLnN1Y2Nlc3MoIHgubWVzc2FnZSApO1xyXG5cclxuICAgIC8vICAgICAgIHRoaXMuYW5ub3RzTWFuYWdlci51cGRhdGUoKTtcclxuICAgIC8vICAgICB9ICxcclxuICAgIC8vICAgICBlID0+IE5vdGlmaWNhdGlvbkRpc3BhdGNoZXIuZXJyb3IoIFxyXG5cdFx0Ly8gXHRcdFx0ZS5lcnJvcj8ubWVzc2FnZSA/PyBSZXN1bHRNZXNzYWdlcy5CQURfREVMRVRFX0FOTiApKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cdFxyXG5cclxuXHRcdFxyXG4iLCJcclxuPGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25cIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX2hlYWRlclwiPlxyXG5cdFx0PCEtLSA8ZGl2Pnt7YW5ub3RhdGlvbiA/ICdFZGl0IGFubm90YXRpb24nIDogJ0FkZCBhbm5vdGF0aW9uJ319PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cInVwZC1hbm5fX2hlYWRlci10aW1lXCI+e3t0aW1lTGFiZWx9fTwvZGl2PiAtLT5cclxuXHRcdHRvZG9cclxuXHQ8L2Rpdj5cclxuXHRcdFxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ3JhcGgtYW5ub3RhdGlvbl9fYm9keSB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tdi1zdHJldGNoXCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC03XCI+RGVzY3JpcHRpb248L3NwYW4+XHJcblx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImdmLWZvcm0taW5wdXQgd2lkdGgtMjBcIiByb3dzPVwiMlwiIFsobmdNb2RlbCldPVwiZGVzY1wiICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxlZC10YWdib3ggXHJcblx0XHRcdGxhYmVsPVwiVGFnc1wiXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0YWdzXCI+XHJcblx0XHQ8L2VkLXRhZ2JveD5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XHJcblx0XHRcdDxidXR0b24gIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cIm9uU2F2ZSgpXCI+U2F2ZTwvYnV0dG9uPlxyXG5cclxuXHRcdFx0PGJ1dHRvbiAqbmdJZj1cImFubm90YXRpb25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2J1dHRvbj5cclxuXHJcblx0XHRcdDxhIGNsYXNzPVwiYnRuLXRleHRcIiAoY2xpY2spPVwiY2xvc2UuZW1pdCgpXCI+Q2FuY2VsPC9hPlxyXG5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcblx0XHQ8IS0tIDxlZC10ZXh0Ym94XHJcblx0XHRcdGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImRlc2NcIj48L2VkLXRleHRib3g+XHJcblx0XHRcclxuXHRcclxuXHRcdDxsYWJlbCBjbGFzcz1cImVkLWZvcm1fX2xhYmVsXCI+VGFnczwvbGFiZWw+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidXBkLWFubl9fdGFncy13cmFwcGVyIHBsLTFcIj5cclxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgdCBvZiB0YWdzXCIgY2xhc3M9XCJ1cGQtYW5uX19sYWJlbC10YWcgbXItMVwiPlxyXG5cdFx0XHRcdHt7dH19PGRpdiAoY2xpY2spPVwib25SZW1vdmVUYWcodClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzIG1sLTIgZWQtcG9pbnRlclwiPjwvaT48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHJcblx0XHRcdDxpbnB1dCBrZW5kb1RleHRCb3ggY2xhc3M9XCJlZC1mb3JtX19pbnB1dCB1cGQtYW5uX190YWctaW5wdXRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCJcclxuXHRcdFx0XHQoa2V5dXAuZW50ZXIpPVwib25BZGRUYWcoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiYWRkIHRhZ3NcIj5cclxuXHRcclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFxyXG5cdDxkaXYgY2xhc3M9XCJ1cGQtYW5uX19idXR0b25zIG10LTNcIiA+XHJcblx0XHJcblx0XHRcclxuXHQ8L2Rpdj4gLS0+XHJcblx0XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuIl19