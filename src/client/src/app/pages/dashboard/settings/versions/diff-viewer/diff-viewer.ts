import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import * as jsondiffpatch from 'jsondiffpatch';
import * as moment from 'moment';
import { FadeInOutAnimation } from 'uilib';

@Component({
  selector: 'diff-viewer',
  templateUrl: './diff-viewer.html',
  styleUrls: [ './diff-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [FadeInOutAnimation],
})
export class DiffViewerComponent {

  @Input() comparisonResult;
  @Input() comparisonRequest;
  @Output() restore = new EventEmitter<number>();

  diffHtml: string;

  momentRef = moment;
 
  ngOnInit(){
    const x = this.comparisonResult;
    var delta = jsondiffpatch.diff(x.base, x.new);
          
    this.diffHtml = jsondiffpatch
      .formatters
      .html
      .format( delta, x.base );

    this.onShowUnchanged( false );
  }

  onShowUnchanged( show: boolean ){
    const html = jsondiffpatch.formatters.html;
    
    if( show ){
      html.showUnchanged( true );
    } else{
      html.hideUnchanged();
    }
  }
}




