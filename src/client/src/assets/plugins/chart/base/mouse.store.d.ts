import { Panel, TimeRangeStore } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface DragRegion {
    start: MouseEvent;
    end: MouseEvent;
}
export declare class MouseStore {
    panel: Panel;
    private time;
    private _down;
    readonly down$: Observable<MouseEvent>;
    private _up;
    readonly up$: Observable<MouseEvent>;
    private drag;
    readonly drag$: Observable<DragRegion>;
    private hover;
    readonly hover$: Observable<MouseEvent>;
    get component(): any;
    get chart(): any;
    constructor(panel: Panel, time: TimeRangeStore);
    down(s: MouseEvent): void;
    up(e: MouseEvent): void;
    move(m: MouseEvent): void;
    leave(e: MouseEvent): void;
    private refresh;
    private zoomIn;
    static ɵfac: i0.ɵɵFactoryDef<MouseStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<MouseStore>;
}
//# sourceMappingURL=mouse.store.d.ts.map