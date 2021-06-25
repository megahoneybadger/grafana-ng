export enum UnitType {
	None, 

	Common_Short,
	Common_Percent,
	Common_Percent01,
	Common_Humidity,
	Common_Decibel,
	Common_Hex0x,
	Common_Hex,
	Common_SciNotation,
	Common_LocaleString,

	Length_Millimetre,
	Length_Meter,
	Length_Feet,
	Length_Kilometer,
	Length_Mile,

	Area_SquareMeters,
	Area_SquareFeet,
	Area_SquareMiles,

	Mass_Milligram,
	Mass_Gram,
	Mass_Kilogram,
	Mass_MetricTon
}

export class AxisUnit{
	constructor( 
		public type: UnitType,
		public label: string,
		public unit: string,
		public command?: (event?: any) => void ){}
}

export class AxisUnitHelper{
	static getData( unit: UnitType ){
		switch( +unit ){

			case UnitType.Common_Short:
				return new AxisUnit( UnitType.Common_Short, "short", "" );

			case UnitType.Common_Percent:
				return new AxisUnit( UnitType.Common_Percent, "percent (0-100)", "%" );

			case UnitType.Common_Percent01:
				return new AxisUnit( UnitType.Common_Percent01, "percent (0.0-1.0)", "%" );

			case UnitType.Common_Humidity:
				return new AxisUnit( UnitType.Common_Humidity, "humidity (%H)", "%H" );

			case UnitType.Common_Decibel:
				return new AxisUnit( UnitType.Common_Decibel, "decibel", "dB" );

			case UnitType.Common_Hex0x:
				return new AxisUnit( UnitType.Common_Hex0x, "hexadecimal (0x)", "" );

			case UnitType.Common_Hex:
				return new AxisUnit( UnitType.Common_Hex, "hexadecimal", "" );

			case UnitType.Common_SciNotation:
				return new AxisUnit( UnitType.Common_SciNotation, "scientific notation", "" );

			case UnitType.Common_LocaleString:
				return new AxisUnit( UnitType.Common_LocaleString, "locale string", "" );



			case UnitType.Length_Millimetre:
				return new AxisUnit( UnitType.Length_Millimetre, "millimetre (mm)", "mm" );

			case UnitType.Length_Meter:
				return new AxisUnit( UnitType.Length_Meter, "meter (m)", "m" );

			case UnitType.Length_Feet:
				return new AxisUnit( UnitType.Length_Feet, "feet (ft)", "ft" );

			case UnitType.Length_Kilometer:
				return new AxisUnit( UnitType.Length_Kilometer, "kilometer (km)", "km" );

			case UnitType.Length_Mile:
				return new AxisUnit( UnitType.Length_Mile, "mile (mi)", "mi" );





			case UnitType.Area_SquareMeters:
				return new AxisUnit( UnitType.Area_SquareMeters, "Square Meters (m²)", "m²" );

			case UnitType.Area_SquareFeet:
				return new AxisUnit( UnitType.Area_SquareFeet, "Square Feet (ft²)", "ft²" );

			case UnitType.Area_SquareMiles:
				return new AxisUnit( UnitType.Area_SquareMiles, "Square Miles (mi²)", "mi²" );


			case UnitType.Mass_Milligram:
				return new AxisUnit( UnitType.Mass_Milligram, "milligram (mg)", "mg" );

			case UnitType.Mass_Gram:
				return new AxisUnit( UnitType.Mass_Gram, "gram (g)", "g" );

			case UnitType.Mass_Kilogram:
				return new AxisUnit( UnitType.Mass_Kilogram, "kilogram (kg)", "kg" );

			case UnitType.Mass_MetricTon:
				return new AxisUnit( UnitType.Mass_MetricTon, "metric ton (t)", "t" );
		}

		return new AxisUnit( UnitType.None, "none", "" );
	}

	static getFormattedValue( label, unit, decimals ){
		let value = label.toFixed( decimals );
		const unitData = AxisUnitHelper.getData( unit);

		switch( unitData.type ){
			case UnitType.Common_Hex: 
				return label.toString( 16 );

			case UnitType.Common_Hex0x: 
				return `0x${label.toString( 16 )}`;

			case UnitType.Common_Percent01: 
				return `${( 100 * label ).toFixed( decimals )} %`;

			case UnitType.Common_SciNotation: 
				return label.toExponential(decimals);

			case UnitType.Common_LocaleString:
				return label.toLocaleString();

			case UnitType.Common_Short:
				return AxisUnitHelper.getShortFormattedValue( label, unit, decimals );

			case UnitType.None:
				return value;



			default: 
				return `${value} ${unitData.unit}`;
		}
	}

	static getShortFormattedValue( label, unit, decimals ){
		// if( label < 1000 ){
		// 	return label;
		// }
		
		let dev = 1;
		let u = '';

		if( label >= 1000 && label < 1000000 ){
			u = 'K';
			dev = 1000;
		} else if( label >= 1000000 && label < 1000000000 ){
			u = 'Mil';
			dev = 1000000;
		}
		else if( label >= 1000000000 && label < 1000000000000 ){
			u = 'Bil';
			dev = 1000000000;
		} else if( label >= 1000000000000 && label < 1000000000000000 ){
			u = 'Tri';
			dev = 1000000000000;
		}
		else if( label >= 1000000000000000 && label < 1000000000000000000 ){
			u = 'Qdr';
			dev = 1000000000000000;
		}

		return  `${( label / dev ).toFixed( decimals)} ${u}`;
	}
} 