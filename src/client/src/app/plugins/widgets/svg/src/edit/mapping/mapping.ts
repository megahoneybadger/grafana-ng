import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SvgModel } from '../../svg.m'
import { SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'editor-mapping',
  templateUrl: './mapping.html'
})
export class MappingEditorComponent {

  content: string;

  get widget(): SvgModel {
    return this.panel.widget;
  }

  constructor(@Inject(PANEL_TOKEN) public panel: Panel) {
    this.content = JSON.parse( this.widget.content );
  }

  ngAfterViewInit(){
    if( this.content ){
      const draw = SVG('#canvas');
      draw.svg( this.content );
    }
  }

  async onFileSelect(e) {
    const file = e.target.files[0];
    
    this.content = await this.readFileContent(file);
    
    this.widget.content = JSON.stringify(this.content);
  }

  ngOnInit(): void {

    // don't forget to add "#" CSS selector to the name of the DOM element.
    // const draw = SVG().addTo('#canvas').size(400, 400);
    // const rect = draw.rect(100, 100, );
  }

  readFileContent(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!file) {
        resolve('');
      }

      const reader = new FileReader();

      reader.onload = _ => resolve(reader.result.toString());

      reader.readAsText(file);
    });
  }
}
