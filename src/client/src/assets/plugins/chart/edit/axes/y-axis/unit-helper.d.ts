export declare enum AxisUnitType {
    None = 0,
    Common_Short = 1,
    Common_Percent = 2,
    Common_Percent01 = 3,
    Common_Humidity = 4,
    Common_Decibel = 5,
    Common_Hex0x = 6,
    Common_Hex = 7,
    Common_SciNotation = 8,
    Common_LocaleString = 9,
    Length_Millimetre = 10,
    Length_Meter = 11,
    Length_Feet = 12,
    Length_Kilometer = 13,
    Length_Mile = 14,
    Area_SquareMeters = 15,
    Area_SquareFeet = 16,
    Area_SquareMiles = 17,
    Mass_Milligram = 18,
    Mass_Gram = 19,
    Mass_Kilogram = 20,
    Mass_MetricTon = 21
}
export declare class AxisUnit {
    type: AxisUnitType;
    label: string;
    unit: string;
    command?: (event?: any) => void;
    constructor(type: AxisUnitType, label: string, unit: string, command?: (event?: any) => void);
}
export declare class AxisUnitHelper {
    static getData(unit: AxisUnitType): AxisUnit;
    static getFormattedValue(label: any, unit: any, decimals: any): any;
    static getShortFormattedValue(label: any, unit: any, decimals: any): string;
}
//# sourceMappingURL=unit-helper.d.ts.map