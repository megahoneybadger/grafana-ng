

import { AlertState } from '../alert/alert.m';
import { Annotation } from '../annotations/annotation.m';
import { DateTime } from '../time/time.m';
//import { ColorHelper } from 'uilib';


export interface SearchHit{
  id: number;
  title: string;
  uid: string;
  url: string;
  selected?: boolean;
}

export interface DashboardRawSearchHit extends SearchHit {
  tags: string[];
  type: string;
  
  folderId?: string;
  folderUid?: string;
  folderTitle?: string;
  folderUrl?: string;
}

export interface DashboardSearchHit extends SearchHit{
  folder: FolderSeachHit;
}

export interface FolderSeachHit  extends SearchHit{
  expanded: boolean;
  dashboards: DashboardSearchHit[];
  hideHeader?: boolean;
  icon?: string;
}

export interface Folder{
  id: number;
  orgId: number;
  uid: string;
  title: string;
  url: string;
  version: number;

  canAdmin?: boolean
  canEdit?: boolean
  hasAcl?: boolean;

  created?: any;
  updated?: any;
}

export interface UpdateFolderRequest{
  title: string;
  uid?: string;
  version?: number;
  overwrite?: boolean;
}

export interface Dashboard {
  id: number;
  title: string;
  description?: string;
  uid: string;
  url: string;
  version: number;
  data: any;
  meta?: DashboardMetadata;

  editable: boolean;

  panels: Panel[];
}

export interface DashboardMetadata{
  canAdmin: boolean;
  canEdit: boolean;
  canSave: boolean;
  canView: boolean;
  canStar: boolean;
  canShare: boolean;
  
  isStarred: boolean;
  tags: any;
  folder?: Folder;
}

export interface Tag {
  term: string;
  count: number;
}

export interface Rect{
  x: number;
	y: number;
	w: number;
  h: number;
}

export interface RglRect extends Rect {
	i : string;
}

export interface Panel {
  id: string | number;
  rect: Rect;

  title: string;
	description: string;
  transparent: boolean;

  loading: boolean;
  error?: string;
  
  type: any; // todo string
  widget: any;

  alertState?: AlertState;
  annotations: Annotation[];
  links: PanelLink[];
}

export interface DashboardRouteChange{
  uid: string;
  existing?: boolean;
  panelId?: number;
}

export interface DashboardSaveResult{
  id: number;
  uid: string;
  title: string ;
  url: string;
  status: any;
  version: number;
}

export interface DashboardAlertState{
  id: number;
  dashboardId: number;
  panelId: number;
  newStateDate: DateTime;
  state: AlertState;
}

export interface DashboardVersion{
  id: number;
  dashboardId: number;
  parentVersion: number;
  restoreFrom: number;
  version: number;
  createdBy: string;
  message: string;
  created: DateTime;
  data: any;

  selected?: boolean;
}

export interface DashboardRestoreRequest{
  version: number;
}

export interface DashboardRestoreReply{
  version: number;
  status: any;
}


export class AnnotationRule{
  name: string;
  enable: boolean = true;
  datasource: string;
  hide: boolean = true;
  color: string;
	queryType: AnnotationQueryType = AnnotationQueryType.Dashboard;
	limit: number = 100;
	matchAny: boolean = false;
  tags: string [] = [];
  buildIn: boolean = false;

  static get buildIn(): AnnotationRule{
    const r = new AnnotationRule();

    r.name = 'Annotations & Alerts';
    r.buildIn = true;
    r.datasource = "-- ED --";
    r.enable = true;
    r.hide = true;
    r.queryType = AnnotationQueryType.Dashboard;
    r.color = "#00D3FF"; //ColorHelper.DEFAULT_ANNOTATION_COLOR;// 

    return r;
  }
}

export enum AnnotationQueryType{
  Dashboard,
  Tags
}


export class DashboardLink{
  type: DashboardLinkType = DashboardLinkType.Dashboard;

  url: string;
  title: string;
  tooltip: string;
  icon: DashboardLinkIcon = DashboardLinkIcon.External;
  
  dropdown: boolean = false;
  tags: string [] = [];

  includeTimeRange: boolean = false;
  includeVariables: boolean = false;
  openInNewTab: boolean = false;
}


export class PanelLink{
  type: PanelLinkType = PanelLinkType.Dashboard;

  url: string;
  title: string;
  dashboard: string;
  
  urlParams: string
  includeTimeRange: boolean = false;
  includeVariables: boolean = false;
  openInNewTab: boolean = false;
}

export class DashboardLinkHelper{
  static getIcon( l: DashboardLink ) : string {
    switch( l.icon ){
      case DashboardLinkIcon.Info:
        return "fa-info"

      case DashboardLinkIcon.External:
        return "fa-external-link";

      case DashboardLinkIcon.Question:
        return "fa-question";

      case DashboardLinkIcon.Bolt:
        return "fa-bolt";

      case DashboardLinkIcon.Doc:
        return "fa-file-text-o";

      case DashboardLinkIcon.Dashboard:
        return "fa-th-large";

      case DashboardLinkIcon.Cloud:
        return "fa-cloud";
    }
  }
}

export enum DashboardLinkType{
  Dashboard = "dashboard",
  Link = "link"
}

export enum PanelLinkType{
  Dashboard = "dashboard",
  Absolute = "absolute"
}

export enum DashboardLinkIcon{
  External,
  Dashboard,
  Question,
  Info,
  Bolt,
  Doc,
  Cloud
}







