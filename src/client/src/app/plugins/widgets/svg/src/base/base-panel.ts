import { Panel, PanelLink } from 'common';
import { BindingRule, SvgSettings, SvgModel } from '../svg.m';
import { Svg, SVG } from '@svgdotjs/svg.js'
import { SvgPanelComponent } from '../svg.c';
import { SvgElementLink } from '../svg.m';

import { DataProvider } from './data-provider';

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
      ?.canvas
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
			?.rules ?? [];
	}

  get links(): SvgElementLink[]{
		return this
			.panel
			?.widget
			?.links ?? [];
	}

  get settings(): SvgSettings{
    return this.widget.settings;
  }

  get dataProvider() : DataProvider{
    return this.component.dp;
  }

  constructor( public panel: Panel ){

  }
}

