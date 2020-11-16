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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveS1heGlzL3VuaXQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFlBMkJYO0FBM0JELFdBQVksWUFBWTtJQUN2QiwrQ0FBSSxDQUFBO0lBRUosK0RBQVksQ0FBQTtJQUNaLG1FQUFjLENBQUE7SUFDZCx1RUFBZ0IsQ0FBQTtJQUNoQixxRUFBZSxDQUFBO0lBQ2YsbUVBQWMsQ0FBQTtJQUNkLCtEQUFZLENBQUE7SUFDWiwyREFBVSxDQUFBO0lBQ1YsMkVBQWtCLENBQUE7SUFDbEIsNkVBQW1CLENBQUE7SUFFbkIsMEVBQWlCLENBQUE7SUFDakIsZ0VBQVksQ0FBQTtJQUNaLDhEQUFXLENBQUE7SUFDWCx3RUFBZ0IsQ0FBQTtJQUNoQiw4REFBVyxDQUFBO0lBRVgsMEVBQWlCLENBQUE7SUFDakIsc0VBQWUsQ0FBQTtJQUNmLHdFQUFnQixDQUFBO0lBRWhCLG9FQUFjLENBQUE7SUFDZCwwREFBUyxDQUFBO0lBQ1Qsa0VBQWEsQ0FBQTtJQUNiLG9FQUFjLENBQUE7QUFDZixDQUFDLEVBM0JXLFlBQVksS0FBWixZQUFZLFFBMkJ2QjtBQUVELE1BQU0sT0FBTyxRQUFRO0lBQ3BCLFlBQ1EsSUFBa0IsRUFDbEIsS0FBYSxFQUNiLElBQVksRUFDWixPQUErQjtRQUgvQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFBRyxDQUFDO0NBQzNDO0FBRUQsTUFBTSxPQUFPLGNBQWM7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxJQUFrQjtRQUNqQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBRWQsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDN0IsT0FBTyxJQUFJLFFBQVEsQ0FBRSxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUUsQ0FBQztZQUUvRCxLQUFLLFlBQVksQ0FBQyxjQUFjO2dCQUMvQixPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxDQUFFLENBQUM7WUFFNUUsS0FBSyxZQUFZLENBQUMsZ0JBQWdCO2dCQUNqQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLENBQUUsQ0FBQztZQUVoRixLQUFLLFlBQVksQ0FBQyxlQUFlO2dCQUNoQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBRSxDQUFDO1lBRTVFLEtBQUssWUFBWSxDQUFDLGNBQWM7Z0JBQy9CLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFFLENBQUM7WUFFckUsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDN0IsT0FBTyxJQUFJLFFBQVEsQ0FBRSxZQUFZLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBRSxDQUFDO1lBRTFFLEtBQUssWUFBWSxDQUFDLFVBQVU7Z0JBQzNCLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLENBQUM7WUFFbkUsS0FBSyxZQUFZLENBQUMsa0JBQWtCO2dCQUNuQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLENBQUUsQ0FBQztZQUVuRixLQUFLLFlBQVksQ0FBQyxtQkFBbUI7Z0JBQ3BDLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUUsQ0FBQztZQUk5RSxLQUFLLFlBQVksQ0FBQyxpQkFBaUI7Z0JBQ2xDLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBRSxDQUFDO1lBRWhGLEtBQUssWUFBWSxDQUFDLFlBQVk7Z0JBQzdCLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFFLENBQUM7WUFFcEUsS0FBSyxZQUFZLENBQUMsV0FBVztnQkFDNUIsT0FBTyxJQUFJLFFBQVEsQ0FBRSxZQUFZLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUUsQ0FBQztZQUVwRSxLQUFLLFlBQVksQ0FBQyxnQkFBZ0I7Z0JBQ2pDLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBRSxDQUFDO1lBRTlFLEtBQUssWUFBWSxDQUFDLFdBQVc7Z0JBQzVCLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFFLENBQUM7WUFNcEUsS0FBSyxZQUFZLENBQUMsaUJBQWlCO2dCQUNsQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUUsQ0FBQztZQUVuRixLQUFLLFlBQVksQ0FBQyxlQUFlO2dCQUNoQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFFLENBQUM7WUFFakYsS0FBSyxZQUFZLENBQUMsZ0JBQWdCO2dCQUNqQyxPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLENBQUUsQ0FBQztZQUduRixLQUFLLFlBQVksQ0FBQyxjQUFjO2dCQUMvQixPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFFLENBQUM7WUFFNUUsS0FBSyxZQUFZLENBQUMsU0FBUztnQkFDMUIsT0FBTyxJQUFJLFFBQVEsQ0FBRSxZQUFZLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUUsQ0FBQztZQUVoRSxLQUFLLFlBQVksQ0FBQyxhQUFhO2dCQUM5QixPQUFPLElBQUksUUFBUSxDQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBRSxDQUFDO1lBRTFFLEtBQUssWUFBWSxDQUFDLGNBQWM7Z0JBQy9CLE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLENBQUUsQ0FBQztTQUMzRTtRQUVELE9BQU8sSUFBSSxRQUFRLENBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVE7UUFDOUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUUsQ0FBQztRQUN0QyxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9DLFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN0QixLQUFLLFlBQVksQ0FBQyxVQUFVO2dCQUMzQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLENBQUM7WUFFN0IsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDN0IsT0FBTyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBQztZQUVwQyxLQUFLLFlBQVksQ0FBQyxnQkFBZ0I7Z0JBQ2pDLE9BQU8sR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLENBQUUsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFFLElBQUksQ0FBQztZQUVuRCxLQUFLLFlBQVksQ0FBQyxrQkFBa0I7Z0JBQ25DLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QyxLQUFLLFlBQVksQ0FBQyxtQkFBbUI7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRS9CLEtBQUssWUFBWSxDQUFDLFlBQVk7Z0JBQzdCLE9BQU8sY0FBYyxDQUFDLHNCQUFzQixDQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7WUFFdkUsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDckIsT0FBTyxLQUFLLENBQUM7WUFJZDtnQkFDQyxPQUFPLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQztJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQXNCLENBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRO1FBQ25ELHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsSUFBSTtRQUVKLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVYLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxFQUFFO1lBQ3JDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDUixHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ1g7YUFBTSxJQUFJLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRTtZQUNsRCxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ1YsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUNkO2FBQ0ksSUFBSSxLQUFLLElBQUksVUFBVSxJQUFJLEtBQUssR0FBRyxhQUFhLEVBQUU7WUFDdEQsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNWLEdBQUcsR0FBRyxVQUFVLENBQUM7U0FDakI7YUFBTSxJQUFJLEtBQUssSUFBSSxhQUFhLElBQUksS0FBSyxHQUFHLGdCQUFnQixFQUFFO1lBQzlELENBQUMsR0FBRyxLQUFLLENBQUM7WUFDVixHQUFHLEdBQUcsYUFBYSxDQUFDO1NBQ3BCO2FBQ0ksSUFBSSxLQUFLLElBQUksZ0JBQWdCLElBQUksS0FBSyxHQUFHLG1CQUFtQixFQUFFO1lBQ2xFLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDVixHQUFHLEdBQUcsZ0JBQWdCLENBQUM7U0FDdkI7UUFFRCxPQUFRLEdBQUcsQ0FBRSxLQUFLLEdBQUcsR0FBRyxDQUFFLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEF4aXNVbml0VHlwZSB7XHJcblx0Tm9uZSwgXHJcblxyXG5cdENvbW1vbl9TaG9ydCxcclxuXHRDb21tb25fUGVyY2VudCxcclxuXHRDb21tb25fUGVyY2VudDAxLFxyXG5cdENvbW1vbl9IdW1pZGl0eSxcclxuXHRDb21tb25fRGVjaWJlbCxcclxuXHRDb21tb25fSGV4MHgsXHJcblx0Q29tbW9uX0hleCxcclxuXHRDb21tb25fU2NpTm90YXRpb24sXHJcblx0Q29tbW9uX0xvY2FsZVN0cmluZyxcclxuXHJcblx0TGVuZ3RoX01pbGxpbWV0cmUsXHJcblx0TGVuZ3RoX01ldGVyLFxyXG5cdExlbmd0aF9GZWV0LFxyXG5cdExlbmd0aF9LaWxvbWV0ZXIsXHJcblx0TGVuZ3RoX01pbGUsXHJcblxyXG5cdEFyZWFfU3F1YXJlTWV0ZXJzLFxyXG5cdEFyZWFfU3F1YXJlRmVldCxcclxuXHRBcmVhX1NxdWFyZU1pbGVzLFxyXG5cclxuXHRNYXNzX01pbGxpZ3JhbSxcclxuXHRNYXNzX0dyYW0sXHJcblx0TWFzc19LaWxvZ3JhbSxcclxuXHRNYXNzX01ldHJpY1RvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1VuaXR7XHJcblx0Y29uc3RydWN0b3IoIFxyXG5cdFx0cHVibGljIHR5cGU6IEF4aXNVbml0VHlwZSxcclxuXHRcdHB1YmxpYyBsYWJlbDogc3RyaW5nLFxyXG5cdFx0cHVibGljIHVuaXQ6IHN0cmluZyxcclxuXHRcdHB1YmxpYyBjb21tYW5kPzogKGV2ZW50PzogYW55KSA9PiB2b2lkICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1VuaXRIZWxwZXJ7XHJcblx0c3RhdGljIGdldERhdGEoIHVuaXQ6IEF4aXNVbml0VHlwZSApe1xyXG5cdFx0c3dpdGNoKCArdW5pdCApe1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1Nob3J0OlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fU2hvcnQsIFwic2hvcnRcIiwgXCJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1BlcmNlbnQ6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkNvbW1vbl9QZXJjZW50LCBcInBlcmNlbnQgKDAtMTAwKVwiLCBcIiVcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1BlcmNlbnQwMTpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQ29tbW9uX1BlcmNlbnQwMSwgXCJwZXJjZW50ICgwLjAtMS4wKVwiLCBcIiVcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX0h1bWlkaXR5OlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fSHVtaWRpdHksIFwiaHVtaWRpdHkgKCVIKVwiLCBcIiVIXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9EZWNpYmVsOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fRGVjaWJlbCwgXCJkZWNpYmVsXCIsIFwiZEJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX0hleDB4OlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fSGV4MHgsIFwiaGV4YWRlY2ltYWwgKDB4KVwiLCBcIlwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fSGV4OlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Db21tb25fSGV4LCBcImhleGFkZWNpbWFsXCIsIFwiXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkNvbW1vbl9TY2lOb3RhdGlvbjpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQ29tbW9uX1NjaU5vdGF0aW9uLCBcInNjaWVudGlmaWMgbm90YXRpb25cIiwgXCJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX0xvY2FsZVN0cmluZzpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQ29tbW9uX0xvY2FsZVN0cmluZywgXCJsb2NhbGUgc3RyaW5nXCIsIFwiXCIgKTtcclxuXHJcblxyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTGVuZ3RoX01pbGxpbWV0cmU6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkxlbmd0aF9NaWxsaW1ldHJlLCBcIm1pbGxpbWV0cmUgKG1tKVwiLCBcIm1tXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkxlbmd0aF9NZXRlcjpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTGVuZ3RoX01ldGVyLCBcIm1ldGVyIChtKVwiLCBcIm1cIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTGVuZ3RoX0ZlZXQ6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkxlbmd0aF9GZWV0LCBcImZlZXQgKGZ0KVwiLCBcImZ0XCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkxlbmd0aF9LaWxvbWV0ZXI6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLkxlbmd0aF9LaWxvbWV0ZXIsIFwia2lsb21ldGVyIChrbSlcIiwgXCJrbVwiICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5MZW5ndGhfTWlsZTpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuTGVuZ3RoX01pbGUsIFwibWlsZSAobWkpXCIsIFwibWlcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkFyZWFfU3F1YXJlTWV0ZXJzOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5BcmVhX1NxdWFyZU1ldGVycywgXCJTcXVhcmUgTWV0ZXJzIChtwrIpXCIsIFwibcKyXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLkFyZWFfU3F1YXJlRmVldDpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQXJlYV9TcXVhcmVGZWV0LCBcIlNxdWFyZSBGZWV0IChmdMKyKVwiLCBcImZ0wrJcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQXJlYV9TcXVhcmVNaWxlczpcclxuXHRcdFx0XHRyZXR1cm4gbmV3IEF4aXNVbml0KCBBeGlzVW5pdFR5cGUuQXJlYV9TcXVhcmVNaWxlcywgXCJTcXVhcmUgTWlsZXMgKG1pwrIpXCIsIFwibWnCslwiICk7XHJcblxyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTWFzc19NaWxsaWdyYW06XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLk1hc3NfTWlsbGlncmFtLCBcIm1pbGxpZ3JhbSAobWcpXCIsIFwibWdcIiApO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuTWFzc19HcmFtOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5NYXNzX0dyYW0sIFwiZ3JhbSAoZylcIiwgXCJnXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLk1hc3NfS2lsb2dyYW06XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBeGlzVW5pdCggQXhpc1VuaXRUeXBlLk1hc3NfS2lsb2dyYW0sIFwia2lsb2dyYW0gKGtnKVwiLCBcImtnXCIgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLk1hc3NfTWV0cmljVG9uOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5NYXNzX01ldHJpY1RvbiwgXCJtZXRyaWMgdG9uICh0KVwiLCBcInRcIiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXcgQXhpc1VuaXQoIEF4aXNVbml0VHlwZS5Ob25lLCBcIm5vbmVcIiwgXCJcIiApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEZvcm1hdHRlZFZhbHVlKCBsYWJlbCwgdW5pdCwgZGVjaW1hbHMgKXtcclxuXHRcdGxldCB2YWx1ZSA9IGxhYmVsLnRvRml4ZWQoIGRlY2ltYWxzICk7XHJcblx0XHRjb25zdCB1bml0RGF0YSA9IEF4aXNVbml0SGVscGVyLmdldERhdGEoIHVuaXQpO1xyXG5cclxuXHRcdHN3aXRjaCggdW5pdERhdGEudHlwZSApe1xyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fSGV4OiBcclxuXHRcdFx0XHRyZXR1cm4gbGFiZWwudG9TdHJpbmcoIDE2ICk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fSGV4MHg6IFxyXG5cdFx0XHRcdHJldHVybiBgMHgke2xhYmVsLnRvU3RyaW5nKCAxNiApfWA7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fUGVyY2VudDAxOiBcclxuXHRcdFx0XHRyZXR1cm4gYCR7KCAxMDAgKiBsYWJlbCApLnRvRml4ZWQoIGRlY2ltYWxzICl9ICVgO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1NjaU5vdGF0aW9uOiBcclxuXHRcdFx0XHRyZXR1cm4gbGFiZWwudG9FeHBvbmVudGlhbChkZWNpbWFscyk7XHJcblxyXG5cdFx0XHRjYXNlIEF4aXNVbml0VHlwZS5Db21tb25fTG9jYWxlU3RyaW5nOlxyXG5cdFx0XHRcdHJldHVybiBsYWJlbC50b0xvY2FsZVN0cmluZygpO1xyXG5cclxuXHRcdFx0Y2FzZSBBeGlzVW5pdFR5cGUuQ29tbW9uX1Nob3J0OlxyXG5cdFx0XHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRTaG9ydEZvcm1hdHRlZFZhbHVlKCBsYWJlbCwgdW5pdCwgZGVjaW1hbHMgKTtcclxuXHJcblx0XHRcdGNhc2UgQXhpc1VuaXRUeXBlLk5vbmU6XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cclxuXHJcblxyXG5cdFx0XHRkZWZhdWx0OiBcclxuXHRcdFx0XHRyZXR1cm4gYCR7dmFsdWV9ICR7dW5pdERhdGEudW5pdH1gO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNob3J0Rm9ybWF0dGVkVmFsdWUoIGxhYmVsLCB1bml0LCBkZWNpbWFscyApe1xyXG5cdFx0Ly8gaWYoIGxhYmVsIDwgMTAwMCApe1xyXG5cdFx0Ly8gXHRyZXR1cm4gbGFiZWw7XHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHRcdGxldCBkZXYgPSAxO1xyXG5cdFx0bGV0IHUgPSAnJztcclxuXHJcblx0XHRpZiggbGFiZWwgPj0gMTAwMCAmJiBsYWJlbCA8IDEwMDAwMDAgKXtcclxuXHRcdFx0dSA9ICdLJztcclxuXHRcdFx0ZGV2ID0gMTAwMDtcclxuXHRcdH0gZWxzZSBpZiggbGFiZWwgPj0gMTAwMDAwMCAmJiBsYWJlbCA8IDEwMDAwMDAwMDAgKXtcclxuXHRcdFx0dSA9ICdNaWwnO1xyXG5cdFx0XHRkZXYgPSAxMDAwMDAwO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiggbGFiZWwgPj0gMTAwMDAwMDAwMCAmJiBsYWJlbCA8IDEwMDAwMDAwMDAwMDAgKXtcclxuXHRcdFx0dSA9ICdCaWwnO1xyXG5cdFx0XHRkZXYgPSAxMDAwMDAwMDAwO1xyXG5cdFx0fSBlbHNlIGlmKCBsYWJlbCA+PSAxMDAwMDAwMDAwMDAwICYmIGxhYmVsIDwgMTAwMDAwMDAwMDAwMDAwMCApe1xyXG5cdFx0XHR1ID0gJ1RyaSc7XHJcblx0XHRcdGRldiA9IDEwMDAwMDAwMDAwMDA7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCBsYWJlbCA+PSAxMDAwMDAwMDAwMDAwMDAwICYmIGxhYmVsIDwgMTAwMDAwMDAwMDAwMDAwMDAwMCApe1xyXG5cdFx0XHR1ID0gJ1Fkcic7XHJcblx0XHRcdGRldiA9IDEwMDAwMDAwMDAwMDAwMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICBgJHsoIGxhYmVsIC8gZGV2ICkudG9GaXhlZCggZGVjaW1hbHMpfSAke3V9YDtcclxuXHR9XHJcbn0gIl19