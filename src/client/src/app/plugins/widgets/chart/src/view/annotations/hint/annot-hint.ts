import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { AlertHelper, AnnotationService, TimeRangeStore } from 'common';
import { TagColorHelper } from 'uilib';
import { ChartStore } from '../../../base/chart.store';
import { EditAnnotationComponent } from '../edit/edit-annot';

@Component({
  selector: 'annotation-hint',
  templateUrl: './annot-hint.html',
  styleUrls: [ '../edit/edit-annot.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AnnotationHintComponent extends EditAnnotationComponent {

  @Output() edit = new EventEmitter();
  overPopup: boolean = false;

  TagColorHelperRef = TagColorHelper;
  AlertHelperRef = AlertHelper;
  
  constructor( 
    store: ChartStore,
    annotService: AnnotationService,
    time: TimeRangeStore ){
      super( store, annotService, time );

  }



  onMouseEnter(){
    this.overPopup = true;
    this.annotation.overRoot = false;
    this.annotation.overPopup = true;
  }

  onMouseLeave(){
    this.overPopup = false;
    
    setTimeout( () => {
      if( !this.overPopup ){
        this.annotation.overPopup = false;    
      }
    }, 300 )
  }
}


	

		
