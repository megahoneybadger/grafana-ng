export var AxisUnitType;
(function (AxisUnitType) {
    AxisUnitType[AxisUnitType["None"] = 0] = "None";
    AxisUnitType[AxisUnitType["Common_Short"] = 1] = "Common_Short";
    AxisUnitType[AxisUnitType["Common_Percent"] = 2] = "Common_Percent";
    AxisUnitType[AxisUnitType["Common_Percent01"] = 3] = "Common_Percent01";
    AxisUnitType[AxisUnitType["Common_Humidity"] = 4] = "Common_Humidity";
    AxisUnitType[AxisUnitType["Common_Decibel"] = 5] = "Common_Decibel";
    AxisUnitType[AxisUnitType["Common_Hex0x"] = 6] = "Common_Hex0x";
    AxisUnitType[AxisUnitType["Common_Hex"] = 7] = "Common_Hex";
    AxisUnitType[AxisUnitType["Common_SciNotation"] = 8] = "Common_SciNotation";
    AxisUnitType[AxisUnitType["Common_LocaleString"] = 9] = "Common_LocaleString";
    AxisUnitType[AxisUnitType["Length_Millimetre"] = 10] = "Length_Millimetre";
    AxisUnitType[AxisUnitType["Length_Meter"] = 11] = "Length_Meter";
    AxisUnitType[AxisUnitType["Length_Feet"] = 12] = "Length_Feet";
    AxisUnitType[AxisUnitType["Length_Kilometer"] = 13] = "Length_Kilometer";
    AxisUnitType[AxisUnitType["Length_Mile"] = 14] = "Length_Mile";
    AxisUnitType[AxisUnitType["Area_SquareMeters"] = 15] = "Area_SquareMeters";
    AxisUnitType[AxisUnitType["Area_SquareFeet"] = 16] = "Area_SquareFeet";
    AxisUnitType[AxisUnitType["Area_SquareMiles"] = 17] = "Area_SquareMiles";
    AxisUnitType[AxisUnitType["Mass_Milligram"] = 18] = "Mass_Milligram";
    AxisUnitType[AxisUnitType["Mass_Gram"] = 19] = "Mass_Gram";
    AxisUnitType[AxisUnitType["Mass_Kilogram"] = 20] = "Mass_Kilogram";
    AxisUnitType[AxisUnitType["Mass_MetricTon"] = 21] = "Mass_MetricTon";
})(AxisUnitType || (AxisUnitType = {}));
export class AxisUnit {
    constructor(type, label, unit, command) {
        this.type = type;
        this.label = label;
        this.unit = unit;
        this.command = command;
    }
}
export class AxisUnitHelper {
    static getData(unit) {
        switch (+unit) {
            case AxisUnitType.Common_Short:
                return new AxisUnit(AxisUnitType.Common_Short, "short", "");
            case AxisUnitType.Common_Percent:
                return new AxisUnit(AxisUnitType.Common_Percent, "percent (0-100)", "%");
            case AxisUnitType.Common_Percent01:
                return new AxisUnit(AxisUnitType.Common_Percent01, "percent (0.0-1.0)", "%");
            case AxisUnitType.Common_Humidity:
                return new AxisUnit(AxisUnitType.Common_Humidity, "humidity (%H)", "%H");
            case AxisUnitType.Common_Decibel:
                return new AxisUnit(AxisUnitType.Common_Decibel, "decibel", "dB");
            case AxisUnitType.Common_Hex0x:
                return new AxisUnit(AxisUnitType.Common_Hex0x, "hexadecimal (0x)", "");
            case AxisUnitType.Common_Hex:
                return new AxisUnit(AxisUnitType.Common_Hex, "hexadecimal", "");
            case AxisUnitType.Common_SciNotation:
                return new AxisUnit(AxisUnitType.Common_SciNotation, "scientific notation", "");
            case AxisUnitType.Common_LocaleString:
                return new AxisUnit(AxisUnitType.Common_LocaleString, "locale string", "");
            case AxisUnitType.Length_Millimetre:
                return new AxisUnit(AxisUnitType.Length_Millimetre, "millimetre (mm)", "mm");
            case AxisUnitType.Length_Meter:
                return new AxisUnit(AxisUnitType.Length_Meter, "meter (m)", "m");
            case AxisUnitType.Length_Feet:
                return new AxisUnit(AxisUnitType.Length_Feet, "feet (ft)", "ft");
            case AxisUnitType.Length_Kilometer:
                return new AxisUnit(AxisUnitType.Length_Kilometer, "kilometer (km)", "km");
            case AxisUnitType.Length_Mile:
                return new AxisUnit(AxisUnitType.Length_Mile, "mile (mi)", "mi");
            case AxisUnitType.Area_SquareMeters:
                return new AxisUnit(AxisUnitType.Area_SquareMeters, "Square Meters (m²)", "m²");
            case AxisUnitType.Area_SquareFeet:
                return new AxisUnit(AxisUnitType.Area_SquareFeet, "Square Feet (ft²)", "ft²");
            case AxisUnitType.Area_SquareMiles:
                return new AxisUnit(AxisUnitType.Area_SquareMiles, "Square Miles (mi²)", "mi²");
            case AxisUnitType.Mass_Milligram:
                return new AxisUnit(AxisUnitType.Mass_Milligram, "milligram (mg)", "mg");
            case AxisUnitType.Mass_Gram:
                return new AxisUnit(AxisUnitType.Mass_Gram, "gram (g)", "g");
            case AxisUnitType.Mass_Kilogram:
                return new AxisUnit(AxisUnitType.Mass_Kilogram, "kilogram (kg)", "kg");
            case AxisUnitType.Mass_MetricTon:
                return new AxisUnit(AxisUnitType.Mass_MetricTon, "metric ton (t)", "t");
        }
        return new AxisUnit(AxisUnitType.None, "none", "");
    }
    static getFormattedValue(label, unit, decimals) {
        let value = label.toFixed(decimals);
        const unitData = AxisUnitHelper.getData(unit);
        switch (unitData.type) {
            case AxisUnitType.Common_Hex:
                return label.toString(16);
            case AxisUnitType.Common_Hex0x:
                return `0x${label.toString(16)}`;
            case AxisUnitType.Common_Percent01:
                return `${(100 * label).toFixed(decimals)} %`;
            case AxisUnitType.Common_SciNotation:
                return label.toExponential(decimals);
            case AxisUnitType.Common_LocaleString:
                return label.toLocaleString();
            case AxisUnitType.Common_Short:
                return AxisUnitHelper.getShortFormattedValue(label, unit, decimals);
            case AxisUnitType.None:
                return value;
            default:
                return `${value} ${unitData.unit}`;
        }
    }
    static getShortFormattedValue(label, unit, decimals) {
        // if( label < 1000 ){
        // 	return label;
        // }
        let dev = 1;
        let u = '';
        if (label >= 1000 && label < 1000000) {
            u = 'K';
            dev = 1000;
        }
        else if (label >= 1000000 && label < 1000000000) {
            u = 'Mil';
            dev = 1000000;
        }
        else if (label >= 1000000000 && label < 1000000000000) {
            u = 'Bil';
            dev = 1000000000;
        }
        else if (label >= 1000000000000 && label < 1000000000000000) {
            u = 'Tri';
            dev = 1000000000000;
        }
        else if (label >= 1000000000000000 && label < 1000000000000000000) {
            u = 'Qdr';
            dev = 1000000000000000;
        }
        return `${(label / dev).toFixed(decimals)} ${u}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy92aWV3L2F4ZXMvdW5pdC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksWUEyQlg7QUEzQkQsV0FBWSxZQUFZO0lBQ3ZCLCtDQUFJLENBQUE7SUFFSiwrREFBWSxDQUFBO0lBQ1osbUVBQWMsQ0FBQTtJQUNkLHVFQUFnQixDQUFBO0lBQ2hCLHFFQUFlLENBQUE7SUFDZixtRUFBYyxDQUFBO0lBQ2QsK0RBQVksQ0FBQTtJQUNaLDJEQUFVLENBQUE7SUFDViwyRUFBa0IsQ0FBQTtJQUNsQiw2RUFBbUIsQ0FBQTtJQUVuQiwwRUFBaUIsQ0FBQTtJQUNqQixnRUFBWSxDQUFBO0lBQ1osOERBQVcsQ0FBQTtJQUNYLHdFQUFnQixDQUFBO0lBQ2hCLDhEQUFXLENBQUE7SUFFWCwwRUFBaUIsQ0FBQTtJQUNqQixzRUFBZSxDQUFBO0lBQ2Ysd0VBQWdCLENBQUE7SUFFaEIsb0VBQWMsQ0FBQTtJQUNkLDBEQUFTLENBQUE7SUFDVCxrRUFBYSxDQUFBO0lBQ2Isb0VBQWMsQ0FBQTtBQUNmLENBQUMsRUEzQlcsWUFBWSxLQUFaLFlBQVksUUEyQnZCO0FBRUQsTUFBTSxPQUFPLFFBQVE7SUFDcEIsWUFDUSxJQUFrQixFQUNsQixLQUFhLEVBQ2IsSUFBWSxFQUNaLE9BQStCO1FBSC9CLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUFHLENBQUM7Q0FDM0M7QUFFRCxNQUFNLE9BQU8sY0FBYztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFFLElBQWtCO1FBQ2pDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFFZCxLQUFLLFlBQVksQ0FBQyxZQUFZ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bUJBQW1CLEVBQUU7WUFDbEUsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNWLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQztTQUN2QjtRQUVELE9BQVEsR0FBRyxDQUFFLEtBQUssR0FBRyxHQUFHLENBQUUsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQXhpc1VuaXRUeXBlIHtcclxuXHROb25lLCBcclxuXHJcblx0Q29tbW9uX1Nob3J0LFxyXG5cdENvbW1vbl9QZXJjZW50LFxyXG5cdENvbW1vbl9QZXJjZW50MDEsXHJcblx0Q29tbW9uX0h1bWlkaXR5LFxyXG5cdENvbW1vbl9EZWNpYmVsLFxyXG5cdENvbW1vbl9IZXgweCxcclxuXHRDb21tb25fSGV4LFxyXG5cdENvbW1vbl9TY2lOb3RhdGlvbixcclxuXHRDb21tb25fTG9jYWxlU3RyaW5nLFxyXG5cclxuXHRMZW5ndGhfTWlsbGltZXRyZSxcclxuXHRMZW5ndGhfTWV0ZXIsXHJcblx0TGVuZ3RoX0ZlZXQsXHJcblx0TGVuZ3RoX0tpbG9tZXRlcixcclxuXHRMZW5ndGhfTWlsZSxcclxuXHJcblx0QXJlYV9TcXVhcmVNZXRlcnMsXHJcblx0QXJlYV9TcXVhcmVGZWV0LFxyXG5cdEFyZWFfU3F1YXJlTWlsZXMsXHJcblxyXG5cdE1hc3NfTWlsbGlncmFtLFxyXG5cdE1hc3NfR3JhbSxcclxuXHRNYXNzX0tpbG9ncmFtLFxyXG5cdE1hc3NfTWV0cmljVG9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzVW5pdHtcclxuXHRjb25zdHJ1Y3RvciggXHJcblx0XHRwdWJsaWMgdHlwZTogQXhpc1VuaXRUeXBlLFxyXG5cdFx0cHVibGljIGxhYmVsOiBzdHJpbmcsXHJcblx0XHRwdWJsaWMgdW5pdDogc3RyaW5nLFxyXG5cdFx0cHVibGljIGNvbW1hbmQ/OiAoZXZlbnQ/OiBhbnkpID0+IHZvaWQgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzVW5pdEhlbHBlcntcclxuXHRzdGF0aWMgZ2V0RGF0YSggdW5pdDogQXhpc1VuaXRUeXBlICl7XHJcblx0XHRzd2l0Y2goICt1bml0ICl7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fU2hvcnQ6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9TaG9ydCwgXCJzaG9ydFwiLCBcIlwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fUGVyY2VudDpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQ29tbW9uX1BlcmNlbnQsIFwicGVyY2VudCAoMC0xMDApXCIsIFwiJVwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fUGVyY2VudDAxOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fUGVyY2VudDAxLCBcInBlcmNlbnQgKDAuMC0xLjApXCIsIFwiJVwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fSHVtaWRpdHk6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9IdW1pZGl0eSwgXCJodW1pZGl0eSAoJUgpXCIsIFwiJUhcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX0RlY2liZWw6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9EZWNpYmVsLCBcImRlY2liZWxcIiwgXCJkQlwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fSGV4MHg6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9IZXgweCwgXCJoZXhhZGVjaW1hbCAoMHgpXCIsIFwiXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9IZXg6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9IZXgsIFwiaGV4YWRlY2ltYWxcIiwgXCJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1NjaU5vdGF0aW9uOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fU2NpTm90YXRpb24sIFwic2NpZW50aWZpYyBub3RhdGlvblwiLCBcIlwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fTG9jYWxlU3RyaW5nOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fTG9jYWxlU3RyaW5nLCBcImxvY2FsZSBzdHJpbmdcIiwgXCJcIiApO1xyXG5cclxuXHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5MZW5ndGhfTWlsbGltZXRyZTpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTGVuZ3RoX01pbGxpbWV0cmUsIFwibWlsbGltZXRyZSAobW0pXCIsIFwibW1cIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTGVuZ3RoX01ldGVyOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5MZW5ndGhfTWV0ZXIsIFwibWV0ZXIgKG0pXCIsIFwibVwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5MZW5ndGhfRmVldDpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTGVuZ3RoX0ZlZXQsIFwiZmVldCAoZnQpXCIsIFwiZnRcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTGVuZ3RoX0tpbG9tZXRlcjpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTGVuZ3RoX0tpbG9tZXRlciwgXCJraWxvbWV0ZXIgKGttKVwiLCBcImttXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkxlbmd0aF9NaWxlOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5MZW5ndGhfTWlsZSwgXCJtaWxlIChtaSlcIiwgXCJtaVwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQXJlYV9TcXVhcmVNZXRlcnM6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkFyZWFfU3F1YXJlTWV0ZXJzLCBcIlNxdWFyZSBNZXRlcnMgKG3CsilcIiwgXCJtwrJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQXJlYV9TcXVhcmVGZWV0OlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5BcmVhX1NxdWFyZUZlZXQsIFwiU3F1YXJlIEZlZXQgKGZ0wrIpXCIsIFwiZnTCslwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5BcmVhX1NxdWFyZU1pbGVzOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5BcmVhX1NxdWFyZU1pbGVzLCBcIlNxdWFyZSBNaWxlcyAobWnCsilcIiwgXCJtacKyXCIgKTtcclxuXHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5NYXNzX01pbGxpZ3JhbTpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTWFzc19NaWxsaWdyYW0sIFwibWlsbGlncmFtIChtZylcIiwgXCJtZ1wiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5NYXNzX0dyYW06XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLk1hc3NfR3JhbSwgXCJncmFtIChnKVwiLCBcImdcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTWFzc19LaWxvZ3JhbTpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTWFzc19LaWxvZ3JhbSwgXCJraWxvZ3JhbSAoa2cpXCIsIFwia2dcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTWFzc19NZXRyaWNUb246XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLk1hc3NfTWV0cmljVG9uLCBcIm1ldHJpYyB0b24gKHQpXCIsIFwidFwiICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLk5vbmUsIFwibm9uZVwiLCBcIlwiICk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0Rm9ybWF0dGVkVmFsdWUoIGxhYmVsLCB1bml0LCBkZWNpbWFscyApe1xyXG5cdFx0bGV0IHZhbHVlID0gbGFiZWwudG9GaXhlZCggZGVjaW1hbHMgKTtcclxuXHRcdGNvbnN0IHVuaXREYXRhID0gQXhpc1VuaXRIZWxwZXIuZ2V0RGF0YSggdW5pdCk7XHJcblxyXG5cdFx0c3dpdGNoKCB1bml0RGF0YS50eXBlICl7XHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9IZXg6IFxyXG5cdFx0XHRcdHJldHVybiBsYWJlbC50b1N0cmluZyggMTYgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9IZXgweDogXHJcblx0XHRcdFx0cmV0dXJuIGAweCR7bGFiZWwudG9TdHJpbmcoIDE2ICl9YDtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9QZXJjZW50MDE6IFxyXG5cdFx0XHRcdHJldHVybiBgJHsoIDEwMCAqIGxhYmVsICkudG9GaXhlZCggZGVjaW1hbHMgKX0gJWA7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fU2NpTm90YXRpb246IFxyXG5cdFx0XHRcdHJldHVybiBsYWJlbC50b0V4cG9uZW50aWFsKGRlY2ltYWxzKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9Mb2NhbGVTdHJpbmc6XHJcblx0XHRcdFx0cmV0dXJuIGxhYmVsLnRvTG9jYWxlU3RyaW5nKCk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fU2hvcnQ6XHJcblx0XHRcdFx0cmV0dXJuIEF4aXNVbml0SGVscGVyLmdldFNob3J0Rm9ybWF0dGVkVmFsdWUoIGxhYmVsLCB1bml0LCBkZWNpbWFscyApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTm9uZTpcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblxyXG5cclxuXHJcblx0XHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRcdHJldHVybiBgJHt2YWx1ZX0gJHt1bml0RGF0YS51bml0fWA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hvcnRGb3JtYXR0ZWRWYWx1ZSggbGFiZWwsIHVuaXQsIGRlY2ltYWxzICl7XHJcblx0XHQvLyBpZiggbGFiZWwgPCAxMDAwICl7XHJcblx0XHQvLyBcdHJldHVybiBsYWJlbDtcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdFx0bGV0IGRldiA9IDE7XHJcblx0XHRsZXQgdSA9ICcnO1xyXG5cclxuXHRcdGlmKCBsYWJlbCA+PSAxMDAwICYmIGxhYmVsIDwgMTAwMDAwMCApe1xyXG5cdFx0XHR1ID0gJ0snO1xyXG5cdFx0XHRkZXYgPSAxMDAwO1xyXG5cdFx0fSBlbHNlIGlmKCBsYWJlbCA+PSAxMDAwMDAwICYmIGxhYmVsIDwgMTAwMDAwMDAwMCApe1xyXG5cdFx0XHR1ID0gJ01pbCc7XHJcblx0XHRcdGRldiA9IDEwMDAwMDA7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCBsYWJlbCA+PSAxMDAwMDAwMDAwICYmIGxhYmVsIDwgMTAwMDAwMDAwMDAwMCApe1xyXG5cdFx0XHR1ID0gJ0JpbCc7XHJcblx0XHRcdGRldiA9IDEwMDAwMDAwMDA7XHJcblx0XHR9IGVsc2UgaWYoIGxhYmVsID49IDEwMDAwMDAwMDAwMDAgJiYgbGFiZWwgPCAxMDAwMDAwMDAwMDAwMDAwICl7XHJcblx0XHRcdHUgPSAnVHJpJztcclxuXHRcdFx0ZGV2ID0gMTAwMDAwMDAwMDAwMDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoIGxhYmVsID49IDEwMDAwMDAwMDAwMDAwMDAgJiYgbGFiZWwgPCAxMDAwMDAwMDAwMDAwMDAwMDAwICl7XHJcblx0XHRcdHUgPSAnUWRyJztcclxuXHRcdFx0ZGV2ID0gMTAwMDAwMDAwMDAwMDAwMDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gIGAkeyggbGFiZWwgLyBkZXYgKS50b0ZpeGVkKCBkZWNpbWFscyl9ICR7dX1gO1xyXG5cdH1cclxufSAiXX0=