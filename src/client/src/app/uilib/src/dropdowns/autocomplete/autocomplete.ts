import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ed-autocomplete',
  templateUrl: './autocomplete.html',
  styleUrls: [ 'autocomplete.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteComponent {
  @Input() label: string;
  @Input() labelWidth:number;
  @Input() width: number;
  @Input() tooltip: string;

  @Input() field: string;
  

  @Input() readonly : boolean = false;
  @Input() disabled : boolean = false;

  value: string;
  suggestions: string[];

  @Output() valueChange = new EventEmitter<string>();

  @Input() request : Observable<string[]>;
  @Input() requestCallback : (pattern : string) => Observable<string[]>
  @ViewChild('autocomplete') autocomplete:any; 

  search(e) {
    if( this.requestCallback ){
      this
        .requestCallback( e.query )
        .subscribe( x => this.suggestions = x )
    } else if( this.request ){
      this
        .request
        .subscribe( x => {
          this.suggestions = ( x ? [...x] : [] )
            .filter( x => x.match( new RegExp( e.query ) ) )
        } )
    }
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth)
    }
  }

  getContentWidth(){
    return {
      [`width-${this.width}`]: (this.width)
    }
  }

  getWrapperWidth(){
    return ( this.label || this.labelWidth ) ?
      {} : {
        [`width-${this.width}`]: (this.width)
      };
  }
  
  onHide(){
    if( !this.value ){
      this.valueChange.emit();
    }
  }

  onBlur( e ){
    if( !this.autocomplete.overlayVisible || this.value ){
      this.valueChange.emit( this.value );
    } 
  }

  focus(){
    this
      .autocomplete
      .inputEL
      .nativeElement
      .focus();
  }

  onKeyUp( e ){
    // if( e.keyCode == 13 ){
    //   this.valueChange.emit( this.value );
    // }
  }
}


