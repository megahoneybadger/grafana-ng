import { Panel } from 'common';
import { SinglestatPanelComponent } from '../singlestat.c';
import { LabelSettings, SinglestatModel } from '../singlestat.m';
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

  get label() : LabelSettings{
    return this.widget.label;
  }

  get metrics(){
		return this
			.panel
			?.widget
			?.metrics;
	}

  get thresholds(){
    return this.widget.thresholds;
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

  rebuild(){
    this
      .component
      ?.gaugeHost
      ?.rebuild();
  }
}

