import { ScaleType } from '../chart.m';
import { AxisUnitHelper } from './axes/unit-helper';
import { TooltipBuilder } from './extensions/tooltip-builder';
export class OptionsProvider {
    static getOptions(comp) {
        Chart.defaults.global.defaultFontColor = '#e3e3e3';
        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 11;
        const w = comp.widget;
        return {
            maintainAspectRatio: false,
            animation: false,
            tooltips: TooltipBuilder.build(comp),
            legend: {
                display: false
            },
            spanGaps: true,
            scales: {
                xAxes: [this.getAxisX(w)],
                yAxes: [this.getAxisY(w, true), this.getAxisY(w, false)]
                /*!AxesManager.needSecondaryYAxis(widget) true ? [axisYa] : [axisYa, axisYb]				*/
            },
        };
    }
    static getAxisX(w) {
        return {
            type: 'time',
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
            },
            ticks: {
                autoSkip: true,
                autoSkipPadding: 50,
                maxRotation: 0,
                minRotation: 0,
            },
            time: {
                displayFormats: {
                    second: 'HH:mm:ss',
                    minute: 'HH:mm',
                    hour: 'HH:mm',
                    day: 'M/D HH:mm',
                    week: 'M/D',
                    month: 'M/D',
                    year: 'YYYY-M',
                },
            },
            display: w.axes.x.show
        };
    }
    static getAxisY(w, left) {
        const wAxis = left ? w.axes.leftY : w.axes.rightY;
        const id = left ? this.AXIS_Y_LEFT : this.AXIS_Y_RIGHT;
        console.log();
        const axis = {
            id: id,
            display: wAxis.show,
            type: (!wAxis.scale || wAxis.scale == ScaleType.Linear) ? "linear" : "logarithmic",
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
                zeroLineWidth: 3,
            },
            position: left ? "left" : "right",
            scaleLabel: {
                display: wAxis.label,
                labelString: wAxis.label,
            },
            ticks: {
                min: wAxis.min,
                max: wAxis.max,
                userCallback: (label, index, labels) => {
                    if (labels.length > 8 && !(index % 2)) {
                        return;
                    }
                    return AxisUnitHelper.getFormattedValue(label, wAxis.unit, wAxis.decimals);
                }
            }
        };
        return axis;
    }
}
OptionsProvider.AXIS_X = "xAxis";
OptionsProvider.AXIS_Y_LEFT = "yAxisL";
OptionsProvider.AXIS_Y_RIGHT = "yAxisR";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvb3B0aW9ucy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQVMsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJOUQsTUFBTSxPQUFPLGVBQWU7SUFNM0IsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFvQjtRQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFFM0MsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV0QixPQUFPO1lBQ04sbUJBQW1CLEVBQUUsS0FBSztZQUMxQixTQUFTLEVBQUUsS0FBSztZQUVoQixRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUU7WUFFdEMsTUFBTSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxLQUFLO2FBQ2Q7WUFFRCxRQUFRLEVBQUUsSUFBSTtZQUVkLE1BQU0sRUFBRTtnQkFDUCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBRSxDQUFDO2dCQUMzQixLQUFLLEVBQUUsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsQ0FBQztnQkFDN0Qsa0ZBQWtGO2FBQ2xGO1NBQ0QsQ0FBQztJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsUUFBUSxDQUFFLENBQVE7UUFDaEMsT0FBTztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFO2dCQUNWLEtBQUssRUFBRSx5QkFBeUI7YUFDaEM7WUFDRCxLQUFLLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLElBQUk7Z0JBQ2QsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFdBQVcsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFO29CQUNmLE1BQU0sRUFBRSxVQUFVO29CQUNsQixNQUFNLEVBQUUsT0FBTztvQkFDZixJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsV0FBVztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLFFBQVE7aUJBQ2I7YUFDRjtZQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3RCLENBQUE7SUFDRixDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFRLEVBQUUsSUFBYTtRQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkQsT0FBTyxDQUFDLEdBQUcsRUFBSSxDQUFBO1FBRWYsTUFBTSxJQUFJLEdBQUc7WUFDWixFQUFFLEVBQUUsRUFBRTtZQUNOLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsQ0FBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYTtZQUNwRixTQUFTLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsYUFBYSxFQUFFLENBQUM7YUFDaEI7WUFDRCxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDakMsVUFBVSxFQUFDO2dCQUNWLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQ3hCO1lBQ0QsS0FBSyxFQUFDO2dCQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztnQkFDZCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0JBQ2QsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBRSxFQUFFO3dCQUN4QyxPQUFPO3FCQUNQO29CQUVELE9BQU8sY0FBYyxDQUFDLGlCQUFpQixDQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDOUUsQ0FBQzthQUNEO1NBQ0QsQ0FBQTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7QUExRmUsc0JBQU0sR0FBRyxPQUFPLENBQUM7QUFDakIsMkJBQVcsR0FBRyxRQUFRLENBQUM7QUFDdkIsNEJBQVksR0FBRyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXJ0LmMnO1xyXG5pbXBvcnQgeyBDaGFydCwgU2NhbGVUeXBlIH0gZnJvbSAnLi4vY2hhcnQubSc7XHJcbmltcG9ydCB7IEF4aXNVbml0SGVscGVyIH0gZnJvbSAnLi9heGVzL3VuaXQtaGVscGVyJztcclxuaW1wb3J0IHsgVG9vbHRpcEJ1aWxkZXIgfSBmcm9tICcuL2V4dGVuc2lvbnMvdG9vbHRpcC1idWlsZGVyJztcclxuXHJcbmRlY2xhcmUgdmFyIENoYXJ0OiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Byb3ZpZGVye1xyXG5cdFxyXG5cdHN0YXRpYyByZWFkb25seSBBWElTX1ggPSBcInhBeGlzXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IEFYSVNfWV9MRUZUID0gXCJ5QXhpc0xcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgQVhJU19ZX1JJR0hUID0gXCJ5QXhpc1JcIjtcclxuXHJcblx0c3RhdGljIGdldE9wdGlvbnMoIGNvbXA6IENoYXJ0Q29tcG9uZW50ICl7XHJcblx0XHRDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRDb2xvciA9ICcjZTNlM2UzJztcclxuXHRcdENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSA9ICdSb2JvdG8nO1xyXG5cdFx0Q2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSA9IDExO1xyXG5cclxuXHRcdGNvbnN0IHcgPSBjb21wLndpZGdldDtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuXHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcclxuXHJcblx0XHRcdHRvb2x0aXBzOiBUb29sdGlwQnVpbGRlci5idWlsZCggY29tcCApLFxyXG5cclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcclxuXHRcdFx0c3BhbkdhcHM6IHRydWUsXHJcblxyXG5cdFx0XHRzY2FsZXM6IHtcclxuXHRcdFx0XHR4QXhlczogW3RoaXMuZ2V0QXhpc1goIHcgKV0sXHJcblx0XHRcdFx0eUF4ZXM6IFsgdGhpcy5nZXRBeGlzWSggdywgdHJ1ZSApLCB0aGlzLmdldEF4aXNZKCB3LCBmYWxzZSApXSBcclxuXHRcdFx0XHQvKiFBeGVzTWFuYWdlci5uZWVkU2Vjb25kYXJ5WUF4aXMod2lkZ2V0KSB0cnVlID8gW2F4aXNZYV0gOiBbYXhpc1lhLCBheGlzWWJdXHRcdFx0XHQqL1xyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGdldEF4aXNYKCB3OiBDaGFydCApe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogJ3RpbWUnLFxyXG5cdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRjb2xvcjogJ3JnYmEoIDI1NSwyNTUsMjU1LCAwLjEpJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRhdXRvU2tpcDogdHJ1ZSxcclxuXHRcdFx0XHRhdXRvU2tpcFBhZGRpbmc6IDUwLFxyXG5cdFx0XHRcdG1heFJvdGF0aW9uOiAwLFxyXG5cdFx0XHRcdG1pblJvdGF0aW9uOiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lOiB7XHJcblx0XHRcdFx0ZGlzcGxheUZvcm1hdHM6IHtcclxuXHRcdFx0XHRcdHNlY29uZDogJ0hIOm1tOnNzJyxcclxuXHRcdFx0XHRcdG1pbnV0ZTogJ0hIOm1tJyxcclxuXHRcdFx0XHRcdGhvdXI6ICdISDptbScsXHJcblx0XHRcdFx0XHRkYXk6ICdNL0QgSEg6bW0nLFxyXG5cdFx0XHRcdFx0d2VlazogJ00vRCcsXHJcblx0XHRcdFx0XHRtb250aDogJ00vRCcsXHJcblx0XHRcdFx0XHR5ZWFyOiAnWVlZWS1NJyxcclxuXHRcdFx0XHQgfSxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzcGxheTogdy5heGVzLnguc2hvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0QXhpc1kodzogQ2hhcnQsIGxlZnQ6IGJvb2xlYW4pe1xyXG5cdFx0Y29uc3Qgd0F4aXMgPSBsZWZ0ID8gdy5heGVzLmxlZnRZIDogdy5heGVzLnJpZ2h0WTtcclxuXHRcdGNvbnN0IGlkID0gbGVmdCA/IHRoaXMuQVhJU19ZX0xFRlQgOiB0aGlzLkFYSVNfWV9SSUdIVDtcclxuXHRcdGNvbnNvbGUubG9nKCAgKVxyXG5cclxuXHRcdGNvbnN0IGF4aXMgPSB7XHJcblx0XHRcdGlkOiBpZCxcclxuXHRcdFx0ZGlzcGxheTogd0F4aXMuc2hvdyxcclxuXHRcdFx0dHlwZTogKCAhd0F4aXMuc2NhbGUgfHwgd0F4aXMuc2NhbGUgPT0gU2NhbGVUeXBlLkxpbmVhciApID8gXCJsaW5lYXJcIiA6IFwibG9nYXJpdGhtaWNcIixcclxuXHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0Y29sb3I6ICdyZ2JhKCAyNTUsMjU1LDI1NSwgMC4xKScsXHJcblx0XHRcdFx0emVyb0xpbmVXaWR0aDogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpb246IGxlZnQgPyBcImxlZnRcIiA6IFwicmlnaHRcIixcclxuXHRcdFx0c2NhbGVMYWJlbDp7XHJcblx0XHRcdFx0ZGlzcGxheTogd0F4aXMubGFiZWwsXHJcblx0XHRcdFx0bGFiZWxTdHJpbmc6IHdBeGlzLmxhYmVsLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aWNrczp7XHJcblx0XHRcdFx0bWluOiB3QXhpcy5taW4sXHJcblx0XHRcdFx0bWF4OiB3QXhpcy5tYXgsXHJcblx0XHRcdFx0dXNlckNhbGxiYWNrOiAobGFiZWwsIGluZGV4LCBsYWJlbHMpID0+IHtcclxuXHRcdFx0XHRcdGlmKCBsYWJlbHMubGVuZ3RoID4gOCAmJiAhKCBpbmRleCAlIDIgKSApe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggbGFiZWwsIHdBeGlzLnVuaXQsIHdBeGlzLmRlY2ltYWxzICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXhpcztcclxuXHR9XHJcbn1cclxuIl19