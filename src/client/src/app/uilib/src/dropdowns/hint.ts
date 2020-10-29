import { Input, Directive, ElementRef, NgZone } from '@angular/core';
import {Tooltip} from 'primeng/tooltip';

@Directive({
  selector: '[edHint]',
 
})
export class HintComponent {

  @Input() hintPos: "bottom" | "top" | "left" | "right" = "bottom";

  @Input() set edHint( v: string ){
    const tooltipDirective = new Tooltip (this.elementRef, this.zone);
    tooltipDirective.text = v;
    tooltipDirective.tooltipZIndex = "1030";
    tooltipDirective.tooltipPosition = this.hintPos;
    tooltipDirective.escape = false;
    
    tooltipDirective.ngAfterViewInit();
  }
  

  constructor( private elementRef: ElementRef, private zone: NgZone) { }

  ngAfterViewInit() {
    
   }
}





