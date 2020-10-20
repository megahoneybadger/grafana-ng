export class ColorHelper {

	private palette = new Array<string>()

	constructor() {
		this.palette = [
			
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
	}
	

	public getColor(ds) {
		const color = this.palette[ds.index % this.palette.length];

		return this.hexToRgb(color);
	}

	public getColorAsArgbFunc(ds, opacity: number = 1) {
		const color = this.getColor(ds);

		return `rgba(${color.r},${color.g},${color.b}, ${opacity})`
	}


	private hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	public static parse(input) {
		var arr = [];

		if (input.substr(0,1)=="#") {
			var collen=(input.length-1)/3;
			var fact=[17,1,0.062272][collen-1];
			arr = [
					Math.round(parseInt(input.substr(1,collen),16)*fact),
					Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
					Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
			];
		}
		else {
			arr =  input.split("(")[1].split(")")[0].split(",").map(Math.round);
		} 

		return {
			r: arr[ 0 ],
			g: arr[ 1 ],
			b: arr[ 2 ]
		}
			
	}

	public static rgbToHex(e){
		const c = ColorHelper.parse( e )
		const r = c.r.toString(16).padStart(2, "0");
		const g = c.g.toString(16).padStart(2, "0");
		const b = c.b.toString(16).padStart(2, "0");

		return `#${r}${g}${b}`;
	}
}












