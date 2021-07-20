import { Panel } from 'common';
import { GridPanelComponent } from '../grid.c';
import { GridModel } from '../grid.m';

export class WidgetConsumer {

  content: string;

  get widget(): GridModel {
    return this.panel.widget;
  }

  get component() : GridPanelComponent{
    return this.widget.component;
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
    // this
    //   .widget
    //   .component
    //   .dataProvider
    //   .update();
  }

  fetch(){
    // this
    //   .widget
    //   .component
    //   .dataProvider
    //   .fetch();
  }
}

