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
    private static create;
    private static setPosition;
    private static createBody;
    private static sort;
    private static getRootElement;
}
//# sourceMappingURL=tooltip-builder.d.ts.map