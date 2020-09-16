import { Component } from '@angular/core';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { ErrorMessages, Notes, ObservableEx } from 'uilib2';

import { DataSourceService } from 'src/app/core/services/datasource.s';
import { DataSource } from 'src/app/core/models/datasource';
import { BaseComponent } from '../../base/base-component';

@Component({
  selector: 'add-datasource',
  templateUrl: './add-datasource.html'
})
export class AddDataSourceComponent extends BaseComponent {
 
  constructor( ) {
    super();

    
  }
}
