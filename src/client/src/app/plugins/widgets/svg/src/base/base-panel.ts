import { Panel } from 'common';
import { BindingRule, SvgModel } from '../svg.m';
import { Svg, SVG } from '@svgdotjs/svg.js'
import { SvgPanelComponent } from '../svg.c';

export class WidgetConsumer {

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

  get metrics(){
		return this
			.panel
			?.widget
			?.metrics;
	}

	get rules(): BindingRule[]{
		return this
			.panel
			?.widget
			?.rules;
	}

  constructor( public panel: Panel ){

   if( this.widget.content ){
      this.content = JSON.parse( this.widget.content );
    }  
  }
}


export class BaseSvgPanelComponent extends WidgetConsumer {
  constructor( public panel: Panel ){
    super( panel );
  }
}
