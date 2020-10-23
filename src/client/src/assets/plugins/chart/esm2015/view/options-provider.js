import { TooltipBuilder } from './extensions/tooltip-builder';
export class OptionsProvider {
    static getOptions(comp) {
        Chart.defaults.global.defaultFontColor = '#e3e3e3';
        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 11;
        const axisYa = {
            id: 'A',
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
                zeroLineWidth: 3,
            },
        };
        const axisYb = {
            id: 'B',
            position: 'right'
        };
        return {
            maintainAspectRatio: false,
            animation: false,
            tooltips: TooltipBuilder.build(comp),
            legend: {
                display: false
            },
            spanGaps: true,
            scales: {
                xAxes: [{
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
                    }],
                yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/ true ? [axisYa] : [axisYa, axisYb]
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvb3B0aW9ucy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJOUQsTUFBTSxPQUFPLGVBQWU7SUFHM0IsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFvQjtRQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFFM0MsTUFBTSxNQUFNLEdBQUc7WUFDZCxFQUFFLEVBQUUsR0FBRztZQUNQLFNBQVMsRUFBRTtnQkFDVixLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxhQUFhLEVBQUUsQ0FBQzthQUNoQjtTQUNELENBQUE7UUFFRCxNQUFNLE1BQU0sR0FBRztZQUNkLEVBQUUsRUFBRSxHQUFHO1lBQ1AsUUFBUSxFQUFFLE9BQU87U0FDakIsQ0FBQTtRQUVELE9BQU87WUFDTixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFNBQVMsRUFBRSxLQUFLO1lBRWhCLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRTtZQUV0QyxNQUFNLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEtBQUs7YUFDZDtZQUVELFFBQVEsRUFBRSxJQUFJO1lBRWQsTUFBTSxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDO3dCQUNQLElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRTs0QkFDVixLQUFLLEVBQUUseUJBQXlCO3lCQUNoQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ04sUUFBUSxFQUFFLElBQUk7NEJBQ2QsZUFBZSxFQUFFLEVBQUU7NEJBQ25CLFdBQVcsRUFBRSxDQUFDOzRCQUNkLFdBQVcsRUFBRSxDQUFDO3lCQUNkO3dCQUNELElBQUksRUFBRTs0QkFDTCxjQUFjLEVBQUU7Z0NBQ2YsTUFBTSxFQUFFLFVBQVU7Z0NBQ2xCLE1BQU0sRUFBRSxPQUFPO2dDQUNmLElBQUksRUFBRSxPQUFPO2dDQUNiLEdBQUcsRUFBRSxXQUFXO2dDQUNoQixJQUFJLEVBQUUsS0FBSztnQ0FDWCxLQUFLLEVBQUUsS0FBSztnQ0FDWixJQUFJLEVBQUUsUUFBUTs2QkFDYjt5QkFHRjtxQkFJRCxDQUFDO2dCQUNGLEtBQUssRUFBRSwyQ0FBMkMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzthQUVwRjtTQUNELENBQUM7SUFDSCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXJ0LmMnO1xyXG5pbXBvcnQgeyBUb29sdGlwQnVpbGRlciB9IGZyb20gJy4vZXh0ZW5zaW9ucy90b29sdGlwLWJ1aWxkZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgQ2hhcnQ6IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zUHJvdmlkZXJ7XHJcblx0XHJcblxyXG5cdHN0YXRpYyBnZXRPcHRpb25zKCBjb21wOiBDaGFydENvbXBvbmVudCApe1xyXG5cdFx0Q2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSAnI2UzZTNlMyc7XHJcblx0XHRDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPSAnUm9ib3RvJztcclxuXHRcdENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxMTtcclxuXHJcblx0XHRjb25zdCBheGlzWWEgPSB7XHJcblx0XHRcdGlkOiAnQScsXHJcblx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdGNvbG9yOiAncmdiYSggMjU1LDI1NSwyNTUsIDAuMSknLFxyXG5cdFx0XHRcdHplcm9MaW5lV2lkdGg6IDMsXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYXhpc1liID0ge1xyXG5cdFx0XHRpZDogJ0InLFxyXG5cdFx0XHRwb3NpdGlvbjogJ3JpZ2h0J1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cclxuXHRcdFx0dG9vbHRpcHM6IFRvb2x0aXBCdWlsZGVyLmJ1aWxkKCBjb21wICksXHJcblxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFxyXG5cdFx0XHRzcGFuR2FwczogdHJ1ZSxcclxuXHJcblx0XHRcdHNjYWxlczoge1xyXG5cdFx0XHRcdHhBeGVzOiBbe1xyXG5cdFx0XHRcdFx0dHlwZTogJ3RpbWUnLFxyXG5cdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSggMjU1LDI1NSwyNTUsIDAuMSknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRpY2tzOiB7XHJcblx0XHRcdFx0XHRcdGF1dG9Ta2lwOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhdXRvU2tpcFBhZGRpbmc6IDUwLFxyXG5cdFx0XHRcdFx0XHRtYXhSb3RhdGlvbjogMCxcclxuXHRcdFx0XHRcdFx0bWluUm90YXRpb246IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGltZToge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5Rm9ybWF0czoge1xyXG5cdFx0XHRcdFx0XHRcdHNlY29uZDogJ0hIOm1tOnNzJyxcclxuXHRcdFx0XHRcdFx0XHRtaW51dGU6ICdISDptbScsXHJcblx0XHRcdFx0XHRcdFx0aG91cjogJ0hIOm1tJyxcclxuXHRcdFx0XHRcdFx0XHRkYXk6ICdNL0QgSEg6bW0nLFxyXG5cdFx0XHRcdFx0XHRcdHdlZWs6ICdNL0QnLFxyXG5cdFx0XHRcdFx0XHRcdG1vbnRoOiAnTS9EJyxcclxuXHRcdFx0XHRcdFx0XHR5ZWFyOiAnWVlZWS1NJyxcclxuXHRcdFx0XHRcdFx0IH0sXHJcblxyXG5cdFx0XHRcdFx0XHQgLy9zdGVwU2l6ZTogMzBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdHlBeGVzOiAvKiFBeGVzTWFuYWdlci5uZWVkU2Vjb25kYXJ5WUF4aXMod2lkZ2V0KSovdHJ1ZSA/IFtheGlzWWFdIDogW2F4aXNZYSwgYXhpc1liXVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9XHJcbn0iXX0=