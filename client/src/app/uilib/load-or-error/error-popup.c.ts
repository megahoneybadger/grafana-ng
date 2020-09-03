import { Component, OnInit, Input } from "@angular/core";
import { Notes } from '../note/note-dispatcher';

@Component({
  selector: 'ed-error-popup',
})
export class ErrorPopupComponent implements OnInit {

  @Input()
  public message: string;

  ngOnInit(){
    Notes.error( this.message );
  }
}