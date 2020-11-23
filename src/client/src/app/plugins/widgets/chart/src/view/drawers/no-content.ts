import { ChartJsExtension } from '../../base/chart-base-extension';

export class NoContentPlugin extends ChartJsExtension {

	afterDraw (chart) {
		if (chart.data.datasets.length === 0) {
			// No data is present
			var ctx = chart.chart.ctx;
			var width = chart.chart.width;
			var height = chart.chart.height
			//chart.clear();

			ctx.save();
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillStyle = "#D8D9DA";
			ctx.font = "16px normal 'Roboto'";
			ctx.fillText('No data points', width / 2, height / 2);
			ctx.restore();
		}
	}
}