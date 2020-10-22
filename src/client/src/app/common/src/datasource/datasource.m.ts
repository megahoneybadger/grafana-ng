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

export interface IQuery{
  
}

export interface MetricsBuilder{
  build( metric: IQuery, range?: TimeRange ) : Observable<string>;
}

export interface Series{
  name: string;
  columns: string[];
  tags?: string[];
  values: any[];
}






