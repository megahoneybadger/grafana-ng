import { Component, Input } from '@angular/core';
import { DataSource } from 'src/app/core/models/datasource';

@Component({
  selector: 'datasources-tiles-layout',
  templateUrl: './tiles-layout.html'
})
export class DataSourcesTilesLayoutComponent {
  @Input() dataSources: DataSource[];
}
