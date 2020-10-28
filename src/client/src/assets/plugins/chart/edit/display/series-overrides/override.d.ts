import { EventEmitter } from '@angular/core';
import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { OverrideItem, SeriesOverride, OverrideType } from '../../../chart.m';
import * as i0 from "@angular/core";
export declare class SeriesOverrideEditorComponent extends BaseChartEditorComponent {
    override: SeriesOverride;
    index: number;
    removed: EventEmitter<SeriesOverride>;
    cmItems: any[];
    items: OverrideItem[];
    showColorPicker: boolean;
    constructor(panel: Panel);
    ngOnInit(): void;
    rebuildItems(): void;
    createBoolItem(header: string, type: OverrideType): {
        label: string;
        items: {
            label: string;
            value: boolean;
            type: OverrideType;
        }[];
    };
    createNumberItem(header: string, type: OverrideType, from?: number, to?: number): {
        label: string;
        items: any[];
    };
    createColorItem(header: string, type: OverrideType): {
        label: string;
        type: OverrideType;
        items: {
            label: string;
            type: OverrideType;
        }[];
    };
    onOptionSelected(item: any): void;
    onRemoveItem(item: OverrideItem): void;
    getItemHeader(item: OverrideItem): any;
    getPropertyName(item: any): string;
    getOverrideType(prop: any): string;
    onColorSelected(color: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SeriesOverrideEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SeriesOverrideEditorComponent, "editor-series-override", never, { "override": "override"; "index": "index"; }, { "removed": "removed"; }, never, never>;
}
//# sourceMappingURL=override.d.ts.map