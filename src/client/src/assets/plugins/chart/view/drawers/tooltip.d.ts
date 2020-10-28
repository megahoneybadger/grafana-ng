import { ChartComponent } from '../../chart.c';
export declare class TooltipBuilder {
    private model;
    private component;
    readonly ID = "chartjs-tooltip";
    readonly TOOLTIP_SELECTOR = "ed-tooltip";
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
    get root(): HTMLElement;
    constructor(model: any, component: ChartComponent);
    create(): void;
    private setPosition;
    private createBody;
    private sort;
}
//# sourceMappingURL=tooltip.d.ts.map