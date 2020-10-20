import { EventEmitter, Inject, Injectable } from "@angular/core";
import { finalize, mergeMap, tap } from 'rxjs/operators';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "common";
const moment = moment_;
export class DataProvider {
    constructor(pluginStore, dsService, time, pluginLoader, injector, panel) {
        this.pluginStore = pluginStore;
        this.dsService = dsService;
        this.time = time;
        this.pluginLoader = pluginLoader;
        this.injector = injector;
        this.panel = panel;
        this.data$ = new EventEmitter();
        this.error$ = new EventEmitter();
        this.timeSubs = this
            .time
            .range$
            .pipe(tap(_ => this.request = ''), mergeMap(_ => this.pluginStore.getDataSource("influx")), mergeMap((p) => this.pluginLoader.loadDataSourceQueryCompiler(p, this.injector)), mergeMap((c) => c.compile(this.metrics, time.range)))
            .subscribe((x) => this.pull(x));
    }
    get metrics() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
    }
    destroy() {
        var _a;
        (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    pull(request) {
        if (this.request === request) {
            return;
        }
        this.request = request;
        console.log(`pull: ${request}`);
        if (!request) {
            this.data$.emit([]);
        }
        else {
            this.panel.loading = true;
            this
                .dsService
                .proxy(6, request)
                .pipe(finalize(() => this.panel.loading = false))
                .subscribe(x => this.data$.emit(x), e => this.error$.emit(e.error));
        }
    }
}
DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(i0.ɵɵinject(i1.PluginStore), i0.ɵɵinject(i1.DataSourceService), i0.ɵɵinject(i1.TimeRangeStore), i0.ɵɵinject(i1.PluginLoader), i0.ɵɵinject(i0.Injector), i0.ɵɵinject('panel')); };
DataProvider.ɵprov = i0.ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.PluginStore }, { type: i1.DataSourceService }, { type: i1.TimeRangeStore }, { type: i1.PluginLoader }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: ['panel']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBR3ZCLE1BQU0sT0FBTyxZQUFZO0lBWXhCLFlBQ1MsV0FBd0IsRUFDeEIsU0FBNEIsRUFDNUIsSUFBb0IsRUFDcEIsWUFBMEIsRUFDMUIsUUFBa0IsRUFDQyxLQUFhO1FBTGhDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBZnpDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZ0IxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7YUFDbEIsSUFBSTthQUNKLE1BQU07YUFDTixJQUFJLENBQ0osR0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUUsRUFDN0IsUUFBUSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUUsUUFBUSxDQUFFLENBQUUsRUFDM0QsUUFBUSxDQUFFLENBQUUsQ0FBUyxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUMsRUFDN0YsUUFBUSxDQUFFLENBQUUsQ0FBZ0IsRUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDO2FBQ3pFLFNBQVMsQ0FBRSxDQUFFLENBQVMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFyQkQsSUFBSSxPQUFPOztRQUNWLG1CQUFPLElBQUksQ0FBQyxLQUFLLDBDQUFFLE1BQU0sMENBQUUsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFxQkQsT0FBTzs7UUFDTixNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLFdBQVcsR0FBRztJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFFLE9BQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM3QixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsT0FBTyxFQUFFLENBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDbkI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJO2lCQUNGLFNBQVM7aUJBQ1QsS0FBSyxDQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7aUJBQ2xCLElBQUksQ0FDSixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFFLENBQUM7aUJBQzVDLFNBQVMsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7d0VBMURXLFlBQVksc0tBa0JkLE9BQU87b0RBbEJMLFlBQVksV0FBWixZQUFZO2tEQUFaLFlBQVk7Y0FEeEIsVUFBVTs7c0JBbUJSLE1BQU07dUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJUGFuZWwsIFRpbWVSYW5nZVN0b3JlLCBQbHVnaW5Mb2FkZXIsIFBsdWdpblN0b3JlLFxyXG5cdFF1ZXJ5Q29tcGlsZXIsIERhdGFTb3VyY2VTZXJ2aWNlLCBQbHVnaW4gfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhUHJvdmlkZXIge1xyXG5cdHJlcXVlc3Q6IHN0cmluZztcclxuXHJcblx0ZGF0YSQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZXJyb3IkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHR0aW1lU3ViczogU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRnZXQgbWV0cmljcygpe1xyXG5cdFx0cmV0dXJuIHRoaXMucGFuZWw/LndpZGdldD8ubWV0cmljcztcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yIChcclxuXHRcdHByaXZhdGUgcGx1Z2luU3RvcmU6IFBsdWdpblN0b3JlLFxyXG5cdFx0cHJpdmF0ZSBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB0aW1lOiBUaW1lUmFuZ2VTdG9yZSxcclxuXHRcdHByaXZhdGUgcGx1Z2luTG9hZGVyOiBQbHVnaW5Mb2FkZXIsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdEBJbmplY3QoICdwYW5lbCcgKSBwcml2YXRlIHBhbmVsOiBJUGFuZWwgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnRpbWVTdWJzID0gdGhpc1xyXG5cdFx0XHRcdC50aW1lXHJcblx0XHRcdFx0LnJhbmdlJFxyXG5cdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0dGFwKCBfID0+IHRoaXMucmVxdWVzdCA9ICcnICksXHJcblx0XHRcdFx0XHRtZXJnZU1hcCggXyA9PiB0aGlzLnBsdWdpblN0b3JlLmdldERhdGFTb3VyY2UoIFwiaW5mbHV4XCIgKSApLFxyXG5cdFx0XHRcdFx0bWVyZ2VNYXAoICggcDogUGx1Z2luICkgPT4gdGhpcy5wbHVnaW5Mb2FkZXIubG9hZERhdGFTb3VyY2VRdWVyeUNvbXBpbGVyKCBwLCB0aGlzLmluamVjdG9yICkpLFxyXG5cdFx0XHRcdFx0bWVyZ2VNYXAoICggYzogUXVlcnlDb21waWxlciApID0+IGMuY29tcGlsZSggdGhpcy5tZXRyaWNzLCB0aW1lLnJhbmdlICkpKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoICggeDogc3RyaW5nICkgPT4gdGhpcy5wdWxsKCB4ICkpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpe1xyXG5cdFx0dGhpcy50aW1lU3Vicz8udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdHB1bGwoIHJlcXVlc3Q6IHN0cmluZyl7XHJcblx0XHRpZiAodGhpcy5yZXF1ZXN0ID09PSByZXF1ZXN0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCBgcHVsbDogJHtyZXF1ZXN0fWAgKTtcclxuXHRcdFxyXG5cdFx0aWYgKCFyZXF1ZXN0KSB7XHJcblx0XHRcdHRoaXMuZGF0YSQuZW1pdChbXSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFuZWwubG9hZGluZyA9IHRydWU7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LmRzU2VydmljZVxyXG5cdFx0XHRcdC5wcm94eSggNiwgcmVxdWVzdClcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdGZpbmFsaXplKCgpID0+IHRoaXMucGFuZWwubG9hZGluZyA9IGZhbHNlICkpXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdHggPT4gdGhpcy5kYXRhJC5lbWl0KCB4ICksXHJcblx0XHRcdFx0XHRlID0+IHRoaXMuZXJyb3IkLmVtaXQoZS5lcnJvcikpO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==