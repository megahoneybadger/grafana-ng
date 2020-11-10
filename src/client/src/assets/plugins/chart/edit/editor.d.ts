import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ChartEditorComponent {
    private router;
    private activatedRoute;
    private location;
    index: number;
    routeSubs: Subscription;
    constructor(router: Router, activatedRoute: ActivatedRoute, location: Location);
    ngOnDestroy(): void;
    onTabSelected(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChartEditorComponent, "widget-editor", never, {}, {}, never, never>;
}
//# sourceMappingURL=editor.d.ts.map