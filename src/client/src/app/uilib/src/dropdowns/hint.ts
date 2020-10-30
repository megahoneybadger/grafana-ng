import { Input, Directive, ElementRef, NgZone } from '@angular/core';
import {Tooltip} from 'primeng/tooltip';

@Directive({ selector: '[edHint]'})
export class HintComponent {

  tooltip: Tooltip;

  @Input() hintPos: "bottom" | "top" | "left" | "right" = "bottom";
  @Input() hintDanger: boolean = false; 

  @Input() set edHint( v: string ){
    this.build( v );
    this.tooltip.ngAfterViewInit();
  }

  constructor( private elementRef: ElementRef, private zone: NgZone) {

  }

  protected build( v: string ){
    if( this.tooltip ){
      this.tooltip.ngOnDestroy();
    }

    this.tooltip = new Tooltip (this.elementRef, this.zone);
    this.tooltip.text = v;
    this.tooltip.tooltipZIndex = "1030";
    this.tooltip.tooltipPosition = this.hintPos;
    this.tooltip.escape = false;
  }
}


@Directive({ selector: '[edErrorHint]' })
export class ErrorHintComponent extends HintComponent {

  @Input() set edErrorHint( v: string ){
    this.build( v );
    this.tooltip.tooltipStyleClass = "danger";
    this.tooltip.ngAfterViewInit();
  }

  constructor( elementRef: ElementRef, zone: NgZone) {
    super( elementRef, zone ) ;
  }
}






