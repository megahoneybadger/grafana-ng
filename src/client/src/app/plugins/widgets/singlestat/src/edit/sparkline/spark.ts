import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';
import { SparklineSettings } from '../../singlestat.m';

@Component({
  selector: 'editor-sparkline',
  templateUrl: `spark.html`
})
export class SparklineEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) panel: Panel ) {
      super( panel );

      this.widget.sparkline = this.widget.sparkline ?? new SparklineSettings();
  }


  onShowSparkline(){
    this.widget.sparkline.show = true;
  }

}

