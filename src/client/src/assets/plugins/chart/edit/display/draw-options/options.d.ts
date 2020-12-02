import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class DrawOptionsEditorComponent extends BaseChartEditorComponent {
    availableWidth: import("primeng/api").SelectItem[];
    availableTooltipModes: import("primeng/api").SelectItem[];
    availableTooltipSortOrders: import("primeng/api").SelectItem[];
    availableNullValueOptions: import("primeng/api").SelectItem[];
    get stack(): boolean;
    set stack(v: boolean);
    constructor(panel: Panel);
    static ɵfac: i0.ɵɵFactoryDef<DrawOptionsEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DrawOptionsEditorComponent, "editor-draw-options", never, {}, {}, never, never>;
}
//# sourceMappingURL=options.d.ts.map