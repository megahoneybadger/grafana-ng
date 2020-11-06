import { EventEmitter, ElementRef } from '@angular/core';
import { ContextMenuComponent } from 'uilib';
import * as i0 from "@angular/core";
export declare class AlertQueryParamPickerComponent {
    items: any[];
    _value: string;
    backupValue: string;
    ctrlEditorElement: ElementRef;
    ctrlSuggestions: ContextMenuComponent;
    isEditorVisible: boolean;
    isSuggestionMenuOpen: boolean;
    pick: EventEmitter<string>;
    valueChange: EventEmitter<string>;
    get value(): string;
    set value(v: string);
    ngOnInit(): void;
    onShowEditor(e: any): void;
    onEditorFocusOut(): void;
    onEditorKeyDown(): void;
    onPick(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertQueryParamPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertQueryParamPickerComponent, "query-param-picker", never, { "items": "items"; "value": "value"; }, { "pick": "pick"; "valueChange": "valueChange"; }, never, never>;
}
//# sourceMappingURL=param.d.ts.map