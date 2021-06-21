import { Panel, PanelLink } from 'common';
import { Svg, SVG } from '@svgdotjs/svg.js'
import { SinglestatPanelComponent } from '../singlestat.c';
import { SinglestatModel, GaugeColors } from '../singlestat.m';
import {Gauge} from 'gaugeJS';

export class WidgetConsumer {

  content: string;

  get widget(): SinglestatModel {
    return this.panel.widget;
  }

  get component() : SinglestatPanelComponent{
    return this.widget.component;
  }

  get gauge() : Gauge {
    return this.component.gauge;
  }

  get metrics(){
		return this
			.panel
			?.widget
			?.metrics;
	}

  constructor( public panel: Panel ){

  }

  pull(){
    this
      .widget
      .component
      .dataProvider
      .update();
  }
}

