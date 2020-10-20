export declare class ColorHelper {
    private palette;
    constructor();
    getColor(ds: any): {
        r: number;
        g: number;
        b: number;
    };
    getColorAsArgbFunc(ds: any, opacity?: number): string;
    private hexToRgb;
    static parse(input: any): {
        r: any;
        g: any;
        b: any;
    };
    static rgbToHex(e: any): string;
}
//# sourceMappingURL=color-helper.d.ts.map