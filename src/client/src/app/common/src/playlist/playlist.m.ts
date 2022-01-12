export interface Playlist {
  id: number;
  name: string;
  interval: string
  items?: Array<PlaylistItem>
}

export interface PlaylistItem  {
  id?: number;
  title: string;
  value: number; 
  order: number;
}


