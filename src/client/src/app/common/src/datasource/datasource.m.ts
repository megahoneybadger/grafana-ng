import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TimeRange } from '../time/time.m';

export interface DataSource {
  id: number;
  orgId: number;
  
  isDefault: boolean;

  type: string;
  typeLogoUrl: string;
  
  name: string;
  url: string;
}

export interface IDataSourceSettingsEditor {
  form: FormGroup;
}

export interface Metrics{
  targets: MetricQuery[];
  dataSource: number;
}

export interface MetricQuery{
  
}

export interface IDataSourceDispatcher{
  dispatch( m: Metrics, range?: TimeRange ) : Observable<Series[]>;
}

export interface Series{
  name: string;
  columns: string[];
  tags?: string[];
  values: any[];
}






