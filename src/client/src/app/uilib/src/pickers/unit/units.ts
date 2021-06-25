import { AxisUnitHelper, UnitType } from './unit-helper';



export const menuItems: any = [

	{
		label: "none", items: [
			AxisUnitHelper.getData(UnitType.None),
			AxisUnitHelper.getData(UnitType.Common_Short),
			AxisUnitHelper.getData(UnitType.Common_Percent),
			AxisUnitHelper.getData(UnitType.Common_Percent01),
			AxisUnitHelper.getData(UnitType.Common_Humidity),
			AxisUnitHelper.getData(UnitType.Common_Decibel),
			AxisUnitHelper.getData(UnitType.Common_Hex0x),
			AxisUnitHelper.getData(UnitType.Common_Hex),
			AxisUnitHelper.getData(UnitType.Common_SciNotation),
			AxisUnitHelper.getData(UnitType.Common_LocaleString)
			
		]
	},
	{
		label: "length", items: [
			AxisUnitHelper.getData(UnitType.Length_Millimetre),
			AxisUnitHelper.getData(UnitType.Length_Meter),
			AxisUnitHelper.getData(UnitType.Length_Feet),
			AxisUnitHelper.getData(UnitType.Length_Kilometer),
			AxisUnitHelper.getData(UnitType.Length_Mile)
		]
	},

	{
		label: "area", items: [
			AxisUnitHelper.getData(UnitType.Area_SquareMeters),
			AxisUnitHelper.getData(UnitType.Area_SquareFeet),
			AxisUnitHelper.getData(UnitType.Area_SquareMiles)
		]
	},

	{
		label: "mass", items: [
			AxisUnitHelper.getData(UnitType.Mass_Milligram),
			AxisUnitHelper.getData(UnitType.Mass_Gram),
			AxisUnitHelper.getData(UnitType.Mass_Kilogram),
			AxisUnitHelper.getData(UnitType.Mass_MetricTon)
		]
	},
];