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
  uid: string;
  version: number;
  overwrite?: boolean;
}

export interface Dashboard {
  id: number;
  title: string;
  uid: string;
  version: number;
  data: any;
  meta?: DashboardMetadata;
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

export interface IRect{
  x: number;
	y: number;
	w: number;
  h: number;
}

export interface IRglRect extends IRect {
	i : string;
}

export interface Panel {
  id: string | number;
  rect: IRect;
  loading: boolean;

  type: any; // todo string
  widget: any;
}





