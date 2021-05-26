import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN, TimeRangeStore  } from 'common';
import { BaseQueryComponent } from './query-base';

@Component({
  selector: 'query-editor',
  templateUrl: './query.html'
})
export class QueryEditorComponent extends BaseQueryComponent {

  contextMenuItems = [];
  opened: boolean = true;

  @Output() remove = new EventEmitter();
  @Output() moveUp = new EventEmitter();
  @Output() moveDown = new EventEmitter();
  @Output() duplicate = new EventEmitter();

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService,
    public time :TimeRangeStore ){
      super( panel, dsService );
  }

  ngOnInit(){
    this.contextMenuItems = [

      {
        label: 'Duplicate',
        command: _ => this.duplicate.emit()
      },

      {
        label: 'Move up',
        command: _ => this.moveUp.emit()
      },

      {
        label: 'Move down',
        command: _ => this.moveDown.emit()
      },
    ]

    this.build( false );
  }

  onRebuild(){
    this.rebuild.emit();
  }
}