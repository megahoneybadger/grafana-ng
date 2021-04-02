import { Panel } from 'common';
import { SvgModel } from '../svg.m';
import { Svg, SVG } from '@svgdotjs/svg.js'
import { SvgPanelComponent } from '../svg.c';

export class BaseSvgPanelComponent {

  content: string;

  get widget(): SvgModel {
    return this.panel.widget;
  }

  get component() : SvgPanelComponent{
    return this.widget.component;
  }

  get svg() : Svg {
    return <Svg>SVG( this
      .component
      .canvas
      .nativeElement
      .firstChild );
  }

  constructor( public panel: Panel ){

   if( this.widget.content ){
      this.content = JSON.parse( this.widget.content );
    }  
  }

 


}
