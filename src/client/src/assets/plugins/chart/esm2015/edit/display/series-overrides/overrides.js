import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export class SeriesOverridesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    ngOnInit() {
        console.log('create SeriesOverridesEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy SeriesOverridesEditorComponent');
    }
}
SeriesOverridesEditorComponent.ɵfac = function SeriesOverridesEditorComponent_Factory(t) { return new (t || SeriesOverridesEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
SeriesOverridesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SeriesOverridesEditorComponent, selectors: [["editor-series-overrides"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function SeriesOverridesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "series overrides will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SeriesOverridesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-overrides',
                templateUrl: './overrides.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3Nlcmllcy1vdmVycmlkZXMvb3ZlcnJpZGVzLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3Nlcmllcy1vdmVycmlkZXMvb3ZlcnJpZGVzLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFNM0UsTUFBTSxPQUFPLDhCQUErQixTQUFRLHdCQUF3QjtJQUUxRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUUsdUNBQXVDLENBQUUsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUUsdUNBQXVDLENBQUUsQ0FBQTtJQUN4RCxDQUFDOzs0R0FaVSw4QkFBOEIsdUJBRXBCLFdBQVc7bUVBRnJCLDhCQUE4QjtRQ1IzQyw2Q0FBNkI7O2tERFFoQiw4QkFBOEI7Y0FKMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEM7O3NCQUdjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1zZXJpZXMtb3ZlcnJpZGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJyaWRlcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXJpZXNPdmVycmlkZXNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coICdjcmVhdGUgU2VyaWVzT3ZlcnJpZGVzRWRpdG9yQ29tcG9uZW50JyApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGNvbnNvbGUubG9nKCAnZGV0cm95IFNlcmllc092ZXJyaWRlc0VkaXRvckNvbXBvbmVudCcgKVxuICB9XG59XG4iLCJzZXJpZXMgb3ZlcnJpZGVzIHdpbGwgYmUgaGVyZSJdfQ==