import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/base-panel';
import Split from 'split-grid'

@Component({
  selector: 'binding-rules-explorer',
  template: `
  <div class="grid" [style.height.px]="containerHeight">

    <svg-element-list (pick)="selectedId=$event"></svg-element-list>

    <div class="gutter-col" #splitter></div>

    <div>
      <binding-rule-designer [id]="selectedId" ></binding-rule-designer>
    </div>

  </div>`,
  styleUrls: [ './binding.scss' ]
})
export class BindingRulesExplorerComponent extends WidgetConsumer {

  containerHeight: number;
  selectedId: string;
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
}
