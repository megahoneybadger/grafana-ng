import { ColorHelper } from "./color-helper";
import { EventEmitter, Injectable } from '@angular/core';
import { DataProvider } from './data-provider';
import { Subscription } from 'rxjs';
import { Moment } from 'common';

@Injectable()
export class SeriesManager {

	private dataReadySubs: Subscription;
	private errorSubs: Subscription;

	dataSets$ = new EventEmitter<any>();

	constructor(private dataProvider: DataProvider) {
		this.dataReadySubs = this
			.dataProvider
			.data$
			.subscribe(x => this.rebuild(x))

		this.errorSubs = this
			.dataProvider
			.error$
			.subscribe(x => this.error(x))
	}

	private rebuild(data) {
		if (!data || 0 === data.length) {
			this.dataSets$.emit( [] );
			//this.chart.data.datasets = [];
		} else {
			let dataSets = [];
			let totalIndex = 0;

			data.forEach(serie => {
				const columns = serie.columns.slice(1);

				const arr = [...columns.map((el, index) =>
					this.getDataSet(serie, index + 1, totalIndex++))]
					.filter(x => x);

				dataSets = [...dataSets, ...arr];
			});

			//this.chart.data.datasets = dataSets;
			this.dataSets$.emit( dataSets );
		}
		//this.chart.widget.error = undefined;
	}

	private error(err) {
		// 	this.chart.data.datasets = []
		//  this.chart.update();
		//  this.chart.widget.error = err.details;
	}

	private getDataSet(serie, index, totalIndex) {
		const values = serie
			.values
			.map(x => {
				const isNull = (null == x[index]);

				return {
					x: Moment.valueOf( x[0] ),// moment().valueOf(),
					y: (isNull) ? x[index] : x[index],
					isNull: isNull
				}
			})

		const filteredValues = values
			.map(p => p.y)
			.filter(p => null != p)
			.map(p => parseFloat(p));

		if (0 == filteredValues.length) {
			return;
		}

		const avg = (filteredValues.reduce((a, b) => a + b) / filteredValues.length)

		const allNulls = filteredValues.every(x => x == null);
		const allZeros = filteredValues.every(x => x == 0);

		const ds = {
			label: this.generateDataSetName(serie, index),
			data: values,
			lineTension: 0,
			min: Math.min(...filteredValues),
			max: Math.max(...filteredValues),
			avg: avg,
			current: filteredValues.slice(-1)[0],
			allNulls: allNulls,
			allZeros: allZeros,
			index: totalIndex,
			pointRadius:0,
			borderColor: null
			//widget: this.chart.widget,
		}

		ds.borderColor = new ColorHelper().getColorAsArgbFunc( ds, 1 );
		//console.log( ds.borderColor );

		//this.display.setup(ds);

		return ds;
	}

	private generateDataSetName( serie, index ){
		let root = `${serie.name}.${serie.columns[ index ]}`;

		let tags = '';
		var keys = Object.keys(serie.tags);
		var keyIndex = 0;

		for(var key in serie.tags){
			tags += `${keyIndex > 0 ? ', ': ''}${key}: ${serie.tags[ key ]}` ;
			keyIndex++
		}

		// serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )

		if( tags ){
			root = `${root} {${tags}}`;
		}

		//console.log( target );

		return root;
	}


}