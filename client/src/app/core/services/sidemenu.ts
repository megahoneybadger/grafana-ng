import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/nav';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SideMenuService{
  private _visible: boolean = true;
  private _opened: boolean = false;

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

  get items (): NavigationItem[]{
    return [
      this.getCreateItem(),
      this.getDashboardsItem(),
      this.getAlertItem(),
      this.getConfigItem()
    ];
  }

  constructor( /*Auth service will be here */){
  
  }

  toggle(){
    this._visible = !this._visible;

    this._visibleState.next( this._visible );
  }

  toggleMobile(){
    this._opened = !this._opened;

    this._openedState.next( this._opened );
  }

  private getCreateItem() : NavigationItem {
    return {
      text: "Create",
      icon: "plus",

      children: [
        {
          text:"Dashboard",
          url:"/d/new",
          icon: "gicon-dashboard-new"
        },
        {
          text:"Folder",
          url:"dashboards/f/new",
          icon: "gicon-folder-new "
        },
        {
          text:"Import",
          url:"snapshots",
          icon: "gicon-dashboard-import"
        }
      ]


    }
  }

  private getDashboardsItem() : NavigationItem {
    return {
      text: "Dashboards",
      subTitle: "Manage dashboards & folders",
      icon: "gicon-dashboard",

      children: [
        {
          id: "manage-dashboards",
          text: "Dashboards",
          url:"dashboards",
          icon: "gicon-manage"
        },
        {
          text:"Playlists",
          url:"dashboards/playlists",
          icon: "gicon-playlists"
        },
        {
          text:"Snapshots",
          url:"dashboards/snapshots",
          icon: "gicon-snapshots"
        }
      ]


    }
  }

  private getAlertItem() : NavigationItem {
    return {
      text: "Alerting",
      subTitle: "Alert rules & notifications",
      icon: "gicon-alert",

      children: [
        {
          id: "manage-dashboards",
          text: "Alert Rules",
          url:"alerting/list",
          icon: "gicon-alert-rules"
        },
        {
          text:"Notification Channels",
          url:"alerting/notifications",
          icon: "gicon-alert-notification-channel" 
        }
      ]
    }
  }

  private getConfigItem() : NavigationItem {
    return {
      text: "Configuration",
      icon: "gicon-cog",

      children: [
        {
          text: "Data Sourcess",
          url:"datasources",
          icon: 'gicon-datasources'
        },
        {
          text: "Users",
          url:"users",
          icon: 'gicon-user'
        },
        {
          text: "Teams",
          url:"teams",
          icon: 'gicon-team'
        },
        {
          text: "Preferences",
          url:"preferences",
          icon: 'gicon-preferences'
        },
        {
          text: "API Keys",
          url:"preferences",
          icon: 'gicon-apikeys'
        }
      ]
    }
  }
}