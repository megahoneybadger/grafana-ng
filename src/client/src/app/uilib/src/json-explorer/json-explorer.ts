import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Component({
	selector: 'ed-json-explorer',
	template: `<div class="wrapper"  #placeholder></div>`,
	styleUrls: ['./json-explorer.scss'],
	encapsulation: ViewEncapsulation.None
})
export class JsonExplorerComponent {
	_content : any;

	@ViewChild('placeholder') wrapper; 
	formatter : JSONFormatter;

	@Input() open : number = 3;

	get content() : any{
		return this._content;
	};

	@Input() set content( c : any ){
		setTimeout( () => {
			this._content = c;

			this.clean();
	
			this.formatter = new JSONFormatter(this._content, this.open, {
				theme: 'dark',
			});

			var json = this.formatter.render();
	
			const first = json.querySelector( "a" )
			first.remove();
	
			this
				.wrapper
				.nativeElement
				.append( json )
		}, 0 )
		
	}

	clean(){
		this
			.wrapper
			.nativeElement
			.innerHTML = '';
	}

	expandAll(){
		this.formatter.openAtDepth(Infinity);
	}

	collapseAll(){
		this.formatter.openAtDepth(1);
	}
}






