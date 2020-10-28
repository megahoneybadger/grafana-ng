import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegion, TimeRegionColor, TimeRegionDay } from '../../../chart.m';

@Component({
  selector: 'editor-time-region',
  templateUrl: './time-region.html'
})
export class TimeRegionEditorComponent extends BaseChartEditorComponent {

  @Input() timeRegion: TimeRegion;
  @Input() index: number;

  @Output() removed = new EventEmitter<TimeRegion>();

  availableColors = DropDownComponent.wrapEnum( TimeRegionColor )
  availableDays = DropDownComponent.wrapEnum( TimeRegionDay )

  fromTime: string;
	toTime: string;

  get showCustomColors(){
		return ( TimeRegionColor.Custom == this.timeRegion.colorType );
	}

	get showCustomFillColor(){
		return ( this.showCustomColors && this.timeRegion.fill );
	}

	get showCustomLineColor(){
		return ( this.showCustomColors && this.timeRegion.line );
	}

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }

  ngOnInit(){
		this.fromTime = this.timeRegion.fromTime;
		this.toTime = this.timeRegion.toTime;
  }
}
