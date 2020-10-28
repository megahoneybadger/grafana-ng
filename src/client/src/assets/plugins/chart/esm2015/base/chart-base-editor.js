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
    get display() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.display;
    }
    get thresholds() {
        return this.display.thresholds;
    }
    get timeRegions() {
        return this.display.timeRegions;
    }
    get overrides() {
        return this.display.overrides;
    }
    get options() {
        return this
            .widget
            .component
            .control
            .chart
            .options;
    }
    refresh() {
        this
            .widget
            .component
            .control
            .refresh();
    }
    update() {
        const comp = this.widget.component;
        comp
            .datasets
            .forEach(x => comp.display.setup(x));
        this.refresh();
    }
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFDLE1BQU0sT0FBTyx3QkFBd0I7SUF1Q25DLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ2hDLENBQUM7SUF0Q0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJOztRQUNOLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTzs7UUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLFNBQVM7YUFDVCxPQUFPO2FBQ1AsS0FBSzthQUNMLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSTthQUNELE1BQU07YUFDTixTQUFTO2FBQ1QsT0FBTzthQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJO2FBQ0QsUUFBUTthQUNSLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFFM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs2REExRFUsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FEcEMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQXhlcywgQ2hhcnQsIERpc3BsYXksIExlZ2VuZCwgU2VyaWVzT3ZlcnJpZGUsIFRocmVzaG9sZCwgVGltZVJlZ2lvbiB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBnZXQgd2lkZ2V0KCkgOiBDaGFydHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC53aWRnZXQ7XG4gIH1cblxuICBnZXQgYXhlcygpIDogQXhlcyB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5heGVzO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZCgpIDogTGVnZW5ke1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXkoKSA6IERpc3BsYXl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5kaXNwbGF5O1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZHMoKTogVGhyZXNob2xkW117XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheS50aHJlc2hvbGRzO1xuICB9XG5cbiAgZ2V0IHRpbWVSZWdpb25zKCk6IFRpbWVSZWdpb25bXXtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnRpbWVSZWdpb25zO1xuICB9XG5cbiAgZ2V0IG92ZXJyaWRlcygpOiBTZXJpZXNPdmVycmlkZVtde1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkub3ZlcnJpZGVzO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKXtcbiAgICByZXR1cm4gdGhpc1xuICAgICAgLndpZGdldFxuICAgICAgLmNvbXBvbmVudFxuICAgICAgLmNvbnRyb2xcbiAgICAgIC5jaGFydFxuICAgICAgLm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHVibGljIHBhbmVsOiBQYW5lbCl7XG4gIH1cblxuICByZWZyZXNoKCl7XG4gICAgdGhpc1xuICAgICAgLndpZGdldFxuICAgICAgLmNvbXBvbmVudFxuICAgICAgLmNvbnRyb2xcbiAgICAgIC5yZWZyZXNoKCk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICBjb25zdCBjb21wID0gdGhpcy53aWRnZXQuY29tcG9uZW50O1xuXG4gICAgY29tcFxuICAgICAgLmRhdGFzZXRzXG4gICAgICAuZm9yRWFjaCggeCA9PiBjb21wLmRpc3BsYXkuc2V0dXAoIHggKSApO1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==