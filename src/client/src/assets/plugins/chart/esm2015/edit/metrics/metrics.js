import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import * as i0 from "@angular/core";
export class MetricsEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    ngOnInit() {
        console.log('create MetricsComponent');
        console.log(this.panel);
    }
    ngOnDestroy() {
        console.log('detroy MetricsComponent');
    }
}
MetricsEditorComponent.ɵfac = function MetricsEditorComponent_Factory(t) { return new (t || MetricsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
MetricsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MetricsEditorComponent, selectors: [["editor-metrics"]], decls: 1, vars: 0, template: function MetricsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "metrics will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MetricsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-metrics',
                templateUrl: './metrics.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvbWV0cmljcy9tZXRyaWNzLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9tZXRyaWNzL21ldHJpY3MuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQVE1QyxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLFlBQTJDLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBRXZELENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBRSx5QkFBeUIsQ0FBRSxDQUFBO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBRSx5QkFBeUIsQ0FBRSxDQUFBO0lBQzFDLENBQUM7OzRGQVpVLHNCQUFzQix1QkFFWixXQUFXOzJEQUZyQixzQkFBc0I7UUNUbkMsb0NBQW9COztrRERTUCxzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7YUFDOUI7O3NCQUdjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLW1ldHJpY3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZXRyaWNzRWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwcml2YXRlIHBhbmVsOiBQYW5lbCl7XG4gICAgXG4gIH1cbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyggJ2NyZWF0ZSBNZXRyaWNzQ29tcG9uZW50JyApXG4gICAgY29uc29sZS5sb2coIHRoaXMucGFuZWwgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgY29uc29sZS5sb2coICdkZXRyb3kgTWV0cmljc0NvbXBvbmVudCcgKVxuICB9XG59XG4iLCJtZXRyaWNzIHdpbGwgYmUgaGVyZSJdfQ==