import { FormControl, FormGroup } from '@angular/forms';
import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
export declare class TimeEditorComponent extends BaseChartEditorComponent {
    form: FormGroup;
    constructor(panel: Panel);
    ngOnInit(): void;
    validateTime(c: FormControl): {
        invalidTime: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<TimeEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimeEditorComponent, "editor-time", never, {}, {}, never, never>;
}
//# sourceMappingURL=time.d.ts.map