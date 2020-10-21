import { DataSet, RGB } from '../../chart.m';
export declare class ColorHelper {
    private static palette;
    static getColor(ds: DataSet): {
        r: number;
        g: number;
        b: number;
    };
    static getColorAsArgbFunc(ds: DataSet, opacity?: number): string;
    private static hexToRgb;
    static parse(input: any): RGB;
    static rgbToHex(e: string): string;
}
//# sourceMappingURL=color-helper.d.ts.map