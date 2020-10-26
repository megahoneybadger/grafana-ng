import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseChartEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get widget() {
        return this.panel.widget;
    }
    get axes() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.axes;
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    get options() {
        return this
            .widget
            .control
            .chart
            .options;
    }
    refresh() {
        this
            .widget
            .control
            .refresh();
    }
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFDLE1BQU0sT0FBTyx3QkFBd0I7SUFzQm5DLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ2hDLENBQUM7SUFyQkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJOztRQUNOLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSTthQUNSLE1BQU07YUFDTixPQUFPO2FBQ1AsS0FBSzthQUNMLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSTthQUNELE1BQU07YUFDTixPQUFPO2FBQ1AsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDOzs7NkRBOUJVLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuXG4gIGdldCB3aWRnZXQoKSA6IENoYXJ0e1xuICAgIHJldHVybiB0aGlzLnBhbmVsLndpZGdldDtcbiAgfVxuXG4gIGdldCBheGVzKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5heGVzO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZCgpe1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKXtcbiAgICByZXR1cm4gdGhpc1xuICAgICAgLndpZGdldFxuICAgICAgLmNvbnRyb2xcbiAgICAgIC5jaGFydFxuICAgICAgLm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHVibGljIHBhbmVsOiBQYW5lbCl7XG4gIH1cblxuICByZWZyZXNoKCl7XG4gICAgdGhpc1xuICAgICAgLndpZGdldFxuICAgICAgLmNvbnRyb2xcbiAgICAgIC5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==