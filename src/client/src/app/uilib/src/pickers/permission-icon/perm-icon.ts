import { Component, Input } from '@angular/core';
import { PermissionRule, PermissionTarget, Role } from 'common';

@Component({
  selector: 'ed-permission-icon',
  template: `
    <ed-avatar [key]="rule.team" *ngIf="rule.target==PermissionTargetRef.Team" >
    </ed-avatar>

    <ed-avatar [key]="rule.userEmail" *ngIf="rule.target==PermissionTargetRef.User" >
    </ed-avatar>

    <div [ngSwitch]="rule.role" style="font-size: 20px;">
      <i *ngSwitchCase="RoleRef.Viewer" class="gicon gicon-viewer"></i>

      <i *ngSwitchCase="RoleRef.Editor" class="gicon gicon-editor"></i>

      <i *ngSwitchCase="RoleRef.Admin" class="gicon gicon-shield"></i>
    </div>`
})
export class PermissionIconComponent{

  @Input() rule: PermissionRule; 
  
  PermissionTargetRef = PermissionTarget;
  RoleRef = Role;
}

