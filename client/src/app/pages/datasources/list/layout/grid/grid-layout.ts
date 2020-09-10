import { Component, Input } from '@angular/core';
import { DataSource } from 'src/app/core/models/datasource';

@Component({
  selector: 'datasources-grid-layout',
  templateUrl: './grid-layout.html'
  
})
export class DataSourcesGridLayoutComponent {
  @Input() dataSources: DataSource[];
}
