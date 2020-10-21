export declare class OptionsProvider {
    static getOptions(): {
        maintainAspectRatio: boolean;
        animation: boolean;
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