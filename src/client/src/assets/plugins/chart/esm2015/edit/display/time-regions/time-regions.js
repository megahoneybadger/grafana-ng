import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export class TimeRegionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    ngOnInit() {
        console.log('create TimeRegionsEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy TimeRegionsEditorComponent');
    }
}
TimeRegionsEditorComponent.ɵfac = function TimeRegionsEditorComponent_Factory(t) { return new (t || TimeRegionsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeRegionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeRegionsEditorComponent, selectors: [["editor-time-regions"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function TimeRegionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "time regions will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeRegionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-regions',
                templateUrl: './time-regions.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yZWdpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbnMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvdGltZS1yZWdpb25zL3RpbWUtcmVnaW9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBTTNFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBd0I7SUFFdEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFFLG1DQUFtQyxDQUFFLENBQUE7SUFDcEQsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFFLG1DQUFtQyxDQUFFLENBQUE7SUFDcEQsQ0FBQzs7b0dBWlUsMEJBQTBCLHVCQUVoQixXQUFXOytEQUZyQiwwQkFBMEI7UUNSdkMseUNBQXlCOztrRERRWiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkM7O3NCQUdjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci10aW1lLXJlZ2lvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS1yZWdpb25zLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVSZWdpb25zRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKCAnY3JlYXRlIFRpbWVSZWdpb25zRWRpdG9yQ29tcG9uZW50JyApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGNvbnNvbGUubG9nKCAnZGV0cm95IFRpbWVSZWdpb25zRWRpdG9yQ29tcG9uZW50JyApXG4gIH1cbn1cbiIsInRpbWUgcmVnaW9ucyB3aWxsIGJlIGhlcmUiXX0=