
export enum PluginType {
  DataSource = "Datasource",
  Widget = "Widget" 
}

export const PANEL_TOKEN = "panel";

export interface PluginExports {
  Datasource?: any;
  QueryCtrl?: any;
  ConfigCtrl?: any;
  AnnotationsQueryCtrl?: any;
  VariableQueryEditor?: any;
  ExploreQueryField?: any;
  ExploreStartPage?: any;

  // // Panel plugin
  // PanelCtrl?;
  // PanelComponent?: ComponentClass<PanelProps>;
  // PanelOptionsComponent: ComponentClass<PanelOptionsProps>;
}

export interface PanelPlugin {
  id: string;
  name: string;
  meta: any;
  hideFromList: boolean;
  module: string;
  baseUrl: string;
  info: any;
  sort: number;
  exports?: PluginExports;
}

export interface PluginMeta {
  id: string;
  name: string;
  info: PluginMetaInfo;
  includes: PluginInclude[];

  // Datasource-specific
  metrics?: boolean;
  logs?: boolean;
  explore?: boolean;
  annotations?: boolean;
}

export interface PluginInclude {
  type: string;
  name: string;
  path: string;
}

export interface PluginMetaInfo {
  author: {
    name: string;
    url: string;
  };
  description: string;
  links: string[];
  logos: {
    large: string;
    small: string;
  };
  screenshots: string;
  updated: string;
  version: string;
}

export interface Plugin {
  defaultNavUrl: string;
  enabled: boolean;
  hasUpdate: boolean;
  id: string;
  info: PluginMetaInfo;
  latestVersion: string;
  name: string;
  pinned: boolean;
  state: string;
  type: string;
  module:string;
}

export class PluginHelper{
  static getImageSource( p: Plugin, small: boolean = true ){
    let logo = small ? p?.info?.logos?.small : p?.info?.logos?.large;
    return logo ? `/assets/plugins/${p.id}/${logo}` : "";
  }
}

export type PluginErrorCallback = (message: string) => void;