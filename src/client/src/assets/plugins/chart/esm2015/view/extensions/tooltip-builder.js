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
            custom: (model) => TooltipBuilder.create(model, comp)
        };
    }
    static create(tooltipModel, comp) {
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
            innerHtml += `<div class="graph-tooltip-time">${time}</div>`;
        });
        const parsedBodyLines = TooltipBuilder.sort(tooltipModel, chart);
        parsedBodyLines.forEach(function (body, i) {
            const { seriesName, value, colorFunc } = body;
            let seriesNameEl = `
				<div class="graph-tooltip-series-name">
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
            let valueEl = `<div class="graph-tooltip-value ">${resValue}</div>`;
            let item = `
				<div class="graph-tooltip-list-item">
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
            tooltipEl.innerHTML = `<div class='graph-tooltip grafana-tooltip ${TooltipBuilder.TOOLTIP_SELECTOR}'></div>`;
            document.body.appendChild(tooltipEl);
        }
        return tooltipEl;
    }
}
TooltipBuilder.ID = "chartjs-tooltip";
TooltipBuilder.TOOLTIP_SELECTOR = "ed-tooltip";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9leHRlbnNpb25zL3Rvb2x0aXAtYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWhDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLckQsTUFBTSxPQUFPLGNBQWM7SUFNMUIsTUFBTSxDQUFDLEtBQUssQ0FBRSxJQUFvQjtRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxRQUFRLEVBQUUsYUFBYTtZQUNuRSw0QkFBNEI7WUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRW5CLE9BQU87Z0JBQ04sQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLE9BQU87WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxDQUFDO1lBQ2QsVUFBVSxFQUFFLE9BQU87WUFDbkIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsQ0FBRSxLQUFLLEVBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUN2RCxDQUFBO0lBQ0YsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFNLENBQUUsWUFBWSxFQUFFLElBQW9C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LEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsZUFBZSxDQUFDLElBQUksQ0FBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUUsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVILHVCQUF1QjtRQUN2Qix1REFBdUQ7UUFDdkQsMkRBQTJEO1FBQzNELGNBQWM7UUFFZCx1REFBdUQ7UUFDdkQsMkRBQTJEO1FBQzNELGNBQWM7UUFDZCxJQUFJO1FBRUosT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjO1FBQzVCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTFELGlDQUFpQztRQUNsQyxJQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBRWpDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsNkNBQTZDLGNBQWMsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDO1lBRTdHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7QUEzTGUsaUJBQUUsR0FBRyxpQkFBaUIsQ0FBQztBQUN2QiwrQkFBZ0IsR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmMnO1xyXG5pbXBvcnQgeyBBeGlzVW5pdEhlbHBlciB9IGZyb20gJy4uL2F4ZXMvdW5pdC1oZWxwZXInO1xyXG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL3JlbmRlci9jb2xvci1oZWxwZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgQ2hhcnQ6IGFueTtcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBCdWlsZGVyIHtcclxuXHJcblx0c3RhdGljIHJlYWRvbmx5IElEID0gXCJjaGFydGpzLXRvb2x0aXBcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgVE9PTFRJUF9TRUxFQ1RPUiA9IFwiZWQtdG9vbHRpcFwiO1xyXG5cdFxyXG5cclxuXHRzdGF0aWMgYnVpbGQoIGNvbXA6IENoYXJ0Q29tcG9uZW50ICl7XHJcblx0XHRDaGFydC5Ub29sdGlwLnBvc2l0aW9uZXJzLmN1c3RvbSA9IGZ1bmN0aW9uIChlbGVtZW50cywgZXZlbnRQb3NpdGlvbikge1xyXG5cdFx0XHQvKiogQHR5cGUge0NoYXJ0LlRvb2x0aXB9ICovXHJcblx0XHRcdHZhciB0b29sdGlwID0gdGhpcztcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0eDogZXZlbnRQb3NpdGlvbi54LFxyXG5cdFx0XHRcdHk6IGV2ZW50UG9zaXRpb24ueVxyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRtb2RlOiAnaW5kZXgnLFxyXG5cdFx0XHRwb3NpdGlvbjogXCJjdXN0b21cIixcclxuXHRcdFx0YXhpczogJ3gnLFxyXG5cdFx0XHRpbnRlcnNlY3Q6IGZhbHNlLFxyXG5cdFx0XHRjYXJldFNpemU6IDAsXHJcblx0XHRcdHhQYWRkaW5nOiAxMCxcclxuXHRcdFx0Ym9keVNwYWNpbmc6IDUsXHJcblx0XHRcdHRpdGxlQWxpZ246ICdyaWdodCcsXHJcblx0XHRcdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0XHRjdXN0b206ICggbW9kZWwgKSA9PiBUb29sdGlwQnVpbGRlci5jcmVhdGUobW9kZWwsIGNvbXApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjcmVhdGUoIHRvb2x0aXBNb2RlbCwgY29tcDogQ2hhcnRDb21wb25lbnQgKXtcclxuXHRcdFxyXG5cdFx0dmFyIHRvb2x0aXBFbCA9IFRvb2x0aXBCdWlsZGVyLmdldFJvb3RFbGVtZW50KCk7XHJcblx0XHRcclxuXHRcdC8vIEhpZGUgaWYgbm8gdG9vbHRpcFxyXG5cdFx0aWYoIHRvb2x0aXBNb2RlbC5vcGFjaXR5ID09PSAwIC8qfHwgY2hhcnQuc2hvd0Fubm90VmlldyovICkge1xyXG5cdFx0XHR0b29sdGlwRWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRvb2x0aXBFbC5jbGFzc0xpc3QucmVtb3ZlKCdhYm92ZScsICdiZWxvdycsICduby10cmFuc2Zvcm0nKTtcclxuXHRcdFxyXG5cdFx0aWYgKHRvb2x0aXBNb2RlbC55QWxpZ24pIHtcclxuXHRcdFx0XHR0b29sdGlwRWwuY2xhc3NMaXN0LmFkZCh0b29sdGlwTW9kZWwueUFsaWduKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dG9vbHRpcEVsLmNsYXNzTGlzdC5hZGQoJ25vLXRyYW5zZm9ybScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cclxuXHRcdGlmICh0b29sdGlwTW9kZWwuYm9keSkge1xyXG5cdFx0XHRUb29sdGlwQnVpbGRlci5jcmVhdGVCb2R5KCB0b29sdGlwTW9kZWwsIGNvbXAsIHRvb2x0aXBFbCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cclxuXHRcdFRvb2x0aXBCdWlsZGVyLnNldFBvc2l0aW9uKHRvb2x0aXBNb2RlbCwgY29tcCwgdG9vbHRpcEVsICk7XHJcblxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBzZXRQb3NpdGlvbih0b29sdGlwTW9kZWwsIGNvbXA6IENoYXJ0Q29tcG9uZW50LCB0b29sdGlwRWwpe1xyXG5cdFx0XHJcblx0XHRjb25zdCBjaGFydCA9IGNvbXAuY29udHJvbC5jaGFydDtcclxuXHJcblx0XHR2YXIgcG9zaXRpb24gPSBjaGFydFxyXG5cdFx0XHQuY2FudmFzXHJcblx0XHRcdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRjb25zdCBlbFdpZHRoID0gZG9jdW1lbnRcclxuXHRcdFx0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoVG9vbHRpcEJ1aWxkZXIuVE9PTFRJUF9TRUxFQ1RPUilbIDAgXVxyXG5cdFx0XHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0LndpZHRoO1xyXG5cclxuXHRcdGNvbnN0IG5lZ01hcmdpbiA9ICggdG9vbHRpcE1vZGVsLmNhcmV0WCArIGVsV2lkdGggPiBwb3NpdGlvbi53aWR0aCApID9cclxuXHRcdFx0ZWxXaWR0aCArICAyICogdG9vbHRpcE1vZGVsLnhQYWRkaW5nIDogMDtcclxuXHRcdFxyXG5cdFx0dG9vbHRpcEVsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dG9vbHRpcEVsLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgdG9vbHRpcE1vZGVsLmNhcmV0WCAtIG5lZ01hcmdpbiArICdweCc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgdG9vbHRpcE1vZGVsLmNhcmV0WSArICdweCc7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUuZm9udEZhbWlseSA9IHRvb2x0aXBNb2RlbC5fYm9keUZvbnRGYW1pbHk7XHJcblx0XHR0b29sdGlwRWwuc3R5bGUucGFkZGluZyA9IHRvb2x0aXBNb2RlbC55UGFkZGluZyArICdweCAnICsgdG9vbHRpcE1vZGVsLnhQYWRkaW5nICsgJ3B4JztcclxuXHRcdHRvb2x0aXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY3JlYXRlQm9keSggdG9vbHRpcE1vZGVsLCBjb21wOiBDaGFydENvbXBvbmVudCwgdG9vbHRpcEVsICl7XHJcblx0XHRjb25zdCBjaGFydCA9IGNvbXAuY29udHJvbC5jaGFydDtcclxuXHJcblx0XHR2YXIgdGl0bGVMaW5lcyA9IHRvb2x0aXBNb2RlbC50aXRsZSB8fCBbXTtcclxuXHRcdHZhciBpbm5lckh0bWwgPSAnJztcclxuXHJcblx0XHR0aXRsZUxpbmVzLmZvckVhY2goZnVuY3Rpb24odGl0bGUpIHtcclxuXHRcdFx0Y29uc3QgZGF0ZSA9IERhdGUucGFyc2UoIHRpdGxlICk7XHJcblx0XHRcdGNvbnN0IHRpbWUgPSBNb21lbnQuZm9ybWF0ICggZGF0ZSApO1xyXG5cdFx0XHRpbm5lckh0bWwgKz0gYDxkaXYgY2xhc3M9XCJncmFwaC10b29sdGlwLXRpbWVcIj4ke3RpbWV9PC9kaXY+YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VkQm9keUxpbmVzID0gVG9vbHRpcEJ1aWxkZXIuc29ydCggdG9vbHRpcE1vZGVsLCBjaGFydCApO1xyXG5cclxuXHRcdHBhcnNlZEJvZHlMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGJvZHksIGkpIHtcclxuXHRcdFx0Y29uc3QgeyBzZXJpZXNOYW1lLCB2YWx1ZSwgY29sb3JGdW5jIH0gPSBib2R5O1xyXG5cclxuXHRcdFx0bGV0IHNlcmllc05hbWVFbCA9IGBcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JhcGgtdG9vbHRpcC1zZXJpZXMtbmFtZVwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1taW51c1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvckZ1bmN9O1wiPjwvaT4gJHtzZXJpZXNOYW1lfTpcclxuXHRcdFx0XHQ8L2Rpdj5gXHJcblxyXG5cdFx0XHRjb25zdCB3ID0gY29tcC5zdG9yZS5wYW5lbC53aWRnZXQ7XHJcblxyXG5cdFx0XHRjb25zdCBkcyA9IGNoYXJ0XHJcblx0XHRcdFx0LmRhdGFcclxuXHRcdFx0XHQuZGF0YXNldHNcclxuXHRcdFx0XHQuZmluZCggeCA9PiB4LmxhYmVsID09IHNlcmllc05hbWUgKTtcclxuXHJcblx0XHRcdGNvbnN0IGF4aXMgPSAgKCBkcy55QXhpc0lEID09ICdBJyApID9cdHcuYXhlcy5sZWZ0WSA6IHcuYXhlcy5yaWdodFk7XHJcblxyXG5cdFx0XHRjb25zdCBkZWNpbWFscyA9IHcubGVnZW5kLmRlY2ltYWxzID8gdy5sZWdlbmQuZGVjaW1hbHMgOiAxO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzVmFsdWUgPSBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggdmFsdWUsIGF4aXMudW5pdCwgZGVjaW1hbHMgKVxyXG5cclxuXHRcdFx0bGV0IHZhbHVlRWwgPSBgPGRpdiBjbGFzcz1cImdyYXBoLXRvb2x0aXAtdmFsdWUgXCI+JHtyZXNWYWx1ZX08L2Rpdj5gO1xyXG5cclxuXHRcdFx0bGV0IGl0ZW0gPSBgXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdyYXBoLXRvb2x0aXAtbGlzdC1pdGVtXCI+XHJcblx0XHRcdFx0XHQke3Nlcmllc05hbWVFbH1cclxuXHRcdFx0XHRcdCR7dmFsdWVFbH1cclxuXHRcdFx0XHQ8L2Rpdj5gXHJcblxyXG5cdFx0XHRpbm5lckh0bWwgKz0gaXRlbTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHZhciB0YWJsZVJvb3QgPSB0b29sdGlwRWwucXVlcnlTZWxlY3RvcihgLiR7VG9vbHRpcEJ1aWxkZXIuVE9PTFRJUF9TRUxFQ1RPUn1gKTtcclxuXHRcdHRhYmxlUm9vdC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBzb3J0KCB0b29sdGlwTW9kZWwsIGNoYXJ0ICkgOiBBcnJheTxhbnk+e1xyXG5cdFx0ZnVuY3Rpb24gZ2V0Qm9keShib2R5SXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gYm9keUl0ZW0ubGluZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGJvZHlMaW5lcyA9IHRvb2x0aXBNb2RlbC5ib2R5Lm1hcChnZXRCb2R5KTtcclxuXHJcblx0XHQvLyBjb25zdCBzb3J0T3JkZXIgPSArY2hhcnRcclxuXHRcdC8vIFx0LndpZGdldFxyXG5cdFx0Ly8gXHQuZGlzcGxheVxyXG5cdFx0Ly8gXHQudG9vbHRpcFNvcnRPcmRlcjtcclxuXHJcblx0XHRjb25zdCBwYXJzZWRCb2R5TGluZXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0Ym9keUxpbmVzLmZvckVhY2goZnVuY3Rpb24oYm9keSwgaSkge1xyXG5cdFx0XHR2YXIgY29sb3JzID0gdG9vbHRpcE1vZGVsLmxhYmVsQ29sb3JzWyBpIF07XHJcblx0XHRcdHZhciBjb2xvciA9IENvbG9ySGVscGVyLnBhcnNlKCBjb2xvcnMuYmFja2dyb3VuZENvbG9yKTtcclxuXHRcdFx0dmFyIGNvbG9yRnVuYyA9IGByZ2JhKCR7Y29sb3Iucn0sJHtjb2xvci5nfSwke2NvbG9yLmJ9LDEpYFxyXG5cclxuXHRcdFx0bGV0IGluZGV4ID0gYm9keVsgMCBdLmxhc3RJbmRleE9mKCAnOicgKTtcclxuXHRcdFx0Y29uc3Qgc2VyaWVzTmFtZSA9IGJvZHlbIDAgXS5zdWJzdHJpbmcoIDAsIGluZGV4ICk7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdCh0b29sdGlwTW9kZWwuZGF0YVBvaW50c1sgaSBdLnZhbHVlKTtcclxuXHRcdFx0cGFyc2VkQm9keUxpbmVzLnB1c2goIHtzZXJpZXNOYW1lLCB2YWx1ZSwgY29sb3JGdW5jfSApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc3dpdGNoKCBzb3J0T3JkZXIgKXtcclxuXHRcdC8vIFx0Ly8gY2FzZSBDYXJ0ZXNpYW5DaGFydC5Ub29sdGlwU29ydE9yZGVyLkluY3JlYXNpbmc6XHJcblx0XHQvLyBcdC8vIFx0cGFyc2VkQm9keUxpbmVzLnNvcnQoIChhLCBiKSA9PiBhLnZhbHVlIC0gYi52YWx1ZSk7XHJcblx0XHQvLyBcdC8vIFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gXHQvLyBjYXNlIENhcnRlc2lhbkNoYXJ0LlRvb2x0aXBTb3J0T3JkZXIuRGVjcmVhc2luZzpcclxuXHRcdC8vIFx0Ly8gXHRwYXJzZWRCb2R5TGluZXMuc29ydCggKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcclxuXHRcdC8vIFx0Ly8gXHRicmVhaztcclxuXHRcdC8vIH1cclxuXHJcblx0XHRyZXR1cm4gcGFyc2VkQm9keUxpbmVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0Um9vdEVsZW1lbnQoKXtcclxuXHRcdHZhciB0b29sdGlwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUb29sdGlwQnVpbGRlci5JRCk7XHJcblxyXG5cdFx0XHQvLyBDcmVhdGUgZWxlbWVudCBvbiBmaXJzdCByZW5kZXJcclxuXHRcdGlmKCF0b29sdGlwRWwpIHtcclxuXHRcdFx0dG9vbHRpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdHRvb2x0aXBFbC5pZCA9IFRvb2x0aXBCdWlsZGVyLklEO1xyXG5cclxuXHRcdFx0dG9vbHRpcEVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdncmFwaC10b29sdGlwIGdyYWZhbmEtdG9vbHRpcCAke1Rvb2x0aXBCdWlsZGVyLlRPT0xUSVBfU0VMRUNUT1J9Jz48L2Rpdj5gO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwRWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0b29sdGlwRWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19