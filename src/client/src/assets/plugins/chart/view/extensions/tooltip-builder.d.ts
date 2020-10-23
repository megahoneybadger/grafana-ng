import { ChartComponent } from '../../chart.c';
export declare class TooltipBuilder {
    static readonly ID = "chartjs-tooltip";
    static readonly TOOLTIP_SELECTOR = "ed-tooltip";
    static build(comp: ChartComponent): {
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
    private static createCustomElement;
    private static setPosition;
    private static createBody;
    private static sort;
    private static getRootElement;
    private static get classGraphTooltip();
    private static get classGraphanaTooltip();
    private static get classGraphTime();
    private static get classSeriesName();
    private static get classSeriesValue();
}
//# sourceMappingURL=tooltip-builder.d.ts.map