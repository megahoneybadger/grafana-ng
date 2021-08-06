import { Injectable } from '@angular/core';
import { NavigationItem, NavigationIndex, PageNavigation } from './nav.m';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrgUser } from '../user/user.m';
import { Team } from '../team/team.m';
import { AvatarHelper } from '../avatar/avatar';
import { Plugin, PluginHelper } from '../plugins/plugin.m';
import { DataSource } from '../datasource/datasource.m';
import { Folder } from '../dashboard/dashboard.m';
import { AuthService } from '../security/auth.s';
import { Role } from '../security/security.m';


@Injectable()
export class NavigationProvider{
  static readonly LS_SIDEMENU_OPEN = 'ed.sidemenu';

  private user: OrgUser;

  private _visible: boolean = true;
  private _opened: boolean = false;
  private _index: NavigationIndex = {}
  private readonly UNKNOWN = "(unknown)";

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

  get isViewer(){
    return this.user?.role == Role.Viewer;
  }

  get isEditor(){
    return this.user?.role == Role.Editor;
  }

  get isAdmin(){
    return this.user?.role == Role.Admin;
  }

  get isRoot(){
    return this.user?.isRoot;
  }

  get root (): NavigationItem[]{

    const canCreate = true;
    const canRoot = this.user?.isRoot;
    const canAdmin = ( this.user?.role == Role.Admin );
    const canEdit = ( this.user?.role == Role.Editor );

    let res = [
      this.dashboards,
    ];

    if( canAdmin || canEdit ){
      res = [ this.create, ...res ];
    }

    if( canAdmin ){
      res.push( this.config );  
      res.push( this.alert );  
    }

    if( canRoot ){
      res.push( this.admin );  
    }

    return res;
  }

  get index() : NavigationIndex{
    return this._index;
  }

  constructor( private authService: AuthService ){

    authService.user$.subscribe( x => {
      this.user = x;
      this.buildIndex(this._index, this.root);
    });

    const flag = localStorage.getItem( NavigationProvider.LS_SIDEMENU_OPEN )
    this._visible = ( 'true' == flag || null == flag );
  }

  toggle(){
    this._visible = !this._visible;

    this._visibleState.next( this._visible );

    localStorage.setItem( NavigationProvider.LS_SIDEMENU_OPEN, this._visible.toString() );
  }

  toggleMobile(){
    this._opened = !this._opened;

    this._openedState.next( this._opened );
  }

  closeMobile(){
    if( this._opened ){
      this._opened = false;
      this._openedState.next( this._opened );
    }
  }

  get create() : NavigationItem {
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
          url:"dashboards/import",
          icon: "gicon gicon-dashboard-import",
          id: "import",
          subTitle: "Import dashboard from file or Grafana.com"
        }
      ]
    }
  }

  get alert() : NavigationItem {
    return {
      text: "Alerting",
      subTitle: "Alert rules & notifications",
      icon: "gicon-alert",
      id: "alerting",

      children: [
        {
          id: "alert-list",
          text: "Alert Rules",
          url:"/alerting/list",
          icon: "gicon gicon-alert-rules"
        },
        {
          id: "alert-channels",
          text:"Notification Channels",
          url:"/alerting/notifications",
          icon: "gicon gicon-alert-notification-channel" 
        }
      ]
    }
  }

  get config() : NavigationItem {
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
          text: "Plugins",
          url:"/plugins",
          icon: 'gicon gicon-plugins',
          id: "plugins"
        },
        {
          text: "Preferences",
          url:"/org",
          icon: 'gicon gicon-preferences',
          id: "org-settings",
        },
        {
          text: "API Keys",
          url:"/org/apikeys",
          icon: 'gicon gicon-apikeys',
          id: "apikeys"
        }
      ]
    }
  }

  get admin() : NavigationItem {
    return {
      text: "Server Admin",
      icon: "gicon gicon-shield",
      id: "admin",
      subTitle: "Manage all users & orgs",

      children: [
        {
          text: "Users",
          url:"/admin/users",
          icon: 'gicon gicon-user',
          id: "admin-users"
        },
        {
          text: "Orgs",
          url:"/admin/orgs",
          icon: 'gicon gicon-org',
          id: "admin-orgs"
        },
        {
          text: "Settings",
          url:"/admin/settings",
          icon: 'gicon gicon-preferences',
          id: "admin-settings"
        }
      ]
    }
  }

  get dashboards() : NavigationItem {
    return {
      text: "Dashboards",
      icon: "gicon gicon-dashboard",
      id: "admin",
      subTitle: "Manage dashboards & folders",

      children: [
        {
          text: "Manage",
          url:"/dashboards",
          icon: 'gicon gicon-manage',
          id: "manage-dashboards"
        },
        {
          text: "Playlists",
          url:"/playlists",
          icon: 'gicon gicon-playlists',
          id: "playlists"
        },
        {
          text: "Snapshots",
          url:"/snapshots",
          icon: 'gicon gicon-snapshots',
          id: "snapshots"
        },
        
      ]
    }
  }

  get import() : NavigationItem {
    return {
      text: "Import",
      icon: "gicon gicon-dashboard-import",
      id: "import",
      subTitle: "Import dashboard from file ",

      children: [
        {
          text: "",
          url:"/dashboards/import",
          id: "import-dashboard"
        },
     
        
      ]
    }
  }

  get help() : NavigationItem {
    return {
      text: "Help",
      icon: "gicon gicon-question",
      id: "help",
      subTitle: "easy dashboard v0.1",
    }
  }
 
  profile( u: OrgUser ) : NavigationItem {
    const imgUrl = AvatarHelper.getUrl( u.email );

    const text = u.name ?? u.login;

    return {
      text: text,
      subTitle: ( text != u.login ) ? u.login : '',
      img: imgUrl,
      id: "profile",

      children: [
        {
          text: "Preferences",
          url:"/profile",
          icon: 'gicon gicon-preferences',
          id: "profile-settings"
        },

        {
          text: "Change Password",
          url:"/profile/password",
          icon: 'fa fa-fw fa-lock',
          id: "change-password"
        },

        {
          text: "Sign Out",
          url:"/login",
          icon: 'fa fa-fw fa-sign-out',
          id: "sign-out"
        },
      
      ]
    }
  }

  team(team: Team): NavigationItem {
    return {
      img: team.avatarUrl,
      id: 'team-' + team.id,
      subTitle: 'Manage members & settings',
      url: '',
      text: team.name,
      breadcrumbs: [{ title: 'Teams', url: '/org/teams' }],
      children: [
        {
          active: false,
          icon: 'gicon gicon-team',
          id: `members`,
          text: 'Members',
          url: `/org/teams/edit/${team.id}/members`,
        },
        {
          active: false,
          icon: 'fa fa-fw fa-sliders',
          id: `settings`,
          text: 'Settings',
          url: `/org/teams/edit/${team.id}/settings`,
        },
      ],
    };
  }

  plugin(p: Plugin): NavigationItem {
    return {
      img: PluginHelper.getImageSource( p ),
      id: 'plugin-' + p.id,
      subTitle: p.info.author.name,
      url: '',
      text: p.name,
      breadcrumbs: [{ title: 'Plugins', url: '/plugins' }],
      children: [
        {
          active: false,
          icon: 'fa fa-fw fa-file-text-o',
          id: `plugin-details`,
          text: 'Readme',
          url: `/plugins/${p.id}/edit`,
        }
      ],
    };
  }

  datasource(p: Plugin, ds: DataSource ): NavigationItem {
    return {
      img:  PluginHelper.getImageSource( p ),
      id: 'ds',
      subTitle: `Type: ${p?.name ?? this.UNKNOWN}`,
      url: '',
      text: ds?.name ?? this.UNKNOWN,
      breadcrumbs: [{ title: 'Data Sources', url: '/datasources' }],
      children: [
        {
          active: false,
          icon: 'fa fa-fw fa-sliders',
          id: `settings`,
          text: 'Settings',
          url: `/datasources/edit/${ds?.id}`,
        },
      ],
    };
  }

  folder(f: Folder): NavigationItem {

    const content =  {
      active: false,
      icon: 'fa fa-fw fa-th-large',
      id: `folder-content`,
      text: 'Dashboards',
      url: f?.url,
    };

    const perms =  {
      active: false,
      icon: 'fa fa-lock',
      id: `folder-perms`,
      text: 'Permissions',
      url: `${f?.url}/permissions`,
    }

    const settings =  {
      active: false,
      icon: 'fa fa-cog',
      id: `folder-settings`,
      text: 'Settings',
      url: `${f?.url}/settings`,
    }

    let arr = [ content, perms, settings ];

    // if( this.isAdmin || this.isRoot ){
    //   arr.push( perms );
    // }

    // if( !this.isViewer || this.isRoot ){
    //   arr.push( settings );
    // }

    return {
      icon: 'fa fa-folder-open', 
      id: `folder-${f?.uid}`,
      subTitle: 'Manage folder dashboards & permissions',
      url: '',
      text: f?.title,
      breadcrumbs: [{ title: 'Dashboards', url: '/dashboards' }],
      children: arr,
    };
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

    return this.notFound;
  }

  static get notFound(): PageNavigation {
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