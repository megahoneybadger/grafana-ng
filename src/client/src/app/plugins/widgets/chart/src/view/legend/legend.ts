import { Component, ViewEncapsulation } from '@angular/core';
import { FadeInOutAnimation } from 'uilib';
import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DataSet } from '../../chart.m';
import { AxisUnitHelper } from '../axes/unit-helper';

@Component({
  selector: 'chart-legend',
  templateUrl: './legend.html',
  styleUrls:[ './legend.scss' ],
	animations: [FadeInOutAnimation],
	encapsulation: ViewEncapsulation.None,
})
export class ChartLegendComponent extends BaseChartComponent {

  get legend(){
    return this.widget.legend;
  }

  constructor( store: ChartStore ) {
    super( store );
  }

  axis( ds: DataSet ){
    const x = (<any>this.widget).axes
    //return ( ds.yAxisID == 'A' ) ?x.leftY :x.rightY
    return x.leftY;
  }
  
  decimals( ds: DataSet ){
		return this.legend.decimals ? this.legend.decimals : 0;
	}

  unit( ds: DataSet ){
		return this.axis( ds ).unit;
  }
  
  color( ds: DataSet ){
    return this
		  .display
			.getLineColor( ds, 1 );
	}

  min( ds: DataSet ){
		return AxisUnitHelper.getFormattedValue( ds.min, this.unit( ds ), this.decimals( ds ) )
	}

	max( ds: DataSet ){
		return AxisUnitHelper.getFormattedValue( ds.max,	this.unit( ds ), this.decimals( ds ) )
	}

	avg( ds: DataSet ){
		return AxisUnitHelper.getFormattedValue( ds.avg, this.unit( ds ), this.decimals( ds ) )
	}

	current( ds: DataSet ){
		return AxisUnitHelper.getFormattedValue( ds.current, this.unit( ds ), this.decimals( ds ) )
	}


  onSeriesClicked( ds: DataSet, e: any ){
    if( e.ctrlKey ){
			const selected = ( false == ds.selected );

			this.toggleSeries( ds, selected );
		} else{
			const selected = ( ( undefined === ds.selected ) || false == ds.selected ) ?
				true : undefined;

			this.toggleSeries( ds, selected );
	
			this
				.datasets
				.filter( x => x != ds )
				.forEach( x => this.toggleSeries( x,  true == selected ? false : undefined ) );
		}
	
		this.control.refresh();
		this.control.reinit();
  }

  toggleSeries( ds: DataSet, selected: boolean ){
		ds.selected = selected;

		if( undefined === selected ){
			delete ds.hidden;
			delete ds.selected;
		} else {
			ds.hidden = !selected;
		}
	}
  
}
