export class OptionsProvider {
    static getOptions() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvb3B0aW9ucy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sZUFBZTtJQUczQixNQUFNLENBQUMsVUFBVTtRQUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFFM0MsTUFBTSxNQUFNLEdBQUc7WUFDZCxFQUFFLEVBQUUsR0FBRztZQUNQLFNBQVMsRUFBRTtnQkFDVixLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxhQUFhLEVBQUUsQ0FBQzthQUNoQjtTQUNELENBQUE7UUFFRCxNQUFNLE1BQU0sR0FBRztZQUNkLEVBQUUsRUFBRSxHQUFHO1lBQ1AsUUFBUSxFQUFFLE9BQU87U0FDakIsQ0FBQTtRQUVELE9BQU87WUFDTixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFNBQVMsRUFBRSxLQUFLO1lBRWhCLE1BQU0sRUFBRTtnQkFDUCxPQUFPLEVBQUUsS0FBSzthQUNkO1lBRUQsUUFBUSxFQUFFLElBQUk7WUFFZCxNQUFNLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUM7d0JBQ1AsSUFBSSxFQUFFLE1BQU07d0JBQ1osU0FBUyxFQUFFOzRCQUNWLEtBQUssRUFBRSx5QkFBeUI7eUJBQ2hDO3dCQUNELEtBQUssRUFBRTs0QkFDTixRQUFRLEVBQUUsSUFBSTs0QkFDZCxlQUFlLEVBQUUsRUFBRTs0QkFDbkIsV0FBVyxFQUFFLENBQUM7NEJBQ2QsV0FBVyxFQUFFLENBQUM7eUJBQ2Q7d0JBQ0QsSUFBSSxFQUFFOzRCQUNMLGNBQWMsRUFBRTtnQ0FDZixNQUFNLEVBQUUsVUFBVTtnQ0FDbEIsTUFBTSxFQUFFLE9BQU87Z0NBQ2YsSUFBSSxFQUFFLE9BQU87Z0NBQ2IsR0FBRyxFQUFFLFdBQVc7Z0NBQ2hCLElBQUksRUFBRSxLQUFLO2dDQUNYLEtBQUssRUFBRSxLQUFLO2dDQUNaLElBQUksRUFBRSxRQUFROzZCQUNiO3lCQUdGO3FCQUlELENBQUM7Z0JBQ0YsS0FBSyxFQUFFLDJDQUEyQyxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2FBRXBGO1NBQ0QsQ0FBQztJQUNILENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIENoYXJ0OiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Byb3ZpZGVye1xyXG5cdFxyXG5cclxuXHRzdGF0aWMgZ2V0T3B0aW9ucygpe1xyXG5cdFx0Q2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSAnI2UzZTNlMyc7XHJcblx0XHRDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPSAnUm9ib3RvJztcclxuXHRcdENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxMTtcclxuXHJcblx0XHRjb25zdCBheGlzWWEgPSB7XHJcblx0XHRcdGlkOiAnQScsXHJcblx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdGNvbG9yOiAncmdiYSggMjU1LDI1NSwyNTUsIDAuMSknLFxyXG5cdFx0XHRcdHplcm9MaW5lV2lkdGg6IDMsXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYXhpc1liID0ge1xyXG5cdFx0XHRpZDogJ0InLFxyXG5cdFx0XHRwb3NpdGlvbjogJ3JpZ2h0J1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHNwYW5HYXBzOiB0cnVlLFxyXG5cclxuXHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0eEF4ZXM6IFt7XHJcblx0XHRcdFx0XHR0eXBlOiAndGltZScsXHJcblx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKCAyNTUsMjU1LDI1NSwgMC4xKScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0YXV0b1NraXA6IHRydWUsXHJcblx0XHRcdFx0XHRcdGF1dG9Ta2lwUGFkZGluZzogNTAsXHJcblx0XHRcdFx0XHRcdG1heFJvdGF0aW9uOiAwLFxyXG5cdFx0XHRcdFx0XHRtaW5Sb3RhdGlvbjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0aW1lOiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXlGb3JtYXRzOiB7XHJcblx0XHRcdFx0XHRcdFx0c2Vjb25kOiAnSEg6bW06c3MnLFxyXG5cdFx0XHRcdFx0XHRcdG1pbnV0ZTogJ0hIOm1tJyxcclxuXHRcdFx0XHRcdFx0XHRob3VyOiAnSEg6bW0nLFxyXG5cdFx0XHRcdFx0XHRcdGRheTogJ00vRCBISDptbScsXHJcblx0XHRcdFx0XHRcdFx0d2VlazogJ00vRCcsXHJcblx0XHRcdFx0XHRcdFx0bW9udGg6ICdNL0QnLFxyXG5cdFx0XHRcdFx0XHRcdHllYXI6ICdZWVlZLU0nLFxyXG5cdFx0XHRcdFx0XHQgfSxcclxuXHJcblx0XHRcdFx0XHRcdCAvL3N0ZXBTaXplOiAzMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0eUF4ZXM6IC8qIUF4ZXNNYW5hZ2VyLm5lZWRTZWNvbmRhcnlZQXhpcyh3aWRnZXQpKi90cnVlID8gW2F4aXNZYV0gOiBbYXhpc1lhLCBheGlzWWJdXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH1cclxufSJdfQ==