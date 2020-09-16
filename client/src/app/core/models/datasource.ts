export class DataSource {
  id: number;
  orgId: number;
  
  isDefault: boolean;

  type: string;
  typeLogoUrl: string;
  
  name: string;
  url: string;
}

export enum DataSourcesLayoutMode {
  Grid = 'grid',
  Tiles = 'tiles',
}
