import { Injectable } from '@angular/core';
import { NavigationItem, NavigationIndex, PageNavigation } from '../models/nav';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NavigationProvider{
  private _visible: boolean = true;
  private _opened: boolean = false;
  private _index: NavigationIndex = {}

  private _visibleState: BehaviorSubject<boolean> = new BehaviorSubject(this._visible);
  public readonly visible$: Observable<boolean> = this._visibleState.asObservable();

  private _openedState: BehaviorSubject<boolean> = new BehaviorSubject(this._opened);
  public readonly opened$: Observable<boolean> = this._openedState.asObservable();

  get visible() : boolean {
    return this._visible;
  }

  get opened(){
    return this._opened;
  }

  get root (): NavigationItem[]{
    return [
      this.create,
      this.dashboards,
      this.alert,
      this.config
    ];
  }

  get index() : NavigationIndex{
    return this._index;
  }

  constructor( /*Auth service will be here */){
    this.buildIndex(this._index, this.root);

    //console.log( this._index );
  }

  toggle(){
    this._visible = !this._visible;

    this._visibleState.next( this._visible );
  }

  toggleMobile(){
    this._opened = !this._opened;

    this._openedState.next( this._opened );
  }

  private get create() : NavigationItem {
    return {
      text: "Create",
      icon: "fa fa-plus",
      id: "create",

      children: [
        {
          text:"Dashboard",
          url:"/d/new",
          icon: "gicon gicon-dashboard-new"
        },
        {
          text:"Folder",
          url:"dashboards/f/new",
          icon: "gicon gicon-folder-new",
          id: "folder",
          subTitle: "Create a new folder to organize your dashboards"
        },
        {
          text:"Import",
          url:"snapshots",
          icon: "gicon gicon-dashboard-import",
          id: "import",
          subTitle: "Import dashboard from file or Grafana.com"
        }
      ]


    }
  }

  private get dashboards() : NavigationItem {
    return {
      text: "Dashboards",
      subTitle: "Manage dashboards & folders",
      icon: "gicon-dashboard",
      id: "dashboards",

      children: [
        {
          id: "manage-dashboards",
          text: "Dashboards",
          url:"dashboards",
          icon: "gicon gicon-manage"
        },
        {
          text:"Playlists",
          url:"dashboards/playlists",
          icon: "gicon gicon-playlists",
          id: "playlists"
        },
        {
          text:"Snapshots",
          url:"dashboards/snapshots",
          icon: "gicon gicon-snapshots",
          id: "snapshots"
        }
      ]


    }
  }

  private get alert() : NavigationItem {
    return {
      text: "Alerting",
      subTitle: "Alert rules & notifications",
      icon: "gicon-alert",
      id: "alerting",

      children: [
        {
          id: "alert-list",
          text: "Alert Rules",
          url:"alerting/list",
          icon: "gicon gicon-alert-rules"
        },
        {
          id: "channels",
          text:"Notification Channels",
          url:"alerting/notifications",
          icon: "gicon gicon-alert-notification-channel" 
        }
      ]
    }
  }

  private get config() : NavigationItem {
    return {
      text: "Configuration",
      icon: "gicon gicon-cog",
      id: "cfg",
      subTitle: "Organization: Main Org.",

      children: [
        {
          text: "Data Sources",
          url:"/datasources",
          icon: 'gicon gicon-datasources',
          id: "datasources"
        },
        {
          text: "Users",
          url:"/org/users",
          icon: 'gicon gicon-user',
          id: "users"
        },
        {
          text: "Teams",
          url:"/org/teams",
          icon: 'gicon  gicon-team',
          id: "teams"
        },
        {
          text: "Preferences",
          url:"/preferences",
          icon: 'gicon gicon-preferences',
          id: "org-settings",
        },
        {
          text: "API Keys",
          url:"apikeys",
          icon: 'gicon gicon-apikeys',
          id: "apikeys"
        }
      ]
    }
  }

  private buildIndex(navIndex: NavigationIndex, children: NavigationItem[], parent?: NavigationItem) {
    for (const node of children) {
      navIndex[node.id] = {
        ...node,
        parent: parent,
      };
  
      if (node.children) {
        this.buildIndex(navIndex, node.children, node);
      }
    }
  }
}


export class NavigationHelper{
  static buildIndex( root: NavigationItem ){
    const navIndex = {};

    for (const node of root.children) {
      navIndex[node.id] = {
        ...node,
        parent: root,
      };
    }

    return navIndex;
  }

  static createNavigationFromNode( item: NavigationItem, id: string): PageNavigation {
    const index = this.buildIndex( item );
    return this.createNavigationFromIndex( index, id )
  }
  
  static createNavigationFromIndex(navIndex: NavigationIndex, id: string, fallback?: PageNavigation): PageNavigation {
    if (navIndex[id]) {
      const node = navIndex[id];
      const main = {
        ...node.parent,
      };

      main.children = main.children.map(item => {
        return {
          ...item,
          active: item.url === node.url,
        };
      });

      return {
        node: node,
        main: main,
      };
    }

    if (fallback) {
      return fallback;
    }

    return this.buildNotFound();
  }

  static buildNotFound(): PageNavigation {
    const node: NavigationItem = {
      id: 'not-found',
      text: 'Page not found',
      icon: 'fa fa-fw fa-warning',
      subTitle: '404 Error',
      url: 'not-found',
    };
  
    return {
      node: node,
      main: node,
    };
  }

}