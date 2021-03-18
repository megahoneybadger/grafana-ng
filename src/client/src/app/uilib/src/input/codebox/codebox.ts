import { Component, Input, forwardRef, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds'; 

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-codebox',
  styles: [':host { display:block;width:100%; }'],
  styleUrls: ['./codebox.scss' ],
  
  encapsulation: ViewEncapsulation.None,
  template: `<div class="code-editor gf-code-editor gf-form-input" #codeEditor></div>`,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeBoxComponent),  
      multi: true
    }
  ]
})
export class CodeBoxComponent extends BaseNgModelComponent{
  readonly DEFAULT_THEME_DARK = 'ace/theme/grafana-dark';
  readonly DEFAULT_THEME_LIGHT = 'ace/theme/textmate';
  readonly DEFAULT_MODE = 'text';

  readonly DEFAULT_MAX_LINES = 10;
  readonly DEFAULT_TAB_SIZE = 2;
  readonly DEFAULT_BEHAVIOURS = true;
  readonly DEFAULT_SNIPPETS = true;

  readonly THEME = 'ace/theme/monokai'; 
  readonly LANG_MARKDOWN = 'markdown';
  readonly LANG_HTML = 'html';

  _mode: any = this.LANG_HTML;

  @Input() maxLines: number = this.DEFAULT_MAX_LINES;
  @Input() showGutter: boolean = false;
  @Input() tabSize: number = this.DEFAULT_TAB_SIZE
  @Input() behavioursEnabled: boolean = this.DEFAULT_BEHAVIOURS;
  @Input() snippetsEnabled: boolean = this.DEFAULT_SNIPPETS;

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private editor: ace.Ace.Editor;

  get value():string{
    return this.editor.getValue();
  }

  @Input() set mode(mode: any) {
    this.setMode(mode);
  }

  setMode(mode: any) {
    this._mode = mode;
    console.log( this._mode );
    if (typeof this._mode === 'object') {
      this.editor?.getSession().setMode(this._mode);
    } else {
      this.editor?.getSession().setMode(`ace/mode/${this._mode}`);
    }
  }

  constructor(){
    super();
    ace.config.set('basePath', '/assets/libs/ace');
  }

  ngAfterViewInit () {
    const element = this.codeEditorElmRef.nativeElement;

    const editorOptions: Partial<ace.Ace.EditorOptions> = {
      maxLines: this.maxLines,
      showGutter: this.showGutter,
      tabSize: this.tabSize,
      behavioursEnabled: this.behavioursEnabled,
      highlightActiveLine: false,
      showPrintMargin: false,
      autoScrollEditorIntoView: true, // this is needed if editor is inside scrollable page
    };

    this.editor = ace.edit(element, editorOptions);

    this.editor.setTheme(this.THEME);
    this.setMode( this.LANG_HTML );
    this.editor.setShowFoldWidgets(true); // for the scope fold feature

    this.editor.on('change', () => this.updateText());
    this.editor.on('paste', () => this.updateText());

    if( this._value ){
      this.editor.setValue(this._value);
    }
  }

  writeValue(value: any) {
    this.editor?.setValue(value);
    this.editor?.clearSelection();
  }

  updateText() {
    let newVal = this.editor.getValue();
    this.onChange(newVal);
  }
}

