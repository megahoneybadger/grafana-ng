import { Component, Inject, Input } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "./param/param";
export class AlertQueryEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.itemsTarget = [];
        this.itemsFrom = [
            { label: '10s' },
            { label: '1m' },
            { label: '5m' },
            { label: '10m' },
            { label: '15m' },
            { label: '1h' },
            { label: '24h' },
            { label: '48h' }
        ];
        this.itemsTo = [
            { label: 'now' },
            { label: 'now-1m' },
            { label: 'now-5m' },
            { label: 'now-10m' },
            { label: 'now-1h' }
        ];
        this.itemsTarget = this
            .widget
            .metrics
            .targets
            .map(x => { return { label: x.refId }; });
    }
}
AlertQueryEditorComponent.ɵfac = function AlertQueryEditorComponent_Factory(t) { return new (t || AlertQueryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertQueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertQueryEditorComponent, selectors: [["alert-query-editor"]], inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 6, consts: [[1, "gf-form"], [1, "gf-form-label"], [3, "value", "items", "valueChange"]], template: function AlertQueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "query(");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "query-param-picker", 2);
        i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_4_listener($event) { return ctx.query.target = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6, ",\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "query-param-picker", 2);
        i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_7_listener($event) { return ctx.query.from = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span");
        i0.ɵɵtext(9, ",\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "query-param-picker", 2);
        i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_10_listener($event) { return ctx.query.to = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12, ")");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx.query.target)("items", ctx.itemsTarget);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.query.from)("items", ctx.itemsFrom);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.query.to)("items", ctx.itemsTo);
    } }, directives: [i2.AlertQueryParamPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertQueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'alert-query-editor',
                templateUrl: `./query.html`
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { query: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2NvbmZpZy9jb25kaXRpb25zL3F1ZXJ5L3F1ZXJ5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvY29uZGl0aW9ucy9xdWVyeS9xdWVyeS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXFCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQU9qRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsd0JBQXdCO0lBd0J0RSxZQUFtQyxLQUFZO1FBQzlDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQXRCaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsY0FBUyxHQUFHO1lBQ1gsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ2QsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ2QsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ2QsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1NBQ2YsQ0FBQTtRQUVELFlBQU8sR0FBRztZQUNULEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNmLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUNsQixFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDbEIsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25CLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtTQUNsQixDQUFBO1FBS0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO2FBQ3JCLE1BQU07YUFDTixPQUFPO2FBQ1AsT0FBTzthQUNQLEdBQUcsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBQyxLQUFLLEVBQVEsQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUE7SUFDakQsQ0FBQzs7a0dBaENVLHlCQUF5Qix1QkF3QmhCLFdBQVc7OERBeEJwQix5QkFBeUI7UUNUdEMsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLDRCQUFNO1FBQUEsc0JBQU07UUFBQSxpQkFBTztRQUVuQiw2Q0FHcUI7UUFGcEIsaUtBQXdCO1FBRXpCLGlCQUFxQjtRQUVyQiw0QkFBTTtRQUFBLHVCQUFPO1FBQUEsaUJBQU87UUFFcEIsNkNBR3FCO1FBRnBCLCtKQUFzQjtRQUV2QixpQkFBcUI7UUFFckIsNEJBQU07UUFBQSx1QkFBTztRQUFBLGlCQUFPO1FBRXBCLDhDQUdxQjtRQUZwQiw4SkFBb0I7UUFFckIsaUJBQXFCO1FBRXJCLDZCQUFNO1FBQUEsa0JBQUM7UUFBQSxpQkFBTztRQUNmLGlCQUFRO1FBQ1QsaUJBQU07O1FBcEJILGVBQXdCO1FBQXhCLHdDQUF3QiwwQkFBQTtRQU94QixlQUFzQjtRQUF0QixzQ0FBc0Isd0JBQUE7UUFPdEIsZUFBb0I7UUFBcEIsb0NBQW9CLHNCQUFBOztrRERWVix5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxjQUFjO2FBQzNCOztzQkF5QmEsTUFBTTt1QkFBRSxXQUFXO3dCQXZCdkIsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0UXVlcnksIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYWxlcnQtcXVlcnktZWRpdG9yJyxcclxuXHR0ZW1wbGF0ZVVybDogYC4vcXVlcnkuaHRtbGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0UXVlcnlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcclxuXHRASW5wdXQoKSBxdWVyeTogQWxlcnRRdWVyeTtcclxuXHJcblx0aXRlbXNUYXJnZXQgPSBbXVxyXG5cclxuXHRpdGVtc0Zyb20gPSBbXHJcblx0XHR7bGFiZWw6ICcxMHMnIH0sXHJcblx0XHR7bGFiZWw6ICcxbScgfSxcclxuXHRcdHtsYWJlbDogJzVtJyB9LFxyXG5cdFx0e2xhYmVsOiAnMTBtJyB9LFxyXG5cdFx0e2xhYmVsOiAnMTVtJyB9LFxyXG5cdFx0e2xhYmVsOiAnMWgnIH0sXHJcblx0XHR7bGFiZWw6ICcyNGgnIH0sXHJcblx0XHR7bGFiZWw6ICc0OGgnIH1cclxuXHRdXHJcblxyXG5cdGl0ZW1zVG8gPSBbXHJcblx0XHR7bGFiZWw6ICdub3cnIH0sXHJcblx0XHR7bGFiZWw6ICdub3ctMW0nIH0sXHJcblx0XHR7bGFiZWw6ICdub3ctNW0nIH0sXHJcblx0XHR7bGFiZWw6ICdub3ctMTBtJyB9LFxyXG5cdFx0e2xhYmVsOiAnbm93LTFoJyB9XHJcblx0XVxyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XHJcblx0XHRzdXBlciggcGFuZWwgKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5pdGVtc1RhcmdldCA9IHRoaXNcclxuXHRcdFx0LndpZGdldFxyXG5cdFx0XHQubWV0cmljc1xyXG5cdFx0XHQudGFyZ2V0c1xyXG5cdFx0XHQubWFwKCB4ID0+IHsgcmV0dXJuIHtsYWJlbDogKDxhbnk+eCkucmVmSWQgfSB9IClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0PHNwYW4+cXVlcnkoPC9zcGFuPlxyXG5cclxuXHRcdDxxdWVyeS1wYXJhbS1waWNrZXIgXHJcblx0XHRcdFsodmFsdWUpXT1cInF1ZXJ5LnRhcmdldFwiXHJcblx0XHRcdFtpdGVtc109XCJpdGVtc1RhcmdldFwiPlxyXG5cdFx0PC9xdWVyeS1wYXJhbS1waWNrZXI+XHJcblxyXG5cdFx0PHNwYW4+LCZuYnNwOzwvc3Bhbj5cclxuXHJcblx0XHQ8cXVlcnktcGFyYW0tcGlja2VyIFxyXG5cdFx0XHRbKHZhbHVlKV09XCJxdWVyeS5mcm9tXCJcclxuXHRcdFx0W2l0ZW1zXT1cIml0ZW1zRnJvbVwiPlxyXG5cdFx0PC9xdWVyeS1wYXJhbS1waWNrZXI+XHJcblxyXG5cdFx0PHNwYW4+LCZuYnNwOzwvc3Bhbj5cclxuXHJcblx0XHQ8cXVlcnktcGFyYW0tcGlja2VyIFxyXG5cdFx0XHRbKHZhbHVlKV09XCJxdWVyeS50b1wiXHJcblx0XHRcdFtpdGVtc109XCJpdGVtc1RvXCI+XHJcblx0XHQ8L3F1ZXJ5LXBhcmFtLXBpY2tlcj5cclxuXHJcblx0XHQ8c3Bhbj4pPC9zcGFuPlxyXG5cdDwvbGFiZWw+XHJcbjwvZGl2PiJdfQ==