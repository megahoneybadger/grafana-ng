import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ContextMenuComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { OverrideItem, SeriesOverride, OverrideType } from '../../../chart.m';

@Component({
  selector: 'editor-series-override',
  templateUrl: './override.html'
})
export class SeriesOverrideEditorComponent extends BaseChartEditorComponent {

  @Input() override: SeriesOverride;
  @Input() index: number;

  @Output() removed = new EventEmitter<SeriesOverride>();

  cmItems = [];
  items = new Array<OverrideItem>();
	showColorPicker = false;
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
  
	ngOnInit() {
		
		this.cmItems = [
			this.createBoolItem("Lines", OverrideType.Lines),
			this.createNumberItem("Line fill", OverrideType.LineFill),
			this.createNumberItem("Line width", OverrideType.LineWidth),
			this.createBoolItem("Staircase", OverrideType.Staircase),
			this.createBoolItem("Dashes", OverrideType.Dashes),
			this.createNumberItem("Dash length", OverrideType.DashLength),
			this.createNumberItem("Dash space", OverrideType.DashSpace),
			this.createBoolItem("Points", OverrideType.Points),
			this.createNumberItem("Point radius", OverrideType.PointRadius, 0, 5),
			this.createBoolItem("Stack", OverrideType.Stack),
			this.createColorItem("Color", OverrideType.Color),

			this.createNumberItem("Y-axis", OverrideType.YAxis, 1, 2),
			this.createNumberItem("Z-index", OverrideType.ZIndex, -3, 3),
			this.createBoolItem("Legend", OverrideType.Legend),
			this.createBoolItem("Hide in tooltip", OverrideType.HideInTooltip),
		]

		ContextMenuComponent.wrapItems( this.cmItems, x => this.onOptionSelected( x.item ) )

		this.rebuildItems();
  }
  
  rebuildItems() {
		const items = new Array<OverrideItem>();

		for (var prop in this.override) {
			if (prop != 'alias') {
				var type = this.getOverrideType(prop);

				items.push(new OverrideItem(type, this.override[prop]))
			}
		}

    this.items = items;
    this.update();
  }

	createBoolItem(header: string, type: OverrideType) {
		return {
			label: header, items: [
				{ label: 'true', value: true, type: type },
				{ label: 'false', value: false, type: type },
			]
		}
	}

	createNumberItem(header: string, type: OverrideType, from: number = 0, to: number = 10) {
		const item = { label: header, items: [] };

		for (var i = from; i <= to; ++i) {
			item.items.push({ label: i, value: i, type: type })
		}

		return item;
	}

	createColorItem(header: string, type: OverrideType)  {
		return {
      label: header,
      type: type,
      items: [
				{ label: "change", type: type }
			]
		};
	}


	onOptionSelected(item) {
		if (item.type == undefined) {
			return;
		}

		if (OverrideType.Color == item.type) {
			this.showColorPicker = true
			event.stopPropagation();
		} else {
			this.override[this.getPropertyName(item)] = item.value;
			this.rebuildItems();
		}
	}

	onRemoveItem(item: OverrideItem) {
		delete this.override[this.getPropertyName(item)];
		this.rebuildItems();
	}

	getItemHeader(item: OverrideItem) {
		return OverrideType[item.type]
			.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
			.toLowerCase();
	}

	getPropertyName(item) {
		return OverrideType[item.type].replace(/^\w/, c => c.toLowerCase())
	}

	getOverrideType(prop) {
		return OverrideType[prop.replace(/^\w/, c => c.toUpperCase())];
	}

	onColorSelected(color) {
		var item = this.createColorItem("Color", OverrideType.Color);

		this.override[this.getPropertyName(item)] = color;
		this.rebuildItems();
	}

}
