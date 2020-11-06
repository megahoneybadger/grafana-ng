import { Component, Inject, Input } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "./param/param";
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
    } }, directives: [i1.AlertQueryParamPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertQueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'alert-query-editor',
                templateUrl: `./query.html`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { query: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2NvbmZpZy9jb25kaXRpb25zL3F1ZXJ5L3F1ZXJ5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvY29uZGl0aW9ucy9xdWVyeS9xdWVyeS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXFCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBT2pGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx3QkFBd0I7SUF3QnRFLFlBQW1DLEtBQVk7UUFDOUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBdEJoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUVoQixjQUFTLEdBQUc7WUFDWCxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDZixFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDZixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDZixFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDZixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7U0FDZixDQUFBO1FBRUQsWUFBTyxHQUFHO1lBQ1QsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2xCLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUNsQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDbkIsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO1NBQ2xCLENBQUE7UUFLQSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7YUFDckIsTUFBTTthQUNOLE9BQU87YUFDUCxPQUFPO2FBQ1AsR0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFDLEtBQUssRUFBUSxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQTtJQUNqRCxDQUFDOztrR0FoQ1UseUJBQXlCLHVCQXdCaEIsV0FBVzs4REF4QnBCLHlCQUF5QjtRQ1R0Qyw4QkFDQztRQUFBLGdDQUNDO1FBQUEsNEJBQU07UUFBQSxzQkFBTTtRQUFBLGlCQUFPO1FBRW5CLDZDQUdxQjtRQUZwQixpS0FBd0I7UUFFekIsaUJBQXFCO1FBRXJCLDRCQUFNO1FBQUEsdUJBQU87UUFBQSxpQkFBTztRQUVwQiw2Q0FHcUI7UUFGcEIsK0pBQXNCO1FBRXZCLGlCQUFxQjtRQUVyQiw0QkFBTTtRQUFBLHVCQUFPO1FBQUEsaUJBQU87UUFFcEIsOENBR3FCO1FBRnBCLDhKQUFvQjtRQUVyQixpQkFBcUI7UUFFckIsNkJBQU07UUFBQSxrQkFBQztRQUFBLGlCQUFPO1FBQ2YsaUJBQVE7UUFDVCxpQkFBTTs7UUFwQkgsZUFBd0I7UUFBeEIsd0NBQXdCLDBCQUFBO1FBT3hCLGVBQXNCO1FBQXRCLHNDQUFzQix3QkFBQTtRQU90QixlQUFvQjtRQUFwQixvQ0FBb0Isc0JBQUE7O2tERFZWLHlCQUF5QjtjQUpyQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGNBQWM7YUFDM0I7O3NCQXlCYSxNQUFNO3VCQUFFLFdBQVc7d0JBdkJ2QixLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRRdWVyeSwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhbGVydC1xdWVyeS1lZGl0b3InLFxyXG5cdHRlbXBsYXRlVXJsOiBgLi9xdWVyeS5odG1sYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRRdWVyeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xyXG5cdEBJbnB1dCgpIHF1ZXJ5OiBBbGVydFF1ZXJ5O1xyXG5cclxuXHRpdGVtc1RhcmdldCA9IFtdXHJcblxyXG5cdGl0ZW1zRnJvbSA9IFtcclxuXHRcdHtsYWJlbDogJzEwcycgfSxcclxuXHRcdHtsYWJlbDogJzFtJyB9LFxyXG5cdFx0e2xhYmVsOiAnNW0nIH0sXHJcblx0XHR7bGFiZWw6ICcxMG0nIH0sXHJcblx0XHR7bGFiZWw6ICcxNW0nIH0sXHJcblx0XHR7bGFiZWw6ICcxaCcgfSxcclxuXHRcdHtsYWJlbDogJzI0aCcgfSxcclxuXHRcdHtsYWJlbDogJzQ4aCcgfVxyXG5cdF1cclxuXHJcblx0aXRlbXNUbyA9IFtcclxuXHRcdHtsYWJlbDogJ25vdycgfSxcclxuXHRcdHtsYWJlbDogJ25vdy0xbScgfSxcclxuXHRcdHtsYWJlbDogJ25vdy01bScgfSxcclxuXHRcdHtsYWJlbDogJ25vdy0xMG0nIH0sXHJcblx0XHR7bGFiZWw6ICdub3ctMWgnIH1cclxuXHRdXHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcclxuXHRcdHN1cGVyKCBwYW5lbCApO1xyXG5cdFx0XHJcblx0XHR0aGlzLml0ZW1zVGFyZ2V0ID0gdGhpc1xyXG5cdFx0XHQud2lkZ2V0XHJcblx0XHRcdC5tZXRyaWNzXHJcblx0XHRcdC50YXJnZXRzXHJcblx0XHRcdC5tYXAoIHggPT4geyByZXR1cm4ge2xhYmVsOiAoPGFueT54KS5yZWZJZCB9IH0gKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHQ8c3Bhbj5xdWVyeSg8L3NwYW4+XHJcblxyXG5cdFx0PHF1ZXJ5LXBhcmFtLXBpY2tlciBcclxuXHRcdFx0Wyh2YWx1ZSldPVwicXVlcnkudGFyZ2V0XCJcclxuXHRcdFx0W2l0ZW1zXT1cIml0ZW1zVGFyZ2V0XCI+XHJcblx0XHQ8L3F1ZXJ5LXBhcmFtLXBpY2tlcj5cclxuXHJcblx0XHQ8c3Bhbj4sJm5ic3A7PC9zcGFuPlxyXG5cclxuXHRcdDxxdWVyeS1wYXJhbS1waWNrZXIgXHJcblx0XHRcdFsodmFsdWUpXT1cInF1ZXJ5LmZyb21cIlxyXG5cdFx0XHRbaXRlbXNdPVwiaXRlbXNGcm9tXCI+XHJcblx0XHQ8L3F1ZXJ5LXBhcmFtLXBpY2tlcj5cclxuXHJcblx0XHQ8c3Bhbj4sJm5ic3A7PC9zcGFuPlxyXG5cclxuXHRcdDxxdWVyeS1wYXJhbS1waWNrZXIgXHJcblx0XHRcdFsodmFsdWUpXT1cInF1ZXJ5LnRvXCJcclxuXHRcdFx0W2l0ZW1zXT1cIml0ZW1zVG9cIj5cclxuXHRcdDwvcXVlcnktcGFyYW0tcGlja2VyPlxyXG5cclxuXHRcdDxzcGFuPik8L3NwYW4+XHJcblx0PC9sYWJlbD5cclxuPC9kaXY+Il19