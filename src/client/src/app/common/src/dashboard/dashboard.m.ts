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
}

export interface Folder{
  id: number;
  orgId: number;
  uid: string;

  title: string;

  canAdmin?: boolean
  canEdit?: boolean
  hasAcl?: boolean;

  created?: any;
  updated?: any;

  url: string;
}






