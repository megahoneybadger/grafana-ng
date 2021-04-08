import { Component, Input, forwardRef, ViewEncapsulation,
   ViewChild, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';

import * as ace from 'ace-builds';

import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'ed-codebox',
  styles: [':host { display:block;width:100%; }'],
  styleUrls: ['./codebox.scss'],

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
export class CodeBoxComponent {
  readonly THEME = 'monokai';

  readonly LANG_MARKDOWN = 'markdown';
  readonly LANG_HTML = 'html';

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private editor: ace.Ace.Editor;

  @Output() textChange = new EventEmitter();

  _mode: string = this.LANG_HTML;
  _theme: string = this.THEME;
  _readOnly: boolean = false;
  _text: string;
  _oldText: string;

  _options: any = {};

  get options() {
    return this._options;
  }

  @Input() set options(options: any) {
    this._options = options;
    this.editor?.setOptions(options || {});
  }

  get value(): string {
    return this.editor.getValue();
  }

  get mode(): string {
    return this._mode;
  }

  @Input() set mode(mode: string) {
    this._mode = mode;

    this
      .editor
      ?.getSession()
      .setMode(`ace/mode/${this._mode}`);
  }

  get theme(): string {
    return this._theme;
  }

  @Input() set theme(theme: string) {
    this._theme = theme;
    this.editor.setTheme(`ace/theme/${theme}`);
  }

  get readOnly(): boolean {
    return this._readOnly;
  }

  @Input() set readOnly(readOnly: boolean) {
    this._readOnly = readOnly;
    this.editor.setReadOnly(readOnly);
  }

  get text() {
    return this._text;
  }

  @Input() set text(text: string) {
    if (text === null || text === undefined) {
      text = "";
    }

    if (this._text !== text) {
      this._text = text;
      this.editor?.setValue(text);
      this._onChange(text);
      this.editor?.clearSelection();
    }
  }

  constructor(private zone: NgZone) {
    ace.config.set('basePath', '/assets/libs/ace');
  }

  ngOnDestroy() {
    this.editor.destroy();
  }

  ngAfterViewInit() {
    const element = this.codeEditorElmRef.nativeElement;

    const defaultOptions: Partial<ace.Ace.EditorOptions> = {
      maxLines: 20,
      showGutter: false,
      tabSize: 2,
      behavioursEnabled: true,
      highlightActiveLine: false,
      showPrintMargin: false,
      autoScrollEditorIntoView: true, // this is needed if editor is inside scrollable page
    };

    this.editor = ace.edit(element, defaultOptions);

    this.theme = this.THEME;
    this.mode = this.LANG_HTML;
    this.editor.setShowFoldWidgets(true); // for the scope fold feature

    this.editor.on('change', () => this.updateText());
    this.editor.on('paste', () => this.updateText());
  }

  writeValue(value: any) {
    this.text = value;
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  updateText() {
    let newVal = this.editor.getValue();

    if (newVal === this._oldText) {
      return;
    }

    this._text = newVal;
    this.textChange.emit(newVal)
    this._onChange(newVal);
    this._oldText = newVal;
  }
}

