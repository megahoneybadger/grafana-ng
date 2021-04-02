import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseSvgPanelComponent } from '../base';
import Split from 'split-grid'

@Component({
  selector: 'editor-mapping',
  template: `
  <div class="grid" [style.height.px]="containerHeight">

    <div style="overflow-y:auto" id="fuck">
      <objects-explorer></objects-explorer>
    </div>

    <div class="gutter-col" #splitter></div>

    <binder></binder>

  </div>`,
  styleUrls: [ './mapping.scss' ]
})
export class MappingEditorComponent extends BaseSvgPanelComponent {

  containerHeight: number;
  @ViewChild( "splitter" ) splitter: ElementRef

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
    
    this.containerHeight = document
      .getElementsByClassName("pe-editor")[ 0 ]
      .clientHeight - 70;
  }

  ngAfterViewInit(){
    Split({
      columnGutters: [{
          track: 1,
          element: this.splitter.nativeElement,
      }],
    })
  }
  
  async onFileSelect(e) {
    const file = e.target.files[0];
    
    this.content = await this.readFileContent(file);
    
    this.widget.component.load( this.content );
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
