import { Input, Directive, ElementRef, NgZone, Component } from '@angular/core';
import {Tooltip} from 'primeng/tooltip';

@Directive({ selector: '[edHint]'})
export class HintDirective {

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
export class ErrorHintDirective extends HintDirective {

  @Input() set edErrorHint( v: string ){
    this.build( v );
    this.tooltip.tooltipStyleClass = "danger";
    this.tooltip.ngAfterViewInit();
  }

  constructor( elementRef: ElementRef, zone: NgZone) {
    super( elementRef, zone ) ;
  }
}


@Component({ 
  selector: 'ed-hint',
  template:` <i class="grafana-tip fa fa-question-circle" [edHint]="text" [hintPos]="position" ></i>`
})
export class HintComponent  {

  @Input() text;
  @Input() position;
  
}







