import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../base/base-panel';

@Component({
  selector: 'editor-import',
  template: `
  <div class="gf-form-group" >
    <div class="gf-form-button-row">
      <button class="btn btn-inverse" (click)="fileInput.click();">Import</button>
      <input id="file-input" type="file" style="display: none;"
        (change)="onFileSelect($event)" #fileInput />
    </div>
  </div>`
})
export class SvgFileImporterComponent extends WidgetConsumer {

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }
   
  async onFileSelect(e) {
    const file = e.target.files[0];
    
    this.content = await this.readFileContent(file);

    const comp = this.widget.component;
    
    comp.load( this.content );
    comp.dataProvider.update();
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


