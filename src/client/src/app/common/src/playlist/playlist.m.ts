export interface Playlist {
  id: number;
  name: string;
  interval: string
  items?: Array<PlaylistItem>
}

export interface PlaylistItem  {
  id?: number;
  title: string;
  value: string; 
  order: number;
  type: PlaylistItemType;
}

export interface PlaylistDashboard{
  id: number;
  title: string;
  url: string;
  order: number;
}

export enum PlaylistItemType  {
  Id = "Id",
  Tag = "Tag"
}




