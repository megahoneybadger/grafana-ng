export interface NavigationItem {
  id?: string;

  text: string;
  url?: string;
  subTitle?: string;
  icon?: string;
  img?: string;
  
  active?: boolean;
  hide?: boolean;
  divider?: boolean;
  children?: NavigationItem[];
  breadcrumbs?: Array<{ title: string; url: string }>;
  target?: string;
  parent?: NavigationItem;
}

export interface PageNavigation {
  main: NavigationItem;
  node: NavigationItem;
}

export type NavigationIndex = { [s: string]: NavigationItem };

