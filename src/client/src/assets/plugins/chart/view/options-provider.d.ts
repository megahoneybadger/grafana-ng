import { ChartComponent } from '../chart.c';
export declare class OptionsProvider {
    static getOptions(comp: ChartComponent): {
        maintainAspectRatio: boolean;
        animation: boolean;
        tooltips: {
            mode: string;
            position: string;
            axis: string;
            intersect: boolean;
            caretSize: number;
            xPadding: number;
            bodySpacing: number;
            titleAlign: string;
            enabled: boolean;
            custom: (model: any) => void;
        };
        legend: {
            display: boolean;
        };
        spanGaps: boolean;
        scales: {
            xAxes: {
                type: string;
                gridLines: {
                    color: string;
                };
                ticks: {
                    autoSkip: boolean;
                    autoSkipPadding: number;
                    maxRotation: number;
                    minRotation: number;
                };
                time: {
                    displayFormats: {
                        second: string;
                        minute: string;
                        hour: string;
                        day: string;
                        week: string;
                        month: string;
                        year: string;
                    };
                };
            }[];
            yAxes: ({
                id: string;
                gridLines: {
                    color: string;
                    zeroLineWidth: number;
                };
            } | {
                id: string;
                position: string;
            })[];
        };
    };
}
//# sourceMappingURL=options-provider.d.ts.map