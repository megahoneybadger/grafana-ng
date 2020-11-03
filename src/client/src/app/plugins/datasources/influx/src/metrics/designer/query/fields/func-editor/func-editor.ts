import { Component, ElementRef, EventEmitter,
  Input, Output, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'uilib';
import { FuncObject } from '../../../../metrics.m';

@Component({
  selector: 'field-function-editor',
  templateUrl: './func-editor.html',
  styleUrls: ['./func-editor.scss']
})
export class FieldFunctionEditorComponent   {

  @Input() value: FuncObject;
  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();

  textValue: string;

  isEditorVisible = false;
  isSuggestionsMenuOpen = false;
  suggestionItems = [];
  deleteMenuItem = { label: 'Remove', command: _ => this.remove.emit()}

  @ViewChild('editor') editorElement: ElementRef;
  @ViewChild("suggestions") suggestions: ContextMenuComponent;

  get hasSuggestions(){
    return ( this.value.param && this.value.param.suggestions );
  }

  ngOnInit(){
    if( this.value.param ){
      this.textValue = this.value.param.value;
    }
    
    if( this.hasSuggestions ){
      this
        .value
        .param
        .suggestions
        .forEach(e => this.suggestionItems.push({
          label: e,
          command: (x) => {
            this.value.param.value = this.textValue = x.item.label;
            this.isEditorVisible = false;
          }
         }));
    }
  }

  onShowEditor(e){
    if( !this.value.param ){
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
      this.value.param.value = this.textValue;
      //this.change.emit()
      //console.log( "onEditorFocusOut" )
    }
  }

  onEditorKeyDown(){
    this.isSuggestionsMenuOpen = false;
    this.suggestions.hide()
  }

  onEditorKeyUpEnter(){
    this.isEditorVisible = false;
    this.value.param.value = this.textValue
    this.change.emit()
    //console.log( "onEditorKeyUpEnter" )
  }


}