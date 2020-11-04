import { ElementRef, EventEmitter } from '@angular/core';
import { ContextMenuComponent } from 'uilib';
import { FuncObject } from '../../../../../metrics.m';
import * as i0 from "@angular/core";
export declare class FieldFunctionEditorComponent {
    func: FuncObject;
    remove: EventEmitter<any>;
    rebuild: EventEmitter<any>;
    textValue: string;
    isEditorVisible: boolean;
    isSuggestionsMenuOpen: boolean;
    suggestionItems: any[];
    deleteMenuItem: {
        label: string;
        command: (_: any) => void;
    };
    editorElement: ElementRef;
    suggestions: ContextMenuComponent;
    get param(): any;
    get paramValue(): any;
    get hasSuggestions(): any;
    ngOnInit(): void;
    onShowEditor(e: any): void;
    onEditorFocusOut(): void;
    onEditorKeyDown(): void;
    onEditorKeyUpEnter(): void;
    static ɵfac: i0.ɵɵFactoryDef<FieldFunctionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FieldFunctionEditorComponent, "field-function-editor", never, { "func": "func"; }, { "remove": "remove"; "rebuild": "rebuild"; }, never, never>;
}
//# sourceMappingURL=func-editor.d.ts.map