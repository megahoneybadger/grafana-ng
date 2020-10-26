
import { AxisUnitHelper, AxisUnitType } from '../../../view/axes/unit-helper';

export const menuItems: any = [

	{
		label: "none", items: [
			AxisUnitHelper.getData(AxisUnitType.None),
			AxisUnitHelper.getData(AxisUnitType.Common_Short),
			AxisUnitHelper.getData(AxisUnitType.Common_Percent),
			AxisUnitHelper.getData(AxisUnitType.Common_Percent01),
			AxisUnitHelper.getData(AxisUnitType.Common_Humidity),
			AxisUnitHelper.getData(AxisUnitType.Common_Decibel),
			AxisUnitHelper.getData(AxisUnitType.Common_Hex0x),
			AxisUnitHelper.getData(AxisUnitType.Common_Hex),
			AxisUnitHelper.getData(AxisUnitType.Common_SciNotation),
			AxisUnitHelper.getData(AxisUnitType.Common_LocaleString)
			
		]
	},
	{
		label: "length", items: [
			AxisUnitHelper.getData(AxisUnitType.Length_Millimetre),
			AxisUnitHelper.getData(AxisUnitType.Length_Meter),
			AxisUnitHelper.getData(AxisUnitType.Length_Feet),
			AxisUnitHelper.getData(AxisUnitType.Length_Kilometer),
			AxisUnitHelper.getData(AxisUnitType.Length_Mile)
		]
	},

	{
		label: "area", items: [
			AxisUnitHelper.getData(AxisUnitType.Area_SquareMeters),
			AxisUnitHelper.getData(AxisUnitType.Area_SquareFeet),
			AxisUnitHelper.getData(AxisUnitType.Area_SquareMiles)
		]
	},

	{
		label: "mass", items: [
			AxisUnitHelper.getData(AxisUnitType.Mass_Milligram),
			AxisUnitHelper.getData(AxisUnitType.Mass_Gram),
			AxisUnitHelper.getData(AxisUnitType.Mass_Kilogram),
			AxisUnitHelper.getData(AxisUnitType.Mass_MetricTon)
		]
	},
];