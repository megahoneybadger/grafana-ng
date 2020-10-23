import { Moment } from 'common';
import { AxisUnitHelper } from '../axes/unit-helper';
import { ColorHelper } from '../render/color-helper';
export class TooltipBuilder {
    static build(comp) {
        Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
            /** @type {Chart.Tooltip} */
            var tooltip = this;
            return {
                x: eventPosition.x,
                y: eventPosition.y
            };
        };
        return {
            mode: 'index',
            position: "custom",
            axis: 'x',
            intersect: false,
            caretSize: 0,
            xPadding: 10,
            bodySpacing: 5,
            titleAlign: 'right',
            enabled: false,
            custom: (model) => TooltipBuilder.createCustomElement(model, comp)
        };
    }
    static createCustomElement(tooltipModel, comp) {
        var tooltipEl = TooltipBuilder.getRootElement();
        // Hide if no tooltip
        if (tooltipModel.opacity === 0 /*|| chart.showAnnotView*/) {
            tooltipEl.style.opacity = '0';
            return;
        }
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        }
        else {
            tooltipEl.classList.add('no-transform');
        }
        if (tooltipModel.body) {
            TooltipBuilder.createBody(tooltipModel, comp, tooltipEl);
        }
        TooltipBuilder.setPosition(tooltipModel, comp, tooltipEl);
    }
    static setPosition(tooltipModel, comp, tooltipEl) {
        const chart = comp.control.chart;
        var position = chart
            .canvas
            .getBoundingClientRect();
        const elWidth = document
            .getElementsByClassName(TooltipBuilder.TOOLTIP_SELECTOR)[0]
            .getBoundingClientRect()
            .width;
        const negMargin = (tooltipModel.caretX + elWidth > position.width) ?
            elWidth + 2 * tooltipModel.xPadding : 0;
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - negMargin + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    }
    static createBody(tooltipModel, comp, tooltipEl) {
        const chart = comp.control.chart;
        var titleLines = tooltipModel.title || [];
        var innerHtml = '';
        titleLines.forEach(function (title) {
            const date = Date.parse(title);
            const time = Moment.format(date);
            innerHtml += `<div style="${TooltipBuilder.classGraphTime}">${time}</div>`;
        });
        const parsedBodyLines = TooltipBuilder.sort(tooltipModel, chart);
        parsedBodyLines.forEach(function (body, i) {
            const { seriesName, value, colorFunc } = body;
            let seriesNameEl = `
				<div style="${TooltipBuilder.classSeriesName}">
					<i class="fa fa-minus" style="color:${colorFunc};"></i> ${seriesName}:
				</div>`;
            const w = comp.store.panel.widget;
            const ds = chart
                .data
                .datasets
                .find(x => x.label == seriesName);
            const axis = (ds.yAxisID == 'A') ? w.axes.leftY : w.axes.rightY;
            const decimals = w.legend.decimals ? w.legend.decimals : 1;
            const resValue = AxisUnitHelper.getFormattedValue(value, axis.unit, decimals);
            let valueEl = `<div style="${TooltipBuilder.classSeriesValue}">${resValue}</div>`;
            let item = `
				<div style="display: table-row">
					${seriesNameEl}
					${valueEl}
				</div>`;
            innerHtml += item;
        });
        var tableRoot = tooltipEl.querySelector(`.${TooltipBuilder.TOOLTIP_SELECTOR}`);
        tableRoot.innerHTML = innerHtml;
    }
    static sort(tooltipModel, chart) {
        function getBody(bodyItem) {
            return bodyItem.lines;
        }
        var bodyLines = tooltipModel.body.map(getBody);
        // const sortOrder = +chart
        // 	.widget
        // 	.display
        // 	.tooltipSortOrder;
        const parsedBodyLines = [];
        bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var color = ColorHelper.parse(colors.backgroundColor);
            var colorFunc = `rgba(${color.r},${color.g},${color.b},1)`;
            let index = body[0].lastIndexOf(':');
            const seriesName = body[0].substring(0, index);
            const value = parseFloat(tooltipModel.dataPoints[i].value);
            parsedBodyLines.push({ seriesName, value, colorFunc });
        });
        // switch( sortOrder ){
        // 	// case CartesianChart.TooltipSortOrder.Increasing:
        // 	// 	parsedBodyLines.sort( (a, b) => a.value - b.value);
        // 	// 	break;
        // 	// case CartesianChart.TooltipSortOrder.Decreasing:
        // 	// 	parsedBodyLines.sort( (a, b) => b.value - a.value);
        // 	// 	break;
        // }
        return parsedBodyLines;
    }
    static getRootElement() {
        var tooltipEl = document.getElementById(TooltipBuilder.ID);
        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = TooltipBuilder.ID;
            tooltipEl.innerHTML = `<div style="${TooltipBuilder.classGraphTooltip};	${TooltipBuilder.classGraphanaTooltip}"
																				class='${TooltipBuilder.TOOLTIP_SELECTOR}'></div>`;
            document.body.appendChild(tooltipEl);
        }
        return tooltipEl;
    }
    static get classGraphTooltip() {
        return `
			white-space: nowrap;
			font-size: 12px;
			background-color: #141414;
			color: #d8d9da;`;
    }
    static get classGraphanaTooltip() {
        return `
			position: absolute;
			padding: 10px;
			font-weight: 200;
			border-radius: 5px;
			z-index: 9999;
			max-width: 800px;
			max-height: 600px;
			overflow: hidden;
			line-height: 14px;`;
    }
    static get classGraphTime() {
        return `
			text-align: center;
			position: relative;
			top: -3px;
			padding: .2rem;
			font-weight: 700;
			color: #d8d9da;`;
    }
    static get classSeriesName() {
        return `
			display: table-cell;
			padding: .15rem;
			max-width: 650px;
			text-overflow: ellipsis;
			overflow: hidden;
			font-weight: 400;`;
    }
    static get classSeriesValue() {
        return `
			display: table-cell;
			font-weight: 700;
			padding-left: 15px;
			text-align: right;`;
    }
}
TooltipBuilder.ID = "chartjs-tooltip";
TooltipBuilder.TOOLTIP_SELECTOR = "ed-tooltip";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9leHRlbnNpb25zL3Rvb2x0aXAtYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR2hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLckQsTUFBTSxPQUFPLGNBQWM7SUFLMUIsTUFBTSxDQUFDLEtBQUssQ0FBRSxJQUFvQjtRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxRQUFRLEVBQUUsYUFBYTtZQUNuRSw0QkFBNEI7WUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRW5CLE9BQU87Z0JBQ04sQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLE9BQU87WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxDQUFDO1lBQ2QsVUFBVSxFQUFFLE9BQU87WUFDbkIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsQ0FBRSxLQUFLLEVBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BFLENBQUE7SUFDRixDQUFDO0lBRU8sTUFBTSxDQUFDLG1CQUFtQixDQUFFLFlBQVksRUFBRSxJ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QUNoQyxPQUFPOzs7Ozs7bUJBTVUsQ0FBQTtJQUNsQixDQUFDO0lBRU8sTUFBTSxLQUFLLGVBQWU7UUFDakMsT0FBTzs7Ozs7O3FCQU1ZLENBQUE7SUFDcEIsQ0FBQztJQUVPLE1BQU0sS0FBSyxnQkFBZ0I7UUFDbEMsT0FBTzs7OztzQkFJYSxDQUFBO0lBQ3JCLENBQUM7O0FBck9lLGlCQUFFLEdBQUcsaUJBQWlCLENBQUM7QUFDdkIsK0JBQWdCLEdBQUcsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYyc7XHJcbmltcG9ydCB7IEF4aXNVbml0SGVscGVyIH0gZnJvbSAnLi4vYXhlcy91bml0LWhlbHBlcic7XHJcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vcmVuZGVyL2NvbG9yLWhlbHBlcic7XHJcblxyXG5kZWNsYXJlIHZhciBDaGFydDogYW55O1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcEJ1aWxkZXIge1xyXG5cclxuXHRzdGF0aWMgcmVhZG9ubHkgSUQgPSBcImNoYXJ0anMtdG9vbHRpcFwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBUT09MVElQX1NFTEVDVE9SID0gXCJlZC10b29sdGlwXCI7XHJcblxyXG5cdHN0YXRpYyBidWlsZCggY29tcDogQ2hhcnRDb21wb25lbnQgKXtcclxuXHRcdENoYXJ0LlRvb2x0aXAucG9zaXRpb25lcnMuY3VzdG9tID0gZnVuY3Rpb24gKGVsZW1lbnRzLCBldmVudFBvc2l0aW9uKSB7XHJcblx0XHRcdC8qKiBAdHlwZSB7Q2hhcnQuVG9vbHRpcH0gKi9cclxuXHRcdFx0dmFyIHRvb2x0aXAgPSB0aGlzO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR4OiBldmVudFBvc2l0aW9uLngsXHJcblx0XHRcdFx0eTogZXZlbnRQb3NpdGlvbi55XHJcblx0XHRcdH07XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1vZGU6ICdpbmRleCcsXHJcblx0XHRcdHBvc2l0aW9uOiBcImN1c3RvbVwiLFxyXG5cdFx0XHRheGlzOiAneCcsXHJcblx0XHRcdGludGVyc2VjdDogZmFsc2UsXHJcblx0XHRcdGNhcmV0U2l6ZTogMCxcclxuXHRcdFx0eFBhZGRpbmc6IDEwLFxyXG5cdFx0XHRib2R5U3BhY2luZzogNSxcclxuXHRcdFx0dGl0bGVBbGlnbjogJ3JpZ2h0JyxcclxuXHRcdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdGN1c3RvbTogKCBtb2RlbCApID0+IFRvb2x0aXBCdWlsZGVyLmNyZWF0ZUN1c3RvbUVsZW1lbnQobW9kZWwsIGNvbXApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjcmVhdGVDdXN0b21FbGVtZW50KCB0b29sdGlwTW9kZWwsIGNvbXA6IENoYXJ0Q29tcG9uZW50ICl7XHJcblx0XHR2YXIgdG9vbHRpcEVsID0gVG9vbHRpcEJ1aWxkZXIuZ2V0Um9vdEVsZW1lbnQoKTtcclxuXHRcdFxyXG5cdFx0Ly8gSGlkZSBpZiBubyB0b29sdGlwXHJcblx0XHRpZiggdG9vbHRpcE1vZGVsLm9wYWNpdHkgPT09IDAgLyp8fCBjaGFydC5zaG93QW5ub3RWaWV3Ki8gKSB7XHJcblx0XHRcdHRvb2x0aXBFbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dG9vbHRpcEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlJywgJ2JlbG93JywgJ25vLXRyYW5zZm9ybScpO1xyXG5cdFx0XHJcblx0XHRpZiAodG9vbHRpcE1vZGVsLnlBbGlnbikge1xyXG5cdFx0XHRcdHRvb2x0aXBFbC5jbGFzc0xpc3QuYWRkKHRvb2x0aXBNb2RlbC55QWxpZ24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0b29sdGlwRWwuY2xhc3NMaXN0LmFkZCgnbm8tdHJhbnNmb3JtJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRvb2x0aXBNb2RlbC5ib2R5KSB7XHJcblx0XHRcdFRvb2x0aXBCdWlsZGVyLmNyZWF0ZUJvZHkoIHRvb2x0aXBNb2RlbCwgY29tcCwgdG9vbHRpcEVsICk7XHJcblx0XHR9XHJcblxyXG5cdFx0VG9vbHRpcEJ1aWxkZXIuc2V0UG9zaXRpb24odG9vbHRpcE1vZGVsLCBjb21wLCB0b29sdGlwRWwgKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIHNldFBvc2l0aW9uKHRvb2x0aXBNb2RlbCwgY29tcDogQ2hhcnRDb21wb25lbnQsIHRvb2x0aXBFbCl7XHJcblx0XHRjb25zdCBjaGFydCA9IGNvbXAuY29udHJvbC5jaGFydDtcclxuXHJcblx0XHR2YXIgcG9zaXRpb24gPSBjaGFydFxyXG5cdFx0XHQuY2FudmFzXHJcblx0XHRcdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRjb25zdCBlbFdpZHRoID0gZG9jdW1lbnRcclxuXHRcdFx0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoVG9vbHRpcEJ1aWxkZXIuVE9PTFRJUF9TRUxFQ1RPUilbIDAgXVxyXG5cdFx0XHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0LndpZHRoO1xyXG5cclxuXHRcdGNvbnN0IG5lZ01hcmdpbiA9ICggdG9vbHRpcE1vZGVsLmNhcmV0WCArIGVsV2lkdGggPiBwb3NpdGlvbi53aWR0aCApID9cclxuXHRcdFx0ZWxXaWR0aCArICAyICogdG9vbHRpcE1vZGVsLnhQYWRkaW5nIDogMDtcclxuXHRcdFxyXG5cdFx0dG9vbHRpcEVsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dG9vbHRpcEVsLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgdG9vbHRpcE1vZGVsLmNhcmV0WCAtIG5lZ01hcmdpbiArICdweCc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgdG9vbHRpcE1vZGVsLmNhcmV0WSArICdweCc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUuZm9udEZhbWlseSA9IHRvb2x0aXBNb2RlbC5fYm9keUZvbnRGYW1pbHk7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUucGFkZGluZyA9IHRvb2x0aXBNb2RlbC55UGFkZGluZyArICdweCAnICsgdG9vbHRpcE1vZGVsLnhQYWRkaW5nICsgJ3B4JztcclxuXHRcdHRvb2x0aXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY3JlYXRlQm9keSggdG9vbHRpcE1vZGVsLCBjb21wOiBDaGFydENvbXBvbmVudCwgdG9vbHRpcEVsICl7XHJcblxyXG5cdFx0Y29uc3QgY2hhcnQgPSBjb21wLmNvbnRyb2wuY2hhcnQ7XHJcblxyXG5cdFx0dmFyIHRpdGxlTGluZXMgPSB0b29sdGlwTW9kZWwudGl0bGUgfHwgW107XHJcblx0XHR2YXIgaW5uZXJIdG1sID0gJyc7XHJcblxyXG5cdFx0dGl0bGVMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHRpdGxlKSB7XHJcblx0XHRcdGNvbnN0IGRhdGUgPSBEYXRlLnBhcnNlKCB0aXRsZSApO1xyXG5cdFx0XHRjb25zdCB0aW1lID0gTW9tZW50LmZvcm1hdCAoIGRhdGUgKTtcclxuXHRcdFx0aW5uZXJIdG1sICs9IGA8ZGl2IHN0eWxlPVwiJHtUb29sdGlwQnVpbGRlci5jbGFzc0dyYXBoVGltZX1cIj4ke3RpbWV9PC9kaXY+YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VkQm9keUxpbmVzID0gVG9vbHRpcEJ1aWxkZXIuc29ydCggdG9vbHRpcE1vZGVsLCBjaGFydCApO1xyXG5cclxuXHRcdHBhcnNlZEJvZHlMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGJvZHksIGkpIHtcclxuXHRcdFx0Y29uc3QgeyBzZXJpZXNOYW1lLCB2YWx1ZSwgY29sb3JGdW5jIH0gPSBib2R5O1xyXG5cclxuXHRcdFx0bGV0IHNlcmllc05hbWVFbCA9IGBcclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPVwiJHtUb29sdGlwQnVpbGRlci5jbGFzc1Nlcmllc05hbWV9XCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yRnVuY307XCI+PC9pPiAke3Nlcmllc05hbWV9OlxyXG5cdFx0XHRcdDwvZGl2PmBcclxuXHJcblx0XHRcdGNvbnN0IHcgPSBjb21wLnN0b3JlLnBhbmVsLndpZGdldDtcclxuXHJcblx0XHRcdGNvbnN0IGRzID0gY2hhcnRcclxuXHRcdFx0XHQuZGF0YVxyXG5cdFx0XHRcdC5kYXRhc2V0c1xyXG5cdFx0XHRcdC5maW5kKCB4ID0+IHgubGFiZWwgPT0gc2VyaWVzTmFtZSApO1xyXG5cclxuXHRcdFx0Y29uc3QgYXhpcyA9ICAoIGRzLnlBeGlzSUQgPT0gJ0EnICkgP1x0dy5heGVzLmxlZnRZIDogdy5heGVzLnJpZ2h0WTtcclxuXHJcblx0XHRcdGNvbnN0IGRlY2ltYWxzID0gdy5sZWdlbmQuZGVjaW1hbHMgPyB3LmxlZ2VuZC5kZWNpbWFscyA6IDE7XHJcblxyXG5cdFx0XHRjb25zdCByZXNWYWx1ZSA9IEF4aXNVbml0SGVscGVyLmdldEZvcm1hdHRlZFZhbHVlKCB2YWx1ZSwgYXhpcy51bml0LCBkZWNpbWFscyApXHJcblxyXG5cdFx0XHRsZXQgdmFsdWVFbCA9IGA8ZGl2IHN0eWxlPVwiJHtUb29sdGlwQnVpbGRlci5jbGFzc1Nlcmllc1ZhbHVlfVwiPiR7cmVzVmFsdWV9PC9kaXY+YDtcclxuXHJcblx0XHRcdGxldCBpdGVtID0gYFxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OiB0YWJsZS1yb3dcIj5cclxuXHRcdFx0XHRcdCR7c2VyaWVzTmFtZUVsfVxyXG5cdFx0XHRcdFx0JHt2YWx1ZUVsfVxyXG5cdFx0XHRcdDwvZGl2PmBcclxuXHJcblx0XHRcdGlubmVySHRtbCArPSBpdGVtO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFyIHRhYmxlUm9vdCA9IHRvb2x0aXBFbC5xdWVyeVNlbGVjdG9yKGAuJHtUb29sdGlwQnVpbGRlci5UT09MVElQX1NFTEVDVE9SfWApO1xyXG5cdFx0dGFibGVSb290LmlubmVySFRNTCA9IGlubmVySHRtbDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIHNvcnQoIHRvb2x0aXBNb2RlbCwgY2hhcnQgKSA6IEFycmF5PGFueT57XHJcblx0XHRmdW5jdGlvbiBnZXRCb2R5KGJvZHlJdGVtKSB7XHJcblx0XHRcdHJldHVybiBib2R5SXRlbS5saW5lcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgYm9keUxpbmVzID0gdG9vbHRpcE1vZGVsLmJvZHkubWFwKGdldEJvZHkpO1xyXG5cclxuXHRcdC8vIGNvbnN0IHNvcnRPcmRlciA9ICtjaGFydFxyXG5cdFx0Ly8gXHQud2lkZ2V0XHJcblx0XHQvLyBcdC5kaXNwbGF5XHJcblx0XHQvLyBcdC50b29sdGlwU29ydE9yZGVyO1xyXG5cclxuXHRcdGNvbnN0IHBhcnNlZEJvZHlMaW5lcyA9IFtdO1xyXG5cdFx0XHJcblx0XHRib2R5TGluZXMuZm9yRWFjaChmdW5jdGlvbihib2R5LCBpKSB7XHJcblx0XHRcdHZhciBjb2xvcnMgPSB0b29sdGlwTW9kZWwubGFiZWxDb2xvcnNbIGkgXTtcclxuXHRcdFx0dmFyIGNvbG9yID0gQ29sb3JIZWxwZXIucGFyc2UoIGNvbG9ycy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG5cdFx0XHR2YXIgY29sb3JGdW5jID0gYHJnYmEoJHtjb2xvci5yfSwke2NvbG9yLmd9LCR7Y29sb3IuYn0sMSlgXHJcblxyXG5cdFx0XHRsZXQgaW5kZXggPSBib2R5WyAwIF0ubGFzdEluZGV4T2YoICc6JyApO1xyXG5cdFx0XHRjb25zdCBzZXJpZXNOYW1lID0gYm9keVsgMCBdLnN1YnN0cmluZyggMCwgaW5kZXggKTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KHRvb2x0aXBNb2RlbC5kYXRhUG9pbnRzWyBpIF0udmFsdWUpO1xyXG5cdFx0XHRwYXJzZWRCb2R5TGluZXMucHVzaCgge3Nlcmllc05hbWUsIHZhbHVlLCBjb2xvckZ1bmN9ICk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzd2l0Y2goIHNvcnRPcmRlciApe1xyXG5cdFx0Ly8gXHQvLyBjYXNlIENhcnRlc2lhbkNoYXJ0LlRvb2x0aXBTb3J0T3JkZXIuSW5jcmVhc2luZzpcclxuXHRcdC8vIFx0Ly8gXHRwYXJzZWRCb2R5TGluZXMuc29ydCggKGEsIGIpID0+IGEudmFsdWUgLSBiLnZhbHVlKTtcclxuXHRcdC8vIFx0Ly8gXHRicmVhaztcclxuXHJcblx0XHQvLyBcdC8vIGNhc2UgQ2FydGVzaWFuQ2hhcnQuVG9vbHRpcFNvcnRPcmRlci5EZWNyZWFzaW5nOlxyXG5cdFx0Ly8gXHQvLyBcdHBhcnNlZEJvZHlMaW5lcy5zb3J0KCAoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xyXG5cdFx0Ly8gXHQvLyBcdGJyZWFrO1xyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdHJldHVybiBwYXJzZWRCb2R5TGluZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBnZXRSb290RWxlbWVudCgpe1xyXG5cdFx0dmFyIHRvb2x0aXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFRvb2x0aXBCdWlsZGVyLklEKTtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBlbGVtZW50IG9uIGZpcnN0IHJlbmRlclxyXG5cdFx0aWYoIXRvb2x0aXBFbCkge1xyXG5cdFx0XHR0b29sdGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dG9vbHRpcEVsLmlkID0gVG9vbHRpcEJ1aWxkZXIuSUQ7XHJcblxyXG5cdFx0XHR0b29sdGlwRWwuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCIke1Rvb2x0aXBCdWlsZGVyLmNsYXNzR3JhcGhUb29sdGlwfTtcdCR7VG9vbHRpcEJ1aWxkZXIuY2xhc3NHcmFwaGFuYVRvb2x0aXB9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPScke1Rvb2x0aXBCdWlsZGVyLlRPT0xUSVBfU0VMRUNUT1J9Jz48L2Rpdj5gO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwRWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0b29sdGlwRWw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBnZXQgY2xhc3NHcmFwaFRvb2x0aXAoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XHJcblx0XHRcdGNvbG9yOiAjZDhkOWRhO2BcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGdldCBjbGFzc0dyYXBoYW5hVG9vbHRpcCgpIHtcclxuXHRcdHJldHVybiBgXHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDIwMDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0XHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiA2MDBweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDE0cHg7YFxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0IGNsYXNzR3JhcGhUaW1lKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRvcDogLTNweDtcclxuXHRcdFx0cGFkZGluZzogLjJyZW07XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdGNvbG9yOiAjZDhkOWRhO2BcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGdldCBjbGFzc1Nlcmllc05hbWUoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdFx0XHRwYWRkaW5nOiAuMTVyZW07XHJcblx0XHRcdG1heC13aWR0aDogNjUwcHg7XHJcblx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO2BcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGdldCBjbGFzc1Nlcmllc1ZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtgXHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=