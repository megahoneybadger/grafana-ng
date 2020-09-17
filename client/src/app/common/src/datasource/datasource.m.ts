export interface DataSource {
  id: number;
  orgId: number;
  
  isDefault: boolean;

  type: string;
  typeLogoUrl: string;
  
  name: string;
  url: string;
}



