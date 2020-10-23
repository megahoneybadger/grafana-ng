export enum AxisUnitType {
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
		public type: AxisUnitType,
		public label: string,
		public unit: string,
		public command?: (event?: any) => void ){}
}

export class AxisUnitHelper{
	static getData( unit: AxisUnitType ){
		switch( +unit ){

			case AxisUnitType.Common_Short:
				return new AxisUnit( AxisUnitType.Common_Short, "short", "" );

			case AxisUnitType.Common_Percent:
				return new AxisUnit( AxisUnitType.Common_Percent, "percent (0-100)", "%" );

			case AxisUnitType.Common_Percent01:
				return new AxisUnit( AxisUnitType.Common_Percent01, "percent (0.0-1.0)", "%" );

			case AxisUnitType.Common_Humidity:
				return new AxisUnit( AxisUnitType.Common_Humidity, "humidity (%H)", "%H" );

			case AxisUnitType.Common_Decibel:
				return new AxisUnit( AxisUnitType.Common_Decibel, "decibel", "dB" );

			case AxisUnitType.Common_Hex0x:
				return new AxisUnit( AxisUnitType.Common_Hex0x, "hexadecimal (0x)", "" );

			case AxisUnitType.Common_Hex:
				return new AxisUnit( AxisUnitType.Common_Hex, "hexadecimal", "" );

			case AxisUnitType.Common_SciNotation:
				return new AxisUnit( AxisUnitType.Common_SciNotation, "scientific notation", "" );

			case AxisUnitType.Common_LocaleString:
				return new AxisUnit( AxisUnitType.Common_LocaleString, "locale string", "" );



			case AxisUnitType.Length_Millimetre:
				return new AxisUnit( AxisUnitType.Length_Millimetre, "millimetre (mm)", "mm" );

			case AxisUnitType.Length_Meter:
				return new AxisUnit( AxisUnitType.Length_Meter, "meter (m)", "m" );

			case AxisUnitType.Length_Feet:
				return new AxisUnit( AxisUnitType.Length_Feet, "feet (ft)", "ft" );

			case AxisUnitType.Length_Kilometer:
				return new AxisUnit( AxisUnitType.Length_Kilometer, "kilometer (km)", "km" );

			case AxisUnitType.Length_Mile:
				return new AxisUnit( AxisUnitType.Length_Mile, "mile (mi)", "mi" );





			case AxisUnitType.Area_SquareMeters:
				return new AxisUnit( AxisUnitType.Area_SquareMeters, "Square Meters (m²)", "m²" );

			case AxisUnitType.Area_SquareFeet:
				return new AxisUnit( AxisUnitType.Area_SquareFeet, "Square Feet (ft²)", "ft²" );

			case AxisUnitType.Area_SquareMiles:
				return new AxisUnit( AxisUnitType.Area_SquareMiles, "Square Miles (mi²)", "mi²" );


			case AxisUnitType.Mass_Milligram:
				return new AxisUnit( AxisUnitType.Mass_Milligram, "milligram (mg)", "mg" );

			case AxisUnitType.Mass_Gram:
				return new AxisUnit( AxisUnitType.Mass_Gram, "gram (g)", "g" );

			case AxisUnitType.Mass_Kilogram:
				return new AxisUnit( AxisUnitType.Mass_Kilogram, "kilogram (kg)", "kg" );

			case AxisUnitType.Mass_MetricTon:
				return new AxisUnit( AxisUnitType.Mass_MetricTon, "metric ton (t)", "t" );
		}

		return new AxisUnit( AxisUnitType.None, "none", "" );
	}

	static getFormattedValue( label, unit, decimals ){
		let value = label.toFixed( decimals );
		const unitData = AxisUnitHelper.getData( unit);

		switch( unitData.type ){
			case AxisUnitType.Common_Hex: 
				return label.toString( 16 );

			case AxisUnitType.Common_Hex0x: 
				return `0x${label.toString( 16 )}`;

			case AxisUnitType.Common_Percent01: 
				return `${( 100 * label ).toFixed( decimals )} %`;

			case AxisUnitType.Common_SciNotation: 
				return label.toExponential(decimals);

			case AxisUnitType.Common_LocaleString:
				return label.toLocaleString();

			case AxisUnitType.Common_Short:
				return AxisUnitHelper.getShortFormattedValue( label, unit, decimals );

			case AxisUnitType.None:
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