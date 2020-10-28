import _ from 'lodash';
import tinycolor from 'tinycolor2';

export class ColorHelper {

	static readonly PALETTE_ROWS = 4;
	static readonly PALETTE_COLUMNS = 14;

	static readonly DEFAULT_ANNOTATION_COLOR = 'rgba(0, 211, 255, 1)';
	static readonly OK_COLOR = 'rgba(11, 237, 50, 1)';
	static readonly ALERTING_COLOR = 'rgba(237, 46, 24, 1)';
	static readonly NO_DATA_COLOR = 'rgba(150, 150, 150, 1)';
	static readonly PENDING_COLOR = 'rgba(247, 149, 32, 1)';
	
	static readonly REGION_FILL_ALPHA = 0.09;

	private static palette = [

		"7eb26d",
		"cca300",
		"6ed0e0",
		"EF843C",
		"E24D42",
		"1F78C1",
		"BA43A9",
		"705DA0",
		"508642",
		"CCA300",
		"447EBC",
		"C15C17",
		"890F02",
		"0A437C",
		"6D1F62",
		"584477",
		"B7DBAB",
		"F4D598",
		"70DBED",
		"F9BA8F",
		"F29191",
		"82B5D8",
		"E5A8E2",
		"AEA2E0",
		"629E51",
		"E5AC0E",
		"64B0C8",
		"E0752D",
		"BF1B00",
		"0A50A1",
		"962D82",
		"614D93",
		"9AC48A",
		"F2C96D",
		"65C5DB",
		"F9934E",
		"5195CE",
		"D683CE",
		"806EB7",
		"3F6833",
		"967302",
		"2F575E",
		"99440A",
		"58140C",
		"052B51",
		"511749",
		"3F2B5B",
		"E0F9D7",
		"FCEACA",
		"CFFAFF",
		"F9E2D2",
		"FCE2DE",
		"BADFF4",
		"F9D9F9",
		"DEDAF7",
		"EA6460"
	]

	static get colors() : string[]{
		return [...this.palette];
	}

	static hexToRgb(hex: string) : RGB {
		return tinycolor(hex).toRgb();
	}

	static hexToRgbString( hex: string, opacity: number = 1 ) : string{
		var color = tinycolor( hex );
		color.setAlpha(opacity);
		return color.toRgbString(); // "rgba(255, 0, 0, 0.5)"
	}

	static sortColorsByHue(hexColors) {
		const hslColors = _.map(hexColors, this.hexToHsl);

		let sortedHSLColors = _.sortBy(hslColors, ['h']);
		sortedHSLColors = _.chunk(sortedHSLColors, this.PALETTE_ROWS);
		sortedHSLColors = _.map(sortedHSLColors, chunk => {
			return _.sortBy(chunk, 'l');
		});
		sortedHSLColors = _.flattenDeep(_.zip(...sortedHSLColors));

		return _.map(sortedHSLColors, this.hslToHex);
	}

	static hexToHsl(color) {
		return tinycolor(color).toHsl();
	}

	static hslToHex(color) {
		return tinycolor(color).toHexString();
	}
}

export interface RGB {
	r: number;
	g: number;
	b: number;
	a: number;
}













