import { Component, ElementRef, EventEmitter,
  Input, Output, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'uilib';
import { FuncObject } from '../../../../../metrics.m';

@Component({
  selector: 'field-function-editor',
  templateUrl: './func-editor.html',
  styleUrls: ['./func-editor.scss']
})
export class FieldFunctionEditorComponent   {

  @Input() func: FuncObject;
  @Output() remove = new EventEmitter();
  @Output() rebuild = new EventEmitter();

  textValue: string;

  isEditorVisible = false;
  isSuggestionsMenuOpen = false;
  suggestionItems = [];
  deleteMenuItem = { label: 'Remove', command: _ => this.remove.emit()}

  @ViewChild('editor') editorElement: ElementRef;
  @ViewChild("suggestions") suggestions: ContextMenuComponent;

  get param(){
    return this.func.param;
  }

  get paramValue(){
    return this.param.value
  }

  get hasSuggestions(){
    return ( this.param && this.param.suggestions );
  }

  ngOnInit(){
    if( this.param ){
      this.textValue = this.paramValue;
    }
    
    if( this.hasSuggestions ){
      this
        .param
        .suggestions
        .forEach(e => this.suggestionItems.push({
          label: e,
          command: (x) => {

            const same = this.paramValue == x.item.label;

            if( !same ){
              this.param.value = this.textValue = x.item.label;
              this.isEditorVisible = false;
              this.rebuild.emit()
            }
          }
         }));
    }
  }

  onShowEditor(e){
    if( !this.param ){
      return;
    }

    if (this.hasSuggestions) {
      this.isSuggestionsMenuOpen = true;
      this.suggestions.show(e);
    }

    setTimeout(() => { 
      this.isEditorVisible = true;

      setTimeout( () => this.editorElement.nativeElement.focus(), 0 )
    }, 0);
  }

  onEditorFocusOut(){
    if( !this.isSuggestionsMenuOpen ){
      this.isEditorVisible = false;

      const same = this.paramValue == this.textValue;

      if( !same ){
        this.param.value = this.textValue
        this.rebuild.emit()
      }
    }
  }

  onEditorKeyDown(){
    this.isSuggestionsMenuOpen = false;
    this.suggestions.hide()
  }

  onEditorKeyUpEnter(){
    this.isEditorVisible = false;

    const same = this.paramValue == this.textValue;

    if( !same ){
      this.param.value = this.textValue
      this.rebuild.emit()
    }
  }


}